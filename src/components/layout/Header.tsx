import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../../utils/auth";
import "../../style/Header.css";

export function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };

  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/" onClick={closeMenu}>FancyHost</Link>
      </h1>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
        <NavLink to="/search" onClick={closeMenu}>Buscar</NavLink>
        <NavLink to="/favorites" onClick={closeMenu}>Favoritos</NavLink>
        <NavLink to="/profile" onClick={closeMenu}>Perfil</NavLink>

        {isAuthenticated() ? (
          <button type="button" onClick={handleLogout}>
            Salir
          </button>
        ) : (
          <NavLink to="/login" onClick={closeMenu}>Login</NavLink>
        )}
      </nav>
    </header>
  );
}