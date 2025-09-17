import React from "react";

export function useScrollCardAnimation() {
  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    // Check if mobile device
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return; // Disable carousel on mobile

    const cardWidth = 340; // Card width + gap
    const totalCards = 4;
    let currentTranslate = 0;
    let isAnimating = false; // Flag to control animation state
    let isInitialized = false; // Flag to prevent multiple initializations
    
    // Speed detection variables
    let lastScrollY = window.scrollY;
    let lastVelocityTime = Date.now();
    let scrollVelocity = 0;
    let velocityHistory = [];
    const maxVelocityHistory = 5;

    // Calculate scroll velocity for speed detection
    const calculateScrollVelocity = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = currentTime - lastVelocityTime;
      
      if (deltaTime > 0) {
        const velocity = Math.abs(deltaY / deltaTime);
        velocityHistory.push(velocity);
        
        // Keep only recent velocity measurements
        if (velocityHistory.length > maxVelocityHistory) {
          velocityHistory.shift();
        }
        
        // Calculate average velocity
        scrollVelocity = velocityHistory.reduce((a, b) => a + b, 0) / velocityHistory.length;
      }
      
      lastScrollY = currentScrollY;
      lastVelocityTime = currentTime;
      
      return scrollVelocity;
    };

    const initializeCards = () => {
      const cardsContainer = document.querySelector(".card-wrapper .cards");
      if (!cardsContainer || isInitialized) return;

      // Remove any duplicated cards from previous implementations
      const duplicatedCards = document.querySelectorAll(".card.duplicated");
      duplicatedCards.forEach(card => card.remove());

      const cards = document.querySelectorAll(".card-wrapper .card");
      const containerWidth = cardsContainer.offsetWidth;
      const viewportWidth = window.innerWidth;
      
      // Calculate proper center offset to position the first card more to the right
      // Add extra offset to move cards more to the right initially
      const centerOffset = (viewportWidth - cardWidth) / 2 + 750; // Move 750px more to the right
      
      // Reset any existing transforms and set initial position
      cardsContainer.style.transition = 'none';
      cardsContainer.style.transform = `translateX(${centerOffset}px)`;
      
      // Force reflow to ensure the transform is applied
      cardsContainer.offsetHeight;
      
      // Re-enable transitions after initialization
      setTimeout(() => {
        cardsContainer.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
      }, 50);
      
      // Make all cards visible initially
      cards.forEach((card, index) => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.setAttribute('data-card-index', index);
      });
      
      // Store the initial position
      currentTranslate = centerOffset;
      isInitialized = true;
    };

    const handleScroll = () => {
      const cardsContainer = document.querySelector(".card-wrapper .cards");
      const cardWrapper = document.querySelector(".card-wrapper");
      
      if (!cardsContainer || !cardWrapper || !isInitialized) return;
      
      // Calculate scroll velocity for speed detection
      const velocity = calculateScrollVelocity();
      const isHighSpeed = velocity > 1.5; // Lowered threshold for more sensitive speed detection
      
      const sectionTop = cardWrapper.getBoundingClientRect().top;
      const sectionBottom = cardWrapper.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      
      // Define animation thresholds - much wider range for continuous sliding
      const animationStartThreshold = windowHeight * 0.9; // Start when section top is at 90% of viewport  
      const animationEndThreshold = windowHeight * -0.8; // Continue well after section leaves viewport
      
      // Calculate proper center offset based on viewport with right offset
      const centerOffset = (viewportWidth - cardWidth) / 2 + 550; // Move 550px more to the right
      const totalCardsWidth = (totalCards - 1) * cardWidth;
      
      // Extend the sliding range to create more movement - make it slide further
      const extendedSlideDistance = totalCardsWidth * 1.8; // Increase slide distance by 80%
      const endOffset = centerOffset - extendedSlideDistance;
      
      // Check if section is above the viewport (not yet entered)
      if (sectionTop > animationStartThreshold) {
        // Section hasn't entered animation zone yet - ensure first card is centered
        if (!isAnimating || isHighSpeed) {
          cardsContainer.style.transition = isHighSpeed ? 'transform 0.8s ease-out' : 'transform 0.3s ease';
          cardsContainer.style.transform = `translateX(${centerOffset}px)`;
          currentTranslate = centerOffset;
        }
        isAnimating = false;
        return;
      }
      
      // Check if section is below the viewport (passed through)
      if (sectionTop < animationEndThreshold) {
        // Section has passed animation zone - ensure last card is centered
        if (!isAnimating || isHighSpeed) {
          cardsContainer.style.transition = isHighSpeed ? 'transform 0.8s ease-out' : 'transform 0.3s ease';
          cardsContainer.style.transform = `translateX(${endOffset}px)`;
          currentTranslate = endOffset;
        }
        isAnimating = false;
        return;
      }
      
      // We're in the animation zone - always use smooth continuous sliding
      isAnimating = true;
      
      // Always use smooth interpolation for continuous slider behavior
      cardsContainer.style.transition = 'none';
      
      // Calculate scroll progress within the animation zone
      const animationRange = animationStartThreshold - animationEndThreshold;
      const currentPosition = sectionTop - animationEndThreshold;
      const rawScrollProgress = Math.max(0, Math.min(1, 1 - (currentPosition / animationRange)));
      
      // Apply slower scroll speed - smooth and visible sliding
      const speedMultiplier = 0.7; // Slower speed for better visibility
      const scrollProgress = Math.min(1, rawScrollProgress / speedMultiplier); // Allow full progress by dividing
      
      // Apply easing function for smoother animation
      const easedProgress = scrollProgress; // Linear for continuous sliding
      
      // Calculate transform positions for continuous sliding
      const startOffset = centerOffset; // Start: first card position (right)
      const totalSlideDistance = endOffset - startOffset; // Total distance to slide
      
      // Apply transform based on scroll progress - continuous sliding
      const newTranslate = startOffset + (easedProgress * totalSlideDistance);
      cardsContainer.style.transform = `translateX(${newTranslate}px)`;
      currentTranslate = newTranslate;
      
      // Ensure all cards remain visible
      const cards = cardsContainer.querySelectorAll('.card:not(.duplicated)');
      cards.forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
      });
    };

    // Initialize
    initializeCards();
    
    // Optimized scroll handler with better throttling and speed detection
    let ticking = false;
    let lastScrollTime = 0;
    const throttleDelay = 8; // ~120fps for smoother animation
    
    const scrollHandler = () => {
      const now = Date.now();
      if (now - lastScrollTime < throttleDelay) return;
      
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
          lastScrollTime = now;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", scrollHandler, { passive: true });
    
    // Resize handler with improved responsiveness
    const resizeHandler = () => {
      if (window.innerWidth <= 768) {
        const cardsContainer = document.querySelector(".card-wrapper .cards");
        if (cardsContainer) {
          cardsContainer.style.transform = 'none';
          cardsContainer.style.transition = 'none';
          const allCards = cardsContainer.querySelectorAll('.card');
          allCards.forEach(card => {
            card.style.opacity = '1';
            card.style.visibility = 'visible';
          });
        }
      } else {
        // Reset initialization flag and re-initialize on resize back to desktop
        isInitialized = false;
        // Reset scroll tracking variables
        lastScrollY = window.scrollY;
        lastVelocityTime = Date.now();
        scrollVelocity = 0;
        velocityHistory = [];
        
        setTimeout(initializeCards, 100);
      }
    };
    
    window.addEventListener("resize", resizeHandler);
    
    // Initialize on load with improved timing
    const initOnLoad = () => {
      // Wait for layout to stabilize
      setTimeout(() => {
        initializeCards();
        
        // Ensure initial position is set correctly after layout
        setTimeout(() => {
          const cardsContainer = document.querySelector(".card-wrapper .cards");
          if (cardsContainer && !isAnimating && isInitialized) {
            const viewportWidth = window.innerWidth;
            const centerOffset = (viewportWidth - cardWidth) / 2 + 300; // Move 300px more to the right
            cardsContainer.style.transition = 'none';
            cardsContainer.style.transform = `translateX(${centerOffset}px)`;
            currentTranslate = centerOffset;
            
            // Force a final position check and set proper transition
            setTimeout(() => {
              if (!isAnimating && cardsContainer) {
                cardsContainer.style.transform = `translateX(${centerOffset}px)`;
                cardsContainer.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)'; // Slower transition
              }
            }, 100);
          }
        }, 200);
        
        // Initial position setup based on current scroll
        setTimeout(() => {
          handleScroll();
        }, 300);
      }, 100);
    };
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initOnLoad);
    } else {
      initOnLoad();
    }
    
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", resizeHandler);
      document.removeEventListener('DOMContentLoaded', initOnLoad);
    };
  }, []);
}
