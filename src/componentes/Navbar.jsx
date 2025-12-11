import { useState } from "react";
import Logo from "../assets/logo.png";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <a href="#top">
          <img src={Logo} alt="Logo" />
        </a>
      </div>

      {/* MENU DESKTOP */}
      <nav className="menu">
        <a href="#quienes-somos">¿Quiénes somos?</a>
        <a href="#menus">Menús</a>
        <a href="#ubicacion">Encontranos</a>
        <a href="#contacto">Contáctanos</a>
      </nav>

      {/* Icono celular */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <i className="fas fa-bars"></i>
      </div>

      {/* Menu desplegable celular */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a href="#quienes-somos" onClick={() => setOpen(false)}>¿Quiénes somos?</a>
        <a href="#menus" onClick={() => setOpen(false)}>Menús</a>
        <a href="#ubicacion" onClick={() => setOpen(false)}>Encontranos</a>
        <a href="#contacto" onClick={() => setOpen(false)}>Contáctanos</a>
      </div>

    </header>
  );
}
