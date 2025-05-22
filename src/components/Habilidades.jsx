import { Box, Typography, Grid, Paper } from "@mui/material";

export default function Habilidades() {
  const habilidades = [
    "Adaptabilidad técnica",
    "Gestión de proyectos",
    "Desarrollo integral",
    "Documentación precisa",
    "Resolución de problemas",
    "Inglés intermedio",
  ];

  return (
    <Box
      id="habilidades"
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
      {/* Título */}
      <Typography
        variant="h2"
        component="h2"
        fontWeight="bold"
        gutterBottom
        sx={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
        data-aos="fade-up"
      >
        Fortalezas
      </Typography>

      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={{ mt: 4, maxWidth: 900 }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {habilidades.map((item, idx) => (
          <Grid item key={idx}>
            <Paper
              elevation={1}
              sx={{
                px: 3,
                py: 1,
                borderRadius: 50,
                backgroundColor: "#e0f2ff",
                color: "#0369a1",
                fontWeight: 500,
                fontSize: "0.95rem",
              }}
            >
              {item}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
