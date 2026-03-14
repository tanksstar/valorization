import { Cpu, BarChart3, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function SmartMonitoring() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Smart Monitoring &amp; AI Analytics
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              IoT sensors placed across processing units measure temperature, moisture, gas emissions, and
              production quantities in real time. Data flows to our cloud-based AI platform that optimizes
              production cycles and provides actionable insights.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Cpu, text: "ESP32 microcontrollers with real-time sensor data" },
                { icon: BarChart3, text: "AI-powered production optimization and predictions" },
                { icon: Smartphone, text: "Web & mobile dashboard for profit tracking" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link to="/dashboard">View Dashboard</Link>
            </Button>
          </div>

          {/* Dashboard preview placeholder */}
          <div className="bg-card border rounded-2xl p-6 shadow-lg">
            <div className="bg-muted rounded-xl p-6 space-y-4">
              <div className="flex gap-3">
                {["bg-primary", "bg-secondary", "bg-chart-3"].map((c, i) => (
                  <div key={i} className={`h-16 flex-1 rounded-lg ${c} opacity-20`} />
                ))}
              </div>
              <div className="h-32 bg-primary/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-12 w-12 text-primary/40" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-10 bg-secondary/10 rounded-lg" />
                <div className="h-10 bg-primary/10 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
