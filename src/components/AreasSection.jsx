import { Box, Container, Grid, Paper, Typography, Button } from "@mui/material";
import { keyframes } from "@mui/system";

import { colors } from "../theme/colors";
import { WHATSAPP } from "../utils/constants";

import hormonal from "../assets/hormonal.jpg";
import emagrecimento from "../assets/emagrecimento.jpg";
import vasectomia from "../assets/vasectomia.jpg";
import harmonizacao from "../assets/harmonizacao.jpg";
import plasticaIntima from "../assets/plasticaIntima.jpg";

const areas = [
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

export default function AreasSection() {
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
    <Box
      id="areas-atuo"
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
            Áreas que atuo
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
          Conheça minhas principais
          <br />

          <Box
            component="span"
            sx={{
              display: "inline-block",
              fontWeight: 700,
              animation: `${pulse} 2s infinite`,
            }}
          >
            áreas de atuação
          </Box>
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {areas.map((item) => (
            <Grid
              key={item.titulo}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
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
                  loading="lazy"
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
  );
}