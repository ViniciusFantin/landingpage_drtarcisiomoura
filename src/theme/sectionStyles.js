import { colors } from "./colors";

export const sectionBadgeStyle = {
  px: 3,
  py: 0.8,
  borderRadius: 50,

  background: `linear-gradient(
    135deg,
    ${colors.primary} 0%,
    ${colors.primaryLight} 100%
  )`,

  color: "#FFF",

  fontSize: ".75rem",

  fontWeight: 700,

  letterSpacing: 2,

  textTransform: "uppercase",

  display: "inline-flex",

  alignItems: "center",

  justifyContent: "center",

  boxShadow: "0 8px 18px rgba(62,81,120,.18)",
};

export const sectionTitleStyle = {
  color: colors.text,

  fontWeight: 300,

  lineHeight: 1.15,

  fontSize: {
    xs: "2rem",
    md: "3.2rem",
  },

  textAlign: "center",
};

export const sectionHighlightStyle = {
  color: colors.primary,

  fontWeight: 700,
};