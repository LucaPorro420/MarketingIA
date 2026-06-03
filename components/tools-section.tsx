import { ExternalLink } from "lucide-react";

const tools = [
  {
    name: "Canva",
    category: "Diseño general",
    description: "Plataforma de diseño drag-and-drop ideal para redes sociales, presentaciones y materiales de marketing.",
    href: "https://www.canva.com",
    free: true,
    icon: "🎨",
  },
  {
    name: "Figma",
    category: "UI/UX Design",
    description: "Herramienta colaborativa para diseño de interfaces, prototipos y sistemas de diseño. Gratuita para uso básico.",
    href: "https://www.figma.com",
    free: true,
    icon: "📐",
  },
  {
    name: "GIMP",
    category: "Edición de fotos",
    description: "Alternativa gratuita y de código abierto a Photoshop para edición y retoque fotográfico avanzado.",
    href: "https://www.gimp.org",
    free: true,
    icon: "🖼️",
  },
  {
    name: "Inkscape",
    category: "Gráficos vectoriales",
    description: "Editor de gráficos vectoriales SVG de código abierto. Alternativa gratuita a Adobe Illustrator.",
    href: "https://inkscape.org",
    free: true,
    icon: "✏️",
  },
  {
    name: "Adobe Express",
    category: "Creación rápida",
    description: "Crea contenido visual atractivo de forma rápida. Tiene un plan gratuito con muchas plantillas.",
    href: "https://www.adobe.com/express/",
    free: true,
    icon: "⚡",
  },
  {
    name: "Coolors",
    category: "Paletas de color",
    description: "Genera paletas de colores armoniosas y exporta en múltiples formatos para tus proyectos.",
    href: "https://coolors.co",
    free: true,
    icon: "🎭",
  },
  {
    name: "Google Fonts",
    category: "Tipografía",
    description: "Más de 1,400 fuentes gratuitas de alta calidad para usar en proyectos de diseño y web.",
    href: "https://fonts.google.com",
    free: true,
    icon: "🔤",
  },
  {
    name: "Unsplash",
    category: "Fotografía",
    description: "Imágenes de alta resolución gratuitas y libres de derechos para usar en tus diseños.",
    href: "https://unsplash.com",
    free: true,
    icon: "📷",
  },
];

export function ToolsSection() {
  return (
    <section id="herramientas" className="py-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-widest">
            Herramientas
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-foreground text-balance md:text-4xl">
            Las mejores herramientas gratuitas
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed text-pretty">
            Estas herramientas son recomendadas por la comunidad de freeCodeCamp para empezar en el diseño gráfico sin gastar nada.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <span className="text-2xl" role="img" aria-label={tool.name}>
                  {tool.icon}
                </span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-primary transition-colors" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-foreground">
                    {tool.name}
                  </h3>
                  {tool.free && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                      Gratis
                    </span>
                  )}
                </div>
                <p className="text-xs text-primary/70 mb-2">{tool.category}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
