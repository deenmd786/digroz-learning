import MetaPixel from "@/components/MetaPixel";
import "./globals.css";
import Script from "next/script";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar';

// -------------------------------
// ✅ Mobile Viewport & Theme
// -------------------------------
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#6f86e8", // Helps brand the mobile browser toolbar
};

// -------------------------------
// ✅ GLOBAL METADATA (Highly Optimized)
// -------------------------------
export const metadata = {
  metadataBase: new URL("https://learning.digroz.com"),
  
  // Explicitly defining the canonical URL prevents duplicate content issues
  alternates: {
    canonical: '/',
  },

  title: {
    default: "Digroz Learning | NISM All Series Prep (Eng+Hin) & Govt Exams",
    template: "%s | Digroz Learning",
  },

  description:
    "Master your NISM certifications, SSC, UPSC, and Banking exams with Digroz Learning. Access our comprehensive NISM All Series Prep (Eng+Hin) materials, subject-wise mock tests, bilingual notes, and expert exam strategies.",

  keywords: [
    // Core Brand
    "Digroz Learning",
    // Specific App & Flagship Terms
    "NISM All Series Prep (Eng+Hin)",
    "NISM exam preparation",
    "NISM mock tests",
    // Expanded Syllabus Targets
    "SSC exam preparation app",
    "UPSC study notes",
    "Banking syllabus and mock tests",
    // General EdTech Terms
    "bilingual exam notes",
    "subject wise quiz",
    "competitive exam tips and tricks",
  ],

  // Author and Category help with E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
  authors: [{ name: "Digroz" }],
  creator: "Digroz",
  publisher: "Digroz",
  category: "education",

  manifest: "/manifest.json",

  // Explicit instructions for search engine crawlers
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

  openGraph: {
    title: "Digroz Learning | NISM All Series Prep & Govt Exams",
    description:
      "Prepare effectively for your NISM, SSC, UPSC, and Banking exams. Get instant access to bilingual quizzes, study notes, and expert strategies.",
    url: "https://learning.digroz.com",
    siteName: "Digroz Learning",
    images: [
      {
        url: "/digroz-learning-banner.png",
        width: 1200,
        height: 630,
        alt: "Digroz Learning Exam Preparation Banner",
      }
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digroz Learning | NISM All Series Prep & Govt Exams",
    description:
      "Master your exams with bilingual subject-wise quizzes, notes, and tips from Digroz Learning.",
    images: ["/digroz-learning-banner.png"],
    creator: "@digrozlearning", // Update this to your actual Twitter handle if you have one
  },
};

// -------------------------------
// ✅ LAYOUT
// -------------------------------
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">

        {/* 🔥 META PIXEL (APP ROUTER SAFE) */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}
              (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1340134777404430');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* 🔥 ORGANIZATION & WEBSITE SCHEMA */}
        <Script
          id="global-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": "Digroz Learning",
                "url": "https://learning.digroz.com",
                "logo": "https://learning.digroz.com/digroz-banner.png",
                "sameAs": [
                  "https://www.instagram.com/digrozagency",
                  "https://www.linkedin.com/company/digroz"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Digroz Learning",
                "url": "https://learning.digroz.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://learning.digroz.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ]),
          }}
        />

        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        
        <Navbar />
        
        <main>
          {children}
        </main>
        
        <Footer />

      </body>
    </html>
  );
}