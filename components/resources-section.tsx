import { ExternalLink } from "lucide-react";

const resources = [
  {
    category: "Artículos de freeCodeCamp",
    items: [
      {
        title: "Cómo empezar en el diseño gráfico",
        href: "https://www.freecodecamp.org/news/tag/graphic-design/",
        description: "Guías y tutoriales del equipo de fCC",
      },
      {
        title: "Principios del diseño visual",
        href: "https://www.freecodecamp.org/news/the-key-to-good-design/",
        description: "Los elementos fundamentales del buen diseño",
      },
      {
        title: "Tipografía en diseño gráfico",
        href: "https://www.freecodecamp.org/news/typography/",
        description: "Guía completa sobre el uso de fuentes",
      },
    ],
  },
  {
    category: "Videos en YouTube",
    items: [
      {
        title: "Graphic Design Full Course",
        href: "https://www.youtube.com/watch?v=WONZVnlam6U",
        description: "Curso completo de diseño gráfico (inglés)",
      },
      {
        title: "UI Design Full Course",
        href: "https://www.youtube.com/watch?v=_Hp_dI0__qY",
        description: "Diseño de interfaces de usuario completo",
      },
      {
        title: "Figma Tutorial",
        href: "https://www.youtube.com/watch?v=jwCmIBJ8Jtc",
        description: "Aprende Figma desde cero",
      },
    ],
  },
  {
    category: "Comunidad y práctica",
    items: [
      {
        title: "fCC Forum — Design",
        href: "https://forum.freecodecamp.org/c/project-feedback/",
        description: "Foro oficial para compartir proyectos",
      },
      {
        title: "Dribbble",
        href: "https://dribbble.com/",
        description: "Inspírate con los mejores diseñadores",
      },
      {
        title: "Behance",
        href: "https://www.behance.net/",
        description: "Portafolios de diseñadores profesionales",
      },
    ],
  },
];

export function ResourcesSection() {
  return (
    <section id="recursos" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-widest">
            Recursos
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-foreground text-balance md:text-4xl">
            Material de referencia esencial
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed text-pretty">
            Artículos, videos y comunidades curadas para potenciar tu aprendizaje de diseño.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {resources.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                {group.category}
              </h3>
              <div className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/40 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
