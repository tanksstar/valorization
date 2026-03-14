import { TreeDeciduous, DollarSign, Users, Wind } from "lucide-react";
import { impactStats } from "@/data/mockData";

const icons = [TreeDeciduous, Wind, Users, DollarSign];

export function Impact() {
  return (
    <section id="impact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Measurable environmental and economic impact from waste valorization.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {impactStats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-7 w-7" />
                </div>
                <p className="text-3xl font-extrabold mb-1">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
