import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import "./HeaderHero.css";
import { Link } from "react-router-dom";
import graphic from "../../assets/test.svg";
import Button from "../Other/button";
import floating from "../../assets/floating.svg";
import Pbutton from "../Other/Pbutton.jsx";
import bgVideo from "../../assets/graphic.webm";
import { usePlanetMouseTracking, useAutoScrollSlider } from "./headerLogic";

const HeaderHero = () => {
  const sliderRef = useRef(null);

  usePlanetMouseTracking();
  useAutoScrollSlider(sliderRef);

  return (
    <>
      <Helmet>
        <title>GIXI AI Solutions | Top USA Web & AI Development Agency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta
          name="description"
          content="GIXI AI Solutions is a leading USA-based web development and AI agency. We deliver high-converting websites, SEO, branding, and AI-driven solutions for businesses looking to grow online. Get a free consultation today!"
        />
        <meta
          name="keywords"
          content="Web development USA, AI development agency, React development USA, web design company USA, SEO services USA, digital marketing USA, e-commerce development USA, custom website USA, app development USA, UI/UX design USA, branding agency USA, content writing USA, social media marketing USA, cloud hosting USA, IT consulting USA, cybersecurity USA, top web agency USA, best web developers USA, hire web developer USA, GIXI AI Solutions"
        />
        <link rel="canonical" href="https://gixiai.com/" />
        <meta property="og:title" content="GIXI AI Solutions | Top USA Web & AI Development Agency" />
        <meta
          property="og:description"
          content="Grow your business with GIXI AI Solutions. USA's trusted web development, SEO, and AI agency. Modern websites, branding, and digital marketing for your success."
        />
        <meta property="og:image" content="https://gixiai.com/logo.png" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="author" content="GIXI AI Solutions" />
      </Helmet>

      <div className="header-hero-wrapper">
        <video
          className="header-hero-bg-video"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/cover.webp"
        />
        <section className="hero">
          <div className="hero-text">
            <h1>
              Professional
              <span className="webSpan"> Web </span>Development Services
            </h1>
            <p>
              Relax while we supercharge your online presence with guaranteed
              results!
            </p>
            <Link to="/contact">
              <Button className="get-started-button">Get Started</Button>
            </Link>
          </div>
          <div className="hero-graphic">
            <img
              src={graphic}
              alt="Professional Web Development Graphic by GIXI AI Solutions"
            />
          </div>

          {/* Floating Card */}
          <div className="floating-card">
            <div className="floating-card-content">
              <p className="floating-card-quote">
                "Working with Gixi was a Blessing!"
              </p>
              <p className="floating-card-author">- Joe Parry</p>
            </div>
            <div className="floating-card-icon">
              <img
                src={floating}
                alt="Client Testimonial Icon for GIXI AI Solutions"
              />
            </div>
          </div>

          {/* Planet Element */}
          <div className="planet"></div>
        </section>
        <div className="services-button-container head-ser-con">
          <div className="Pbutton-slider-right" ref={sliderRef}>
            <div>
              <Link to="/contact">
                <Pbutton className="service-btn-head">Graphic Design</Pbutton>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <Pbutton className="service-btn-head">SEO Optimization</Pbutton>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <Pbutton className="service-btn-head">Web Development</Pbutton>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <Pbutton className="service-btn-head">App Development</Pbutton>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <Pbutton className="service-btn-head">UI/UX Design</Pbutton>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <Pbutton className="service-btn-head">Content Writing</Pbutton>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <Pbutton className="service-btn-head">
                  Social Media Marketing
                </Pbutton>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <Pbutton className="service-btn-head">Brand Strategy</Pbutton>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <Pbutton className="service-btn-head">E-Commerce Solutions</Pbutton>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <Pbutton className="service-btn-head">Cloud Hosting</Pbutton>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <Pbutton className="service-btn-head">IT Consulting</Pbutton>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <Pbutton className="service-btn-head">
                  Maintenance & Support
                </Pbutton>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <Pbutton className="service-btn-head">Digital Advertising</Pbutton>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <Pbutton className="service-btn-head">
                  Analytics & Reporting
                </Pbutton>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <Pbutton className="service-btn-head">Custom Integrations</Pbutton>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <Pbutton className="service-btn-head">Cybersecurity</Pbutton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderHero;
