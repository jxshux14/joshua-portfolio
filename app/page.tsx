import TransitionLink from "@/components/TransitionLink";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-top">
        <p className="eyebrow">IT GRADUATE · WEB · DESIGN</p>
        <p className="location">Based in Dubai, UAE</p>
      </div>

      <div className="hero-content">
        <h1>
          Joshua
          <br />
          <em>Pangilinan.</em>
        </h1>

        <div className="hero-description">
          <p>I build digital experiences where technology meets design.</p>

          <div className="hero-actions">
            <TransitionLink
              href="/work"
              label="Work"
              className="button button-dark"
            >
              View my work <span>→</span>
            </TransitionLink>

            <TransitionLink href="/about" label="About" className="text-link">
              More about me ↗
            </TransitionLink>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>BS INFORMATION TECHNOLOGY</span>
        <span>CUM LAUDE · 2026</span>
        <span>EXPLORE THE TABS ↑</span>
      </div>
    </section>
  );
}