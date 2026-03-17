import { ContactForm } from "@/components/site/ContactForm";
import { SectionIntro } from "@/components/site/SectionIntro";
import { company } from "@/data/company";

export default function ContactPage() {
  return (
    <section className="section pageTop">
      <div className="shell stack">
        <SectionIntro
          eyebrow="Contact"
          title="Make it easy for visitors to reach out and start a conversation."
          description="This page includes a simple inquiry form, direct contact details, and a location placeholder that can be replaced with a live map integration."
        />

        <div className="contactLayout">
          <ContactForm />

          <div className="contactSidebar">
            <article className="contentCard">
              <p className="cardIndex">Direct Contact</p>
              <h3>{company.name}</h3>
              <p>{company.email}</p>
              <p>{company.phone}</p>
              <p>{company.hours}</p>
            </article>

            <article className="contentCard mapPlaceholder">
              <p className="cardIndex">Location Map</p>
              <h3>{company.address}</h3>
              <p>Replace this panel with an embedded map, directions, or a local office photo.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
