import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./section3.css";
import tick from "../../assets/tick.svg";
import cross from "../../assets/cross.svg";
import vertical from "../../assets/vertical.svg";
import Pbutton from "../Other/Pbutton";

const SectionThree = () => {
  const sectionRef = useRef(null);

  return (
    <section className="section-three" ref={sectionRef}>
      <div className="secThree">
        <div className="secThree-header">
          <Link to="/contact">
            <Pbutton>Why Choose US</Pbutton>
          </Link>
          <h1 className="mhall secThree-hm">
            <span className="partnerSpan">Why US as </span>A Partner
          </h1>
          <p className="secThree-p mpall">
            Our Quality and Client Satisfaction Speaks for US
          </p>
        </div>
        <div className="secThree-cards">
          <div className="secThree-card-test">
            <div className="s3-1 secThree-card">
              <div className="secThree-card-inner">
                <img src={tick} alt="Skilled professional checkmark icon by GIXI AI Solutions" loading="lazy" />
                <h2>Skilled Professional</h2>
                <p>
                  Gain access to top-tier talent with years of experience,
                  ensuring flawless execution
                </p>
              </div>
              <img className="secThree-ver-img" src={vertical} alt="Comparison vertical divider icon by GIXI AI Solutions" loading="lazy" />
              <div className="secThree-card-inner top-m">
                <img src={cross} alt="Amateur designer cross icon by GIXI AI Solutions" loading="lazy" />
                <h2>Amateur Designer</h2>
                <p>
                  Lack of experience may result in design inconsistencies and
                  overlooked details
                </p>
              </div>
            </div>
            <div className="s3-2 secThree-card">
              <div className="secThree-card-inner right-m">
                <img src={tick} alt="Future-ready designs checkmark icon by GIXI AI Solutions" loading="lazy" />
                <h2>Future-Ready Designs</h2>
                <p>
                  Crafting modern, scalable designs that grow with your business
                  and stay ahead of trends.
                </p>
              </div>
              <img className="secThree-ver-img" src={vertical} alt="Comparison vertical divider icon by GIXI AI Solutions" loading="lazy" />
              <div className="secThree-card-inner top-m">
                <img src={cross} alt="Outdated concepts cross icon by GIXI AI Solutions" loading="lazy" />
                <h2>Outdated Concepts</h2>
                <p>
                  Stale designs that don’t reflect current trends or your
                  evolving brand narrative.
                </p>
              </div>
            </div>
            <div className="s3-3 secThree-card">
              <div className="secThree-card-inner">
                <img src={tick} alt="Client-centric collaboration checkmark icon by GIXI AI Solutions" loading="lazy" />
                <h2>Client-Centric Collaboration</h2>
                <p>
                  Your vision leads the way. I work closely with you to bring
                  ideas to life with precision and creativity.
                </p>
              </div>
              <img className="secThree-ver-img" src={vertical} alt="Comparison vertical divider icon by GIXI AI Solutions" loading="lazy" />
              <div className="secThree-card-inner top-m">
                <img src={cross} alt="Detached communication cross icon by GIXI AI Solutions" loading="lazy" />
                <h2>Detached Communication</h2>
                <p>
                  Lack of collaboration and poor feedback loops can result in
                  misaligned outcomes.
                </p>
              </div>
            </div>
            <div className="s3-4 secThree-card">
              <div className="secThree-card-inner">
                <img src={tick} alt="Timely project tracking checkmark icon by GIXI AI Solutions" loading="lazy" />
                <h2>Timely Project Tracking</h2>
                <p>
                  Stay informed with regular progress updates, detailed
                  milestones, and alignment throughout the project.{" "}
                </p>
              </div>
              <img className="secThree-ver-img" src={vertical} alt="Comparison vertical divider icon by GIXI AI Solutions" loading="lazy" />
              <div className="secThree-card-inner top-m">
                <img src={cross} alt="Unreliable work cross icon by GIXI AI Solutions" loading="lazy" />
                <h2>Unreliable Work</h2>
                <p>
                  Inconsistent timelines and last-minute changes can compromise
                  quality, and lead to missed deadlines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
