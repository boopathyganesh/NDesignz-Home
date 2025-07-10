import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import codes from "@/context/codes.json"
interface PhoneInputProps {
  value: string; // Only the phone number without the country code
  onChange: (fullValue: string) => void; // Concatenated phone number with country code
  disabled: boolean;
  className: string;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, onChange, disabled, className }, ref) => {
    const [countryCode, setCountryCode] = useState<string>("+91");
    const [phoneNumber, setPhoneNumber] = useState<string>(value);

    // Handle country code changes and pass concatenated value to parent
    const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newCountryCode = e.target.value;
      setCountryCode(newCountryCode);
      onChange(newCountryCode + phoneNumber); // Concatenate with current phone number
    };

    // Handle input changes and pass concatenated value to parent
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPhoneNumber = e.target.value;
      setPhoneNumber(newPhoneNumber); // Update local state
      onChange(countryCode + newPhoneNumber); // Concatenate and send to parent
    };

    return (
      <div className="h-10 flex items-center border border-teal-600 rounded-md overflow-hidden">
        <select
          value={countryCode}
          onChange={handleCountryCodeChange}
          className="w-16 h-full lg:w-28 text-black text-base focus:outline-none"
          disabled={disabled}
        >
          {codes.map((country) => (
            <option key={country.code} value={country.dial_code}  className='text-center'>
              <span>{country.dial_code}</span>
            </option>
          ))}
        </select>
        <input
          type="text"
          ref={ref}
          className={cn("flex-1 px-1 py-2 focus:outline-none text-base", className)}
          placeholder="Enter phone number"
          value={phoneNumber} // Use local state to display phone number only
          onChange={handleInputChange}
          disabled={disabled}
        />
      </div>
    );
  }
);

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
