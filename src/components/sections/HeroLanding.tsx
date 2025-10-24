import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/hero-landing.mp4";
import "./HeroLanding.css";

export const HeroLanding = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onTimeUpdate = () => {
      // Freeze before black fade
      if (v.duration && v.currentTime >= v.duration - 1) {
        v.pause();
      }
    };

    const onLoaded = () => setLoaded(true);

    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("loadeddata", onLoaded);

    const play = () => v.play().catch(() => {});
    play();

    return () => {
      v.removeEventListener("timeupdate", onTimeUpdate);
      v.removeEventListener("loadeddata", onLoaded);
    };
  }, []);

  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  return (
    <section className="hero-landing" aria-label="Hero video">
      <div className="hero-background">
        <video
          ref={videoRef}
          className={`hero-video ${loaded ? "opacity-100" : "opacity-0"}`}
          playsInline
          muted
          autoPlay
          preload="auto"
          aria-label="SecureConnect hero background"
        >
          {!prefersReducedMotion && (
            <source src={heroVideo} type="video/mp4" />
          )}
        </video>
      </div>
    </section>
  );
};
