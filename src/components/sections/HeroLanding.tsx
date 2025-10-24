import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import heroVideo from "@/assets/hero-landing.mp4";
import "./HeroLanding.css";

export const HeroLanding = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onTimeUpdate = () => {
      // Freeze at logo
      if (v.duration && v.currentTime >= v.duration - 0.1) {
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
    <section className="hero-landing" aria-labelledby="hero-heading">
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
      
      <div className="hero-content">
        <h1 id="hero-heading" className="hero-title">
          <span className="glow-text">Smart Living.</span>
          <span className="glow-text">Smarter Security.</span>
        </h1>
        <p className="hero-subtitle">
          Where AI, IoT, and design converge to protect and connect your community.
        </p>
        <div className="hero-cta">
          <a href="#vision" className="btn btn--neon" aria-label="Explore the future of smart living">
            Explore the Future <ArrowRight className="ml-2" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
