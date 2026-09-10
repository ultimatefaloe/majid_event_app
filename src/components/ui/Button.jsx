import React from "react";

// typeof variant, default, ghost, outline, link

const Button = ({ type = "button", className, onClick, variant = "default", children }) => {

  const buttonClassName = `flex items-center gap-1 bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-700 text-sm font-medium`;

  return (
    <button
      type={type}
      className={`${buttonClassName} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
