import { Box, Typography, Paper, Grid } from "@mui/material";

export default function Educacion() {
  return (
    <Box
      id="educacion"
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
        Educación
      </Typography>

      {/* Tarjetas de educación */}
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        {/* Ingeniería en Sistemas */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center" data-aos="fade-up">
          <Paper
            elevation={1}
            sx={{
              width: "100%",
              maxWidth: 500,
              p: 3,
              textAlign: "left",
              borderRadius: 2,
              backgroundColor: "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
              Ingeniería en Sistemas de Información
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" fontStyle="italic">
              Universidad Mariano Gálvez | 2013 - 2018
            </Typography>
          </Paper>
        </Grid>

        {/* Derecho */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center" data-aos="fade-up" data-aos-delay="200">
          <Paper
            elevation={1}
            sx={{
              width: "100%",
              maxWidth: 500,
              p: 3,
              textAlign: "left",
              borderRadius: 2,
              backgroundColor: "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
              Licenciatura en Ciencias Jurídicas y Sociales
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" fontStyle="italic">
              Universidad de San Carlos de Guatemala (USAC) | 2019 - 2023 (pensum cerrado)
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
