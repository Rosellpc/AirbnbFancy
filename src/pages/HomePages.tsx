import { useEffect, useState } from 'react';

import { Header } from '../components/layout/Header';
import { HeroSection } from '../components/ui/HeroSection';
import { SearchBox } from '../components/ui/SearchBox';
import { PropertiesSection } from '../components/properties/PropertiesSection';
import { PROPERTIES_DATA } from '../data/propertiesData';
import type { Property } from '../types/propertyType';
import { filterProperties } from '../utils/filterProperties';

export function HomePages() {
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');
  const [propertiesFromAPI, setPropertiesFromAPI] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timeId = window.setTimeout(() => {
      try {
        setPropertiesFromAPI(PROPERTIES_DATA);
      } catch {
        setError('No pudimos cargar las propiedades, my friend.');
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => window.clearTimeout(timeId);
  }, []);

  const filteredProperties = filterProperties(propertiesFromAPI, search);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <HeroSection />
        <SearchBox
          value={city}
          searchedValue={search}
          onChange={setCity}
          onSearch={setSearch}
          onClear={() => {
            setCity('');
            setSearch('');
          }}
        />
        {isLoading && <p>Cargando propiedades, espera un ratico...</p>}

        {error && <p>{error}</p>}
        {!isLoading && !error && (
          <PropertiesSection properties={filteredProperties} />
        )}
      </main>
    </div>
  );
}

export default HomePages;
