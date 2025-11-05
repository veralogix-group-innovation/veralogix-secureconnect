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
  videoSrc?: string;
}

export const CardFX = ({
  title,
  icon,
  description,
  ctaLabel = "Read More",
  ctaLink = "#",
  className,
  videoSrc
}: CardFXProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      setIsOpen(false);
      closeTimeoutRef.current = null;
    }, 800);
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isOpen) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, []);

  return (
    <div
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
      <div 
        className={`${styles.face} ${styles.face2}`}
        onMouseEnter={openCard}
        onMouseLeave={scheduleCloseCard}
      >
        {videoSrc && (
          <video
            ref={videoRef}
            className={styles.video}
            src={videoSrc}
            loop
            muted
            playsInline
            aria-hidden="true"
          />
        )}
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
