'use client';

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements - Optimized */}
      <div className="absolute inset-0">
        {/* Large floating orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-sky-400/30 to-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.2, 0.15]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-br from-blue-600/40 to-indigo-700/40 rounded-full blur-3xl"
        />
        
        {/* Geometric shapes - Optimized */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-24 h-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl rotate-45"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.02, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-sky-400/10 to-blue-600/10 rounded-full border border-white/10"
        />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
        >
          <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
          <span className="text-white/80 text-sm font-medium tracking-wide">
            Ready to Transform Your Workflow?
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
        >
          Start Building with{" "}
          <motion.span 
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Draw2Cost
            </span>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 via-blue-500/20 to-indigo-600/20 rounded-lg blur-xl opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Get your free API key and start converting technical drawings into precise cost estimates. 
          Join thousands of developers who trust our enterprise-grade platform.
        </motion.p>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 group"
          >
            <div className="text-3xl font-bold text-sky-400 mb-2">99.9%</div>
            <div className="text-white/80 text-sm">API Uptime</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 group"
          >
            <div className="text-3xl font-bold text-blue-500 mb-2">&lt; 2s</div>
            <div className="text-white/80 text-sm">Response Time</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 group"
          >
            <div className="text-3xl font-bold text-indigo-400 mb-2">1000+</div>
            <div className="text-white/80 text-sm">Happy Developers</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
