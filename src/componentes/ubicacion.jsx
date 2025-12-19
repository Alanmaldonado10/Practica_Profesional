import "./ubicacion.css";

export default function Mapa() {
  return (
    <section className="ubicacion-section" id="ubicacion">

      <h2 className="ubicacion-titulo fade-in">Nos encontramos en</h2>

      <p className="ubicacion-sub fade-in">
        Dr. Juan Olsacher 2167 — La Rioja, Argentina.
      </p>

      <div className="mapa-wrapper fade-in-up">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.207155599291!2d-66.8694885!3d-29.4135015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9427d8d54d44f1e1%3A0x84b9939893f3923a!2sDr.%20Juan%20Olsacher%202167%2C%20F5300%20La%20Rioja!5e0!3m2!1ses!2sar!4v1701470000000"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <a
        className="boton-llegar fade-in"
        href="https://maps.app.goo.gl/mWKWcKZc5XrRqKT16?g_st=aw"
        target="_blank"
      >
        Cómo llegar
      </a>

    </section>
  );
}


