"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./SectionOne.css";
import { PATHS } from "../../../constants/assetPaths";
import { LayoutGrid, Paintbrush, FileImage } from "lucide-react";

const SectionOne = () => {
  // eslint-disable-next-line no-unused-vars
  const [hovered, setHovered] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of service cards data
  const serviceCards = [
    {
      id: "automation",
      icon: LayoutGrid,
      title: "Automation Services",
      description: "Streamlining your business processes with intelligent automation solutions that boost productivity, reduce costs, and drive growth effortlessly",
      type: "image",
      imageSrc: PATHS.GRAPHICS.BACKGROUND,
      imageAlt: "Modern website design example by GIXI AI Solutions",
      className: "website-card",
      gridSpan: "span 1",
      gridRowSpan: "span 2"
    },
    {
      id: "workflow",
      icon: Paintbrush,
      title: "Workflow Design",
      description: "Designing efficient, intuitive workflows that optimize your operations and empower your team to achieve more with less effort",
      type: "simple",
      className: "logo-card"
    },
    {
      id: "webdev",
      icon: LayoutGrid,
      title: "Web Development",
      description: "Bringing ideas to life with interactive, user-centered Web designs that simplify complexity and elevate user experience",
      type: "slider",
      className: "framer-card",
      gridRowSpan: "span 2"
    },
    {
      id: "api",
      icon: FileImage,
      title: "API Development",
      description: "Crafting robust and scalable APIs that empower your applications and streamline your business processes",
      type: "simple",
      className: "graphic-card"
    }
  ];

  // Project images for slider
  const projectImages = [
    { src: PATHS.PROJECTS.PROJECT_1, alt: "Web development project 1 by GIXI AI Solutions" },
    { src: PATHS.PROJECTS.PROJECT_2, alt: "Web development project 2 by GIXI AI Solutions" },
    { src: PATHS.PROJECTS.PROJECT_3, alt: "Web development project 3 by GIXI AI Solutions" },
    { src: PATHS.PROJECTS.PROJECT_4, alt: "Web development project 4 by GIXI AI Solutions" },
    { src: PATHS.PROJECTS.PROJECT_5, alt: "Web development project 5 by GIXI AI Solutions" },
    { src: PATHS.PROJECTS.PROJECT_6, alt: "Web development project 6 by GIXI AI Solutions" }
  ];

  // Auto-slide images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % (projectImages.length * 2)); // Double for seamless loop
    }, 4000);

    return () => clearInterval(interval);
  }, [projectImages.length]);

  // Render card content based on type
  const renderCardContent = (card) => {
    switch (card.type) {
      case "image":
        return (
          <div className="card-image-container">
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              className="card-image"
              width={300}
              height={200}
            />
          </div>
        );
      
      case "slider":
        return (
          <div className="slider-container">
            <div 
              className="slider"
              style={{
                transform: `translateX(-${(currentImageIndex * 270)}px)`,
                transition: 'transform 0.8s ease-in-out'
              }}
            >
              {/* Render images twice for seamless looping */}
              {[...projectImages, ...projectImages].map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="slider-image"
                  width={250}
                  height={150}
                />
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="section-one ">
      <div className="secOne">
        <div className="grid-container">
          {serviceCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`design-card ${card.className}`}
                onMouseEnter={() => setHovered(card.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  gridColumn: card.gridSpan || 'auto',
                  gridRow: card.gridRowSpan || 'auto'
                }}
              >
                <div className="card-header">
                  <IconComponent className="icon" />
                  <h2 className="card-title">{card.title}</h2>
                </div>
                <p className="sec1-services-card-description">
                  {card.description}
                </p>
                {renderCardContent(card)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
