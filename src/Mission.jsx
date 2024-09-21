/* eslint-disable react/prop-types */
function Mission({ title, description }) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
        <p className="text-base text-gray-700">{description}</p>
      </div>
    );
  }
  
  export default Mission;
  