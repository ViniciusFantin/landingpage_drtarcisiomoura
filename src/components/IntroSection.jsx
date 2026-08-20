import { Box, Container, Grid, Typography, Tooltip } from "@mui/material";

import doutor from "../assets/doutor_editado.png";
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
    tooltip: "Cirurgias com foco em conforto, funcionalidade e autoestima.",
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
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="center"
          spacing={{
            xs: 4,
            md: 3,
          }}
          sx={{
            minHeight: {
              xs: "78vh",
              md: "78vh",
            },

            pt: {
              xs: 10,
              md: 8,
            },
            pb: {
              xs: 2,
              md: 1,
            },
          }}
        >
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            {/* <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: {
                  xs: 400,
                  md: 800,
                },

                maxWidth: "100%",

                mb: 1,
              }}
            /> */}

            <Typography
              sx={{
                fontWeight: 300,

                lineHeight: 1.1,

                fontSize: {
                  xs: "2.3rem",
                  md: "4.2rem",
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

            <Typography
              sx={{
                mt: 2,

                color: "#C7D2F1",

                fontSize: {
                  xs: "1.1rem",
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
                mt: 3.5,
              }}
            >
              Sobre mim
            </GradientButton>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={doutor}
              alt="Dr. Tarcísio"
              sx={{
                width: {
                  xs: "95%",
                  md: "100%",
                },

                maxWidth: 680,

                objectFit: "contain",

                mt: {
                  xs: 2,
                  md: -12,
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>

<Box
  sx={{
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
        <Box>
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
              textAlign: "justify",
              textJustify: "inter-word",
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
            xs: ".95rem",
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
