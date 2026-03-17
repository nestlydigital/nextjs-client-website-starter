type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
};

export function ProjectCard({ title, category, description }: ProjectCardProps) {
  return (
    <article className="contentCard projectCard">
      <p className="cardIndex">{category}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
