import {Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import "../style/PropertyDetailsPage.css";


export default function RouteErrorPage() {
    const error = useRouteError();
    const status = isRouteErrorResponse(error) ? error.status: null;

    return (
        <main className="property-detail-page">
            <section className="property-not-found">
            <h1>Alojamiento no encontrado</h1>
            <p className="p">La propiedad que buscas no está disponible.</p>
            {status && <p>Código: {status}</p>}
            <Link className="detail-button" to="/search">
                <p>Ver otras propiedades</p>
            </Link>
            </section>
        </main>
    );
}
                   
            