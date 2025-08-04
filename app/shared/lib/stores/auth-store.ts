import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (email: string, _password: string) => {
    set({ isLoading: true });
    try {
      // TODO: Implement actual API call
      const mockUser: User = {
        id: '1',
        email,
        name: 'Test User',
      };
      set({ user: mockUser, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  setUser: (user: User) => {
    set({ user, isAuthenticated: true });
  },
}));
