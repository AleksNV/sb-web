import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useAuthStore } from '../../lib/stores/auth-store';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallbackPath?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  fallbackPath = '/' 
}) => {
  const { isAuthenticated, isLoading } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate(fallbackPath, { state: { from: location }, replace: true });
    }
  }, [isAuthenticated, isLoading, navigate, fallbackPath, location]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Компонент будет редиректить через useEffect
  }

  return <>{children}</>;
}; 