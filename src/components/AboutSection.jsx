import { Box, Container, Typography, Grid } from "@mui/material";

import { WHATSAPP } from "../utils/constants";

import { colors } from "../theme/colors";

import doutor1 from "../assets/doutor1.jpeg";

import { GradientButton, SectionBadge } from "./common";

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
              component="img"
              src={doutor1}
              alt="Dr. Tarcísio Moura"
              loading="lazy"
              sx={{
                width: "100%",

                height: {
                  xs: 420,
                  md: 560,
                },

                objectFit: "cover",

                borderRadius: 5,

                boxShadow: "0 20px 50px rgba(0,0,0,.12)",
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ mb: 2 }}>
              <SectionBadge>QUEM SOU EU</SectionBadge>
            </Box>

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
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              Graduado em Medicina desde 2008, com especialização em Urologia
              pelo Hospital Beneficência Portuguesa de São Paulo em 2017. Além
              da atuação clínica e cirúrgica, mantenho atualização científica
              contínua, sou membro efetivo da Sociedade Brasileira de Urologia e
              participo de programas avançados de aperfeiçoamento em Medicina
              Sexual Masculina e Saúde do Homem. Com foco na saúde integral do
              homem, tenho expertise em Medicina Sexual, Reposição Hormonal,
              Plástica Íntima Masculina, Emagrecimento e Longevidade. Ofereço
              tratamentos modernos, seguros, individualizados e baseados em
              evidências científicas.
            </Typography>

            <GradientButton
              component="a"
              href={WHATSAPP}
              target="_blank"
              sx={{ mt: 3 }}
            >
              Agenda Consulta
            </GradientButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
