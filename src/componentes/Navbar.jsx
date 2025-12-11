import { useState } from "react";
import Logo from "../assets/logo.png";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (e, id) => {
    e.preventDefault();        // ❌ que no cambie la URL a #quienes-somos
    setOpen(false);            // cierra el menú móvil si estaba abierto
    scrollToSection(id);       // ✅ hace scroll suave a la sección
  };

  return (
    <header className="navbar">
      <div className="logo">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("top");
          }}
        >
          <img src={Logo} alt="Logo" />
        </a>
      </div>

      {/* MENU DESKTOP */}
      <nav className="menu">
        <a href="#quienes-somos" onClick={(e) => handleClick(e, "quienes-somos")}>
          ¿Quiénes somos?
        </a>
        <a href="#menus" onClick={(e) => handleClick(e, "menus")}>
          Menús
        </a>
        <a href="#ubicacion" onClick={(e) => handleClick(e, "ubicacion")}>
          Encontranos
        </a>
        <a href="#contacto" onClick={(e) => handleClick(e, "contacto")}>
          Contáctanos
        </a>
      </nav>

      {/* Icono celular */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <i className="fas fa-bars"></i>
      </div>

      {/* Menu desplegable celular */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a href="#quienes-somos" onClick={(e) => handleClick(e, "quienes-somos")}>
          ¿Quiénes somos?
        </a>
        <a href="#menus" onClick={(e) => handleClick(e, "menus")}>
          Menús
        </a>
        <a href="#ubicacion" onClick={(e) => handleClick(e, "ubicacion")}>
          Encontranos
        </a>
        <a href="#contacto" onClick={(e) => handleClick(e, "contacto")}>
          Contáctanos
        </a>
      </div>
    </header>
  );
}
