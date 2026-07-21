import { Box, Button, Container, Grid, Typography } from "@mui/material";

import { keyframes } from "@mui/system";

import logo from "../assets/logo-sem-fundo3.png";
import doutor from "../assets/doutor_editado.png";

import { colors } from "../theme/colors";

const marquee = keyframes`
0%{
transform:translateX(0);
}

100%{
transform:translateX(-50%);
}
`;

const itens = [
  "Reposição Hormonal",
  "Emagrecimento",
  "Vasectomia",
  "Harmonização Peniana",
  "Plástica Íntima Masculina",
];

export default function IntroSection() {
  return (
    <Box
      id="inicio"
      sx={{
        background: colors.hero,
        color: "white",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="center"
          spacing={2}
          sx={{
            minHeight: "92vh",
            pt: {
              xs: 12,
              md: 14,
            },
          }}
        >
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: {
                  xs: 400,
                  md: 800,
                },

                maxWidth: "100%",

                mb: 4,
              }}
            />

            <Typography
              sx={{
                fontWeight: 300,

                lineHeight: 1.1,

                fontSize: {
                  xs: "2.3rem",
                  md: "4.2rem",
                },
              }}
            >
              Saúde do homem
              <br />
              <Box
                component="span"
                sx={{
                  fontWeight: 700,
                }}
              >
                de alta performance
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 3,

                color: "#C7D2F1",

                fontSize: {
                  xs: "1.1rem",
                  md: "1.3rem",
                },
              }}
            >
              São Paulo - SP
            </Typography>

            <Button
              onClick={() =>
                document.getElementById("sobre")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              variant="contained"
              sx={{
                mt: 5,
                px: 5,
                py: 1.6,
                borderRadius: 50,

                background: colors.primaryLight,

                textTransform: "none",

                fontSize: "1rem",

                fontWeight: 600,

                boxShadow: "0 12px 30px rgba(0,0,0,.25)",

                transition: ".3s",

                "&:hover": {
                  background: colors.primary,
                  transform: "translateY(-3px)",
                },
              }}
            >
              Sobre mim
            </Button>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Box
              component="img"
              src={doutor}
              alt="Dr. Tarcísio"
              sx={{
                width: {
                  xs: "95%",
                  md: "100%",
                },

                maxWidth: 680,

                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          overflow: "hidden",

          borderTop: "1px solid rgba(255,255,255,.08)",

          borderBottom: "1px solid rgba(255,255,255,.08)",

          py: 2,

          whiteSpace: "nowrap",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",

            animation: `${marquee} 30s linear infinite`,
          }}
        >
          {[...itens, ...itens, ...itens].map((texto, index) => (
            <Typography
              key={index}
              sx={{
                mx: 4,

                color: "#E5EBFF",

                fontWeight: 500,

                letterSpacing: ".5px",

                fontSize: "1rem",

                "&::after": {
                  content: '"•"',

                  marginLeft: "32px",

                  color: colors.primaryLight,
                },
              }}
            >
              {texto}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
