import { visionPoints } from "../data/Vision";


function Vision() {
  return (
    <div className="w-full bg-primary py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm">Future Goals</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 mt-2">
            Our Vision
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-accent/50 cursor-pointer relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

              <div className="mb-6 flex-shrink-0">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <p className="text-lg text-gray-700 font-sans leading-relaxed group-hover:text-primary transition-colors duration-300 relative z-10">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vision;