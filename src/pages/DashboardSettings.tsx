import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { User, Bell, Shield, Sliders } from "lucide-react";

const DashboardSettings = () => (
  <DashboardLayout>
    <div>
      <h1 className="text-2xl font-bold text-foreground">Settings</h1>
      <p className="text-sm text-muted-foreground">Manage your account and system preferences.</p>
    </div>

    <div className="grid gap-6 max-w-2xl">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2"><User className="h-4 w-4" /> Profile</CardTitle>
          <CardDescription>Update your personal information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input defaultValue="Abebe Kebede" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input defaultValue="abebe@harvestcycle.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Organization</Label>
            <Input defaultValue="AgroCycle Cooperative" />
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2"><Bell className="h-4 w-4" /> Notifications</CardTitle>
          <CardDescription>Configure alert preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: "Production alerts", desc: "Get notified when a batch completes", default: true },
            { label: "Sensor warnings", desc: "Alert when readings are out of range", default: true },
            { label: "Weekly reports", desc: "Receive weekly summary via email", default: false },
            { label: "Revenue milestones", desc: "Celebrate when you hit revenue goals", default: true },
          ].map((n) => (
            <div key={n.label} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">{n.label}</p>
                <p className="text-xs text-muted-foreground">{n.desc}</p>
              </div>
              <Switch defaultChecked={n.default} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2"><Sliders className="h-4 w-4" /> System</CardTitle>
          <CardDescription>Configure system parameters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Temperature Threshold (°C)</Label>
              <Input type="number" defaultValue="400" />
            </div>
            <div className="space-y-2">
              <Label>Gas Emission Limit (ppm)</Label>
              <Input type="number" defaultValue="100" />
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Auto-optimization</p>
              <p className="text-xs text-muted-foreground">Let AI adjust production parameters automatically</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Button>Update Settings</Button>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-destructive/20">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2 text-destructive"><Shield className="h-4 w-4" /> Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Reset all sensor data</p>
              <p className="text-xs text-muted-foreground">This will clear all historical readings</p>
            </div>
            <Button variant="destructive" size="sm">Reset</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </DashboardLayout>
);

export default DashboardSettings;
