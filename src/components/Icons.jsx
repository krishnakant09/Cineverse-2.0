import React from 'react';

export function InstagramIcon({ size = 18, color = "currentColor", className = "" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function ApertureIcon({ size = 18, color = "currentColor", className = "" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="14.31" x2="20.05" y1="8" y2="17.94" />
      <line x1="9.69" x2="21.17" y1="8" y2="8" />
      <line x1="7.38" x2="12" y1="12" y2="21.17" />
      <line x1="9.69" x2="3.95" y1="16" y2="6.06" />
      <line x1="14.31" x2="2.83" y1="16" y2="16" />
      <line x1="16.62" x2="12" y1="12" y2="2.83" />
    </svg>
  );
}
