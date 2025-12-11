import "./quienessomos.css";
export default function QuienesSomos() {
  return (
    <section className="about-section" id="quienes-somos">
    <h2 className="about-logo">La Mies Viandas</h2>
      <h3 className="about-titulo">¿Quiénes somos?</h3>

      <div className="about-texto">
        <p >
            Somos un emprendimiento familiar con 4 años de experiencia dedicado a preparar viandas caseras, ricas y equilibradas para el día a día. Nacimos con la idea de acompañarte con comidas que se sientan como hechas en casa: frescas, abundantes y pensadas con dedicación.
        </p><br />
        <p>
            Creemos en la cocina sencilla y honesta, en los sabores que reúnen a la familia y en la importancia de ofrecer un servicio confiable. Cada vianda que entregamos lleva nuestro compromiso, el cariño de nuestro equipo y la búsqueda constante de mejorar.  
        </p><br />
        <p>
            En estos cuatro años aprendimos, crecimos y nos fortalecimos gracias a nuestros clientes. Por eso, seguimos trabajando con la misma pasión del primer día, pero con la experiencia que nos enseñó el camino.
        </p>
      </div>
      

      <p className="about-texto highlight">
        ¡Tu rutina merece este sabor!
      </p>

      <div className="about-banner">
        Nuestros Menús
      </div>
    </section>
  );
}