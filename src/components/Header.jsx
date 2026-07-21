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
          background: "rgba(62,81,120,.82)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,.10)",
          boxShadow: "0 8px 30px rgba(0,0,0,.10)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              minHeight: {
                xs: 80,
                md: 90,
              },

              position: "relative",

              justifyContent: "center",

              px: {
                xs: 2,
                md: 3,
              },
            }}
          >
            {/* MENU */}

            <IconButton
              onClick={() => setOpenMenu(true)}
              sx={{
                position: "absolute",

                right: {
                  xs: 4,
                  md: 8,
                },

                color: "#FFF",

                transition: ".3s",

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,.08)",
                },

                "& svg": {
                  fontSize: 34,
                },
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* LOGO */}

            <Box
              onClick={() => scrollToSection("intro")}
              sx={{
                cursor: "pointer",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                transition: ".3s",

                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  height: {
                    xs: 82,
                    md: 110,
                  },

                  width: "auto",

                  objectFit: "contain",

                  filter: "drop-shadow(0 4px 10px rgba(0,0,0,.15))",
                }}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        PaperProps={{
          sx: {
            background: colors.background,
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
          },
        }}
      >
        <Box
          sx={{
            width: 310,
            py: 4,
          }}
        >
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
