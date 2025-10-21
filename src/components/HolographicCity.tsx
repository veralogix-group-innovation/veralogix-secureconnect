export const HolographicCity = () => {
  return (
    <svg 
      className="absolute bottom-0 left-0 w-full h-auto opacity-80"
      viewBox="0 0 1920 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 0 20px hsl(var(--primary)))' }}
    >
      {/* City Skyline with neon green gradient */}
      <defs>
        <linearGradient id="cityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(73, 57%, 54%)" stopOpacity="0.9" />
          <stop offset="50%" stopColor="hsl(77, 54%, 64%)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(77, 50%, 40%)" stopOpacity="0.3" />
        </linearGradient>
        
        <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(73, 57%, 64%)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(73, 57%, 54%)" stopOpacity="0" />
        </linearGradient>

        {/* Grid pattern for holographic effect */}
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(73, 57%, 54%)" strokeWidth="0.5" opacity="0.2"/>
        </pattern>
      </defs>

      {/* Background glow bars */}
      <rect x="0" y="200" width="1920" height="200" fill="url(#glowGradient)" opacity="0.3" />

      {/* City buildings */}
      {/* Far left cluster */}
      <rect x="50" y="250" width="80" height="150" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '0s'}} />
      <rect x="140" y="280" width="60" height="120" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '0.5s'}} />
      <rect x="210" y="220" width="90" height="180" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '1s'}} />
      
      {/* Left cluster */}
      <rect x="350" y="200" width="70" height="200" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '0.3s'}} />
      <rect x="430" y="240" width="100" height="160" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '0.8s'}} />
      <rect x="540" y="180" width="85" height="220" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '1.2s'}} />
      
      {/* Center tall buildings */}
      <rect x="680" y="120" width="90" height="280" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '0.2s'}} />
      <rect x="780" y="100" width="110" height="300" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '0.6s'}} />
      <rect x="900" y="140" width="95" height="260" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '1.4s'}} />
      <rect x="1005" y="110" width="105" height="290" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '0.4s'}} />
      
      {/* Right cluster */}
      <rect x="1160" y="190" width="80" height="210" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '0.9s'}} />
      <rect x="1250" y="230" width="95" height="170" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '1.1s'}} />
      <rect x="1355" y="210" width="75" height="190" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '0.7s'}} />
      
      {/* Far right cluster */}
      <rect x="1480" y="260" width="90" height="140" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '1.3s'}} />
      <rect x="1580" y="240" width="70" height="160" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '0.5s'}} />
      <rect x="1660" y="270" width="85" height="130" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '1.5s'}} />
      <rect x="1755" y="250" width="100" height="150" fill="url(#cityGradient)" className="animate-float" style={{animationDelay: '0.3s'}} />

      {/* Grid overlay for holographic effect */}
      <rect x="0" y="100" width="1920" height="300" fill="url(#grid)" opacity="0.4" />

      {/* Window lights - small rectangles on buildings */}
      {Array.from({ length: 80 }).map((_, i) => {
        const x = 50 + (i % 20) * 90 + Math.random() * 20;
        const y = 150 + Math.floor(i / 20) * 40 + Math.random() * 20;
        return (
          <rect 
            key={i} 
            x={x} 
            y={y} 
            width="4" 
            height="6" 
            fill="hsl(180, 100%, 50%)"
            opacity={Math.random() > 0.5 ? 0.8 : 0.3}
            className="animate-pulse"
            style={{animationDelay: `${Math.random() * 2}s`}}
          />
        );
      })}

      {/* Bottom glow line */}
      <line 
        x1="0" 
        y1="400" 
        x2="1920" 
        y2="400" 
        stroke="hsl(73, 57%, 54%)" 
        strokeWidth="2"
        opacity="0.8"
      />
    </svg>
  );
};
