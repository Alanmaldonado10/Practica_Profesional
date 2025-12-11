import { Link } from "react-router-dom";
import PlanGallery from "../componentes/galeriaviandas";

import es1 from "../img/especial1.jpg";
import es2 from "../img/especial2.jpg";
import es3 from "../img/especial3.jpg";

import "./00-descripsionviandas.css";

export default function ViandaEspecial() {
  const images = [
    { original: es1, thumbnail: es1 },
    { original: es2, thumbnail: es2 },
    { original: es3, thumbnail: es3 },
  ];

  return (
    <section className="plan-page">
      <div className="plan-left">
        <PlanGallery images={images} />
      </div>

      <div className="plan-text">
        <h2>Especial</h2>
        <h3>Pensado para quienes buscan un menú flexible y personalizado.</h3>
        <p>
          ofrecen un servicio personalizado que permite al cliente seleccionar diariamente 
          los platos que desea consumir. Este sistema flexible brinda la posibilidad 
          de elegir entre diferentes preparaciones, guarniciones y opciones caseras,
          garantizando una experiencia adaptada a las preferencias y necesidades particulares
          de cada persona.
        </p><br />
        <p className="importante">
          De lunes a sábados, cada vianda incluye la comida completa, el pan integral
          y la entrega en el lugar que usted indique
        </p>
        <Link to="/" className="back-btn">
          ← Volver atrás
        </Link>
      </div>
    </section>
  );
}