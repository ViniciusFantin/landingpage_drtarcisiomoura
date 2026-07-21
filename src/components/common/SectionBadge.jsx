import { Typography } from "@mui/material";
import { colors } from "../../theme/colors";

export default function SectionBadge({ children }) {
  return (
    <Typography
      align="center"
      sx={{
        color: colors.primary,

        fontWeight: 700,

        letterSpacing: 2,

        textTransform: "uppercase",

        fontSize: ".85rem",

        mb: 1,
      }}
    >
      {children}
    </Typography>
  );
}