import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Layouts
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

// Pages
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Documents from '../pages/Documents';
import DocumentDetail from '../pages/DocumentDetail';
import Projects from '../pages/Projects';
import ProjectDetail from '../pages/ProjectDetail';
import Announcements from '../pages/Announcements';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';

// Guard for protected routes
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();
  
  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
};

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  
  // Update page title based on current route
  useEffect(() => {
    const pageName = location.pathname.split('/').pop() || 'dashboard';
    document.title = `Company Portal | ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}`;
  }, [location]);

  return (
    <Routes>
      {/* Auth routes */}
      <Route element={<AuthLayout />}>
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/" replace /> : <Login />} 
        />
      </Route>
      
      {/* Protected routes */}
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="documents" element={<Documents />} />
        <Route path="documents/:id" element={<DocumentDetail />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetail />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      
      {/* 404 and fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;