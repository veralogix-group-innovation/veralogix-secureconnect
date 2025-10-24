export const MaintenanceIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="10" y="10" width="40" height="30" rx="2" stroke="hsl(var(--june-bud))" strokeWidth="2" fill="none" />
    <path d="M15 20 L25 35 L35 25 L45 30" stroke="hsl(var(--neonC))" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="25" cy="35" r="2" fill="hsl(var(--electric-blue))">
      <animate attributeName="r" values="2;3.5;2" dur="1.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="35" cy="25" r="2" fill="hsl(var(--electric-blue))">
      <animate attributeName="r" values="2;3.5;2" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
      <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
    </circle>
    <circle cx="45" cy="30" r="2" fill="hsl(var(--electric-blue))">
      <animate attributeName="r" values="2;3.5;2" dur="1.5s" repeatCount="indefinite" begin="1s" />
      <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" begin="1s" />
    </circle>
    <path d="M10 45 L50 45" stroke="hsl(var(--june-bud))" strokeWidth="1" />
    <text x="15" y="53" fill="hsl(var(--neonC))" fontSize="8" fontFamily="monospace">AI</text>
  </svg>
);
