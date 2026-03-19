import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import DashboardProduction from "./pages/DashboardProduction.tsx";
import DashboardMonitoring from "./pages/DashboardMonitoring.tsx";
import DashboardAnalytics from "./pages/DashboardAnalytics.tsx";
import DashboardSettings from "./pages/DashboardSettings.tsx";
import Auth from "./pages/Auth.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/production" element={<DashboardProduction />} />
          <Route path="/dashboard/monitoring" element={<DashboardMonitoring />} />
          <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
          <Route path="/dashboard/settings" element={<DashboardSettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
