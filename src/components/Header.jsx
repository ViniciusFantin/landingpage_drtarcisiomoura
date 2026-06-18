// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Typography,
//   Box,
//   Container,
// } from '@mui/material';

// const menuItems = [
//   'Sobre',
//   'Especialidades',
//   'Diferenciais',
//   'Depoimentos',
//   'Contato',
// ];

// export default function Header() {
//   const scrollToSection = (id) => {
//     document
//       .getElementById(id)
//       ?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <AppBar
//       position="fixed"
//       color="inherit"
//       elevation={1}
//     >
//       <Container maxWidth="xl">
//         <Toolbar>
//           <Typography
//             variant="h6"
//             sx={{ flexGrow: 1 }}
//           >
//             Dr. Nome Sobrenome
//           </Typography>

//           <Box
//             sx={{
//               display: {
//                 xs: 'none',
//                 md: 'flex',
//               },
//               gap: 2,
//             }}
//           >
//             {menuItems.map((item) => (
//               <Button
//                 key={item}
//                 onClick={() =>
//                   scrollToSection(item.toLowerCase())
//                 }
//               >
//                 {item}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Container,
} from '@mui/material';

const menuItems = [
  {
    label: 'Sobre',
    id: 'sobre',
  },
  {
    label: 'Especialidades',
    id: 'especialidades',
  },
  {
    label: 'Diferenciais',
    id: 'diferenciais',
  },
  {
    label: 'O que resolvo',
    id: 'o-que-resolvo',
  },
  {
    label: 'Avaliações',
    id: 'avaliacoes',
  },
  {
    label: 'Contato',
    id: 'contato',
  },
];

export default function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={1}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            Dr. Nome Sobrenome
          </Typography>

          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
              gap: 2,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.id}
                onClick={() =>
                  scrollToSection(item.id)
                }
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}