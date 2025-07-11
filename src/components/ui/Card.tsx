import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`
        bg-neutral-light rounded-3xl p-8
        border-t-2 border-accent-green
        shadow-lg
        hover:bg-primary-purple/10 transition-colors duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card; 