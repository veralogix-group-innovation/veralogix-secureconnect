export const SensorNetworkIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="30" cy="30" r="4" fill="hsl(var(--june-bud))" />
    <circle cx="15" cy="15" r="3" fill="hsl(var(--neonC))" />
    <circle cx="45" cy="15" r="3" fill="hsl(var(--neonC))" />
    <circle cx="15" cy="45" r="3" fill="hsl(var(--neonC))" />
    <circle cx="45" cy="45" r="3" fill="hsl(var(--neonC))" />
    
    <line x1="15" y1="15" x2="30" y2="30" stroke="hsl(var(--electric-blue))" strokeWidth="1.5" opacity="0.6" />
    <line x1="45" y1="15" x2="30" y2="30" stroke="hsl(var(--electric-blue))" strokeWidth="1.5" opacity="0.6" />
    <line x1="15" y1="45" x2="30" y2="30" stroke="hsl(var(--electric-blue))" strokeWidth="1.5" opacity="0.6" />
    <line x1="45" y1="45" x2="30" y2="30" stroke="hsl(var(--electric-blue))" strokeWidth="1.5" opacity="0.6" />
    
    <circle cx="30" cy="30" r="12" stroke="hsl(var(--neonC))" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.4">
      <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="30" cy="30" r="18" stroke="hsl(var(--neonC))" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.3">
      <animate attributeName="r" values="18;24;18" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.3;0.05;0.3" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
);
