import React, { useEffect } from 'react';
import { SessionManager } from '../utils/session-manager';

interface SessionProviderProps {
  children: React.ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  useEffect(() => {
    // Инициализируем менеджер сессий при загрузке приложения
    SessionManager.initialize();
  }, []);

  return <>{children}</>;
}; 