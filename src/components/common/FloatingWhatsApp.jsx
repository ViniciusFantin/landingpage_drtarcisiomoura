import { Box, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { WHATSAPP } from "../../utils/constants";

export default function FloatingWhatsApp() {
  return (
    <Tooltip title="Agende sua consulta pelo WhatsApp" placement="left" arrow>
      <Box
        component="a"
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        sx={{
          position: "fixed",

          right: {
            xs: 18,
            md: 28,
          },

          bottom: {
            xs: 18,
            md: 28,
          },

          width: {
            xs: 62,
            md: 68,
          },

          height: {
            xs: 62,
            md: 68,
          },

          borderRadius: "50%",

          background:
            "linear-gradient(90deg, #25D366 0%, #1EBE5D 100%)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          color: "#fff",

          textDecoration: "none",

          boxShadow: "0 18px 45px rgba(37,211,102,.38)",

          zIndex: 9999,

          transition: ".3s ease",

          animation: "whatsappPulse 2.5s infinite",

          "&:hover": {
            transform: "translateY(-4px) scale(1.08)",
            boxShadow: "0 24px 55px rgba(37,211,102,.5)",
          },

          "@keyframes whatsappPulse": {
            "0%": {
              boxShadow: "0 0 0 0 rgba(37,211,102,.45)",
            },

            "70%": {
              boxShadow: "0 0 0 18px rgba(37,211,102,0)",
            },

            "100%": {
              boxShadow: "0 0 0 0 rgba(37,211,102,0)",
            },
          },
        }}
      >
        <WhatsAppIcon
          sx={{
            fontSize: {
              xs: 36,
              md: 40,
            },
          }}
        />
      </Box>
    </Tooltip>
  );
}