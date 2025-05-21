import './Connect.css'; 
import Pbutton from '../Other/Pbutton';
import bgg from '../../assets/bgg.webp';
import Button from '../Other/button.jsx';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
    return (
      <div className="connect-section">
        <div className="connect-container">
          <div className="connect-content">
            {/* Left Column */}
            <div className="connect-left">
                <div>
              <Link to="/contact">
                <Pbutton>Let's Connect</Pbutton>
              </Link>
              </div>
  
              <div>
                <h2 className="connect-heading">
                  Let's Grow <span className="connect-subheading">Together</span>
                </h2>
              </div>
  
              <div className="connect-services">
                <div className="connect-service">
                  <div className="service-header">
                    <h3 className="service-title">Web Design</h3>
                    <p className="service-price">Starting from $199</p>
                  </div>

                  <p className="service-description">
                    Showcasing sleek, high-performance designs tailored for impact
                  </p>
                </div>
  
                <div className="connect-service">
                  <div className="service-header">
                    <h3 className="service-title">Web Development</h3>
                    <p className="service-price">Starting from $299</p>
                  </div>
                  <p className="service-description">
                    Building visually stunning, user-focused websites that elevate brands.
                  </p>
                </div>
              </div>
  
              <div className="connect-buttons">
                <Link to="/services">
                  <Button className="btn-primary">See All Projects</Button>
                </Link>
                <Link to="/contact">
                  <Button className="btn-secondary">Get Started Now</Button>
                </Link>
              </div>
            </div>
  
            {/* Right Column - Portfolio Grid */}
            <div className="connect-right">
              <div className="portfolio-grid">
                <div className="portfolio-item large testimonial2-card">
                  <img
                    src={bgg}
                    alt="Web design and development portfolio example by GIXI AI Solutions"
                    className="portfolio-image"
                    loading="lazy"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }