import { Link, NavLink, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../../utils/auth";

export function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      <h1 className="logo"><Link to="/">F</Link></h1>
      <nav className="nav">
        <NavLink to="/search">Buscar</NavLink>
        <NavLink to="/favorites">Favoritos</NavLink>
        <NavLink to="/profile">Perfil</NavLink>
        {isAuthenticated() ? (
          <button type="button" onClick={handleLogout}>
            Salir
          </button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </header>
  );
}
