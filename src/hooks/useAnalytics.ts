'use client'

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: eventName,
      ...parameters,
    })
  }
}

export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
      page_title: title || document.title,
      page_location: url,
    })
  }
}

export const trackConversion = (action: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: process.env.NEXT_PUBLIC_GA_ID,
      event_category: 'conversion',
      event_label: action,
      value: value,
    })
  }
}

export const useAnalytics = () => {
  return {
    trackEvent,
    trackPageView,
    trackConversion,
  }
}

// Önceden tanımlanmış event tracking fonksiyonları
export const trackButtonClick = (buttonName: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
  })
}

export const trackFeatureView = (featureName: string) => {
  trackEvent('feature_view', {
    feature_name: featureName,
  })
}

export const trackLanguageChange = (language: string) => {
  trackEvent('language_change', {
    language: language,
  })
}

export const trackDemoRequest = () => {
  trackConversion('demo_request', 1)
}
