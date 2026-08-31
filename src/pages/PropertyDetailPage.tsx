import { Link, useParams } from "react-router-dom";
import { PROPERTIES_DATA } from "../data/propertiesData";
import "../style/PropertyDetailsPage.css";

const amenities = [
  "Wifi de alta velocidad",
  "Cocina totalmente equipada",
  "Piscina privada",
  "Estacionamiento incluido",
  "Aire acondicionado",
  "Zona de trabajo",
];

const reviews = [
  {
    name: "Ana",
    text: "La casa es increíble, muy cómoda y con una vista espectacular.",
    score: 5,
  },
  {
    name: "Sergio",
    text: "Todo estaba impecable y el anfitrión respondió enseguida.",
    score: 5,
  },
];

export function PropertyDetailPage() {
  const { id } = useParams();
  const property = PROPERTIES_DATA.find((item) => item.id === Number(id));

  if (!property) {
    return (
      <main className="property-detail-page">
        <section className="property-not-found">
          <h1>Alojamiento no encontrado</h1>
          <p className="p">La propiedad que buscas no está disponible.</p>
          <Link className="detail-button" to="/search">
            <p>Ver otras propiedades</p>
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="property-detail-page">
      <section className="property-detail-shell">
        <div className="property-detail-content">
          <div className="detail-breadcrumb">
            <Link to="/">Alojamientos</Link>
            <span>/</span>
            <span>{property.location}</span>
          </div>

          <header className="property-detail-header">
            <div>
              <span className="eyebrow">{property.type}</span>
              <h1>{property.title}</h1>

              <div className="property-detail-meta">
                <span>★ 4,9</span>
                <span>· 128 reseñas</span>
                <span>· {property.location}</span>
              </div>
            </div>

            <div className="property-detail-actions">
              <button type="button" aria-label="Guardar propiedad">
                ♡ Guardar
              </button>
              <button type="button" aria-label="Compartir propiedad">
                ↗ Compartir
              </button>
            </div>
          </header>

          <section className="property-gallery" aria-label="Galería de la propiedad">
            <div className="property-gallery-main">
              <img src={property.image} alt={property.title} />
              <span className="gallery-badge">Alojamiento destacado</span>
            </div>

            <div className="property-gallery-side">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80"
                  alt="Interior del alojamiento"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"
                  alt="Cocina del alojamiento"
                />
              </div>
            </div>
          </section>

          <section className="detail-card host-section">
            <div className="host-avatar">A</div>
            <div>
              <h2>Anfitrión: Alba</h2>
              <p>Superanfitrión · 5 años respondiendo</p>
            </div>
            <span className="host-status">● Disponible</span>
          </section>

          <section className="detail-card">
            <h2>Sobre este alojamiento</h2>
            <p className="detail-description">
              Casa moderna con vistas a la ciudad, diseño cálido y espacios
              abiertos. Ideal para escapadas, trabajo remoto o una experiencia
              relajante con familia y amigos.
            </p>
          </section>

          <section className="detail-card">
            <h2>Qué ofrece este lugar</h2>
            <ul className="amenity-list detail-amenities">
              {amenities.map((amenity) => (
                <li key={amenity}>{amenity}</li>
              ))}
            </ul>
          </section>

          <section className="detail-card">
            <div className="section-heading">
              <div>
                <h2>Reseñas destacadas</h2>
                <p>Opiniones de huéspedes anteriores</p>
              </div>
              <strong className="detail-rating">★ 4,9</strong>
            </div>

            <div className="review-list">
              {reviews.map((review) => (
                <article className="review-item" key={review.name}>
                  <div className="review-header">
                    <div className="review-author">
                      <span>{review.name.charAt(0)}</span>
                      <strong>{review.name}</strong>
                    </div>
                    <span className="review-stars">
                      {"★".repeat(review.score)}
                    </span>
                  </div>
                  <p>{review.text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="detail-booking-card">
          <div className="booking-card-top">
            <div>
              <span className="booking-label">Desde</span>
              <div className="detail-price">
                <strong>${property.price}</strong>
                <span>/ noche</span>
              </div>
            </div>

            <span className="detail-rating">★ 4,9</span>
          </div>

          <div className="booking-preview">
            <div>
              <span>Check-in</span>
              <strong>22 Ago 2026</strong>
            </div>
            <div>
              <span>Check-out</span>
              <strong>25 Ago 2026</strong>
            </div>
            <div>
              <span>Huéspedes</span>
              <strong>2 huéspedes</strong>
            </div>
          </div>

          <Link className="detail-button" to={`/booking/${property.id}`}>
            Reservar ahora
          </Link>

          <p className="booking-note">
            No se te cobrará nada todavía
          </p>

          <div className="booking-cost">
            <div>
              <span>${property.price} x 3 noches</span>
              <strong>${property.price * 3}</strong>
            </div>
            <div>
              <span>Servicio</span>
              <strong>$88</strong>
            </div>
            <div>
              <span>Impuestos</span>
              <strong>$126</strong>
            </div>
            <div className="booking-total">
              <span>Total</span>
              <strong>${property.price * 3 + 88 + 126}</strong>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}