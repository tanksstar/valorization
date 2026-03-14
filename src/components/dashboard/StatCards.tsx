import { TrendingUp, TrendingDown, Package, DollarSign, Recycle, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { statCards } from "@/data/mockData";

const icons = [Package, DollarSign, Recycle, Wind];

export function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statCards.map((card, i) => {
        const Icon = icons[i];
        return (
          <Card key={card.title} className="shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">{card.title}</span>
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
              </div>
              <p className="text-2xl font-bold text-card-foreground">{card.value}</p>
              <div className="flex items-center gap-1 mt-1">
                {card.trend === "up" ? (
                  <TrendingUp className="h-3.5 w-3.5 text-primary" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5 text-destructive" />
                )}
                <span className={`text-xs font-medium ${card.trend === "up" ? "text-primary" : "text-destructive"}`}>
                  {card.change}
                </span>
                <span className="text-xs text-muted-foreground">vs last month</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
