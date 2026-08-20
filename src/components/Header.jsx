import { useState } from "react";

import logo from "../assets/logo-sem-fundo.png";

import { WHATSAPP } from "../utils/constants";

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { colors } from "../theme/colors";

const menuItems = [
  { label: "Sobre mim", id: "sobre" },
  { label: "Áreas que atuo", id: "areas-atuo" },
  { label: "Diferenciais", id: "diferenciais" },
  { label: "Conteúdos", id: "conteudos" },
  { label: "Depoimentos", id: "depoimentos" },
  { label: "Contato", id: "contato" },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpenMenu(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(62,81,120,.88)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,.10)",
          boxShadow: "0 8px 30px rgba(0,0,0,.10)",
          zIndex: 1200,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              minHeight: {
                xs: 76,
                sm: 82,
                md: 90,
              },

              position: "relative",

              display: "flex",
              justifyContent: "center",

              px: {
                xs: 1,
                sm: 2,
                md: 3,
              },
            }}
          >
            {/* LOGO */}

            <Box
              onClick={() => scrollToSection("inicio")}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                cursor: "pointer",

                /*
                 * Reservamos espaço à direita para o menu.
                 * Assim a logo não fica por baixo do botão.
                 */
                width: {
                  xs: "calc(100% - 56px)",
                  sm: "calc(100% - 64px)",
                  md: "auto",
                },

                mr: {
                  xs: "56px",
                  sm: "64px",
                  md: 0,
                },

                transition: ".3s",

                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  height: {
                    xs: 68,
                    sm: 76,
                    md: 110,
                  },

                  width: "auto",

                  /*
                   * A logo pode ocupar praticamente toda a largura
                   * disponível no celular, sem invadir o menu.
                   */
                  maxWidth: {
                    xs: "100%",
                    sm: "100%",
                    md: "none",
                  },

                  objectFit: "contain",

                  filter: "drop-shadow(0 4px 10px rgba(0,0,0,.15))",
                }}
              />
            </Box>

            {/* MENU */}

            <IconButton
              onClick={() => setOpenMenu(true)}
              aria-label="Abrir menu"
              sx={{
                position: "absolute",

                right: {
                  xs: 4,
                  sm: 8,
                  md: 8,
                },

                top: "50%",

                transform: "translateY(-50%)",

                color: "#FFF",

                width: {
                  xs: 48,
                  sm: 52,
                  md: 56,
                },

                height: {
                  xs: 48,
                  sm: 52,
                  md: 56,
                },

                zIndex: 2,

                transition: ".3s",

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,.08)",
                },

                "& svg": {
                  fontSize: {
                    xs: 30,
                    sm: 32,
                    md: 36,
                  },
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* DRAWER */}

      <Drawer
        anchor="right"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        sx={{
          zIndex: 1300,
        }}
        PaperProps={{
          sx: {
            background: colors.background,

            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,

            width: {
              xs: "85vw",
              sm: 310,
            },

            maxWidth: 310,
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            py: 4,
          }}
        >
          {/* LOGO DO MENU */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: 170,
                maxWidth: "80%",
              }}
            />
          </Box>

          <Typography
            align="center"
            sx={{
              mb: 3,
              color: colors.textLight,
              fontSize: ".95rem",
            }}
          >
            Navegue pelas seções
          </Typography>

          <List>
            {menuItems.map((item) => (
              <ListItem disablePadding key={item.id}>
                <ListItemButton
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    py: 1.4,
                    px: 4,

                    "&:hover": {
                      backgroundColor: "rgba(62,81,120,.08)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: "1rem",
                      color: colors.text,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            <Box
              sx={{
                px: 3,
                pt: 4,
              }}
            >
              <Button
                component="a"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: colors.primary,

                  borderRadius: 30,

                  py: 1.4,

                  fontWeight: 600,

                  textTransform: "none",

                  fontSize: "1rem",

                  boxShadow: "0 10px 25px rgba(62,81,120,.25)",

                  "&:hover": {
                    backgroundColor: colors.primaryLight,
                  },
                }}
              >
                Agendar Consulta
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  );
}