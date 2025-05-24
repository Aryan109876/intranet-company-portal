import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Filter, Plus, Clock, ArrowRight, Users
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Role, ProjectStatus, ProjectPriority } from '../types';
import { mockProjects } from '../data/projects';

const Projects = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  
  const isAdmin = user?.role === Role.Admin;
  const isITSupport = user?.role === Role.ITSupport || isAdmin;
  
  // Filter projects based on search term, status, and priority
  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    const matchesPriority = selectedPriority === 'all' || project.priority === selectedPriority;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });
  
  // Get statuses with counts
  const statuses = [
    { id: 'all', name: 'All Projects', count: mockProjects.length },
    { id: ProjectStatus.NotStarted, name: 'Not Started', count: mockProjects.filter(p => p.status === ProjectStatus.NotStarted).length },
    { id: ProjectStatus.InProgress, name: 'In Progress', count: mockProjects.filter(p => p.status === ProjectStatus.InProgress).length },
    { id: ProjectStatus.OnHold, name: 'On Hold', count: mockProjects.filter(p => p.status === ProjectStatus.OnHold).length },
    { id: ProjectStatus.Completed, name: 'Completed', count: mockProjects.filter(p => p.status === ProjectStatus.Completed).length },
    { id: ProjectStatus.Canceled, name: 'Canceled', count: mockProjects.filter(p => p.status === ProjectStatus.Canceled).length },
  ];
  
  // Get priorities with counts
  const priorities = [
    { id: 'all', name: 'All Priorities', count: mockProjects.length },
    { id: ProjectPriority.Low, name: 'Low', count: mockProjects.filter(p => p.priority === ProjectPriority.Low).length },
    { id: ProjectPriority.Medium, name: 'Medium', count: mockProjects.filter(p => p.priority === ProjectPriority.Medium).length },
    { id: ProjectPriority.High, name: 'High', count: mockProjects.filter(p => p.priority === ProjectPriority.High).length },
    { id: ProjectPriority.Critical, name: 'Critical', count: mockProjects.filter(p => p.priority === ProjectPriority.Critical).length },
  ];
  
  return (
    <div className="fade-in">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Digital Projects</h1>
        
        {isITSupport && (
          <button className="mt-4 sm:mt-0 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <Plus className="mr-2 h-4 w-4" />
            New Project
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
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {/* Status Filter */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Status</h3>
              <ul className="space-y-1">
                {statuses.map(status => (
                  <li key={status.id}>
                    <button
                      onClick={() => setSelectedStatus(status.id)}
                      className={`
                        w-full flex items-center justify-between px-3 py-2 text-sm rounded-md
                        ${selectedStatus === status.id
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                        }
                      `}
                    >
                      <span>{status.name}</span>
                      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs dark:bg-gray-700">
                        {status.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Priority Filter */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Priority</h3>
              <ul className="space-y-1">
                {priorities.map(priority => (
                  <li key={priority.id}>
                    <button
                      onClick={() => setSelectedPriority(priority.id)}
                      className={`
                        w-full flex items-center justify-between px-3 py-2 text-sm rounded-md
                        ${selectedPriority === priority.id
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                        }
                      `}
                    >
                      <span>{priority.name}</span>
                      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs dark:bg-gray-700">
                        {priority.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Project List */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                {selectedStatus === 'all' 
                  ? 'All Projects' 
                  : `${statuses.find(s => s.id === selectedStatus)?.name || 'Projects'}`}
                {selectedPriority !== 'all' && ` - ${priorities.find(p => p.id === selectedPriority)?.name} Priority`}
              </h2>
              
              <button className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </button>
            </div>
            
            {filteredProjects.length > 0 ? (
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredProjects.map(project => (
                  <div key={project.id} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-750">
                    <Link to={`/projects/${project.id}`} className="block">
                      <div className="flex justify-between">
                        <div className="flex-1">
                          <div className="flex items-center">
                            <h3 className="text-sm font-medium text-gray-900 dark:text-white">{project.title}</h3>
                            <span className={`
                              ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                              ${project.status === 'in_progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : ''}
                              ${project.status === 'not_started' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' : ''}
                              ${project.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
                              ${project.status === 'on_hold' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : ''}
                              ${project.status === 'canceled' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : ''}
                            `}>
                              {project.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </span>
                            <span className={`
                              ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                              ${project.priority === 'low' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
                              ${project.priority === 'medium' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : ''}
                              ${project.priority === 'high' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' : ''}
                              ${project.priority === 'critical' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : ''}
                            `}>
                              {project.priority.charAt(0).toUpperCase() + project.priority.slice(1)}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{project.description}</p>
                          
                          <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
                            <Clock className="mr-1 h-3.5 w-3.5" />
                            <span>Due: {project.dueDate.toLocaleDateString()}</span>
                            <span className="mx-2">•</span>
                            <div className="flex items-center">
                              <Users className="mr-1 h-3.5 w-3.5" />
                              <span>Assigned: {project.assignedTo.length}</span>
                            </div>
                            <span className="mx-2">•</span>
                            <span>Comments: {project.comments.length}</span>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0 self-center">
                          <ArrowRight className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-6 py-12 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No projects found</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {searchTerm 
                    ? `No results found for "${searchTerm}"`
                    : 'No projects match the selected filters'}
                </p>
                {isITSupport && (
                  <div className="mt-6">
                    <button className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      <Plus className="mr-2 h-4 w-4" />
                      New Project
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

export default Projects;