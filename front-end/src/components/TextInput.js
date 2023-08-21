import React from 'react';

function TextInput({ type, placeholder, value, onChange }) {
  return (
    <label>
      <input 
      className="border w-60 border-slate-400 m-2 p-2 rounded-md text-xl"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      />
    </label>
  );
}

export default TextInput;