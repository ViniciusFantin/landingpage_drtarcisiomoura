import { Box, Container, Typography, Button, Grid } from "@mui/material";

import { WHATSAPP } from "../utils/constants";
import doutor3 from "../assets/doutor3.jpeg";
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
        pt: {
          xs: 12,
          md: 6,
        },
        pb: {
          xs: 6,
          md: 0,
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{
            xs: 4,
            md: 8,
          }}
          alignItems="center"
        >
          {/* IMAGEM */}

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={doutor3}
              alt="Dr. Tarcísio Moura"
              loading="eager"
              sx={{
                width: {
                  xs: "85%",
                  sm: "70%",
                  md: "95%",
                },

                maxWidth: 520,

                height: {
                  xs: 380,
                  sm: 500,
                  md: 680,
                },

                objectFit: "cover",

                objectPosition: {
                  xs: "center top",
                  md: "18% center",
                },

                borderRadius: "28px",

                boxShadow: "0 35px 80px rgba(0,0,0,.25)",
              }}
            />
          </Grid>

          {/* TEXTO */}

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Typography
              sx={{
                mb: 2,
                fontSize: "0.9rem",
                letterSpacing: 2,
                color: "#D9E2FF",
              }}
            >
              CLÍNICO GERAL
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontWeight: 300,
                lineHeight: 1.08,
                fontSize: {
                  xs: "2.4rem",
                  sm: "3rem",
                  md: "4.6rem",
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
                maxWidth: 520,
                lineHeight: 1.8,
                fontSize: {
                  xs: "1rem",
                  md: "1.1rem",
                },
              }}
            >
              Atendimento clínico completo, diagnóstico preciso e
              acompanhamento personalizado para cuidar da sua saúde em todas as
              fases da vida.
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
                borderRadius: 50,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                boxShadow: "0 10px 25px rgba(0,0,0,.25)",

                "&:hover": {
                  backgroundColor: colors.primary,
                  transform: "translateY(-2px)",
                },

                transition: ".3s",
              }}
            >
              Agendar Consulta
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}