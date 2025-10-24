export const VerticalFarmIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="15" y="10" width="30" height="40" rx="2" stroke="hsl(var(--june-bud))" strokeWidth="2" fill="none" />
    <line x1="18" y1="20" x2="42" y2="20" stroke="hsl(var(--neonC))" strokeWidth="1" opacity="0.5" />
    <line x1="18" y1="30" x2="42" y2="30" stroke="hsl(var(--neonC))" strokeWidth="1" opacity="0.5" />
    <line x1="18" y1="40" x2="42" y2="40" stroke="hsl(var(--neonC))" strokeWidth="1" opacity="0.5" />
    
    <g className="plants">
      <circle cx="22" cy="17" r="2" fill="hsl(var(--salad-green))">
        <animate attributeName="r" values="2;2.8;2" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="30" cy="17" r="2" fill="hsl(var(--salad-green))">
        <animate attributeName="r" values="2;2.8;2" dur="3s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <circle cx="38" cy="17" r="2" fill="hsl(var(--salad-green))">
        <animate attributeName="r" values="2;2.8;2" dur="3s" repeatCount="indefinite" begin="1s" />
      </circle>
      
      <circle cx="22" cy="27" r="2" fill="hsl(var(--salad-green))">
        <animate attributeName="r" values="2;2.8;2" dur="3s" repeatCount="indefinite" begin="1.5s" />
      </circle>
      <circle cx="30" cy="27" r="2" fill="hsl(var(--salad-green))">
        <animate attributeName="r" values="2;2.8;2" dur="3s" repeatCount="indefinite" begin="2s" />
      </circle>
      <circle cx="38" cy="27" r="2" fill="hsl(var(--salad-green))">
        <animate attributeName="r" values="2;2.8;2" dur="3s" repeatCount="indefinite" begin="2.5s" />
      </circle>
      
      <circle cx="22" cy="37" r="2" fill="hsl(var(--salad-green))">
        <animate attributeName="r" values="2;2.8;2" dur="3s" repeatCount="indefinite" begin="0.8s" />
      </circle>
      <circle cx="30" cy="37" r="2" fill="hsl(var(--salad-green))">
        <animate attributeName="r" values="2;2.8;2" dur="3s" repeatCount="indefinite" begin="1.3s" />
      </circle>
      <circle cx="38" cy="37" r="2" fill="hsl(var(--salad-green))">
        <animate attributeName="r" values="2;2.8;2" dur="3s" repeatCount="indefinite" begin="1.8s" />
      </circle>
    </g>
    
    <rect x="20" y="14" width="20" height="1" fill="hsl(var(--electric-blue))" opacity="0.6" />
    <rect x="20" y="24" width="20" height="1" fill="hsl(var(--electric-blue))" opacity="0.6" />
    <rect x="20" y="34" width="20" height="1" fill="hsl(var(--electric-blue))" opacity="0.6" />
  </svg>
);
