import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

const diferenciais = [
  {
    titulo: 'Atendimento Humanizado',
    descricao:
      'Cada paciente é atendido de forma individual e personalizada.',
  },
  {
    titulo: 'Diagnóstico Preciso',
    descricao:
      'Avaliação clínica detalhada para maior assertividade.',
  },
  {
    titulo: 'Acompanhamento Contínuo',
    descricao:
      'Monitoramento da evolução do tratamento.',
  },
];

const problemas = [
  'Check-up Preventivo',
  'Hipertensão',
  'Diabetes',
  'Dor de Cabeça',
  'Febre Persistente',
  'Fadiga Excessiva',
  'Problemas Gastrointestinais',
  'Avaliação Clínica Geral',
];

const avaliacoes = [
  {
    nome: 'Maria S.',
    comentario:
      'Excelente profissional. Muito atencioso e cuidadoso.',
  },
  {
    nome: 'João P.',
    comentario:
      'Consulta extremamente detalhada e esclarecedora.',
  },
  {
    nome: 'Ana C.',
    comentario:
      'Ótimo atendimento e acompanhamento.',
  },
];

export default function ContentSections() {
  return (
    <>
      {/* DIFERENCIAIS */}

      <Box
        id="diferenciais"
        sx={{
          py: 10,
          backgroundColor: '#f8fafc',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
          >
            Diferenciais
          </Typography>

          <Grid container spacing={3}>
            {diferenciais.map((item) => (
              <Grid
                item
                xs={12}
                md={4}
                key={item.titulo}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: '100%',
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                  >
                    {item.titulo}
                  </Typography>

                  <Typography>
                    {item.descricao}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* O QUE RESOLVO */}

      <Box
        id="o-que-resolvo"
        sx={{
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
          >
            O Que Posso Ajudar Você a Tratar
          </Typography>

          <Grid container spacing={3}>
            {problemas.map((problema) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={problema}
              >
                <Paper
                  elevation={1}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                  }}
                >
                  <Typography>
                    {problema}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* AVALIAÇÕES */}

      <Box
        id="avaliacoes"
        sx={{
          py: 10,
          backgroundColor: '#f8fafc',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
          >
            O Que Dizem os Pacientes
          </Typography>

          <Grid container spacing={3}>
            {avaliacoes.map((item) => (
              <Grid
                item
                xs={12}
                md={4}
                key={item.nome}
              >
                <Card>
                  <CardContent>
                    <Typography>
                      "{item.comentario}"
                    </Typography>

                    <Typography
                      sx={{
                        mt: 2,
                        fontWeight: 600,
                      }}
                    >
                      {item.nome}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}