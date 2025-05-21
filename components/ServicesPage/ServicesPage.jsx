import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./ServicesPage.css";
import Pbutton from "../Other/Pbutton";
import Button from "../Other/button";
import bgg from "../../assets/bgg.webp";
import p2 from "../../assets/project2.webp";
import p3 from "../../assets/project3.webp";
import p4 from "../../assets/project4.webp";
import p5 from "../../assets/project5.webp";
import p6 from "../../assets/project6.webp";
import test1 from "../../assets/cover.webp";
import { LayoutGrid, Paintbrush, FileImage } from "lucide-react";
import { useAutoScrollSlider } from "../saif_Header/headerLogic";
import { usePlanetMouseTracking } from "../saif_Header/headerLogic";

const ServicesPage = () => {
  const sliderRef = useRef(null);

  usePlanetMouseTracking();

  useAutoScrollSlider(sliderRef);
  return (
    <>
      <Helmet>
        <title>Web & AI Development Services USA | GIXI AI Solutions</title>
        <meta
          name="description"
          content="Top-rated web development, AI solutions, and digital services for businesses in the USA. GIXI AI Solutions delivers high-converting websites, branding, and automation to help you grow fast. Get a free quote today!"
        />
        <meta
          name="keywords"
          content="web development USA, AI solutions USA, web design agency, software development, branding, automation, digital marketing, GIXI AI Solutions, hire web developer USA, best AI agency USA"
        />
        <link rel="canonical" href="https://gixiai.com/services" />
        <meta
          property="og:title"
          content="Web & AI Development Services USA | GIXI AI Solutions"
        />
        <meta
          property="og:description"
          content="Grow your business with expert web development, AI, and branding services from GIXI AI Solutions. Serving clients across the USA."
        />
        <meta property="og:image" content="https://gixiai.com/logo.png" />
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
                <Link to="/contact">
                  <Pbutton>Our Services</Pbutton>
                </Link>
              </div>
              <h1 className="services-title">
                <span className="servicesSpan">Development </span>Services
              </h1>
              <p className="services-subtitle">
                Explore a Suite of Design and Development Services, to elevate
                your brand
              </p>
            </div>
            <Link to="/contact">
              <Button className="sec4-inner-b">Get Started</Button>
            </Link>
            <img
              className="ser-graphic"
              src={test1}
              alt=""
            />
            {/* Planet Element */}
          <div className="planet"></div>
          </section>

          {/* Grid Section */}
          <section className="services-grid-container">
            <div className="services-grid">
              {/* Website Design Card */}
              <div className="services-card website-card">
                <div className="services-card-header">
                  <LayoutGrid className="icon" />
                  <h2 className="services-card-title">Website Design</h2>
                </div>
                <p className="services-card-description">
                  Designing breathtaking, user-centric websites that boost
                  engagement, conversions, and growth, perfectly aligned with
                  your brand.
                </p>
                <div className="services-card-image-container">
                  <img
                    src={bgg}
                    alt="Modern website design example by GIXI AI Solutions"
                    className="services-card-image"
                    loading="lazy"
                    width="320"
                    height="200"
                  />
                </div>
              </div>

              {/* Logo Design Card */}
              <div className="services-card logo-card">
                <div className="services-card-header">
                  <Paintbrush className="icon" />
                  <h2 className="services-card-title">Logo Design</h2>
                </div>
                <p className="services-card-description">
                  Crafting distinctive, scalable, and impactful logos that
                  embody your brand's identity and vision.
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
                    <img
                      src={p2}
                      alt="Web development project 1 by GIXI AI Solutions"
                      className="services-slider-image"
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                    <img
                      src={p3}
                      alt="Web development project 2 by GIXI AI Solutions"
                      className="services-slider-image"
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                    <img
                      src={p4}
                      alt="Web development project 3 by GIXI AI Solutions"
                      className="services-slider-image"
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                    <img
                      src={p5}
                      alt="Web development project 4 by GIXI AI Solutions"
                      className="services-slider-image"
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                    <img
                      src={p6}
                      alt="Web development project 5 by GIXI AI Solutions"
                      className="services-slider-image"
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                    {/* Duplicate images for seamless looping */}
                    <img
                      src={p2}
                      alt="Web development project 1 by GIXI AI Solutions"
                      className="services-slider-image"
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                    <img
                      src={p3}
                      alt="Web development project 2 by GIXI AI Solutions"
                      className="services-slider-image"
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                    <img
                      src={p4}
                      alt="Web development project 3 by GIXI AI Solutions"
                      className="services-slider-image"
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                    <img
                      src={p5}
                      alt="Web development project 4 by GIXI AI Solutions"
                      className="services-slider-image"
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                    <img
                      src={p6}
                      alt="Web development project 5 by GIXI AI Solutions"
                      className="services-slider-image"
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                    {/* Duplicate images for seamless looping */}
                    <img
                      src={p2}
                      alt="Web development project 1 by GIXI AI Solutions"
                      className="services-slider-image"
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                    <img
                      src={p3}
                      alt="Web development project 2 by GIXI AI Solutions"
                      className="services-slider-image"
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                    <img
                      src={p4}
                      alt="Web development project 3 by GIXI AI Solutions"
                      className="services-slider-image"
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                    <img
                      src={p5}
                      alt="Web development project 4 by GIXI AI Solutions"
                      className="services-slider-image"
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                    <img
                      src={p6}
                      alt="Web development project 5 by GIXI AI Solutions"
                      className="services-slider-image"
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                  </div>
                </div>
              </div>

              {/* Graphic Design Card */}
              <div className="services-card graphic-card">
                <div className="services-card-header">
                  <FileImage className="icon" />
                  <h2 className="services-card-title">Graphic Design</h2>
                </div>
                <p className="services-card-description">
                  Crafting bold, engaging, and versatile graphic designs that
                  elevate your brand and captivate your audience.
                </p>
              </div>
            </div>
          </section>

          <div className="services-button-container">
            <div className="Pbutton-slider-right" ref={sliderRef}>
              <div>
                <Link to="/contact">
                  <Pbutton>Graphic Design</Pbutton>
                </Link>
              </div>
              <div>
                <Link to="/contact">
                  <Pbutton>SEO Optimization</Pbutton>
                </Link>
              </div>
              <div>
                <Link to="/contact">
                  <Pbutton>Web Development</Pbutton>
                </Link>
              </div>
              <div>
                <Link to="/contact">
                  <Pbutton>App Development</Pbutton>
                </Link>
              </div>
              <div>
                <Link to="/contact">
                  <Pbutton>UI/UX Design</Pbutton>
                </Link>
              </div>
              <div>
                <Link to="/contact">
                  <Pbutton>Content Writing</Pbutton>
                </Link>
              </div>
              <div>
                <Link to="/contact">
                  <Pbutton>Social Media Marketing</Pbutton>
                </Link>
              </div>
              <div>
                <Link to="/contact">
                  <Pbutton>Brand Strategy</Pbutton>
                </Link>
              </div>
              <div>
                <Link to="/contact">
                  <Pbutton>E-Commerce Solutions</Pbutton>
                </Link>
              </div>
              <div>
                <Link to="/contact">
                  <Pbutton>Cloud Hosting</Pbutton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
