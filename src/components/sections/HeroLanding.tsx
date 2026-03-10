import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import heroDesktop from "@/assets/hero-desktop.mp4";
import heroMobile from "@/assets/hero-mobile.mp4";
import "./HeroLanding.css";

export const HeroLanding = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onEnded = () => {
      v.pause();
      // Ensure we stay on the last frame
      if (v.duration && !isNaN(v.duration)) {
        v.currentTime = v.duration - 0.001;
      }
    };

    const onLoaded = () => {
      setLoaded(true);
      // Start muted to allow autoplay on mobile
      v.muted = true;
      v.play().then(() => {
        // Try to unmute after starting (works on desktop, requires interaction on mobile)
        if (!isMobile) {
          v.muted = false;
        }
      }).catch(() => {});
    };

    v.addEventListener("ended", onEnded);
    v.addEventListener("loadeddata", onLoaded);

    return () => {
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("loadeddata", onLoaded);
    };
  }, [isMobile]);

  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const videoSrc = isMobile ? heroMobile : heroDesktop;

  return (
    <section className="hero-landing" aria-labelledby="hero-heading">
      <div className="hero-background">
        <video
          ref={videoRef}
          key={videoSrc}
          className={`hero-video ${loaded ? "opacity-100" : "opacity-0"}`}
          playsInline
          preload="auto"
          muted
          aria-label="SecureConnect hero background"
        >
          {!prefersReducedMotion && (
            <source src={videoSrc} type="video/mp4" />
          )}
        </video>
      </div>
      
      <div className={`hero-content ${loaded ? 'hero-content--visible' : ''}`}>
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
