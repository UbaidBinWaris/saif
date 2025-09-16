'use client';

import Image from 'next/image';
import { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false, 
  className = '',
  lazy = true,
  quality = 75,
  placeholder = 'blur',
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Create a blur data URL for placeholder
  const shimmer = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#f3f4f6" offset="20%" />
          <stop stop-color="#e5e7eb" offset="50%" />
          <stop stop-color="#f3f4f6" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#f3f4f6" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>
  `;

  const toBase64 = (str) => {
    if (typeof window === 'undefined') {
      return Buffer.from(str).toString('base64');
    }
    return btoa(str);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        loading={lazy ? 'lazy' : 'eager'}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
        className={`duration-300 ease-in-out ${isLoading ? 'scale-105 blur-lg' : 'scale-100 blur-0'}`}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
