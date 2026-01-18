import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
// Fallback data if database is empty
import { sliderData as initialData } from "../data/SliderData"; 

function GroupPhotoSlider() {
  const [slides, setSlides] = useState(initialData);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch from Firebase on load
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const dbSlides = querySnapshot.docs.map(doc => doc.data());
        if (dbSlides.length > 0) {
          setSlides(dbSlides);
        }
      } catch (error) {
        console.log("Using default local data");
      }
    };
    fetchGallery();
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4">
        {/* Header */}
        <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-serif text-primary font-bold mb-4">Our Moments</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Slider Container */}
        <div className="relative group w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Image */}
            <div 
                style={{ backgroundImage: `url(${slides[currentIndex].imageUrl})` }} 
                className="w-full h-full bg-center bg-cover bg-no-repeat duration-700 ease-in-out transition-all"
            >
                {/* Modern Gradient Overlay for Text Readability */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 md:p-12">
                    <p className="text-white text-lg md:text-2xl font-serif tracking-wide border-l-4 border-accent pl-4">
                        {slides[currentIndex].details}
                    </p>
                </div>
            </div>

            {/* Arrows (Always visible for accessibility, larger touch targets) */}
            <button 
                onClick={prevSlide}
                className="absolute top-1/2 left-5 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-accent backdrop-blur-sm text-white transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button 
                onClick={nextSlide}
                className="absolute top-1/2 right-5 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-accent backdrop-blur-sm text-white transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center py-6 gap-3">
            {slides.map((_, slideIndex) => (
                <div
                    key={slideIndex}
                    onClick={() => setCurrentIndex(slideIndex)}
                    className={`transition-all duration-300 cursor-pointer rounded-full ${
                        currentIndex === slideIndex ? "bg-primary w-8" : "bg-gray-300 w-3 hover:bg-accent"
                    } h-3`}
                ></div>
            ))}
        </div>
    </div>
  );
}

export default GroupPhotoSlider;