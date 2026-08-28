import { use } from "react";
import { useParams } from "react-router-dom";

export function Booking() {
    const { id } = useParams();

    return (
        <section className="main-content info-block">
            <h1>Reserva tu alojamiento</h1>
            <p>Estás iniciando la reserva de la propiedad { id }.</p>
            <button type="button">Continuar</button>
        </section>
    )
}