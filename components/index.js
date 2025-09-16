// Barrel exports for better tree shaking and cleaner imports
// This file helps with code splitting and reduces bundle size

// Layout Components
export { default as Nav } from './Nav/Nav';
export { default as Footer } from './Footer/Footer';
export { default as Preloader } from './Preloader/Preloader';

// Page Sections
export { default as HeaderHero } from './Header/HeaderHero';
export { default as SectionOne } from './Section1/SectionOne';
export { default as Card } from './Section2/card';
export { default as SectionThree } from './Section3/section3';
export { default as SectionFour } from './Section4/Section4';
export { default as FAQs } from './Section5/FAQs';
export { default as Connect } from './Section6/Connect';

// Page Components
export { default as About } from './About/About';
export { default as Blog } from './Blog/Blog';
export { default as Portfolio } from './Portfolio/Portfolio';
export { default as BlogPost } from './Blog/BlogPost';
export { default as Contact } from './Contact/Contact';
export { default as ServicesPage } from './ServicesPage/ServicesPage';
export { default as PrivacyPolicy } from './Contact/PrivacyPolicy';

// Admin Components
export { default as AdminDashboard } from './Admin/AdminDashboard';
export { default as AdminLogin } from './Admin/AdminLogin';
export { default as CreatePost } from './Admin/CreatePost';
export { default as ProtectedRoute } from './Admin/ProtectedRoute';

// UI Components
export { default as Button } from './Other/button';
export { default as Pbutton } from './Other/Pbutton';
export { default as Polygon } from './Other/polygon';
export { default as ThreeD } from './Other/threeD';
export { default as ChatBot } from './Other/ChatBot';
export { default as ServiceSlider } from './ServiceSlider/ServiceSlider';

// Utility Components
export { default as SEOHead } from './SEO/SEOHead';
export { default as AnimatedCounter } from './Contact/AnimatedCounter';

// Hooks and Logic
export { usePlanetMouseTracking } from './Header/headerLogic';
export { default as cardLogic } from './Section2/cardLogic';
