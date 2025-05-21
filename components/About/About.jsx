import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./About.css";
import Pbutton from "../Other/Pbutton";
import man1 from "../../assets/Saifullah.webp";
import man2 from "../../assets/Safiullah.webp";
import man3 from "../../assets/abdul.jpg";
import girl1 from "../../assets/Taimoor.webp";
import star from "../../assets/star.svg";
import halfstar from "../../assets/Halfstar.svg";
import Button from "../Other/button";
import test1 from "../../assets/cover.webp";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Gixi AI Solutions | Leading USA AI & Web Development Agency</title>
        <meta name="description" content="Discover GIXI AI Solutions: a top-rated USA-focused AI and web development agency. Meet our expert team, learn our mission, and see why US businesses trust us for innovative, results-driven digital solutions." />
        <meta name="keywords" content="About GIXI AI, USA AI agency, US web development, American AI company, AI solutions USA, web agency United States, AI experts, US business technology, GIXI AI Solutions team, digital innovation USA" />
        <link rel="canonical" href="https://gixiai.com/about" />
        <meta property="og:title" content="About GIXI AI Solutions | USA AI & Web Experts" />
        <meta property="og:description" content="Meet the GIXI AI Solutions team—trusted by US businesses for advanced AI, web, and automation services. Learn about our values, expertise, and commitment to American clients." />
        <meta property="og:image" content="https://gixiai.com/logo.webp" />
        <meta property="og:url" content="https://gixiai.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About GIXI AI Solutions | USA AI & Web Experts" />
        <meta name="twitter:description" content="Meet the GIXI AI Solutions team—trusted by US businesses for advanced AI, web, and automation services." />
        <meta name="twitter:image" content="https://gixiai.com/logo.webp" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="37.0902;-95.7129" />
        <meta name="ICBM" content="37.0902, -95.7129" />
      </Helmet>
      <section className="about-section">
        <div className="about-container">
          <div className="about-first-whole">
            
            <div className="about-header-container-left">
              <div className="about-header-container-left-Span">
                <Link to="/contact">
                  <Pbutton className="about-button"> Get Started</Pbutton>
                </Link>
              </div>
              <h2 className="contact-section-heading">
                Our Dream is Global {" "}
                <span className="contact-section-subheading">
                  AI 
                </span>
                 {" "}Solutions
              </h2>
              <p className="about-section-description">
                  We are a team of passionate individuals committed to
                  revolutionizing the AI landscape. Our mission is to provide
                  innovative solutions that drive success and growth for our
                  clients.
              </p>
            </div>
            <div className="about-header-container-right">
              <div className="stats-container">
                <div className="stats-card happy-card">
                  <h2>100+</h2>
                  <p>Happy Clients</p>
                </div>
                <div className="stats-card revenue-card">
                  <h2>$250M+</h2>
                  <p>Revenue Generated</p>
                </div>
                <div className="stats-card rating-card">
                  <h2>4.8</h2>
                  <p>Rating</p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="about-content-container">
            
            
            <div className="about-values">
              <div className="value-card">
                <h2>Innovation</h2>
                <p>
                  We thrive on bringing new ideas to life and pushing the
                  boundaries of technology.
                </p>
              </div>
              <div className="value-card">
                <h2>Excellence</h2>
                <p>
                  Our commitment to quality ensures that we deliver the best
                  solutions for our clients.
                </p>
              </div>
              <div className="value-card">
                <h2>Collaboration</h2>
                <p>
                  We believe in working closely with our clients to achieve shared
                  success.
                </p>
              </div>
            </div>
          </div>

        <div className="section-four-main">
          <div className="secFour-div1">
            <div className="secFourinner-div1">
              <Link to="/contact">
                <Pbutton>Our Developers</Pbutton>
              </Link>
              <h1 className="secFour-hm">
                <span className="ClientsSpan">We Are </span>Family
              </h1>
              <p className="secFour-p">
                  Our team is a diverse group of talented individuals, each
                  bringing unique skills and perspectives to the table. Together,
                  we create a collaborative environment that fosters creativity and
                  innovation.
              </p>
            </div>
            <div className="secFourinner-div2">
              <div className="cc happyCard">
                <h2>100+</h2>
                <p>Proj Completed</p>
              </div>
              <div className="cc revenueCard">
                <h2>$100M+</h2>
                <p>Yearly Revenue</p>
              </div>
              <div className="cc ratingCard">
                <h2>4.8</h2>
                <p>Rating</p>
              </div>
            </div>
            <div className="secFourinner-div3">
              <Link to="/contact">
                <Button className="sec4-inner-b">Contact Now</Button>
              </Link>
            </div>
          </div>

          {/* ========================================================== */}
          <div className="cards-main">
            <div className="dd1 secFour-div2">
              <div className="secFour-div2-inner">
                <img src={man1} alt="Saifullah Shaukat Full-Stack Developer at GIXI AI Solutions" className="man1" loading="lazy" width="120" height="120" />
                <div className="secFour-div2-inner-text">
                  <h3>Saifullah Shaukat</h3>
                  <p>Full-Stack Dev</p>
                </div>
              </div>
              <hr />
              <div>
                <div className="secFour-div2-inner-text2">
                  <p>5.0</p>
                  <div className="stars">
                    <img src={star} alt="5-star rating for Saifullah Shaukat at GIXI AI Solutions" />
                    <img src={star} alt="5-star rating for Saifullah Shaukat at GIXI AI Solutions" />
                    <img src={star} alt="5-star rating for Saifullah Shaukat at GIXI AI Solutions" />
                    <img src={star} alt="5-star rating for Saifullah Shaukat at GIXI AI Solutions" />
                    <img src={star} alt="5-star rating for Saifullah Shaukat at GIXI AI Solutions" />
                  </div>
                </div>
                <div className="secFour-div2-inner-text3">
                  <p>
                    Saifullah is a talented developer with a keen eye for detail. His
                    work is always exceptional, and he delivers results on time.
                  </p>
                </div>
              </div>
            </div>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <div className="dd2 secFour-div2">
              <div className="secFour-div2-inner">
                <img src={man2} alt="Safiullah Tanveer 3D Web Specialist at GIXI AI Solutions" className="man1" loading="lazy" width="120" height="120" />
                <div className="secFour-div2-inner-text">
                  <h3>Safiullah Abbasi</h3>
                  <p>3D Web Specialist</p>
                </div>
              </div>
              <hr />
              <div>
                <div className="secFour-div2-inner-text2">
                  <p>4.7</p>
                  <div className="stars">
                    <img src={star} alt="4.7-star rating for Safiullah Tanveer at GIXI AI Solutions" />
                    <img src={star} alt="4.7-star rating for Safiullah Tanveer at GIXI AI Solutions" />
                    <img src={star} alt="4.7-star rating for Safiullah Tanveer at GIXI AI Solutions" />
                    <img src={star} alt="4.7-star rating for Safiullah Tanveer at GIXI AI Solutions" />
                    <img src={halfstar} alt="Half star rating for Safiullah Tanveer at GIXI AI Solutions" />
                  </div>
                </div>
                <div className="secFour-div2-inner-text3">
                  <p>
                      Safiullah is a creative genius! His designs are not only
                      visually stunning but also highly functional. He has a unique
                      ability to understand client needs.
                  </p>
                </div>
              </div>
            </div>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <div className="dd3 secFour-div2">
              <div className="secFour-div2-inner">
                <img src={man3} alt="Abdullah Qureshi Automation Specialist at GIXI AI Solutions" className="man1" loading="lazy" width="120" height="120" />
                <div className="secFour-div2-inner-text">
                  <h3>Abdullah Qureshi</h3>
                  <p>Automation Specialist</p>
                </div>
              </div>
              <hr />
              <div>
                <div className="secFour-div2-inner-text2">
                  <p>5.0</p>
                  <div className="stars">
                    <img src={star} alt="5-star rating for Abdullah Qureshi at GIXI AI Solutions" />
                    <img src={star} alt="5-star rating for Abdullah Qureshi at GIXI AI Solutions" />
                    <img src={star} alt="5-star rating for Abdullah Qureshi at GIXI AI Solutions" />
                    <img src={star} alt="5-star rating for Abdullah Qureshi at GIXI AI Solutions" />
                    <img src={star} alt="5-star rating for Abdullah Qureshi at GIXI AI Solutions" />
                  </div>
                </div>
                <div className="secFour-div2-inner-text3">
                  <p>
                      Abdullah is a master of automation! His solutions have
                      streamlined our processes and saved us countless hours of
                      work. He is a true asset to our team.
                  </p>
                </div>
              </div>
            </div>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <div style={{}} className="secFour-div2">
              <div className="secFour-div2-inner">
                <img src={girl1} alt="Taimoor Razeeq Graphic Designer at GIXI AI Solutions" className="man1" loading="lazy" width="120" height="120" />
                <div className="secFour-div2-inner-text">
                  <h3>Taimoor Razeeq</h3>
                  <p>Graphic Designer</p>
                </div>
              </div>
              <hr />
              <div>
                <div className="secFour-div2-inner-text2">
                  <p>5.0</p>
                  <div className="stars">
                    <img src={star} alt="5-star rating for Taimoor Razeeq at GIXI AI Solutions" />
                    <img src={star} alt="5-star rating for Taimoor Razeeq at GIXI AI Solutions" />
                    <img src={star} alt="5-star rating for Taimoor Razeeq at GIXI AI Solutions" />
                    <img src={star} alt="5-star rating for Taimoor Razeeq at GIXI AI Solutions" />
                    <img src={star} alt="5-star rating for Taimoor Razeeq at GIXI AI Solutions" />
                  </div>
                </div>
                <div className="secFour-div2-inner-text3">
                  <p>
                      Taimoor is a rising star in the industry! His passion for
                      technology is truly inspiring.
                      He is sure to make a significant impact in the future.
                  </p>
                </div>
              </div>
            </div>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          </div>
        </div>
          
        </div>
        <img
              className="about-graphic"
              src={test1}
              alt=""
            />
      </section>
    </>
  );
};

export default About;
