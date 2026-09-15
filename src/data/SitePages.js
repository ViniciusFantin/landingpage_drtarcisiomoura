import { Box } from "@mui/material";

import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import AreasSection from "../components/AreasSection";
import DifferentialsSection from "../components/DifferentialsSection";
import ContentSection from "../components/ContentSection";
import FAQSection from "../components/FAQSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import SiteMapSection from "../components/SiteMapSection";

export default function SitePages() {
  return (
    <Box
      sx={{
        pt: {
          xs: "76px",
          sm: "82px",
          md: "90px",
        },
      }}
    >
      {/* HERO */}
      <IntroSection />

      {/* SOBRE */}
      <AboutSection />

      {/* ÁREAS DE ATUAÇÃO */}
      <AreasSection />

      {/* DIFERENCIAIS */}
      <DifferentialsSection />

      {/* CONTEÚDOS */}
      <ContentSection />

      {/* FAQ */}
      <FAQSection />

      {/* DEPOIMENTOS */}
      <TestimonialsSection />

      {/* CONTATO */}
      <ContactSection />

      {/* MAPA DO SITE */}
      <SiteMapSection />
    </Box>
  );
}