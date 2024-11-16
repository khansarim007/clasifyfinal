import React, { useState } from 'react';
import { 
  Inbox, FileText, Users, AlertCircle, Twitter, 
  Star, Archive, Trash2, Send
} from 'lucide-react';

const mockEmails = [
  {
    id: 1,
    subject: 'Website Redesign Project Proposal',
    from: 'client@company.com',
    preview: 'I would like to discuss the possibility of redesigning our company website...',
    category: 'Client',
    priority: 'high',
    date: '2024-03-15',
    needsAction: true,
    actionType: 'tweet'
  },
  {
    id: 2,
    subject: 'Invoice #2024-03',
    from: 'billing@freelance.com',
    preview: 'Your monthly invoice for March 2024 services...',
    category: 'Invoice',
    priority: 'medium',
    date: '2024-03-14'
  },
  {
    id: 3,
    subject: 'New Project Opportunity',
    from: 'leads@network.com',
    preview: 'We have an exciting new project that matches your skills...',
    category: 'Lead',
    priority: 'high',
    date: '2024-03-13',
    needsAction: true,
    actionType: 'tweet'
  }
];

const categories = [
  { name: 'All', icon: Inbox, count: 45 },
  { name: 'Client', icon: Users, count: 12 },
  { name: 'Invoice', icon: FileText, count: 8 },
  { name: 'Lead', icon: Star, count: 15 },
  { name: 'Archive', icon: Archive, count: 234 }
];

export default function EmailDashboard() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showTweetModal, setShowTweetModal] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const filteredEmails = mockEmails.filter(email => 
    selectedCategory === 'All' || email.category === selectedCategory
  );

  const handleTweetAction = (email) => {
    setSelectedEmail(email);
    setShowTweetModal(true);
  };

  return (
    <div className="flex-1 bg-gray-50">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Email Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center">
              <Send className="h-4 w-4 mr-2" />
              Compose
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Categories</h2>
            <nav className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`w-full flex items-center justify-between p-2 rounded-lg transition ${
                    selectedCategory === category.name
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <category.icon className="h-5 w-5 mr-3" />
                    <span>{category.name}</span>
                  </div>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Email List */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredEmails.map((email) => (
                <div key={email.id} className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className={`w-2 h-2 rounded-full mr-2 ${
                          email.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                        }`} />
                        <h3 className="font-semibold text-gray-900">{email.subject}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{email.from}</p>
                      <p className="text-gray-600">{email.preview}</p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      {email.needsAction && (
                        <button
                          onClick={() => handleTweetAction(email)}
                          className="text-blue-500 hover:bg-blue-50 p-2 rounded-full transition"
                        >
                          <Twitter className="h-5 w-5" />
                        </button>
                      )}
                      <button className="text-gray-400 hover:text-gray-600">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">{email.date}</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      {email.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tweet Modal */}
      {showTweetModal && selectedEmail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Share on Twitter</h3>
            <textarea
              className="w-full p-3 border rounded-lg mb-4"
              rows={4}
              defaultValue={`Exciting update: ${selectedEmail.subject.substring(0, 80)}...`}
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowTweetModal(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle tweet posting here
                  setShowTweetModal(false);
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}