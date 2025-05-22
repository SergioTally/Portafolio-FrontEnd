import { Box, Typography, Paper } from "@mui/material";

export default function Perfil() {
  return (
    <Box
      id="perfil"
      component="section"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        backdropFilter: "blur(5px)",
        minHeight: "100vh",
        width: "100vw",
        px: { xs: 2, sm: 6, md: 10 },
        py: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        scrollMarginTop: "96px",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        fontWeight="bold"
        gutterBottom
        sx={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
        data-aos="fade-up"
      >
        Perfil Profesional
      </Typography>

      <Typography
        variant="h6"
        sx={{ color: "text.secondary", maxWidth: "900px" }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Experiencia y conocimientos técnicos aplicados al desarrollo de software enfocado en eficiencia, documentación clara y soluciones funcionales.
      </Typography>

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
        Desarrollador con experiencia en FrontEnd y BackEnd, participando en el diseño,
        implementación y mantenimiento de sistemas administrativos, operativos y de gestión.
        He desarrollado servicios, controladores, vistas y estructuras funcionales para mejorar
        procesos, optimizar flujos de trabajo y garantizar la integridad de los datos. Además,
        cuento con habilidades en documentación técnica, configuración de entornos de prueba y
        despliegue en producción.
      </Paper>
    </Box>
  );
}
