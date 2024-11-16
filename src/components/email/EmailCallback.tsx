import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEmailStore } from '../../store/emailStore';
import { supabase } from '../../lib/supabase';

export default function EmailCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setConnecting, addPlatform, setError } = useEmailStore();

  useEffect(() => {
    const handleGmailCallback = async () => {
      const code = searchParams.get('code');
      if (!code) {
        setError('Authorization code not found');
        navigate('/dashboard');
        return;
      }

      setConnecting(true);
      try {
        // Store the authorization code in Supabase
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('User not authenticated');

        const { error } = await supabase.from('email_connections').insert({
          user_id: user.id,
          platform: 'Gmail',
          auth_code: code,
          created_at: new Date().toISOString(),
        });

        if (error) throw error;

        addPlatform({
          id: Date.now().toString(),
          name: 'Gmail',
          connected: true,
          email: user.email,
        });

        navigate('/dashboard');
      } catch (error) {
        console.error('Error connecting Gmail:', error);
        setError('Failed to connect Gmail account');
        navigate('/dashboard');
      } finally {
        setConnecting(false);
      }
    };

    handleGmailCallback();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  );
}