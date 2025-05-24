import { Outlet } from 'react-router-dom';
import { Building as Buildings } from 'lucide-react';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <header className="py-6 px-8">
        <div className="flex items-center">
          <Buildings className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <h1 className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">Company Portal</h1>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-6">
        <Outlet />
      </main>
      
      <footer className="py-4 px-8 text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>© 2025 Company Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthLayout;