import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/homePage/Home.jsx";
import Features from "./components/Pages/homePage/Features";

import Testimonials from "./components/Pages/homePage/Testimonials";
import Contact from "./components/Pages/homePage/Contact";
import Footer from "./components/Footer";
import Innerpage from "./components/Pages/Innerpage/Innerpage.jsx";
import Partners from "./components/Pages/homePage/Partners.jsx";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
            <Features />
            <Partners />
            <Testimonials />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route path="/innerpage" element={<Innerpage />} />
    </Routes>
  );
}
