import { Box, Typography, Paper, Grid } from "@mui/material";

export default function Experiencia() {
  return (
    <Box
      id="experiencia"
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
        Experiencia Laboral
      </Typography>

      {/* Tarjetas de experiencia */}
      <Grid
        container
        spacing={4}
        alignItems="flex-start"
        justifyContent="center"
      >
        {/* Ministerio Público */}
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Paper
            elevation={1}
            sx={{
              width: "100%",
              maxWidth: 1200, // fija el ancho deseado de la tarjeta
              p: 3,
              textAlign: "left",
              borderRadius: 2,
              backgroundColor: "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
            }}
          >
            {/* Puesto */}
            <Typography
              variant="h6"
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              Analista de Sistemas Institucionales
            </Typography>

            {/* Institución y fechas */}
            <Typography
              variant="subtitle2"
              color="text.secondary"
              fontStyle="italic"
              gutterBottom
            >
              Ministerio Público | Junio 2023 – Abril 2025
            </Typography>

            {/* Descripción general */}
            <Typography variant="body2" color="text.secondary" paragraph>
              Encargado del diseño, desarrollo, implementación y mantenimiento
              de soluciones informáticas institucionales orientadas al
              fortalecimiento de los procesos administrativos, jurídicos y
              operativos del Ministerio Público. Mi labor incluyó la creación de
              módulos funcionales que permiten la trazabilidad documental,
              automatización de tareas repetitivas y mejora en la recolección y
              presentación de información crítica para la toma de decisiones.
              Asimismo, fui responsable de establecer integraciones entre
              sistemas a través de servicios web, generar reportes dinámicos y
              estructurar lógicas de negocio acordes a las normativas legales
              vigentes. Parte fundamental del puesto fue el trabajo colaborativo
              con personal jurídico y técnico, garantizando que las soluciones
              propuestas se ajustaran tanto a los requerimientos funcionales
              como al marco legal institucional. También participé en la
              documentación técnica y funcional de los proyectos, en la
              validación de resultados mediante pruebas controladas, y en la
              gestión de versiones y despliegues productivos bajo prácticas de
              control de calidad.
            </Typography>

            {/* Actividades */}
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
              Principales actividades:
            </Typography>
            <ul
              style={{
                marginLeft: "1rem",
                marginBottom: "1rem",
                color: "#555",
              }}
            >
              <li>
                Diseño y desarrollo de módulos internos con trazabilidad
                documental.
              </li>
              <li>Automatización de procesos administrativos.</li>
              <li>
                Implementación de servicios RESTful para integración de
                sistemas.
              </li>
              <li>
                Generación de reportes digitales para análisis institucional.
              </li>
              <li>
                Adaptación técnica a normativas legales mediante colaboración
                jurídica.
              </li>
            </ul>

            {/* Tecnologías */}
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
              Tecnologías utilizadas:
            </Typography>
            <ul style={{ marginLeft: "1rem", color: "#555" }}>
              <li>Java, Spring Boot</li>
              <li>SQL, Oracle</li>
              <li>JavaScript, HTML/CSS</li>
              <li>Git, Docker</li>
            </ul>
          </Paper>
        </Grid>

        {/* ADPI */}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="center"
          data-aos="fade-up"
        >
          <Paper
            elevation={1}
            sx={{
              width: "100%",
              maxWidth: 1200,
              p: 3,
              textAlign: "left",
              borderRadius: 2,
              backgroundColor: "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              Coordinador de Proyectos
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              fontStyle="italic"
              gutterBottom
            >
              ADPI | Octubre 2021 – Diciembre 2022
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Responsable de coordinar el desarrollo de plataformas web
              enfocadas en el control operativo institucional. Gestión de
              auditorías digitales, documentación funcional y automatización de
              procesos internos. Enlace entre áreas técnicas y operativas para
              asegurar soluciones sostenibles y efectivas.
            </Typography>

            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
              Principales actividades:
            </Typography>
            <ul
              style={{
                marginLeft: "1rem",
                marginBottom: "1rem",
                color: "#555",
              }}
            >
              <li>Supervisión de desarrollo frontend y backend.</li>
              <li>Auditoría digital de sistemas existentes.</li>
              <li>
                Automatización de tareas y generación de reportes funcionales.
              </li>
              <li>Documentación funcional y operativa.</li>
              <li>Gestión de cronogramas y entrega de soluciones técnicas.</li>
            </ul>

            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
              Tecnologías utilizadas:
            </Typography>
            <ul style={{ marginLeft: "1rem", color: "#555" }}>
              <li>JavaScript, React</li>
              <li>Node.js, Express</li>
              <li>MySQL</li>
              <li>Git, Trello</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
