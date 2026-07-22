import { Box } from "@mui/material";
import { colors } from "../../theme/colors";

export default function SectionBadge({ children }) {
  return (
    <Box
      sx={{
        display: "inline-flex", // <-- importante
        alignItems: "center",
        justifyContent: "center",

        width: "fit-content", // <-- importante

        background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryLight})`,
        color: colors.white,

        px: 4,
        py: 1,

        borderRadius: 30,

        fontWeight: 700,
        fontSize: ".82rem",
        letterSpacing: 1.5,

        boxShadow: "0 12px 30px rgba(62,81,120,.25)",
      }}
    >
      {children}
    </Box>
  );
}