import { create } from 'zustand';
import { AuthService, type AuthResponse } from '~/shared/api/services';
import { TokenStorage, SessionManager } from '~/shared/lib/utils';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  setUser: (user: User) => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response: AuthResponse = await AuthService.login({ email, password });
      TokenStorage.setTokens(response.tokens.accessToken, response.tokens.refreshToken);
      SessionManager.scheduleTokenRefresh();
      set({ 
        user: response.user, 
        isAuthenticated: true, 
        isLoading: false,
        error: null 
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ошибка входа';
      set({ isLoading: false, error: errorMessage });
      throw error;
    }
  },

  register: async (email: string, password: string, name: string) => {
    set({ isLoading: true, error: null });
    try {
      const response: AuthResponse = await AuthService.register({ email, password, name });
      TokenStorage.setTokens(response.tokens.accessToken, response.tokens.refreshToken);
      SessionManager.scheduleTokenRefresh();
      set({ 
        user: response.user, 
        isAuthenticated: true, 
        isLoading: false,
        error: null 
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ошибка регистрации';
      set({ isLoading: false, error: errorMessage });
      throw error;
    }
  },

  logout: async () => {
    try {
      await AuthService.logout();
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    } finally {
      SessionManager.logout();
    }
  },

  setUser: (user: User) => {
    set({ user, isAuthenticated: true });
  },

  clearError: () => {
    set({ error: null });
  },
}));
