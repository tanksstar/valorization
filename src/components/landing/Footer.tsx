import { Leaf, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <Leaf className="h-6 w-6 text-primary" />
              AgroCycle AI
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              Smart integrated agro-waste valorization system for renewable energy, soil fertility, and circular economic growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/60">
              {["About", "Features", "How It Works", "Impact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-background/60">
              {["Bio-Briquettes", "Organic Compost", "Eco-Paper", "Biochar"].map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Addis Ababa, Ethiopia</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@agrocycleai.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +251 911 123 456</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center text-sm text-background/40">
          © 2026 AgroCycle AI. All rights reserved. Smart Circular Agriculture for a Sustainable Future.
        </div>
      </div>
    </footer>
  );
}
