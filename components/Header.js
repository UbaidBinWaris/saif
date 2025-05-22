import React from "react";

import Image from "next/image";
export const Header = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        style={{
          filter: "grayscale(100%) contrast(1.3) brightness(1.1) saturate(1.2)",
        }}
        src="./background/graphic.webm"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/cover.webp"
      />
      <section className="flex justify-between items-center h-full px-10 flex-wrap">
        <div className="max-w-[50%]">
          <h1 className="text-5xl mb-4">
            Professional
            <span className="text-gray-600"> Web </span>Development Services
          </h1>
          <p>
            Relax while we supercharge your online presence with guaranteed
            results!
          </p>

          <button className="border border-white font-bold text-white py-[6px] px-8 rounded-full mt-6 hover:bg-white hover:text-black transition duration-300 ease-in-out  ">
            <a href="/contact">Get Started</a>
          </button>
        </div>
        <div className="hero-graphic">
          {/* <Image
              src={graphic}
              alt="Professional Web Development Graphic by GIXI AI Solutions"
              layout="responsive"
              width={700}
              height={475}
            /> */}
        </div>

        <div className="floating-card">
          <div className="floating-card-content">
            <p className="floating-card-quote">
              Working with Gixi was a Blessing!
            </p>
            <p className="floating-card-author">- Joe Parry</p>
          </div>
          <div className="floating-card-icon">
            <Image
              src="/svgs/floating.svg"
              width={50}
              height={50}
              alt="Client Testimonial Icon for GIXI AI Solutions"
            />
          </div>
        </div>


        
      </section>
      
    </div>
  );
};

export default Header;
