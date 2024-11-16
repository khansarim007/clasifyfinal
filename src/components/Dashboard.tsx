import React from 'react';
import { Inbox, FileText, Users, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex-1 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Emails</p>
              <h3 className="text-2xl font-bold">1,234</h3>
            </div>
            <Inbox className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Client Communications</p>
              <h3 className="text-2xl font-bold">456</h3>
            </div>
            <Users className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Invoices</p>
              <h3 className="text-2xl font-bold">89</h3>
            </div>
            <FileText className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Needs Attention</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Recent Emails</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border-b pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Project Update</h3>
                  <p className="text-gray-600 text-sm">From: client@example.com</p>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <p className="text-gray-600 mt-2">Latest updates regarding the ongoing project development...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;