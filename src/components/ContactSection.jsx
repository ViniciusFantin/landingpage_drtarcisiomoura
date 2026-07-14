import { Box, Button, Container, Typography } from "@mui/material";

import { WHATSAPP } from "../utils/constants";

import { colors } from "../theme/colors";

export default function ContactSection() {
  return (
    <Box
      id="contato"
      sx={{
        py: 12,
        backgroundColor: colors.background,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2" 
          sx={{
            color: colors.text,
            mb: 2,
          }}
        >
          Agende sua Consulta
        </Typography>

        <Typography
          sx={{
            color: colors.textLight,
            fontSize: "1.1rem",
          }}
        >
          Entre em contato pelo WhatsApp e marque seu atendimento.
        </Typography>

        <Button
          component="a"
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={{
            mt: 5,
            px: 5,
            py: 1.5,
            borderRadius: 30,
            backgroundColor: colors.primary,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: colors.primaryLight,
            },
          }}
        >
          Agendar Consulta
        </Button>
      </Container>
    </Box>
  );
}
