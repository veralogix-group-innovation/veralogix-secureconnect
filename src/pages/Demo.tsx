import { useState } from "react";
import { NeonHeading } from "@/components/NeonHeading";
import { MetricPill } from "@/components/MetricPill";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Activity, Zap, Droplet, AlertCircle, Car, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock Data
const accessEvents = [
  { id: 1, timestamp: "14:32:15", user: "John Smith", location: "Main Entrance", unit: "5B", status: "Granted" },
  { id: 2, timestamp: "14:28:42", user: "Maria Garcia", location: "Parking Gate", unit: "12A", status: "Granted" },
  { id: 3, timestamp: "14:25:18", user: "Unknown", location: "Rear Door", unit: "—", status: "Denied" },
  { id: 4, timestamp: "14:20:05", user: "David Chen", location: "Gym", unit: "8C", status: "Granted" },
  { id: 5, timestamp: "14:15:33", user: "Sarah Johnson", location: "Pool Area", unit: "3A", status: "Granted" },
];

const sensorData = [
  { zone: "Building A - Floor 1-5", temp: "22°C", humidity: "45%", co2: "420 ppm", status: "optimal" },
  { zone: "Building A - Floor 6-10", temp: "21°C", humidity: "48%", co2: "435 ppm", status: "optimal" },
  { zone: "Building B - Floor 1-5", temp: "23°C", humidity: "43%", co2: "415 ppm", status: "optimal" },
  { zone: "Parking Level 1", temp: "18°C", humidity: "55%", co2: "450 ppm", status: "optimal" },
  { zone: "Parking Level 2", temp: "17°C", humidity: "58%", co2: "460 ppm", status: "check" },
  { zone: "Rooftop Equipment", temp: "16°C", humidity: "62%", co2: "—", status: "check" },
];

const energyData = [
  { day: "Mon", usage: 1188 },
  { day: "Tue", usage: 1095 },
  { day: "Wed", usage: 1142 },
  { day: "Thu", usage: 1220 },
  { day: "Fri", usage: 1165 },
  { day: "Sat", usage: 980 },
  { day: "Today", usage: 1097 },
];

const waterData = [
  { day: "Mon", usage: 8200 },
  { day: "Tue", usage: 7800 },
  { day: "Wed", usage: 8500 },
  { day: "Thu", usage: 9100 },
  { day: "Fri", usage: 8700 },
  { day: "Sat", usage: 7200 },
  { day: "Today", usage: 8420 },
];

const evLoadTimeline = [
  { time: "12:00", station: "A1", event: "Start Charging", power: "7.2 kW" },
  { time: "12:45", station: "B2", event: "Start Charging", power: "7.2 kW" },
  { time: "13:15", station: "B1", event: "Start Charging", power: "11 kW" },
  { time: "13:30", station: "A2", event: "Charging Complete", power: "—" },
  { time: "14:00", station: "A1", event: "85% Charged", power: "7.2 kW" },
  { time: "14:20", station: "B2", event: "Charging Complete", power: "—" },
];

const maintenanceQueue = [
  { id: "M-2401", title: "Leak Detection Alert", location: "Unit 8C", priority: "high", assigned: "Mike Torres", eta: "2 hours" },
  { id: "M-2398", title: "Elevator Inspection", location: "Building B", priority: "medium", assigned: "Sarah Kim", eta: "Tomorrow 9AM" },
  { id: "M-2395", title: "HVAC Filter Replacement", location: "Building A - Floors 6-10", priority: "low", assigned: "James Wilson", eta: "3 days" },
  { id: "M-2392", title: "Fire Alarm Test", location: "All Buildings", priority: "medium", assigned: "Security Team", eta: "Friday 6PM" },
];

const Demo = () => {
  const [glowIntensity, setGlowIntensity] = useState<"low" | "high">("high");

  const toggleGlow = () => {
    setGlowIntensity(prev => prev === "high" ? "low" : "high");
  };

  return (
    <div 
      className="min-h-screen py-20 px-4 transition-all duration-500"
      style={{
        filter: glowIntensity === "low" ? "brightness(0.85) saturate(0.8)" : "brightness(1) saturate(1)",
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-start mb-12">
          <div className="text-center flex-1 animate-fade-in">
            <NeonHeading level="h1" className="mb-4">
              Dashboard Simulator
            </NeonHeading>
            <p className="text-xl text-muted-foreground">
              Experience SecureConnect™ command center in action
            </p>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={toggleGlow}
            className="gap-2"
          >
            <Sun className="h-4 w-4" />
            Glow: {glowIntensity === "high" ? "High" : "Low"}
          </Button>
        </div>

        {/* Key Metrics Row */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-in">
          <MetricPill label="Active Residents" value="342" variant="info" />
          <MetricPill label="Energy Efficiency" value="94%" variant="success" />
          <MetricPill label="Uptime" value="99.9%" variant="success" />
          <MetricPill label="Open Tickets" value="4" variant="warning" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Access Events Table */}
          <Card className="glass animate-fade-in lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Activity className="h-5 w-5" />
                Recent Access Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {accessEvents.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell className="font-mono text-sm">{event.timestamp}</TableCell>
                      <TableCell className="font-medium">{event.user}</TableCell>
                      <TableCell>{event.location}</TableCell>
                      <TableCell>{event.unit}</TableCell>
                      <TableCell>
                        <Badge variant={event.status === "Granted" ? "default" : "destructive"}>
                          {event.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* IoT Sensor Status */}
          <Card className="glass animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <Zap className="h-5 w-5" />
                IoT Sensor Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {sensorData.map((sensor, index) => (
                <div key={index} className="p-3 rounded-lg bg-card/50 border border-secondary/20">
                  <div className="flex items-start justify-between mb-2">
                    <div className="font-medium text-foreground">{sensor.zone}</div>
                    <Badge variant={sensor.status === 'optimal' ? 'default' : 'outline'}>
                      {sensor.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
                    <div>{sensor.temp}</div>
                    <div>{sensor.humidity}</div>
                    <div>{sensor.co2}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Energy Usage Area Chart */}
          <Card className="glass animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Activity className="h-5 w-5" />
                Energy Usage (Last 7 Days)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  usage: {
                    label: "Usage (kWh)",
                    color: "hsl(var(--primary))",
                  },
                }}
                className="h-[250px]"
              >
                <AreaChart data={energyData}>
                  <defs>
                    <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="day" 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="usage"
                    stroke="hsl(var(--primary))"
                    fill="url(#energyGradient)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Water Usage Bar Chart */}
          <Card className="glass animate-fade-in lg:col-span-2" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <Droplet className="h-5 w-5" />
                Water Usage (Weekly)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  usage: {
                    label: "Usage (Liters)",
                    color: "hsl(var(--secondary))",
                  },
                }}
                className="h-[300px]"
              >
                <BarChart data={waterData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="day" 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar 
                    dataKey="usage" 
                    fill="hsl(var(--secondary))" 
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* EV Load Manager Timeline */}
          <Card className="glass animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Car className="h-5 w-5" />
                EV Load Manager Timeline
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span>Current Load: 25.4 kW</span>
                </div>
                <span>•</span>
                <span>Limit: 150 kW</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative space-y-4">
                <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />
                {evLoadTimeline.map((entry, index) => (
                  <div key={index} className="flex gap-4 relative">
                    <div className="flex-shrink-0 w-10 pt-1">
                      <div className="w-10 h-10 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                      </div>
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-mono text-muted-foreground">{entry.time}</span>
                        <Badge variant="outline" className="text-xs">{entry.station}</Badge>
                      </div>
                      <div className="text-foreground font-medium">{entry.event}</div>
                      <div className="text-sm text-muted-foreground">{entry.power}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Maintenance Queue */}
          <Card className="glass animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <AlertCircle className="h-5 w-5" />
                Maintenance Queue
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {maintenanceQueue.map((ticket) => (
                <div key={ticket.id} className="p-4 rounded-lg bg-card/50 border border-primary/20">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-mono text-xs text-muted-foreground mb-1">{ticket.id}</div>
                      <div className="font-medium text-foreground">{ticket.title}</div>
                    </div>
                    <Badge variant={ticket.priority === 'high' ? 'destructive' : ticket.priority === 'medium' ? 'default' : 'outline'}>
                      {ticket.priority}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">{ticket.location}</div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Assigned: {ticket.assigned}</span>
                    <span className="text-muted-foreground">ETA: {ticket.eta}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Demo;
