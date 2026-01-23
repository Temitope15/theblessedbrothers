// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSlideshow from "./HeroSlideShow";
import Navbar from "./components/Navbar";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Team from "./Team";
import { slides } from "./data/slidesData";
import Members from "./Members";
import Footer from "./components/Footer";
import ContactForm from "./ContactForm";
import Admin from "./Admin"; // admin page
import CoreValues from "./components/CoreValues";
// Create a Layout component for the public pages
const PublicLayout = () => (
  <div className="bg-surface">
    <Navbar />
    <HeroSlideshow slides={slides} />
    <AboutUs />
    <Services />
    <Team />
    <Members />
    <CoreValues />
    <ContactForm />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* The Main Website */}
        <Route path="/" element={<PublicLayout />} />
        
        {/* The Secret Route */}
        <Route path="/admin-secret-upload" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;