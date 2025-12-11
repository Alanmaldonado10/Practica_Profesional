import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/hero";
import About from "./componentes/quienessomos";
import Menus from "./componentes/menu";
import ViandaSaludable from "./descripsionpaginas/saludable";
import ViandaTradicional from "./descripsionpaginas/tradicional";
import ViandaAdolescente from "./descripsionpaginas/adolescente";
import ViandaEspecial from "./descripsionpaginas/especial";
import Mapa from "./componentes/ubicacion";
import Contacto from "./componentes/contacto";

import PageTransition from "./componentes/transcision";
import "./index.css";


export default function App() {
  const location = useLocation();

  return (
    <>
      <div id="top"></div>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <PageTransition>
                <Hero />
                <About />
                <Menus />
                <Mapa />
                <Contacto />
              </PageTransition>
            }
          />

          {/* Páginas individuales */}
          <Route
            path="/vianda-saludable"
            element={
              <PageTransition>
                <ViandaSaludable />
              </PageTransition>
            }
          />
          <Route
            path="/vianda-tradicional"
            element={
              <PageTransition>
                <ViandaTradicional />
              </PageTransition>
            }
          />
          <Route
            path="/vianda-adolescente"
            element={
              <PageTransition>
                <ViandaAdolescente />
              </PageTransition>
            }
          />
          <Route
            path="/vianda-especial"
            element={
              <PageTransition>
                <ViandaEspecial />
              </PageTransition>
            }
          />     
        </Routes>
      </AnimatePresence>
    </>
  );
}