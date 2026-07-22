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

        color: "#fff",
        
        background: `linear-gradient(
          90deg,
          ${colors.primary} 0%,
          ${colors.primaryLight} 100%
        )`,

        boxShadow: "0 14px 32px rgba(15,76,129,.28)",

        transition:
          "transform .35s ease, box-shadow .35s ease, opacity .25s ease",

        "&:hover": {
          background: `linear-gradient(
          90deg,
          ${colors.primary} 0%,
          ${colors.primaryLight} 100%
        )`,

          transform: "translateY(-3px)",

          opacity: 0.92,

          boxShadow: "0 22px 45px rgba(15,76,129,.38)",
        },

        "&:active": {
          transform: "translateY(-1px)",
        },

        ...sx,
      }}
    >
      {children}
    </Button>
  );
}