import Link from "next/link";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section className="heroSection">
      <div className="shell heroGrid">
        <div className="heroCopy">
          <p className="eyebrow">Reusable Next.js starter</p>
          <h1>Modern client websites with structure, speed, and a clear conversion path.</h1>
          <p className="lede">{company.description}</p>
          <div className="heroActions">
            <Link href="/contact" className="buttonPrimary">
              Request a Quote
            </Link>
            <Link href="/projects" className="buttonSecondary">
              View Projects
            </Link>
          </div>
        </div>

        <div className="heroPanel">
          <p className="panelLabel">Launch framework</p>
          <div className="heroStack">
            <div className="metricCard">
              <span>Pages</span>
              <strong>Home, About, Services, Projects, Contact</strong>
            </div>
            <div className="metricCard">
              <span>Includes</span>
              <strong>Theme toggle, reusable cards, responsive sections</strong>
            </div>
            <div className="metricCard">
              <span>Deployment</span>
              <strong>Ready for a Vercel-based workflow</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
