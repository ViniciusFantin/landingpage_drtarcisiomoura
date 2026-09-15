import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../theme/colors";

const procedimentos = [
  {
    nome: "Reposição Hormonal",
    slug: "reposicao-hormonal",
  },
  {
    nome: "Emagrecimento",
    slug: "emagrecimento",
  },
  {
    nome: "Vasectomia",
    slug: "vasectomia",
  },  
  {
    nome: "Harmonização Peniana",
    slug: "harmonizacao-peniana",
  },
  {
    nome: "Plástica Íntima Masculina",
    slug: "plastica-intima-masculina",
  },
];

export default function SiteMapSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: colors.primary,
        color: "#FFF",
        py: {
          xs: 6,
          md: 7,
        },
      }}
    >
      <Container maxWidth="lg">

        <Box
          sx={{
            textAlign: "center",
            mb: {
              xs: 5,
              md: 6,
            },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: "1.8rem",
                md: "2rem",
              },
            }}
          >
            Mapa do Site
          </Typography>

          <Typography
            sx={{
              mt: 0.5,
              color: "rgba(255,255,255,.75)",
              fontSize: {
                xs: ".9rem",
                md: ".95rem",
              },
            }}
          >
            Consulte informações sobre nossos procedimentos
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: 900,
            mx: "auto",

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },

            gap: {
              xs: 3,
              md: 5,
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: ".95rem",
                pb: 1,
                borderBottom:
                  "1px solid rgba(255,255,255,.65)",
              }}
            >
              Procedimentos
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: 1,
              }}
            >
              {procedimentos.map((procedimento) => (
                <Typography
                  key={procedimento.slug}
                  component={Link}
                  to={`/pagina/${procedimento.slug}`}
                  sx={{
                    color: "rgba(255,255,255,.85)",
                    textDecoration: "none",
                    fontSize: ".82rem",
                    lineHeight: 1.5,
                    py: 0.35,

                    transition: ".2s",

                    "&:hover": {
                      color: "#FFF",
                      transform: "translateX(3px)",
                    },
                  }}
                >
                  {procedimento.nome}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}