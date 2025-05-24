import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Building, Calendar, Settings, Shield, Key } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  
  if (!user) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Profile</h1>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Profile Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex flex-col items-center">
              <img 
                className="h-24 w-24 rounded-full mb-4" 
                src={user.avatar} 
                alt={user.name} 
              />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{user.role.replace('_', ' ')}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{user.department}</p>
              
              <div className="mt-4 w-full pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <Settings className="mr-2 h-4 w-4" />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('profile')}
                className={`
                  w-full flex items-center px-3 py-2 text-sm rounded-md 
                  ${activeTab === 'profile' 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }
                `}
              >
                <User className="mr-3 h-5 w-5" />
                Profile Information
              </button>
              
              <button
                onClick={() => setActiveTab('security')}
                className={`
                  w-full flex items-center px-3 py-2 text-sm rounded-md 
                  ${activeTab === 'security' 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }
                `}
              >
                <Shield className="mr-3 h-5 w-5" />
                Security
              </button>
              
              <button
                onClick={() => setActiveTab('preferences')}
                className={`
                  w-full flex items-center px-3 py-2 text-sm rounded-md 
                  ${activeTab === 'preferences' 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }
                `}
              >
                <Settings className="mr-3 h-5 w-5" />
                Preferences
              </button>
            </nav>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="lg:col-span-3">
          {activeTab === 'profile' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Profile Information</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                    <div className="mt-1 flex items-center rounded-md border border-gray-300 bg-gray-50 px-3 py-2 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                      <User className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="block w-full text-gray-700 dark:text-gray-300">{user.name}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                    <div className="mt-1 flex items-center rounded-md border border-gray-300 bg-gray-50 px-3 py-2 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                      <Mail className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="block w-full text-gray-700 dark:text-gray-300">{user.email}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Department</label>
                    <div className="mt-1 flex items-center rounded-md border border-gray-300 bg-gray-50 px-3 py-2 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                      <Building className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="block w-full text-gray-700 dark:text-gray-300">{user.department}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
                    <div className="mt-1 flex items-center rounded-md border border-gray-300 bg-gray-50 px-3 py-2 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                      <Shield className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="block w-full text-gray-700 dark:text-gray-300 capitalize">{user.role.replace('_', ' ')}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Join Date</label>
                    <div className="mt-1 flex items-center rounded-md border border-gray-300 bg-gray-50 px-3 py-2 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                      <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="block w-full text-gray-700 dark:text-gray-300">{user.joinDate.toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <Settings className="mr-2 h-4 w-4" />
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'security' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Security Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Change Password</h3>
                  <div className="mt-3 space-y-4">
                    <div>
                      <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="current-password"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        placeholder="••••••••"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        New Password
                      </label>
                      <input
                        type="password"
                        id="new-password"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        placeholder="••••••••"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        id="confirm-password"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        placeholder="••••••••"
                      />
                    </div>
                    
                    <div>
                      <button className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <Key className="mr-2 h-4 w-4" />
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Two-Factor Authentication</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Add an extra layer of security to your account by enabling two-factor authentication.
                  </p>
                  <div className="mt-4">
                    <button className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600 dark:hover:bg-gray-600">
                      <Shield className="mr-2 h-4 w-4" />
                      Enable 2FA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'preferences' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Preferences</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Notifications</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Manage how you receive notifications and alerts.
                  </p>
                  
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="announcements"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="announcements" className="font-medium text-gray-700 dark:text-gray-300">
                          Announcements
                        </label>
                        <p className="text-gray-500 dark:text-gray-400">
                          Receive notifications when new company announcements are posted.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="project-updates"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="project-updates" className="font-medium text-gray-700 dark:text-gray-300">
                          Project Updates
                        </label>
                        <p className="text-gray-500 dark:text-gray-400">
                          Receive notifications about updates to projects you're assigned to.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="document-updates"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="document-updates" className="font-medium text-gray-700 dark:text-gray-300">
                          Document Updates
                        </label>
                        <p className="text-gray-500 dark:text-gray-400">
                          Receive notifications when IT documentation is updated.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Preferences</h3>
                  
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="daily-digest"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="daily-digest" className="font-medium text-gray-700 dark:text-gray-300">
                          Daily Digest
                        </label>
                        <p className="text-gray-500 dark:text-gray-400">
                          Receive a daily email summary of activities and updates.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="important-alerts"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="important-alerts" className="font-medium text-gray-700 dark:text-gray-300">
                          Important Alerts
                        </label>
                        <p className="text-gray-500 dark:text-gray-400">
                          Receive email notifications for critical updates and announcements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;