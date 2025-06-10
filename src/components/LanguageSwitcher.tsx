'use client';

import { motion } from "framer-motion";
import { useTranslate } from "@/hooks/useTranslate";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useTranslate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <motion.button
        onClick={toggleLanguage}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-sm transition-all duration-300 hover:bg-white/20 hover:border-white/30"
      >
        {/* Flag Icons */}
        <div className="flex items-center gap-1">
          <motion.span
            className={`text-lg transition-opacity duration-200 ${
              language === 'en' ? 'opacity-100' : 'opacity-50'
            }`}
            whileHover={{ scale: 1.1 }}
          >
            🇺🇸
          </motion.span>
          <span className="text-white/60">/</span>
          <motion.span
            className={`text-lg transition-opacity duration-200 ${
              language === 'tr' ? 'opacity-100' : 'opacity-50'
            }`}
            whileHover={{ scale: 1.1 }}
          >
            🇹🇷
          </motion.span>
        </div>
        
        {/* Language Text */}
        <motion.span
          key={language}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="uppercase tracking-wide"
        >
          {language}
        </motion.span>
        
        {/* Switch Indicator */}
        <motion.div
          className="w-4 h-4 rounded-full bg-gradient-to-r from-sky-400 to-blue-500"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        {language === 'en' ? 'Türkçe\'ye geç' : 'Switch to English'}
      </motion.div>
    </motion.div>
  );
}
