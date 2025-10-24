export const ConnectedDiagram = () => {
  const nodes = [
    { id: 'center', cx: 200, cy: 200, r: 20, label: 'Hub' },
    { id: 'n1', cx: 200, cy: 80, r: 12, label: '' },
    { id: 'n2', cx: 310, cy: 120, r: 12, label: '' },
    { id: 'n3', cx: 350, cy: 200, r: 12, label: '' },
    { id: 'n4', cx: 310, cy: 280, r: 12, label: '' },
    { id: 'n5', cx: 200, cy: 320, r: 12, label: '' },
    { id: 'n6', cx: 90, cy: 280, r: 12, label: '' },
    { id: 'n7', cx: 50, cy: 200, r: 12, label: '' },
    { id: 'n8', cx: 90, cy: 120, r: 12, label: '' },
  ];

  const connections = [
    { from: 'center', to: 'n1' },
    { from: 'center', to: 'n2' },
    { from: 'center', to: 'n3' },
    { from: 'center', to: 'n4' },
    { from: 'center', to: 'n5' },
    { from: 'center', to: 'n6' },
    { from: 'center', to: 'n7' },
    { from: 'center', to: 'n8' },
  ];

  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto" aria-labelledby="diagram-title">
      <title id="diagram-title">Connected Complex Diagram</title>
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(79, 200, 255, 0.3)" />
          <stop offset="50%" stopColor="rgba(79, 200, 255, 0.8)" />
          <stop offset="100%" stopColor="rgba(79, 200, 255, 0.3)" />
        </linearGradient>
      </defs>
      
      {/* Connection lines */}
      {connections.map((conn, idx) => {
        const from = nodes.find(n => n.id === conn.from);
        const to = nodes.find(n => n.id === conn.to);
        if (!from || !to) return null;
        
        return (
          <line
            key={idx}
            x1={from.cx}
            y1={from.cy}
            x2={to.cx}
            y2={to.cy}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="5 5"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="10"
              to="0"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>
        );
      })}
      
      {/* Data flow particles */}
      {connections.slice(0, 4).map((conn, idx) => {
        const from = nodes.find(n => n.id === conn.from);
        const to = nodes.find(n => n.id === conn.to);
        if (!from || !to) return null;
        
        return (
          <circle key={`particle-${idx}`} r="3" fill="rgba(79, 200, 255, 0.9)">
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              begin={`${idx * 0.5}s`}
              path={`M ${from.cx} ${from.cy} L ${to.cx} ${to.cy}`}
            />
          </circle>
        );
      })}
      
      {/* Nodes */}
      {nodes.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="hsl(var(--salad-green))"
            stroke="hsl(var(--june-bud))"
            strokeWidth="2"
          >
            {node.id === 'center' && (
              <animate
                attributeName="r"
                values={`${node.r};${node.r + 4};${node.r}`}
                dur="2s"
                repeatCount="indefinite"
              />
            )}
          </circle>
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r + 8}
            fill="none"
            stroke="hsl(var(--neonC))"
            strokeWidth="1"
            opacity="0.3"
          >
            <animate
              attributeName="r"
              values={`${node.r + 8};${node.r + 16};${node.r + 8}`}
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;0;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
    </svg>
  );
};
