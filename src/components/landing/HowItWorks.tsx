import { Truck, Factory, Wifi, ShoppingCart } from "lucide-react";

const steps = [
  {
    icon: Truck,
    step: "01",
    title: "Collect Waste",
    description: "Agricultural residues — coffee husks, crop straw, and weeds — are gathered from farms and processing sites.",
  },
  {
    icon: Factory,
    step: "02",
    title: "Process & Convert",
    description: "Biomass is processed through carbonization, composting, and pulping to produce briquettes, fertilizer, and eco-paper.",
  },
  {
    icon: Wifi,
    step: "03",
    title: "Monitor with IoT",
    description: "Smart sensors track temperature, moisture, and emissions in real time, sending data to the AI-powered dashboard.",
  },
  {
    icon: ShoppingCart,
    step: "04",
    title: "Sell & Profit",
    description: "Finished products are sold to local markets, generating income for farmers and cooperatives.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A simple four-step process from waste collection to market-ready products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary">STEP {s.step}</span>
              <h3 className="text-lg font-bold mt-1 mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
