import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 48 48"
      {...props}
      className={clsx('h-10 w-10', props.className)}
    >
      <defs>
        <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      
      {/* Open Book */}
      <g>
        {/* Left page */}
        <path
          d="M8 12 Q8 8 12 8 L22 8 Q24 8 24 10 L24 38 Q24 40 22 40 L12 40 Q8 40 8 36 Z"
          fill="url(#bookGradient)"
          stroke="#1E40AF"
          strokeWidth="1.5"
        />
        
        {/* Right page */}
        <path
          d="M40 12 Q40 8 36 8 L26 8 Q24 8 24 10 L24 38 Q24 40 26 40 L36 40 Q40 40 40 36 Z"
          fill="url(#bookGradient)"
          stroke="#1E40AF"
          strokeWidth="1.5"
        />
        
        {/* Book spine/center */}
        <line x1="24" y1="8" x2="24" y2="40" stroke="#1E40AF" strokeWidth="2" />
        
        {/* Page lines - left */}
        <line x1="12" y1="16" x2="20" y2="16" stroke="white" strokeWidth="1" opacity="0.6" />
        <line x1="12" y1="20" x2="20" y2="20" stroke="white" strokeWidth="1" opacity="0.6" />
        <line x1="12" y1="24" x2="18" y2="24" stroke="white" strokeWidth="1" opacity="0.6" />
        
        {/* Page lines - right */}
        <line x1="28" y1="16" x2="36" y2="16" stroke="white" strokeWidth="1" opacity="0.6" />
        <line x1="28" y1="20" x2="36" y2="20" stroke="white" strokeWidth="1" opacity="0.6" />
        <line x1="30" y1="24" x2="36" y2="24" stroke="white" strokeWidth="1" opacity="0.6" />
        
        {/* Digital element - small circuit pattern */}
        <circle cx="14" cy="32" r="1.5" fill="#60A5FA" />
        <circle cx="34" cy="32" r="1.5" fill="#60A5FA" />
        <line x1="14" y1="32" x2="18" y2="32" stroke="#60A5FA" strokeWidth="1" />
        <line x1="30" y1="32" x2="34" y2="32" stroke="#60A5FA" strokeWidth="1" />
      </g>
    </svg>
  );
}
