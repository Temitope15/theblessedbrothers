import { MEMBERS } from "./data/MembersData";

function Members() {
  return (
    <div className="bg-surface py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary font-bold mb-4">
            The Blessed Brothers
          </h2>
          <p className="text-gray-600 font-sans max-w-2xl mx-auto text-lg">
            Meet the distinguished gentlemen driving our vision forward.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {MEMBERS.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-t-4 border-accent flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-gray-200 shrink-0">
                <img
                  src={member.memberpics}
                  alt={member.memberName}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gold Overlay on Hover */}
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 text-center flex-grow flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-primary mb-1">
                  {member.memberName}
                </h3>
                
                {/* Role / Position - Only render if it exists */}
                {member.position ? (
                  <p className="text-accent font-sans text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    {member.position}
                  </p>
                ) : (
                  // Spacer for alignment consistency (optional)
                  <div className="mb-4"></div> 
                )}

                {/* Bio / About */}
                <p className="text-gray-600 font-sans text-sm leading-relaxed mb-6 flex-grow">
                  {member.about}
                </p>

                {/* Contact Info - Only for executives with data */}
                {(member.email || member.tel) && (
                  <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-2 text-sm text-gray-500">
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 hover:text-accent transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        {member.email}
                      </a>
                    )}
                    {member.tel && (
                      <a href={`tel:${member.tel}`} className="flex items-center justify-center gap-2 hover:text-accent transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                        {member.tel}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Members;