import { NeonHeading } from "@/components/NeonHeading";
import { MetricPill } from "@/components/MetricPill";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Zap, Droplet, AlertCircle, Users, Car } from "lucide-react";

const Demo = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <NeonHeading level="h1" className="mb-4">
            Dashboard Simulator
          </NeonHeading>
          <p className="text-xl text-muted-foreground">
            Experience SecureConnect™ command center in action
          </p>
        </div>

        {/* Key Metrics Row */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-in">
          <MetricPill label="Active Residents" value="342" variant="info" />
          <MetricPill label="Energy Efficiency" value="94%" variant="success" />
          <MetricPill label="Uptime" value="99.9%" variant="success" />
          <MetricPill label="Open Tickets" value="3" variant="warning" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Access Events */}
          <Card className="glass animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Activity className="h-5 w-5" />
                Recent Access Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "John Smith", unit: "Unit 5B", time: "2 min ago", status: "success" },
                { name: "Maria Garcia", unit: "Unit 12A", time: "5 min ago", status: "success" },
                { name: "Unknown", unit: "Main Lobby", time: "8 min ago", status: "denied" },
                { name: "David Chen", unit: "Gym", time: "12 min ago", status: "success" },
              ].map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${event.status === 'success' ? 'bg-primary' : 'bg-destructive'} animate-pulse`} />
                    <div>
                      <div className="font-medium text-foreground">{event.name}</div>
                      <div className="text-sm text-muted-foreground">{event.unit}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{event.time}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Sensor Status */}
          <Card className="glass animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <Zap className="h-5 w-5" />
                IoT Sensor Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { zone: "Building A", temp: "22°C", humidity: "45%", status: "optimal" },
                { zone: "Building B", temp: "21°C", humidity: "48%", status: "optimal" },
                { zone: "Parking Level 1", temp: "18°C", humidity: "55%", status: "optimal" },
                { zone: "Rooftop", temp: "16°C", humidity: "62%", status: "check" },
              ].map((sensor, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-secondary/20">
                  <div>
                    <div className="font-medium text-foreground">{sensor.zone}</div>
                    <div className="text-sm text-muted-foreground">
                      {sensor.temp} • {sensor.humidity}
                    </div>
                  </div>
                  <Badge variant={sensor.status === 'optimal' ? 'default' : 'outline'}>
                    {sensor.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Energy & Water */}
          <Card className="glass animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Droplet className="h-5 w-5" />
                Utilities Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Energy Usage (Today)</span>
                  <span className="font-bold text-primary">1,245 kWh</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary w-[65%] animate-shimmer" 
                       style={{ backgroundSize: '200% 100%' }} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">65% of daily average</div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Water Usage (Today)</span>
                  <span className="font-bold text-secondary">8,420 L</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[72%]" />
                </div>
                <div className="text-xs text-muted-foreground mt-1">72% of daily average</div>
              </div>
            </CardContent>
          </Card>

          {/* Maintenance Tickets */}
          <Card className="glass animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <AlertCircle className="h-5 w-5" />
                Active Maintenance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { title: "HVAC Filter Replacement", unit: "Building A", priority: "low", eta: "3 days" },
                { title: "Elevator Inspection", unit: "Building B", priority: "medium", eta: "Tomorrow" },
                { title: "Leak Detection Alert", unit: "Unit 8C", priority: "high", eta: "2 hours" },
              ].map((ticket, index) => (
                <div key={index} className="p-3 rounded-lg bg-card/50 border border-accent/20">
                  <div className="flex items-start justify-between mb-2">
                    <div className="font-medium text-foreground">{ticket.title}</div>
                    <Badge variant={ticket.priority === 'high' ? 'destructive' : 'outline'}>
                      {ticket.priority}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{ticket.unit}</span>
                    <span className="text-muted-foreground">ETA: {ticket.eta}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* EV Charging */}
          <Card className="glass lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <Car className="h-5 w-5" />
                EV Charging Stations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { id: "A1", status: "charging", power: "7.2 kW", remaining: "45 min" },
                  { id: "A2", status: "available", power: "—", remaining: "—" },
                  { id: "B1", status: "charging", power: "11 kW", remaining: "1h 20m" },
                  { id: "B2", status: "charging", power: "7.2 kW", remaining: "30 min" },
                ].map((station) => (
                  <div key={station.id} className="p-4 rounded-lg bg-card/50 border border-secondary/20 text-center">
                    <div className="text-2xl font-bold text-secondary mb-2">{station.id}</div>
                    <Badge variant={station.status === 'charging' ? 'default' : 'outline'} className="mb-2">
                      {station.status}
                    </Badge>
                    <div className="text-sm text-muted-foreground">{station.power}</div>
                    <div className="text-xs text-muted-foreground">{station.remaining}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Demo;
