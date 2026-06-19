import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },

    secondary: {
      main: colors.primaryLight,
    },

    background: {
      default: colors.background,
      paper: colors.white,
    },

    text: {
      primary: colors.text,
      secondary: colors.textLight,
    },
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",

    h1: {
      fontWeight: 300,
    },

    h2: {
      fontWeight: 500,
    },

    h3: {
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 16,
  },
});

export default theme;