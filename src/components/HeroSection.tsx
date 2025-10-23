import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/hero.mp4";
import logo from "@/assets/logo-no-bg.svg";
import "./HeroSection.css";

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onEnded = () => {
      // Freeze on last frame (keep the logo visible)
      try {
        v.pause();
        // Some browsers snap to 0, force last frame
        v.currentTime = Math.max(0, (v.duration || 0) - 0.05);
      } catch {}
    };

    const onLoaded = () => setLoaded(true);

    v.addEventListener("ended", onEnded);
    v.addEventListener("loadeddata", onLoaded);

    // Auto-play inline, muted for mobile
    const play = () => v.play().catch(() => {/* ignore autoplay errors */});
    play();

    return () => {
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("loadeddata", onLoaded);
    };
  }, []);

  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  return (
    <section className="relative min-h-[80vh] md:min-h-screen overflow-hidden bg-[var(--base)]" aria-label="Hero section">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className={`h-full w-full object-cover ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
          playsInline
          muted
          autoPlay
          preload="auto"
          poster={logo}
          aria-label="SecureConnect hero video"
        >
          {!prefersReducedMotion && (
            <source src={heroVideo} type="video/mp4" />
          )}
        </video>
        {/* Subtle overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" aria-hidden="true" />
      </div>

      {/* Content overlay */}
      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 text-center">
        <h1 className="text-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="block text-white">SecureConnect&#x1a; for Complexes</span>
          <span className="block text-[hsl(var(--primary))] mt-3">Futuristic. Secure. Connected.</span>
        </h1>

        <p className="text-body text-lg md:text-xl text-white/90 max-w-3xl mx-auto mt-6">
          Smart services that reduce false alarms, optimize energy, and delight residents.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="btn btn--neon" aria-label="Book a demo">
            Book a demo
          </a>
          <a href="/services" className="btn btn--shimmer" aria-label="Explore services">
            View services
          </a>
        </div>
      </div>

      {/* Equalizer at bottom */}
      <div className="eq-wrap" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} style={{ ["--i" as any]: i } as React.CSSProperties} />
        ))}
      </div>
    </section>
  );
};
