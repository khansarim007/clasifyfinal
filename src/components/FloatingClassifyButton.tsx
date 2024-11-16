import React from 'react';
import { Wand2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function FloatingClassifyButton() {
  const location = useLocation();
  const isAuthPage = location.pathname.includes('/login') || location.pathname.includes('/signup');

  if (isAuthPage) return null;

  return (
    <button 
      className="fixed bottom-8 right-8 bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-4 rounded-full shadow-[0_5px_15px_rgba(79,70,229,0.4)] hover:shadow-[0_8px_20px_rgba(79,70,229,0.6)] transform hover:scale-110 transition-all duration-300 group z-50"
      onClick={() => {/* Add classify action */}}
    >
      <Wand2 className="h-6 w-6 group-hover:rotate-12 transition-transform" />
    </button>
  );
}