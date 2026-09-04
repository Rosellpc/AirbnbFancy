import { PropertyCard } from "../components/properties/PropertyCard";
import { PROPERTIES_DATA } from "../data/propertiesData";
import { getFavoriteIds } from "../utils/favorites";
import "../style/FavoritesPage.css";

export default function FavoritesPage() {
  const favoriteIds = getFavoriteIds();

  const favoriteProperties = PROPERTIES_DATA.filter((property) =>
    favoriteIds.includes(property.id),
  );

  return (
    <main className="favorites-page">
      <header className="favorites-header">
        <h1>Tus favoritos</h1>
        <p>Aquí están las propiedades que te gustarón, para revisarlos después.</p>
      </header>

      {favoriteProperties.length > 0 ? (
        <section className="properties-grid">
          {favoriteProperties.map((property) => (
            <PropertyCard
              key={property.id}
              title={property.title}
              location={property.location}
              price={property.price}
              image={property.image}
              type={property.type}
              onClick={() => {}}
            />
          ))}
        </section>
      ) : (
        <section className="favorites-empty">
          <h2>Aún no tienes favoritos</h2>
          <p>Explora los alojamientos y guarda los que más te gusten.</p>
        </section>
      )}
    </main>
  );
}