export const BiometricIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="30" cy="30" r="20" stroke="hsl(var(--june-bud))" strokeWidth="2" fill="none" />
    <g className="fingerprint-lines">
      <ellipse cx="30" cy="30" rx="16" ry="18" stroke="hsl(var(--neonC))" strokeWidth="1.5" fill="none" opacity="0.8" />
      <ellipse cx="30" cy="30" rx="12" ry="14" stroke="hsl(var(--neonC))" strokeWidth="1.5" fill="none" opacity="0.6" />
      <ellipse cx="30" cy="30" rx="8" ry="10" stroke="hsl(var(--neonC))" strokeWidth="1.5" fill="none" opacity="0.4" />
      <ellipse cx="30" cy="30" rx="4" ry="6" stroke="hsl(var(--neonC))" strokeWidth="1.5" fill="none" opacity="0.3" />
    </g>
    <circle cx="30" cy="30" r="24" stroke="hsl(var(--electric-blue))" strokeWidth="1" strokeDasharray="4 4" fill="none">
      <animateTransform attributeName="transform" type="rotate" from="0 30 30" to="360 30 30" dur="8s" repeatCount="indefinite" />
    </circle>
  </svg>
);
