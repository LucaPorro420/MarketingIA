import { Clock, ExternalLink, BarChart2 } from "lucide-react";

const courses = [
  {
    title: "Diseño Gráfico para Principiantes",
    description:
      "Aprende los fundamentos del diseño gráfico: color, tipografía, composición y jerarquía visual desde cero.",
    duration: "6 horas",
    level: "Principiante",
    tag: "Fundamentos",
    href: "https://www.youtube.com/watch?v=WONZVnlam6U",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Canva para Diseñadores",
    description:
      "Domina Canva para crear diseños profesionales: logos, redes sociales, presentaciones y más.",
    duration: "4 horas",
    level: "Principiante",
    tag: "Herramientas",
    href: "https://www.youtube.com/results?search_query=freecodecamp+canva+design",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "Adobe Photoshop — Curso Completo",
    description:
      "Desde la interfaz hasta técnicas avanzadas de edición fotográfica, efectos y retoque digital.",
    duration: "12 horas",
    level: "Intermedio",
    tag: "Adobe",
    href: "https://www.youtube.com/watch?v=IyR_uYsRdPs",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    title: "Figma — Diseño UI/UX",
    description:
      "Aprende Figma para diseñar interfaces, prototipos interactivos y sistemas de diseño modernos.",
    duration: "8 horas",
    level: "Intermedio",
    tag: "UI/UX",
    href: "https://www.youtube.com/watch?v=jwCmIBJ8Jtc",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    title: "Teoría del Color en Diseño",
    description:
      "Entiende la psicología del color, paletas, contraste y cómo aplicar el color de forma efectiva.",
    duration: "2 horas",
    level: "Principiante",
    tag: "Teoría",
    href: "https://www.youtube.com/results?search_query=freecodecamp+color+theory+design",
    color: "from-pink-500/20 to-pink-500/5",
  },
  {
    title: "Adobe Illustrator — Vectores",
    description:
      "Crea ilustraciones, logos e iconos vectoriales escalables usando Adobe Illustrator.",
    duration: "10 horas",
    level: "Intermedio",
    tag: "Adobe",
    href: "https://www.youtube.com/results?search_query=freecodecamp+illustrator",
    color: "from-yellow-500/20 to-yellow-500/5",
  },
];

const levelColor: Record<string, string> = {
  Principiante: "text-emerald-600 bg-emerald-600/10",
  Intermedio: "text-amber-600 bg-amber-600/10",
  Avanzado: "text-red-500 bg-red-500/10",
};

export function CoursesSection() {
  return (
    <section id="cursos" className="py-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-widest">
            Cursos
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-foreground text-balance md:text-4xl">
            Aprende diseño paso a paso
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl text-pretty leading-relaxed">
            Todos estos cursos están disponibles gratuitamente en el canal de
            YouTube de freeCodeCamp.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <a
              key={course.title}
              href={course.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-200 hover:bg-card/80"
            >
              {/* Top accent */}
              <div
                className={`absolute inset-x-0 top-0 h-px rounded-t-xl bg-gradient-to-r ${course.color}`}
              />

              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="inline-flex items-center rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  {course.tag}
                </span>
                <ExternalLink className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0" />
              </div>

              <h3 className="text-base font-semibold text-foreground leading-snug mb-2 text-balance">
                {course.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {course.description}
              </p>

              <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {course.duration}
                </span>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-medium ${
                    levelColor[course.level]
                  }`}
                >
                  <BarChart2 className="h-3 w-3" />
                  {course.level}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
