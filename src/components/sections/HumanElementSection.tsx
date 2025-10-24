import "./HumanElementSection.css";

export const HumanElementSection = () => {
  return (
    <section className="human-element-section" aria-labelledby="human-heading">
      <div className="ambient-dust" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 id="human-heading" className="section-title">
            Technology that Cares.
          </h2>
          <p className="section-description">
            SecureConnect is not just infrastructure; it's peace of mind — technology that quietly protects and beautifully enhances how we live.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="content-block">
            <div className="image-placeholder">
              <div className="glow-overlay"></div>
              <div className="placeholder-text">Family under glowing path lights</div>
            </div>
            <p className="caption">Safe pathways illuminated by intelligent lighting that adapts to movement and time</p>
          </div>
          
          <div className="content-block">
            <div className="image-placeholder">
              <div className="glow-overlay"></div>
              <div className="placeholder-text">Resident using holographic control panel</div>
            </div>
            <p className="caption">Intuitive interfaces that bring your home to your fingertips</p>
          </div>
          
          <div className="content-block lg:col-span-2 lg:max-w-2xl lg:mx-auto">
            <div className="image-placeholder">
              <div className="glow-overlay"></div>
              <div className="placeholder-text">Children watching a passing drone</div>
            </div>
            <p className="caption">Security that's visible yet non-intrusive, protecting what matters most</p>
          </div>
        </div>
      </div>
    </section>
  );
};
