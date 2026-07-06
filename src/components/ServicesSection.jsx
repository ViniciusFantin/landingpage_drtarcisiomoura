import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import { colors } from "../theme/colors";

const services = [
  "Check-up",
  "Consultas Clínicas",
  "Prevenção",
  "Acompanhamento",
];

export default function ServicesSection() {
  return (
    <Box
      id="especialidades"
      sx={{
        py: 12,
        backgroundColor: colors.backgroundDark,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: colors.white,
            mb: 6,
          }}
        >
          Especialidades
        </Typography>

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid
              key={service}
              size={{
                xs: 12,
                sm: 6,
                md: 3,
              }}
            >
              <Paper
                sx={{
                  p: 4,
                  height: "100%",
                  backgroundColor: "#3B4363",
                  border: "1px solid rgba(255,255,255,.12)",
                  color: colors.white,
                  boxShadow: "none",
                  borderRadius: 4,
                  transition: ".3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    backgroundColor: colors.primary,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  align="center"
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  {service}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}