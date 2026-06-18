import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

export default function ContactSection() {
  return (
    <Box
      id="contato"
      sx={{
        py: 12,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2">
          Agende sua Consulta
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Entre em contato pelo WhatsApp.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{ mt: 4 }}
        >
          WhatsApp
        </Button>
      </Container>
    </Box>
  );
}