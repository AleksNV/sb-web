import { TextInput, Textarea, Label } from 'flowbite-react';
import type { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  children: ReactNode;
  error?: string;
  required?: boolean;
}

export function FormField({ label, children, error, required }: FormFieldProps) {
  return (
    <div className="mb-4">
      <Label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      {children}
      {error && <div className="text-sm text-red-600 mt-1">{error}</div>}
    </div>
  );
}

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  disabled?: boolean;
  error?: string;
}

export function Input({ value, onChange, onBlur, placeholder, type = 'text', disabled, error }: InputProps) {
  return (
    <div>
      <TextInput
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        color={error ? 'failure' : undefined}
      />
      {error && <div className="text-sm text-red-600 mt-1">{error}</div>}
    </div>
  );
}

interface TextAreaProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
}

export function TextArea({ value, onChange, placeholder, rows = 3, disabled }: TextAreaProps) {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
    />
  );
}
