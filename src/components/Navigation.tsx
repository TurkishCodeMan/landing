'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center py-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg shadow-lg"
            >
              <Image
                src="/icon-192x192.png"
                alt="Draw2Cost Logo"
                width={32}
                height={32}
                className="rounded"
              />
            </motion.div>
            <motion.h1 
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="text-2xl font-bold text-white tracking-wide relative group"
            >
              <span className="relative z-10">Draw2Cost</span>
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full w-0"
              />
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
