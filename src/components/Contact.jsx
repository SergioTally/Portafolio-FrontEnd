import { Box, Typography, TextField, Button, Stack } from "@mui/material";

export default function Contact() {
  return (
    <Box
      id="contacto"
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
        Contacto
      </Typography>

      {/* Subtítulo */}
      <Typography
        variant="body1"
        sx={{ maxWidth: "600px", color: "text.secondary", mb: 4 }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        ¿Listo para transformar tu negocio con tecnología? Contáctanos hoy mismo.
      </Typography>

      {/* Formulario */}
      <Box
        component="form"
        sx={{
          width: "100%",
          maxWidth: 600,
        }}
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Stack spacing={3}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Correo"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Mensaje"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            required
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ alignSelf: "center", px: 6 }}
          >
            Enviar
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
