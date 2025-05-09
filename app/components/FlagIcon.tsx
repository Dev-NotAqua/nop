'use client';

import React from 'react';

interface FlagIconProps {
  country: 'italy' | 'uk' | 'france';
  level?: 'ML' | 'AV' | 'IN';
  className?: string;
  showLevel?: boolean;
  showTooltip?: boolean;
  tooltipContent?: string;
}

const FlagIcon: React.FC<FlagIconProps> = ({ country, className = '', level, showLevel = false, showTooltip = false, tooltipContent = '' }) => {
  const flags = {
    italy: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className={`w-full h-full ${className}`}>
        <rect width="1" height="2" x="0" fill="#008C45" />
        <rect width="1" height="2" x="1" fill="#F4F5F0" />
        <rect width="1" height="2" x="2" fill="#CD212A" />
      </svg>
    ),
    uk: (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 55.2 38.4" className={`w-full h-full ${className}`}>
  
  <g>
    <path fill="#FEFEFE" d="M2.87,38.4h49.46c1.59-0.09,2.87-1.42,2.87-3.03V3.03c0-1.66-1.35-3.02-3.01-3.03H3.01C1.35,0.01,0,1.37,0,3.03v32.33C0,36.98,1.28,38.31,2.87,38.4z"/>
    <polygon fill="#C8102E" points="23.74,23.03 23.74,38.4 31.42,38.4 31.42,23.03 55.2,23.03 55.2,15.35 31.42,15.35 31.42,0 23.74,0 23.74,15.35 0,15.35 0,23.03 23.74,23.03"/>
    <path fill="#012169" d="M33.98,12.43V0h18.23c1.26,0.02,2.34,0.81,2.78,1.92L33.98,12.43z"/>
    <path fill="#012169" d="M33.98,25.97V38.4h18.35c1.21-0.07,2.23-0.85,2.66-1.92L33.98,25.97z"/>
    <path fill="#012169" d="M21.18,25.97V38.4H2.87c-1.21-0.07-2.24-0.85-2.66-1.94L21.18,25.97z"/>
    <path fill="#012169" d="M21.18,12.43V0H2.99C1.73,0.02,0.64,0.82,0.21,1.94L21.18,12.43z"/>
    <polygon fill="#012169" points="0,12.8 7.65,12.8 0,8.97 0,12.8"/>
    <polygon fill="#012169" points="55.2,12.8 47.51,12.8 55.2,8.95 55.2,12.8"/>
    <polygon fill="#012169" points="55.2,25.6 47.51,25.6 55.2,29.45 55.2,25.6"/>
    <polygon fill="#012169" points="0,25.6 7.65,25.6 0,29.43 0,25.6"/>
    <polygon fill="#C8102E" points="55.2,3.25 36.15,12.8 40.41,12.8 55.2,5.4 55.2,3.25"/>
    <polygon fill="#C8102E" points="19.01,25.6 14.75,25.6 0,32.98 0,35.13 19.05,25.6 19.01,25.6"/>
    <polygon fill="#C8102E" points="10.52,12.81 14.78,12.81 0,5.41 0,7.55 10.52,12.81"/>
    <polygon fill="#C8102E" points="44.63,25.59 40.37,25.59 55.2,33.02 55.2,30.88 44.63,25.59"/>
  </g>
</svg>
    ),
    france: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className={`w-full h-full ${className}`}>
        <rect width="1" height="2" x="0" fill="#002395" />
        <rect width="1" height="2" x="1" fill="#FFFFFF" />
        <rect width="1" height="2" x="2" fill="#ED2939" />
      </svg>
    ),
  };

  const tooltipId = `flag-tooltip-${country}`;
  
  return (
    <>
      <div 
        className="flag-icon-container group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-primary-500/30 w-[6px] h-[4px] w-[6px] h-[4px]"
      >
        <div className="hover:opacity-75 transition-opacity duration-300 relative z-10 hover:z-20" data-tooltip-id={showTooltip ? tooltipId : undefined} data-tooltip-content={tooltipContent}>
          {flags[country]}
        </div>
        {showLevel && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white font-medium text-xs text-center py-1.5 px-2 rounded-b-lg truncate">
            {level}
          </div>
        )}
        <div className="flag-shine absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-40 animate-flag-shine"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 ring-2 ring-primary-400/0 group-hover:ring-primary-400/50 rounded-lg transition-all duration-300"></div>
      </div>
    </>
  );

};

export default FlagIcon;