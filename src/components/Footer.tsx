import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: "/IOFLogo.png",
    alt: "IOF",
    title: "IOF",
    url: "/",
  },
  menuItems = [
    {
      title: "Navigation",
      links: [
        { text: "Home", url: "/" },
        { text: "About Us", url: "/about" },
        { text: "Our Service", url: "/services" },
        { text: "Contact Us", url: "/contact" },
        { text: "Career", url: "/career" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Hospital Scheduling", url: "/services/hospital" },
        { text: "Maritime Logistics", url: "/services/maritime" },
        { text: "Energy Infrastructure", url: "/services/energy" },
        { text: "Market Making", url: "/services/market" },
        { text: "Quantum Computing", url: "/services/quantum" },
      ],
    },
  ],
  copyright = `© ${new Date().getFullYear()} IOF, Inc. All rights reserved.`,
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: FooterProps) => {
  return (
    <section className="border-t border-[#a62a1e] bg-[#cc3525] text-white">
      <div className="container px-4 py-16 md:py-20">
        <footer>
          <div className="grid grid-cols-2 justify-items-center gap-8 md:gap-10 lg:grid-cols-4">
            <div className="col-span-2 mb-8 text-center lg:mb-0">
              <div className="flex items-center justify-center gap-3">
                 {logo.url.startsWith('/') ? (
                   <Link to={logo.url} className="flex items-center">
                     <img src={`${import.meta.env.BASE_URL}${logo.src.replace(/^\//,'')}`} alt={logo.alt} title={logo.title} className="h-12 md:h-14 rounded invert brightness-0" />
                   </Link>
                 ) : (
                   <a href={logo.url} className="flex items-center">
                     <img src={`${import.meta.env.BASE_URL}${logo.src.replace(/^\//,'')}`} alt={logo.alt} title={logo.title} className="h-12 md:h-14 rounded invert brightness-0" />
                   </a>
                 )}
              </div>
              <div className="mt-4 flex items-center justify-center gap-3 md:gap-4">
                <a href="#" aria-label="Twitter" className="rounded-full border border-white/20 p-2 text-white/80 hover:bg-white/15 hover:text-white">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Facebook" className="rounded-full border border-white/20 p-2 text-white/80 hover:bg-white/15 hover:text-white">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Instagram" className="rounded-full border border-white/20 p-2 text-white/80 hover:bg-white/15 hover:text-white">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" aria-label="LinkedIn" className="rounded-full border border-white/20 p-2 text-white/80 hover:bg-white/15 hover:text-white">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx} className="text-center">
                {/* heading removed per design: mirror navbar links only */}
                <ul className="text-white/80 space-y-2 md:space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-medium hover:text-white">
                      {link.url.startsWith('/') ? (
                        <Link to={link.url} className="text-[14px] md:text-[14px]">{link.text}</Link>
                      ) : (
                        <a href={link.url} className="text-[14px] md:text-[14px]">{link.text}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-white/20 pt-6 text-[12px] text-white/80 md:mt-14 md:flex-row md:pt-8 md:text-[14px]">
            <p className="order-2 text-center md:order-1">{copyright}</p>
            <ul className="order-1 flex gap-4 md:order-2">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline-offset-4 hover:text-white">
                  {link.url.startsWith('/') ? (
                    <Link to={link.url}>{link.text}</Link>
                  ) : (
                    <a href={link.url}>{link.text}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };