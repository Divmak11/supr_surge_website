import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  size = "md",
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 touch-target transform hover:scale-105 active:scale-95";
  
  const sizeClasses = {
    sm: "px-3 py-2 text-sm rounded-lg min-h-[44px]",
    md: "px-4 py-3 text-base rounded-xl min-h-[48px]",
    lg: "px-6 py-4 text-lg rounded-xl min-h-[52px]",
    xl: "px-8 py-5 text-xl rounded-2xl min-h-[56px]",
  };
  
  const variantClasses = {
    primary: "bg-primary-purple text-white hover:bg-primary-purple/90 focus:ring-primary-purple shadow-lg hover:shadow-xl",
    secondary: "bg-accent-green text-white hover:bg-accent-green/90 focus:ring-accent-green shadow-lg hover:shadow-xl",
    outline: "border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white focus:ring-primary-purple",
    ghost: "text-primary-purple hover:bg-primary-purple/10 focus:ring-primary-purple",
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 