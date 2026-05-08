import MetaPixel from "@/components/MetaPixel";
import "./globals.css";
import Script from "next/script";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar';


// -------------------------------
// ✅ Mobile Viewport
// -------------------------------
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// -------------------------------
// ✅ GLOBAL METADATA
// -------------------------------
export const metadata = {
  metadataBase: new URL("https://learning.digroz.com"),

  title: {
    default:
      "NISM & Government Exam Preparation | Digroz Learning",
    template: "%s | Digroz Learning",
  },

  description:
    "Master your NISM certifications and government exams with Digroz Learning. Access subject-wise quizzes, comprehensive notes, expert tips, and tricks.",

  keywords: [
    "NISM exam preparation",
    "government exam prep app",
    "subject wise quiz",
    "competitive exam notes",
    "exam tips and tricks",
    "Digroz Learning",
  ],

  manifest: "/manifest.json",

  openGraph: {
    title:
      "NISM & Government Exam Preparation Hub | Digroz Learning",
    description:
      "Prepare effectively for your NISM and govt exams. Get instant access to quizzes, study notes, and expert strategies.",
    url: "https://learning.digroz.com",
    siteName: "Digroz Learning",
    images: ["/digroz-learning-banner.png"], // Tip: You may want to upload a specific banner for the learning site
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "NISM & Govt Exam Prep | Digroz Learning",
    description:
      "Master your exams with subject-wise quizzes, notes, and tips from Digroz Learning.",
    images: ["/digroz-learning-banner.png"],
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
        {/* Note: I left your original Pixel ID. If you create a separate Pixel for the learning platform, update the ID below. */}
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

        {/* 🔥 ORGANIZATION SCHEMA */}
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization", // Changed to EducationalOrganization for better SEO
              name: "Digroz Learning",
              url: "https://learning.digroz.com",
              logo: "https://learning.digroz.com/digroz-banner.png",
              sameAs: [
                "https://www.instagram.com/digrozagency",
                "https://www.linkedin.com/company/digroz",
              ],
            }),
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