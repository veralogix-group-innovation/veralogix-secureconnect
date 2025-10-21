import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
}

export const ServiceCard = ({ title, description, icon: Icon, slug }: ServiceCardProps) => {
  return (
    <Card 
      className={cn(
        "glass group relative h-full overflow-hidden",
        "border-2 border-transparent bg-gradient-to-br from-primary/10 via-transparent to-primary/5",
        "before:absolute before:inset-0 before:rounded-lg before:p-[2px]",
        "before:bg-[linear-gradient(135deg,hsl(73,57%,54%),hsl(77,54%,64%),hsl(77,50%,40%))]",
        "before:-z-10 before:opacity-50",
        "hover:before:opacity-100",
        "hover:shadow-[0_0_40px_hsl(180,100%,50%/0.4)]",
        "transition-all duration-500 hover-lift"
      )}
    >
      <Link to={`/services/${slug}`} className="block h-full">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/20 group-hover:from-primary/50 group-hover:to-secondary/40 transition-all duration-300">
            <Icon 
              className="h-8 w-8 text-primary group-hover:text-secondary transition-colors duration-300" 
              aria-label={`${title} icon`}
            />
          </div>
          <h3 className="text-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-body text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
          <Button 
            variant="ghost" 
            size="sm"
            className="w-full group/btn border border-primary/30 hover:border-primary hover:bg-primary/10 text-primary"
          >
            Explore
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Link>
    </Card>
  );
};
