import { useState, useCallback } from 'react';

export interface ApiState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export interface ApiActions<T> {
  setData: (data: T) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
  execute: (asyncFn: () => Promise<T>) => Promise<T>;
}

export function useApiState<T>(): ApiState<T> & ApiActions<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = useCallback(() => {
    setData(null);
    setLoading(false);
    setError(null);
  }, []);

  const execute = useCallback(async (asyncFn: () => Promise<T>): Promise<T> => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await asyncFn();
      setData(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Произошла ошибка';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    isLoading,
    error,
    setData,
    setLoading,
    setError,
    reset,
    execute,
  };
} 