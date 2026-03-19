import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatCards } from "@/components/dashboard/StatCards";
import { ProductionChart, RevenueChart, WasteBreakdownChart } from "@/components/dashboard/Charts";
import { MonitoringPanel } from "@/components/dashboard/MonitoringPanel";
import { ActivityTable } from "@/components/dashboard/ActivityTable";

const Dashboard = () => (
  <DashboardLayout>
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
  </DashboardLayout>
);

export default Dashboard;
