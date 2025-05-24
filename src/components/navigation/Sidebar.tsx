import { NavLink } from 'react-router-dom';
import { X, LayoutDashboard, FileText, Briefcase, Bell, User, LogOut, Settings, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Role } from '../../types';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const { user, logout } = useAuth();
  
  const isAdmin = user?.role === Role.Admin;
  const isITSupport = user?.role === Role.ITSupport || isAdmin;
  
  return (
    <div className="flex h-full flex-col bg-white dark:bg-gray-800">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-5">
        <div className="flex items-center">
          <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8.25V15.75C3 16.9926 3.79035 18 4.76471 18H19.2353C20.2096 18 21 16.9926 21 15.75V8.25C21 7.00736 20.2096 6 19.2353 6H4.76471C3.79035 6 3 7.00736 3 8.25Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M7.5 11.25H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M7.5 14.25H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">Company Portal</span>
        </div>
        <button onClick={onClose} className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-1 space-y-1 px-2 py-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => `
            flex items-center px-3 py-2 rounded-md text-sm font-medium
            ${isActive 
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
            }
          `}
          end
        >
          <LayoutDashboard className="mr-3 h-5 w-5" />
          Dashboard
        </NavLink>
        
        <NavLink 
          to="/documents" 
          className={({ isActive }) => `
            flex items-center px-3 py-2 rounded-md text-sm font-medium
            ${isActive 
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
            }
          `}
        >
          <FileText className="mr-3 h-5 w-5" />
          IT Documents
        </NavLink>
        
        <NavLink 
          to="/projects" 
          className={({ isActive }) => `
            flex items-center px-3 py-2 rounded-md text-sm font-medium
            ${isActive 
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
            }
          `}
        >
          <Briefcase className="mr-3 h-5 w-5" />
          Projects
        </NavLink>
        
        <NavLink 
          to="/announcements" 
          className={({ isActive }) => `
            flex items-center px-3 py-2 rounded-md text-sm font-medium
            ${isActive 
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
            }
          `}
        >
          <Bell className="mr-3 h-5 w-5" />
          Announcements
        </NavLink>
        
        {isAdmin && (
          <div className="pt-2">
            <button 
              className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <div className="flex items-center">
                <Settings className="mr-3 h-5 w-5" />
                Admin
              </div>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        )}
      </nav>
      
      {/* User Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-4">
        <NavLink 
          to="/profile" 
          className={({ isActive }) => `
            flex items-center px-3 py-2 rounded-md text-sm font-medium
            ${isActive 
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
            }
          `}
        >
          <User className="mr-3 h-5 w-5" />
          Profile
        </NavLink>
        
        <button 
          onClick={logout}
          className="mt-1 w-full flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;