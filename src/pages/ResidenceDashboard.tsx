import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { mockResidenceData } from "@/data/dashboards/residence";
import { Key, Users, Calendar, CreditCard, Zap, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ResidenceDashboard = () => {
  const { resident, passes, bookings, evSessions, digitalKeys, transactions } = mockResidenceData;

  return (
    <DashboardShell
      title={`Welcome back, ${resident.name}`}
      subtitle={`Unit ${resident.unit}`}
    >
      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="glass border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10">
          <CardContent className="p-6">
            <div className="text-sm text-white/60 mb-1">Current Balance</div>
            <div className="text-3xl font-bold text-white">
              {resident.currency} {resident.balance.toLocaleString()}
            </div>
            <Button className="btn btn--neon-animated mt-4 w-full">Pay Now</Button>
          </CardContent>
        </Card>
        <Card className="glass border-primary/30">
          <CardContent className="p-6">
            <div className="text-sm text-white/60 mb-1">Active Passes</div>
            <div className="text-3xl font-bold text-primary">
              {passes.filter(p => p.status === "Active").length}
            </div>
            <Button variant="outline" className="mt-4 w-full border-primary/30 text-primary hover:bg-primary/10">
              Create New Pass
            </Button>
          </CardContent>
        </Card>
        <Card className="glass border-primary/30">
          <CardContent className="p-6">
            <div className="text-sm text-white/60 mb-1">Upcoming Bookings</div>
            <div className="text-3xl font-bold text-primary">{bookings.length}</div>
            <Button variant="outline" className="mt-4 w-full border-primary/30 text-primary hover:bg-primary/10">
              Book Amenity
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Button className="btn btn--shimmer h-20 flex-col gap-2">
          <Key className="h-6 w-6" />
          <span>Open Gate</span>
        </Button>
        <Button className="btn btn--shimmer h-20 flex-col gap-2">
          <Calendar className="h-6 w-6" />
          <span>Book Amenity</span>
        </Button>
        <Button className="btn btn--shimmer h-20 flex-col gap-2">
          <CreditCard className="h-6 w-6" />
          <span>Pay Bill</span>
        </Button>
        <Button className="btn btn--shimmer h-20 flex-col gap-2">
          <FileText className="h-6 w-6" />
          <span>Report Issue</span>
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Digital Keys */}
        <Card className="glass border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5 text-primary" />
              Digital Keys
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {digitalKeys.map((key) => (
                <div key={key.id} className="flex items-center justify-between p-3 rounded-lg bg-[#1a1a1a] border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                  <div>
                    <div className="font-semibold text-white">{key.name}</div>
                    <div className="text-sm text-white/50">Last used: {new Date(key.lastUsed).toLocaleTimeString()}</div>
                  </div>
                  <StatusBadge status={key.status} variant="success" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Visitor Passes */}
        <Card className="glass border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Visitor Passes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {passes.map((pass) => (
                <div key={pass.id} className="p-3 rounded-lg bg-[#1a1a1a] border border-primary/20">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-semibold text-white">{pass.name}</div>
                      <div className="text-sm text-white/60">{pass.date} at {pass.time}</div>
                    </div>
                    <StatusBadge 
                      status={pass.status} 
                      variant={pass.status === "Active" ? "success" : "info"} 
                    />
                  </div>
                  <div className="text-xs text-white/50">Areas: {pass.areas.join(", ")}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* EV Charging */}
        <Card className="glass border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              EV Charging
            </CardTitle>
          </CardHeader>
          <CardContent>
            {evSessions.length > 0 ? (
              <div className="space-y-3">
                {evSessions.map((session) => (
                  <div key={session.id} className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-semibold text-white">Bay {session.bay}</div>
                        <div className="text-sm text-white/60">Started: {new Date(session.started).toLocaleTimeString()}</div>
                      </div>
                      <StatusBadge status={session.status} variant="success" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <div className="text-xs text-white/50">Energy</div>
                        <div className="text-lg font-bold text-primary">{session.kwh} kWh</div>
                      </div>
                      <div>
                        <div className="text-xs text-white/50">Cost</div>
                        <div className="text-lg font-bold text-white">R {session.cost}</div>
                      </div>
                    </div>
                    <Button className="btn btn--neon w-full">Stop Charging</Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-white/50">
                <p>No active charging sessions</p>
                <Button className="btn btn--neon-animated mt-4">Start Charging</Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="glass border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Recent Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {transactions.map((txn) => (
                <div key={txn.id} className="flex items-center justify-between p-3 rounded-lg bg-[#1a1a1a] border border-primary/20">
                  <div>
                    <div className="font-semibold text-white text-sm">{txn.description}</div>
                    <div className="text-xs text-white/50">{txn.date}</div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${txn.amount < 0 ? 'text-red-400' : 'text-primary'}`}>
                      R {Math.abs(txn.amount).toLocaleString()}
                    </div>
                    <StatusBadge 
                      status={txn.status} 
                      variant={txn.status === "Paid" ? "success" : "warning"}
                      className="text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
};

export default ResidenceDashboard;
