import { Outlet } from "react-router-dom";

export function BookingLayout() {
    return (
        <main className="main-content host-block host-card">
            <section className="host-card">
                <p className="eyebrow">Flujo de reserva</p>
                <Outlet />
            </section>
            <aside className="booking-summary">
                <h2>Resumen</h2>
                <p>Revisa la información antes de confirmar tu reserva.</p>
            </aside>
        </main>
    );
}
