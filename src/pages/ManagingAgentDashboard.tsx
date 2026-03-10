import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { KPICard } from "@/components/dashboard/KPICard";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { mockManagingAgentData } from "@/data/dashboards/managingAgent";
import { AlertTriangle, Shield, Wrench, Zap, Droplets, Car, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ManagingAgentDashboard = () => {
  const { overview, incidents, accessFeed, doors, evBays } = mockManagingAgentData;

  const getSeverityVariant = (severity: string) => {
    switch(severity) {
      case 'P1': return 'error';
      case 'P2': return 'warning';
      case 'P3': return 'info';
      default: return 'info';
    }
  };

  return (
    <DashboardShell
      title="CMD-Incidents: Managing Agent Center"
      subtitle="Incident triage • SLA tracking • Access control • EV load management"
    >
      {/* Command Center Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <KPICard
          title="Open Incidents"
          value={overview.incidents.open}
          status={overview.incidents.p1 > 0 ? 'critical' : 'good'}
        />
        <KPICard
          title="P1 Critical"
          value={overview.incidents.p1}
          status={overview.incidents.p1 > 0 ? 'critical' : 'good'}
        />
        <KPICard
          title="Security Events (24h)"
          value={overview.security_events_24h.toLocaleString()}
          status="good"
        />
        <KPICard
          title="Current Energy"
          value={overview.energy_now_kw}
          unit="kW"
          status="good"
        />
        <KPICard
          title="Water Flow"
          value={overview.water_now_m3h}
          unit="m³/h"
          status="good"
        />
      </div>

      {/* Incidents Queue */}
      <Card className="glass border-primary/30 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-primary" />
            Active Incidents & SLA Tracking
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {incidents.map((incident) => (
              <div
                key={incident.id}
                className="p-4 rounded-lg bg-[#1a1a1a] border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <StatusBadge status={incident.severity} variant={getSeverityVariant(incident.severity)} />
                      <span className="font-semibold text-white">{incident.title}</span>
                    </div>
                    <div className="text-sm text-white/60">
                      {incident.building} • Reported: {new Date(incident.reported).toLocaleString()}
                    </div>
                    <div className="text-sm text-white/50 mt-1">
                      Assigned to: {incident.assignee}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold">{incident.sla_remaining}</span>
                    </div>
                    <StatusBadge status={incident.status} variant="info" className="mt-2" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="btn btn--shimmer">View Details</Button>
                  <Button size="sm" variant="outline" className="border-primary/30">Update</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Live Access Feed */}
        <Card className="glass border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Live Access Feed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {accessFeed.map((event, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#1a1a1a] border border-primary/20"
                >
                  <div className="flex-1">
                    <div className="font-semibold text-white text-sm">{event.door}</div>
                    <div className="text-xs text-white/50">
                      {event.user} • {new Date(event.ts).toLocaleTimeString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <StatusBadge
                      status={event.result}
                      variant={event.result === "Granted" ? "success" : "error"}
                    />
                    <div className="text-xs text-white/50 mt-1">{event.method}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Door Status Matrix */}
        <Card className="glass border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Door Status Matrix
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {doors.map((door) => (
                <div
                  key={door.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#1a1a1a] border border-primary/20"
                >
                  <div>
                    <div className="font-semibold text-white">{door.name}</div>
                    <div className="text-sm text-white/50">Battery: {door.battery}%</div>
                  </div>
                  <StatusBadge
                    status={door.status}
                    variant={door.status === "Online" ? "success" : "warning"}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* EV Charging Management */}
      <Card className="glass border-primary/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="h-5 w-5 text-primary" />
            EV Charging Load Manager
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {evBays.map((bay) => (
              <div
                key={bay.id}
                className="p-4 rounded-lg bg-[#1a1a1a] border border-primary/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white">{bay.id}</span>
                  <StatusBadge
                    status={bay.status}
                    variant={
                      bay.status === "Charging" ? "success" :
                      bay.status === "Reserved" ? "warning" : "info"
                    }
                  />
                </div>
                {bay.user && (
                  <>
                    <div className="text-sm text-white/60 mb-2">{bay.user}</div>
                    {bay.status === "Charging" && (
                      <div>
                        <div className="flex items-center justify-between text-xs text-white/50 mb-1">
                          <span>{bay.kwh} kWh</span>
                          <span>{bay.completion}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${bay.completion}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </>
                )}
                {!bay.user && (
                  <div className="text-sm text-white/40">Available for use</div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardShell>
  );
};

export default ManagingAgentDashboard;
