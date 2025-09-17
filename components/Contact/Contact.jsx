'use client'
import { useState } from "react";
import Image from "next/image";
import "./Contact.css";
import { Helmet } from "@dr.pogodin/react-helmet";
import Pbutton from "../Other/Pbutton";
import { PATHS } from "../../constants/assetPaths";
import Button from "../Other/button";
import AnimatedCounter from "./AnimatedCounter";
import { usePlanetMouseTracking } from "../Home/Header/headerLogic";

// AnimatedCounter component
<AnimatedCounter end="250M+" />

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('/db/submit.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    const result = await response.json();

    if (result.success) {
      alert(result.message);
      setFormData({
        name: "",
        email: "",
        budget: "",
        message: "",
      });
    } else {
      alert(result.message || 'Submission failed');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Network error - please try again');
  }
};
usePlanetMouseTracking();
  return (
    
    <section className="contact-section">
      <Helmet>
        <title>Contact Web & AI Experts USA | GIXI AI Solutions</title>
        <meta name="description" content="Contact GIXI AI Solutions for top-rated web development, AI, and digital services in the USA. Start your project, get a free quote, or book a call with our expert team today!" />
        <meta name="keywords" content="contact web development USA, AI solutions USA, hire web developer, digital agency USA, GIXI AI Solutions, project inquiry, book a call, web design, AI agency USA" />
        <link rel="canonical" href="https://gixiai.com/contact" />
        <meta property="og:title" content="Contact Web & AI Experts USA | GIXI AI Solutions" />
        <meta property="og:description" content="Get in touch with GIXI AI Solutions for modern web and AI services. Serving clients across the USA. Fast response, expert advice, and free consultations." />
        <meta property="og:image" content="https://gixiai.com/new logos/three.png" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="37.0902;-95.7129" />
      </Helmet>
      
      <div className="contact-section-container">
        <div className="contact-section-wrapper">
          <div className="contact-section-header">
            <div className="contact-section-left">
              <div>
                <a href="#cu-form">
                  <Pbutton>Contact Us</Pbutton>
                </a>
              </div>
              <div>
                <h2 className="contact-section-heading">
                  Let&apos;s Collaborate{" "}
                  <span className="contact-section-subheading">
                    and Begin to Work
                  </span>
                </h2>
                <p className="contact-section-description">
                  Have questions or want to start a project? Fill out the form,
                  and we’ll get back to you as soon as possible.
                </p>
                <div className="stats-container">
                  <div className="stats-card happy-card">
                    <AnimatedCounter end={100} suffix="+" />
                    <p>Happy Clients</p>
                  </div>
                  <div className="stats-card revenue-card">
                    <AnimatedCounter end="$250M+" />
                    <p>Revenue Generated</p>
                  </div>
                  <div className="stats-card rating-card">
                    <h2>4.8</h2>
                    <p>Rating</p>
                  </div>
                </div>
                <div className="testimonial-section-card">
                  <div className="testimonial-section-card-inner">
                    <Image
                      src={PATHS.TEAM.MAN_5}
                      alt="Alex Carter CEO NexaWeb Solutions Testimonial for GIXI AI Solutions"
                      className="testimonial-section-card-image"
                      width={80}
                      height={80}
                    />
                    <div className="testimonial-section-card-text">
                      <h3>Alex Carter</h3>
                      <p>NexaWeb Solutions</p>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <div className="testimonial-section-card-rating">
                      <p>5.0</p>
                      <div className="testimonial-section-stars">
                        <Image src={PATHS.ICONS.STAR} alt="5-star review for GIXI AI Solutions by Alex Carter NexaWeb Solutions" width={20} height={20} />
                        <Image src={PATHS.ICONS.STAR} alt="5-star review for GIXI AI Solutions by Alex Carter NexaWeb Solutions" width={20} height={20} />
                        <Image src={PATHS.ICONS.STAR} alt="5-star review for GIXI AI Solutions by Alex Carter NexaWeb Solutions" width={20} height={20} />
                        <Image src={PATHS.ICONS.STAR} alt="5-star review for GIXI AI Solutions by Alex Carter NexaWeb Solutions" width={20} height={20} />
                        <Image src={PATHS.ICONS.STAR} alt="5-star review for GIXI AI Solutions by Alex Carter NexaWeb Solutions" width={20} height={20} />
                      </div>
                    </div>
                    <div className="testimonial-section-card-description">
                      <p>
                        Exceptional creativity and attention to detail! The final
                        product not only looks great but also enhances user
                        engagement. Highly Reccomend Saifullah!!!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="call-card">
                  <h2>Prefer to Book a Meeting?</h2>
                  <a href="https://calendly.com/saifullah-gixiai/30min" style={{ textDecoration: "none" }}>
                    <Button className="contact-call-b">Book Now!</Button>
                  </a>
                </div>
              </div>
            </div>
            {/* Right Column - Contact Form */}
            <div className="contact-section-right">
              <form id="cu-form" className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-group-row">
                  <div className="contact-form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="contact-form-group">
                  <label htmlFor="budget">Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option className="opt-val" value="">Select Budget...</option>
                    <option value="<$1000">Less than $1000</option>
                    <option value="$1000-$5000">$1000 - $5000</option>
                    <option value="$5000-$10000">$5000 - $10000</option>
                    <option value=">$10000">More than $10000</option>
                  </select>
                </div>
                <div className="contact-form-group">
                  <label htmlFor="message">Message</label>
                  <div className="textarea-wrapper">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => {
                        if (e.target.value.length <= 1000) {
                          handleChange(e);
                        }
                      }}
                    ></textarea>
                    <span className="char-count">
                      {formData.message.length}/1000
                    </span>
                  </div>
                </div>
                <Button
                  className="contact-form-submit"
                  type="submit"
                >
                  Submit
                </Button>
                <p className="but-p-mid">
                  ( We will reach out to you within 48hrs )
                </p>
              </form>
            </div>
          </div>
        </div>
        <Image
              className="about-graphic"
              src={PATHS.GRAPHICS.COVER}
              alt=""
              width={500}
              height={400}
            />
      </div>
     
    </section>
  );
}
