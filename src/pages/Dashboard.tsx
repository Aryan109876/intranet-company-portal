import { useAuth } from '../context/AuthContext';
import { Role } from '../types';
import { Clock, Users, FileText, Briefcase, Bell, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { mockAnnouncements } from '../data/announcements';
import { mockProjects } from '../data/projects';

const Dashboard = () => {
  const { user } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const isAdmin = user?.role === Role.Admin;
  const isITSupport = user?.role === Role.ITSupport || isAdmin;
  
  // Get assigned projects for the current user
  const assignedProjects = mockProjects.filter(project => 
    project.assignedTo.includes(user?.id || '')
  );
  
  // Get recent announcements
  const recentAnnouncements = [...mockAnnouncements]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 3);

  return (
    <div className="space-y-6 fade-in">
      {/* Welcome Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Welcome back, {user?.name}</h1>
            <p className="mt-2 text-blue-100">
              {user?.role === Role.Admin && 'Administrator'}
              {user?.role === Role.ITSupport && 'IT Support'}
              {user?.role === Role.Employee && 'Employee'} • {user?.department}
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center bg-white/10 px-4 py-2 rounded-lg">
            <Clock className="h-5 w-5 mr-2" />
            <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            <span className="mx-2">•</span>
            <span>{currentTime.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' })}</span>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Staff</h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">24</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 dark:bg-green-900 p-3">
              <FileText className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">IT Documents</h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">42</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3">
              <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Projects</h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">12</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="rounded-full bg-amber-100 dark:bg-amber-900 p-3">
              <Bell className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Announcements</h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">7</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Your Projects */}
        <section className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Your Projects</h2>
            <Link to="/projects" className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {assignedProjects.length > 0 ? (
              assignedProjects.slice(0, 5).map(project => (
                <div key={project.id} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-750">
                  <Link to={`/projects/${project.id}`} className="block">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">{project.title}</h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{project.description}</p>
                      </div>
                      <div>
                        <span className={`
                          inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                          ${project.status === 'in_progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : ''}
                          ${project.status === 'not_started' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' : ''}
                          ${project.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
                          ${project.status === 'on_hold' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : ''}
                        `}>
                          {project.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Due: {project.dueDate.toLocaleDateString()}</span>
                      <span className={`
                        font-medium
                        ${project.priority === 'low' ? 'text-green-600 dark:text-green-400' : ''}
                        ${project.priority === 'medium' ? 'text-blue-600 dark:text-blue-400' : ''}
                        ${project.priority === 'high' ? 'text-amber-600 dark:text-amber-400' : ''}
                        ${project.priority === 'critical' ? 'text-red-600 dark:text-red-400' : ''}
                      `}>
                        {project.priority.charAt(0).toUpperCase() + project.priority.slice(1)} Priority
                      </span>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="px-6 py-12 text-center">
                <p className="text-gray-500 dark:text-gray-400">You don't have any assigned projects</p>
                <Link to="/projects" className="mt-2 inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Browse all projects
                </Link>
              </div>
            )}
          </div>
        </section>
        
        {/* Recent Announcements */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Announcements</h2>
            <Link to="/announcements" className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {recentAnnouncements.map(announcement => (
              <div key={announcement.id} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-750">
                <Link to="/announcements" className="block">
                  <div className="flex items-start">
                    {announcement.important && (
                      <span className="mr-2 mt-0.5 flex-shrink-0 rounded-full bg-red-100 p-1 dark:bg-red-900">
                        <svg className="h-1.5 w-1.5 fill-red-500 dark:fill-red-300" viewBox="0 0 6 6">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </span>
                    )}
                    <div>
                      <h3 className={`text-sm font-medium ${announcement.important ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-white'}`}>
                        {announcement.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{announcement.content}</p>
                      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        {announcement.createdAt.toLocaleDateString()} • {announcement.createdBy}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;