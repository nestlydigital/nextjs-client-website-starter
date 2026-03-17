import { SectionIntro } from "@/components/site/SectionIntro";
import { company } from "@/data/company";

export default function AboutPage() {
  return (
    <section className="section pageTop">
      <div className="shell stack">
        <SectionIntro
          eyebrow="About Us"
          title="A reusable business website foundation with enough structure to ship quickly."
          description="This starter is meant for professional service brands that need a strong first release without rebuilding the same patterns from scratch every time."
        />

        <div className="twoColumnGrid">
          <article className="contentCard">
            <h3>Company Introduction</h3>
            <p>{company.description}</p>
          </article>
          <article className="contentCard">
            <h3>Mission and Vision</h3>
            <p>
              Build dependable digital infrastructure for businesses that need modern websites,
              strong messaging, and a maintainable foundation for future growth.
            </p>
          </article>
          <article className="contentCard">
            <h3>Experience and Expertise</h3>
            <p>
              The structure is tailored to agencies, consultants, construction firms, and local
              businesses that rely on clarity, trust, and responsive presentation.
            </p>
          </article>
          <article className="contentCard">
            <h3>Key Achievements</h3>
            <p>
              Reusable route scaffolding, centralized content, a light and dark theme system, and
              a visual language that can be customized for client-specific branding.
            </p>
          </article>
        </div>

        <div className="cardGrid">
          {company.values.map((value) => (
            <article key={value.title} className="contentCard">
              <p className="cardIndex">Value</p>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
