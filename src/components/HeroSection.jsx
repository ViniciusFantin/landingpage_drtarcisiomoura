import { Box, Container, Typography, Button, Grid } from "@mui/material";

import { WHATSAPP } from "../utils/constants";

import { colors } from "../theme/colors";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `
          linear-gradient(
          135deg,
          ${colors.hero} 0%,
          #42547A 100%
          )
          `,
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                mb: 2,
                fontSize: "0.9rem",
                letterSpacing: 2,
              }}
            >
              CLÍNICO GERAL
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontWeight: 300,
                lineHeight: 1.1,
                fontSize: {
                  xs: "2.8rem",
                  md: "4.5rem",
                },
              }}
            >
              Cuidado médico
              <br />
              humanizado
            </Typography>

            <Typography
              sx={{
                mt: 3,
                mb: 4,
                color: "#D5D5D5",
                maxWidth: 500,
              }}
            >
              Atendimento clínico completo, diagnóstico preciso e acompanhamento
              personalizado.
            </Typography>

            <Button
              component="a"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                backgroundColor: colors.primaryLight,
                px: 4,
                py: 1.5,
                borderRadius: 10,
              }}
            >
              Agendar Consulta
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: {
                  xs: 350,
                  md: 650,
                },
                backgroundColor: colors.border,
                borderRadius: 4,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>IMAGEM</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
