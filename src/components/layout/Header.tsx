import { Link, NavLink } from "react-router-dom"

export function Header() {
  return (
    <header className="header">
      <h1 className="logo"><Link to="/">HostRuso</Link></h1>
      <nav className="nav">
        <NavLink to="/search">Buscar</NavLink>
        <NavLink to="/favorites">Favoritos</NavLink>
        <NavLink to="/profile">Perfil</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
}
