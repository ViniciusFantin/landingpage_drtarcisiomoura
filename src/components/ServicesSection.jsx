import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';

const services = [
  'Check-up',
  'Consultas Clínicas',
  'Prevenção',
  'Acompanhamento',
];

export default function ServicesSection() {
  return (
    <Box
      id="especialidades"
      sx={{ py: 12 }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
        >
          Especialidades
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{ mt: 3 }}
        >
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
                  height: '100%',
                }}
              >
                <Typography variant="h6">
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