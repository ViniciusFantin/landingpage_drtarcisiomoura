import { Box, Container, Typography, Tooltip } from "@mui/material";

import doutor3 from "../assets/doutor3.jpeg";
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
      {/* HERO */}
      <Box
        sx={{
          position: "relative",

          overflow: "hidden",

          minHeight: {
            xs: "720px",
            sm: "700px",
            md: "680px",
          },

          display: "flex",

          alignItems: "center",

          backgroundImage: {
            xs: `url(${doutor3})`,
            md: `url(${doutor3})`,
          },

          backgroundRepeat: "no-repeat",

          backgroundSize: {
            xs: "auto 62%",
            sm: "auto 70%",
            md: "auto 105%",
          },

          backgroundPosition: {
            xs: "center bottom",
            sm: "center bottom",
            md: "right bottom",
          },

          "&::before": {
            content: '""',

            position: "absolute",

            inset: 0,

            background: {
              xs: `
                linear-gradient(
                  to bottom,
                  rgba(35,48,78,.98) 0%,
                  rgba(35,48,78,.90) 38%,
                  rgba(35,48,78,.25) 70%,
                  rgba(35,48,78,.05) 100%
                )
              `,
              md: `
                linear-gradient(
                  to right,
                  ${colors.hero} 0%,
                  rgba(35,48,78,.96) 28%,
                  rgba(35,48,78,.55) 52%,
                  rgba(35,48,78,.05) 78%
                )
              `,
            },

            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 2,

            height: "100%",

            display: "flex",
            alignItems: "center",
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
                sm: 6,
                md: 2,
              },

              pb: {
                xs: 220,
                sm: 180,
                md: 80,
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 300,

                lineHeight: 1.1,

                fontSize: {
                  xs: "2.3rem",
                  sm: "3rem",
                  md: "4.2rem",
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

            <Typography
              sx={{
                mt: 2,

                color: "#C7D2F1",

                fontSize: {
                  xs: "1.05rem",
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
                mt: 3,
              }}
            >
              Sobre mim
            </GradientButton>
          </Box>
        </Container>
      </Box>

      {/* ÁREAS DE ATUAÇÃO */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,

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
                  xs: ".9rem",
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

              <InfoOutlinedIcon
                sx={{
                  fontSize: 16,

                  color: colors.primaryLight,

                  opacity: 0.9,
                }}
              />
            </Typography>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}