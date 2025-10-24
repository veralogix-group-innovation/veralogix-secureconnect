export const LogoFormation = () => {
  return (
    <svg
      width="300"
      height="120"
      viewBox="0 0 300 120"
      className="logo-formation"
      aria-labelledby="logo-title"
    >
      <title id="logo-title">Veralogix SecureConnect Logo</title>
      
      {/* Particle formation */}
      <g className="particles">
        {[...Array(30)].map((_, i) => {
          const angle = (i / 30) * Math.PI * 2;
          const startX = 150 + Math.cos(angle) * 100;
          const startY = 60 + Math.sin(angle) * 50;
          const endX = 150 + Math.cos(angle) * 20;
          const endY = 60 + Math.sin(angle) * 10;
          
          return (
            <circle
              key={i}
              r="2"
              fill="hsl(var(--salad-green))"
              opacity="0"
            >
              <animate
                attributeName="cx"
                from={startX}
                to={endX}
                dur="2s"
                begin={`${i * 0.05}s`}
                fill="freeze"
              />
              <animate
                attributeName="cy"
                from={startY}
                to={endY}
                dur="2s"
                begin={`${i * 0.05}s`}
                fill="freeze"
              />
              <animate
                attributeName="opacity"
                from="0"
                to="0.8"
                dur="2s"
                begin={`${i * 0.05}s`}
                fill="freeze"
              />
            </circle>
          );
        })}
      </g>
      
      {/* Logo text */}
      <text
        x="150"
        y="50"
        textAnchor="middle"
        fill="hsl(var(--june-bud))"
        fontSize="28"
        fontWeight="700"
        opacity="0"
      >
        Veralogix
        <animate attributeName="opacity" from="0" to="1" dur="1s" begin="2s" fill="freeze" />
      </text>
      
      <text
        x="150"
        y="75"
        textAnchor="middle"
        fill="hsl(var(--salad-green))"
        fontSize="18"
        fontWeight="600"
        opacity="0"
      >
        SecureConnect™
        <animate attributeName="opacity" from="0" to="1" dur="1s" begin="2.3s" fill="freeze" />
      </text>
      
      {/* Glow pulse */}
      <circle
        cx="150"
        cy="60"
        r="60"
        fill="none"
        stroke="hsl(var(--june-bud))"
        strokeWidth="1"
        opacity="0"
      >
        <animate attributeName="opacity" from="0" to="0.3" dur="0.5s" begin="2.5s" fill="freeze" />
        <animate attributeName="r" values="60;70;60" dur="3s" begin="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" begin="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};
