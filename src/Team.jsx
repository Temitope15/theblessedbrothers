import { MEMBERS } from "./data/MembersData";
import { motion } from "framer-motion";

function Team() {
   return (
      <section className="py-12 bg-primary">
         <div className="container mx-auto px-4 max-w-screen-xl text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {MEMBERS.filter(member => member.position).map((member, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.2 }}
                     className="bg-white rounded-lg shadow-lg p-6 group hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                  >
                     <div className="flex flex-col items-center">
                        <motion.img
                           src={member.memberpics}
                           alt={member.memberName}
                           className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-accent"
                           whileHover={{ scale: 1.1 }}
                           transition={{ duration: 0.3 }}
                        />
                        <h3 className="text-xl font-semibold text-gray-900">{member.memberName}</h3>
                        <p className="text-accent font-medium">{member.position}</p>
                     </div>
                     <motion.div
                        className="opacity-0 group-hover:opacity-100 mt-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                     >
                        <p className="text-gray-700 mb-2">{member.about}</p>
                        <a
                           href={`mailto:${member.email}`}
                           className="text-accent hover:underline text-sm"
                        >
                           {member.email}
                        </a>
                        <a
                           href={`tel:${member.tel}`}
                           className="text-gray-400 text-sm block mt-1"
                        >
                           {member.tel}
                        </a>
                     </motion.div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Team;
