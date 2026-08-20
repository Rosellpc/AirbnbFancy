import { Fragment, type FormEvent } from 'react';

type SearchBoxProps = {
  value: string;
  searchedValue: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onSearch: (value: string) => void;
};

export function SearchBox({
  value,
  searchedValue,
  onChange,
  onClear,
  onSearch,
}: SearchBoxProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(value.trim());
  }

  return (
    <Fragment>
      <form className="search-box" onSubmit={handleSubmit}>
        <label>
          Ciudad
          <span className="city-input-wrapper">
            <input
              type="text"
              placeholder="Santiago, Chile"
              value={value}
              onChange={(event) => onChange(event.target.value)}
            />

            {(value || searchedValue) && (
              <button
                className="clear-city-button"
                type="button"
                onClick={onClear}
              >
                x
              </button>
            )}
          </span>
        </label>
        <label>
          Tipo
          <input type="text" placeholder="Apartamento" />
        </label>
        <label>
          Huéspedes
          <input type="number" placeholder="2" />
        </label>
        <button type="submit">Buscar</button>
      </form>
      <p className="search-box">
        Resultado de búsqueda: <strong>{searchedValue || 'Sin búsqueda'}</strong>
      </p>
    </Fragment>
  );
}
