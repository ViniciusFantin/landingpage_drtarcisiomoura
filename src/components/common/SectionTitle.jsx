import { Typography, Box } from "@mui/material";
import { colors } from "../../theme/colors";

export default function SectionTitle({
  primary,
  secondary,
  align = "center",
  mb = 2,
  gradient = false,
}) {
  return (
    <Typography
      align={align}
      sx={{
        mb,
        fontWeight: 300,
        lineHeight: 1.1,
        fontSize: {
          xs: "2.2rem",
          md: "3.4rem",
        },
      }}
    >
      <Box
        component="span"
        sx={{
          fontWeight: 700,

          ...(gradient
            ? {
                background: `linear-gradient(
                  90deg,
                  ${colors.primary} 0%,
                  ${colors.primaryLight} 100%
                )`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }
            : {
                color: colors.primary,
              }),
        }}
      >
        {primary}
      </Box>

      {secondary && (
        <>
          {" "}
          <Box
            component="span"
            sx={{
              ...(gradient
                ? {
                    background: `linear-gradient(
                      90deg,
                      ${colors.primary} 0%,
                      ${colors.primaryLight} 100%
                    )`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                    fontWeight: 300,
                  }
                : {
                    color: colors.primaryLight,
                    fontWeight: 300,
                  }),
            }}
          >
            {secondary}
          </Box>
        </>
      )}
    </Typography>
  );
}