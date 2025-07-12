import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outlined" | "glass";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  padding = "md",
}) => {
  const baseClasses = "rounded-xl sm:rounded-2xl transition-all duration-200";
  
  const variantClasses = {
    default: "bg-white shadow-md hover:shadow-lg",
    elevated: "bg-white shadow-lg hover:shadow-xl",
    outlined: "bg-white border-2 border-primary-purple/20 hover:border-primary-purple/40",
    glass: "bg-white/80 backdrop-blur-lg border border-white/20 shadow-lg",
  };
  
  const paddingClasses = {
    none: "",
    sm: "p-3 sm:p-4",
    md: "p-4 sm:p-6",
    lg: "p-6 sm:p-8",
    xl: "p-8 sm:p-10",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
};

export default Card; 