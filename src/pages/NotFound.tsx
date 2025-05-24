import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full text-center">
        <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-2">Page Not Found</h2>
        
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;