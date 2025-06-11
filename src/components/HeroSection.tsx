'use client';

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslate } from "@/hooks/useTranslate";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslate();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-slate-900">
      {/* Background geometric shapes with logo colors */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-sky-400/10 to-blue-500/10 rounded-2xl opacity-30 blur-xl" />
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-gradient-to-br from-blue-600/8 to-indigo-900/8 rounded-full opacity-20 blur-2xl" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-xl rotate-45 opacity-40" />
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-indigo-500/8 to-blue-700/8 rounded-full opacity-25 blur-lg" />
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mt-6 mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Content */}
        <motion.div 
          style={{ opacity, scale }}
          className="space-y-4 text-center lg:text-left"
        >
      

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            {t('hero.title')}{" "}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.02 }}
            >
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                {t('hero.titleHighlight')}
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 via-blue-500/20 to-indigo-600/20 rounded-lg blur-xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.span>
            {" "}{t('hero.titleEnd')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Feature highlights */}
     

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="flex justify-center lg:justify-start"
          >
            <motion.a
              href="mailto:info@artificax.com?subject=Draw2Cost Demo Request&body=Hello,%0D%0A%0D%0AI would like to request a demo of Draw2Cost.%0D%0A%0D%0AThank you."
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                backgroundColor: "#2563eb"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 border border-blue-500/30 inline-block"
            >
              <span className="flex items-center gap-3">
                <span>{t('hero.requestDemo')}</span>
                <span>→</span>
              </span>
            </motion.a>
          </motion.div>
    
        </motion.div>

        {/* Right Side - Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative flex justify-center items-center order-first lg:order-last"
        >
          <div className="relative w-full max-w-2xl">
            {/* Main Image */}
            <motion.div
         
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/15 to-blue-600/15 rounded-2xl blur-md"></div>
              <motion.div 
                className="relative scale-120 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-2xl"
                whileHover={{ 
                  boxShadow: "0 15px 30px -8px rgba(59, 130, 246, 0.25)",
                  borderColor: "rgba(56, 189, 248, 0.3)",
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                <Image 
                  src="/animated gif 3sn.gif" 
                  alt="Technical Drawing Sample" 
                  width={1000} 
                  height={1000} 
                  className="rounded-xl shadow-lg w-full h-auto"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Secondary Image */}
         
          </div>
        </motion.div>
      </div>
    </section>
  );
}
