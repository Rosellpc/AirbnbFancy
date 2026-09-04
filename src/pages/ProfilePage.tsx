import { Link } from "react-router-dom";
import "../style/ProfilePage.css";

type SessionUser = {
  name?: string;
  email?: string;
};

function getSessionUser(): SessionUser {
  try {
    return JSON.parse(localStorage.getItem("airbnb_host_user") || "{}");
  } catch {
    return {};
  }
}

export default function ProfilePage() {
  const user = getSessionUser();
  const name = user.name || "Viajero FancyHost";
  const email = user.email || "usuario@fancyhost.com";
  const initials = name.charAt(0).toUpperCase();

  return (
    <main className="profile-page">
      <section className="profile-hero">
        <img
        className="profile-avatar"
        src="https://i.pravatar.cc/160?img=12"
        alt={`Foto de perfil de ${name}`}
        />

        <div className="profile-identity">
          <span className="eyebrow">Mi cuenta</span>
          <h1>{name}</h1>
          <p>{email}</p>
        </div>

        <button type="button" className="profile-edit-button">
          Editar perfil
        </button>
      </section>

      <section className="profile-stats" aria-label="Resumen de actividad">
        <article>
          <strong>0</strong>
          <span>Reservas</span>
        </article>
        <article>
          <strong>0</strong>
          <span>Viajes realizados</span>
        </article>
        <article>
          <strong>0</strong>
          <span>Favoritos</span>
        </article>
      </section>

      <section className="profile-grid">
        <article className="profile-card">
          <div className="profile-card-heading">
            <div>
              <span className="card-kicker">Tu actividad</span>
              <h2>Accesos rápidos</h2>
            </div>
            <span className="card-icon">↗</span>
          </div>

          <div className="profile-actions">
            <Link to="/favorites" className="profile-action">
              <span className="action-symbol">♡</span>
              <span>
                <strong>Mis favoritos</strong>
                <small>Consulta tus alojamientos guardados</small>
              </span>
              <b>→</b>
            </Link>

            <Link to="/search" className="profile-action">
              <span className="action-symbol">⌕</span>
              <span>
                <strong>Explorar alojamientos</strong>
                <small>Encuentra tu próximo destino</small>
              </span>
              <b>→</b>
            </Link>
          </div>
        </article>

        <article className="profile-card">
          <div className="profile-card-heading">
            <div>
              <span className="card-kicker">Preferencias</span>
              <h2>Configuración</h2>
            </div>
            <span className="card-icon">⚙</span>
          </div>

          <div className="profile-preferences">
            <div>
              <span>Idioma</span>
              <strong>Español</strong>
            </div>
            <div>
              <span>Moneda</span>
              <strong>USD ($)</strong>
            </div>
            <div>
              <span>Notificaciones</span>
              <strong className="preference-active">Activadas</strong>
            </div>
          </div>
        </article>
      </section>

      <section className="profile-tip">
        <span>✦</span>
        <div>
          <h2>Haz que tu próxima estancia sea especial</h2>
          <p>
            Guarda tus alojamientos favoritos para compararlos y reservarlos
            cuando estés listo.
          </p>
        </div>
        <Link to="/search">Explorar ahora</Link>
      </section>
    </main>
  );
}