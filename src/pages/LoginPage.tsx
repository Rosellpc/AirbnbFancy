import { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../utils/auth";
import "../style/LoginPage.css";

type LocationState = {
  from?: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;
  const from = state?.from || "/profile";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const authenticated = login(email.trim(), password);

    if (!authenticated) {
      setError("El email o la contraseña no son correctos.");
      return;
    }

    navigate(from, { replace: true });
  };

  return (
    <main className="login-page">
      <section className="login-card">

        <div className="login-content">
          <span className="eyebrow">Bienvenido de nuevo</span>
          <h1>Inicia sesión</h1>

          <p>Accede a tus reservas y alojamientos favoritos.</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Email
              <input
                type="email"
                value={email}
                placeholder="tu@email.com"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>

            <label>
              Contraseña
              <input
                type="password"
                value={password}
                placeholder="Tu contraseña"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>

            {error && <p className="auth-error">{error}</p>}

            <button type="submit" className="login-button">
              Entrar a mi cuenta
              <span aria-hidden="true">→</span>
            </button>
          </form>

          <small className="login-note">
            ¿Aún no tienes una cuenta?{" "}
            <Link to="/register">Regístrate aquí</Link>
          </small>
        </div>
      </section>
    </main>
  );
}