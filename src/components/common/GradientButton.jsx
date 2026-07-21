import Button from "@mui/material/Button";
import { colors } from "../../theme/colors";

export default function GradientButton({
  children,
  sx = {},
  ...props
}) {
  return (
    <Button
      variant="contained"
      {...props}
      sx={{
        px: 5,

        py: 1.5,

        borderRadius: "999px",

        textTransform: "none",

        fontWeight: 600,

        fontSize: "1rem",

        color: colors.white,

        background: `linear-gradient(
          135deg,
          ${colors.primary} 0%,
          ${colors.primaryLight} 100%
        )`,

        boxShadow: "0 15px 35px rgba(62,81,120,.25)",

        transition: ".35s",

        "&:hover": {
          transform: "translateY(-3px)",

          background: `linear-gradient(
            135deg,
            ${colors.primaryLight} 0%,
            ${colors.primary} 100%
          )`,

          boxShadow: "0 22px 45px rgba(62,81,120,.35)",
        },

        ...sx,
      }}
    >
      {children}
    </Button>
  );
}