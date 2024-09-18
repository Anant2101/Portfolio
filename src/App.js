import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import WorkExperience from "./Components/Experience/WorkExperience";
import Skills from "./Components/Skills/Skills";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className="container">
        {/*   <Routes>
          <Route path="/hero" exact element={<Hero />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/work-experience" element={<WorkExperience />}></Route>
          <Route path="/contact" element={<ContactMe />}></Route>
        </Routes> */}
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
