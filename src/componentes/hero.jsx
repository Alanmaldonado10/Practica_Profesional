
import Galeria from "./galeria.jsx";
import "./hero.css";
export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-galeria">
          <Galeria />
        </div>

        <div className="hero-contenido">
          <h2>VIANDAS PARA TODOS LOS GUSTOS</h2>
          <p>¡QUE TUS DÍAS TENGAN SABOR!</p>
        </div>
      </section>
      <section className="info-banner">
        <p>
          Disfrutá de nuestras comidas frescas, caseras y entregadas a
          domicilio. ¡Calidad y sabor en cada bocado!
        </p>
      </section>
      <a 
        className="whatsapp-btn"
        href="https://wa.me/543804521106?text=Hola,%20quisiera%20más%20información%20de%20las%20viandas"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            style={{ width: "40px", height: "40px" }}
        />
      </a>
      
    </>
  );
}
