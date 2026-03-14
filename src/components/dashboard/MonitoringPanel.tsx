import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, Droplets, Wind, Gauge } from "lucide-react";
import { monitoringData } from "@/data/mockData";

const sensorConfig = [
  { key: "temperature" as const, label: "Temperature", icon: Thermometer },
  { key: "moisture" as const, label: "Moisture", icon: Droplets },
  { key: "gasEmissions" as const, label: "Gas Emissions", icon: Wind },
  { key: "pressure" as const, label: "Pressure", icon: Gauge },
];

export function MonitoringPanel() {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Real-Time IoT Monitoring</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {sensorConfig.map((sensor) => {
            const data = monitoringData[sensor.key];
            const pct = ((data.value - data.min) / (data.max - data.min)) * 100;
            const statusColor =
              data.status === "optimal" ? "text-primary" : data.status === "warning" ? "text-secondary" : "text-destructive";

            return (
              <div key={sensor.key} className="bg-muted/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <sensor.icon className={`h-4 w-4 ${statusColor}`} />
                  <span className="text-xs text-muted-foreground">{sensor.label}</span>
                </div>
                <p className="text-xl font-bold text-foreground">
                  {data.value}
                  <span className="text-sm font-normal text-muted-foreground ml-1">{data.unit}</span>
                </p>
                <div className="mt-2 h-1.5 bg-border rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${data.status === "optimal" ? "bg-primary" : "bg-secondary"}`}
                    style={{ width: `${Math.min(pct, 100)}%` }}
                  />
                </div>
                <p className="text-[10px] text-muted-foreground mt-1 capitalize">{data.status}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
