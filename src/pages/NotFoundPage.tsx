import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return ( 
      <main className="property-detail-page">
        <section className="property-not-found">
          <span className="eyebrow">404</span>
          <h1>Página no encontrada</h1>
          <p className="p">La página que buscas no existe o fue movida.</p>
          <Link className="detail-button" to="/">
            <p>Volver al inicio</p>
          </Link>
        </section>
      </main>
    );
}