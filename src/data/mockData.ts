export const productionData = [
  { month: "Jan", briquettes: 1200, compost: 800, ecoPaper: 400 },
  { month: "Feb", briquettes: 1400, compost: 900, ecoPaper: 450 },
  { month: "Mar", briquettes: 1100, compost: 1000, ecoPaper: 500 },
  { month: "Apr", briquettes: 1600, compost: 1100, ecoPaper: 550 },
  { month: "May", briquettes: 1800, compost: 1200, ecoPaper: 600 },
  { month: "Jun", briquettes: 2000, compost: 1300, ecoPaper: 650 },
  { month: "Jul", briquettes: 1900, compost: 1400, ecoPaper: 700 },
  { month: "Aug", briquettes: 2200, compost: 1500, ecoPaper: 750 },
];

export const wasteInputData = [
  { name: "Coffee Husks", value: 45, fill: "hsl(142, 71%, 45%)" },
  { name: "Crop Residues", value: 35, fill: "hsl(35, 60%, 50%)" },
  { name: "Weeds", value: 20, fill: "hsl(200, 60%, 50%)" },
];

export const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 15000 },
  { month: "Mar", revenue: 13500 },
  { month: "Apr", revenue: 18000 },
  { month: "May", revenue: 21000 },
  { month: "Jun", revenue: 24000 },
  { month: "Jul", revenue: 22500 },
  { month: "Aug", revenue: 28000 },
];

export const monitoringData = {
  temperature: { value: 342, unit: "°C", min: 200, max: 500, status: "optimal" as const },
  moisture: { value: 28, unit: "%", min: 0, max: 100, status: "optimal" as const },
  gasEmissions: { value: 45, unit: "ppm", min: 0, max: 200, status: "warning" as const },
  pressure: { value: 1.2, unit: "atm", min: 0, max: 3, status: "optimal" as const },
};

export const recentActivity = [
  { id: 1, batch: "BRQ-2026-0312", product: "Bio-Briquettes", quantity: "500 kg", status: "Completed", date: "2026-03-12" },
  { id: 2, batch: "CMP-2026-0311", product: "Compost", quantity: "1,200 kg", status: "Completed", date: "2026-03-11" },
  { id: 3, batch: "ECO-2026-0310", product: "Eco-Paper", quantity: "200 kg", status: "In Progress", date: "2026-03-10" },
  { id: 4, batch: "BRQ-2026-0309", product: "Bio-Briquettes", quantity: "450 kg", status: "Completed", date: "2026-03-09" },
  { id: 5, batch: "CMP-2026-0308", product: "Compost", quantity: "980 kg", status: "Completed", date: "2026-03-08" },
  { id: 6, batch: "ECO-2026-0307", product: "Eco-Paper", quantity: "150 kg", status: "Quality Check", date: "2026-03-07" },
];

export const statCards = [
  { title: "Total Production", value: "12,450 kg", change: "+12.5%", trend: "up" as const },
  { title: "Revenue", value: "ETB 154,000", change: "+8.3%", trend: "up" as const },
  { title: "Waste Processed", value: "18,200 kg", change: "+15.1%", trend: "up" as const },
  { title: "Carbon Saved", value: "4.2 tons", change: "+22.0%", trend: "up" as const },
];

export const impactStats = [
  { label: "Tons of Waste Recycled", value: "2,500+" },
  { label: "CO₂ Emissions Avoided", value: "850 tons" },
  { label: "Farmers Supported", value: "1,200+" },
  { label: "Revenue Generated", value: "ETB 3.2M" },
];
