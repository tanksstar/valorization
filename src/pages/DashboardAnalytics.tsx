import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { productionData, revenueData, wasteInputData } from "@/data/mockData";
import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, DollarSign, Recycle, BarChart3 } from "lucide-react";

const efficiencyData = [
  { month: "Jan", efficiency: 78 },
  { month: "Feb", efficiency: 82 },
  { month: "Mar", efficiency: 75 },
  { month: "Apr", efficiency: 88 },
  { month: "May", efficiency: 91 },
  { month: "Jun", efficiency: 89 },
  { month: "Jul", efficiency: 93 },
  { month: "Aug", efficiency: 95 },
];

const kpis = [
  { title: "Avg. Efficiency", value: "86.4%", icon: TrendingUp, change: "+3.2%" },
  { title: "Cost per Kg", value: "ETB 8.50", icon: DollarSign, change: "-5.1%" },
  { title: "Waste Utilization", value: "94.2%", icon: Recycle, change: "+2.8%" },
  { title: "ROI", value: "147%", icon: BarChart3, change: "+18%" },
];

const DashboardAnalytics = () => (
  <DashboardLayout>
    <div>
      <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
      <p className="text-sm text-muted-foreground">AI-powered insights and performance metrics.</p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((k) => (
        <Card key={k.title} className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{k.title}</span>
              <k.icon className="h-4 w-4 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">{k.value}</p>
            <p className="text-xs text-primary mt-1">{k.change} from last month</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      <Card className="shadow-sm">
        <CardHeader><CardTitle className="text-base">Production Efficiency Trend</CardTitle></CardHeader>
        <CardContent>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[60, 100]} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", color: "hsl(var(--foreground))" }} />
                <Line type="monotone" dataKey="efficiency" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={{ fill: "hsl(var(--chart-1))" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader><CardTitle className="text-base">Revenue Growth</CardTitle></CardHeader>
        <CardContent>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", color: "hsl(var(--foreground))" }} formatter={(v: number) => [`ETB ${v.toLocaleString()}`, "Revenue"]} />
                <Area type="monotone" dataKey="revenue" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>

    <Card className="shadow-sm">
      <CardHeader><CardTitle className="text-base">Waste Input Distribution</CardTitle></CardHeader>
      <CardContent>
        <div className="h-72 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={wasteInputData} cx="50%" cy="50%" outerRadius={100} innerRadius={50} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {wasteInputData.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", color: "hsl(var(--foreground))" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  </DashboardLayout>
);

export default DashboardAnalytics;
