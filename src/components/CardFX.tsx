import { cn } from "@/lib/utils";
import styles from "./CardFX.module.css";

interface CardFXProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  ctaLabel?: string;
  ctaLink?: string;
  className?: string;
}

export const CardFX = ({ 
  title, 
  icon, 
  description, 
  ctaLabel = "Read More",
  ctaLink = "#",
  className 
}: CardFXProps) => {
  return (
    <div className={cn(styles.card, className)}>
      <div className={`${styles.face} ${styles.face1}`}>
        <div className={styles.content}>
          <div className={styles.iconWrapper} aria-hidden="true">
            {icon}
          </div>
          <h3>{title}</h3>
        </div>
      </div>
      <div className={`${styles.face} ${styles.face2}`}>
        <div className={styles.content}>
          <p>{description}</p>
          <a href={ctaLink} type="button">
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
};
