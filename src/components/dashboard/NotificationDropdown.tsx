import { Bell, CheckCircle, AlertTriangle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const notifications = [
  { icon: CheckCircle, text: "Batch BRQ-0312 completed successfully", time: "2 min ago", type: "success" as const },
  { icon: AlertTriangle, text: "Gas emissions sensor warning at 45 ppm", time: "15 min ago", type: "warning" as const },
  { icon: Info, text: "Weekly report is ready to download", time: "1 hour ago", type: "info" as const },
  { icon: CheckCircle, text: "Compost batch CMP-0311 passed quality check", time: "3 hours ago", type: "success" as const },
  { icon: AlertTriangle, text: "ESP32-Sensor-04 went offline", time: "5 hours ago", type: "warning" as const },
];

export function NotificationDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.map((n, i) => (
          <DropdownMenuItem key={i} className="flex items-start gap-3 py-3 cursor-pointer">
            <n.icon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${n.type === "success" ? "text-primary" : n.type === "warning" ? "text-secondary" : "text-muted-foreground"}`} />
            <div>
              <p className="text-sm text-foreground">{n.text}</p>
              <p className="text-xs text-muted-foreground">{n.time}</p>
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-center text-sm text-primary justify-center cursor-pointer">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
