import { SectionIntro } from "@/components/site/SectionIntro";
import { ServiceCard } from "@/components/site/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <section className="section pageTop">
      <div className="shell stack">
        <SectionIntro
          eyebrow="Services"
          title="Clear service presentation with reusable cards and concise supporting copy."
          description="The services page is structured for easy scanning, straightforward messaging, and future expansion into more detailed service sections."
        />

        <div className="cardGrid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="contentCard featureBand">
          <div>
            <p className="cardIndex">Delivery Model</p>
            <h3>Position, design, build, and launch.</h3>
          </div>
          <p>
            Each engagement is meant to move from strategy into production without losing
            consistency across content, visual design, and technical structure.
          </p>
        </div>
      </div>
    </section>
  );
}
