import { Flame, Sprout, FileText } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Bio-Briquettes",
    subtitle: "Renewable Energy",
    description:
      "Agricultural biomass is carbonized and compressed into clean-burning fuel briquettes, reducing deforestation and indoor air pollution.",
    benefits: ["Cleaner cooking fuel", "Reduced forest pressure", "Affordable energy"],
  },
  {
    icon: Sprout,
    title: "Compost & Biochar",
    subtitle: "Organic Fertilizer",
    description:
      "Controlled composting converts residues into nutrient-rich organic fertilizer, improving soil health and reducing dependence on synthetics.",
    benefits: ["Improved soil fertility", "Better water retention", "Healthier crops"],
  },
  {
    icon: FileText,
    title: "Eco-Paper",
    subtitle: "Sustainable Materials",
    description:
      "Fibrous crop residues are processed into pulp and molded into eco-friendly paper and packaging products.",
    benefits: ["Reduced wood pulp use", "Sustainable packaging", "New revenue stream"],
  },
];

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Core Processing Pathways</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three integrated pathways convert agricultural waste into high-value products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-card rounded-xl border p-8 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-7 w-7 text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{f.subtitle}</p>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{f.description}</p>
              <ul className="space-y-2">
                {f.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
