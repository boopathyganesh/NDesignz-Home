import React from 'react';

interface PhoneInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
      <span className="px-3 py-2 bg-gray-300 border-r border-gray-300 text-black">+91</span>
      <input
        type="number"
        className="flex-1 px-3 py-2 focus:outline-none"
        placeholder="Enter phone number"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PhoneInput;
