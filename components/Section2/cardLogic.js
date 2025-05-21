import React from "react";

export function useScrollCardAnimation() {
  React.useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".card");
      const section = document.querySelector(".second-text");
      const sectionTop = section ? section.getBoundingClientRect().top : 0;
      const windowHeight = window.innerHeight;
      const scrollPosition = Math.max(0, windowHeight - sectionTop);

      cards.forEach((card) => {
        const offset = scrollPosition * 0.6;
        card.style.transform = `translateX(-${offset}px)`;
        card.style.opacity = Math.min(1, scrollPosition / 300);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
