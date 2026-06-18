import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00695C',
    },
    secondary: {
      main: '#26A69A',
    },
    background: {
      default: '#F8FAFC',
    },
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",

    h1: {
      fontWeight: 700,
    },

    h2: {
      fontWeight: 600,
    },
  },
});

export default theme;