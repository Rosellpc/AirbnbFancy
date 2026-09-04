import "../../style/Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="footer-logo-glass">FANCY-HOST</h2>
          <p>Encuentra espacios únicos para vivir experiencias inolvidables.</p>
        </div>

        <nav className="footer-links" aria-label="Enlaces del pie de página">
          <a href="#inicio">Inicio</a>
          <a href="#alojamientos">Alojamientos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="footer-social">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="X">X</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} AirbnbFancy todos los derechos reservados - 2026</span>
        <span>Diseñado para viajar mejor.</span>
      </div>
    </footer>
  );
};

