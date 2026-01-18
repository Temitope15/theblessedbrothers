// import HeroSection from "./Archive/HeroSection";
import HeroSlideshow from "./HeroSlideShow";
import Navbar from "./components/Navbar";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Team from "./Team";
import { slides } from "./data/slidesData";
import Members from "./Members";
import Footer from "./components/Footer";
import ContactForm from "./ContactForm";
// import JoinUsForm from "./Archive/JoinUsForm"; - this is a later feature, to enable people to join the blessedbrothers

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      {/* A previous version of the hero */}
      {/* <HeroSection
        title="Welcome to The Blessed Brothers"
        subtitle="Empowering a generation to make an impact."
        imageUrl=""
        buttonLabel="Join Us"
        buttonLink="#contact"
      /> */}

      {/* current version of the hero */}
      <HeroSlideshow slides={slides} />
      <AboutUs />
      <Services />
      <Team />
      <Members />
      <ContactForm />
      {/* <JoinUsForm/> */}
      <Footer />
    </div>
  );
}

export default App;
