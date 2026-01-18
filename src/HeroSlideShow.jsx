/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

function HeroSlideshow({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold text-white">{slide.title}</h1>
            <p className="mt-4 text-lg md:text-xl text-white">{slide.subtitle}</p>
            {slide.buttonLabel && slide.buttonLink && (
              <a
                href={slide.buttonLink}
                className="mt-6 inline-block bg-accent hover:bg-secondary-dark text-white py-2 px-4 rounded-md text-sm font-medium"
              >
                {slide.buttonLabel}
              </a>
            )}
          </div>
        </div>
      ))}

      {/* Manual Controls */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default HeroSlideshow;
