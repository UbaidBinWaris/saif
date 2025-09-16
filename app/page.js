import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Import critical above-the-fold components synchronously
import HeaderHero from '../components/Header/HeaderHero';
import SectionOne from '../components/Section1/SectionOne';

// Dynamic imports for below-the-fold components
const Card = dynamic(() => import('../components/Section2/card'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded" />
});

const SectionThree = dynamic(() => import('../components/Section3/section3'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded" />
});

const SectionFour = dynamic(() => import('../components/Section4/Section4'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded" />
});

const FAQs = dynamic(() => import('../components/Section5/FAQs'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded" />
});

export const metadata = {
  title: 'GIXI AI - Your AI-Powered Digital Solutions Partner',
  description: 'Transform your business with GIXI AI\'s cutting-edge artificial intelligence solutions. We specialize in AI development, automation, and digital transformation services.',
  keywords: ['AI development', 'artificial intelligence', 'automation', 'digital transformation', 'machine learning', 'GIXI AI'],
  alternates: {
    canonical: 'https://gixiai.com/',
  },
  openGraph: {
    title: 'GIXI AI - Your AI-Powered Digital Solutions Partner',
    description: 'Transform your business with GIXI AI\'s cutting-edge artificial intelligence solutions.',
    url: 'https://gixiai.com/',
  },
}

export default function Home() {
  return (
    <>
      <HeaderHero />
      <SectionOne />
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded" />}>
        <Card />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded" />}>
        <SectionThree />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded" />}>
        <SectionFour />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded" />}>
        <FAQs />
      </Suspense>
    </>
  );
}
