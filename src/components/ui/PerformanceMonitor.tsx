"use client";

import { useEffect } from 'react';



const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production and if web vitals are available
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      // Track First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[entries.length - 1];
          if (fcp) {
            console.log('FCP:', fcp.startTime);
            // Send to analytics service
            sendMetric('FCP', fcp.startTime);
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      }

      // Track Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcp = entries[entries.length - 1];
          if (lcp) {
            console.log('LCP:', lcp.startTime);
            sendMetric('LCP', lcp.startTime);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Track First Input Delay (FID)
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const firstInputEntry = entry as PerformanceEntry & { processingStart?: number };
            if (firstInputEntry.processingStart) {
              const fid = firstInputEntry.processingStart - firstInputEntry.startTime;
              console.log('FID:', fid);
              sendMetric('FID', fid);
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      }

      // Track Cumulative Layout Shift (CLS)
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry) => {
            const layoutShiftEntry = entry as { hadRecentInput?: boolean; value?: number };
            if (!layoutShiftEntry.hadRecentInput && layoutShiftEntry.value) {
              clsValue += layoutShiftEntry.value;
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Report CLS on page unload
        window.addEventListener('beforeunload', () => {
          console.log('CLS:', clsValue);
          sendMetric('CLS', clsValue);
        });
      }

      // Track Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        console.log('TTFB:', ttfb);
        sendMetric('TTFB', ttfb);
      }

      // Track resource loading performance
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.duration > 1000) { // Log slow resources
              console.warn('Slow resource:', resourceEntry.name, resourceEntry.duration);
            }
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
    }
  }, []);

  const sendMetric = (metric: string, value: number) => {
    // In a real implementation, send to your analytics service
    // For now, just log to console
    console.log(`Performance Metric - ${metric}:`, value);
    
    // Example: Send to Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as unknown as { gtag: Function }).gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: metric,
        value: Math.round(value),
        non_interaction: true,
      });
    }
  };

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;