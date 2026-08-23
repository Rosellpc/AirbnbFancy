import { Header } from "../components/layout/Header";

export function LoginPage() {
    return (
        <>
            <Header />
            <main className="main-content">
            <h1>Iniciar sesió<nav></nav></h1>
            <p>Simularemos un login para ecceder a rutas privadas</p>
            <button type="button">Entrar</button>
            </main>
        </>
    );
}