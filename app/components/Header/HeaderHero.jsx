'use client'
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import Image from "next/image";
import "./HeaderHero.css";
import Link from "next/link";
import Button from "../Other/button";
import ServiceSlider from "../ServiceSlider/ServiceSlider";
import { PATHS } from "../../constants/assetPaths";
// Background video will be referenced as a public asset

const HeaderHero = () => {
  // Services array for dynamic rendering
  const services = [
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
  ];

  // Planet mouse tracking effect - limited to hero section only
  React.useEffect(() => {
    const heroSection = document.querySelector('.header-hero-wrapper');
    const planet = document.querySelector('.planet');
    
    if (!heroSection || !planet) return;

    const handleMouseMove = (e) => {
      // Get hero section boundaries
      const heroRect = heroSection.getBoundingClientRect();
      
      // Check if mouse is within hero section
      if (e.clientX >= heroRect.left && 
          e.clientX <= heroRect.right && 
          e.clientY >= heroRect.top && 
          e.clientY <= heroRect.bottom) {
        
        // Mouse is inside hero section - show and move planet
        planet.style.left = e.clientX + 'px';
        planet.style.top = e.clientY + 'px';
        planet.style.opacity = '1';
      } else {
        // Mouse is outside hero section - hide planet
        planet.style.opacity = '0';
      }
    };

    const handleMouseLeave = () => {
      // Hide planet when mouse leaves the page entirely
      planet.style.opacity = '0';
    };

    // Add event listeners to document (so we can track mouse everywhere)
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>GIXI AI Solutions | Top USA Workflow Automation & n8n Development Agency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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
        <meta property="og:image" content="https://gixiai.com/new logos/three.png" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="author" content="GIXI AI Solutions" />
      </Helmet>

      <div className="header-hero-wrapper">
        {/* Background Video */}
        <video
          className="header-hero-bg-video"
          src={PATHS.VIDEOS.BACKGROUND}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/cover.webp"
          onError={(e) => {
            console.log('Video failed to load, showing background image');
          }}
          onLoadedData={() => {
            console.log('Video loaded successfully');
          }}
        />
        <section className="hero">
          <div className="hero-text">
            <h1>
              Professional
              <span className="webSpan"> Workflow </span>Automation Services
            </h1>
            <p>
              Sit back and relax. Let Artificial Intelligence do the hard work for you.
            </p>
            <Link href="/contact">
              <Button className="get-started-button">Get Started</Button>
            </Link>
          </div>
          <div className="hero-graphic">
            <Image
              src={PATHS.ICONS.TEST}
              alt="Professional Workflow Automation Graphic by GIXI AI Solutions"
              width={400}
              height={300}
            />
          </div>

          {/* Floating Card */}
          <div className="floating-card">
            <div className="floating-card-content">
              <p className="floating-card-quote">
                &ldquo;Working with Gixi was a Blessing!&rdquo;
              </p>
              <p className="floating-card-author">- Joe Parry</p>
            </div>
            <div className="floating-card-icon">
              <Image
                src={PATHS.ICONS.FLOATING}
                alt="Client Testimonial Icon for GIXI AI Solutions"
                width={40}
                height={40}
              />
            </div>
          </div>
        </section>
        <ServiceSlider 
          services={services}
          containerClassName="head-ser-con"
          buttonClassName="service-btn-head"
          linkHref="/contact"
        />
        
        {/* Planet Element - scoped to hero section */}
        <div className="planet"></div>
      </div>
    </>
  );
};

export default HeaderHero;
