import React from 'react'
import { useEffect } from 'react';

export function usePlanetMouseTracking() {
  useEffect(() => {
    const planet = document.querySelector(".planet");

    const handleMouseMove = (e) => {
      if (planet) {
        planet.style.left = `${e.pageX}px`;
        planet.style.top = `${e.pageY}px`;
        planet.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (planet) {
        planet.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
}

export const Planet = () => {
  return (
    <div className="planet-tailwind absolute w-[125px] h-[125px] rounded-full pointer-events-none opacity-0 transition-opacity duration-300 ease-linear"
     style={{
       background: "linear-gradient(180deg,#fcc96b 0%,#fcc96b 15%,#f7ae01 15%,#f7ae01 19%,#fcc96b 19%,#fcc96b 22%,#f7ae01 22%,#f7ae01 28%,#fcc96b 28%,#fcc96b 31%,#fcc96b 33%,#fcc96b 36%,#f7ae01 36%,#f7ae01 48%,#fcc96b 48%,#fcc96b 55%,#f7ae01 55%,#f7ae01 66%,#fcc96b 66%,#fcc96b 70%,#f7ae01 70%,#f7ae01 73%,#fcc96b 73%,#fcc96b 82%,#f7ae01 82%,#c7ba9d 86%,#fcc96b 86%)",
       boxShadow: "inset 0 0 25px rgba(0,0,0,0.25), inset 8px -4px 6px rgba(199,128,0,0.5), inset -8px 4px 8px rgba(255,235,199,0.5), inset 20px -5px 12px #f7ae01, 0 0 100px #ffffff59",
       transform: "rotateZ(-15deg)"
     }}
></div>
  )
}


