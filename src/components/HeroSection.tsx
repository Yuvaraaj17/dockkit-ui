import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center px-6 sm:px-8 pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-20 max-w-3xl mx-auto">
      {/* Under Development Badge */}
      <Badge
        variant="outline"
        className="border-amber-500/30 bg-amber-500/10 text-amber-400 gap-2 px-4 py-1.5 text-xs sm:text-sm tracking-wider uppercase animate-fade-in-up"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
        </span>
        Under Development
      </Badge>

      {/* Docker Icon */}
      <div className="mt-8 sm:mt-10 mb-6 sm:mb-8 animate-float">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl animate-pulse-ring">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 p-[1.5px]">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-background">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13 4H11V6H13V4ZM13 7H11V9H13V7ZM10 7H8V9H10V7ZM7 7H5V9H7V7ZM10 4H8V6H10V4ZM16 7H14V9H16V7ZM19.5 9.5C19.14 9.18 18.36 8.82 17.5 8.95C17.35 7.95 16.65 7.1 16 6.65L15.5 6.35L15.15 6.75C14.65 7.35 14.35 8.2 14.4 9C14.42 9.35 14.5 9.85 14.8 10.3C14.4 10.5 13.7 10.75 12.8 10.75H2.05C1.95 11.55 2.05 13.25 3 15.05C3.7 16.35 4.9 17.35 6.5 18C8.15 18.65 10.35 18.7 12.85 17.65C15.15 16.65 16.85 15.05 18.05 12.85C18.85 12.85 20.35 12.85 21.35 11.15C21.35 11.15 21.45 10.95 21.65 10.45L22 9.65L21.2 9.2C20.75 8.95 19.9 8.8 19.5 9.5Z"
                  fill="url(#heroDockerGrad)"
                />
                <defs>
                  <linearGradient id="heroDockerGrad" x1="2" y1="4" x2="22" y2="18" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <h1
        className="animate-fade-in-up text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none"
        style={{ animationDelay: "0.1s" }}
      >
        <span className="gradient-text">DockKit</span>
      </h1>

      {/* Tagline */}
      <p
        className="animate-fade-in-up mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed"
        style={{ animationDelay: "0.2s" }}
      >
        Build{" "}
        <span className="text-cyan-400 font-medium">custom Docker images</span>{" "}
        by picking your base OS, dev tools, and kits&nbsp;—{" "}
        <span className="text-purple-400 font-medium">
          from an intuitive visual builder
        </span>
        .
      </p>

      {/* Subtitle */}
      <p
        className="animate-fade-in-up mt-3 text-sm text-muted-foreground/60"
        style={{ animationDelay: "0.3s" }}
      >
        We&apos;re crafting something special. Stay tuned for launch!
      </p>

      {/* CTA */}
      <Button
        asChild
        variant="outline"
        size="lg"
        className="animate-fade-in-up mt-8 sm:mt-10 gap-2.5"
        style={{ animationDelay: "0.4s" }}
      >
        <a
          href="https://github.com/Yuvaraaj17/dockkit-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Star on GitHub
        </a>
      </Button>
    </section>
  );
}
