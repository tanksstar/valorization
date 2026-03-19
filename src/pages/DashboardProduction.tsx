import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { productionData, recentActivity } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Factory, TrendingUp, Package, CheckCircle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const productionStats = [
  { title: "Bio-Briquettes", value: "2,200 kg", icon: Factory, change: "+14%" },
  { title: "Compost", value: "1,500 kg", icon: Package, change: "+10%" },
  { title: "Eco-Paper", value: "750 kg", icon: CheckCircle, change: "+8%" },
  { title: "Total Output", value: "4,450 kg", icon: TrendingUp, change: "+12%" },
];

const DashboardProduction = () => (
  <DashboardLayout>
    <div>
      <h1 className="text-2xl font-bold text-foreground">Production</h1>
      <p className="text-sm text-muted-foreground">Monitor and manage your production lines.</p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {productionStats.map((s) => (
        <Card key={s.title} className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{s.title}</span>
              <s.icon className="h-4 w-4 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-primary mt-1">{s.change} from last month</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-base">Monthly Production Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={productionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", color: "hsl(var(--foreground))" }} />
              <Legend />
              <Bar dataKey="briquettes" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} name="Briquettes" />
              <Bar dataKey="compost" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} name="Compost" />
              <Bar dataKey="ecoPaper" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} name="Eco-Paper" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>

    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-base">Recent Batches</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Batch ID</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentActivity.map((a) => (
              <TableRow key={a.id}>
                <TableCell className="font-mono text-sm">{a.batch}</TableCell>
                <TableCell>{a.product}</TableCell>
                <TableCell>{a.quantity}</TableCell>
                <TableCell>
                  <Badge variant={a.status === "Completed" ? "default" : a.status === "In Progress" ? "secondary" : "outline"}>
                    {a.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{a.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </DashboardLayout>
);

export default DashboardProduction;
