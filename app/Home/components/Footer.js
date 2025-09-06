"use client"; 
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-brand-primary text-brand-primary">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-16 sm:py-20 border-t border-brand-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Company Info - Takes more space */}
            <div className="lg:col-span-5">
              <div className="flex items-center mb-6">
                <Image 
                  src="/logo.webp" 
                  alt="GIXI AI Solutions Company Logo" 
                  width={50} 
                  height={50} 
                  className="mr-3"
                />
                <h2 className="text-2xl sm:text-3xl font-bold">
                  GI<span className="text-brand-muted">XI</span>
                </h2>
              </div>
              <p className="text-brand-secondary leading-relaxed text-base sm:text-lg mb-8">
                Streamlining business operations with intelligent automation, n8n workflows, and cutting-edge web development solutions.
              </p>
              <p className="text-brand-secondary leading-relaxed text-sm sm:text-base">
                We are committed to providing reliable, scalable, and future-proof services. Partner with us to unlock new efficiencies and drive your business forward in the digital era.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-3">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-brand-primary">Quick Links</h3>
              <nav>
                <ul className="space-y-4">
                  <li>
                    <Link href="/" className="text-brand-secondary hover-brand-primary transition-brand text-base sm:text-lg inline-block py-1">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-brand-secondary hover-brand-primary transition-brand text-base sm:text-lg inline-block py-1">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-brand-secondary hover-brand-primary transition-brand text-base sm:text-lg inline-block py-1">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-brand-secondary hover-brand-primary transition-brand text-base sm:text-lg inline-block py-1">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Social Media & Additional Info */}
            <div className="lg:col-span-4">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-brand-primary">Connect With Us</h3>
              
              {/* Social Media Icons */}
              <div className="flex gap-4 mb-8">
                <Link 
                  href="#" 
                  className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-brand-light text-brand-primary hover:bg-white hover:text-black transition-brand-all group"
                  aria-label="Follow us on Facebook"
                >
                  <Image 
                    src="/svgs/facebook.svg" 
                    alt="Facebook" 
                    width={24} 
                    height={24} 
                    className="w-5 h-5 sm:w-6 sm:h-6" 
                  />
                </Link>
                <Link 
                  href="#" 
                  className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-brand-light text-brand-primary hover:bg-white hover:text-black transition-brand-all group"
                  aria-label="Follow us on Twitter"
                >
                  <Image 
                    src="/svgs/twitter.svg" 
                    alt="Twitter" 
                    width={24} 
                    height={24} 
                    className="w-5 h-5 sm:w-6 sm:h-6" 
                  />
                </Link>
                <Link 
                  href="#" 
                  className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-brand-light text-brand-primary hover:bg-white hover:text-black transition-brand-all group"
                  aria-label="Follow us on Instagram"
                >
                  <Image 
                    src="/svgs/instagram.svg" 
                    alt="Instagram" 
                    width={24} 
                    height={24} 
                    className="w-5 h-5 sm:w-6 sm:h-6" 
                  />
                </Link>
                <Link 
                  href="#" 
                  className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-brand-light text-brand-primary hover:bg-white hover:text-black transition-brand-all group"
                  aria-label="Follow us on Dribbble"
                >
                  <Image 
                    src="/svgs/dribble.svg" 
                    alt="Dribbble" 
                    width={24} 
                    height={24} 
                    className="w-5 h-5 sm:w-6 sm:h-6" 
                  />
                </Link>
              </div>

              {/* Why Choose Us */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-brand-primary">Why Choose Us?</h4>
                <p className="text-brand-secondary leading-relaxed text-sm sm:text-base">
                  Expert n8n developers, workflow automation specialists, API integrations, business process optimization, and digital transformation since 2008.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black/20 border-t border-brand-light">
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-brand-muted text-sm text-center sm:text-left">
                &copy; 2008 GIXI AI Solutions. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-brand-muted hover-brand-primary transition-brand">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-brand-muted hover-brand-primary transition-brand">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="text-brand-muted hover-brand-primary transition-brand">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

