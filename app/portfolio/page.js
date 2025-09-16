import React from 'react';
import Portfolio from '../../components/Portfolio/Portfolio';

export const metadata = {
  title: 'Portfolio - GIXI AI Solutions | Our Latest Projects & Work',
  description: 'Explore GIXI AI Solutions\' portfolio showcasing our latest automation projects, web development work, and AI-powered solutions that have transformed businesses.',
  keywords: ['portfolio', 'automation projects', 'web development', 'AI solutions', 'GIXI AI work', 'case studies'],
  openGraph: {
    title: 'Portfolio - GIXI AI Solutions | Our Latest Projects & Work',
    description: 'Explore GIXI AI Solutions\' portfolio showcasing our latest automation projects, web development work, and AI-powered solutions.',
    url: 'https://gixiai.com/portfolio',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return <Portfolio />;
}
