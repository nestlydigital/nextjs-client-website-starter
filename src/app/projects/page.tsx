import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionIntro } from "@/components/site/SectionIntro";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="section pageTop">
      <div className="shell stack">
        <SectionIntro
          eyebrow="Projects"
          title="A portfolio grid ready for case studies, thumbnails, and future project detail pages."
          description="The starter uses reusable project cards so the homepage and projects page can share the same content model with minimal duplication."
        />

        <div className="cardGrid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
