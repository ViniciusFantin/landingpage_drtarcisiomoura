import { Box, Container, Typography, Grid, Button } from "@mui/material";

import { WHATSAPP } from "../utils/constants";

import { colors } from "../theme/colors";

export default function AboutSection() {
  return (
    <Box
      id="sobre"
      sx={{
        py: 15,
        background: colors.background,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                height: 550,
                borderRadius: 4,
                background: colors.border,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              IMAGEM
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                color: colors.primary,
                fontWeight: 600,
                mb: 1,
              }}
            >
              QUEM SOU EU
            </Typography>

            <Typography
              variant="h3"
              sx={{
                mb: 3,
                color: colors.text,
              }}
            >
              Dr. Tarcísio Moura
            </Typography>

            <Typography
              sx={{
                color: colors.textLight,
                lineHeight: 2,
              }}
            >
              Texto institucional do médico...
            </Typography>

            <Button
              component="a"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                mt: 4,
                backgroundColor: colors.primary,
                color: colors.white,
              }}
            >
              Agendar Consulta
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
