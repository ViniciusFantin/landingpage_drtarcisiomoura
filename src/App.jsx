import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContentSection from "./components/ContentSection";
import ContactSection from "./components/ContactSection";
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

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContentSection />
      <ContactSection />
    </>
  );
}

export default App;
