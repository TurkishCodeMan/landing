'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-1">
        <div className="flex justify-between items-center py-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-1"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="p-1 rounded-lg shadow-lg flex items-center justify-center"
            >
              <Image
                src="/draw2cost_log.png"
                alt="Draw2Cost Logo"
                width={50}
                height={50}
                className="rounded"
              />
            </motion.div>
            <motion.h1 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-2xl font-bold text-white tracking-wide relative group ml-2"
            >
              <span className="relative z-10">DRAW2COST</span>
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full w-0"
              />
            </motion.h1>
          </motion.div>
          
          {/* Language Switcher - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LanguageSwitcher />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
