import { Badge } from "@/components/ui/badge";

const stack = [
  { name: "Next.js", color: "#ffffff" },
  { name: "React", color: "#61dafb" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Tailwind CSS", color: "#06b6d4" },
  { name: "Docker", color: "#2496ed" },
  { name: "GitHub Actions", color: "#2088ff" },
];

export default function TechStackSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
          Built With
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Modern technologies powering DockKit
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {stack.map((t, i) => (
          <Badge
            key={t.name}
            variant="outline"
            className="animate-fade-in-up gap-2 px-4 py-2 text-xs sm:text-sm font-medium transition-colors hover:bg-accent"
            style={{ color: t.color, animationDelay: `${i * 0.06}s` }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full shrink-0"
              style={{ backgroundColor: t.color }}
            />
            {t.name}
          </Badge>
        ))}
      </div>
    </section>
  );
}
