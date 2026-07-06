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
                xs: 90,
                md: 120,
              },
              py: 1,
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
                    xs: 60,
                    sm: 75,
                    md: 90,
                    lg: 100,
                  },

                  width: "auto",

                  maxWidth: {
                    xs: 180,
                    sm: 240,
                    md: 320,
                  },

                  objectFit: "contain",
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
                    fontWeight: 500,
                    textTransform: "none",
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
                  px: 3,
                  borderRadius: 30,
                  textTransform: "none",
                  backgroundColor: colors.primary,
                  "&:hover": {
                    backgroundColor: colors.primaryLight,
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
