import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
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
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openCard = () => {
    clearCloseTimeout();
    setIsOpen(true);
  };

  const scheduleCloseCard = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      const cardElement = cardRef.current;

      if (!cardElement) {
        setIsOpen(false);
        closeTimeoutRef.current = null;
        return;
      }

      const activeElement =
        typeof document !== "undefined" ? document.activeElement : null;
      const isFocusWithin =
        activeElement instanceof Node && cardElement.contains(activeElement);
      const isPointerOver =
        typeof window !== "undefined" && cardElement.matches(":hover");

      if (isFocusWithin || isPointerOver) {
        closeTimeoutRef.current = null;
        return;
      }

      setIsOpen(false);
      closeTimeoutRef.current = null;
    }, 300);
  };

  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(styles.card, className)}
      data-open={isOpen}
      onMouseEnter={openCard}
      onMouseLeave={scheduleCloseCard}
      onFocusCapture={openCard}
      onBlur={scheduleCloseCard}
    >
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
          <Link to={ctaLink} className="inline-block">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};
