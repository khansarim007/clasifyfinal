import React from 'react';
import { Mail, Clock, Tag, Shield, Bell, Settings } from 'lucide-react';

const features = [
  {
    icon: Tag,
    title: 'Smart Categorization',
    description: 'AI-powered email sorting into customizable categories like Client Communication, Invoices, and Proposals.'
  },
  {
    icon: Clock,
    title: 'Time-Saving Automation',
    description: 'Automatic email organization that works in the background, saving you hours of manual sorting.'
  },
  {
    icon: Shield,
    title: 'Secure Integration',
    description: 'Bank-level security with OAuth integration for Gmail and Outlook accounts.'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Get notified about important emails based on your preferences and patterns.'
  },
  {
    icon: Settings,
    title: 'Custom Rules',
    description: 'Create personalized rules for even more precise email categorization.'
  },
  {
    icon: Mail,
    title: 'Bulk Actions',
    description: 'Manage multiple emails at once with powerful bulk actions and filters.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Stay Organized
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed specifically for freelancers to manage their email communication effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}