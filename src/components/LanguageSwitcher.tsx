'use client';

import { motion } from "framer-motion";
import { useTranslate } from "@/hooks/useTranslate";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useTranslate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <button
        onClick={()=>toggleLanguage()}
        className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-sm transition-all duration-200 hover:bg-white/20 hover:border-white/30 hover:scale-105"
      >
        {/* Flag Icons */}
        <div className="flex items-center gap-1">
          <span
            className={`text-lg transition-opacity duration-200 ${
              language === 'en' ? 'opacity-100' : 'opacity-50'
            }`}
          >
            🇺🇸
          </span>
          <span className="text-white/60">/</span>
          <span
            className={`text-lg transition-opacity duration-200 ${
              language === 'tr' ? 'opacity-100' : 'opacity-50'
            }`}
          >
            🇹🇷
          </span>
        </div>
        
        {/* Language Text */}
        <span className="uppercase tracking-wide transition-all duration-200">
          {language}
        </span>
        
        {/* Switch Indicator */}
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-sky-400 to-blue-500" />
      </button>
      
      {/* Tooltip */}
      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-200">
        {language === 'en' ? 'Türkçe\'ye geç' : 'Switch to English'}
      </div>
    </motion.div>
  );
}
