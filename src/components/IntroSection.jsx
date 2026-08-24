import { Box, Container, Typography, Tooltip } from "@mui/material";

import doutor3 from "../assets/doutor_editado.png";
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
            xs: "620px",
            sm: "600px",
            md: "590px",
          },

          /*
           * A imagem continua sendo o background,
           * mas agora o conteúdo não é centralizado verticalmente.
           */
          backgroundImage: `url(${doutor3})`,
          backgroundRepeat: "no-repeat",

          backgroundSize: {
            xs: "auto 58%",
            sm: "auto 68%",
            md: "auto 100%",
          },

          backgroundPosition: {
            xs: "center bottom",
            sm: "center bottom",
            md: "right bottom",
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 2,

            /*
             * O conteúdo começa no topo do Hero.
             * Isso evita que o título fique sobre a cabeça
             * do médico no mobile.
             */
            pt: {
              xs: 7,
              sm: 7,
              md: 8,
            },

            pb: {
              xs: 25,
              sm: 20,
              md: 10,
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "55%",
              },
            }}
          >
            {/* TÍTULO */}
            <Box
              sx={{
                display: "inline-block",
                maxWidth: "100%",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 300,

                  lineHeight: 1.08,

                  fontSize: {
                    xs: "2.1rem",
                    sm: "2.8rem",
                    md: "4rem",
                  },

                  maxWidth: {
                    xs: "100%",
                    md: 700,
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

              {/* LINHA ABAIXO DO TÍTULO */}
              <Box
                sx={{
                  width: "100%",

                  height: "2px",

                  mt: 1.5,

                  backgroundColor: "rgba(255,255,255,.65)",
                }}
              />
            </Box>

            {/* LOCALIZAÇÃO + BOTÃO */}
            <Box
              sx={{
                display: "flex",

                alignItems: "center",

                flexWrap: "wrap",

                gap: {
                  xs: 1.5,
                  sm: 2.5,
                  md: 3,
                },

                mt: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#C7D2F1",

                  fontSize: {
                    xs: "1rem",
                    sm: "1.05rem",
                    md: "1.2rem",
                  },

                  whiteSpace: "nowrap",
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
                  mt: 0,
                }}
              >
                Sobre mim
              </GradientButton>
            </Box>
          </Box>
        </Container>

        {/* ÁREAS DE ATUAÇÃO */}
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

            pt: {
              xs: 3,
              sm: 3,
              md: 3.5,
            },

            pb: {
              xs: 2.5,
              sm: 3,
              md: 3.5,
            },

            /*
             * Apenas uma proteção sutil para melhorar
             * a leitura dos textos sobre a fotografia.
             */
            backgroundColor: "rgba(35,48,78,.18)",
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