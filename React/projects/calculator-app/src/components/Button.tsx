import React from "react";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => (
  <button
    onClick={onClick}
    className={`text-base md:text-xl lg:text-2xl font-semibold transition-all duration-150 active:scale-95 ${className}`}
  >
    {children}
  </button>
);

export default Button;
