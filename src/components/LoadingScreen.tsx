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
    
    // Play when video can play through
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
