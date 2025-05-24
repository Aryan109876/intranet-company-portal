import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Filter, Plus, FileText, Printer, Laptop, Network, Shield, FileQuestion, Clock, Download 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockDocuments } from '../data/documents';
import { DocumentCategory, Role } from '../types';

const Documents = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const isAdmin = user?.role === Role.Admin;
  const isITSupport = user?.role === Role.ITSupport || isAdmin;
  
  // Filter documents based on search term and category
  const filteredDocuments = mockDocuments.filter(doc => {
    const matchesSearch = 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Get categories with counts
  const categories = [
    { id: 'all', name: 'All Documents', count: mockDocuments.length, icon: FileText },
    { id: DocumentCategory.Hardware, name: 'Hardware', count: mockDocuments.filter(d => d.category === DocumentCategory.Hardware).length, icon: Printer },
    { id: DocumentCategory.Software, name: 'Software', count: mockDocuments.filter(d => d.category === DocumentCategory.Software).length, icon: Laptop },
    { id: DocumentCategory.Network, name: 'Network', count: mockDocuments.filter(d => d.category === DocumentCategory.Network).length, icon: Network },
    { id: DocumentCategory.Security, name: 'Security', count: mockDocuments.filter(d => d.category === DocumentCategory.Security).length, icon: Shield },
    { id: DocumentCategory.Policies, name: 'Policies', count: mockDocuments.filter(d => d.category === DocumentCategory.Policies).length, icon: FileQuestion },
    { id: DocumentCategory.General, name: 'General', count: mockDocuments.filter(d => d.category === DocumentCategory.General).length, icon: FileText },
  ];
  
  return (
    <div className="fade-in">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">IT Support Documentation</h1>
        
        {isITSupport && (
          <button className="mt-4 sm:mt-0 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <Plus className="mr-2 h-4 w-4" />
            New Document
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
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {/* Categories */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Categories</h3>
              <ul className="space-y-1">
                {categories.map(category => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`
                        w-full flex items-center justify-between px-3 py-2 text-sm rounded-md
                        ${selectedCategory === category.id
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                        }
                      `}
                    >
                      <div className="flex items-center">
                        <category.icon className="mr-3 h-4 w-4" />
                        <span>{category.name}</span>
                      </div>
                      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs dark:bg-gray-700">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Document List */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                {selectedCategory === 'all' 
                  ? 'All Documents' 
                  : categories.find(c => c.id === selectedCategory)?.name || 'Documents'}
              </h2>
              
              <button className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </button>
            </div>
            
            {filteredDocuments.length > 0 ? (
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredDocuments.map(document => (
                  <div key={document.id} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-750">
                    <Link to={`/documents/${document.id}`} className="block">
                      <div className="flex justify-between">
                        <div className="flex-1">
                          <div className="flex items-center">
                            <h3 className="text-sm font-medium text-gray-900 dark:text-white">{document.title}</h3>
                            <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                              v{document.version}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{document.description}</p>
                          <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
                            <Clock className="mr-1 h-3.5 w-3.5" />
                            <span>Updated {document.updatedAt.toLocaleDateString()}</span>
                            <span className="mx-2">•</span>
                            <span className="capitalize">{document.category.replace('_', ' ')}</span>
                            {document.tags.length > 0 && (
                              <>
                                <span className="mx-2">•</span>
                                <div className="flex items-center space-x-1">
                                  {document.tags.slice(0, 2).map((tag, i) => (
                                    <span key={i} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-700">
                                      {tag}
                                    </span>
                                  ))}
                                  {document.tags.length > 2 && (
                                    <span className="text-xs">+{document.tags.length - 2}</span>
                                  )}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                            <Download className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-6 py-12 text-center">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No documents found</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {searchTerm 
                    ? `No results found for "${searchTerm}"`
                    : 'No documents in this category'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;