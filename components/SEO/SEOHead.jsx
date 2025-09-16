import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useRouter } from 'next/router';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  type = 'website',
  image = '/new logos/three.png',
  author = 'GIXI AI Solutions',
  publishedTime,
  modifiedTime,
  canonicalUrl,
  noIndex = false
}) => {
  const router = useRouter();
  const currentUrl = canonicalUrl || `https://www.gixiai.com${router.asPath}`;
  
  // Default values
  const defaultTitle = 'GIXI AI Solutions - Automation & n8n Development Services';
  const defaultDescription = 'Transform your business with AI-powered automation solutions. Expert n8n workflow development, API integrations, and intelligent automation systems. Get started today!';
  const defaultKeywords = 'n8n automation, workflow automation, API integration, business automation, AI solutions, n8n development, process automation, workflow optimization';
  
  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = image.startsWith('http') ? image : `https://www.gixiai.com${image}`;
  
  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : 'Organization',
    ...(type === 'article' ? {
      headline: seoTitle,
      description: seoDescription,
      image: seoImage,
      author: {
        "@type": "Person",
        name: author
      },
      publisher: {
        "@type": "Organization",
        name: "GIXI AI Solutions",
        logo: {
          "@type": "ImageObject",
          url: "https://www.gixiai.com/new logos/three.png"
        }
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": currentUrl
      },
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime
    } : {
      name: "GIXI AI Solutions",
      description: seoDescription,
      url: "https://www.gixiai.com",
      logo: "https://www.gixiai.com/new logos/three.png",
      sameAs: [
        "https://www.linkedin.com/company/gixi-ai-solutions",
        "https://github.com/gixi-ai-solutions"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-GIXI-AI",
        contactType: "customer service"
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "US"
      }
    })
  };
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="GIXI AI Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:site" content="@GIXIAISolutions" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content="GIXI AI Solutions" />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:publisher" content="GIXI AI Solutions" />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        </>
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
