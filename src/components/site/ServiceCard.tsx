type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="contentCard serviceCard">
      <p className="cardIndex">Service</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
