import { useEffect, useRef, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      onComplete();
    };

    video.addEventListener("ended", handleEnded);
    video.play().catch(err => console.error("Video autoplay failed:", err));

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [onComplete, isMobile]);

  const videoSrc = isMobile ? "/loading-mobile.mp4" : "/loading-desktop.mp4";

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        key={videoSrc}
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};
