import { useNavigate } from "react-router-dom"; 


export function LoginPage() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/profile", { replace: true});
    };

    return (
        <>
            <main className="main-content">
            <h1>Iniciar sesió<nav></nav></h1>
            <p>Simularemos un login para ecceder a rutas privadas</p>
            <button type="button" onClick={handleLogin}>Entrar</button>
            </main>
        </>
    );
}