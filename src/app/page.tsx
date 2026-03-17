import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionIntro } from "@/components/site/SectionIntro";
import { ServiceCard } from "@/components/site/ServiceCard";
import { company } from "@/data/company";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="shell">
          <SectionIntro
            eyebrow="Services Overview"
            title="A starter system designed around the pages most client sites actually need."
            description="The template structure follows a practical service-business layout with reusable sections, data-driven cards, and clean calls to action."
          />
          <div className="cardGrid">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section accentSection">
        <div className="shell">
          <SectionIntro
            eyebrow="Featured Projects"
            title="Portfolio-ready modules for showcasing completed work."
            description="Project cards can be reused across the homepage, listing pages, and future detail pages without restructuring the content model."
          />
          <div className="cardGrid">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell splitSection">
          <div>
            <SectionIntro
              eyebrow="About Summary"
              title="Built for agencies, freelancers, and repeatable delivery."
              description="NestlyDigital uses this starter pattern to reduce setup time while keeping page structure, typography, and component composition consistent across client projects."
            />
          </div>

          <div className="statGrid">
            {company.stats.map((stat) => (
              <article key={stat.label} className="statCard">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ctaSection">
        <div className="shell ctaPanel">
          <div>
            <p className="eyebrow">Call to Action</p>
            <h2>Need a clean starting point for your next client website?</h2>
          </div>
          <Link href="/contact" className="buttonPrimary">
            Start a Project
          </Link>
        </div>
      </section>

      <section className="section contactPreviewSection">
        <div className="shell splitSection">
          <div>
            <SectionIntro
              eyebrow="Contact Preview"
              title="Direct contact details are always within reach."
              description="The template keeps high-intent visitors close to an inquiry path with clear contact information and a dedicated contact page."
            />
          </div>
          <article className="contentCard">
            <p className="cardIndex">Reach Out</p>
            <h3>{company.name}</h3>
            <p>{company.email}</p>
            <p>{company.phone}</p>
            <p>{company.address}</p>
          </article>
        </div>
      </section>
    </>
  );
}
