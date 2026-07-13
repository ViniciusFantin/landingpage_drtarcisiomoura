import { Box, Container, Grid, Paper, Typography, Button } from "@mui/material";

import { colors } from "../theme/colors";

import { keyframes } from "@mui/system";

import { WHATSAPP } from "../utils/constants";

import { INSTAGRAM } from "../utils/constants";

import InstagramIcon from "@mui/icons-material/Instagram";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import instagram1 from "../assets/instagram1.png";
import instagram2 from "../assets/instagram2.png";
import instagram3 from "../assets/instagram3.png";

import hormonal from "../assets/hormonal.jpg";
import emagrecimento from "../assets/emagrecimento.jpg";
import vasectomia from "../assets/vasectomia.jpg";
import harmonizacao from "../assets/harmonizacao.jpg";
import plasticaIntima from "../assets/plasticaIntima.jpg";

const diferenciais = [
  {
    titulo: "Atendimento Humanizado",
    descricao: "Cada paciente é atendido de forma individual e personalizada.",
  },
  {
    titulo: "Diagnóstico Preciso",
    descricao: "Avaliação clínica detalhada para maior assertividade.",
  },
  {
    titulo: "Acompanhamento Contínuo",
    descricao: "Monitoramento da evolução do tratamento.",
  },
];

const problemas = [
  {
    titulo: "Reposição Hormonal",
    emoji: "🧬",
    descricao:
      "Tratamento personalizado para restaurar o equilíbrio hormonal, promovendo mais disposição, qualidade de vida e bem-estar.",
    imagem: hormonal,
  },
  {
    titulo: "Emagrecimento",
    emoji: "⚖️",
    descricao:
      "Acompanhamento médico individualizado para perda de peso saudável, com foco em resultados duradouros e segurança.",
    imagem: emagrecimento,
  },
  {
    titulo: "Vasectomia",
    emoji: "🩺",
    descricao:
      "Procedimento seguro, minimamente invasivo e realizado com todo o acompanhamento necessário antes e após a cirurgia.",
    imagem: vasectomia,
  },
  {
    titulo: "Harmonização Peniana",
    emoji: "✨",
    descricao:
      "Procedimentos estéticos modernos voltados para melhorar a aparência, autoestima e satisfação masculina.",
    imagem: harmonizacao,
  },
  {
    titulo: "Plástica Íntima Masculina",
    emoji: "🔹",
    descricao:
      "Cirurgias íntimas com foco em funcionalidade, estética e conforto, respeitando as necessidades de cada paciente.",
    imagem: plasticaIntima,
  },
];

const avaliacoes = [
  {
    nome: "Maria S.",
    comentario: "Excelente profissional. Muito atencioso e cuidadoso.",
  },
  {
    nome: "João P.",
    comentario: "Consulta extremamente detalhada e esclarecedora.",
  },
  {
    nome: "Ana C.",
    comentario: "Ótimo atendimento e acompanhamento.",
  },
  {
    nome: "Carlos M.",
    comentario: "Recomendo para quem busca um cuidado humanizado.",
  },
  {
    nome: "Fernanda L.",
    comentario: "Senti uma melhora significativa após o tratamento.",
  },
  {
    nome: "Lucas R.",
    comentario: "Profissional extremamente competente e atencioso.",
  },
];

export default function ContentSections() {
  const pulse = keyframes`
    0%{
    transform:scale(1);
    color:white;
    }

    50%{
    transform:scale(1.08);
    color:#A8C8FF;
    }

    100%{
    transform:scale(1);
    color:white;
    }
  `;
  return (
    <>
      {/* DIFERENCIAIS */}

      <Box
        id="diferenciais"
        sx={{
          py: 10,
          backgroundColor: colors.background,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Diferenciais
          </Typography>

          <Grid container spacing={3}>
            {diferenciais.map((item) => (
              <Grid size={{ xs: 12, md: 4 }} key={item.titulo}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: "100%",
                    border: `1px solid ${colors.border}`,
                    boxShadow: "none",
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    {item.titulo}
                  </Typography>

                  <Typography>{item.descricao}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* O QUE RESOLVO */}

      <Box
        id="o-que-resolvo"
        sx={{
          py: 12,
          background: `linear-gradient(
            135deg,
            ${colors.hero} 0%,
            #42547A 100%
            )`,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Typography
              sx={{
                px: 3,
                py: 0.8,
                borderRadius: 50,
                bgcolor: "rgba(255,255,255,.12)",
                color: "white",
                fontSize: ".75rem",
                letterSpacing: 2,
                fontWeight: 700,
                textTransform: "uppercase",
                backdropFilter: "blur(10px)",
              }}
            >
              O que resolvo
            </Typography>
          </Box>

          <Typography
            align="center"
            sx={{
              color: "white",
              mb: 8,
              fontWeight: 300,
              lineHeight: 1.1,
              fontSize: {
                xs: "2rem",
                md: "3.2rem",
              },
            }}
          >
            Principais problemas que{" "}
            <Box
              component="span"
              sx={{
                display: "inline-block",
                fontWeight: 700,
                animation: `${pulse} 2s infinite`,
              }}
            >
              resolvo
            </Box>
            <br />
            no consultório
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {problemas.map((item) => (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                }}
                key={item.titulo}
              >
                <Paper
                  sx={{
                    overflow: "visible",
                    borderRadius: 5,
                    background: colors.card,
                    color: colors.text,
                    transition: ".35s",
                    border: "1px solid rgba(255,255,255,.12)",

                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 45px rgba(0,0,0,.25)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.imagem}
                    alt={item.titulo}
                    sx={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                    }}
                  />

                  <Box
                    sx={{
                      p: 3,
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: -22,
                        left: 22,

                        width: 46,
                        height: 46,

                        borderRadius: "50%",

                        bgcolor: "#F7D46B",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        fontSize: 22,

                        boxShadow: "0 6px 15px rgba(0,0,0,.35)",

                        border: "3px solid white",
                      }}
                    >
                      {item.emoji}
                    </Box>

                    <Typography
                      sx={{
                        mt: 2,
                        fontWeight: 700,
                        fontSize: "1.3rem",
                        lineHeight: 1.2,
                        color: colors.text,
                      }}
                    >
                      {item.titulo}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 2,
                        color: colors.textLight,
                        lineHeight: 1.8,
                        minHeight: 90,
                      }}
                    >
                      {item.descricao}
                    </Typography>

                    <Button
                      component="a"
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<span style={{ fontSize: 14 }}>↗</span>}
                      sx={{
                        mt: 3,

                        px: 2.6,
                        py: 1,

                        minWidth: 145,
                        width: "fit-content",

                        borderRadius: "14px",

                        background: `linear-gradient(
                          135deg,
                          ${colors.primaryLight} 0%,
                          ${colors.primary} 100%
                        )`,

                        color: colors.white,

                        textTransform: "none",

                        fontWeight: 600,

                        fontSize: ".92rem",

                        letterSpacing: ".2px",

                        boxShadow: "0 10px 22px rgba(62,81,120,.28)",

                        position: "relative",

                        overflow: "hidden",

                        transition: "all .35s ease",

                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: "-120%",
                          width: "60%",
                          height: "100%",
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent)",
                          transform: "skewX(-20deg)",
                          transition: ".6s",
                        },

                        "&:hover": {
                          background: `linear-gradient(
                            135deg,
                            ${colors.primary} 0%,
                            ${colors.primaryLight} 100%
                          )`,
                          transform: "translateY(-3px)",
                          boxShadow: "0 16px 34px rgba(62,81,120,.42)",

                          "&::before": {
                            left: "150%",
                          },
                        },
                      }}
                    >
                      Saiba mais
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* INSTAGRAM */}

      <Box
        sx={{
          py: 12,
          background: colors.background,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            align="center"
            sx={{
              color: colors.primary,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Redes Sociais
          </Typography>

          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 2,
              color: colors.text,
            }}
          >
            Acompanhe conteúdos sobre saúde
          </Typography>

          <Typography
            align="center"
            sx={{
              color: colors.textLight,
              maxWidth: 650,
              mx: "auto",
              mb: 6,
              lineHeight: 1.8,
            }}
          >
            Dicas de saúde, qualidade de vida, prevenção e bem-estar publicadas
            regularmente no Instagram do Dr. Tarcísio Moura.
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {[instagram1, instagram2, instagram3].map((img, index) => (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                }}
                key={index}
              >
                <Paper
                  sx={{
                    overflow: "hidden",
                    borderRadius: 4,
                    cursor: "pointer",
                    transition: ".35s",

                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 18px 40px rgba(0,0,0,.18)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    alt="Instagram"
                    sx={{
                      width: "100%",
                      height: {
                        xs: 340,
                        md: 420,
                      },
                      objectFit: "cover",
                    }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              mt: 6,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              component="a"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<InstagramIcon />}
              endIcon={<OpenInNewIcon />}
              sx={{
                px: 4,
                py: 1.4,

                borderRadius: 30,

                background: `linear-gradient(
                  135deg,
                  ${colors.primary} 0%,
                  ${colors.primaryLight} 100%
                )`,

                color: "#fff",

                textTransform: "none",

                fontWeight: 600,

                fontSize: "1rem",

                boxShadow: "0 12px 30px rgba(62,81,120,.25)",

                transition: ".35s",

                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 20px 45px rgba(62,81,120,.35)",
                },
              }}
            >
              Seguir no Instagram
            </Button>
          </Box>
        </Container>
      </Box>

      {/* AVALIAÇÕES */}

      <Box
        id="avaliacoes"
        sx={{
          py: 14,
          background: colors.background,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ mb: 8 }}>
            O que dizem meus pacientes
          </Typography>

          <Grid container spacing={4}>
            {avaliacoes.map((item) => (
              <Grid
                size={{
                  xs: 12,
                  md: 4,
                }}
                key={item.nome}
              >
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    border: `1px solid ${colors.border}`,
                    boxShadow: "none",
                  }}
                >
                  <Typography
                    sx={{
                      color: colors.textLight,
                      lineHeight: 2,
                    }}
                  >
                    "{item.comentario}"
                  </Typography>

                  <Typography
                    sx={{
                      mt: 3,
                      fontWeight: 700,
                      color: colors.primary,
                    }}
                  >
                    {item.nome}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
