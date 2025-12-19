import { useEffect, useRef } from "react";
import "./contacto.css";
import Logo from "../assets/logo.png"; 

export default function Contacto() {
  const footerRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          footerRef.current.classList.add("visible");
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(footerRef.current);
  }, []);

  return (
    <footer ref={footerRef} className="footer" id="contacto">
      <div className="footer-container">

        
        <div className="footer-logo">
          <img src={Logo} alt="La Mies Viandas" />
        </div>

        
        <div className="footer-bloque">
          <h3>Teléfonos</h3>

          <a
            href="https://wa.me/5493804521106"
            target="_blank"
            className="telefono-item"
          >
            <i className="fa-solid fa-phone"></i> 3804 52-1106
          </a>

          <a
            href="https://wa.me/5493804521109"
            target="_blank"
            className="telefono-item"
          >
            <i className="fa-solid fa-phone"></i> 3804 52-1109
          </a>
        </div>

      
        <div className="footer-bloque">
          <h3>Redes Sociales</h3>

          <a
            href="https://www.instagram.com/la.mies.rym?igsh=MWdlMDBpMmhuN3B0eA=="
            target="_blank"
            className="red-item"
          >
            <i className="fa-brands fa-instagram"></i> Instagram
          </a>

          <a
            href="https://www.facebook.com/share/1CuFvuqqV4/"
            target="_blank"
            className="red-item"
          >
            <i className="fa-brands fa-facebook"></i> Facebook
          </a>
        </div>
      </div>

      
      <div className="footer-boton">
        © 2025 — La Mies Viandas. Todos los derechos reservados.
      </div>
    </footer>
  );
}