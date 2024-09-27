// import HeroSection from "./HeroSection";
import HeroSlideshow from "./HeroSlideShow";
import Navbar from "./navbar";
import AboutUs from "./AboutUs";
import Services from "./services";
import Team from "./Team";
import { slides } from "./data/slidesData";
import Members from "./Members";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
// import JoinUsForm from "./JoinUsForm";




function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      {/* <HeroSection
        title="Welcome to The Blessed Brothers"
        subtitle="Empowering a generation to make an impact."
        imageUrl="https://example.com/your-image-url.jpg"
        buttonLabel="Join Us"
        buttonLink="#contact"
      /> */}
      <HeroSlideshow slides={slides} />
      <AboutUs />
      <Services/>
      <Team/>
      <Members/>
      <ContactForm/>
      {/* <JoinUsForm/> */}
      <Footer/>
    </div>
  )
}

export default App;
