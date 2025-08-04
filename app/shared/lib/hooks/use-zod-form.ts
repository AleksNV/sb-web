import { useState, useCallback } from 'react';
import { z, type ZodSchema } from 'zod';

export interface UseZodFormReturn<T> {
  data: T;
  errors: Record<keyof T, string[]>;
  isValid: boolean;
  setField: (field: keyof T, value: any) => void;
  setData: (data: Partial<T>) => void;
  validate: () => boolean;
  validateField: (field: keyof T) => boolean;
  reset: () => void;
  getFieldError: (field: keyof T) => string | undefined;
}

export function useZodForm<T extends Record<string, any>>(
  schema: ZodSchema<T>,
  initialData: T
): UseZodFormReturn<T> {
  const [data, setDataState] = useState<T>(initialData);
  const [errors, setErrors] = useState<Record<keyof T, string[]>>({} as Record<keyof T, string[]>);

  const setField = useCallback((field: keyof T, value: any) => {
    setDataState(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const setData = useCallback((newData: Partial<T>) => {
    setDataState(prev => ({
      ...prev,
      ...newData,
    }));
  }, []);

  const validateField = useCallback((field: keyof T): boolean => {
    try {
      // Валидируем только конкретное поле
      const fieldSchema = (schema as any).shape?.[field as string];
      if (fieldSchema) {
        fieldSchema.parse(data[field]);
        setErrors(prev => ({
          ...prev,
          [field]: [],
        }));
        return true;
      }
      return false;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = (error as any).errors
          .filter((err: any) => err.path.includes(field as string))
          .map((err: any) => err.message);
        
        setErrors(prev => ({
          ...prev,
          [field]: fieldErrors,
        }));
      }
      return false;
    }
  }, [data, schema]);

  const validate = useCallback((): boolean => {
    try {
      schema.parse(data);
      setErrors({} as Record<keyof T, string[]>);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<keyof T, string[]> = {} as Record<keyof T, string[]>;
        
        (error as any).errors.forEach((err: any) => {
          const field = err.path[0] as keyof T;
          if (field) {
            if (!newErrors[field]) {
              newErrors[field] = [];
            }
            newErrors[field].push(err.message);
          }
        });
        
        setErrors(newErrors);
      }
      return false;
    }
  }, [data, schema]);

  const reset = useCallback(() => {
    setDataState(initialData);
    setErrors({} as Record<keyof T, string[]>);
  }, [initialData]);

  const getFieldError = useCallback((field: keyof T): string | undefined => {
    const fieldErrors = errors[field];
    return fieldErrors && fieldErrors.length > 0 ? fieldErrors[0] : undefined;
  }, [errors]);

  const isValid = Object.keys(errors).length === 0 || 
    Object.values(errors).every(errorArray => errorArray.length === 0);

  return {
    data,
    errors,
    isValid,
    setField,
    setData,
    validate,
    validateField,
    reset,
    getFieldError,
  };
} 