import { useNavigate } from 'react-router-dom';
import type { Property } from '../../types/propertyType';
import { PropertyCard } from './PropertyCard';

type PropertiesSectionProps = {
  properties: Property[];
};

export function PropertiesSection({ properties }: PropertiesSectionProps) {
  const navigate = useNavigate();

  const handlePropertyClick = (propertyId: Property['id']) => {
    navigate(`/properties/${propertyId}`);
  };

  return (
    <section className="properties-section">
      <div className="section-title">
        <h3>Alojamiento disponible</h3>
        <p>El mejor lugar de la ciudad, para tu estadía</p>
      </div>

      <div className="properties-grid">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard
              key={property.id}
              title={property.title}
              location={property.location}
              price={property.price}
              image={property.image}
              type={property.type}
              onClick={() => handlePropertyClick(property.id)}
            />
          ))
        ) : (
          <p>No se encontraron alojamientos con ese criterio.</p>
        )}
      </div>
    </section>
  );
}