import React from 'react';
import { Mail, FileText, Users, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Sidebar = () => {
  const navigate = useNavigate();
  const signOut = useAuthStore((state) => state.signOut);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="w-64 bg-indigo-900 text-white h-screen p-6">
      <div className="flex items-center mb-8">
        <Mail className="w-8 h-8 mr-2" />
        <h1 className="text-2xl font-bold">Clasify</h1>
      </div>
      
      <nav className="space-y-4">
        <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-indigo-800">
          <FileText className="w-5 h-5" />
          <span>Inbox</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-indigo-800">
          <Users className="w-5 h-5" />
          <span>Clients</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-indigo-800">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </a>
      </nav>
      
      <div className="absolute bottom-6">
        <button 
          onClick={handleSignOut}
          className="flex items-center space-x-3 p-2 rounded hover:bg-indigo-800 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;