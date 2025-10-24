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
      // Freeze before black fade (adjust timing as needed, e.g., 2 seconds before end)
      if (v.duration && v.currentTime >= v.duration - 2) {
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
      
      <svg className="data-streams" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M 100 200 Q 250 150 400 200" className="stream-path stream-1" />
        <path d="M 500 250 Q 650 200 800 250" className="stream-path stream-2" />
        <path d="M 200 400 Q 350 350 500 400" className="stream-path stream-3" />
      </svg>
      
      <svg className="drone" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40">
        <ellipse cx="30" cy="20" rx="15" ry="8" fill="hsl(var(--salad-green))" opacity="0.6" />
        <circle cx="15" cy="15" r="4" fill="hsl(var(--neonC))" className="propeller" />
        <circle cx="45" cy="15" r="4" fill="hsl(var(--neonC))" className="propeller" />
        <rect x="24" y="16" width="12" height="8" rx="2" fill="hsl(var(--june-bud))" />
        <circle cx="30" cy="32" r="6" fill="rgba(79, 200, 255, 0.4)" className="drone-glow" />
      </svg>
      
      <div className="hero-dust" aria-hidden="true"></div>
      
      <div className="hero-content">
        <h1 id="hero-heading" className="hero-title">
          <span className="glow-text">Smart Living.</span>
          <span className="glow-text">Smarter Security.</span>
        </h1>
        <p className="hero-subtitle">
          Where AI, IoT, and design converge to protect and connect your community.
        </p>
        <a href="#vision" className="btn btn--neon" aria-label="Explore the future of smart living">
          Explore the Future <ArrowRight className="ml-2" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};
