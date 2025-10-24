export const EVChargingIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="15" y="10" width="20" height="30" rx="3" stroke="hsl(var(--june-bud))" strokeWidth="2" fill="none" />
    <rect x="18" y="13" width="14" height="10" fill="hsl(var(--neonC))" opacity="0.3" />
    <path d="M35 20 L45 20 L45 35" stroke="hsl(var(--june-bud))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="45" cy="38" r="3" fill="hsl(var(--electric-blue))" />
    <path d="M25 20 L28 28 L23 28 L26 36" stroke="hsl(var(--neonE))" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
    </path>
    <rect x="18" y="25" width="14" height="2" fill="hsl(var(--electric-blue))">
      <animate attributeName="height" values="0;12;0" dur="3s" repeatCount="indefinite" />
      <animate attributeName="y" values="37;25;37" dur="3s" repeatCount="indefinite" />
    </rect>
    <path d="M10 45 Q30 40 50 45" stroke="hsl(var(--june-bud))" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
  </svg>
);
