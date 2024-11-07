import React from 'react';
import { cn } from '@/lib/utils';

interface PhoneInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  className: string;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, onChange, disabled, className }, ref) => {
    return (
      <div className="flex items-center border border-teal-600 rounded-md overflow-hidden">
        <span className="px-3 py-2 bg-teal-500 border-r border-teal-600 text-black text-base">+91</span>
        <input
          type="text"
          ref={ref}
          className={cn("flex-1 px-3 py-2 focus:outline-none text-base", className)}
          placeholder="Enter phone number"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    );
  }
);

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
