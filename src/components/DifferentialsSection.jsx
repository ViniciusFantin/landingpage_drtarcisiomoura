import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

import { colors } from "../theme/colors";

const differentials = [
  {
    icon: <PersonAddAlt1RoundedIcon sx={{ fontSize: 34 }} />,
    badgeTitle: "100%",
    badgeSubtitle: "SATISFAÇÃO",
    title: "Atendimento verdadeiramente humanizado",
    description:
      "Cada paciente é atendido de forma individualizada, com escuta ativa, respeito e atenção aos detalhes para proporcionar uma experiência médica acolhedora e eficiente.",
  },
  {
    icon: <InsightsRoundedIcon sx={{ fontSize: 34 }} />,
    badgeTitle: "360°",
    badgeSubtitle: "CUIDADO",
    title: "Diagnóstico preciso e acompanhamento contínuo",
    description:
      "Avaliação clínica completa aliada às melhores práticas da medicina moderna para oferecer tratamentos personalizados e resultados duradouros.",
  },
  {
    icon: <FavoriteRoundedIcon sx={{ fontSize: 34 }} />,
    badgeTitle: "+15",
    badgeSubtitle: "ANOS",
    title: "Foco na qualidade de vida masculina",
    description:
      "Tratamentos voltados para prevenção, performance, saúde hormonal e bem-estar, sempre priorizando segurança, confiança e qualidade de vida.",
  },
];

export default function DifferentialsSection() {
  return (
    <Box
      id="diferenciais"
      sx={{
        position: "relative",
        py: {
          xs: 10,
          md: 14,
        },
        overflow: "hidden",
        background: colors.background,
      }}
    >
      {/* Blurs decorativos */}

      <Box
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          background: `${colors.primary}10`,
          borderRadius: "50%",
          filter: "blur(120px)",
          top: -220,
          left: -180,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 450,
          height: 450,
          background: `${colors.primaryLight}10`,
          borderRadius: "50%",
          filter: "blur(120px)",
          bottom: -220,
          right: -180,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Badge */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <Box
            sx={{
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryLight})`,
              color: colors.white,
              px: 4,
              py: 1,
              borderRadius: 30,
              fontWeight: 700,
              fontSize: ".82rem",
              letterSpacing: 1.5,
              boxShadow: "0 12px 30px rgba(62,81,120,.25)",
            }}
          >
            MEUS DIFERENCIAIS
          </Box>
        </Box>

        {/* Título */}

        <Typography
          align="center"
          sx={{
            color: colors.text,
            fontWeight: 300,
            lineHeight: 1.15,
            mb: 2,
            fontSize: {
              xs: "2rem",
              md: "3.3rem",
            },
          }}
        >
          O que torna meu atendimento
          <br />

          <Box
            component="span"
            sx={{
              fontWeight: 700,
              color: colors.primary,
            }}
          >
            ÚNICO
          </Box>
        </Typography>

        <Typography
          align="center"
          sx={{
            color: colors.textLight,
            mb: 8,
            maxWidth: 700,
            mx: "auto",
            fontSize: {
              xs: "1rem",
              md: "1.15rem",
            },
          }}
        >
          Experiência personalizada focada em resultados, confiança e
          acompanhamento médico de excelência.
        </Typography>

        {/* Cards */}

        <Grid container spacing={4}>
          {differentials.map((item, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 6,
                  height: "100%",
                  borderRadius: 5,
                  background: colors.white,
                  border: `1px solid ${colors.border}`,
                  borderTop: `4px solid ${colors.primary}`,
                  overflow: "hidden",
                  transition: ".35s",

                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 30px 60px rgba(0,0,0,.12)",
                  },
                }}
              >
                {/* Ícone */}

                <Box
                  sx={{
                    position: "absolute",
                    top: 22,
                    left: 22,
                    width: 58,
                    height: 58,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: colors.white,
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                    boxShadow: "0 12px 25px rgba(62,81,120,.25)",
                  }}
                >
                  {item.icon}
                </Box>

                {/* Badge */}

                <Box
                  sx={{
                    position: "absolute",
                    top: 22,
                    right: 22,
                    width: 82,
                    borderRadius: 3,
                    background: "#F2F5FA",
                    py: 1.2,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: colors.primary,
                      lineHeight: 1,
                    }}
                  >
                    {item.badgeTitle}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: ".68rem",
                      color: colors.textLight,
                      letterSpacing: 1,
                    }}
                  >
                    {item.badgeSubtitle}
                  </Typography>
                </Box>

                {/* Conteúdo */}

                <Typography
                  sx={{
                    mt: 6,
                    mb: 2,
                    fontWeight: 700,
                    color: colors.primary,
                    fontSize: "1.55rem",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: colors.textLight,
                    lineHeight: 1.9,
                    fontSize: "1rem",
                  }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}