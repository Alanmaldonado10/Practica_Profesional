import { Link } from "react-router-dom";
import PlanGallery from "../componentes/galeriaviandas";

import tra1 from "../img/tradicional1.jpg";
import tra2 from "../img/tradicional2.jpg";
import tra3 from "../img/tradicional3.jpg";

import "./00-descripsionviandas.css";

export default function ViandaTradicional() {
  const images = [
    { original: tra1, thumbnail: tra1 },
    { original: tra2, thumbnail: tra2 },
    { original: tra3, thumbnail: tra3 },
  ];

  return (
    <section className="plan-pagina">
      <div className="plan-galeria">
        <PlanGallery images={images} />
      </div>

      <div className="plan-texto">
        <h2>Tradicional</h2>
        <h3>Perfectas para disfrutar comidas clásicas con el sabor de siempre.</h3>
        <p>
          Ofrecemos una selección completa y variada de platos pensados para todos los gustos,
          que incluye diferentes cortes de carnes preparadas de maneras tradicionales, pastas caseras
          acompañadas de salsas frescas, tartas sabrosas con diversos rellenos, empanadas horneadas  o fritas, 
          tortillas elaboradas al momento y una variedad de comidas de olla
        </p><br />
        <p className="importante">
          De lunes a sábados, cada vianda incluye la comida completa, el pan
          y la entrega en el lugar que usted indique
        </p>
        <Link to="/" className="atras-btn">
          ← Volver atrás
        </Link>
      </div>
    </section>
  );
}