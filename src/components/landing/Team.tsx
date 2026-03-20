import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const team = [
  {
    name: "Nolawi Hailu",
    role: "Co-Founder",
    initials: "NH",
    image: "",
    quote:
      "Every harvest tells a story — ours is about turning what's left behind into the foundation for what comes next.",
  },
  {
    name: "Zakir Nuredin",
    role: "Co-Founder",
    initials: "ZN",
    image: "",
    quote:
      "Sustainability isn't a sacrifice; it's the smartest investment we can make for our communities and our planet.",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Meet the Founders
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Driven by a shared vision to reshape agriculture through circular innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-card rounded-2xl border shadow-sm p-8 flex flex-col items-center text-center"
            >
              <Avatar className="h-28 w-28 mb-5 ring-4 ring-primary/20">
                {member.image && <AvatarImage src={member.image} alt={member.name} />}
                <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                  {member.initials}
                </AvatarFallback>
              </Avatar>

              <h3 className="text-xl font-bold text-card-foreground">{member.name}</h3>
              <span className="text-sm font-medium text-primary mb-4">{member.role}</span>

              <div className="relative mt-2">
                <Quote className="h-5 w-5 text-primary/30 absolute -top-3 -left-2" />
                <p className="text-muted-foreground text-sm italic leading-relaxed pl-4">
                  "{member.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
