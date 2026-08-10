"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, BrainCircuit, Sparkles, Zap } from "lucide-react";

const panels = [
  { number: "01", title: "Create", text: "Genera experiencias digitales que piensan, responden y se adaptan." },
  { number: "02", title: "Animate", text: "Convierte el scroll, el cursor y cada gesto en parte de la narrativa." },
  { number: "03", title: "Scale", text: "Construye una base modular preparada para crecer con IA." },
];

export default function Home() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) < Math.abs(event.deltaY) || !trackRef.current) return;
      trackRef.current.scrollLeft += event.deltaX;
      setActive(Math.min(2, Math.max(0, Math.round(trackRef.current.scrollLeft / (window.innerWidth * 0.78)))));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <main>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <nav className="nav">
        <a className="brand" href="#top"><span className="brand-mark">✦</span> NEXUS<span className="brand-dot">.</span></a>
        <div className="nav-links"><a href="#experience">Experience</a><a href="#systems">Systems</a><a href="#connect">Connect</a></div>
        <a className="nav-cta" href="#connect">Start a project <ArrowRight size={15} /></a>
      </nav>

      <section id="top" className="hero">
        <div className="hero-grid" />
        <div className="orb orb-a" /><div className="orb orb-b" />
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> INTELLIGENCE × DESIGN</p>
          <h1>BUILD<br /><em>WHAT'S NEXT.</em></h1>
          <p className="hero-sub">Digital experiences engineered with intelligence, motion and a little bit of magic.</p>
          <div className="hero-actions"><a className="button button-primary" href="#experience">Explore the system <ArrowDown size={17} /></a><span className="scroll-note">SCROLL TO DISCOVER</span></div>
        </div>
        <div className="hero-core" aria-hidden="true">
          <div className="core-ring ring-1" /><div className="core-ring ring-2" /><div className="core-ring ring-3" />
          <div className="core"><BrainCircuit size={48} strokeWidth={1} /></div>
          <span className="core-label label-1">AI / 01</span><span className="core-label label-2">∞ / MOTION</span><span className="core-label label-3">SYSTEM ONLINE</span>
        </div>
        <div className="hero-index">00 — 01</div>
      </section>

      <section id="experience" className="intro section-pad">
        <div className="section-tag">01 / THE EXPERIENCE</div>
        <div className="intro-layout">
          <h2>Interfaces should<br /><span>feel alive.</span></h2>
          <div><p className="large-copy">We combine AI, interaction design and motion into websites that don't simply display information — they create a feeling.</p><p className="muted">Every transition has a purpose. Every interaction tells the user where to look next.</p></div>
        </div>
        <div className="scroll-line"><span>KEEP SCROLLING</span><div /></div>
      </section>

      <section id="systems" className="horizontal-section">
        <div className="section-pad system-heading"><div className="section-tag">02 / INTELLIGENT SYSTEMS</div><p>USE YOUR <strong>SCROLL</strong> TO MOVE THROUGH THE SYSTEM <span>→</span></p></div>
        <div className="panel-track" ref={trackRef}>
          {panels.map((panel, i) => (
            <article className={`system-panel ${active === i ? "is-active" : ""}`} key={panel.number}>
              <div className="panel-number">{panel.number}</div><Sparkles className="panel-icon" size={26} />
              <div className="panel-content"><p className="eyebrow">NEXUS / 0{panel.number}</p><h3>{panel.title}</h3><p>{panel.text}</p><a href="#connect">Explore <ArrowRight size={15} /></a></div>
              <div className="panel-grid" />
            </article>
          ))}
        </div>
        <div className="panel-dots">{panels.map((_, i) => <button aria-label={`Panel ${i + 1}`} className={active === i ? "active" : ""} key={i} onClick={() => { setActive(i); trackRef.current?.scrollTo({ left: i * window.innerWidth * .78, behavior: "smooth" }); }} />)}</div>
      </section>

      <section className="statement section-pad">
        <div className="statement-glow" />
        <p className="eyebrow"><Zap size={15} /> DESIGNED FOR THE FUTURE</p>
        <h2>Less interface.<br /><span>More interaction.</span></h2>
        <p>From a subtle cursor response to a cinematic scroll sequence, we make technology feel human.</p>
      </section>

      <section id="connect" className="cta section-pad">
        <div className="section-tag">03 / YOUR NEXT MOVE</div>
        <div className="cta-card"><div><p className="eyebrow">LET'S MAKE SOMETHING</p><h2>Ready to make<br /><em>an impact?</em></h2></div><a className="button button-primary" href="mailto:hello@nexus.studio">Start a conversation <ArrowRight size={17} /></a></div>
        <footer><span>© 2026 NEXUS STUDIO</span><span>AI · DESIGN · MOTION</span><span>BUILT FOR WHAT'S NEXT</span></footer>
      </section>
    </main>
  );
}
