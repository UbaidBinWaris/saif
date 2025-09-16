'use client'
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import Link from "next/link";
import Image from "next/image";
import "./About.css";
import Pbutton from "../Other/Pbutton";
import { PATHS } from "../../constants/assetPaths";
import Button from "../Other/button";
import { FaStar, FaStarHalfAlt, FaRocket, FaBolt, FaLightbulb } from 'react-icons/fa';

const About = () => {
  // Stats data
  const heroStats = [
    { value: "100+", label: "Happy Clients" },
    { value: "$250M+", label: "Revenue Generated" },
    { value: "4.8", label: "Average Rating" }
  ];

  // Core values data
  const coreValues = [
    {
      icon: <FaRocket />,
      title: "Automation Excellence",
      description: "We thrive on creating efficient workflows and pushing the boundaries of business process automation."
    },
    {
      icon: <FaBolt />,
      title: "Workflow Optimization",
      description: "Our commitment to streamlining processes ensures that we deliver the best automation solutions for our clients."
    },
    {
      icon: <FaLightbulb />,
      title: "Process Innovation",
      description: "We believe in transforming business operations through intelligent automation and continuous improvement."
    }
  ];

  // Team stats data
  const teamStats = [
    { value: "100+", label: "Projects Completed" },
    { value: "$100M+", label: "Yearly Revenue" },
    { value: "4.8", label: "Team Rating" }
  ];

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Saifullah Shaukat",
      role: "Server Side Expert",
      image: PATHS.TEAM.SAIFULLAH,
      rating: 5.0,
      stars: 5,
      bio: "Saifullah is a talented Server Side developer with a keen eye for automation workflows. His automation solutions are always exceptional, and he delivers optimized processes on time.",
      alt: "Saifullah Shaukat Full-Stack Developer at GIXI AI Solutions"
    },
    {
      id: 2,
      name: "Safiullah Abbasi",
      role: "Workflow Designer",
      image: PATHS.TEAM.SAFIULLAH,
      rating: 4.7,
      stars: 4.5,
      bio: "Safiullah is a creative workflow designer! His automation designs are not only visually intuitive but also highly efficient. He has a unique ability to understand complex business processes.",
      alt: "Safiullah Tanveer 3D Web Specialist at GIXI AI Solutions"
    },
    {
      id: 3,
      name: "Abdullah Qureshi",
      role: "Automation Specialist",
      image: PATHS.TEAM.ABDUL,
      rating: 5.0,
      stars: 5,
      bio: "Abdullah is a master of automation! His solutions have streamlined our processes and saved us countless hours of work. He is a true asset to our team.",
      alt: "Abdullah Qureshi Automation Specialist at GIXI AI Solutions"
    },
    {
      id: 4,
      name: "Taimoor Razeeq",
      role: "API Integration Specialist",
      image: PATHS.TEAM.TAIMOOR,
      rating: 5.0,
      stars: 5,
      bio: "Taimoor is a rising star in automation! His passion for API integrations and workflow connectivity is truly inspiring. He is sure to make a significant impact in business automation.",
      alt: "Taimoor Razeeq Graphic Designer at GIXI AI Solutions"
    }
  ];

  // Helper function to render stars
  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 !== 0;
    const starElements = [];

    for (let i = 0; i < fullStars; i++) {
      starElements.push(
        <FaStar key={i} className="star-icon" />
      );
    }

    if (hasHalfStar) {
      starElements.push(
        <FaStarHalfAlt key="half" className="star-icon" />
      );
    }

    return starElements;
  };
  return (
    <>
      <Helmet>
        <title>About GIXI AI Solutions | Leading USA Automation & n8n Development Agency</title>
        <meta name="description" content="Discover GIXI AI Solutions: a top-rated USA automation and n8n development agency. Meet our expert workflow automation team, learn our mission in business process optimization, and see why US businesses trust us for innovative automation solutions." />
        <meta name="keywords" content="About GIXI AI automation, USA n8n agency, US workflow automation, American automation company, n8n development USA, automation agency United States, workflow experts, US business automation, GIXI AI Solutions team, process optimization USA, automation consulting" />
        <link rel="canonical" href="https://gixiai.com/about" />
        <meta property="og:title" content="About GIXI AI Solutions | USA Automation & n8n Experts" />
        <meta property="og:description" content="Meet the GIXI AI Solutions team—trusted by US businesses for advanced automation, n8n development, and workflow optimization services. Learn about our values, expertise, and commitment to American clients." />
        <meta property="og:image" content="https://gixiai.com/new logos/three.png" />
        <meta property="og:url" content="https://gixiai.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About GIXI AI Solutions | USA AI & Web Experts" />
        <meta name="twitter:description" content="Meet the GIXI AI Solutions team—trusted by US businesses for advanced AI, web, and automation services." />
        <meta name="twitter:image" content="https://gixiai.com/new logos/three.png" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="37.0902;-95.7129" />
        <meta name="ICBM" content="37.0902, -95.7129" />
      </Helmet>
      <section className="about-section">
        <div className="about-container">
          {/* Hero Section */}
          <div className="about-hero">
            <div className="about-hero-left">
              <div className="about-button-container">
                <Link href="/contact">
                  <Pbutton className="about-button">About Us</Pbutton>
                </Link>
              </div>
              <h1 className="about-main-heading">
                Our Dream is Global{" "}
                <span className="about-highlight">Automation</span>{" "}
                Solutions
              </h1>
              <p className="about-description">
                We are a team of passionate automation specialists committed to
                revolutionizing business processes through intelligent workflow automation and n8n development. Our mission is to provide
                innovative automation solutions that drive efficiency and growth for our
                clients.
              </p>
            </div>
            <div className="about-hero-right">
              <div className="about-stats-container">
                {heroStats.map((stat, index) => (
                  <div key={index} className="about-stat-card">
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="about-values-section">
            <div className="about-values-header">
              <h2>Our Core Values</h2>
              <p>The principles that drive our automation excellence</p>
            </div>
            <div className="about-values-grid">
              {coreValues.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="about-team-section">
            <div className="about-team-header">
              <div className="team-header-left">
                <Link href="/contact">
                  <Pbutton>Our Team</Pbutton>
                </Link>
                <h2 className="team-main-heading">
                  <span className="team-highlight">We Are</span> Family
                </h2>
                <p className="team-description">
                  Our team is a diverse group of talented automation specialists, each
                  bringing unique skills in workflow optimization and n8n development to the table. Together,
                  we create a collaborative environment that fosters automation innovation and
                  process excellence.
                </p>
                <div className="team-stats">
                  {teamStats.map((stat, index) => (
                    <div key={index} className="team-stat-item">
                      <h4>{stat.value}</h4>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <Button className="team-contact-btn">Contact Our Team</Button>
                </Link>
              </div>
            </div>

            <div className="team-members-grid">
              {teamMembers.map((member) => (
                <div key={member.id} className="team-member-card">
                  <div className="team-member-image">
                    <Image 
                      src={member.image} 
                      alt={member.alt} 
                      width={300} 
                      height={300} 
                    />
                  </div>
                  <div className="team-member-info">
                    <h4>{member.name}</h4>
                    <p className="team-member-role">{member.role}</p>
                    <div className="team-member-rating">
                      <span className="rating-score">{member.rating}</span>
                      <div className="rating-stars">
                        {renderStars(member.stars)}
                      </div>
                    </div>
                    <p className="team-member-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Background Graphic */}
        <Image
          className="about-graphic"
          src={PATHS.GRAPHICS.COVER}
          alt="Background graphic"
          width={500}
          height={400}
        />
      </section>
    </>
  );
};

export default About;
