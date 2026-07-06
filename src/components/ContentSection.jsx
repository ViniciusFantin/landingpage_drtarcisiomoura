import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

import { colors } from "../theme/colors";

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
    descricao: "Avaliação completa da saúde.",
  },
  {
    titulo: "Hipertensão",
    descricao: "Controle e acompanhamento.",
  },
  {
    titulo: "Diabetes",
    descricao: "Tratamento individualizado.",
  },
  {
    titulo: "Dor de Cabeça",
    descricao: "Investigação clínica.",
  },
  {
    titulo: "Fadiga",
    descricao: "Identificação das causas.",
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
          <Typography
            align="center"
            sx={{
              color: "white",
              mb: 8,
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
            }}
          >
            Principais problemas que resolvo no consultório
          </Typography>

          <Grid container spacing={4}>
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
                    borderRadius: 4,
                    overflow: "hidden",
                    background: colors.card,
                    color: "white",
                  }}
                >
                  <Box
                    sx={{
                      height: 220,
                      background: colors.border,

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    IMAGEM
                  </Box>

                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      {item.titulo}
                    </Typography>

                    <Typography>{item.descricao}</Typography>
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
