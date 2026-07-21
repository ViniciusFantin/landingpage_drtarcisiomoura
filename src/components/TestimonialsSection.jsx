import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import { colors } from "../theme/colors";

const depoimentos = [
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

export default function TestimonialsSection() {
  return (
    <Box
      id="depoimentos"
      sx={{
        py: 14,
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
          Depoimentos
        </Typography>

        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 2,
            color: colors.text,
          }}
        >
          O que dizem meus pacientes
        </Typography>

        <Typography
          align="center"
          sx={{
            color: colors.textLight,
            maxWidth: 650,
            mx: "auto",
            mb: 8,
            lineHeight: 1.8,
          }}
        >
          A satisfação dos pacientes é resultado de um atendimento humanizado,
          tratamentos personalizados e acompanhamento contínuo.
        </Typography>

        <Grid container spacing={4}>
          {depoimentos.map((item) => (
            <Grid
              key={item.nome}
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <Paper
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 4,
                  border: `1px solid ${colors.border}`,
                  boxShadow: "none",
                  transition: ".3s",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 18px 40px rgba(0,0,0,.08)",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: colors.textLight,
                    lineHeight: 2,
                    fontStyle: "italic",
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
  );
}