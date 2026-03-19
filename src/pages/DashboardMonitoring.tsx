import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { monitoringData } from "@/data/mockData";
import { Thermometer, Droplets, Wind, Gauge, Activity, Wifi, WifiOff, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const sensorDetails = [
  { key: "temperature" as const, label: "Temperature", icon: Thermometer, description: "Carbonization chamber temperature", location: "Processing Unit A" },
  { key: "moisture" as const, label: "Moisture", icon: Droplets, description: "Biomass moisture content", location: "Drying Station" },
  { key: "gasEmissions" as const, label: "Gas Emissions", icon: Wind, description: "CO₂ and methane levels", location: "Exhaust Monitor" },
  { key: "pressure" as const, label: "Pressure", icon: Gauge, description: "Briquette press pressure", location: "Compression Unit" },
];

const devices = [
  { name: "ESP32-Sensor-01", status: "online", lastPing: "2s ago", location: "Processing Unit A" },
  { name: "ESP32-Sensor-02", status: "online", lastPing: "5s ago", location: "Drying Station" },
  { name: "ESP32-Sensor-03", status: "online", lastPing: "3s ago", location: "Exhaust Monitor" },
  { name: "ESP32-Sensor-04", status: "offline", lastPing: "2h ago", location: "Compression Unit B" },
  { name: "ESP32-Sensor-05", status: "online", lastPing: "1s ago", location: "Compost Bay" },
];

const DashboardMonitoring = () => (
  <DashboardLayout>
    <div>
      <h1 className="text-2xl font-bold text-foreground">Real-Time Monitoring</h1>
      <p className="text-sm text-muted-foreground">IoT sensor data from all processing units.</p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {sensorDetails.map((sensor) => {
        const data = monitoringData[sensor.key];
        const pct = ((data.value - data.min) / (data.max - data.min)) * 100;
        return (
          <Card key={sensor.key} className="shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-3">
                <sensor.icon className={`h-5 w-5 ${data.status === "optimal" ? "text-primary" : "text-secondary"}`} />
                <Badge variant={data.status === "optimal" ? "default" : "secondary"} className="capitalize text-xs">
                  {data.status}
                </Badge>
              </div>
              <p className="text-3xl font-bold text-foreground">{data.value}<span className="text-sm font-normal text-muted-foreground ml-1">{data.unit}</span></p>
              <p className="text-sm font-medium text-foreground mt-1">{sensor.label}</p>
              <p className="text-xs text-muted-foreground">{sensor.location}</p>
              <Progress value={Math.min(pct, 100)} className="mt-3 h-2" />
              <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                <span>{data.min}{data.unit}</span>
                <span>{data.max}{data.unit}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>

    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary" /> Connected Devices
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {devices.map((d) => (
            <div key={d.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                {d.status === "online" ? <Wifi className="h-4 w-4 text-primary" /> : <WifiOff className="h-4 w-4 text-destructive" />}
                <div>
                  <p className="text-sm font-medium text-foreground">{d.name}</p>
                  <p className="text-xs text-muted-foreground">{d.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{d.lastPing}</span>
                <Badge variant={d.status === "online" ? "default" : "destructive"} className="text-xs capitalize">{d.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </DashboardLayout>
);

export default DashboardMonitoring;
