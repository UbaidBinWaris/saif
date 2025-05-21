import React from "react";


export function usePlanetMouseTracking() {
  React.useEffect(() => {
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

export function useAutoScrollSlider(sliderRef) {
  React.useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame;
    let scrollPos = 0;
    const speed = 1;

    const scrollButtons = () => {
      if (!slider.children.length) return;

      scrollPos += speed;
      slider.style.transform = `translateX(-${scrollPos}px)`;

      const firstButton = slider.children[0];
      const buttonWidth = firstButton.offsetWidth + 20;

      if (scrollPos >= buttonWidth) {
        slider.appendChild(firstButton);
        slider.style.transform = "translateX(0)";
        scrollPos = 0;
      }

      animationFrame = requestAnimationFrame(scrollButtons);
    };

    animationFrame = requestAnimationFrame(scrollButtons);

    return () => cancelAnimationFrame(animationFrame);
  }, []);
}
