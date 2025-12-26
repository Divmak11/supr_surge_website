import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import PerformanceMonitor from "@/components/ui/PerformanceMonitor";
import ClientWrapper from "@/components/layout/ClientWrapper";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  themeColor: '#8B5CF6',
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://suprsurge.com'),
  title: "Brand & Butter | Digital Marketing Agency",
  description: "Brand & Butter - We turn LOLs into ROI.",
  keywords: [
    "digital marketing agency",
    "meme marketing",
    "viral campaigns",
    "social media marketing",
    "creative marketing",
    "brand strategy",
    "content marketing",
    "influencer marketing",
    "social media management",
    "digital advertising"
  ],
  authors: [{ name: "Supr Surge Team" }],
  creator: "Supr Surge",
  publisher: "Supr Surge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suprsurge.com",
    siteName: "Supr Surge",
    title: "Supr Surge - From Meme to Mainstream | Digital Marketing Agency",
    description: "Digital and meme marketing agency that turns brands into internet legends. From memes to mainstream — your brand, our playground.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Supr Surge - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supr Surge - From Meme to Mainstream | Digital Marketing Agency",
    description: "Digital and meme marketing agency that turns brands into internet legends. From memes to mainstream — your brand, our playground.",
    images: ["/og-image.jpg"],
    creator: "@suprsurge",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://suprsurge.com",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://picsum.photos" />
        <link rel="preconnect" href="https://picsum.photos" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="application-name" content="Supr Surge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Supr Surge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} font-sans antialiased text-white bg-black`}>
        <PerformanceMonitor />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Supr Surge",
              "url": "https://suprsurge.com",
              "logo": "https://suprsurge.com/logo.png",
              "description": "Digital and meme marketing agency that turns brands into internet legends",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "hello@suprsurge.com"
              },
              "sameAs": [
                "https://twitter.com/suprsurge",
                "https://linkedin.com/company/suprsurge",
                "https://instagram.com/suprsurge"
              ]
            })
          }}
        />
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
