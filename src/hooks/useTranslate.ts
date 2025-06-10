'use client';

import { create } from 'zustand';

// Translation keys and their default values
const translations = {
  en: {
    // Navigation
    language: 'Language',
    
    // Hero Section
    hero: {
      title: 'AI-powered cost estimation for',
      titleHighlight: 'manufacturers',
      titleEnd: '— fast, consistent, scalable.',
      subtitle: 'Generate cost estimates from engineering drawings using AI — in under 60 seconds. Deliver faster, smarter quotes to your customers.',
      requestDemo: 'Request a Demo',
      uploadSimilar: 'Upload similar technical drawings to get instant cost estimations',
      detailedEngineering: 'Detailed engineering drawings processed with AI precision'
    },
    
    // Features Section
    features: {
      badge: 'Built for Manufacturers',
      title: 'Why',
      titleHighlight: 'Manufacturers',
      titleEnd: 'Choose Us',
      subtitle: 'Transform your quoting process with AI that understands manufacturing. From drawings to estimates in seconds, not weeks.',
      list: [
        {
          title: '60-Second Cost Estimation',
          description: 'Transform engineering drawings into accurate cost estimates in under 60 seconds. No more waiting week for quotes.'
        },
        {
          title: 'Consistent Pricing',
          description: 'Standardize cost estimates with AI to support a consistent pricing policy.'
        },
        {
          title: 'Outlier Detection',
          description: 'Detect anomalies in past cost estimates made by humans.'
        },
        {
          title: 'Win More Business',
          description: 'Respond faster to Request for Quotations with competitive, data-driven quotes. Close deals while competitors are still calculating.'
        },
        {
          title: 'Manufacturing-Focused',
          description: 'Purpose-built for manufacturers. Understands machining, assembly, materials and production processes.'
        },
        {
          title: 'On-Premise or Cloud — You Choose',
          description: 'Deployable both on-premise and in the cloud. Choose full local installation for maximum data security.'
        }
      ]
    },
    
    // Technology Section
    technology: {
      title: 'How It Works?',
      subtitle: 'Simply upload a DWG or PNG drawing. Our AI model analyzes the design, extracts key features and delivers an accurate cost estimate within seconds.',
      steps: {
        input: 'Input',
        processing: 'Processing',
        output: 'Output',
        costEstimation: 'Cost Estimation'
      }
    },
    
    // Footer
    footer: {
      title: 'Cost Estimation in 60 Seconds',
      contact: 'Contact Us',
      address1: 'Boğaziçi Teknopark',
      address2: '2/5, 108 Sarıyer, İstanbul',
      followUs: 'Follow Us'
    }
  },
  
  tr: {
    // Navigation
    language: 'Dil',
    
    // Hero Section
    hero: {
      title: 'Üreticiler için AI destekli maliyet tahmini',
      titleHighlight: 'üreticiler',
      titleEnd: '— hızlı, tutarlı, ölçeklenebilir.',
      subtitle: 'Mühendislik çizimlerinden AI kullanarak 60 saniyenin altında maliyet tahminleri oluşturun. Müşterilerinize daha hızlı, daha akıllı teklifler sunun.',
      requestDemo: 'Demo Talep Et',
      uploadSimilar: 'Anında maliyet tahminleri almak için benzer teknik çizimler yükleyin',
      detailedEngineering: 'AI hassasiyetiyle işlenen detaylı mühendislik çizimleri'
    },
    
    // Features Section
    features: {
      badge: 'Üreticiler İçin Tasarlandı',
      title: 'Neden',
      titleHighlight: 'Üreticiler',
      titleEnd: 'Bizi Tercih Ediyor',
      subtitle: 'Üretimi anlayan AI ile teklif verme sürecinizi dönüştürün. Çizimlerden tahminlere haftalar değil saniyeler içinde.',
      list: [
        {
          title: '60 Saniyede Maliyet Tahmini',
          description: 'Mühendislik çizimlerini 60 saniyenin altında doğru maliyet tahminlerine dönüştürün. Artık teklif için haftalarca beklemeye gerek yok.'
        },
        {
          title: 'Tutarlı Fiyatlandırma',
          description: 'Tutarlı bir fiyatlandırma politikasını desteklemek için AI ile maliyet tahminlerini standartlaştırın.'
        },
        {
          title: 'Anormallik Tespiti',
          description: 'İnsanlar tarafından yapılan geçmiş maliyet tahminlerindeki anormallikleri tespit edin.'
        },
        {
          title: 'Daha Fazla İş Kazanın',
          description: 'Rekabetçi, veri odaklı tekliflerle Teklif Taleplerini daha hızlı yanıtlayın. Rakipler hala hesaplama yaparken anlaşmaları kapatın.'
        },
        {
          title: 'Üretim Odaklı',
          description: 'Üreticiler için özel olarak geliştirilmiştir. Tezgahlama, montaj, malzemeler ve üretim süreçlerini anlar.'
        },
        {
          title: 'Yerinde veya Bulut — Siz Seçin',
          description: 'Hem yerinde hem de bulutta konuşlandırılabilir. Maksimum veri güvenliği için tam yerel kurulum seçin.'
        }
      ]
    },
    
    // Technology Section
    technology: {
      title: 'Nasıl Çalışır?',
      subtitle: 'Basitçe bir DWG veya PNG çizim yükleyin. AI modelimiz tasarımı analiz eder, ana özellikleri çıkarır ve saniyeler içinde doğru bir maliyet tahmini sunar.',
      steps: {
        input: 'Girdi',
        processing: 'İşleniyor',
        output: 'Çıktı',
        costEstimation: 'Maliyet Tahmini'
      }
    },
    
    // Footer
    footer: {
      title: '60 Saniyede Maliyet Tahmini',
      contact: 'İletişim',
      address1: 'Boğaziçi Teknopark',
      address2: '2/5, 108 Sarıyer, İstanbul',
      followUs: 'Bizi Takip Edin'
    }
  }
};

type Language = 'en' | 'tr';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: (key: string) => any;
}

// Create store
const useLanguageStore = create<LanguageStore>((set, get) => ({
  language: 'en',
  setLanguage: (language: Language) => set({ language }),
  t: (key: string) => {
    const { language } = get();
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: any = translations[language];
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // Fallback to English if key not found
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        result = translations.en as any;
        for (const fallbackKey of keys) {
          if (result && typeof result === 'object' && fallbackKey in result) {
            result = result[fallbackKey];
          } else {
            return key; // Return key if not found in fallback
          }
        }
        break;
      }
    }
    
    return result || key;
  }
}));

export const useTranslate = () => {
  const { language, setLanguage, t } = useLanguageStore();
  
  return {
    language,
    setLanguage,
    t,
    toggleLanguage: () => setLanguage(language === 'en' ? 'tr' : 'en')
  };
};

export default useTranslate;
