import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Download, Share, Edit, Trash, Clock, User, Tag, Eye, ThumbsUp, MessageCircle as Message, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Role } from '../types';
import { mockDocuments } from '../data/documents';

const DocumentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  // Find document by ID
  const document = mockDocuments.find(doc => doc.id === id);
  
  // Check permissions
  const isAdmin = user?.role === Role.Admin;
  const isITSupport = user?.role === Role.ITSupport || isAdmin;
  const canEdit = isITSupport;
  
  if (!document) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
        <AlertCircle className="mx-auto h-12 w-12 text-red-500" />
        <h2 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Document Not Found</h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400">The document you're looking for doesn't exist or has been removed.</p>
        <div className="mt-6">
          <Link 
            to="/documents"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Documents
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="fade-in">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link 
            to="/documents"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Documents
          </Link>
          <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{document.title}</h1>
        </div>
        
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600 dark:hover:bg-gray-600">
            <Download className="mr-2 h-4 w-4" />
            Download
          </button>
          
          <button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600 dark:hover:bg-gray-600">
            <Share className="mr-2 h-4 w-4" />
            Share
          </button>
          
          {canEdit && (
            <button className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </button>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Document Info */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Document Information</h3>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <Clock className="mt-0.5 mr-2 h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Created</p>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {document.createdAt.toLocaleDateString()}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="mt-0.5 mr-2 h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Last Updated</p>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {document.updatedAt.toLocaleDateString()}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <User className="mt-0.5 mr-2 h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Created By</p>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {document.createdBy}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FileText className="mt-0.5 mr-2 h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Version</p>
                  <p className="text-sm text-gray-900 dark:text-white">
                    v{document.version}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Tag className="mt-0.5 mr-2 h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Category</p>
                  <p className="text-sm text-gray-900 dark:text-white capitalize">
                    {document.category.replace('_', ' ')}
                  </p>
                </div>
              </div>
              
              {document.tags.length > 0 && (
                <div className="flex items-start">
                  <Tag className="mt-0.5 mr-2 h-4 w-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Tags</p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {document.tags.map((tag, i) => (
                        <span key={i} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {canEdit && (
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button 
                  onClick={() => setShowDeleteConfirm(true)}
                  className="inline-flex w-full items-center justify-center rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30"
                >
                  <Trash className="mr-2 h-4 w-4" />
                  Delete Document
                </button>
              </div>
            )}
          </div>
          
          {/* Stats */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Statistics</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-700">
                <Eye className="mx-auto mb-1 h-5 w-5 text-gray-400" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">127</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Views</p>
              </div>
              
              <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-700">
                <Download className="mx-auto mb-1 h-5 w-5 text-gray-400" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">34</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Downloads</p>
              </div>
              
              <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-700">
                <ThumbsUp className="mx-auto mb-1 h-5 w-5 text-gray-400" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">18</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Helpful</p>
              </div>
              
              <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-700">
                <Message className="mx-auto mb-1 h-5 w-5 text-gray-400" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">5</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Comments</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="prose prose-blue max-w-none dark:prose-invert">
              <h2>{document.title}</h2>
              <p className="text-gray-500 dark:text-gray-400">{document.description}</p>
              <div dangerouslySetInnerHTML={{ __html: document.content }} />
            </div>
            
            <div className="mt-8 flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <button className="inline-flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <ThumbsUp className="mr-1 h-4 w-4" />
                  Helpful
                </button>
                <span className="mx-2 text-gray-300 dark:text-gray-700">|</span>
                <button className="inline-flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <Message className="mr-1 h-4 w-4" />
                  Comment
                </button>
              </div>
              
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Last updated on {document.updatedAt.toLocaleDateString()}
              </p>
            </div>
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
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Delete Document</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete this document? This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  onClick={() => {
                    // In a real app, this would call an API to delete the document
                    setShowDeleteConfirm(false);
                    navigate('/documents');
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

export default DocumentDetail;