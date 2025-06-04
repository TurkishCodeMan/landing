'use client';

'use client';

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-gray-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-sky-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-indigo-600 rounded-full blur-3xl"
        />
      </div>

      <div className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent"
              >
                Draw2Cost
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg leading-relaxed mb-6"
              >
                Advanced API solution that analyzes your technical drawings with AI 
                and provides instant cost estimation.
              </motion.p>
              
              {/* Animated Tech Icons */}
              <div className="flex space-x-4">
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-3xl"
                >
                  🤖
                </motion.div>
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="text-3xl"
                >
                  📊
                </motion.div>
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="text-3xl"
                >
                  ⚡
                </motion.div>
              </div>
            </motion.div>

            {/* Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <motion.h4
                whileHover={{ x: 5 }}
                className="text-xl font-semibold mb-6 text-sky-400"
              >
                Need Easier Solutions?
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg mb-4"
              >
                We can help you.
              </motion.p>
              
              {/* Animated Help Icons */}
              <div className="flex space-x-6 mb-6">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="bg-sky-600/20 p-3 rounded-full border border-sky-400/30"
                >
                  <div className="text-2xl">💡</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  className="bg-blue-600/20 p-3 rounded-full border border-blue-400/30"
                >
                  <div className="text-2xl">🚀</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="bg-indigo-600/20 p-3 rounded-full border border-indigo-400/30"
                >
                  <div className="text-2xl">🎯</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <motion.h4
                whileHover={{ x: 5 }}
                className="text-xl font-semibold mb-6 text-blue-400"
              >
                Contact
              </motion.h4>
              
              {/* Address with Animation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:border-blue-400/30 transition-all"
                >
                  <div className="flex items-start space-x-3">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-2xl mt-1"
                    >
                      📍
                    </motion.div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">Address:</h5>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Boğaziçi Teknopark,<br />
                        Boğaziçi University North Campus,<br />
                        Rumelihisari Mah., Bebek Yolu Sk.<br />
                        No:2/5, Inner door no: 108,<br />
                        Sarıyer, Istanbul, Turkey
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Email with Animation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="mailto:info@draw2cost.com"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-gradient-to-r from-sky-600/20 to-blue-600/20 backdrop-blur-sm p-4 rounded-lg border border-sky-400/30 hover:border-blue-400/50 transition-all block"
                >
                  <div className="flex items-center space-x-3">
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
                      className="text-2xl"
                    >
                      ✉️
                    </motion.div>
                    <div>
                      <h5 className="font-semibold text-white">Email:</h5>
                      <p className="text-sky-300 hover:text-sky-200 transition-colors">
                        info@draw2cost.com
                      </p>
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-700"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 text-sm"
              >
                © 2025 Draw2Cost
              </motion.p>
              
              {/* Animated Status Indicator */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex items-center space-x-2 mt-4 md:mt-0"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-400">API Active</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
