import { motion } from "framer-motion";
import { services } from "./data/services";

function Services() {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="services">
            Our Services
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-200">
            Here&apos;s what we offer to make a difference.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center mb-4">
                <service.icon className="h-12 w-12 text-primary" /> {/* Render icon as a component */}
              </div>
              <h3 className="text-lg font-medium text-gray-900 ">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
