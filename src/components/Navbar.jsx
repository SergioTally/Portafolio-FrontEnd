import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link as MuiLink,
} from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#f3f4f6", // Coincide con Perfil
        boxShadow: 2,
        height: "80px",
        justifyContent: "center",
        zIndex: 1300,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          maxWidth: "1200px",
          width: "100%",
          mx: "auto",
          px: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
          Portafolio
        </Typography>

        <Box display="flex" gap={4}>
          {[
            "Inicio",
            "Perfil",
            "Experiencia",
            "Educacion",
            "Habilidades",
            "Contacto",
          ].map((label) => (
            <MuiLink
              key={label}
              href={`#${label.toLowerCase()}`}
              underline="none"
              sx={{
                color: "gray",
                fontWeight: 500,
                "&:hover": { color: "blue" },
                transition: "color 0.3s",
              }}
            >
              {label}
            </MuiLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
