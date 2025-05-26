import React from "react";
import Heading from "./Heading";
import Floatingcard  from "./Floatingcard";
// import Navbar from "./Navbar";
import { Planet, usePlanetMouseTracking } from "./Planet";

export default function HomeSection1() {
  usePlanetMouseTracking();
}

import Image from "next/image";

export const Header = () => {
  return (
    <>
    {/* <Navbar /> */}
    
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
      <section className="flex justify-between items-center h-full px-10 flex-wrap ">
        <Heading />
        <div className="hero-graphic">
          {/* <Image
              src={graphic}
              alt="Professional Web Development Graphic by GIXI AI Solutions"
              layout="responsive"
              width={700}
              height={475}
            /> */}
        </div>

        <Floatingcard />

      </section>

    <Planet />
    </div>
    </>
  );
};

export default Header;
