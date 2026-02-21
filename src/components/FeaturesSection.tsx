import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const features = [
  {
    title: "Base OS Selection",
    description:
      "Choose from popular Linux distributions like Ubuntu, Debian, and Rocky Linux as the foundation for your custom container.",
    color: "#3b82f6",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Dev Toolkits",
    description:
      "Pick from curated development toolkits — compilers, build systems, debuggers, and language runtimes — all pre-configured.",
    color: "#a855f7",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
      </svg>
    ),
  },
  {
    title: "One-Click Build",
    description:
      "Hit build and DockKit generates a Dockerfile, triggers CI/CD via GitHub Actions, and delivers your image — ready to pull.",
    color: "#10b981",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Version Control",
    description:
      "Track your image configurations, compare versions, and roll back to any previous build with a full audit trail.",
    color: "#f59e0b",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M6 21V9a9 9 0 0 0 9 9" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
      {/* Section header */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
          What to Expect
        </h2>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
          A powerful visual builder for crafting production-ready Docker images
          — no Dockerfile expertise required.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {features.map((f, i) => (
          <Card
            key={f.title}
            className="animate-fade-in-up group relative bg-card/50 hover:bg-card transition-all duration-300 hover:-translate-y-0.5"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* Top accent line on hover */}
            <div
              className="absolute inset-x-6 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(90deg, transparent, ${f.color}, transparent)`,
              }}
            />

            <CardHeader>
              {/* Icon */}
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg mb-2 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${f.color}15`, color: f.color }}
              >
                {f.icon}
              </div>

              <CardTitle className="text-base sm:text-lg">{f.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {f.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
