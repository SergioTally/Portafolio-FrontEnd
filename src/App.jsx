import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import Habilidades from "./components/Habilidades";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const shapeRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (shapeRef.current) {
        const moveX = scrollY * 0.3;
        const moveY = scrollY * 0.2;
        const scale = 1 + scrollY * 0.0005;

        shapeRef.current.style.transform = `
          translate(-50%, -50%)
          translate(${moveX}px, ${moveY}px)
          scale(${scale})
        `;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      position="relative"
      sx={{
        overflowX: "hidden",
        overflowY: "hidden", // ← evita scroll innecesario
        height: "100%",
      }}
    >
      {/* Figura decorativa al fondo */}
      <Box
        ref={shapeRef}
        sx={{
          position: "absolute",
          top: "0", // ← evita que empuje contenido hacia abajo
          left: "50%",
          width: { xs: "150vw", sm: "120vw", md: "100vw" },
          height: { xs: "150vw", sm: "120vw", md: "100vw" },
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          zIndex: -1,
          border: "15px solid rgba(0, 200, 255, 0.2)",
          boxShadow: `
            0 0 0 10px rgba(0,200,255,0.08) inset,
            0 0 60px 20px rgba(0,200,255,0.2)
          `,
          filter: "drop-shadow(0 0 20px rgba(0,200,255,0.4))",
          willChange: "transform",
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Contenido principal */}
      <Navbar />
      <Hero />
      <Perfil />
      <Experiencia />
      <Educacion />
      <Habilidades />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
