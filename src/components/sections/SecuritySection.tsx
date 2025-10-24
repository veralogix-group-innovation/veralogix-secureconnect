import { SecurityShield } from "./SecurityShield";
import "./SecuritySection.css";

export const SecuritySection = () => {
  return (
    <section className="security-section" aria-labelledby="security-heading">
      <div className="binary-rain" aria-hidden="true">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="rain-column"
            style={{
              left: `${(i + 1) * 6}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${8 + i * 0.5}s`
            }}
          >
            {'01010110010101'.split('').map((char, j) => (
              <span key={j}>{char}</span>
            ))}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="content-wrapper">
          <SecurityShield />
          
          <div className="text-content">
            <h2 id="security-heading" className="security-title">
              Our Commitment to Security.
            </h2>
            <p className="security-description">
              End-to-end encryption, biometric verification, and adaptive AI defense ensure that your community remains private, compliant, and protected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
