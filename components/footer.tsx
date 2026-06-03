export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">fCC</span>
          </div>
          <span className="text-sm text-muted-foreground">
            Contenido educativo sobre{" "}
            <a
              href="https://www.freecodecamp.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              freeCodeCamp
            </a>{" "}
            y diseño gráfico.
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          No oficial · Solo con fines educativos
        </p>
      </div>
    </footer>
  );
}
