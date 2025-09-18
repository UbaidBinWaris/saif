import About from './components/About';

export const metadata = {
  title: 'About GIXI AI - Leading AI Solutions Provider',
  description: 'Learn about GIXI AI\'s mission, vision, and expertise in artificial intelligence solutions. Discover how we\'re transforming businesses with cutting-edge AI technology.',
  keywords: ['about GIXI AI', 'AI company', 'artificial intelligence expertise', 'AI solutions provider'],
  alternates: {
    canonical: 'https://gixiai.com/about/',
  },
  openGraph: {
    title: 'About GIXI AI - Leading AI Solutions Provider',
    description: 'Learn about GIXI AI\'s mission, vision, and expertise in artificial intelligence solutions.',
    url: 'https://gixiai.com/about/',
  },
}

export default function AboutPage() {
  return <About />;
}
