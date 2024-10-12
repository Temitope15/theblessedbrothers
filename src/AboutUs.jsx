import Mission from "./components/Mission";
import Vision from "./components/Vision";
import GroupPhotoSlider from "./components/GroupPhotoSlider";

function AboutUs() {
  return (
    <section className="bg-primary py-12" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Mission
            title="Our Mission"
            description="To empower individuals through community-driven initiatives and leadership, fostering growth and unlocking potential."
          />
          <Vision
            title="Our Vision"
            description="To create a world where everyone is able to discover their purpose, lead meaningful lives, and make a positive impact on society."
          />
        </div>

        <div className="mt-12">
          <GroupPhotoSlider />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
