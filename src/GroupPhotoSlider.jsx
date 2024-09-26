/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { sliderData } from "./data/SliderData";

function GroupPhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const totalSlides = sliderData.length;

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    setShowDetails(false); 
  };

  // Auto transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(goToNextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // Show details after 1 second on mobile
  useEffect(() => {
    if (window.innerWidth <= 768) {
      const detailsTimer = setTimeout(() => {
        setShowDetails(true);
      }, 1000);
      return () => clearTimeout(detailsTimer);
    }
  }, [currentIndex]);

  return (
    <div className="relative group w-full my-auto cursor-pointer">
      <div className="relative w-full max-h-[600px] md:h-1/2 overflow-hidden rounded-lg shadow-lg">
        <img
          src={sliderData[currentIndex].imageUrl}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out"
          onMouseEnter={() => setShowDetails(true)}
          onMouseLeave={() => setShowDetails(false)}
        />
        
        {/* Image Details (only visible when hovered on desktop, or after 1 sec on mobile) */}
        {showDetails && (
          <div className="absolute bottom-5 left-0 bg-black bg-opacity-60 text-white w-full p-4 text-center transition-opacity duration-500 md:bottom-4 md:rounded-lg md:left-1/2 md:transform md:-translate-x-1/2">
            <p>{sliderData[currentIndex].details}</p>
          </div>
        )}
      </div>

      {/* Slide Controls - Next and Previous */}
      <div
        className="absolute top-1/2 left-4 text-3xl text-white cursor-pointer z-10"
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)
        }
      >
        &#8249;
      </div>
      <div
        className="absolute top-1/2 right-4 text-3xl text-white cursor-pointer z-10"
        onClick={() => goToNextSlide()}
      >
        &#8250;
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {sliderData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-primary" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)} 
          />
        ))}
      </div>
    </div>
  );
}

export default GroupPhotoSlider;
