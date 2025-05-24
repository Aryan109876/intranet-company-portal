import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Edit, Trash, Clock, User, MessageSquare, CalendarClock, Send, AlertCircle 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Role, ProjectStatus } from '../types';
import { mockProjects } from '../data/projects';
import { mockUsers } from '../data/users';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [comment, setComment] = useState('');
  
  // Find project by ID
  const project = mockProjects.find(p => p.id === id);
  
  // Check permissions
  const isAdmin = user?.role === Role.Admin;
  const isITSupport = user?.role === Role.ITSupport || isAdmin;
  const canEdit = isITSupport || (project?.createdBy === user?.id);
  
  // Get assigned users
  const assignedUsers = mockUsers.filter(u => project?.assignedTo.includes(u.id));
  
  if (!project) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
        <AlertCircle className="mx-auto h-12 w-12 text-red-500" />
        <h2 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Project Not Found</h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400">The project you're looking for doesn't exist or has been removed.</p>
        <div className="mt-6">
          <Link 
            to="/projects"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }
  
  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.NotStarted:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
      case ProjectStatus.InProgress:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case ProjectStatus.OnHold:
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case ProjectStatus.Completed:
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case ProjectStatus.Canceled:
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low':
        return 'text-green-600 dark:text-green-400';
      case 'medium':
        return 'text-blue-600 dark:text-blue-400';
      case 'high':
        return 'text-amber-600 dark:text-amber-400';
      case 'critical':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };
  
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    // In a real app, this would call an API to add the comment
    setComment('');
  };
  
  return (
    <div className="fade-in">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link 
            to="/projects"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Projects
          </Link>
          <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h1>
        </div>
        
        {canEdit && (
          <div className="mt-4 sm:mt-0 flex items-center space-x-2">
            <button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600 dark:hover:bg-gray-600">
              <Edit className="mr-2 h-4 w-4" />
              Edit Project
            </button>
            
            <button 
              onClick={() => setShowDeleteConfirm(true)}
              className="inline-flex items-center rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:ring-red-500/20 dark:hover:bg-red-900/30"
            >
              <Trash className="mr-2 h-4 w-4" />
              Delete
            </button>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project Details */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="mb-6 flex flex-wrap gap-2">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(project.status)}`}>
                {project.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
              
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 ${getPriorityColor(project.priority)}`}>
                {project.priority.charAt(0).toUpperCase() + project.priority.slice(1)} Priority
              </span>
            </div>
            
            <div className="prose prose-blue max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-750">
                <div className="flex items-center">
                  <CalendarClock className="h-5 w-5 text-gray-400" />
                  <h3 className="ml-2 text-sm font-medium text-gray-900 dark:text-white">Timeline</h3>
                </div>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Start Date:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{project.startDate.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Due Date:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{project.dueDate.toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-750">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-400" />
                  <h3 className="ml-2 text-sm font-medium text-gray-900 dark:text-white">Created By</h3>
                </div>
                <div className="mt-2 text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    {mockUsers.find(u => u.id === project.createdBy)?.name || 'Unknown User'}
                  </span>
                  <div className="mt-1 text-gray-500 dark:text-gray-400">
                    Created on {project.createdAt.toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Comments */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Comments ({project.comments.length})</h2>
            
            {project.comments.length > 0 ? (
              <div className="space-y-4">
                {project.comments.map(comment => {
                  const commentUser = mockUsers.find(u => u.id === comment.createdBy);
                  return (
                    <div key={comment.id} className="flex space-x-3 py-3">
                      <div className="flex-shrink-0">
                        <img 
                          className="h-10 w-10 rounded-full" 
                          src={commentUser?.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'} 
                          alt={commentUser?.name || 'User'} 
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center">
                          <p className="font-medium text-gray-900 dark:text-white">{commentUser?.name || 'Unknown User'}</p>
                          <p className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                            {comment.createdAt.toLocaleDateString()} at {comment.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                        <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                          <p>{comment.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-12 text-center">
                <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No comments yet</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Be the first to comment on this project.
                </p>
              </div>
            )}
            
            {/* Add Comment Form */}
            <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
              <form onSubmit={handleSubmitComment}>
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <img 
                      className="h-10 w-10 rounded-full" 
                      src={user?.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'} 
                      alt={user?.name || 'User'} 
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <label htmlFor="comment" className="sr-only">Comment</label>
                      <textarea
                        id="comment"
                        rows={3}
                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        placeholder="Add a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="group inline-flex items-start text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                        <span>Add attachment, mention, etc.</span>
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Assigned To */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Assigned Team Members</h3>
            
            {assignedUsers.length > 0 ? (
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {assignedUsers.map(assignedUser => (
                  <li key={assignedUser.id} className="flex items-center py-3">
                    <img 
                      className="h-10 w-10 rounded-full" 
                      src={assignedUser.avatar} 
                      alt={assignedUser.name} 
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{assignedUser.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{assignedUser.department}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                No team members assigned
              </p>
            )}
            
            {canEdit && (
              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full inline-flex items-center justify-center rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50">
                  <User className="mr-2 h-4 w-4" />
                  Assign Members
                </button>
              </div>
            )}
          </div>
          
          {/* Project Status */}
          {canEdit && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Update Status</h3>
              
              <div className="space-y-2">
                {Object.values(ProjectStatus).map(status => (
                  <button
                    key={status}
                    className={`
                      w-full flex items-center px-3 py-2 rounded-md text-sm
                      ${project.status === status 
                        ? `${getStatusColor(status)} font-medium` 
                        : 'text-gray-700 bg-gray-50 hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-750 dark:hover:bg-gray-700'
                      }
                    `}
                  >
                    {status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Project Timeline */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Project Timeline</h3>
            
            <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
              <li className="mb-10 ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-800">
                  <svg className="h-2.5 w-2.5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                </span>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Project Created</h3>
                <time className="text-xs font-normal text-gray-500 dark:text-gray-400">
                  {project.createdAt.toLocaleDateString()}
                </time>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Created by {mockUsers.find(u => u.id === project.createdBy)?.name || 'Unknown User'}
                </p>
              </li>
              
              <li className="mb-10 ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-800">
                  <svg className="h-2.5 w-2.5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                </span>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Start Date</h3>
                <time className="text-xs font-normal text-gray-500 dark:text-gray-400">
                  {project.startDate.toLocaleDateString()}
                </time>
              </li>
              
              <li className="ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
                  <svg className="h-2.5 w-2.5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                </span>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Due Date</h3>
                <time className="text-xs font-normal text-gray-500 dark:text-gray-400">
                  {project.dueDate.toLocaleDateString()}
                </time>
              </li>
            </ol>
          </div>
        </div>
      </div>
      
      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 transition-opacity" />
            
            <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900 sm:mx-0 sm:h-10 sm:w-10">
                  <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Delete Project</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete this project? This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  onClick={() => {
                    // In a real app, this would call an API to delete the project
                    setShowDeleteConfirm(false);
                    navigate('/projects');
                  }}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600 dark:hover:bg-gray-600"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;