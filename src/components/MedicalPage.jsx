import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import doutor3 from "../assets/doutor3.jpg";

import { colors } from "../theme/colors";
import { WHATSAPP } from "../utils/constants";

import { medicalPages } from "../data/MedicalPagesData";
import SiteMapSection from "../components/SiteMapSection";

export default function MedicalPage() {
  const { slug } = useParams();

  /*
   * Sempre que entrar em uma página de procedimento,
   * começa no topo da página.
   */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [slug]);

  /*
   * Busca o conteúdo correspondente ao slug.
   */
  const page = medicalPages[slug];

  /*
   * Caso alguém acesse uma URL inexistente.
   */
  if (!page) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#F5F6F8",
          pt: {
            xs: 12,
            md: 14,
          },
          pb: 10,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            sx={{
              color: colors.primary,
              fontWeight: 700,
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
            }}
          >
            Página não encontrada
          </Typography>

          <Typography sx={{ mt: 2 }}>
            O procedimento solicitado não foi encontrado.
          </Typography>

          <Button
            component={Link}
            to="/"
            variant="contained"
            sx={{
              mt: 4,
              backgroundColor: colors.primary,
              textTransform: "none",
              "&:hover": {
                backgroundColor: colors.primaryLight,
              },
            }}
          >
            Voltar para o início
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <>
      {/* =====================================================
          PÁGINA DO PROCEDIMENTO
      ====================================================== */}

      <Box
        sx={{
          backgroundColor: "#F5F6F8",
          minHeight: "100vh",
        }}
      >
        {/* =====================================================
            HEADER DO PROCEDIMENTO
        ====================================================== */}

        <Box
          sx={{
            position: "relative",
            overflow: "hidden",

            minHeight: {
              xs: 260,
              sm: 300,
              md: 340,
            },

            display: "flex",
            alignItems: "center",

            backgroundColor: colors.primary,
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              position: "relative",
              zIndex: 2,

              pt: {
                xs: 12,
                md: 13,
              },

              pb: {
                xs: 6,
                md: 7,
              },
            }}
          >
            <Typography
              component="h1"
              sx={{
                color: "#FFF",

                fontWeight: 700,

                lineHeight: 1.15,

                fontSize: {
                  xs: "2rem",
                  sm: "2.6rem",
                  md: "3.5rem",
                },

                maxWidth: 850,
              }}
            >
              {page.titulo}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,.82)",

                mt: 1.5,

                fontSize: {
                  xs: "1rem",
                  md: "1.15rem",
                },

                maxWidth: 750,
              }}
            >
              {page.subtitulo}
            </Typography>
          </Container>
        </Box>

        {/* =====================================================
            CONTEÚDO
        ====================================================== */}

        <Container
          maxWidth="lg"
          sx={{
            py: {
              xs: 4,
              md: 5,
            },
          }}
        >
          <Grid
            container
            spacing={{
              xs: 3,
              md: 4,
            }}
            alignItems="flex-start"
          >
            {/* =================================================
                CONTEÚDO PRINCIPAL
            ================================================== */}

            <Grid
              size={{
                xs: 12,
                md: 8,
              }}
            >
              {/* INTRODUÇÃO */}

              <Box
                sx={{
                  backgroundColor: "#FFF",
                  borderRadius: 1,
                  p: {
                    xs: 2.5,
                    md: 3.5,
                  },
                  boxShadow: "0 2px 10px rgba(0,0,0,.05)",
                  mb: 3,
                }}
              >
                <Typography
                  component="h2"
                  sx={{
                    color: colors.primary,
                    fontWeight: 700,
                    fontSize: {
                      xs: "1.4rem",
                      md: "1.7rem",
                    },
                    lineHeight: 1.2,
                    mb: 2,
                  }}
                >
                  {page.introducao.titulo}
                </Typography>

                {page.introducao.texto.map((texto, index) => (
                  <Typography
                    key={index}
                    sx={{
                      color: colors.text,
                      fontSize: ".95rem",
                      lineHeight: 1.8,
                      mb:
                        index !==
                        page.introducao.texto.length - 1
                          ? 2
                          : 0,
                    }}
                  >
                    {texto}
                  </Typography>
                ))}
              </Box>

              {/* SEÇÕES */}

              {page.secoes.map((secao, index) => (
                <Box
                  key={secao.titulo}
                  sx={{
                    backgroundColor: "#FFF",
                    borderRadius: 1,
                    p: {
                      xs: 2.5,
                      md: 3.5,
                    },
                    boxShadow: "0 2px 10px rgba(0,0,0,.05)",
                    mb:
                      index !== page.secoes.length - 1
                        ? 3
                        : 0,
                  }}
                >
                  <Typography
                    component="h2"
                    sx={{
                      color: colors.primary,
                      fontWeight: 700,
                      fontSize: {
                        xs: "1.25rem",
                        md: "1.5rem",
                      },
                      mb: 1.5,
                    }}
                  >
                    {secao.titulo}
                  </Typography>

                  <Typography
                    sx={{
                      color: colors.text,
                      fontSize: ".95rem",
                      lineHeight: 1.8,
                    }}
                  >
                    {secao.texto}
                  </Typography>
                </Box>
              ))}
            </Grid>

            {/* =================================================
                CARD DO MÉDICO
            ================================================== */}

            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#FFF",

                  borderRadius: 1,

                  p: {
                    xs: 3,
                    md: 3,
                  },

                  boxShadow:
                    "0 2px 10px rgba(0,0,0,.05)",

                  position: {
                    md: "sticky",
                  },

                  top: {
                    md: 110,
                  },

                  textAlign: "center",
                }}
              >
                {/* FOTO */}

                <Box
                  component="img"
                  src={doutor3}
                  alt="Dr. Edgar Sarmento"
                  sx={{
                    width: {
                      xs: 150,
                      md: 155,
                    },

                    height: {
                      xs: 150,
                      md: 155,
                    },

                    borderRadius: "50%",

                    objectFit: "cover",

                    objectPosition: "center",

                    display: "block",

                    mx: "auto",

                    mb: 2,
                  }}
                />

                {/* NOME */}

                <Typography
                  sx={{
                    color: colors.primary,

                    fontWeight: 700,

                    fontSize: {
                      xs: "1.3rem",
                      md: "1.35rem",
                    },

                    lineHeight: 1.2,
                  }}
                >
                  Dr. Edgar Oliveira
                  <br />
                  Sarmento
                </Typography>

                {/* INFORMAÇÕES */}

                <Typography
                  sx={{
                    mt: 1,

                    color: "#777",

                    fontSize: ".95rem",

                    lineHeight: 1.6,
                  }}
                >
                  Urologista
                  <br />
                  São Paulo - SP
                </Typography>

                <Typography
                  sx={{
                    mt: 1,

                    color: "#888",

                    fontSize: ".82rem",

                    lineHeight: 1.5,
                  }}
                >
                  Graduado em Medicina&nbsp; | &nbsp;Graduado
                  em Medicina
                </Typography>

                <Divider
                  sx={{
                    my: 2.5,
                  }}
                />

                {/* CONSULTÓRIO */}

                <Box
                  sx={{
                    backgroundColor: "#F5F6F8",

                    borderRadius: 1,

                    p: 2,

                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      color: colors.primary,

                      fontWeight: 700,

                      fontSize: ".9rem",

                      mb: 0.5,
                    }}
                  >
                    Consultório
                  </Typography>

                  <Typography
                    sx={{
                      color: colors.text,

                      fontSize: ".82rem",

                      lineHeight: 1.6,
                    }}
                  >
                    R. Apucarana, 272 - Tatuapé,
                    <br />
                    São Paulo - SP, 03333-000
                  </Typography>
                </Box>

                {/* WHATSAPP */}

                <Button
                  component="a"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    mt: 2,

                    backgroundColor: "#25D366",

                    color: "#FFF",

                    borderRadius: 1,

                    py: 1.25,

                    fontWeight: 700,

                    textTransform: "none",

                    fontSize: ".9rem",

                    "&:hover": {
                      backgroundColor: "#1ebe5d",
                    },
                  }}
                >
                  WhatsApp
                </Button>

                {/* TELEFONE */}

                <Button
                  component="a"
                  href="tel:+5511999999999"
                  fullWidth
                  startIcon={<PhoneIcon />}
                  sx={{
                    mt: 1,

                    color: colors.primary,

                    border: `1px solid ${colors.primary}`,

                    borderRadius: 1,

                    py: 1.15,

                    fontWeight: 600,

                    textTransform: "none",

                    fontSize: ".85rem",

                    "&:hover": {
                      backgroundColor: "rgba(62,81,120,.05)",
                    },
                  }}
                >
                  Entrar em contato
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* =====================================================
              GOOGLE MAPS
          ====================================================== */}

          <Box
            sx={{
              mt: {
                xs: 4,
                md: 5,
              },

              backgroundColor: "#FFF",

              borderRadius: 1,

              overflow: "hidden",

              boxShadow:
                "0 2px 10px rgba(0,0,0,.05)",
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: colors.primary,

                fontWeight: 700,

                fontSize: {
                  xs: "1.4rem",
                  md: "1.8rem",
                },

                textAlign: "center",

                py: 3,

                px: 2,
              }}
            >
              Consultório do Dr. Edgar Oliveira Sarmento
              em São Paulo
            </Typography>

            <Box
              component="iframe"
              title="Localização do consultório"
              src="https://www.google.com/maps?q=R.%20Apucarana,%20272%20-%20Tatuapé,%20São%20Paulo%20-%20SP,%2003333-000&output=embed"
              sx={{
                display: "block",

                width: "100%",

                height: {
                  xs: 350,
                  sm: 450,
                  md: 500,
                },

                border: 0,
              }}
              loading="lazy"
              allowFullScreen
            />
          </Box>
        </Container>
      </Box>

      {/* =======================================================
          MAPA DO SITE
      ======================================================== */}

      <SiteMapSection />
    </>
  );
}