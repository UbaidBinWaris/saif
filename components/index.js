// Barrel exports for better tree shaking and cleaner imports
// This file helps with code splitting and reduces bundle size

// Layout Components
export { default as Nav } from './Nav/Nav';
export { default as Footer } from './Footer/Footer';
export { default as Preloader } from './Preloader/Preloader';

// Page Sections - Updated paths for moved components
export { default as HeaderHero } from '../app/Home/components/Header/HeaderHero';
export { default as SectionOne } from '../app/Home/components/Section1/SectionOne';
export { default as Card } from '../app/Home/components/Section2/card';
export { default as SectionThree } from '../app/Home/components/Section3/section3';
export { default as SectionFour } from '../app/Home/components/Section4/Section4';
export { default as FAQs } from '../app/Home/components/Section5/FAQs';
export { default as Connect } from '../app/Home/components/Section6/Connect';

// Page Components - Updated paths for moved components
export { default as About } from '../app/about/components/About';
export { default as Blog } from '../app/blog/components/Blog';
export { default as Portfolio } from '../app/portfolio/components/Portfolio';
export { default as BlogPost } from '../app/blog/components/BlogPost';
export { default as Contact } from '../app/contact/components/Contact';
export { default as ServicesPage } from '../app/services/components/ServicesPage';
export { default as PrivacyPolicy } from '../app/contact/components/PrivacyPolicy';

// Admin Components - Updated paths for moved components
export { default as AdminDashboard } from '../app/admin/components/AdminDashboard';
export { default as AdminLogin } from '../app/admin/components/AdminLogin';
export { default as CreatePost } from '../app/admin/components/CreatePost';
export { default as ProtectedRoute } from '../app/admin/components/ProtectedRoute';

// UI Components
export { default as Button } from './Other/button';
export { default as Pbutton } from './Other/Pbutton';
export { default as Polygon } from './Other/polygon';
export { default as ThreeD } from './Other/threeD';
export { default as ChatBot } from './Other/ChatBot';
export { default as ServiceSlider } from './ServiceSlider/ServiceSlider';

// Utility Components - Updated paths for moved components
export { default as SEOHead } from './SEO/SEOHead';
export { default as AnimatedCounter } from '../app/contact/components/AnimatedCounter';

// Hooks and Logic - Updated paths for moved components
export { usePlanetMouseTracking } from '../app/Home/components/Header/headerLogic';
export { default as cardLogic } from '../app/Home/components/Section2/cardLogic';
