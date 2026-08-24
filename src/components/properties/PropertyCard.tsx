import type { Property } from '../../types/propertyType';

type PropertyCardProps = Omit<Property, 'id'> & {
  onClick: () => void;
};

export function PropertyCard({
  title,
  location,
  price,
  image,
  type,
  onClick,
}: PropertyCardProps) {
  return (
    <article
      className="property-card"
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <img src={image} alt={title} />

      <div className="property-card-content">
        <h4>{title}</h4>
        <p>{location}</p>
        <p>{type}</p>
        <strong>${price} / noche</strong>
      </div>
    </article>
  );
}