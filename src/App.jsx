// import HeroSection from "./HeroSection";
import HeroSlideshow from "./HeroSlideShow";
import Navbar from "./navbar";
import AboutUs from "./AboutUs";
import Services from "./services";
import Team from "./Team";
import { slides } from "./data/slidesData";
import Members from "./Members";




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
    </div>
  )
}

export default App;
