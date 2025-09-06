import "./styles/globals.css";

export const metadata = {
  title: "GIXI AI Solutions | Top USA Web & AI Development Agency",
  description:
    "GIXI AI Solutions is a leading USA-based web development and AI agency. We deliver high-converting websites, SEO, branding, and AI-driven solutions for businesses looking to grow online. Get a free consultation today!",
  keywords:
    "Web development USA, AI development agency, React development USA, web design company USA, SEO services USA, digital marketing USA, e-commerce development USA, custom website USA, app development USA, UI/UX design USA, branding agency USA, content writing USA, social media marketing USA, cloud hosting USA, IT consulting USA, cybersecurity USA, top web agency USA, best web developers USA, hire web developer USA, GIXI AI Solutions",
  authors: [{ name: "GIXI AI Solutions" }],
  robots: "index, follow",
  openGraph: {
    title: "GIXI AI Solutions | Top USA Web & AI Development Agency",
    description:
      "Grow your business with GIXI AI Solutions. USA's trusted web development, SEO, and AI agency. Modern websites, branding, and digital marketing for your success.",
    images: ["https://gixiai.com/logo.png"],
    url: "https://gixiai.com/",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://gixiai.com/",
  },
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
