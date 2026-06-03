import { ArrowRight, BookOpen, Users, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "900K+", label: "Estudiantes activos" },
  { icon: BookOpen, value: "100%", label: "Contenido gratuito" },
  { icon: Star, value: "40+", label: "Horas de cursos" },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border py-24 md:py-32"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--fcc-green)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--fcc-green)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Aprende diseño gráfico gratis
          </div>

          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-5xl md:text-6xl">
            Diseño Gráfico con{" "}
            <span className="text-primary">freeCodeCamp</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Descubre todos los recursos, cursos y herramientas que{" "}
            <strong className="text-foreground">freeCodeCamp</strong> ofrece
            para aprender diseño gráfico desde cero — completamente gratis, a
            tu ritmo y en español.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#cursos"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Ver cursos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://www.freecodecamp.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              Ir a freeCodeCamp
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-14 flex flex-wrap gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                    {value}
                  </p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
