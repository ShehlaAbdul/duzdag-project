import MainLayout from "./Layout/MainLayout"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Services from "./Pages/Services/Services";
import Galery from "./Pages/Galery/Galery.jsx";
import ContactPage from "./Pages/ContactPage/ContactPage.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery/:type" element={<Galery />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Route>
        <Route path="*" element={ <NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
