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
    primary: 'action-btn--primary',
    secondary: 'action-btn--secondary',
    default: 'action-btn--default',
  };

  return (
    <a
      href={url}
      target={target}
      rel={rel}
      className={`action-btn ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="action-btn-icon">{icon}</span>}
      {label}
    </a>
  );
};

export default ActionButton;
