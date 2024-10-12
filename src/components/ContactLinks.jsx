
import { footerContacts } from "../data/FooterLinks"; 
const ContactLinks = () => {
  return (
    <div className="mt-8 text-center text-sm text-gray-400">
      <address className="not-italic container mx-auto flex flex-col md:flex-row justify-around items-center space-y-6 md:space-x-8 md:space-y-0">
        {footerContacts.map((contact, index) => (
          <div
            key={index}
            className="address-container mb-4 bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transform md:min-w-[30%] min-w-full hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-lg font-semibold text-white mb-2">{contact.title}</h3>
            <p>
              <a
                href={contact.link}
                target={contact.isExternal ? "_blank" : "_self"}
                rel={contact.isExternal ? "noopener noreferrer" : ""}
                className="text-accent hover:text-gray-300 transition-colors duration-300"
              >
                {contact.value}
              </a>
            </p>
          </div>
        ))}
      </address>
    </div>
  );
};

export default ContactLinks;
