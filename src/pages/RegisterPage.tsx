import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/auth";
import "../style/LoginPage.css";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const created = register({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password,
    });

    if (!created) {
      setError("Ya existe una cuenta con ese email.");
      return;
    }

    navigate("/login", { replace: true });
  };

  return (
    <main className="login-page">
      <section className="login-card">

        <div className="login-content">
          <span className="eyebrow">Crea tu cuenta</span>
          <h1>Únete</h1>
          <p>Regístrate para gestionar tus reservas.</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Nombre
              <input
                value={name}
                placeholder="Tu nombre"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>

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
                placeholder="Mínimo 6 caracteres"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>

            <label>
              Confirmar contraseña
              <input
                type="password"
                value={confirmPassword}
                placeholder="Repite tu contraseña"
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </label>

            {error && <p className="auth-error">{error}</p>}

            <button type="submit" className="login-button">
              Crear cuenta
              <span aria-hidden="true">→</span>
            </button>
          </form>

          <small className="login-note">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </small>
        </div>
      </section>
    </main>
  );
}