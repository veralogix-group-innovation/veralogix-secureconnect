import { useEffect, useRef } from 'react';

export const ConnectedDiagram = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      const size = Math.min(container.clientWidth, 500);
      canvas.width = size;
      canvas.height = size;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Neural network structure
    const layers = [
      { nodes: 4, y: 0.15 },  // Input layer
      { nodes: 6, y: 0.4 },   // Hidden layer 1
      { nodes: 5, y: 0.65 },  // Hidden layer 2
      { nodes: 3, y: 0.9 }    // Output layer
    ];

    interface Node {
      x: number;
      y: number;
      layer: number;
      index: number;
      energy: number;
      pulse: number;
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

    // Create nodes
    layers.forEach((layer, layerIndex) => {
      const spacing = 1 / (layer.nodes + 1);
      for (let i = 0; i < layer.nodes; i++) {
        nodes.push({
          x: spacing * (i + 1),
          y: layer.y,
          layer: layerIndex,
          index: i,
          energy: Math.random(),
          pulse: Math.random() * Math.PI * 2
        });
      }
    });

    // Create connections between adjacent layers
    nodes.forEach(fromNode => {
      nodes.forEach(toNode => {
        if (toNode.layer === fromNode.layer + 1) {
          const numParticles = Math.floor(Math.random() * 2) + 1;
          connections.push({
            from: fromNode,
            to: toNode,
            particles: Array.from({ length: numParticles }, () => ({
              progress: Math.random(),
              speed: 0.003 + Math.random() * 0.005,
              size: 2 + Math.random() * 2,
              brightness: 0.5 + Math.random() * 0.5
            }))
          });
        }
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

      // Draw nodes
      nodes.forEach(node => {
        const x = node.x * w;
        const y = node.y * h;
        const baseSize = node.layer === 0 || node.layer === layers.length - 1 ? 8 : 6;
        const size = baseSize + node.energy * 3;

        // Node outer glow
        const outerGlow = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
        outerGlow.addColorStop(0, `rgba(186, 217, 107, ${node.energy * 0.3})`);
        outerGlow.addColorStop(0.5, `rgba(168, 207, 69, ${node.energy * 0.15})`);
        outerGlow.addColorStop(1, 'rgba(168, 207, 69, 0)');

        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(x, y, size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Node pulse ring
        const pulseSize = size + Math.sin(time * 2 + node.pulse) * 4;
        ctx.strokeStyle = `rgba(79, 255, 0, ${0.3 + node.energy * 0.2})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
        ctx.stroke();

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
        ctx.fillStyle = `rgba(255, 255, 255, ${node.energy * 0.4})`;
        ctx.beginPath();
        ctx.arc(x - size * 0.3, y - size * 0.3, size * 0.4, 0, Math.PI * 2);
        ctx.fill();
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
    </div>
  );
};