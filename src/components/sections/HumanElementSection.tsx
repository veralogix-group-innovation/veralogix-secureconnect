import "./HumanElementSection.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import familyLightsVideo from "@/assets/family-glowing-lights.mp4";
import holographicPanelVideo from "@/assets/resident-holographic-panel.mp4";
import droneVideo from "@/assets/children-watching-drone.mp4";
import airQualityVideo from "@/assets/resident-air-quality.mp4";

const VideoCard = ({ 
  videoSrc, 
  caption, 
  linkTo 
}: { 
  videoSrc: string; 
  caption: string; 
  linkTo: string; 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <Link 
      to={linkTo} 
      className="content-block group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image-placeholder overflow-hidden">
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="glow-overlay"></div>
      </div>
      <p className="caption">{caption}</p>
    </Link>
  );
};

export const HumanElementSection = () => {
  return (
    <section className="human-element-section" aria-labelledby="human-heading">
      <div className="ambient-dust" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 id="human-heading" className="section-title">
            Technology that Cares.
          </h2>
          <p className="section-description">
            SecureConnect is not just infrastructure; it's peace of mind — technology that quietly protects and beautifully enhances how we live.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <VideoCard
            videoSrc={familyLightsVideo}
            caption="Safe pathways illuminated by intelligent lighting that adapts to movement and time"
            linkTo="/services/iot-sensors"
          />
          
          <VideoCard
            videoSrc={holographicPanelVideo}
            caption="Intuitive interfaces that bring your home to your fingertips"
            linkTo="/services/ai-concierge"
          />
          
          <VideoCard
            videoSrc={droneVideo}
            caption="Security that's visible yet non-intrusive, protecting what matters most"
            linkTo="/services/drone-roof-inspections"
          />
          
          <VideoCard
            videoSrc={airQualityVideo}
            caption="Wellness monitoring that ensures healthy, comfortable living spaces for everyone"
            linkTo="/services/wellness-sensors"
          />
        </div>
      </div>
    </section>
  );
};
