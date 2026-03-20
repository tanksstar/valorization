import { Leaf, AlertTriangle, Lightbulb } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">About HarvestCycle</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bridging the gap between agricultural waste and sustainable value creation through smart technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-xl p-6 border shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-card-foreground">The Problem</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Millions of tons of agricultural residues — coffee husks, crop straw, and weeds — are
              burned or discarded annually, causing pollution and lost economic opportunity.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 border shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-card-foreground">Our Solution</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
               HarvestCycle transforms waste into bio-briquettes, compost, and eco-paper using
              integrated processing pathways monitored by IoT sensors and AI.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 border shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
              <Leaf className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-card-foreground">Circular Economy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              By creating a closed-loop system, we turn waste into revenue, improve soil fertility,
              and reduce greenhouse gas emissions simultaneously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
