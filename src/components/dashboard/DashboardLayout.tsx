import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { NotificationDropdown } from "@/components/dashboard/NotificationDropdown";
import { AccountDropdown } from "@/components/dashboard/AccountDropdown";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 border-b flex items-center justify-between px-4 bg-card">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-9 w-64 h-9" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <NotificationDropdown />
              <AccountDropdown />
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6 space-y-6 overflow-auto bg-background">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
