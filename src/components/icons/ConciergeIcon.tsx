export const ConciergeIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="10" y="15" width="40" height="30" rx="4" stroke="hsl(var(--june-bud))" strokeWidth="2" fill="none" className="animate-pulse" />
    <circle cx="30" cy="30" r="8" fill="hsl(var(--electric-blue))" opacity="0.3" className="animate-pulse" />
    <path d="M20 25 Q30 20 40 25" stroke="hsl(var(--neonC))" strokeWidth="2" fill="none" className="voice-wave">
      <animate attributeName="d" values="M20 25 Q30 20 40 25;M20 25 Q30 30 40 25;M20 25 Q30 20 40 25" dur="2s" repeatCount="indefinite" />
    </path>
    <path d="M20 30 Q30 35 40 30" stroke="hsl(var(--neonC))" strokeWidth="2" fill="none" className="voice-wave">
      <animate attributeName="d" values="M20 30 Q30 35 40 30;M20 30 Q30 25 40 30;M20 30 Q30 35 40 30" dur="2s" repeatCount="indefinite" begin="0.3s" />
    </path>
    <path d="M20 35 Q30 30 40 35" stroke="hsl(var(--neonC))" strokeWidth="2" fill="none" className="voice-wave">
      <animate attributeName="d" values="M20 35 Q30 30 40 35;M20 35 Q30 40 40 35;M20 35 Q30 30 40 35" dur="2s" repeatCount="indefinite" begin="0.6s" />
    </path>
  </svg>
);
