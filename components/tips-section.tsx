const tips = [
  {
    number: "01",
    title: "Domina los fundamentos antes que las herramientas",
    body: "Comprende primero la teoría del color, tipografía y composición. Las herramientas son secundarias — los principios son universales y te acompañarán toda la carrera.",
  },
  {
    number: "02",
    title: "Practica con proyectos reales desde el día uno",
    body: "Rediseña logos de marcas famosas, crea mockups de apps, o diseña pósters para eventos. Los proyectos simulados te dan portafolio y experiencia práctica real.",
  },
  {
    number: "03",
    title: "Estudia el trabajo de otros diseñadores",
    body: "Sigue a diseñadores en Dribbble, Behance y Pinterest. Analiza qué hace que un diseño funcione: jerarquía, espacio en blanco, paleta, alineación.",
  },
  {
    number: "04",
    title: "Construye un portafolio progresivamente",
    body: "Empieza con 3-5 proyectos sólidos. La calidad supera a la cantidad. Cada proyecto debe mostrar tu proceso creativo, no solo el resultado final.",
  },
  {
    number: "05",
    title: "Aprende a recibir y dar retroalimentación",
    body: "Comparte tu trabajo en comunidades de freeCodeCamp, Reddit r/design o Discord. La crítica constructiva acelera tu aprendizaje más que cualquier tutorial.",
  },
  {
    number: "06",
    title: "Sé consistente: diseña algo cada día",
    body: "Aunque sea 15 minutos al día, mantén la práctica constante. La consistencia a largo plazo supera a las sesiones de estudio intensivas pero irregulares.",
  },
];

export function TipsSection() {
  return (
    <section id="tips" className="py-20 border-b border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-widest">
            Consejos
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-foreground text-balance md:text-4xl">
            Tips para aprender diseño gráfico
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed text-pretty">
            Recomendaciones de la comunidad de freeCodeCamp para avanzar más rápido en tu camino como diseñador.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip) => (
            <div
              key={tip.number}
              className="relative rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors"
            >
              <span className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold text-primary/10 absolute top-4 right-5 select-none">
                {tip.number}
              </span>
              <h3 className="text-sm font-semibold text-foreground mb-3 text-balance leading-snug">
                {tip.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tip.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
