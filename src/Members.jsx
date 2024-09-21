import Slider from "react-slick";
import { motion } from "framer-motion";
import { MEMBERS } from "./data/MembersData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Members = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-12 md:bg-gray-400 overflow-x-hidden" id="members">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Members</h2>
        <Slider {...settings} className="w-full">
          {MEMBERS.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative w-full h-100 min-h-100 flex-shrink-0 rounded-lg shadow-lg overflow-hidden "
            >
              <img
                src={member.memberpics}
                alt={member.memberName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white px-4 py-2">
                  <h3 className="text-xl font-semibold">{member.memberName}</h3>
                  <p className="mt-2">{member.about || "Learn more about this member."}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-4 inline-block bg-blue-500 px-4 py-2 rounded text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Members;
