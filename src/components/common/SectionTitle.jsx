import { Typography, Box } from "@mui/material";
import { colors } from "../../theme/colors";

export default function SectionTitle({
  primary,
  secondary,
  align = "center",
  mb = 2,
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
          color: colors.primary,
          fontWeight: 700,
        }}
      >
        {primary}
      </Box>{" "}
      <Box
        component="span"
        sx={{
          color: colors.primaryLight,
          fontWeight: 300,
        }}
      >
        {secondary}
      </Box>
    </Typography>
  );
}