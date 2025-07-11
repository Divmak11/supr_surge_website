import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-accent-green text-neutral-dark font-semibold text-sm py-4 px-6 rounded-2xl
        transition-all duration-150 ease-in-out
        hover:scale-105 hover:shadow-[0_0_12px_rgba(34,197,94,0.5)]
        active:scale-100
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button; 