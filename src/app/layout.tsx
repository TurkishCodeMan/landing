import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Draw2Cost - AI-Powered Construction Cost Estimation',
    template: '%s | Draw2Cost'
  },
  description: 'Revolutionize construction cost estimation with AI. Draw your project and get instant, accurate cost predictions. Try Draw2Cost for free today.',
  keywords: [
    'construction cost estimation',
    'AI cost prediction',
    'building cost calculator',
    'construction planning',
    'cost estimation software',
    'yapı maliyet hesaplama',
    'inşaat maliyet tahmini',
    'AI maliyet hesaplama',
    'yapay zeka maliyet tahmini'
  ],
  authors: [{ name: 'Artificax' }],
  creator: 'Artificax',
  publisher: 'Artificax',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://draw2cost.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'tr-TR': '/tr',
    },
  },
  openGraph: {
    title: 'Draw2Cost - AI-Powered Construction Cost Estimation',
    description: 'Revolutionize construction cost estimation with AI. Draw your project and get instant, accurate cost predictions.',
    url: 'https://draw2cost.com',
    siteName: 'Draw2Cost',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Draw2Cost - AI Construction Cost Estimation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Draw2Cost - AI-Powered Construction Cost Estimation',
    description: 'Revolutionize construction cost estimation with AI. Draw your project and get instant, accurate cost predictions.',
    images: ['/og-image.png'],
    creator: '@artificax',
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
  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/icons/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/icons/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/icons/android-chrome-512x512.png',
      },
    ],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {children}
      </body>
    </html>
  );
}
