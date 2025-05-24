import { useState } from 'react';
import { 
  Search, Plus, Bell, Clock, PinIcon
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Role } from '../types';
import { mockAnnouncements } from '../data/announcements';

const Announcements = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  
  const isAdmin = user?.role === Role.Admin;
  const isITSupport = user?.role === Role.ITSupport || isAdmin;
  
  // Filter announcements based on search term
  const filteredAnnouncements = mockAnnouncements.filter(announcement => 
    announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    announcement.content.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Sort announcements: first by important flag, then by date
  const sortedAnnouncements = [...filteredAnnouncements].sort((a, b) => {
    if (a.important && !b.important) return -1;
    if (!a.important && b.important) return 1;
    return b.createdAt.getTime() - a.createdAt.getTime();
  });
  
  return (
    <div className="fade-in">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Announcements</h1>
        
        {isITSupport && (
          <button className="mt-4 sm:mt-0 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <Plus className="mr-2 h-4 w-4" />
            New Announcement
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="space-y-6">
            {/* Search */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full rounded-md border border-gray-300 dark:border-gray-600 pl-10 pr-3 py-2 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Search announcements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {/* Filters */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Filters</h3>
              <ul className="space-y-1">
                <li>
                  <button className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-md bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200">
                    <span>All Announcements</span>
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs dark:bg-gray-700">
                      {mockAnnouncements.length}
                    </span>
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                    <span>Important</span>
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs dark:bg-gray-700">
                      {mockAnnouncements.filter(a => a.important).length}
                    </span>
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                    <span>This Week</span>
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs dark:bg-gray-700">
                      {mockAnnouncements.filter(a => {
                        const oneWeekAgo = new Date();
                        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
                        return a.createdAt >= oneWeekAgo;
                      }).length}
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Announcement List */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                Latest Announcements
              </h2>
            </div>
            
            {sortedAnnouncements.length > 0 ? (
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {sortedAnnouncements.map(announcement => (
                  <div key={announcement.id} className={`
                    px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-750
                    ${announcement.important ? 'bg-red-50 dark:bg-red-900/10' : ''}
                  `}>
                    <div>
                      <div className="flex items-start">
                        {announcement.important && (
                          <span className="mr-2 mt-0.5 flex-shrink-0 rounded-full bg-red-100 p-1 dark:bg-red-900">
                            <svg className="h-1.5 w-1.5 fill-red-500 dark:fill-red-300" viewBox="0 0 6 6">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </span>
                        )}
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className={`text-base font-medium ${
                              announcement.important 
                                ? 'text-red-600 dark:text-red-400' 
                                : 'text-gray-900 dark:text-white'
                            }`}>
                              {announcement.title}
                            </h3>
                            {announcement.important && (
                              <PinIcon className="h-4 w-4 text-red-500 dark:text-red-400" />
                            )}
                          </div>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            {announcement.content}
                          </p>
                          <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
                            <Clock className="mr-1 h-3.5 w-3.5" />
                            <span>
                              Posted on {announcement.createdAt.toLocaleDateString()} by {announcement.createdBy}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-6 py-12 text-center">
                <Bell className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No announcements found</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {searchTerm 
                    ? `No results found for "${searchTerm}"`
                    : 'There are no announcements yet.'}
                </p>
                {isITSupport && (
                  <div className="mt-6">
                    <button className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      <Plus className="mr-2 h-4 w-4" />
                      New Announcement
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;