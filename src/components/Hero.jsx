import { Box, Typography, Paper } from "@mui/material";

export default function Hero() {
  return (
    <Box
      id="inicio"
      component="section"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.75)", // semitransparente
        backdropFilter: "blur(5px)", // opcional para suavizar lo que hay detrás
        minHeight: "100vh",
        width: "100vw", // ← esto sí garantiza el ancho total del viewport
        px: { xs: 2, sm: 6, md: 10 },
        py: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        scrollMarginTop: "96px",
      }}
    >
      {/* Título principal */}
      <Typography
        variant="h2"
        component="h1"
        fontWeight="bold"
        gutterBottom
        sx={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
        data-aos="fade-up"
      >
        Sergio Eduardo Tally Ramírez
      </Typography>

      {/* Subtítulo */}
      <Typography
        variant="h6"
        sx={{ color: "text.secondary", maxWidth: "900px" }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Desarrollador de Software | Frontend y Backend con enfoque en soluciones
        eficientes
      </Typography>

      {/* Texto descriptivo largo */}
      <Paper
        elevation={3}
        sx={{
          mt: 5,
          px: { xs: 3, sm: 5 },
          py: 4,
          maxWidth: "1000px",
          textAlign: "justify",
          fontSize: "1.1rem",
          lineHeight: 1.8,
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(5px)",
          color: "text.secondary",
        }}
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Cuento con experiencia en el desarrollo de sistemas administrativos,
        jurídicos y operativos, tanto en el sector público como privado. He
        liderado proyectos que integran análisis funcional, desarrollo web,
        automatización de procesos y generación de reportes dinámicos. Utilizo
        tecnologías como JavaScript, React, Node.js, Java, Spring Boot, SQL,
        MySQL, Oracle y herramientas de despliegue como Docker y Git. Me
        especializo en construir soluciones integrales, enfocadas en la
        trazabilidad, seguridad y eficiencia de los sistemas, colaborando de
        forma activa con equipos multidisciplinarios para garantizar el
        cumplimiento técnico y normativo.
      </Paper>
    </Box>
  );
}
