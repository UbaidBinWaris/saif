'use client'
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import dynamic from 'next/dynamic';
import Nav from '../components/Nav/Nav';
import Connect from '../components/Home/Section6/Connect';
import Footer from '../components/Footer/Footer';

// Dynamically import performance monitor to avoid SSR issues
const PerformanceMonitor = dynamic(
  () => import('../components/Performance/PerformanceMonitor'),
  { ssr: false }
);

export default function ClientLayout({ children }) {
  return (
    <HelmetProvider>
      <Nav />
      {children}
      <Connect />
      <Footer />
      <PerformanceMonitor />
    </HelmetProvider>
  );
}
