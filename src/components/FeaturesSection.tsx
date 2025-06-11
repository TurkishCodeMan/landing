'use client';

import { motion } from "framer-motion";
import { useTranslate } from "@/hooks/useTranslate";

interface Feature {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"></div>
      
      {/* Gradient Glow */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
        whileHover={{ scale: 1.05 }}
      />
      
      {/* Card Content */}
      <div className="relative p-8 h-full flex flex-col">
        {/* Icon with animated background */}
    

        {/* Title */}
        <motion.h3 
          className="text-xl font-bold text-white mb-4 flex-grow-0"
          whileHover={{ x: 5 }}
        >
          {feature.title}
        </motion.h3>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-md flex-grow">
          {feature.description}
        </p>

        {/* Hover indicator */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
          className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full mt-6 opacity-0 group-hover:opacity-100`}
        />
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const { t } = useTranslate();
  
  // Get features from translations
  const features: Feature[] = t('features.list').map((feature: { title: string; description: string }, index: number) => ({
    icon: ["⚡", "🎯", "🔍", "📈", "🏭", "🔒"][index],
    title: feature.title,
    description: feature.description,
    gradient: [
      "from-sky-400 to-blue-500",
      "from-blue-500 to-indigo-600", 
      "from-indigo-600 to-blue-800",
      "from-sky-400 to-blue-600",
      "from-blue-500 to-indigo-700",
      "from-indigo-600 to-blue-900"
    ][index]
  }));

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects - Static */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-sky-400/8 to-blue-500/8 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-600/8 to-blue-800/8 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8"
          >
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
            <span className="text-white/80 text-sm font-medium tracking-wide">
              {t('features.badge')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {t('features.title')}{" "}
            <span className="bg-gradient-to-r  from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              {t('features.titleHighlight')}
            </span>
            <span className="">{t('features.titleEnd')}</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t('features.subtitle')}
          </motion.p>
            <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t('features.subtitleEnd')}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
