import './Connect.css'; 
import Pbutton from '../Other/Pbutton';
import { PATHS } from '../../constants/assetPaths';
import Button from '../Other/button.jsx';
import Link from 'next/link';
import Image from "next/image";

export default function ServicesSection() {
    const services = [
        {
            id: 1,
            title: "Web Development",
            price: "Starting from $199",
            description: "Custom n8n workflows that automate your business processes seamlessly"
        },
        {
            id: 2,
            title: "Workflow Automation", 
            price: "Starting from $99",
            description: "End-to-end automation solutions that save time and boost productivity."
        }
    ];

    return (
      <div className="connect-section">
        <div className="connect-container">
          <div className="connect-content">
            {/* Left Column */}
            <div className="connect-left">
                <div>
              <Link href="/contact">
                <Pbutton>Let&apos;s Connect</Pbutton>
              </Link>
              </div>
  
              <div>
                <h2 className="connect-heading">
                  Automate <span className="connect-subheading">Everything</span>
                </h2>
              </div>
  
              <div className="connect-services">
                {services.map((service) => (
                  <div key={service.id} className="connect-service">
                    <div className="service-header">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-price">{service.price}</p>
                    </div>
                    <p className="service-description">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
  
              <div className="connect-buttons">
                <Link href="/services">
                  <Button className="btn-black">See All Automations</Button>
                </Link>
                <Link href="/contact">
                  <Button className="btn-secondary">Start Automating</Button>
                </Link>
              </div>
            </div>
  
            {/* Right Column - Portfolio Grid */}
            <div className="connect-right">
              <div className="portfolio-grid">
                <div className="portfolio-item large testimonial2-card">
                  <Image
                    src={PATHS.GRAPHICS.BACKGROUND}
                    alt="Workflow automation and n8n development portfolio example by GIXI AI Solutions"
                    className="portfolio-image"
                    width={400}
                    height={300}
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }