import { Link } from "react-router-dom";
import PlanGallery from "../componentes/galeriaviandas";

import ado1 from "../img/adolescente1.jpg";
import ado2 from "../img/adolescente2.jpg";
import ado3 from "../img/adolescente3.jpg";

import "./00-descripsionviandas.css";

export default function ViandaAdolescente() {
  const images = [
    { original: ado1, thumbnail: ado1 },
    { original: ado2, thumbnail: ado2 },
    { original: ado3, thumbnail: ado3 },
  ];

  return (
    <section className="plan-page">
      <div className="plan-left">
        <PlanGallery images={images} />
      </div>

      <div className="plan-text">
        <h2>Adolescente</h2>
        <h3>Ideales para quienes prefieren opciones sabrosas y prácticas.</h3>
        <p>
          Las viandas para adolescentes incluyen un menú especialmente diseñado en función
          de las preferencias habituales para ellos. Ofrecemos opciones como milanesas,
          hamburguesas, patitas de pollo, supremas, pollo al horno, bifes de carne o pollo,
          bastoncitos de pollo y mozzarella, junto con una selección de pastas.
          Las comidas se complementan con guarniciones tradicionales como fideos, arroz blanco,
          puré, papas fritas o ensalada, brindando un servicio completo, variado y adecuado
          a sus necesidades.
        </p><br />
        <p className="importante">
          De lunes a sábados, cada vianda incluye la comida completa, el pan
          y la entrega en el lugar que usted indique
        </p>
        <Link to="/" className="back-btn">
          ← Volver atrás
        </Link>
      </div>
    </section>
  );
}