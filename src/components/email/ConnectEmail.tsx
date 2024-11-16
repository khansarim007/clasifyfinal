import React from 'react';
import { Mail, AlertCircle } from 'lucide-react';
import { useEmailStore } from '../../store/emailStore';

const GMAIL_CLIENT_ID = import.meta.env.VITE_GMAIL_CLIENT_ID;
const REDIRECT_URI = `${window.location.origin}/auth/gmail/callback`;

export default function ConnectEmail() {
  const { platforms, connecting, error, setError } = useEmailStore();

  const handleGmailConnect = () => {
    const scope = 'https://www.googleapis.com/auth/gmail.readonly';
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GMAIL_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${scope}&access_type=offline&prompt=consent`;
    window.location.href = authUrl;
  };

  const handleOutlookConnect = () => {
    // Implement Outlook OAuth flow
    setError('Outlook integration coming soon');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Connect Email Platforms</h2>

      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span>{error}</span>
        </div>
      )}

      <div className="space-y-4">
        <button
          onClick={handleGmailConnect}
          disabled={platforms.some((p) => p.name === 'Gmail') || connecting}
          className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Mail className="h-5 w-5 mr-2 text-red-500" />
          <span>{platforms.some((p) => p.name === 'Gmail') ? 'Gmail Connected' : 'Connect Gmail'}</span>
        </button>

        <button
          onClick={handleOutlookConnect}
          disabled={platforms.some((p) => p.name === 'Outlook') || connecting}
          className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Mail className="h-5 w-5 mr-2 text-blue-500" />
          <span>{platforms.some((p) => p.name === 'Outlook') ? 'Outlook Connected' : 'Connect Outlook'}</span>
        </button>
      </div>

      {platforms.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Connected Accounts</h3>
          <div className="space-y-2">
            {platforms.map((platform) => (
              <div key={platform.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Mail className={`h-5 w-5 mr-2 ${platform.name === 'Gmail' ? 'text-red-500' : 'text-blue-500'}`} />
                  <span>{platform.email}</span>
                </div>
                <button
                  onClick={() => useEmailStore.getState().removePlatform(platform.id)}
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  Disconnect
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}