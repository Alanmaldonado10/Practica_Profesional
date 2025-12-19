import { Link } from "react-router-dom";
import PlanGallery from "../componentes/galeriaviandas";

import sa1 from "../img/saludable1.jpg";
import sa2 from "../img/saludable2.jpg";
import sa3 from "../img/saludable3.jpg";

import "./00-descripsionviandas.css";

export default function ViandaSaludable() {
  const images = [
    { original: sa1, thumbnail: sa1 },
    { original: sa2, thumbnail: sa2 },
    { original: sa3, thumbnail: sa3 },
  ];

  return (
    <section className="plan-pagina">
      <div className="plan-galeria">
        <PlanGallery images={images} />
      </div>

      <div className="plan-texto">
        <h2>Saludable</h2>
        <h3>La mejor opción para cuidar tu alimentación sin resignar sabor</h3>
        <p>
         Nada de frituras: todas nuestras preparaciones se cocinan al horno,
          a la plancha o hervidas para garantizar comidas más livianas y saludables.
          Ofrecemos una amplia variedad de platos con carnes de pollo, cerdo, pescado y ternera,
          acompañadas de ensaladas frescas, tartas, pastas integrales, tortillas,
          tartaletas y opciones al wok..
        </p><br />
        <p className="importante">
          De lunes a sábados, cada vianda incluye la comida completa, el pan integral
          y la entrega en el lugar que usted indique
        </p>

        <Link to="/" className="atras-btn">
          ← Volver atrás
        </Link>
      </div>
    </section>
  );
}