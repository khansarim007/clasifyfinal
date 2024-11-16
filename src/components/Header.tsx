import React from 'react';
import { Mail, Menu, X, Play } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const location = useLocation();

  const isAuthPage = location.pathname.includes('/login') || location.pathname.includes('/signup');

  return (
    <>
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 shadow-lg">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="transform transition-all duration-300 group-hover:scale-110">
                <Mail className="h-6 w-6 text-indigo-600 transform rotate-0 group-hover:rotate-12" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Clasify
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-gray-600 hover:text-gray-900 transform hover:scale-105 transition">
                Features
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transform hover:scale-105 transition">
                Pricing
              </Link>
              <button 
                onClick={() => setShowVideo(true)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transform hover:scale-105 transition"
              >
                <Play className="h-4 w-4" />
                <span>Watch Demo</span>
              </button>
              {!isAuthPage && (
                <Link 
                  to="/login" 
                  className="relative overflow-hidden px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white transform hover:scale-105 transition duration-300 shadow-[0_5px_15px_rgba(79,70,229,0.4)] hover:shadow-[0_8px_20px_rgba(79,70,229,0.6)]"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Link>
              )}
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <Link to="/features" className="block py-2 text-gray-600 hover:text-gray-900">Features</Link>
              <Link to="/pricing" className="block py-2 text-gray-600 hover:text-gray-900">Pricing</Link>
              <button 
                onClick={() => setShowVideo(true)}
                className="flex items-center space-x-2 py-2 text-gray-600 hover:text-gray-900"
              >
                <Play className="h-4 w-4" />
                <span>Watch Demo</span>
              </button>
              {!isAuthPage && (
                <Link 
                  to="/login" 
                  className="block w-full text-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4 py-2 rounded-xl"
                >
                  Get Started
                </Link>
              )}
            </div>
          )}
        </nav>
      </header>

      {/* Demo Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full relative">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Product Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}