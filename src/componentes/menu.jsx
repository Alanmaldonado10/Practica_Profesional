import "./Menu.css";
import { Link } from "react-router-dom";
import img1 from "../img/comida6.jpg";
import img2 from "../img/comida7.jpg";
import img3 from "../img/comida8.jpg";
import img4 from "../img/comida9.jpg";


export default function Menus() {
  return (
    <section className="menus-section" id="menus">
      <div className="menus-grid">
        {/* Vianda Saludable */}
        <div className="menu-card saludable">
          <h3>Vianda Saludable</h3><br />
          <div className="menu-img"><img src={img1} alt="" /></div>
          <p>
            Viandas saludables altas en proteína, bajas en grasas y con porciones
            controladas. Ideales para quienes buscan energía, rendimiento y una
            alimentación limpia todos los días.
          </p><br />
          <Link to="/vianda-saludable" className="btn-info">
            + INFO del PLAN
          </Link>
        </div>

        {/* Vianda Tradicional */}
        <div className="menu-card tradicional">
          <h3>Vianda Tradicional</h3><br />
          <div className="menu-img"><img src={img2} alt="" /></div>
          <p>
            Viandas tradicionales con sabor casero, elaboradas con ingredientes
            de calidad y recetas clásicas que ofrecen comidas abundantes y
            reconfortantes.
          </p><br />
          <Link to="/vianda-tradicional" className="btn-info">
            + INFO del PLAN
          </Link>
        </div>

        {/* Vianda Adolescente */}
        <div className="menu-card adolescente">
          <h3>Vianda Adolescente</h3><br />
          <div className="menu-img"><img src={img3} alt="" /></div>
          <p>
            Opciones rápidas y llenas de sabor, perfectas para jóvenes que son
            más quisquillosos con la comida.
          </p><br />
          <Link to="/vianda-adolescente" className="btn-info">
            + INFO del PLAN
          </Link>
        </div>

        {/* Vianda Especial */}
        <div className="menu-card especial">
          <h3>Vianda Especial</h3><br />
          <div className="menu-img"><img src={img4} alt="" /></div>
          <p>
            Viandas especiales diseñadas a tu gusto: elegí tus ingredientes,
            combinaciones y porciones para crear la comida exacta que querés
            disfrutar.
          </p><br />
          <Link to="/vianda-especial" className="btn-info">
            + INFO del PLAN
          </Link>
        </div>
      </div>
    </section>
  );
}