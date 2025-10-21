import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
}

export const ServiceCard = ({ title, description, icon: Icon, slug }: ServiceCardProps) => {
  return (
    <Link to={`/services/${slug}`}>
      <Card className="glass hover-lift group border-primary/20 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(73,57%,54%/0.3)] transition-all duration-300 h-full">
        <CardHeader>
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
              <Icon className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};
