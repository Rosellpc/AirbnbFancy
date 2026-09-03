import { useSearchParams } from "react-router-dom";
import { PropertyCard } from "../components/properties/PropertyCard";
import { PROPERTIES_DATA } from "../data/propertiesData";
import { SearchFilters } from "../components/search/SearchFilter";
import "../style/SearchPage.css";
import "../style/SearchFilter.css";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const destination = searchParams.get("destination") || "";
  const type = searchParams.get("type") || "";

  const filteredProperties = PROPERTIES_DATA.filter((property) => {
    const matchesDestination = property.location
      .toLowerCase()
      .includes(destination.toLowerCase());
    const matchesType = type
      ? property.type === type
      : true;
    
      return matchesDestination && matchesType;
  });

  const handleFilterChange = (key: string, value: string) => {
    const nextParams = new URLSearchParams(searchParams);

    if (value) {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }

    setSearchParams(nextParams)
  };
  
  return (
    <>
    <main className="search-page">
      <header className="search-page-header">
        <div>
          <h1>Resultados de búsqueda</h1>
          <p>
            Destino: {destination || "Todos"} · Tipo: {type || "Todos"}
          </p>
        </div>

        <span className="search-results-count">
          {filteredProperties.length} alojamientos
        </span>
      </header>

      <SearchFilters
        destination={destination}
        type={type}
        onChange={handleFilterChange}
        onClear={() => setSearchParams({})}
      />

      <div className="properties-grid">
        {filteredProperties.map((property) => (
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
      </div>
    </main>
    </>
  );
}
