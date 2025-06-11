'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslate } from "@/hooks/useTranslate";

export default function TechnologySection() {
  const { t } = useTranslate();
  
  return (
    <section className="py-20 px-4 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('technology.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('technology.subtitle')}
          </p>
        </motion.div>

        {/* Animated Process Flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            {/* Input PNG */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <motion.div
                className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl shadow-2xl mb-4"
              >
                <Image 
                  src="/tt.jpg" 
                  alt="Technical Drawing Input" 
                  width={160} 
                  height={160} 
                  className="rounded-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white text-lg font-semibold"
              >
                {t('technology.steps.dwgPngFile')}
              </motion.div>
              <div className="text-gray-400 text-sm">{t('technology.steps.input')}</div>
            </motion.div>

            {/* Arrow 1 - Static */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl text-blue-400"
            >
              →
            </motion.div>

            {/* AI Processing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <motion.div
                className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-lg shadow-2xl mb-4 relative overflow-hidden"
              >
                <Image 
                  src="/animated gif 3sn.gif" 
                  alt="AI Processing Animation" 
                  width={200} 
                  height={200} 
                  className="rounded-md"
                  unoptimized
                />
                
                {/* Processing particles - Static */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-lg opacity-60" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-lg opacity-60" />
                <div className="absolute top-0 -left-3 w-2 h-2 bg-blue-400 rounded-lg opacity-60" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-white text-lg font-semibold"
              >
                {t('technology.steps.aiAnalysis')}
              </motion.div>
              <div className="text-gray-400 text-sm">{t('technology.steps.processing')}</div>
            </motion.div>

            {/* Arrow 2 - Static */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
              className="text-4xl text-purple-400"
            >
              →
            </motion.div>

            {/* Output Cost */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <motion.div
                className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-2xl mb-4 relative overflow-hidden"
              >
                <div className="text-4xl font-bold text-white">
                 2.3 €
                </div>
                
                {/* Money particles - Static */}
                <div className="absolute top-2 left-2 text-yellow-300 text-lg opacity-70">
                  💰
                </div>
                <div className="absolute top-2 right-2 text-yellow-300 text-lg opacity-70">
                  💎
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-white text-lg font-semibold"
              >
                {t('technology.steps.costEstimation')}
              </motion.div>
              <div className="text-gray-400 text-sm">{t('technology.steps.output')}</div>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center space-y-8">
            {/* Input PNG - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center w-full max-w-xs"
            >
              <motion.div
                className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl shadow-2xl mb-4"
              >
                <Image 
                  src="/tt.jpg" 
                  alt="Technical Drawing Input" 
                  width={120} 
                  height={120} 
                  className="rounded-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white text-base font-semibold text-center"
              >
                {t('technology.steps.dwgPngFile')}
              </motion.div>
              <div className="text-gray-400 text-sm text-center">{t('technology.steps.input')}</div>
            </motion.div>

            {/* Arrow Down 1 - Static */}
            <div className="text-3xl text-blue-400">
              ↓
            </div>

            {/* AI Processing - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center w-full max-w-xs"
            >
              <motion.div
                className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg shadow-2xl mb-4 relative overflow-hidden"
              >
                <Image 
                  src="/animated gif 3sn.gif" 
                  alt="AI Processing Animation" 
                  width={150} 
                  height={150} 
                  className="rounded-md"
                  unoptimized
                />
                
                {/* Processing particles - Static for mobile */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-lg opacity-60" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-lg opacity-60" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-white text-base font-semibold text-center"
              >
                {t('technology.steps.aiAnalysis')}
              </motion.div>
              <div className="text-gray-400 text-sm text-center">{t('technology.steps.processing')}</div>
            </motion.div>

            {/* Arrow Down 2 - Static */}
            <div className="text-3xl text-purple-400">
              ↓
            </div>

            {/* Output Cost - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center w-full max-w-xs"
            >
              <motion.div
                className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl shadow-2xl mb-4 relative overflow-hidden"
              >
                <div className="text-3xl font-bold text-white">
                 2.3 €
                </div>
                
                {/* Money particles - Static mobile */}
                <div className="absolute top-1 left-1 text-yellow-300 text-base opacity-70">
                  💰
                </div>
                <div className="absolute top-1 right-1 text-yellow-300 text-base opacity-70">
                  💎
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-white text-base font-semibold text-center"
              >
                {t('technology.steps.costEstimation')}
              </motion.div>
              <div className="text-gray-400 text-sm text-center">{t('technology.steps.output')}</div>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
}
