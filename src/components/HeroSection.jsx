import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
} from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: '2.5rem',
                  md: '4rem',
                },
              }}
            >
              Clínica Médica Humanizada
            </Typography>

            <Typography
              sx={{
                mt: 3,
                mb: 4,
                color: 'text.secondary',
              }}
            >
              Atendimento personalizado,
              diagnóstico preciso e cuidado
              integral para sua saúde.
            </Typography>

            <Button
              size="large"
              variant="contained"
            >
              Agendar Consulta
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="/doctor.png"
              alt="Médico"
              sx={{
                width: '100%',
                borderRadius: 4,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}