import { Box, Container, Typography, Tooltip } from "@mui/material";

import doutor3 from "../assets/doutor3.jpg";
import { GradientButton } from "./common";
import { colors } from "../theme/colors";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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
    tooltip:
      "Cirurgias com foco em conforto, funcionalidade e autoestima.",
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
      {/* =========================================================
          HERO
      ========================================================= */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",

          minHeight: {
            xs: "620px",
            sm: "610px",
            md: "590px",
          },

          display: "flex",
          alignItems: "flex-start",

          /*
           * =====================================================
           * FADE SOBRE A IMAGEM
           * =====================================================
           */
          "&::before": {
            content: '""',

            position: "absolute",
            inset: 0,

            background: {
              /*
               * MOBILE
               */
              xs: `
                linear-gradient(
                  to bottom,
                  ${colors.hero} 0%,
                  rgba(35,48,78,0.98) 20%,
                  rgba(35,48,78,0.92) 35%,
                  rgba(35,48,78,0.70) 50%,
                  rgba(35,48,78,0.35) 68%,
                  rgba(35,48,78,0.10) 85%,
                  rgba(35,48,78,0.02) 100%
                )
              `,

              /*
               * TABLET
               */
              sm: `
                linear-gradient(
                  to bottom,
                  ${colors.hero} 0%,
                  rgba(35,48,78,0.97) 18%,
                  rgba(35,48,78,0.88) 34%,
                  rgba(35,48,78,0.62) 52%,
                  rgba(35,48,78,0.28) 72%,
                  rgba(35,48,78,0.05) 100%
                )
              `,

              /*
               * DESKTOP
               *
               * O azul fica concentrado no lado esquerdo,
               * permitindo que a imagem se misture gradualmente
               * com o texto.
               */
              md: `
                linear-gradient(
                  to right,
                  ${colors.hero} 0%,
                  rgba(35,48,78,0.98) 18%,
                  rgba(35,48,78,0.92) 30%,
                  rgba(35,48,78,0.72) 42%,
                  rgba(35,48,78,0.42) 55%,
                  rgba(35,48,78,0.18) 68%,
                  rgba(35,48,78,0.04) 82%,
                  rgba(35,48,78,0) 100%
                )
              `,
            },

            zIndex: 1,
          },
        }}
      >
        {/* =========================================================
            IMAGEM DO DOUTOR
        ========================================================= */}
        <Box
          component="img"
          src={doutor3}
          alt="Dr. Tarcísio Moura"
          sx={{
            position: "absolute",

            zIndex: 0,

            /*
             * Mantemos a proporção original da fotografia.
             *
             * No mobile usamos uma altura menor para preservar
             * o espaço do conteúdo superior.
             *
             * No desktop a imagem cresce para ocupar praticamente
             * toda a altura do hero.
             */
            height: {
              xs: "72%",
              sm: "78%",
              md: "100%",
            },

            width: "auto",

            maxWidth: "none",

            bottom: 0,

            /*
             * MOBILE
             *
             * Centraliza a imagem.
             */
            left: {
              xs: "50%",
              sm: "50%",
              md: "auto",
            },

            /*
             * DESKTOP
             *
             * A imagem começa mais para o centro da tela,
             * ficando próxima do texto e se misturando através
             * do fade.
             */
            right: {
              xs: "auto",
              sm: "auto",
              md: "4%",
            },

            transform: {
              xs: "translateX(-50%)",
              sm: "translateX(-50%)",
              md: "none",
            },

            objectFit: "contain",

            pointerEvents: "none",
          }}
        />

        {/* =========================================================
            CONTEÚDO PRINCIPAL
        ========================================================= */}
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",

            zIndex: 2,

            display: "flex",

            alignItems: "flex-start",

            height: "100%",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "55%",
              },

              pt: {
                xs: 8,
                sm: 7,
                md: 8,
              },
            }}
          >
            {/* TÍTULO */}
            <Typography
              sx={{
                fontWeight: 300,

                lineHeight: 1.08,

                fontSize: {
                  xs: "2.1rem",
                  sm: "2.8rem",
                  md: "4rem",
                },

                maxWidth: 700,
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

            {/* LOCALIZAÇÃO */}
            <Typography
              sx={{
                mt: 1.5,

                color: "#C7D2F1",

                fontSize: {
                  xs: "1rem",
                  sm: "1.05rem",
                  md: "1.2rem",
                },
              }}
            >
              São Paulo - SP
            </Typography>

            {/* BOTÃO */}
            <GradientButton
              onClick={() =>
                document.getElementById("sobre")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              sx={{
                mt: 2.5,
              }}
            >
              Sobre mim
            </GradientButton>
          </Box>
        </Container>

        {/* =========================================================
            ÁREAS DE ATUAÇÃO
        ========================================================= */}
        <Box
          sx={{
            position: "absolute",

            left: 0,
            right: 0,
            bottom: 0,

            zIndex: 3,

            display: "flex",

            justifyContent: "center",
            alignItems: "center",

            flexWrap: "wrap",

            columnGap: {
              xs: 2,
              sm: 4,
              md: 6,
              lg: 8,
            },

            rowGap: {
              xs: 1.5,
              sm: 2,
            },

            px: {
              xs: 2,
              sm: 3,
              md: 4,
            },

            pt: 4,

            pb: {
              xs: 2.5,
              sm: 3,
              md: 3.5,
            },

            background: {
              xs: `
                linear-gradient(
                  to bottom,
                  rgba(35,48,78,0) 0%,
                  rgba(35,48,78,0.30) 45%,
                  rgba(35,48,78,0.72) 100%
                )
              `,

              md: `
                linear-gradient(
                  to bottom,
                  rgba(35,48,78,0) 0%,
                  rgba(35,48,78,0.20) 45%,
                  rgba(35,48,78,0.60) 100%
                )
              `,
            },
          }}
        >
          {itens.map((item) => (
            <Tooltip
              key={item.titulo}
              arrow
              placement="top"
              title={
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: colors.primary,

                      fontWeight: 700,

                      fontSize: ".95rem",

                      textAlign: "center",

                      mb: 1,
                    }}
                  >
                    {item.titulo}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: ".88rem",

                      lineHeight: 1.7,

                      textAlign: "center",
                    }}
                  >
                    {item.tooltip}
                  </Typography>
                </Box>
              }
              slotProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#fff",

                    color: colors.text,

                    border: `1px solid ${colors.primary}`,

                    borderRadius: 0,

                    px: 2.5,
                    py: 2,

                    maxWidth: 320,

                    boxShadow: "0 12px 30px rgba(15,76,129,.15)",
                  },
                },

                arrow: {
                  sx: {
                    color: "#fff",

                    "&::before": {
                      border: `1px solid ${colors.primary}`,

                      backgroundColor: "#fff",
                    },
                  },
                },
              }}
            >
              <Typography
                sx={{
                  display: "flex",

                  alignItems: "center",

                  gap: 0.5,

                  cursor: "pointer",

                  color: "#E5EBFF",

                  fontWeight: 500,

                  fontSize: {
                    xs: ".8rem",
                    sm: ".9rem",
                    md: "1rem",
                  },

                  letterSpacing: ".2px",

                  whiteSpace: "nowrap",

                  textShadow: "0 2px 8px rgba(0,0,0,.35)",

                  transition: "transform .25s ease, color .25s ease",

                  "&:hover": {
                    color: "#FFF",

                    transform: "translateY(-3px)",
                  },
                }}
              >
                {item.titulo}

                <InfoOutlinedIcon
                  sx={{
                    fontSize: 16,

                    color: colors.primaryLight,

                    opacity: 0.95,
                  }}
                />
              </Typography>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  );
}