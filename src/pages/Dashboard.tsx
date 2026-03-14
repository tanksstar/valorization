import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { StatCards } from "@/components/dashboard/StatCards";
import { ProductionChart, RevenueChart, WasteBreakdownChart } from "@/components/dashboard/Charts";
import { MonitoringPanel } from "@/components/dashboard/MonitoringPanel";
import { ActivityTable } from "@/components/dashboard/ActivityTable";
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          {/* Top bar */}
          <header className="h-14 border-b flex items-center justify-between px-4 bg-card">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-9 w-64 h-9" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
              </Button>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 p-4 sm:p-6 space-y-6 overflow-auto bg-background">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
              <p className="text-sm text-muted-foreground">Welcome back! Here's your production summary.</p>
            </div>

            <StatCards />

            <div className="grid lg:grid-cols-2 gap-6">
              <ProductionChart />
              <RevenueChart />
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <WasteBreakdownChart />
              <MonitoringPanel />
              <div className="lg:col-span-1">
                {/* Environmental impact mini card */}
                <div className="bg-primary rounded-xl p-6 text-primary-foreground h-full flex flex-col justify-center">
                  <h3 className="font-bold text-lg mb-4">Environmental Impact</h3>
                  <div className="space-y-3">
                    {[
                      { label: "CO₂ Avoided", value: "4.2 tons" },
                      { label: "Biomass Recycled", value: "18.2 tons" },
                      { label: "Trees Saved", value: "320+" },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between">
                        <span className="text-sm text-primary-foreground/70">{item.label}</span>
                        <span className="font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <ActivityTable />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
