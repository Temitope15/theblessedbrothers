import { links } from "../data/FooterLinks";

const date = new Date();

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Branding */}
        <div className="flex justify-center md:justify-start">
          <h2 className="text-2xl font-bold">The Blessed Brothers</h2>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gray-400 flex items-center space-x-2"
            >
              {link.icon && <link.icon className="w-5 h-5" />}{" "}
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>
          &copy; {date.getFullYear()} The Blessed Brothers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
