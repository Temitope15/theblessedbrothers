// eslint-disable-next-line react/prop-types
function HeroSection({ title, subtitle, imageUrl, buttonLabel, buttonLink }) {
    return (
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Background overlay */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
          <p className="mt-4 text-lg md:text-xl">{subtitle}</p>
          {buttonLabel && buttonLink && (
            <a
              href={buttonLink}
              className="mt-6 inline-block bg-secondary hover:bg-secondary-dark text-white py-2 px-4 rounded-md text-sm font-medium"
            >
              {buttonLabel}
            </a>
          )}
        </div>
      </div>
    );
  }
  
  export default HeroSection;
  