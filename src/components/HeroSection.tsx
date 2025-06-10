'use client';

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
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
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            AI-powered cost estimation for{" "}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.02 }}
            >
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                manufacturers
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 via-blue-500/20 to-indigo-600/20 rounded-lg blur-xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.span>
            {" "}— fast, consistent, scalable.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Generate cost estimates from engineering drawings using AI — in under 60 seconds. 
            Deliver faster, smarter quotes to your customers.
          </motion.p>

          {/* Feature highlights */}
     

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                backgroundColor: "#2563eb"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 border border-blue-500/30"
            >
              <span className="flex items-center gap-3">
                <span>Request A Demo</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
    
        </motion.div>

        {/* Right Side - Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center items-center order-first lg:order-last"
        >
          <div className="relative w-full max-w-lg">
            {/* Main Image */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              onClick={() => setSelectedImage("/image_1.png")}
              className="relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/30 to-blue-600/30 rounded-2xl blur-xl"></div>
              <motion.div 
                className="relative bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-2xl"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
                  borderColor: "rgba(56, 189, 248, 0.6)",
                  transition: { duration: 0.2 }
                }}
              >
                <Image 
                  src="/image_1.png" 
                  alt="Technical Drawing Sample" 
                  width={400} 
                  height={300} 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </motion.div>
            </motion.div>

            {/* Secondary Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ 
                opacity: 0.9,
                scale: 1
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.6 },
                scale: { duration: 0.8, delay: 0.6 }
              }}
              whileHover={{ 
                scale: 1.1,
                zIndex: 50,
                transition: { duration: 0.2 }
              }}
              onClick={() => setSelectedImage("/image_2.png")}
              className="absolute -bottom-6 -right-6 cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/25 to-indigo-700/25 rounded-xl blur-lg"></div>
                <motion.div 
                  className="relative bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-3 shadow-xl"
                  whileHover={{ 
                    boxShadow: "0 20px 40px -12px rgba(79, 70, 229, 0.4)",
                    borderColor: "rgba(99, 102, 241, 0.6)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <Image 
                    src="/image_2.png" 
                    alt="Engineering Drawing" 
                    width={180} 
                    height={140} 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25,
                duration: 0.6 
              }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"></div>
              
              {/* Modal Content */}
              <div className="relative p-8">
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-12 h-12 bg-red-500/20 hover:bg-red-500/30 backdrop-blur-sm border border-red-300/30 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all duration-300"
                >
                  ×
                </motion.button>

                {/* Image Container */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-blue-600/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-2xl">
                    <Image
                      src={selectedImage}
                      alt="Technical Drawing Detail"
                      width={800}
                      height={600}
                      className="rounded-xl shadow-2xl w-full h-auto object-contain max-h-[70vh]"
                    />
                  </div>
                </motion.div>

                {/* Image Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mt-6 text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedImage.includes('image_1') ? 'Technical Drawing Sample' : 'Engineering Blueprint'}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {selectedImage.includes('image_1') 
                      ? 'Upload similar technical drawings to get instant cost estimations'
                      : 'Detailed engineering drawings processed with AI precision'
                    }
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-center gap-4 mt-6">
                 
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImage(null)}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                    >
                      Close
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
