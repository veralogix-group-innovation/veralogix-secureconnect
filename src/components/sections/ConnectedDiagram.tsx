import { useEffect, useRef } from 'react';
import logoImage from '@/assets/logo-veralogix.png';

export const ConnectedDiagram = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load logo
    const logo = new Image();
    logo.src = logoImage;

    // Set canvas size
    const updateSize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      const size = Math.min(container.clientWidth, 600);
      canvas.width = size;
      canvas.height = size;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Organized circular network structure radiating from center
    const centerX = 0.5;
    const centerY = 0.5;
    const rings = [
      { nodes: 8, radius: 0.38, labels: ['IoT Sensors', 'Access Control', 'EV Charging', 'Vertical Farms', 'AI Concierge', 'Predictive AI', 'Wellness', 'Community'] },
      { nodes: 12, radius: 0.28, labels: [] },
      { nodes: 6, radius: 0.15, labels: [] }
    ];

    interface Node {
      x: number;
      y: number;
      ring: number;
      angle: number;
      index: number;
      energy: number;
      pulse: number;
      label?: string;
    }

    interface Connection {
      from: Node;
      to: Node;
      particles: Particle[];
    }

    interface Particle {
      progress: number;
      speed: number;
      size: number;
      brightness: number;
    }

    const nodes: Node[] = [];
    const connections: Connection[] = [];

    // Create nodes in organized circular rings
    rings.forEach((ring, ringIndex) => {
      const angleStep = (Math.PI * 2) / ring.nodes;
      for (let i = 0; i < ring.nodes; i++) {
        const angle = angleStep * i - Math.PI / 2; // Start from top
        nodes.push({
          x: centerX + Math.cos(angle) * ring.radius,
          y: centerY + Math.sin(angle) * ring.radius,
          ring: ringIndex,
          angle,
          index: i,
          energy: Math.random(),
          pulse: Math.random() * Math.PI * 2,
          label: ring.labels[i]
        });
      }
    });

    // Create connections: outer rings connect to inner rings (converging to center)
    nodes.forEach(fromNode => {
      nodes.forEach(toNode => {
        // Connect to next inner ring
        if (toNode.ring === fromNode.ring + 1) {
          const numParticles = Math.floor(Math.random() * 2) + 1;
          connections.push({
            from: fromNode,
            to: toNode,
            particles: Array.from({ length: numParticles }, () => ({
              progress: Math.random(),
              speed: 0.002 + Math.random() * 0.004,
              size: 2 + Math.random() * 2,
              brightness: 0.5 + Math.random() * 0.5
            }))
          });
        }
      });
    });

    // Add connections from innermost ring to center
    const centerNode: Node = {
      x: centerX,
      y: centerY,
      ring: rings.length,
      angle: 0,
      index: 0,
      energy: 1,
      pulse: 0
    };
    
    nodes.filter(n => n.ring === rings.length - 1).forEach(node => {
      connections.push({
        from: node,
        to: centerNode,
        particles: Array.from({ length: 2 }, () => ({
          progress: Math.random(),
          speed: 0.002 + Math.random() * 0.003,
          size: 2 + Math.random() * 2,
          brightness: 0.6 + Math.random() * 0.4
        }))
      });
    });

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      const w = canvas.width;
      const h = canvas.height;

      // Clear with fade effect
      ctx.fillStyle = 'rgba(55, 52, 53, 0.15)';
      ctx.fillRect(0, 0, w, h);

      // Update node energy
      nodes.forEach(node => {
        node.pulse += 0.05;
        node.energy = 0.5 + Math.sin(node.pulse) * 0.3;
      });

      // Draw connections
      connections.forEach(conn => {
        const fromX = conn.from.x * w;
        const fromY = conn.from.y * h;
        const toX = conn.to.x * w;
        const toY = conn.to.y * h;

        // Connection line with gradient
        const gradient = ctx.createLinearGradient(fromX, fromY, toX, toY);
        const alpha = (conn.from.energy + conn.to.energy) * 0.15;
        gradient.addColorStop(0, `rgba(31, 255, 0, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(79, 255, 0, ${alpha * 1.5})`);
        gradient.addColorStop(1, `rgba(31, 255, 0, ${alpha})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();

        // Animate particles along connections
        conn.particles.forEach(particle => {
          particle.progress += particle.speed;
          if (particle.progress > 1) {
            particle.progress = 0;
            particle.speed = 0.003 + Math.random() * 0.005;
          }

          const x = fromX + (toX - fromX) * particle.progress;
          const y = fromY + (toY - fromY) * particle.progress;

          // Particle glow
          const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, particle.size * 3);
          glowGradient.addColorStop(0, `rgba(111, 255, 0, ${particle.brightness * 0.8})`);
          glowGradient.addColorStop(0.5, `rgba(79, 255, 0, ${particle.brightness * 0.4})`);
          glowGradient.addColorStop(1, 'rgba(31, 255, 0, 0)');

          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(x, y, particle.size * 3, 0, Math.PI * 2);
          ctx.fill();

          // Particle core
          ctx.fillStyle = `rgba(159, 255, 0, ${particle.brightness})`;
          ctx.beginPath();
          ctx.arc(x, y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // Draw center glow only (logo moved to HTML overlay)
      if (logo.complete) {
        // Center glow
        const centerGlow = ctx.createRadialGradient(centerX * w, centerY * h, 0, centerX * w, centerY * h, w * 0.15);
        centerGlow.addColorStop(0, `rgba(186, 217, 107, ${0.4 + Math.sin(time * 2) * 0.2})`);
        centerGlow.addColorStop(0.5, `rgba(168, 207, 69, ${0.2 + Math.sin(time * 2) * 0.1})`);
        centerGlow.addColorStop(1, 'rgba(168, 207, 69, 0)');
        
        ctx.fillStyle = centerGlow;
        ctx.beginPath();
        ctx.arc(centerX * w, centerY * h, w * 0.15, 0, Math.PI * 2);
        ctx.fill();

        // Rotating ring around logo
        ctx.save();
        ctx.translate(centerX * w, centerY * h);
        ctx.rotate(time * 0.5);
        ctx.strokeStyle = `rgba(182, 255, 46, ${0.3 + Math.sin(time * 3) * 0.2})`;
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.arc(0, 0, w * 0.12, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Draw nodes
      nodes.forEach(node => {
        const x = node.x * w;
        const y = node.y * h;
        const baseSize = node.ring === 0 ? 7 : 5;
        const size = baseSize + node.energy * 2;

        // Node outer glow
        const outerGlow = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
        outerGlow.addColorStop(0, `rgba(186, 217, 107, ${node.energy * 0.3})`);
        outerGlow.addColorStop(0.5, `rgba(168, 207, 69, ${node.energy * 0.15})`);
        outerGlow.addColorStop(1, 'rgba(168, 207, 69, 0)');

        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(x, y, size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Node pulse ring (only for outer ring)
        if (node.ring === 0) {
          const pulseSize = size + Math.sin(time * 2 + node.pulse) * 3;
          ctx.strokeStyle = `rgba(182, 255, 46, ${0.4 + node.energy * 0.2})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Node core gradient
        const coreGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        coreGradient.addColorStop(0, `rgba(186, 217, 107, ${0.9 + node.energy * 0.1})`);
        coreGradient.addColorStop(0.7, `rgba(168, 207, 69, ${0.8 + node.energy * 0.2})`);
        coreGradient.addColorStop(1, `rgba(125, 156, 51, ${0.6 + node.energy * 0.4})`);

        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        // Node highlight
        ctx.fillStyle = `rgba(255, 255, 255, ${node.energy * 0.3})`;
        ctx.beginPath();
        ctx.arc(x - size * 0.3, y - size * 0.3, size * 0.35, 0, Math.PI * 2);
        ctx.fill();

        // Draw labels for outer ring
        if (node.label && node.ring === 0) {
          ctx.save();
          ctx.font = `${w * 0.022}px Inter, sans-serif`;
          ctx.fillStyle = `rgba(186, 217, 107, ${0.7 + node.energy * 0.3})`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          
          // Position label outside the node
          const labelRadius = rings[0].radius + 0.08;
          const labelX = (centerX + Math.cos(node.angle) * labelRadius) * w;
          const labelY = (centerY + Math.sin(node.angle) * labelRadius) * h;
          
          ctx.fillText(node.label, labelX, labelY);
          ctx.restore();
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto" style={{ aspectRatio: '1/1' }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        aria-label="Neural network diagram showing connected SecureConnect ecosystem"
      />
      
      {/* Frosted glass logo container overlay */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full"
        style={{
          width: '28%',
          height: '28%',
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(186, 217, 107, 0.2)',
          boxShadow: '0 0 24px rgba(168, 207, 69, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.05)'
        }}
      >
        <img 
          src={logoImage} 
          alt="Veralogix SecureConnect" 
          className="w-[85%] h-auto object-contain"
          style={{ filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))' }}
        />
      </div>
    </div>
  );
};