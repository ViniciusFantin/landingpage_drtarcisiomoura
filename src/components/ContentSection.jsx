import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import { colors } from "../theme/colors";
import { INSTAGRAM } from "../utils/constants";

import { GradientButton, SectionBadge } from "./common";

import InstagramIcon from "@mui/icons-material/Instagram";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import instagram1 from "../assets/instagram1.png";
import instagram2 from "../assets/instagram2.png";
import instagram3 from "../assets/instagram3.png";

export default function ContentSection() {
  return (
    <Box
      id="conteudos"
      sx={{
        py: 12,
        background: colors.background,
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
          <SectionBadge>CONTEÚDOS</SectionBadge>
        </Box>

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
              key={index}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
            >
              <Paper
                component="a"
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 4,
                  display: "block",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: ".35s",

                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 18px 40px rgba(0,0,0,.20)",
                  },

                  "&:hover .instagram-overlay": {
                    opacity: 1,
                  },

                  "&:hover img": {
                    transform: "scale(1.06)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt="Instagram"
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: {
                      xs: 340,
                      md: 420,
                    },
                    objectFit: "cover",
                    transition: ".5s",
                  }}
                />

                <Box
                  className="instagram-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(34,44,74,.62)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    transition: ".35s",
                    backdropFilter: "blur(3px)",
                  }}
                >
                  <InstagramIcon
                    sx={{
                      color: "#fff",
                      fontSize: 52,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      mt: 1,
                    }}
                  >
                    Ver no Instagram
                  </Typography>
                </Box>
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
          <GradientButton
            component="a"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<InstagramIcon />}
            endIcon={<OpenInNewIcon />}
          >
            Seguir no Instagram
          </GradientButton>
        </Box>
      </Container>
    </Box>
  );
}
