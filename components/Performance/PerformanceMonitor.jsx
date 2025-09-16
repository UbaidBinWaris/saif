'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and client-side
    if (process.env.NODE_ENV !== 'production' || typeof window === 'undefined') return;

    // Web Vitals monitoring
    if ('requestIdleCallback' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log performance metrics for monitoring
          console.log(`${entry.name}: ${entry.value}`);
          
          // You can send this data to analytics service
          // analytics.track('web-vital', {
          //   name: entry.name,
          //   value: entry.value,
          //   rating: entry.rating,
          // });
        }
      });

      // Observe Core Web Vitals
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });

      // Cleanup
      return () => observer.disconnect();
    }
  }, []);

  return null;
}
