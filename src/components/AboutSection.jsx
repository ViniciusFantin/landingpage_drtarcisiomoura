import {
  Box,
  Container,
  Typography,
} from '@mui/material';

export default function AboutSection() {
  return (
    <Box
      id="sobre"
      sx={{ py: 12 }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          gutterBottom
        >
          Sobre o Médico
        </Typography>

        <Typography>
          Texto institucional sobre a
          formação, experiência e filosofia
          de atendimento do profissional.
        </Typography>
      </Container>
    </Box>
  );
}