import ServicesPage from '../../components/ServicesPage/ServicesPage';

export const metadata = {
  title: 'AI Services - GIXI AI Solutions & Development',
  description: 'Explore GIXI AI\'s comprehensive artificial intelligence services including AI development, machine learning, automation, and digital transformation solutions.',
  keywords: ['AI services', 'artificial intelligence development', 'machine learning services', 'AI automation', 'digital transformation'],
  alternates: {
    canonical: 'https://gixiai.com/services/',
  },
  openGraph: {
    title: 'AI Services - GIXI AI Solutions & Development',
    description: 'Explore GIXI AI\'s comprehensive artificial intelligence services.',
    url: 'https://gixiai.com/services/',
  },
}

export default function Services() {
  return <ServicesPage />;
}
