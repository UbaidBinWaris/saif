'use client'
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "./section3.css";
import Button from "../../../../components/Other/button";
import Pbutton from "../../../../components/Other/Pbutton";
import { PATHS } from "../../../../constants/assetPaths";

const SectionThree = () => {
  const sectionRef = useRef(null);

  return (
    <section className="section-three" ref={sectionRef}>
      <div className="secThree">
        <div className="secThree-header">
          <Link href="/contact">
            <Pbutton>Why Automate With Us</Pbutton>
          </Link>
          <h1 className="mhall secThree-hm">
            <span className="partnerSpan">Why Choose </span>Automation Experts
          </h1>
          <p className="secThree-p mpall">
            Unlock Efficiency and Growth With Smart Automation Solutions
          </p>
        </div>
        <div className="secThree-cards">
          <div className="secThree-card-test">
            <div className="s3-1 secThree-card">
              <div className="secThree-card-inner">
                <Image src={PATHS.ICONS.TICK} alt="Automation expertise checkmark icon by GIXI AI Solutions" width={64} height={64} />
                <h2>Automation Expertise</h2>
                <p>
                  Leverage advanced automation tools and proven strategies to streamline your workflows and reduce manual effort.
                </p>
              </div>
              <Image className="secThree-ver-img" src={PATHS.ICONS.VERTICAL} alt="Comparison vertical divider icon by GIXI AI Solutions" width={64} height={64} />
              <div className="secThree-card-inner top-m">
                <Image src={PATHS.ICONS.CROSS} alt="Manual processes cross icon by GIXI AI Solutions" width={64} height={64} />
                <h2>Manual Processes</h2>
                <p>
                  Relying on manual tasks increases errors, slows productivity, and limits scalability.
                </p>
              </div>
            </div>
            <div className="s3-2 secThree-card">
              <div className="secThree-card-inner right-m">
                <Image src={PATHS.ICONS.TICK} alt="Scalable automation checkmark icon by GIXI AI Solutions" width={64} height={64} />
                <h2>Scalable Solutions</h2>
                <p>
                  Our automations grow with your business, adapting to new challenges and increasing demands effortlessly.
                </p>
              </div>
              <Image className="secThree-ver-img" src={PATHS.ICONS.VERTICAL} alt="Comparison vertical divider icon by GIXI AI Solutions" width={64} height={64} />
              <div className="secThree-card-inner top-m">
                <Image src={PATHS.ICONS.CROSS} alt="Rigid systems cross icon by GIXI AI Solutions" width={64} height={64} />
                <h2>Rigid Systems</h2>
                <p>
                  Outdated or inflexible processes make it hard to keep up with business growth and evolving needs.
                </p>
              </div>
            </div>
            <div className="s3-3 secThree-card">
              <div className="secThree-card-inner">
                <Image src={PATHS.ICONS.TICK} alt="Seamless integration checkmark icon by GIXI AI Solutions" width={64} height={64} />
                <h2>Seamless Integration</h2>
                <p>
                  We connect your favorite tools and platforms, ensuring data flows smoothly and operations stay synchronized.
                </p>
              </div>
              <Image className="secThree-ver-img" src={PATHS.ICONS.VERTICAL} alt="Comparison vertical divider icon by GIXI AI Solutions" width={64} height={64} />
              <div className="secThree-card-inner top-m">
                <Image src={PATHS.ICONS.CROSS} alt="Disconnected tools cross icon by GIXI AI Solutions" width={64} height={64} />
                <h2>Disconnected Tools</h2>
                <p>
                  Siloed systems and manual data transfers lead to inefficiencies and missed opportunities.
                </p>
              </div>
            </div>
            <div className="s3-4 secThree-card">
              <div className="secThree-card-inner">
                <Image src={PATHS.ICONS.TICK} alt="Reliable monitoring checkmark icon by GIXI AI Solutions" width={64} height={64} />
                <h2>Reliable Monitoring</h2>
                <p>
                  Get real-time insights and alerts, so you can track automation performance and quickly resolve issues.
                </p>
              </div>
              <Image className="secThree-ver-img" src={PATHS.ICONS.VERTICAL} alt="Comparison vertical divider icon by GIXI AI Solutions" width={64} height={64} />
              <div className="secThree-card-inner top-m">
                <Image src={PATHS.ICONS.CROSS} alt="Untracked automations cross icon by GIXI AI Solutions" width={64} height={64} />
                <h2>Untracked Automations</h2>
                <p>
                  Lack of visibility can cause unnoticed failures, bottlenecks, and lost productivity.
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
