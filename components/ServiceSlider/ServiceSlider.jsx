'use client'
import React from "react";
import Link from "next/link";
import Pbutton from "../Other/Pbutton";
import "./ServiceSlider.css";
import "../../app/styles/color.css";

const ServiceSlider = () => {
  const services = [
    "n8n Development",
    "Workflow Automation",
    "API Integration",
    "Process Optimization",
    "Custom Automation",
    "Web Development",
    "Database Integration",
    "Business Intelligence",
    "Digital Transformation",
    "Automation Consulting"
  ];

  // Triple the services for truly seamless infinite scroll
  // This ensures smooth transition without visible jumps
  const repeatedServices = [...services, ...services, ...services];

  return (
    <div className="services-button-container">
      <div className="Pbutton-slider-right">
        {repeatedServices.map((service, index) => (
          <div key={`service-${index}`} className="service-item">
            <Link href="/contact">
              <Pbutton className="cursor-pointer">{service}</Pbutton>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSlider;
