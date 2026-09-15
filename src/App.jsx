import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import { FloatingWhatsApp } from "./components/common";

import SitePages from "./data/SitePages";
import MedicalPages from "./components/MedicalPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<SitePages />}
        />

        <Route
          path="/pagina/:slug"
          element={<MedicalPages />}
        />
      </Routes>

      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

export default App;