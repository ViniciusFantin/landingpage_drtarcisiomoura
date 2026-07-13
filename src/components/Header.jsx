import { useState } from "react";

import logo from "../assets/logo.png";

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
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { colors } from "../theme/colors";

const menuItems = [
  { label: "Sobre", id: "sobre" },
  { label: "Especialidades", id: "especialidades" },
  { label: "Diferenciais", id: "diferenciais" },
  { label: "O Que Resolvo", id: "o-que-resolvo" },
  { label: "Avaliações", id: "avaliacoes" },
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
          backgroundColor: "rgba(248,249,252,0.95)",
          backdropFilter: "blur(15px)",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              minHeight: {
                xs: 78,
                md: 92,
              },
              px: {
                xs: 0,
                md: 1,
              },
            }}
          >
            {/* LOGO */}

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  display: "block",
                  height: {
                    xs: 82,
                    sm: 88,
                    md: 105,
                    lg: 118,
                  },
                  width: "auto",
                  objectFit: "contain",
                  transition: ".3s",
                }}
              />
            </Box>

            {/* DESKTOP */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
                alignItems: "center",
                gap: 1,
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: colors.text,

                    fontWeight: 600,

                    textTransform: "none",

                    fontSize: "1.05rem",

                    px: 2,

                    letterSpacing: ".2px",

                    "&:hover": {
                      color: colors.primary,
                      background: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                component="a"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  ml: 2,

                  px: 3.5,

                  py: 1.2,

                  borderRadius: 30,

                  fontSize: "1rem",

                  fontWeight: 600,

                  textTransform: "none",

                  backgroundColor: colors.primary,

                  boxShadow: "0 8px 20px rgba(62,81,120,.25)",

                  transition: ".3s",

                  "&:hover": {
                    backgroundColor: colors.primaryLight,
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 24px rgba(62,81,120,.35)",
                  },
                }}
              >
                Agendar Consulta
              </Button>
            </Box>

            {/* MOBILE */}

            <IconButton
              onClick={() => setOpenMenu(true)}
              sx={{
                display: {
                  xs: "flex",
                  lg: "none",
                },

                color: colors.primary,

                "& svg": {
                  fontSize: 34,
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={openMenu} onClose={() => setOpenMenu(false)}>
        <Box sx={{ width: 280, pt: 4 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem disablePadding key={item.id}>
                <ListItemButton onClick={() => scrollToSection(item.id)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}

            <Box sx={{ px: 2, pt: 2 }}>
              <Button
                component="a"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: colors.primary,
                  textTransform: "none",
                  borderRadius: 20,
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
