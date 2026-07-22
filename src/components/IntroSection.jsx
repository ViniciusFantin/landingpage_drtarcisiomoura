import { Box, Container, Grid, Typography, Tooltip } from "@mui/material";

import logo from "../assets/logo-sem-fundo3.png";
import doutor from "../assets/doutor_editado.png";
import { GradientButton } from "./common";
import { colors } from "../theme/colors";

const itens = [
  {
    titulo: "Reposição Hormonal",
    tooltip:
      "Tratamento médico para equilibrar os níveis hormonais, promovendo mais disposição, bem-estar e qualidade de vida.",
  },
  {
    titulo: "Emagrecimento",
    tooltip:
      "Acompanhamento médico personalizado para perda de peso saudável e sustentável.",
  },
  {
    titulo: "Vasectomia",
    tooltip:
      "Procedimento cirúrgico seguro e minimamente invasivo para contracepção masculina.",
  },
  {
    titulo: "Harmonização Peniana",
    tooltip:
      "Procedimentos voltados à estética e funcionalidade da região íntima masculina.",
  },
  {
    titulo: "Plástica Íntima Masculina",
    tooltip: "Cirurgias com foco em conforto, funcionalidade e autoestima.",
  },
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
          spacing={{
            xs: 4,
            md: 3,
          }}
          sx={{
            minHeight: {
              xs: "78vh",
              md: "78vh",
            },

            pt: {
              xs: 10,
              md: 8,
            },
            pb: {
              xs: 2,
              md: 1,
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

                mb: 1,
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
                mt: 2,

                color: "#C7D2F1",

                fontSize: {
                  xs: "1.1rem",
                  md: "1.3rem",
                },
              }}
            >
              São Paulo - SP
            </Typography>

            <GradientButton
              onClick={() =>
                document.getElementById("sobre")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              sx={{
                mt: 3.5,
              }}
            >
              Sobre mim
            </GradientButton>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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

                mt: {
                  xs: 2,
                  md: -12,
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",

          columnGap: {
            xs: 3,
            sm: 5,
            md: 7,
            lg: 9,
          },

          rowGap: 2,

          mt: -1.5,
          pt: 2.5,
          pb: 3,

          borderTop: "1px solid rgba(255,255,255,.08)",
        }}
      >
        {itens.map((item) => (
          <Tooltip key={item.titulo} title={item.tooltip} arrow placement="top">
            <Typography
              sx={{
                cursor: "help",

                color: "#E5EBFF",

                fontWeight: 500,

                fontSize: {
                  xs: ".95rem",
                  md: "1rem",
                },

                letterSpacing: ".3px",

                whiteSpace: "nowrap",

                transition: ".25s",

                "&:hover": {
                  color: "#FFF",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {item.titulo}
            </Typography>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}
