

# AgroCycle AI - Implementation Plan

Based on your 8 screenshots and the detailed project description, here is the plan to build the AgroCycle AI website with a landing page and dashboard, using static/mock data and simple navigation (no auth).

## Pages to Create

### 1. Landing Page (`/`)
- **Navbar**: Logo "AgroCycle AI" + nav links (Home, About, Features, How It Works, Impact, Contact) + "Log In" / "Get Started" buttons
- **Hero Section**: Large headline about smart agro-waste valorization, subtitle about circular economy, CTA buttons, background with green/earth-tone gradient or agricultural imagery
- **About Section**: Project description, the problem of agricultural waste, the AgroCycle AI solution
- **Features Section**: 3 cards for the core pathways:
  - Bio-Briquettes (Renewable Energy)
  - Compost & Biochar (Organic Fertilizer)
  - Eco-Paper (Sustainable Materials)
- **How It Works Section**: Step-by-step process flow (Collect waste -> Process -> Monitor -> Sell products)
- **System Inputs Section**: Cards for Coffee Husks, Crop Residues, Weeds
- **Impact Section**: Environmental + Economic impact stats with icons/numbers
- **Smart Monitoring Section**: IoT sensors, digital dashboard preview, AI optimization description
- **Footer**: Links, copyright, social icons

### 2. Dashboard Page (`/dashboard`)
- **Sidebar**: Navigation with icons (Overview, Production, Monitoring, Analytics, Settings)
- **Top bar**: Search, notifications, user avatar
- **Overview cards**: Total Production, Revenue, Waste Processed, Carbon Saved
- **Charts**: Production trends (line/bar chart using Recharts), waste input breakdown (pie chart), revenue over time
- **Real-time monitoring panel**: Temperature, moisture, gas emissions with gauge-style indicators
- **Recent activity table**: Latest production batches with status
- **Environmental impact tracker**: CO2 avoided, biomass recycled metrics

## Design System
- **Color palette**: Green primary (#22c55e range), earth tones, dark text on light backgrounds
- **Typography**: Clean sans-serif, large hero text
- **Style**: Modern, clean cards with subtle shadows, rounded corners, green accent colors

## Technical Approach
- All data is static/mock (hardcoded JSON objects)
- Charts via Recharts (already available in the project dependencies)
- "Log In" / "Get Started" buttons navigate to `/dashboard`
- Responsive design with Tailwind CSS
- Lucide icons throughout

## Files to Create/Modify
- `src/pages/Index.tsx` - Landing page
- `src/pages/Dashboard.tsx` - Dashboard page
- `src/components/landing/*` - Navbar, Hero, About, Features, HowItWorks, Impact, Footer sections
- `src/components/dashboard/*` - Sidebar, StatCards, Charts, MonitoringPanel, ActivityTable
- `src/data/mockData.ts` - All mock/static data
- `src/App.tsx` - Add `/dashboard` route
- `src/index.css` - Update CSS variables for green theme

