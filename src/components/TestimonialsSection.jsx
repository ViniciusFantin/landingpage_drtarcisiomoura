import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import { SectionTitle, GradientButton } from "./common";

import { colors } from "../theme/colors";

import review1 from "../assets/review1.jpeg";
import review2 from "../assets/review2.jpeg";
import review3 from "../assets/review3.jpeg";
import review4 from "../assets/review4.jpeg";
import review5 from "../assets/review5.jpeg";
import review6 from "../assets/review6.jpeg";

import { GOOGLE_REVIEWS } from "../utils/constants";

const reviews = [review1, review2, review3, review4, review5, review6];

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
        <SectionTitle primary="Depoimentos" gradient />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 6,
          }}
        >
          <GradientButton component="a" href={GOOGLE_REVIEWS} target="_blank">
            Veja todas as avaliações ↗
          </GradientButton>
        </Box>

        <Grid container spacing={3}>
          {reviews.map((review, index) => (
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
                href={GOOGLE_REVIEWS}
                target="_blank"
                rel="noopener noreferrer"
                elevation={0}
                sx={{
                  overflow: "hidden",
                  borderRadius: 4,

                  cursor: "pointer",

                  position: "relative",

                  transition: "transform .35s ease, box-shadow .35s ease",

                  boxShadow: "0 10px 25px rgba(0,0,0,.08)",

                  "& img": {
                    transition: "transform .35s ease",
                  },

                  "&:hover": {
                    transform: "translateY(-8px) scale(1.015)",
                    boxShadow: "0 22px 45px rgba(0,0,0,.18)",
                  },

                  "&:hover img": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={review}
                  alt={`Avaliação ${index + 1}`}
                  loading="lazy"
                  sx={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    transition: "transform .35s ease",
                  }}
                />

                {/* <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    bgcolor: "rgba(0,0,0,.28)",

                    backdropFilter: "blur(2px)",

                    opacity: 0,

                    transition: ".3s",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    Ver no Google →
                  </Typography>
                </Box> */}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
