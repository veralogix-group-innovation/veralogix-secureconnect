import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { KPICard } from "@/components/dashboard/KPICard";
import { mockMainDashboard } from "@/data/dashboards/mainDashboard";
import { Activity, Zap, Droplets, Car, Wrench, Heart, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const MainDashboard = () => {
  const { overview, aiInsights, energyHistory } = mockMainDashboard;

  return (
    <DashboardShell
      title="CMD-Overview: Command Center"
      subtitle="Estate map • Real-time KPIs • AI insights • Incident ticker"
    >
      {/* AI Insights Banner */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {aiInsights.map((insight, idx) => (
          <Card key={idx} className="glass border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="p-4 flex items-start gap-3">
              {insight.type === "warning" ? (
                <AlertTriangle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              ) : (
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              )}
              <div>
                <h3 className="font-semibold text-white mb-1">{insight.title}</h3>
                <p className="text-sm text-white/70">{insight.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Real-time Overview Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <KPICard
          title="IoT Operations"
          value={overview.iot.healthy}
          unit={`/ ${overview.iot.zones} zones`}
          trend={-2.1}
          status={overview.iot.warning > 0 ? 'warning' : 'good'}
        />
        <KPICard
          title="Security Events (24h)"
          value={overview.security.events_24h.toLocaleString()}
          trend={5.2}
          status="good"
        />
        <KPICard
          title="Access Success Rate"
          value={overview.security.access_success_rate}
          unit="%"
          status="good"
        />
        <KPICard
          title="Current Energy"
          value={overview.energy.current_kw}
          unit="kW"
          trend={overview.energy.trend}
          status="good"
        />
        <KPICard
          title="EV Charging Bays"
          value={`${overview.ev.active_sessions}/${overview.ev.total_bays}`}
          trend={12}
          status={overview.ev.capacity_used > 80 ? 'warning' : 'good'}
        />
        <KPICard
          title="Comfort Index"
          value={overview.wellness.comfort_index}
          unit="/100"
          status="good"
        />
      </div>

      {/* Detailed Sections */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Energy Trend */}
        <Card className="glass border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Energy Consumption (7 Days)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={energyHistory}>
                <defs>
                  <linearGradient id="colorKwh" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--salad-green))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--salad-green))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" tick={{ fontSize: 12 }} />
                <YAxis stroke="rgba(255,255,255,0.5)" tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(168,207,69,0.3)', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="kwh" stroke="hsl(var(--salad-green))" fillOpacity={1} fill="url(#colorKwh)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Maintenance Queue */}
        <Card className="glass border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              Predictive Maintenance Queue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                <div>
                  <div className="font-semibold text-red-400">P1 Priority</div>
                  <div className="text-sm text-white/60">Critical issues</div>
                </div>
                <div className="text-2xl font-bold text-red-400">{overview.maintenance.p1}</div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <div>
                  <div className="font-semibold text-yellow-400">P2 Priority</div>
                  <div className="text-sm text-white/60">High priority</div>
                </div>
                <div className="text-2xl font-bold text-yellow-400">{overview.maintenance.p2}</div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <div>
                  <div className="font-semibold text-blue-400">P3 Priority</div>
                  <div className="text-sm text-white/60">Standard</div>
                </div>
                <div className="text-2xl font-bold text-blue-400">{overview.maintenance.p3}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Module Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass border-primary/30 hover:border-primary/50 transition-colors cursor-pointer">
          <CardContent className="p-4 flex items-center gap-3">
            <Activity className="h-8 w-8 text-primary" />
            <div>
              <div className="font-semibold">IoT Center</div>
              <div className="text-sm text-white/60">{overview.iot.zones} zones</div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass border-primary/30 hover:border-primary/50 transition-colors cursor-pointer">
          <CardContent className="p-4 flex items-center gap-3">
            <Car className="h-8 w-8 text-primary" />
            <div>
              <div className="font-semibold">EV Manager</div>
              <div className="text-sm text-white/60">{overview.ev.active_sessions} active</div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass border-primary/30 hover:border-primary/50 transition-colors cursor-pointer">
          <CardContent className="p-4 flex items-center gap-3">
            <Droplets className="h-8 w-8 text-primary" />
            <div>
              <div className="font-semibold">Water Monitor</div>
              <div className="text-sm text-white/60">Real-time flow</div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass border-primary/30 hover:border-primary/50 transition-colors cursor-pointer">
          <CardContent className="p-4 flex items-center gap-3">
            <Heart className="h-8 w-8 text-primary" />
            <div>
              <div className="font-semibold">Wellness</div>
              <div className="text-sm text-white/60">{overview.wellness.air_quality}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
};

export default MainDashboard;
