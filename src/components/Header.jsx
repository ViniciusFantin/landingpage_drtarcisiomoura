import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { colors } from "../theme/colors";

const menuItems = [
  {
    label: "Sobre",
    id: "sobre",
  },
  {
    label: "Especialidades",
    id: "especialidades",
  },
  {
    label: "Diferenciais",
    id: "diferenciais",
  },
  {
    label: "O Que Resolvo",
    id: "o-que-resolvo",
  },
  {
    label: "Avaliações",
    id: "avaliacoes",
  },
  {
    label: "Contato",
    id: "contato",
  },
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
          backgroundColor: "rgba(247,245,243,0.95)",

          backdropFilter: "blur(12px)",

          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              minHeight: {
                xs: 72,
                md: 90,
              },
            }}
          >
            {/* LOGO + NOME */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
                gap: 2,
              }}
            >
              {/* LOGO */}

              <Box
                component="img"
                src="/logo.png"
                alt="Logo"
                sx={{
                  width: {
                    xs: 42,
                    md: 52,
                  },

                  height: {
                    xs: 42,
                    md: 52,
                  },

                  objectFit: "contain",
                }}
              />

              {/* NOME */}

              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: colors.primary,

                    fontSize: {
                      xs: "1rem",
                      md: "1.2rem",
                    },

                    lineHeight: 1.2,
                  }}
                >
                  Dr. Tarcísio Moura
                </Typography>

                <Typography
                  sx={{
                    color: colors.textLight,

                    fontSize: "0.8rem",

                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                >
                  Clínico Geral
                </Typography>
              </Box>
            </Box>

            {/* MENU DESKTOP */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },

                gap: 1,
                alignItems: "center",
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: colors.text,

                    fontWeight: 500,

                    textTransform: "none",

                    fontSize: "0.95rem",
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                variant="contained"
                sx={{
                  ml: 2,

                  backgroundColor: colors.primary,

                  color: "white",

                  borderRadius: 20,

                  px: 3,

                  textTransform: "none",

                  "&:hover": {
                    backgroundColor: colors.primaryLight,
                  },
                }}
              >
                Agendar Consulta
              </Button>
            </Box>

            {/* MENU MOBILE */}

            <IconButton
              onClick={() => setOpenMenu(true)}
              sx={{
                display: {
                  xs: "flex",
                  lg: "none",
                },

                color: colors.primary,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* DRAWER MOBILE */}

      <Drawer anchor="right" open={openMenu} onClose={() => setOpenMenu(false)}>
        <Box
          sx={{
            width: 280,
            pt: 4,
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem disablePadding key={item.id}>
                <ListItemButton onClick={() => scrollToSection(item.id)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}

            <Box
              sx={{
                px: 2,
                pt: 2,
              }}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: colors.primary,

                  textTransform: "none",
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
