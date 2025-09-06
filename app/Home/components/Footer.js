import Image from "next/image";
import Link from "next/link";
import "../../styles/color.css";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-brand-primary text-brand-primary px-4 py-16 lg:px-24 md:px-24 border-t border-brand-light">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="flex-1">
            <div className="flex items-end text-2xl font-semibold">
              <Image src="/logo.webp" alt="GIXI AI Solutions Company Logo" width={50} height={50} />
              <p className="mb-1">
                GI<span className="text-brand-muted">XI</span>
              </p>
            </div>
            <p className="mt-4 text-base text-brand-secondary lg:text-sm md:text-xs">
              Streamlining business operations with intelligent automation, n8n workflows, and cutting-edge web development solutions.
              <br />
              <br />
              We are committed to providing reliable, scalable, and future-proof services. Partner with us to unlock new efficiencies and drive your business forward in the digital era.
            </p>
          </div>

          {/* Navigation Links */}
        <div className="flex-1">
          <h3 className="text-2xl lg:text-xl font-semibold mb-4 text-brand-primary">Quick Links</h3>
          <ul className="list-none p-0 m-0">
            <li className="mb-2 lg:mb-1">
              <Link href="/" className="text-base text-brand-secondary hover-brand-primary transition-brand">Home</Link>
            </li>
            <li className="mb-2 lg:mb-1">
              <Link href="/services" className="text-base text-brand-secondary hover-brand-primary transition-brand">Services</Link>
            </li>
            <li className="mb-2 lg:mb-1">
              <Link href="/about" className="text-base text-brand-secondary hover-brand-primary transition-brand">About</Link>
            </li>
            <li className="mb-2 lg:mb-1">
              <Link href="/contact" className="text-base text-brand-secondary hover-brand-primary transition-brand">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1">
          <h3 className="text-2xl lg:text-xl font-semibold mb-4 text-brand-primary">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="inline-flex justify-center items-center w-[30px] h-[30px] lg:w-5 lg:h-5 md:w-5 md:h-5 rounded-full text-brand-primary text-xl hover:border-2 hover:border-white hover:text-black transition-brand-all">
              <Image src="/svgs/facebook.svg" alt="Follow GIXI AI Solutions automation and n8n development on Facebook" width={20} height={20} className="lg:w-4 lg:h-4 md:w-4 md:h-4" />
            </Link>
            <Link href="#" className="inline-flex justify-center items-center w-[30px] h-[30px] lg:w-5 lg:h-5 md:w-5 md:h-5 rounded-full text-brand-primary text-xl hover:border-2 hover:border-white hover:text-black transition-brand-all">
              <Image src="/svgs/twitter.svg" alt="Follow GIXI AI Solutions workflow automation services on Twitter" width={20} height={20} className="lg:w-4 lg:h-4 md:w-4 md:h-4" />
            </Link>
            <Link href="#" className="inline-flex justify-center items-center w-[30px] h-[30px] lg:w-5 lg:h-5 md:w-5 md:h-5 rounded-full text-brand-primary text-xl hover:border-2 hover:border-white hover:text-black transition-brand-all">
              <Image src="/svgs/instagram.svg" alt="Follow GIXI AI Solutions business automation on Instagram" width={20} height={20} className="lg:w-4 lg:h-4 md:w-4 md:h-4" />
            </Link>
            <Link href="#" className="inline-flex justify-center items-center w-[30px] h-[30px] lg:w-5 lg:h-5 md:w-5 md:h-5 rounded-full text-brand-primary text-xl hover:border-2 hover:border-white hover:text-black transition-brand-all">
              <Image src="/svgs/dribble.svg" alt="Follow GIXI AI Solutions automation portfolio on Dribbble" width={20} height={20} className="lg:w-4 lg:h-4 md:w-4 md:h-4" />
            </Link>
          </div>

          <h3 className="mt-5 text-2xl lg:text-xl font-semibold mb-4 text-brand-primary">Why Choose us?</h3>
          <p className="text-base lg:text-sm md:text-xs text-brand-secondary">
            Expert n8n developers, workflow automation specialists, API integrations, business process optimization, custom automation solutions, web development, and digital transformation since 2008. We boost productivity and streamline operations.</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-right lg:text-center md:text-center mt-8 text-sm text-brand-muted">
        <p>&copy; 2008 GIXI AI Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

