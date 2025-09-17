'use client'
import React, { useRef } from "react";
import Link from "next/link";
import Pbutton from "../Other/Pbutton";
import { useAutoScrollSlider } from "../Home/Header/headerLogic";
import "./ServiceSlider.css";

const ServiceSlider = ({ 
  services, 
  className = "", 
  buttonClassName = "",
  containerClassName = "",
  linkHref = "/contact"
}) => {
  const sliderRef = useRef(null);
  
  useAutoScrollSlider(sliderRef);

  return (
    <div className={`services-button-container ${containerClassName}`}>
      <div className={`Pbutton-slider-right ${className}`} ref={sliderRef}>
        {services.map((service, index) => (
          <div key={index}>
            <Link href={linkHref}>
              <Pbutton className={buttonClassName}>{service}</Pbutton>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSlider;
