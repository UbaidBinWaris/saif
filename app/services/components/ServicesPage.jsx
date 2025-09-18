'use client'
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import Image from "next/image";
import Link from "next/link";
import "./ServicesPage.css";
import Pbutton from "../../../components/Other/Pbutton";
import Button from "../../../components/Other/button";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { PATHS } from "../../../constants/assetPaths";
import { LayoutGrid, Paintbrush, FileImage } from "lucide-react";
import { usePlanetMouseTracking } from "../../Home/components/Header/headerLogic";

const ServicesPage = () => {
  // Services array for the slider
  const servicesPageServices = [
    "n8n Development",
    "Workflow Automation",
    "API Integration",
    "Process Optimization",
    "Custom Automation",
    "Web Development",
    "Database Integration",
    "Business Intelligence",
    "Digital Transformation",
    "Automation Consulting"
  ];

  usePlanetMouseTracking();
  return (
    <>
      <Helmet>
        <title>Automation & Workflow Services USA | GIXI AI Solutions</title>
        <meta
          name="description"
          content="Expert n8n development, workflow automation, API integrations, and web development services for businesses in the USA. GIXI AI Solutions delivers custom automation solutions, business process optimization, and scalable web applications. Get a free quote today!"
        />
        <meta
          name="keywords"
          content="n8n development USA, workflow automation USA, API development, business process automation, custom automation solutions, web development, n8n specialists, automation consulting, process optimization, digital transformation, GIXI AI Solutions"
        />
        <link rel="canonical" href="https://gixiai.com/services" />
        <meta
          property="og:title"
          content="Automation & Workflow Services USA | GIXI AI Solutions"
        />
        <meta
          property="og:description"
          content="Transform your business with expert automation services, n8n development, and workflow optimization from GIXI AI Solutions. Serving clients across the USA."
        />
        <meta property="og:image" content="https://gixiai.com/new logos/three.png" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="37.0902;-95.7129" />
      </Helmet>
      <div className="services-container">
        <div className="services-inner-container">
          {/* Hero Section */}
          <section className="services-hero-section">
            <div className="services-hero-text">
              <div>
                <Link href="/contact">
                  <Pbutton>Our Services</Pbutton>
                </Link>
              </div>
              <h1 className="services-title">
                <span className="servicesSpan">Automation </span>Services
              </h1>
              <p className="services-subtitle">
                Streamline your business operations with intelligent automation solutions and workflow optimization
              </p>
            </div>
            <Link href="/contact">
              <Button className="sec4-inner-b">Get Started</Button>
            </Link>
            <Image
              className="ser-graphic"
              src={PATHS.GRAPHICS.COVER}
              alt=""
              width={500}
              height={400}
            />
            {/* Planet Element */}
          <div className="planet"></div>
          </section>

          {/* Grid Section */}
          <section className="services-grid-container">
            <div className="services-grid">
              {/* Automation Services Card */}
              <div className="services-card website-card">
                <div className="services-card-header">
                  <LayoutGrid className="icon" />
                  <h2 className="services-card-title">Automation Services</h2>
                </div>
                <p className="services-card-description">
                  Streamlining your business processes with intelligent automation solutions that boost productivity, reduce costs, and drive growth effortlessly
                </p>
                <div className="services-card-image-container">
                  <Image
                    src={PATHS.GRAPHICS.BACKGROUND}
                    alt="Business automation solutions example by GIXI AI Solutions"
                    className="services-card-image"
                    width={320}
                    height={200}
                  />
                </div>
              </div>

              {/* Workflow Design Card */}
              <div className="services-card logo-card">
                <div className="services-card-header">
                  <Paintbrush className="icon" />
                  <h2 className="services-card-title">Workflow Design</h2>
                </div>
                <p className="services-card-description">
                  Designing efficient, intuitive workflows that optimize your operations and empower your team to achieve more with less effort
                </p>
              </div>

              {/* Web Development Card */}
              <div className="services-card development-card">
                <div className="services-card-header">
                  <LayoutGrid className="icon" />
                  <h2 className="services-card-title">Web Development</h2>
                </div>
                <p className="services-card-description">
                  Bringing ideas to life with interactive, user-centered web
                  designs that simplify complexity and elevate user experience.
                </p>
                <div className="services-slider-container">
                  <div className="services-slider">
                    <Image
                      src={PATHS.PROJECTS.PROJECT_2}
                      alt="Web development project 1 by GIXI AI Solutions"
                      className="services-slider-image"
                      
                      width={320}
                      height={200}
                    />
                    <Image
                      src={PATHS.PROJECTS.PROJECT_3}
                      alt="Web development project 2 by GIXI AI Solutions"
                      className="services-slider-image"
                      
                      width={320}
                      height={200}
                    />
                    <Image
                      src={PATHS.PROJECTS.PROJECT_4}
                      alt="Web development project 3 by GIXI AI Solutions"
                      className="services-slider-image"
                      
                      width={320}
                      height={200}
                    />
                    <Image
                      src={PATHS.PROJECTS.PROJECT_5}
                      alt="Web development project 4 by GIXI AI Solutions"
                      className="services-slider-image"
                      
                      width={320}
                      height={200}
                    />
                    <Image
                      src={PATHS.PROJECTS.PROJECT_6}
                      alt="Web development project 5 by GIXI AI Solutions"
                      className="services-slider-image"
                      
                      width={320}
                      height={200}
                    />
                    {/* Duplicate images for seamless looping */}
                    <Image
                      src={PATHS.PROJECTS.PROJECT_2}
                      alt="Web development project 1 by GIXI AI Solutions"
                      className="services-slider-image"
                      
                      width={320}
                      height={200}
                    />
                    <Image
                      src={PATHS.PROJECTS.PROJECT_3}
                      alt="Web development project 2 by GIXI AI Solutions"
                      className="services-slider-image"
                      
                      width={320}
                      height={200}
                    />
                    <Image
                      src={PATHS.PROJECTS.PROJECT_4}
                      alt="Web development project 3 by GIXI AI Solutions"
                      className="services-slider-image"
                      
                      width={320}
                      height={200}
                    />
                    <Image
                      src={PATHS.PROJECTS.PROJECT_5}
                      alt="Web development project 4 by GIXI AI Solutions"
                      className="services-slider-image"
                      
                      width={320}
                      height={200}
                    />
                    <Image
                      src={PATHS.PROJECTS.PROJECT_6}
                      alt="Web development project 5 by GIXI AI Solutions"
                      className="services-slider-image"
                      
                      width={320}
                      height={200}
                    />
                    {/* Duplicate images for seamless looping */}
                    <Image
                      src={PATHS.PROJECTS.PROJECT_2}
                      alt="Web development project 1 by GIXI AI Solutions"
                      className="services-slider-image"
                      
                      width={320}
                      height={200}
                    />
                    <Image
                      src={PATHS.PROJECTS.PROJECT_3}
                      alt="Web development project 2 by GIXI AI Solutions"
                      className="services-slider-image"
                      
                      width={320}
                      height={200}
                    />
                    <Image
                      src={PATHS.PROJECTS.PROJECT_4}
                      alt="Web development project 3 by GIXI AI Solutions"
                      className="services-slider-image"
                      
                      width={320}
                      height={200}
                    />
                    <Image
                      src={PATHS.PROJECTS.PROJECT_5}
                      alt="Web development project 4 by GIXI AI Solutions"
                      className="services-slider-image"
                      
                      width={320}
                      height={200}
                    />
                    <Image
                      src={PATHS.PROJECTS.PROJECT_6}
                      alt="Web development project 5 by GIXI AI Solutions"
                      className="services-slider-image"
                      
                      width={320}
                      height={200}
                    />
                  </div>
                </div>
              </div>

              {/* API Development Card */}
              <div className="services-card graphic-card">
                <div className="services-card-header">
                  <FileImage className="icon" />
                  <h2 className="services-card-title">API Development</h2>
                </div>
                <p className="services-card-description">
                  Crafting robust and scalable APIs that empower your applications and streamline your business processes
                </p>
              </div>
            </div>
          </section>

          <ServiceSlider 
            services={servicesPageServices}
            containerClassName="services-page-slider"
            linkHref="/contact"
          />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
