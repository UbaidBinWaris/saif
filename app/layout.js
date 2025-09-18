import ClientLayout from './providers';
import './styles/globals.css';
import '../styles/App.css';
import { Roboto } from 'next/font/google';

// Configure Roboto font
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata = {
  title: {
    default: 'GIXI AI - Your AI-Powered Digital Solutions Partner',
    template: '%s | GIXI AI'
  },
  description: 'Transform your business with GIXI AI\'s cutting-edge artificial intelligence solutions. We specialize in AI development, automation, and digital transformation services.',
  keywords: ['AI development', 'artificial intelligence', 'automation', 'digital transformation', 'machine learning', 'GIXI AI'],
  authors: [{ name: 'GIXI AI Solutions' }],
  creator: 'GIXI AI Solutions',
  publisher: 'GIXI AI Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gixiai.com'),
  alternates: {
    canonical: 'https://gixiai.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gixiai.com',
    siteName: 'GIXI AI Solutions',
    title: 'GIXI AI - Your AI-Powered Digital Solutions Partner',
    description: 'Transform your business with GIXI AI\'s cutting-edge artificial intelligence solutions.',
    images: [
      {
        url: '/new logos/three.png',
        width: 1200,
        height: 630,
        alt: 'GIXI AI Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIXI AI - Your AI-Powered Digital Solutions Partner',
    description: 'Transform your business with GIXI AI\'s cutting-edge artificial intelligence solutions.',
    images: ['/new logos/three.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/new logos/three.png" as="image" type="image/png" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Critical CSS inline for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body { margin: 0; }
            * { box-sizing: border-box; }
            .loading-skeleton { 
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: loading 1.5s infinite;
            }
            @keyframes loading {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `
        }} />
      </head>
      <body className={roboto.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
