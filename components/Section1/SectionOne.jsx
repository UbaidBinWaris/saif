import React, { useState } from "react";
import "./SectionOne.css";
import p1 from "../../assets/project1.webp";
import p2 from "../../assets/project2.webp";
import p3 from "../../assets/project3.webp";
import p4 from "../../assets/project4.webp";
import p5 from "../../assets/project5.webp";
import p6 from "../../assets/project6.webp";
import bgg from "../../assets/bgg.webp";

import { LayoutGrid, Paintbrush, FileImage } from "lucide-react";

const SectionOne = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="section-one ">
      <div className="secOne">
        <div className="grid-container">
          {/* Website Design Card */}
          
          <div
            className="design-card website-card"
            onMouseEnter={() => setHovered("website")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="card-header">
              <LayoutGrid className="icon" />
              <h2 className="card-title">Website Design</h2>
            </div>
            <p className="sec1-services-card-description">
              Designing breathtaking, user-centric websites that boost
              engagement, conversions, and growth, perfectly aligned with your
              brand
            </p>
              <div className="card-image-container">
                <img
                  src={bgg}
                  alt="Modern website design example by GIXI AI Solutions"
                  className="card-image"
                  loading="lazy"
                />
              </div>
          </div>

          <div
            className="design-card logo-card"
            onMouseEnter={() => setHovered("logo")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="card-header">
              <Paintbrush className="icon" />
              <h2 className="card-title">Logo Design</h2>
            </div>
            <p className="sec1-services-card-description">
              Crafting distinctive, scalable, and impactful logos that embody
              your brand's identity and vision
            </p>
          </div>

          <div className="design-card framer-card">
            <div className="card-header">
              <LayoutGrid className="icon" />
              <h2 className="card-title">Web Development</h2>
            </div>
            <p className="sec1-services-card-description">
              Bringing ideas to life with interactive, user-centered Web designs
              that simplify complexity and elevate user experience
            </p>
            <div className="slider-container">
              <div className="slider">
                <img
                  src={p1}
                  alt="Web development project 1 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                <img
                  src={p2}
                  alt="Web development project 2 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                <img
                  src={p3}
                  alt="Web development project 3 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                <img
                  src={p4}
                  alt="Web development project 4 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                <img
                  src={p5}
                  alt="Web development project 5 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                <img
                  src={p6}
                  alt="Web development project 6 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                {/* Duplicate images for seamless looping */}
                <img
                  src={p1}
                  alt="Web development project 1 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                <img
                  src={p2}
                  alt="Web development project 2 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                <img
                  src={p3}
                  alt="Web development project 3 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                <img
                  src={p4}
                  alt="Web development project 4 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                <img
                  src={p5}
                  alt="Web development project 5 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                <img
                  src={p6}
                  alt="Web development project 6 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                {/* Duplicate images for seamless looping */}
                <img
                  src={p1}
                  alt="Web development project 1 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                <img
                  src={p2}
                  alt="Web development project 2 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                <img
                  src={p3}
                  alt="Web development project 3 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                <img
                  src={p4}
                  alt="Web development project 4 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                <img
                  src={p5}
                  alt="Web development project 5 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
                <img
                  src={p6}
                  alt="Web development project 6 by GIXI AI Solutions"
                  className="slider-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Graphic Design Card */}
          <div
            className="design-card graphic-card"
            onMouseEnter={() => setHovered("graphic")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="card-header">
              <FileImage className="icon" />
              <h2 className="card-title">Graphic Design</h2>
            </div>
            <p className="sec1-services-card-description">
              Crafting bold, engaging, and versatile graphic designs that
              elevate your brand and captivate your audience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
