import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

import { WHATSAPP } from "../utils/constants";
import { colors } from "../theme/colors";
import {
  sectionBadgeStyle,
  sectionTitleStyle,
  sectionHighlightStyle,
} from "../theme/sectionStyles";

export default function ContactSection() {
  return (
    <Box
      id="contato"
      sx={{
        py: 12,
        background: colors.background,
      }}
    >
      <Container maxWidth="lg">
        {/* TÍTULO */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Typography sx={sectionBadgeStyle}>
            Localização
          </Typography>
        </Box>

        <Typography
          sx={{
            ...sectionTitleStyle,
            mb: 2,
          }}
        >
          Nosso{" "}
          <Box
            component="span"
            sx={sectionHighlightStyle}
          >
            consultório
          </Box>
        </Typography>

        <Typography
          align="center"
          sx={{
            color: colors.textLight,
            maxWidth: 650,
            mx: "auto",
            mb: 7,
          }}
        >
          Atendimento em ambiente confortável, moderno e preparado para oferecer
          a melhor experiência aos pacientes.
        </Typography>

        <Grid container spacing={5}>
          {/* COLUNA ESQUERDA */}

          <Grid size={{ xs: 12, md: 5 }}>
            {/* ENDEREÇO */}

            <Paper
              elevation={0}
              sx={{
                p: 4,
                mb: 3,
                borderRadius: 5,
                border: `1px solid ${colors.border}`,
              }}
            >
              <Box
                sx={{
                  width: 54,
                  height: 54,
                  borderRadius: 3,
                  background: `linear-gradient(135deg,
                    ${colors.primary},
                    ${colors.primaryLight})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFF",
                  mb: 3,
                }}
              >
                <LocationOnOutlinedIcon />
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Endereço
              </Typography>

              <Typography
                sx={{
                  color: colors.textLight,
                  lineHeight: 1.8,
                }}
              >
                R. Apucarana, 272
                <br />
                Tatuapé
                <br />
                São Paulo - SP
                <br />
                CEP 03333-000
              </Typography>

              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  gap: 3,
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  component="a"
                  href="https://maps.google.com/?q=R.+Apucarana,+272,+Tatuapé,+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: colors.primary,
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: ".3s",

                    "&:hover": {
                      color: colors.primaryLight,
                      textDecoration: "underline",
                    },
                  }}
                >
                  📍 Google Maps
                </Typography>

                <Typography
                  component="a"
                  href="https://waze.com/ul?q=R.+Apucarana,+272,+Tatuapé,+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: colors.primary,
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: ".3s",

                    "&:hover": {
                      color: colors.primaryLight,
                      textDecoration: "underline",
                    },
                  }}
                >
                  🚗 Waze
                </Typography>
              </Box>
            </Paper>

            {/* CONTATO */}

            <Paper
              elevation={0}
              sx={{
                p: 4,
                mb: 3,
                borderRadius: 5,
                border: `1px solid ${colors.border}`,
              }}
            >
              <Box
                sx={{
                  width: 54,
                  height: 54,
                  borderRadius: 3,
                  background: `linear-gradient(135deg,
                    ${colors.primary},
                    ${colors.primaryLight})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFF",
                  mb: 3,
                }}
              >
                <PhoneOutlinedIcon />
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Contato
              </Typography>

              <Typography
                sx={{
                  color: colors.textLight,
                  lineHeight: 1.8,
                }}
              >
                Telefone: (11) 99869-9229
                <br />
                WhatsApp disponível
                <br />
                Atendimento personalizado
              </Typography>
            </Paper>

            {/* HORÁRIO */}

            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 5,
                border: `1px solid ${colors.border}`,
              }}
            >
              <Box
                sx={{
                  width: 54,
                  height: 54,
                  borderRadius: 3,
                  background: `linear-gradient(135deg,
                    ${colors.primary},
                    ${colors.primaryLight})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFF",
                  mb: 3,
                }}
              >
                <AccessTimeOutlinedIcon />
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Horário
              </Typography>

              <Typography
                sx={{
                  color: colors.textLight,
                  lineHeight: 1.8,
                }}
              >
                Segunda à Sexta
                <br />
                Conforme agendamento
              </Typography>
            </Paper>

            <Button
              component="a"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                mt: 4,
                px: 5,
                py: 1.6,
                borderRadius: 30,

                background: `linear-gradient(
                  135deg,
                  ${colors.primary},
                  ${colors.primaryLight}
                )`,

                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",

                boxShadow: "0 12px 30px rgba(62,81,120,.25)",

                "&:hover": {
                  transform: "translateY(-3px)",
                },
              }}
            >
              Agendar consulta
            </Button>
          </Grid>

          {/* MAPA */}

          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                overflow: "hidden",
                borderRadius: 5,
                border: `1px solid ${colors.border}`,
                height: {
                  xs: 380,
                  md: "100%",
                },
                minHeight: 580,
                boxShadow: "0 20px 50px rgba(62,81,120,.12)",
              }}
            >
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4376.941308544136!2d-46.5650347!3d-23.5407619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f4887e075ed%3A0x3aa417fadc8b56cb!2sDr%20Tarcisio%20Moura%20J%C3%BAnior!5e1!3m2!1spt-BR!2sbr!4v1784650133239!5m2!1spt-BR!2sbr"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                sx={{
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}