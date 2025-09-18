// Performance monitoring utilities for ServicesPage
export const performanceUtils = {
  // Measure component render time
  measureRenderTime: (componentName, renderFn) => {
    const start = performance.now();
    const result = renderFn();
    const end = performance.now();
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} render time: ${(end - start).toFixed(2)}ms`);
    }
    
    return result;
  },

  // Check if image is in viewport before loading
  isInViewport: (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Preload critical images
  preloadImages: (imagePaths) => {
    if (typeof window !== 'undefined') {
      imagePaths.forEach(path => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = path;
        document.head.appendChild(link);
      });
    }
  },

  // Performance observer for Core Web Vitals
  observeWebVitals: () => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      new PerformanceObserver((entryList) => {
        let cumulativeScore = 0;
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          if (!entry.hadRecentInput) {
            cumulativeScore += entry.value;
          }
        });
        console.log('CLS:', cumulativeScore);
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }
};

// Critical resource hints for the page
export const resourceHints = {
  // DNS prefetch for external resources
  dnsPrefetch: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ],

  // Preconnect to critical third-party origins
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ],

  // Preload critical resources
  preload: [
    '/new logos/three.png', // Hero image
    '/images/projects/project2.webp' // First slider image
  ]
};