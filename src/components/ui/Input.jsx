import React from "react";

const Input = ({
  value,
  onChange,
  placeholder,
  name,
  id,
  className,
  required,
  type = "text",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      className={`w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${className}`}
      required={required}
    />
  );
};

export default Input;
