import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/components/ui/button";

interface GlowButtonProps extends ButtonProps {
  glow?: "green" | "blue" | "pink";
}

export const GlowButton = ({ glow = "green", className = "", ...props }: GlowButtonProps) => {
  const glowClass = glow === "green" ? "glow-green" : glow === "blue" ? "glow-blue" : "glow-pink";
  
  return (
    <Button 
      className={`hover:${glowClass} ${className}`}
      {...props} 
    />
  );
};
