export const SecurityShield = () => {
  return (
    <svg
      width="400"
      height="500"
      viewBox="0 0 400 500"
      className="max-w-md mx-auto"
      aria-labelledby="shield-title"
    >
      <title id="shield-title">Security Shield</title>
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--salad-green))" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(var(--verdan-green))" stopOpacity="0.9" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Shield outline */}
      <path
        d="M 200 50 L 320 100 L 320 250 Q 320 380 200 450 Q 80 380 80 250 L 80 100 Z"
        fill="url(#shieldGradient)"
        stroke="hsl(var(--june-bud))"
        strokeWidth="3"
        filter="url(#glow)"
        opacity="0.8"
      />
      
      {/* Code streams */}
      <text x="110" y="150" fill="hsl(var(--neonC))" fontSize="12" fontFamily="monospace" opacity="0.7">
        01010110
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite" />
      </text>
      <text x="230" y="180" fill="hsl(var(--neonC))" fontSize="12" fontFamily="monospace" opacity="0.7">
        1101001
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </text>
      <text x="140" y="220" fill="hsl(var(--neonC))" fontSize="12" fontFamily="monospace" opacity="0.7">
        AES-256
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite" begin="1s" />
      </text>
      <text x="210" y="260" fill="hsl(var(--neonC))" fontSize="12" fontFamily="monospace" opacity="0.7">
        RSA-4096
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite" begin="1.5s" />
      </text>
      
      {/* Light beams */}
      <path
        d="M 200 250 L 200 100"
        stroke="rgba(186, 217, 107, 0.4)"
        strokeWidth="2"
        fill="none"
      >
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
      </path>
      <path
        d="M 200 250 L 140 150"
        stroke="rgba(186, 217, 107, 0.3)"
        strokeWidth="2"
        fill="none"
      >
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" begin="0.5s" />
      </path>
      <path
        d="M 200 250 L 260 150"
        stroke="rgba(186, 217, 107, 0.3)"
        strokeWidth="2"
        fill="none"
      >
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" begin="1s" />
      </path>
      
      {/* Center emblem */}
      <circle
        cx="200"
        cy="250"
        r="40"
        fill="none"
        stroke="hsl(var(--june-bud))"
        strokeWidth="2"
        filter="url(#glow)"
      />
      <text
        x="200"
        y="260"
        fill="hsl(var(--june-bud))"
        fontSize="16"
        fontWeight="700"
        textAnchor="middle"
        filter="url(#glow)"
      >
        SC™
      </text>
      
      {/* Shimmer effect */}
      <rect
        x="0"
        y="0"
        width="40"
        height="500"
        fill="url(#shimmer)"
        opacity="0"
      >
        <animate
          attributeName="x"
          from="-40"
          to="400"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0.3;0"
          dur="4s"
          repeatCount="indefinite"
        />
      </rect>
      <defs>
        <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="rgba(186, 217, 107, 0.6)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      
      {/* 3D perspective transform */}
      <g transform="perspective(600) rotateY(5)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 200 250; 3 200 250; -3 200 250; 0 200 250"
          dur="4s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
};
