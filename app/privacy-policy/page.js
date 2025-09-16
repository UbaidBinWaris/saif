import PrivacyPolicy from '../../components/Contact/PrivacyPolicy';

export const metadata = {
  title: 'Privacy Policy - GIXI AI',
  description: 'Read GIXI AI\'s privacy policy to understand how we collect, use, and protect your personal information and data.',
  keywords: ['privacy policy', 'data protection', 'GIXI AI privacy', 'personal information'],
  alternates: {
    canonical: 'https://gixiai.com/privacy-policy/',
  },
  openGraph: {
    title: 'Privacy Policy - GIXI AI',
    description: 'Read GIXI AI\'s privacy policy.',
    url: 'https://gixiai.com/privacy-policy/',
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
