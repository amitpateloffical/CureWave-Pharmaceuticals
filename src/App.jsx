import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feature from "./pages/Feature";
import Header from "./components/Header";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import BusinessAreas from "./pages/Business Areas/BusinessAreas";
import IndiaBranded from "./pages/Business Areas/IndiaBranded";
import EmergingMarkets from "./pages/Business Areas/EmergingMarkets";
import UsaGenerics from "./pages/Business Areas/UsaGenerics";
import Manufacturing from "./pages/Manufacturing";
import AfricaInstitution from "./pages/Business Areas/AfricaInstitution";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const preventRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", preventRightClick);

    return () => {
      document.removeEventListener("contextmenu", preventRightClick);
    };
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/businessareas' element={<BusinessAreas />} />
          <Route path='/indiabranded' element={<IndiaBranded />} />
          <Route path='/emergingmarkets' element={<EmergingMarkets />} />
          <Route path='/usgenerics' element={<UsaGenerics />} />
          <Route path='/manufacturing' element={<Manufacturing />} />
          <Route path='/africainstitution' element={<AfricaInstitution />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
