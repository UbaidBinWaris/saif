import Blog from './components/Blog';

export const metadata = {
  title: 'AI Blog - Latest Insights from GIXI AI',
  description: 'Stay updated with the latest AI trends, insights, and developments from GIXI AI\'s expert team. Read our blog for AI news, tutorials, and industry insights.',
  keywords: ['AI blog', 'artificial intelligence insights', 'AI news', 'machine learning blog', 'GIXI AI blog'],
  alternates: {
    canonical: 'https://gixiai.com/blog/',
  },
  openGraph: {
    title: 'AI Blog - Latest Insights from GIXI AI',
    description: 'Stay updated with the latest AI trends, insights, and developments.',
    url: 'https://gixiai.com/blog/',
  },
}

export default function BlogPage() {
  return <Blog />;
}
