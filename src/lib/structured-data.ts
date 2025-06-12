export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Artificax",
  "url": "https://draw2cost.com",
  "logo": "https://draw2cost.com/icons/android-chrome-512x512.png",
  "description": "AI-powered construction cost estimation solutions",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kozyatağı Mahallesi, Değirmen Sokak No:28",
    "addressLocality": "Kadıköy",
    "addressRegion": "İstanbul",
    "addressCountry": "TR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90-XXX-XXX-XXXX",
    "contactType": "customer service",
    "email": "info@artificax.com"
  },
  "sameAs": [
    "https://linkedin.com/company/artificax",
    "https://twitter.com/artificax"
  ]
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Draw2Cost",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "description": "AI-powered construction cost estimation tool that analyzes drawings and provides instant cost predictions",
  "url": "https://draw2cost.com",
  "author": {
    "@type": "Organization",
    "name": "Artificax"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free trial available"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "featureList": [
    "AI-powered cost estimation",
    "Drawing analysis",
    "Real-time cost prediction",
    "Multi-language support",
    "Export capabilities"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Draw2Cost",
  "url": "https://draw2cost.com",
  "description": "AI-powered construction cost estimation platform",
  "publisher": {
    "@type": "Organization",
    "name": "Artificax"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://draw2cost.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": ["en", "tr"]
};
