import { Coffee, Wheat, TreePine } from "lucide-react";

const inputs = [
  {
    icon: Coffee,
    title: "Coffee Husks",
    description:
      "A major by-product of coffee processing, rich in cellulose and organic compounds suitable for energy and fertilizer production.",
  },
  {
    icon: Wheat,
    title: "Crop Residues",
    description:
      "Teff straw, wheat straw, and other fibrous materials remaining after harvesting — ideal feedstock for briquettes and paper.",
  },
  {
    icon: TreePine,
    title: "Weeds & Field Biomass",
    description:
      "Vegetation removed during crop management that is normally discarded, containing lignin and nutrients for composting.",
  },
];

export function SystemInputs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">System Inputs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Common agricultural residues that fuel the AgroCycle AI platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {inputs.map((inp) => (
            <div
              key={inp.title}
              className="bg-card border rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <inp.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-card-foreground">{inp.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{inp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
