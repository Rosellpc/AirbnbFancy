import { useParams } from "react-router-dom";

export function BookingPage() {
    const amenities = [
    "Wifi de alta velocidad",
    "Cocina totalmente equipada",
    "Piscina privada",
    "Estacionamiento incluido",
    "Aire acondicionado",
    "Zona de trabajo",
    ];

    const reviews = [
    { name: "Ana", text: "La casa es increíble, muy cómoda y con una vista espectacular.", score: 5 },
    { name: "Sergio", text: "Todo estaba impecable y el anfitrión respondió enseguida.", score: 5 },
    ];

    {
  return (
    <main className="booking-page">
      <section className="booking-shell">
        <div className="booking-main">
          <div className="booking-header">
            <span className="eyebrow">Reserva disponible</span>
            <h1>Casa panorámica en la montaña</h1>
            <div className="meta-row">
              <span>★ 4,9</span>
              <span>· 128 reseñas</span>
              <span>· Barcelona, España</span>
            </div>
          </div>

          <div className="booking-gallery" aria-label="Galería de la propiedad">
            <div className="gallery-main">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                alt="Vista principal de la propiedad"
              />
            </div>

            <div className="gallery-grid">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80"
                alt="Habitación"
              />
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"
                alt="Sala de estar"
              />
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
                alt="Exterior"
              />
              <img
                src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80"
                alt="Cocina"
              />
            </div>
          </div>

          <div className="info-block host-block">
            <div className="host-card">
              <div className="host-avatar">A</div>
              <div>
                <h3>Anfitrión: Alba</h3>
                <p>Superanfitrión · 5 años respondiendo</p>
              </div>
            </div>
            <p>
              Casa moderna con vistas a la ciudad, diseño cálido y espacios abiertos.
              Ideal para escapadas, trabajo remoto o una experiencia relajante con
              familia y amigos.
            </p>
          </div>

          <div className="info-block">
            <h3>Qué ofrece este lugar</h3>
            <ul className="amenity-list">
              {amenities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="info-block">
            <h3>Reseñas destacadas</h3>

            <div className="review-list">
              {reviews.map((review) => (
                <article key={review.name} className="review-item">
                  <div className="review-header">
                    <strong>{review.name}</strong>
                    <span>{Array(review.score).fill("★").join("")}</span>
                  </div>
                  <p>{review.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <aside className="booking-card">
          <div className="booking-card-header">
            <div className="booking-price">
              <strong>$240</strong>
              <span>/ noche</span>
            </div>
            <span className="rating-pill">★ 4,9</span>
          </div>

          <div className="booking-fields">
            <div className="field-group">
              <label>Check-in</label>
              <div className="field-box">22 Ago 2026</div>
            </div>

            <div className="field-group">
              <label>Check-out</label>
              <div className="field-box">25 Ago 2026</div>
            </div>

            <div className="field-group full">
              <label>Huéspedes</label>
              <div className="field-box">2 huéspedes</div>
            </div>
          </div>

          <button className="booking-button">Reservar ahora</button>

          <div className="booking-summary">
            <div className="summary-row">
              <span>$240 x 3 noches</span>
              <strong>$720</strong>
            </div>
            <div className="summary-row">
              <span>Servicio</span>
              <strong>$88</strong>
            </div>
            <div className="summary-row">
              <span>Impuestos</span>
              <strong>$126</strong>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <strong>$934</strong>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};
}

