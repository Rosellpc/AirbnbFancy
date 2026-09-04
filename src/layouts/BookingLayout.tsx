import { Outlet } from "react-router-dom";

export function BookingLayout() {
    return (
        <main className="main-content host-block host-card">
            <section className="host-card">
                <Outlet />
            </section>
        </main>
    );
}
