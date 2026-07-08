import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import { colors } from "../theme/colors";

import { keyframes } from "@mui/system";

import checkup from "../assets/checkup.png";
import hipertensao from "../assets/hiper.jpg";
import diabetes from "../assets/diabetes.jpg";
import dorCabeca from "../assets/dorCabeca.jpg";
import fadiga from "../assets/fadiga.jpg";

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
    titulo: "Check-up Preventivo",
    emoji: "🩺",
    descricao:
      "Avaliação clínica completa para prevenção de doenças e acompanhamento da saúde.",
    imagem: checkup,
  },
  {
    titulo: "Hipertensão",
    emoji: "❤️",
    descricao:
      "Diagnóstico, controle da pressão arterial e prevenção de complicações cardiovasculares.",
    imagem: hipertensao,
  },
  {
    titulo: "Diabetes",
    emoji: "🩸",
    descricao:
      "Tratamento individualizado para controle glicêmico e qualidade de vida.",
    imagem: diabetes,
  },
  {
    titulo: "Dor de Cabeça",
    emoji: "🤕",
    descricao:
      "Investigação clínica das causas e definição do tratamento adequado.",
    imagem: dorCabeca,
  },
  {
    titulo: "Fadiga",
    emoji: "😴",
    descricao:
      "Avaliação das possíveis causas e acompanhamento para recuperação da disposição.",
    imagem: fadiga,
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
                        color: colors.text
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

                    <Box
                      sx={{
                        mt: 3,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,

                        px: 2.5,
                        py: 1,

                        borderRadius: 20,

                        bgcolor: "rgba(255,255,255,.12)",

                        cursor: "pointer",

                        transition: ".3s",

                        "&:hover": {
                          bgcolor: "rgba(255,255,255,.22)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: ".9rem",
                        }}
                      >
                        Saiba mais
                      </Typography>
                      →
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
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
