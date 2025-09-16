import { PATHS } from '../constants/assetPaths';

export const portfolioProjects = [
  // Automation Projects
  {
    id: 1,
    title: 'E-Commerce Automation Platform',
    category: 'automation',
    description: 'Complete e-commerce workflow automation using n8n, reducing order processing time by 80%',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format',
    technologies: ['n8n', 'Node.js', 'MongoDB', 'Stripe API'],
    client: 'TechStore Inc.',
    results: '80% faster processing, $50K monthly savings',
    link: '#',
    demoUrl: 'https://demo.example.com/ecommerce',
    githubUrl: 'https://github.com/example/ecommerce-automation',
    featured: true
  },
  {
    id: 2,
    title: 'CRM Integration Workflow',
    category: 'automation',
    description: 'Seamless CRM integration with email marketing and lead scoring automation',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format',
    technologies: ['n8n', 'Salesforce API', 'Mailchimp', 'PostgreSQL'],
    client: 'SalesForce Pro',
    results: '300% increase in lead conversion',
    link: '#',
    demoUrl: 'https://demo.example.com/crm',
    githubUrl: 'https://github.com/example/crm-automation',
    featured: true
  },
  {
    id: 3,
    title: 'Supply Chain Automation',
    category: 'automation',
    description: 'End-to-end supply chain automation with real-time tracking and alerts',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&auto=format',
    technologies: ['n8n', 'IoT Sensors', 'AWS', 'React'],
    client: 'LogiFlow Corp',
    results: '45% reduction in delivery time',
    link: '#',
    demoUrl: 'https://demo.example.com/supply-chain',
    githubUrl: 'https://github.com/example/supply-chain',
    featured: true
  },
  {
    id: 4,
    title: 'Invoice Processing Automation',
    category: 'automation',
    description: 'AI-powered invoice processing system with OCR and automated approval workflows',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&auto=format',
    technologies: ['Python', 'OCR', 'n8n', 'QuickBooks API'],
    client: 'FinanceFlow Ltd',
    results: '90% reduction in manual processing',
    link: '#',
    demoUrl: 'https://demo.example.com/invoice',
    githubUrl: 'https://github.com/example/invoice-automation'
  },
  {
    id: 5,
    title: 'Social Media Automation Suite',
    category: 'automation',
    description: 'Multi-platform social media scheduling and analytics automation system',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&auto=format',
    technologies: ['n8n', 'Buffer API', 'Twitter API', 'Instagram API'],
    client: 'Digital Marketing Pro',
    results: '500% increase in engagement',
    link: '#',
    demoUrl: 'https://demo.example.com/social',
    githubUrl: 'https://github.com/example/social-automation'
  },
  {
    id: 6,
    title: 'HR Onboarding Automation',
    category: 'automation',
    description: 'Complete employee onboarding workflow with document management and task tracking',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format',
    technologies: ['n8n', 'Google Workspace', 'Slack API', 'DocuSign'],
    client: 'TalentCorp',
    results: '70% faster onboarding process',
    link: '#',
    demoUrl: 'https://demo.example.com/hr',
    githubUrl: 'https://github.com/example/hr-automation'
  },
  {
    id: 7,
    title: 'Inventory Management Automation',
    category: 'automation',
    description: 'Real-time inventory tracking with automated reordering and supplier notifications',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&auto=format',
    technologies: ['n8n', 'RFID', 'SAP API', 'Telegram Bot'],
    client: 'RetailMax',
    results: '60% reduction in stockouts',
    link: '#',
    demoUrl: 'https://demo.example.com/inventory',
    githubUrl: 'https://github.com/example/inventory-automation'
  },
  {
    id: 8,
    title: 'Customer Support Automation',
    category: 'automation',
    description: 'AI chatbot integration with ticket routing and automated response system',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&auto=format',
    technologies: ['n8n', 'OpenAI API', 'Zendesk', 'WhatsApp API'],
    client: 'ServiceHub',
    results: '80% faster response time',
    link: '#',
    demoUrl: 'https://demo.example.com/support',
    githubUrl: 'https://github.com/example/support-automation'
  },
  {
    id: 9,
    title: 'Marketing Campaign Automation',
    category: 'automation',
    description: 'Multi-channel marketing automation with lead nurturing and conversion tracking',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&h=400&fit=crop&auto=format',
    technologies: ['n8n', 'HubSpot', 'Facebook Ads', 'Google Analytics'],
    client: 'GrowthLab',
    results: '250% increase in qualified leads',
    link: '#',
    demoUrl: 'https://demo.example.com/marketing',
    githubUrl: 'https://github.com/example/marketing-automation'
  },
  {
    id: 10,
    title: 'Data Migration Automation',
    category: 'automation',
    description: 'Automated data migration between legacy systems with validation and error handling',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
    technologies: ['n8n', 'Python', 'SQL Server', 'MongoDB'],
    client: 'DataTech Solutions',
    results: '95% reduction in migration time',
    link: '#',
    demoUrl: 'https://demo.example.com/data-migration',
    githubUrl: 'https://github.com/example/data-migration'
  },

  // Web Development Projects
  {
    id: 11,
    title: 'AI-Powered Business Dashboard',
    category: 'web-development',
    description: 'Real-time analytics dashboard with AI insights for business decision making',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
    technologies: ['React', 'Next.js', 'Python', 'TensorFlow'],
    client: 'DataCorp Solutions',
    results: '60% better decision accuracy',
    link: '#',
    demoUrl: 'https://demo.example.com/dashboard',
    githubUrl: 'https://github.com/example/ai-dashboard',
    featured: true
  },
  {
    id: 12,
    title: 'Corporate Website Redesign',
    category: 'web-development',
    description: 'Modern, responsive corporate website with advanced SEO optimization',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format',
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel', 'Google Analytics'],
    client: 'Global Industries',
    results: '250% increase in organic traffic',
    link: '#',
    demoUrl: 'https://demo.example.com/corporate',
    githubUrl: 'https://github.com/example/corporate-site',
    featured: true
  },
  {
    id: 13,
    title: 'SaaS Platform Development',
    category: 'web-development',
    description: 'Full-stack SaaS platform with subscription management and analytics',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&auto=format',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    client: 'StartupTech',
    results: '1000+ active users in 3 months',
    link: '#',
    demoUrl: 'https://demo.example.com/saas',
    githubUrl: 'https://github.com/example/saas-platform',
    featured: true
  },
  {
    id: 14,
    title: 'E-Learning Platform',
    category: 'web-development',
    description: 'Interactive online learning platform with video streaming and progress tracking',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
    client: 'EduTech Academy',
    results: '10,000+ enrolled students',
    link: '#'
  },
  {
    id: 15,
    title: 'Real Estate Portal',
    category: 'web-development',
    description: 'Comprehensive property listing platform with virtual tours and mortgage calculator',
    image: PATHS.PROJECTS.PROJECT_2,
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API'],
    client: 'PropertyPro',
    results: '40% increase in property inquiries',
    link: '#'
  },
  {
    id: 16,
    title: 'Healthcare Management System',
    category: 'web-development',
    description: 'Patient management system with appointment scheduling and medical records',
    image: PATHS.PROJECTS.PROJECT_3,
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'FHIR'],
    client: 'MedCare Clinic',
    results: '50% improvement in patient flow',
    link: '#'
  },
  {
    id: 17,
    title: 'Fintech Mobile App',
    category: 'web-development',
    description: 'React Native financial app with secure transactions and investment tracking',
    image: PATHS.PROJECTS.PROJECT_4,
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Plaid API'],
    client: 'MoneyWise',
    results: '50,000+ downloads in first month',
    link: '#'
  },
  {
    id: 18,
    title: 'Restaurant Management System',
    category: 'web-development',
    description: 'Complete restaurant POS system with inventory management and online ordering',
    image: PATHS.PROJECTS.PROJECT_5,
    technologies: ['React', 'Express.js', 'MongoDB', 'Stripe'],
    client: 'FoodiePlace',
    results: '35% increase in online orders',
    link: '#'
  },
  {
    id: 19,
    title: 'Event Management Platform',
    category: 'web-development',
    description: 'Full-featured event planning platform with ticketing and attendee management',
    image: PATHS.PROJECTS.PROJECT_6,
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PayPal API'],
    client: 'EventMaster',
    results: '200+ successful events hosted',
    link: '#',
    demoUrl: 'https://demo.example.com/events',
    githubUrl: 'https://github.com/example/event-platform'
  },
  {
    id: 20,
    title: 'Logistics Tracking System',
    category: 'web-development',
    description: 'Real-time package tracking system with route optimization and delivery notifications',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&auto=format',
    technologies: ['React', 'Node.js', 'Redis', 'Google Maps API'],
    client: 'FastDelivery',
    results: '30% improvement in delivery efficiency',
    link: '#',
    demoUrl: 'https://demo.example.com/logistics',
    githubUrl: 'https://github.com/example/logistics-system'
  },
  {
    id: 21,
    title: 'Content Management System',
    category: 'web-development',
    description: 'Custom CMS with drag-and-drop editor and multi-language support',
    image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600&h=400&fit=crop&auto=format',
    technologies: ['Next.js', 'Strapi', 'GraphQL', 'AWS'],
    client: 'ContentCorp',
    results: '80% reduction in content publishing time',
    link: '#',
    demoUrl: 'https://demo.example.com/cms',
    githubUrl: 'https://github.com/example/cms-platform'
  },
  {
    id: 22,
    title: 'Cryptocurrency Exchange',
    category: 'web-development',
    description: 'Secure crypto trading platform with real-time charts and portfolio management',
    image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&h=400&fit=crop&auto=format',
    technologies: ['React', 'WebSocket', 'Redis', 'Blockchain API'],
    client: 'CryptoTrade',
    results: '$1M+ daily trading volume',
    link: '#',
    demoUrl: 'https://demo.example.com/crypto',
    githubUrl: 'https://github.com/example/crypto-exchange'
  },
  {
    id: 23,
    title: 'Job Portal Platform',
    category: 'web-development',
    description: 'AI-powered job matching platform with resume parsing and interview scheduling',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Elasticsearch'],
    client: 'CareerHub',
    results: '5,000+ job placements',
    link: '#',
    demoUrl: 'https://demo.example.com/jobs',
    githubUrl: 'https://github.com/example/job-portal'
  },
  {
    id: 24,
    title: 'Social Media Analytics Tool',
    category: 'web-development',
    description: 'Comprehensive social media analytics dashboard with competitor analysis',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&auto=format',
    technologies: ['React', 'D3.js', 'Python', 'Social APIs'],
    client: 'SocialInsights',
    results: '300% improvement in social ROI',
    link: '#',
    demoUrl: 'https://demo.example.com/analytics',
    githubUrl: 'https://github.com/example/social-analytics'
  }
];

export const getProjectsByCategory = (category) => {
  if (category === 'all') {
    return portfolioProjects;
  }
  return portfolioProjects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return portfolioProjects.filter(project => project.featured);
};

export const getProjectsPaginated = (projects, page = 1, itemsPerPage = 6) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalProjects = projects.length;
  const totalPages = Math.ceil(totalProjects / itemsPerPage);
  
  return {
    projects: projects.slice(startIndex, endIndex),
    totalProjects,
    totalPages,
    currentPage: page,
    hasMore: endIndex < totalProjects,
    startIndex: startIndex + 1,
    endIndex: Math.min(endIndex, totalProjects)
  };
};
