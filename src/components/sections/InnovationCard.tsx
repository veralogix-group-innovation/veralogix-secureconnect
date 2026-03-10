import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface InnovationCardProps {
  icon: ReactNode;
  title: string;
  caption: string;
  slug: string;
}

export const InnovationCard = ({ icon, title, caption, slug }: InnovationCardProps) => {
  return (
    <Link to={`/services/${slug}`} className="innovation-card">
      <div className="icon-container">
        {icon}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-caption">{caption}</p>
      
      <style>{`
        .innovation-card {
          display: block;
          background: rgba(55, 52, 53, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid hsl(var(--neonC));
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 15px rgba(111, 255, 0, 0.2);
          text-decoration: none;
          cursor: pointer;
        }
        
        .innovation-card:hover {
          box-shadow: 
            0 0 25px rgba(111, 255, 0, 0.4),
            0 0 50px rgba(111, 255, 0, 0.2);
          transform: translateY(-4px);
          border-color: hsl(var(--neonE));
        }
        
        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        
        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: hsl(var(--june-bud));
          margin-bottom: 0.75rem;
        }
        
        .card-caption {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .innovation-card {
            transition: none;
          }
          .innovation-card:hover {
            transform: none;
          }
        }
      `}</style>
    </Link>
  );
};
