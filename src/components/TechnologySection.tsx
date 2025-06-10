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
          <div className="flex items-center justify-between">
            {/* Input PNG */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotateY: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
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
                PNG File
              </motion.div>
              <div className="text-gray-400 text-sm">{t('technology.steps.input')}</div>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-4xl text-blue-400"
              >
                →
              </motion.div>
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
                animate={{ 
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
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
                
                {/* Processing particles */}
                <motion.div
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-lg"
                />
                <motion.div
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-lg"
                />
                <motion.div
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute top-0 -left-3 w-2 h-2 bg-blue-400 rounded-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-white text-lg font-semibold"
              >
                AI Analysis
              </motion.div>
              <div className="text-gray-400 text-sm">{t('technology.steps.processing')}</div>
            </motion.div>

            {/* Arrow 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="text-4xl text-purple-400"
              >
                →
              </motion.div>
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
                animate={{ 
                  y: [0, -10, 0],
                  boxShadow: [
                    "0 10px 30px rgba(34, 197, 94, 0.3)",
                    "0 20px 40px rgba(34, 197, 94, 0.4)",
                    "0 10px 30px rgba(34, 197, 94, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-2xl mb-4 relative overflow-hidden"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-4xl font-bold text-white"
                >
                 2.3 €
                </motion.div>
                
                {/* Money particles */}
                <motion.div
                  animate={{ 
                    y: [-20, 20],
                    opacity: [1, 0],
                    scale: [0.5, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  className="absolute top-2 left-2 text-yellow-300 text-lg"
                >
                  💰
                </motion.div>
                <motion.div
                  animate={{ 
                    y: [-20, 20],
                    opacity: [1, 0],
                    scale: [0.5, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.5
                  }}
                  className="absolute top-2 right-2 text-yellow-300 text-lg"
                >
                  💎
                </motion.div>
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

          {/* Mobile arrows */}
          <div className="md:hidden flex flex-col items-center mt-8 space-y-4">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-4xl text-blue-400"
            >
              ↓
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="text-4xl text-purple-400"
            >
              ↓
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
}
