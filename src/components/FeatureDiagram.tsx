import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface FeatureDiagramProps {
  steps: string[];
  className?: string;
}

export const FeatureDiagram = ({ steps, className }: FeatureDiagramProps) => {
  return (
    <div className={cn("relative", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="glass rounded-lg p-6 h-full border-2 border-primary/30 hover:border-primary/60 transition-all duration-300">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>
                <p className="text-foreground">{step}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
