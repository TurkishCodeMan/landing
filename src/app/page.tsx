'use client';

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechnologySection from "@/components/TechnologySection";
import Footer from "@/components/Footer";
import { organizationSchema, softwareApplicationSchema, websiteSchema } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900  to-slate-900">
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        {/* <HowItWorksSection /> */}
        <TechnologySection />
        {/* <CTASection /> */}
        <Footer />
      </div>
    </>
  );
}
  