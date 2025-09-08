"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

// Custom hooks for planet tracking and auto scroll
function usePlanetMouseTracking() {
  const [planetPosition, setPlanetPosition] = useState({ x: 0, y: 0, visible: false });
  const planetRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    setPlanetPosition({
      x: e.clientX,
      y: e.clientY,
      visible: true
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPlanetPosition(prev => ({
      ...prev,
      visible: false
    }));
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
      setPlanetPosition(prev => ({
        ...prev,
        visible: true
      }));
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return { planetPosition, planetRef };
}

function useAutoScrollSlider(sliderRef) {
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame;
    let scrollPos = 0;
    const speed = 1;

    const scrollButtons = () => {
      if (!slider.children.length) return;

      scrollPos += speed;
      slider.style.transform = `translateX(-${scrollPos}px)`;

      const firstButton = slider.children[0];
      const buttonWidth = firstButton.offsetWidth + 20;

      if (scrollPos >= buttonWidth) {
        slider.appendChild(firstButton);
        slider.style.transform = "translateX(0)";
        scrollPos = 0;
      }

      animationFrame = requestAnimationFrame(scrollButtons);
    };

    animationFrame = requestAnimationFrame(scrollButtons);

    return () => cancelAnimationFrame(animationFrame);
  }, [sliderRef]);
}

// Simple Button component
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-6 py-3 rounded-lg transition-brand-all bg-white text-black hover:bg-gray-200 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Simple Pbutton component
const Pbutton = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded-md transition-brand-all bg-white text-black text-sm hover:bg-gray-200 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const HeaderHero = () => {
  const sliderRef = useRef(null);
  const { planetPosition, planetRef } = usePlanetMouseTracking();

  useAutoScrollSlider(sliderRef);

  return (
    <>
      <Head>
        <title>GIXI AI Solutions | Top USA Workflow Automation & n8n Development Agency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="GIXI AI Solutions is a leading USA-based workflow automation and n8n development agency. We deliver custom automation solutions, n8n workflows, AI integrations, and process optimization for businesses looking to scale efficiently. Get a free consultation today!"
        />
        <meta
          name="keywords"
          content="Workflow automation USA, n8n development agency, process automation USA, automation consulting USA, n8n workflows USA, business automation USA, AI automation USA, workflow optimization USA, custom automation USA, no-code automation USA, API integrations USA, task automation USA, business process automation USA, automation solutions USA, n8n experts USA, workflow design USA, automation implementation USA, process improvement USA, GIXI AI Solutions"
        />
        <link rel="canonical" href="https://www.gixiai.com/" />
        <meta property="og:title" content="GIXI AI Solutions | Top USA Workflow Automation & n8n Development Agency" />
        <meta
          property="og:description"
          content="Transform your business with GIXI AI Solutions. USA's trusted workflow automation, n8n development, and AI integration agency. Custom automation solutions for your business success."
        />
        <meta property="og:image" content="https://gixiai.com/logo.png" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="author" content="GIXI AI Solutions" />
      </Head>

      <div className="relative w-full h-screen overflow-hidden bg-gray-900" style={{ marginTop: '-80px' }}>
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          style={{
            filter: 'grayscale(100%) contrast(1.3) brightness(1.1) saturate(1.2)',
            zIndex: -20
          }}
          src="/background/graphic.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        {/* Fallback background image if video doesn't load */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(/background/cover.webp)',
            zIndex: -21
          }}
        />

        {/* Background Planets for Atmosphere */}
        <div className="absolute inset-0 hidden lg:block" style={{ zIndex: -10 }}>
          {/* Static background planets */}
          <div 
            className="absolute w-20 h-20 rounded-full opacity-20"
            style={{
              top: '20%',
              left: '10%',
              background: 'radial-gradient(circle, #fcc96b 0%, #f7ae01 70%)',
              boxShadow: '0 0 40px rgba(252, 201, 107, 0.3)',
              animation: 'pulse 3s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute w-16 h-16 rounded-full opacity-15"
            style={{
              top: '60%',
              right: '15%',
              background: 'radial-gradient(circle, #ff6b6b 0%, #ee5a24 70%)',
              boxShadow: '0 0 30px rgba(255, 107, 107, 0.2)',
              animation: 'pulse 3s ease-in-out infinite 1s'
            }}
          />
          <div 
            className="absolute w-12 h-12 rounded-full opacity-10"
            style={{
              top: '80%',
              left: '20%',
              background: 'radial-gradient(circle, #70a1ff 0%, #5352ed 70%)',
              boxShadow: '0 0 25px rgba(112, 161, 255, 0.2)',
              animation: 'pulse 3s ease-in-out infinite 2s'
            }}
          /> 
          <div 
            className="absolute w-8 h-8 rounded-full opacity-25"
            style={{
              top: '30%',
              right: '30%',
              background: 'radial-gradient(circle, #ffffff 0%, #ddd 70%)',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
              animation: 'pulse 3s ease-in-out infinite 0.5s'
            }}
          />
        </div>

        {/* Hero Section */}
        <section className="flex justify-between items-center px-12 mt-10 flex-wrap h-full text-white">
          {/* Hero Text */}
          <div className="w-full lg:w-1/2 z-10">
            <h1 className="text-6xl lg:text-4xl md:text-3xl sm:text-2xl font-normal mb-4 text-white">
              Professional
              <span className="text-gray-400"> Workflow </span>
              Automation Services
            </h1>
            <p className="text-xl lg:text-base mb-8 text-gray-300">
              Sit back and relax. Let Artificial Intelligence do the hard work for you.
            </p>
            <Link href="/contact">
              <Button className="mb-8 px-10 py-3">Get Started</Button>
            </Link>
          </div>

          {/* Hero Graphic */}
          <div className="absolute top-0 right-0 w-auto h-full select-none lg:hidden" style={{ zIndex: -5, marginTop: '-10px' }}>
            <Image
              src="/svgs/test.svg"
              alt="Professional Workflow Automation Graphic by GIXI AI Solutions"
              className="mt-5 h-full w-full object-contain"
              width={500}
              height={500}
              priority
            />
          </div>

          {/* Floating Card */}
          <div className="absolute top-1/2 right-1/4 flex flex-col items-end lg:hidden" style={{ zIndex: 10 }}>
            <div 
              className="text-center bg-gray-900 rounded-xl px-6 py-6 w-64"
              style={{
                textShadow: '0 0 2px rgba(255, 255, 255, 0.3), 0 0 10px rgba(255, 255, 255, 0.4)',
                boxShadow: 'rgba(134, 134, 134, 0.08) 0px 2px 0px 0px inset',
                animation: 'float 3s ease-in-out infinite'
              }}
            >
              <p className="text-xl font-medium text-white mb-2">
                &ldquo;Working with Gixi was a Blessing!&rdquo;
              </p>
              <p className="text-base text-gray-300">- Joe Parry</p>
            </div>
            <div className="w-8 h-8 transform" style={{ marginRight: '-32px', transform: 'rotate(110deg)' }}>
              <Image
                src="/svgs/floating.svg"
                alt="Client Testimonial Icon for GIXI AI Solutions"
                className="w-full h-full block"
                width={32}
                height={32}
              />
            </div>
          </div>

          {/* Planet Element - Following Mouse */}
          <div 
            ref={planetRef}
            className={`planet fixed w-32 h-32 rounded-full pointer-events-none transition-opacity duration-300 ${
              planetPosition.visible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${planetPosition.x - 64}px`,
              top: `${planetPosition.y - 64}px`,
              zIndex: 50,
              background: `linear-gradient(180deg,
                #fcc96b 0%,
                #fcc96b 15%,
                #f7ae01 15%,
                #f7ae01 19%,
                #fcc96b 19%,
                #fcc96b 22%,
                #f7ae01 22%,
                #f7ae01 28%,
                #fcc96b 28%,
                #fcc96b 31%,
                #fcc96b 33%,
                #fcc96b 36%,
                #f7ae01 36%,
                #f7ae01 48%,
                #fcc96b 48%,
                #fcc96b 55%,
                #f7ae01 55%,
                #f7ae01 66%,
                #fcc96b 66%,
                #fcc96b 70%,
                #f7ae01 70%,
                #f7ae01 73%,
                #fcc96b 73%,
                #fcc96b 82%,
                #f7ae01 82%,
                #c7ba9d 86%,
                #fcc96b 86%)`,
              boxShadow: `inset 0 0 25px rgba(0, 0, 0, 0.25),
                inset 8px -4px 6px rgba(199, 128, 0, 0.5),
                inset -8px 4px 8px rgba(255, 235, 199, 0.5), 
                inset 20px -5px 12px #f7ae01,
                0 0 100px #ffffff59`,
              transform: 'rotateZ(-15deg)'
            }}
          />
        </section>

        {/* Services Button Container */}
        <div className="absolute bottom-0 left-0 right-0 md:relative md:bottom-auto" style={{ marginTop: '-80px', marginBottom: '0' }}>
          <div className="overflow-hidden py-4">
            <div className="flex space-x-5" ref={sliderRef} style={{ transform: 'translateX(0px)' }}>
              {[
                "n8n Development",
                "Workflow Automation", 
                "API Integrations",
                "Process Optimization",
                "AI Automation",
                "Custom Workflows",
                "Data Processing Automation",
                "Task Automation",
                "Business Intelligence",
                "CRM Automation",
                "Email Automation",
                "Report Generation",
                "System Integration",
                "Automation Consulting",
                "Webhook Setup",
                "Automation Training"
              ].map((service, index) => (
                <div key={index} className="flex-shrink-0">
                  <Link href="/contact">
                    <Pbutton className="whitespace-nowrap">
                      {service}
                    </Pbutton>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(-50%) rotate(-10deg);
          }
          50% {
            transform: translateY(-60%) rotate(-10deg);
          }
          100% {
            transform: translateY(-50%) rotate(-10deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }

        .planet::before {
          position: absolute;
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border: 16px solid #e1a519;
          border-top-width: 0;
          border-radius: 50%;
          box-shadow: 0 -2px 0 #c18620;
          animation: rings1 0.8s infinite linear;
        }

        .planet::after {
          position: absolute;
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border: 8px solid #d48b0c;
          border-top-width: 0;
          border-radius: 50%;
          box-shadow: 0 -2px 0 #b99309;
          animation: rings2 0.8s infinite linear;
        }

        @keyframes rings1 {
          0% {
            transform: rotateX(65deg) rotateZ(0deg) scale(1.75);
          }
          100% {
            transform: rotateX(65deg) rotateZ(360deg) scale(1.75);
          }
        }

        @keyframes rings2 {
          0% {
            transform: rotateX(65deg) rotateZ(0deg) scale(1.7);
          }
          100% {
            transform: rotateX(65deg) rotateZ(-360deg) scale(1.7);
          }
        }

        @media (max-width: 768px) {
          section {
            margin-top: 100px !important;
            flex-direction: column;
            text-align: center;
            height: auto !important;
            padding: 30px 0 0 0;
          }
          
          .planet {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderHero;
