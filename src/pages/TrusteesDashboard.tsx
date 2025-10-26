import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { KPICard } from "@/components/dashboard/KPICard";
import { mockTrusteesData } from "@/data/dashboards/trustees";
import { Building2, TrendingUp, Leaf, Shield, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const TrusteesDashboard = () => {
  const { portfolio, finance, esg, security, kpis } = mockTrusteesData;

  return (
    <DashboardShell
      title="SecureConnect™ for Trustees"
      subtitle="Portfolio health, risk, ROI, and sustainability insights"
      headerActions={
        <>
          <Button className="btn btn--shimmer">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </>
      }
    >
      {/* Portfolio Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="glass border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10">
          <CardContent className="p-6">
            <Building2 className="h-8 w-8 text-primary mb-3" />
            <div className="text-sm text-white/60 mb-1">Total Portfolio</div>
            <div className="text-2xl font-bold text-white">{portfolio.sites} Sites</div>
            <div className="text-lg text-white/70">{portfolio.units} Units</div>
          </CardContent>
        </Card>
        <Card className="glass border-primary/30">
          <CardContent className="p-6">
            <TrendingUp className="h-8 w-8 text-primary mb-3" />
            <div className="text-sm text-white/60 mb-1">Occupancy Rate</div>
            <div className="text-3xl font-bold text-primary">{portfolio.occupancy}%</div>
          </CardContent>
        </Card>
        <Card className="glass border-primary/30">
          <CardContent className="p-6">
            <Leaf className="h-8 w-8 text-primary mb-3" />
            <div className="text-sm text-white/60 mb-1">Carbon Reduction</div>
            <div className="text-3xl font-bold text-primary">{Math.abs(esg.carbon_trend)}%</div>
          </CardContent>
        </Card>
        <Card className="glass border-primary/30">
          <CardContent className="p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <div className="text-sm text-white/60 mb-1">Security Score</div>
            <div className="text-3xl font-bold text-primary">{security.compliance_score}%</div>
          </CardContent>
        </Card>
      </div>

      {/* Key Performance Indicators */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Key Performance Indicators</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kpis.map((kpi, idx) => (
            <KPICard
              key={idx}
              title={kpi.label}
              value={kpi.value}
              trend={kpi.trend}
              status={kpi.status as 'good' | 'warning' | 'critical'}
            />
          ))}
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <Card className="glass border-primary/30">
          <CardHeader>
            <CardTitle>Cashflow Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={finance.cashflow}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(168,207,69,0.3)', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Legend />
                <Bar dataKey="inflow" fill="hsl(var(--salad-green))" name="Inflow" />
                <Bar dataKey="outflow" fill="rgba(255,100,100,0.8)" name="Outflow" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass border-primary/30">
          <CardHeader>
            <CardTitle>Arrears Aging</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-primary/10 border border-primary/30">
                <div>
                  <div className="font-semibold text-white">0-30 Days</div>
                  <div className="text-sm text-white/60">Current arrears</div>
                </div>
                <div className="text-2xl font-bold text-primary">{finance.arrears_aging["0-30d"]}%</div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <div>
                  <div className="font-semibold text-yellow-400">31-60 Days</div>
                  <div className="text-sm text-white/60">Moderate risk</div>
                </div>
                <div className="text-2xl font-bold text-yellow-400">{finance.arrears_aging["31-60d"]}%</div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                <div>
                  <div className="font-semibold text-red-400">60+ Days</div>
                  <div className="text-sm text-white/60">High risk</div>
                </div>
                <div className="text-2xl font-bold text-red-400">{finance.arrears_aging["60d+"]}%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ESG Metrics */}
      <Card className="glass border-primary/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            ESG & Sustainability Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-sm text-white/60 mb-2">Energy Intensity</div>
              <div className="text-2xl font-bold text-white">{esg.energy_per_sqm}</div>
              <div className="text-xs text-white/50">kWh/m²</div>
              <div className="text-sm text-primary mt-1">↓ {Math.abs(esg.energy_trend)}%</div>
            </div>
            <div>
              <div className="text-sm text-white/60 mb-2">Water Usage</div>
              <div className="text-2xl font-bold text-white">{esg.water_per_capita}</div>
              <div className="text-xs text-white/50">L/capita</div>
              <div className="text-sm text-primary mt-1">↓ {Math.abs(esg.water_trend)}%</div>
            </div>
            <div>
              <div className="text-sm text-white/60 mb-2">Carbon Footprint</div>
              <div className="text-2xl font-bold text-white">{esg.carbon_tonnes}</div>
              <div className="text-xs text-white/50">tCO₂e</div>
              <div className="text-sm text-primary mt-1">↓ {Math.abs(esg.carbon_trend)}%</div>
            </div>
            <div>
              <div className="text-sm text-white/60 mb-2">Waste Diversion</div>
              <div className="text-2xl font-bold text-white">{esg.waste_diversion}%</div>
              <div className="text-xs text-white/50">of total waste</div>
              <div className="text-sm text-white/50 mt-1">Target: 75%</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardShell>
  );
};

export default TrusteesDashboard;
