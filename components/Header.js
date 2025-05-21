import React from 'react'

import Image from 'next/image'
export const Header = () => {
  return (
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
            {/* <Link to="/contact">
              <Button className="get-started-button">Get Started</Button>
            </Link> */}
          </div>
          <div className="hero-graphic">
            <Image
              src={graphic}
              alt="Professional Web Development Graphic by GIXI AI Solutions"
              layout="responsive"
              width={700}
              height={475}
            />
          </div>

          {/* Floating Card */}
          <div className="floating-card">
            <div className="floating-card-content">
              <p className="floating-card-quote">
                Working with Gixi was a Blessing!
              </p>
              <p className="floating-card-author">- Joe Parry</p>
            </div>
            <div className="floating-card-icon">
              <Image
                src={floating}
                alt="Client Testimonial Icon for GIXI AI Solutions"
                layout="responsive"
                width={80}
                height={80}
              />
            </div>
          </div>

          {/* Planet Element */}
          <div className="planet"></div>
        </section>
        {/* <div className="services-button-container head-ser-con">
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
        </div> */}
      </div>
  )
}

export default Header