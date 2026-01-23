import Mission from "./components/Mission";
import Vision from "./components/Vision";
import GroupPhotoSlider from "./components/GroupPhotoSlider";

function AboutUs() {
  return (
    <section className="bg-surface relative pt-24 pb-0" id="about">
      {/* Background decoration for Top Section */}
      <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-100 to-transparent"></div>
      </div>

      {/* Top Section: Header & Mission - Constrained Width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-24">
        <div className="text-center mb-16">
          {/* <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
            About Us
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 font-sans">
            Discover the heart and soul of our brotherhood, driven by purpose and unity.
          </p> */}
        </div>

        <Mission />
      </div>

      {/* Vision Section - Full Width (Handled by component) */}
      <Vision />

      {/* Bottom Section: Photo Slider - Constrained Width */}
      <div className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <GroupPhotoSlider />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
