import { cn } from "@/lib/utils";

interface NeonHeadingProps {
  children: React.ReactNode;
  level?: "h1" | "h2" | "h3";
  className?: string;
  gradient?: boolean;
}

export const NeonHeading = ({ 
  children, 
  level = "h2", 
  className = "",
  gradient = true 
}: NeonHeadingProps) => {
  const baseClasses = "font-bold tracking-tight";
  const gradientClasses = gradient 
    ? "bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent" 
    : "text-foreground";
  
  const sizes = {
    h1: "text-5xl md:text-7xl lg:text-8xl",
    h2: "text-3xl md:text-5xl lg:text-6xl",
    h3: "text-2xl md:text-3xl lg:text-4xl",
  };

  const Component = level;

  return (
    <Component className={cn(baseClasses, sizes[level], gradientClasses, className)}>
      {children}
    </Component>
  );
};
