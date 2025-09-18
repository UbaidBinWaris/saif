'use client'
import React, { memo, useMemo, Suspense, lazy, useState, useEffect } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import Image from "next/image";
import Link from "next/link";
import "./ServicesPage.css";
import Pbutton from "../../../components/Other/Pbutton";
import Button from "../../../components/Other/button";
import { PATHS } from "../../../constants/assetPaths";
import { LayoutGrid, Paintbrush, FileImage } from "lucide-react";
import { usePlanetMouseTracking } from "../../Home/components/Header/headerLogic";
import { performanceUtils, resourceHints } from "./performance";

// Lazy load ServiceSlider for better initial page load
const ServiceSlider = lazy(() => import("../../../components/ServiceSlider/ServiceSlider"));

// Loading component for ServiceSlider
const ServiceSliderSkeleton = () => (
  <div className="service-slider-skeleton" style={{ 
    height: '200px', 
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'loading 1.5s infinite',
    borderRadius: '8px',
    margin: '2rem 0'
  }}>
    <style jsx>{`
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `}</style>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ServicesPage Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback" style={{
          padding: '2rem',
          textAlign: 'center',
          background: '#f8d7da',
          color: '#721c24',
          borderRadius: '8px',
          margin: '1rem 0'
        }}>
          <h2>Something went wrong loading this section.</h2>
          <button 
            onClick={() => this.setState({ hasError: false })}
            style={{
              padding: '0.5rem 1rem',
              background: '#721c24',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// SEO Constants
const SEO_DATA = {
  title: "Automation & Workflow Services USA | GIXI AI Solutions",
  description: "Expert n8n development, workflow automation, API integrations, and web development services for businesses in the USA. GIXI AI Solutions delivers custom automation solutions, business process optimization, and scalable web applications. Get a free quote today!",
  keywords: "n8n development USA, workflow automation USA, API development, business process automation, custom automation solutions, web development, n8n specialists, automation consulting, process optimization, digital transformation, GIXI AI Solutions",
  canonical: "https://gixiai.com/services",
  ogTitle: "Automation & Workflow Services USA | GIXI AI Solutions",
  ogDescription: "Transform your business with expert automation services, n8n development, and workflow optimization from GIXI AI Solutions. Serving clients across the USA.",
  ogImage: "https://gixiai.com/new logos/three.png"
};

// Service cards data structure - moved outside component
const SERVICES_DATA = [
  {
    id: 'automation',
    icon: LayoutGrid,
    title: 'Automation Services',
    description: 'Streamlining your business processes with intelligent automation solutions that boost productivity, reduce costs, and drive growth effortlessly',
    className: 'website-card',
    hasImage: true,
    imageSrc: PATHS.GRAPHICS.BACKGROUND,
    imageAlt: 'Business automation solutions example by GIXI AI Solutions'
  },
  {
    id: 'workflow',
    icon: Paintbrush,
    title: 'Workflow Design',
    description: 'Designing efficient, intuitive workflows that optimize your operations and empower your team to achieve more with less effort',
    className: 'logo-card',
    hasImage: false
  },
  {
    id: 'web-dev',
    icon: LayoutGrid,
    title: 'Web Development',
    description: 'Bringing ideas to life with interactive, user-centered web designs that simplify complexity and elevate user experience.',
    className: 'development-card',
    hasImage: false,
    hasSlider: true
  },
  {
    id: 'api',
    icon: FileImage,
    title: 'API Development',
    description: 'Crafting robust and scalable APIs that empower your applications and streamline your business processes',
    className: 'graphic-card',
    hasImage: false
  }
];

// Project images for slider - moved outside component
const PROJECT_IMAGES = [
  { src: PATHS.PROJECTS.PROJECT_2, alt: 'Web development project 1 by GIXI AI Solutions' },
  { src: PATHS.PROJECTS.PROJECT_3, alt: 'Web development project 2 by GIXI AI Solutions' },
  { src: PATHS.PROJECTS.PROJECT_4, alt: 'Web development project 3 by GIXI AI Solutions' },
  { src: PATHS.PROJECTS.PROJECT_5, alt: 'Web development project 4 by GIXI AI Solutions' },
  { src: PATHS.PROJECTS.PROJECT_6, alt: 'Web development project 5 by GIXI AI Solutions' }
];

// ServiceCard component for better organization
const ServiceCard = memo(({ service, currentImageIndex }) => {
  const IconComponent = service.icon;
  
  return (
    <article className={`services-card ${service.className}`}>
      <header className="services-card-header">
        <IconComponent className="icon" aria-hidden="true" />
        <h2 className="services-card-title">{service.title}</h2>
      </header>
      <p className="services-card-description">
        {service.description}
      </p>
      
      {/* Regular image for automation services */}
      {service.hasImage && (
        <div className="services-card-image-container">
          <Image
            src={service.imageSrc}
            alt={service.imageAlt}
            className="services-card-image"
            width={320}
            height={200}
            priority={service.id === 'automation'}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      )}
      
      {/* Slider for web development - using home page logic */}
      {service.hasSlider && (
        <div className="services-slider-container">
          <div 
            className="services-slider"
            style={{
              transform: `translateX(-${(currentImageIndex * 270)}px)`,
              transition: 'transform 0.8s ease-in-out'
            }}
            role="region" 
            aria-label="Web development project showcase"
          >
            {/* Render images twice for seamless looping (same as home page) */}
            {[...PROJECT_IMAGES, ...PROJECT_IMAGES].map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                className="services-slider-image"
                width={250}
                height={150}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
});

ServiceCard.displayName = 'ServiceCard';

const ServicesPage = memo(() => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  usePlanetMouseTracking();
  
  // Auto-slide images every 4 seconds (same as home page)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % (PROJECT_IMAGES.length * 2)); // Double for seamless loop
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  
  // Initialize performance monitoring in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      performanceUtils.observeWebVitals();
    }
    
    // Preload critical images
    performanceUtils.preloadImages(resourceHints.preload);
  }, []);
  
  // Memoize SEO metadata to prevent recreation
  const seoMetadata = useMemo(() => (
    <Helmet>
      <title>{SEO_DATA.title}</title>
      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords} />
      <link rel="canonical" href={SEO_DATA.canonical} />
      <meta property="og:title" content={SEO_DATA.ogTitle} />
      <meta property="og:description" content={SEO_DATA.ogDescription} />
      <meta property="og:image" content={SEO_DATA.ogImage} />
      <meta name="robots" content="index, follow" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="geo.position" content="37.0902;-95.7129" />
      
      {/* Resource hints for performance */}
      {resourceHints.dnsPrefetch.map(url => (
        <link key={url} rel="dns-prefetch" href={url} />
      ))}
      {resourceHints.preconnect.map(url => (
        <link key={url} rel="preconnect" href={url} crossOrigin="anonymous" />
      ))}
    </Helmet>
  ), []);

  return (
    <>
      {seoMetadata}
      <div className="services-container">
        <div className="services-inner-container">
          {/* Hero Section */}
          <section className="services-hero-section">
            <div className="services-hero-text">
              <div>
                <Link href="/contact" aria-label="Contact us for our services">
                  <Pbutton>Our Services</Pbutton>
                </Link>
              </div>
              <h1 className="services-title">
                <span className="servicesSpan">Automation </span>Services
              </h1>
              <p className="services-subtitle">
                Streamline your business operations with intelligent automation solutions and workflow optimization
              </p>
            </div>
            <Link href="/contact" aria-label="Get started with our automation services">
              <Button className="sec4-inner-b">Get Started</Button>
            </Link>
            <Image
              className="ser-graphic"
              src={PATHS.GRAPHICS.COVER}
              alt="Automation services hero graphic"
              width={500}
              height={400}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            {/* Planet Element */}
            <div className="planet" aria-hidden="true"></div>
          </section>

          {/* Grid Section */}
          <section className="services-grid-container">
            <div className="services-grid" role="main" aria-label="Our services">
              {SERVICES_DATA.map((service) => (
                <ServiceCard key={service.id} service={service} currentImageIndex={currentImageIndex} />
              ))}
            </div>
          </section>

          <ErrorBoundary>
            <Suspense fallback={<ServiceSliderSkeleton />}>
              <ServiceSlider />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
});

ServicesPage.displayName = 'ServicesPage';

export default ServicesPage;
