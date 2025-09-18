'use client'
import React from "react";
import Link from "next/link";
import Pbutton from "../Other/Pbutton";
import "./ServiceSlider.css";

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

  // Just duplicate for seamless loop - simpler and more efficient
  const repeatedServices = [...services, ...services];

  return (
    <div className="services-button-container">
      <div className="Pbutton-slider-right">
        {repeatedServices.map((service, index) => (
          <div key={index}>
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
