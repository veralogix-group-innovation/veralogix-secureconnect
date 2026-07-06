import { useEffect, useRef, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const videoSrc = isMobile ? "/loading-mobile.mp4" : "/loading-desktop.mp4";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      onComplete();
    };

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.error("Video autoplay failed:", err);
      }
    };

    video.addEventListener("ended", handleEnded);

    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener("canplaythrough", playVideo, { once: true });
    }

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [onComplete, videoSrc]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center p-4 md:p-8 lg:p-12">
      <div
        className="relative w-full max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw]"
        style={{ aspectRatio: "16 / 9" }}
      >
        {/* Fallback background shown before video/poster loads */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <video
          ref={videoRef}
          key={videoSrc}
          className="absolute inset-0 w-full h-full object-contain"
          poster="/loading-poster.jpg"
          muted
          playsInline
          preload="auto"
          aria-label="Loading animation"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
