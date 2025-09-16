import "./Footer.css";
import { PATHS } from "../../constants/assetPaths";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">
              <Image 
                src={PATHS.LOGOS.MAIN} 
                alt="GIXI AI Solutions Company Logo" 
                width={50} 
                height={50} 
                style={{ width: 'auto', height: '50px', objectFit: 'contain' }}
                unoptimized 
              />
              <p>
                GIXI<span className="footer-highlight">AI</span>
              </p>
            </div>
            <p className="footer-description">
              Streamlining business operations with intelligent automation, n8n workflows, and cutting-edge web development solutions.
              <br />
              <br />
              We are committed to providing reliable, scalable, and future-proof services. Partner with us to unlock new efficiencies and drive your business forward in the digital era.
            </p>
          </div>

          {/* Navigation Links */}
        <div className="footer-center">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-right">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-socials">
            <Link href="" className="social-icon">
              <Image src={PATHS.ICONS.FACEBOOK} alt="Follow GIXI AI Solutions automation and n8n development on Facebook" width={24} height={24} />
            </Link>
            <Link href="#" className="social-icon">
              <Image src={PATHS.ICONS.TWITTER} alt="Follow GIXI AI Solutions workflow automation services on Twitter" width={24} height={24} />
            </Link>
            <Link href="#" className="social-icon">
              <Image src={PATHS.ICONS.INSTAGRAM} alt="Follow GIXI AI Solutions business automation on Instagram" width={24} height={24} />
            </Link>
            <Link href="#" className="social-icon">
              <Image src={PATHS.ICONS.DRIBBLE} alt="Follow GIXI AI Solutions automation portfolio on Dribbble" width={24} height={24} />
            </Link>
          </div>

          <h3 style={{marginTop: "20px"}} className="footer-heading">Why Choose us?</h3>
          <p className="footer-description">
            Expert n8n developers, workflow automation specialists, API integrations, business process optimization, custom automation solutions, web development, and digital transformation since 2008. We boost productivity and streamline operations.</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2008 GIXI AI Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { PATHS } from "../../constants/assetPaths";

// const quickLinks = [
//   { name: "Home", href: "/" },
//   { name: "Services", href: "/services" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ];

// const socialLinks = [
//   { name: "Facebook", href: "#", icon: PATHS.ICONS.FACEBOOK },
//   { name: "Twitter", href: "#", icon: PATHS.ICONS.TWITTER },
//   { name: "Instagram", href: "#", icon: PATHS.ICONS.INSTAGRAM },
//   { name: "Dribbble", href: "#", icon: PATHS.ICONS.DRIBBLE },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-[#0a0a0a] text-white p-2 relative z-20 w-full">
//       {/* Main Content */}
//       <div className="w-full flex justify-center">
//         <div className="w-full max-w-[1120px] px-4 md:px-6 lg:px-8 py-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            
//             {/* Left Section - Company Info */}
//             <div className="lg:col-span-1">
//               <div className="flex items-center gap-3 mb-6">
//                 <Image
//                   src={PATHS.LOGOS.MAIN}
//                   alt="GIXI AI Solutions Company Logo"
//                   width={40}
//                   height={40}
//                   unoptimized
//                   className="w-10 h-10"
//                 />
//                 <div className="text-2xl font-bold">
//                   G<span className="text-white">IX</span><span className="text-gray-400">AI</span>
//                 </div>
//               </div>
//               <p className="text-gray-300 text-sm leading-relaxed mb-6">
//                 Streamlining business operations with intelligent automation, n8n workflows, and cutting-edge web development solutions.
//               </p>
//               <p className="text-gray-300 text-sm leading-relaxed">
//                 We are committed to providing reliable, scalable, and future-proof services. Partner with us to unlock new efficiencies and drive your business forward in the digital era.
//               </p>
//             </div>

//             {/* Center Section - Quick Links */}
//             <div className="lg:col-span-1">
//               <h3 className="text-white font-semibold mb-6 text-lg">
//                 Quick Links
//               </h3>
//               <ul className="space-y-3">
//                 {quickLinks.map((link) => (
//                   <li key={link.name}>
//                     <Link
//                       href={link.href}
//                       className="text-gray-300 hover:text-white text-sm transition-colors duration-200 block"
//                     >
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Right Section - Social & Why Choose Us */}
//             <div className="lg:col-span-1">
//               <h3 className="text-white font-semibold mb-6 text-lg">
//                 Follow Us
//               </h3>
//               <div className="flex gap-4 mb-8">
//                 {socialLinks.map((social) => (
//                   <Link
//                     key={social.name}
//                     href={social.href}
//                     className="flex justify-center items-center w-10 h-10 text-gray-400 hover:text-white transition-all duration-200 hover:bg-white/10 rounded-full"
//                     aria-label={`Follow us on ${social.name}`}
//                   >
//                     <Image
//                       src={social.icon}
//                       alt={`Follow GIXI AI Solutions on ${social.name}`}
//                       width={20}
//                       height={20}
//                       className="w-5 h-5"
//                     />
//                   </Link>
//                 ))}
//               </div>

//               <h3 className="text-white font-semibold mb-6 text-lg">
//                 Why Choose us?
//               </h3>
//               <p className="text-gray-300 text-sm leading-relaxed">
//                 Expert n8n developers, workflow automation specialists, API integrations, business process optimization, custom automation solutions, web development, and digital transformation since 2008. We boost productivity and streamline operations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Copyright - No top border */}
//       <div className="w-full flex justify-center">
//         <div className="w-full px-6 mr-2 md:px-6 lg:px-8 pb-6">
//           <div className="w-full flex justify-end">
//             <p className="text-gray-400 text-sm">
//               © 2008 GIXI AI Solutions. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }