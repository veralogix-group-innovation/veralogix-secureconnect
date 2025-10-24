import { ConnectedDiagram } from "./ConnectedDiagram";

export const VisionSection = () => {
  return (
    <section id="vision" className="py-20 px-4 bg-[var(--base)]" aria-labelledby="vision-heading">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-content">
            <h2 id="vision-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'hsl(var(--june-bud))', textShadow: '0 0 20px rgba(186, 217, 107, 0.4)' }}>
              A Connected Future
            </h2>
            <p className="text-white text-lg leading-relaxed" style={{ opacity: 0.9 }}>
              Veralogix SecureConnect™ transforms residential living into a seamlessly connected ecosystem. Every sensor, every access point, every digital service speaks the same secure language — creating comfort, safety, and efficiency in perfect sync.
            </p>
          </div>
          
          <div className="diagram-content">
            <ConnectedDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};
