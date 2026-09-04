import { FormEvent, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import type { Property } from "../types/propertyType";
import "../style/Booking.css";

export default function Booking() {
  const property = useLoaderData() as Property;
  const navigate = useNavigate();

  const [guests, setGuests] = useState(2);
  const [checkIn, setCheckIn] = useState("2026-08-22");
  const [checkOut, setCheckOut] = useState("2026-08-25");
  const [submitted, setSubmitted] = useState(false);

  const nights = 3;
  const serviceFee = 88;
  const taxes = 126;
  const accommodationTotal = property.price * nights;
  const total = accommodationTotal + serviceFee + taxes;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="booking-page">
        <section className="booking-success">
          <span className="booking-success-icon">✓</span>
          <span className="eyebrow">Reserva confirmada</span>
          <h1>Tu estancia está lista</h1>
          <p>
            Has reservado <strong>{property.title}</strong> para {guests}{" "}
            huéspedes.
          </p>
          <button
            type="button"
            className="booking-primary-button"
            onClick={() => navigate("/profile")}
          >
            Ir a mi perfil
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="booking-page">
      <div className="booking-breadcrumb">
        <Link to={`/properties/${property.id}`}>← Volver al alojamiento</Link>
      </div>

      <header className="booking-header">
        <div>
          <span className="eyebrow">Confirmar reserva</span>
          <h1>Reserva tu estancia</h1>
          <p>Completa los datos para confirmar tu alojamiento.</p>
        </div>
      </header>

      <section className="booking-layout">
        <form className="booking-form-card" onSubmit={handleSubmit}>
          <div className="booking-section-title">
            <span>01</span>
            <div>
              <h2>Detalles de la estancia</h2>
              <p>Selecciona las fechas y el número de huéspedes.</p>
            </div>
          </div>

          <div className="booking-fields">
            <label>
              Check-in
              <input
                type="date"
                value={checkIn}
                onChange={(event) => setCheckIn(event.target.value)}
                required
              />
            </label>

            <label>
              Check-out
              <input
                type="date"
                value={checkOut}
                onChange={(event) => setCheckOut(event.target.value)}
                required
              />
            </label>

            <label className="booking-field-full">
              Huéspedes
              <select
                value={guests}
                onChange={(event) => setGuests(Number(event.target.value))}
              >
                <option value={1}>1 huésped</option>
                <option value={2}>2 huéspedes</option>
                <option value={3}>3 huéspedes</option>
                <option value={4}>4 huéspedes</option>
                <option value={5}>5 huéspedes</option>
              </select>
            </label>
          </div>

          <div className="booking-section-title">
            <span>02</span>
            <div>
              <h2>Información del huésped</h2>
              <p>Estos datos se utilizarán para gestionar tu reserva.</p>
            </div>
          </div>

          <div className="booking-fields">
            <label>
              Nombre completo
              <input type="text" placeholder="Tu nombre" required />
            </label>

            <label>
              Email
              <input type="email" placeholder="tu@email.com" required />
            </label>

            <label className="booking-field-full">
              Mensaje para el anfitrión
              <textarea
                rows={4}
                placeholder="¿Quieres añadir alguna nota?"
              />
            </label>
          </div>

          <button type="submit" className="booking-primary-button">
            Confirmar reserva · ${total}
          </button>

          <small className="booking-security">
            🔒 Tus datos están protegidos. No se realizará ningún cobro todavía.
          </small>
        </form>

        <aside className="booking-summary-card">
          <div className="booking-property-preview">
            <img src={property.image} alt={property.title} />
            <div>
              <span>{property.type}</span>
              <h2>{property.title}</h2>
              <p>★ 4,9 · {property.location}</p>
            </div>
          </div>

          <div className="booking-summary-content">
            <h2>Resumen del viaje</h2>

            <div className="booking-summary-dates">
              <div>
                <span>Check-in</span>
                <strong>{checkIn}</strong>
              </div>
              <div>
                <span>Check-out</span>
                <strong>{checkOut}</strong>
              </div>
              <div>
                <span>Huéspedes</span>
                <strong>{guests}</strong>
              </div>
            </div>

            <div className="booking-price-list">
              <div>
                <span>${property.price} × {nights} noches</span>
                <strong>${accommodationTotal}</strong>
              </div>
              <div>
                <span>Tarifa de servicio</span>
                <strong>${serviceFee}</strong>
              </div>
              <div>
                <span>Impuestos</span>
                <strong>${taxes}</strong>
              </div>
              <div className="booking-total">
                <span>Total</span>
                <strong>${total}</strong>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}