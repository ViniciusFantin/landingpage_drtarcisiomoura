import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import IntroSection from "./components/IntroSection";
import AreasSection from "./components/AreasSection";
import ContentSection from "./components/ContentSection";
import TestimonialsSection from "./components/TestimonialsSection";
import DifferentialsSection from "./components/DifferentialsSection";
import FAQSection from "./components/FAQSection";
import { FloatingWhatsApp } from "./components/common";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Header />

      <Box
        sx={{
          height: {
            xs: 72,
            md: 90,
          },
        }}
      />

      <IntroSection />
      <AboutSection />
      <AreasSection />
      <DifferentialsSection />
      <ContentSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />

        <FloatingWhatsApp />
    </>
  );
}

export default App;
