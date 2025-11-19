import React from 'react';

interface ActionButtonProps {
  label: string;
  url: string;
  variant?: 'primary' | 'secondary' | 'default';
  icon?: string;
  target?: string;
  rel?: string;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  url,
  variant = 'default',
  icon,
  target = '_blank',
  rel = 'noopener noreferrer',
  className = '',
}) => {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-md hover:shadow-lg border-none',
    secondary: 'bg-white text-primary-700 border-2 border-primary-300 hover:bg-primary-50 hover:border-primary-500 shadow-sm hover:shadow-md',
    default: 'bg-secondary-100 text-secondary-700 border border-secondary-300 hover:bg-secondary-200 hover:border-secondary-400 shadow-sm',
  };

  return (
    <a
      href={url}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {label}
    </a>
  );
};

export default ActionButton;
