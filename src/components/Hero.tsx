import React from 'react';
import { Mail, Sparkles, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="pt-24 pb-8 md:pt-32 md:pb-16 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-8 shadow-[0_5px_15px_rgba(79,70,229,0.2)] transform hover:scale-105 transition duration-300">
            <Sparkles className="h-4 w-4 text-indigo-600 mr-2 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              AI-Powered Email Management
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Organize Your Emails with{' '}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                AI Magic
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-indigo-200 transform translate-y-2" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,0 Q50,12 100,0" fill="currentColor" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Smart email categorization for freelancers. Save 5+ hours weekly with our AI-powered email management.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              to="/signup" 
              className="group w-full sm:w-auto relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white transform hover:scale-105 transition duration-300 shadow-[0_5px_15px_rgba(79,70,229,0.4)] hover:shadow-[0_8px_20px_rgba(79,70,229,0.6)]"
            >
              <span className="relative z-10 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            
            <button className="w-full sm:w-auto bg-white text-gray-700 px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-indigo-200 transition flex items-center justify-center group transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Play className="h-5 w-5 mr-2 text-indigo-600 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            {['14-day free trial', 'No credit card required', 'Cancel anytime'].map((feature) => (
              <div key={feature} className="flex items-center bg-white px-4 py-2 rounded-full shadow-md transform hover:scale-105 transition">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}