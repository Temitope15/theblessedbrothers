import React from 'react';
import { values } from '../data/Values';

function CoreValues() {
  

  return (
    <section className="bg-primary py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">
            Our Core Values
          </h2>
          <p className="text-gray-300 font-sans max-w-2xl mx-auto text-lg">
            The principles that guide our brotherhood.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 group text-center"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 mx-auto shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                {value.title}
              </h3>
              
              <p className="text-gray-300 font-sans text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;