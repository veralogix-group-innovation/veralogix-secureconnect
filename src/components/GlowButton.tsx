import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/components/ui/button";

interface GlowButtonProps extends ButtonProps {
  glow?: "green" | "light";
}

export const GlowButton = ({ glow = "green", className = "", ...props }: GlowButtonProps) => {
  const glowClass = glow === "green" ? "glow-green" : "glow-light";
  
  return (
    <Button 
      className={`hover:${glowClass} ${className}`}
      {...props} 
    />
  );
};
