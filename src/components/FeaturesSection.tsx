'use client';

import { motion } from "framer-motion";

interface Feature {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: "⚡",
    title: "Automate Cost Estimation",
    description: "Automate the cost estimation process to save time and labor. Process engineering drawings in under 60 seconds.",
    gradient: "from-sky-400 to-blue-500"
  },
  {
    icon: "🎯",
    title: "Consistent & Transparent",
    description: "Ensure consistency and transparency in your pricing across all projects and teams.",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    icon: "🔍",
    title: "Detect Outliers",
    description: "Detect cost outliers and inconsistencies in past human estimates with AI-powered analysis.",
    gradient: "from-indigo-600 to-blue-800"
  },
  {
    icon: "📈",
    title: "Faster Quotes",
    description: "Deliver faster, smarter quotes to your customers and win more business with competitive pricing.",
    gradient: "from-sky-400 to-blue-600"
  },
  {
    icon: "🏭",
    title: "Manufacturing Focus",
    description: "Specifically designed for manufacturers with engineering drawing workflows and manufacturing processes.",
    gradient: "from-blue-500 to-indigo-700"
  },
  {
    icon: "🔐",
    title: "Enterprise Security",
    description: "Built for enterprise scale with bank-level security protocols and data protection.",
    gradient: "from-indigo-600 to-blue-900"
  }
];

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
        <motion.div
          whileHover={{ 
            scale: 1.2,
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.6 }
          }}
          className="relative mb-6"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-20 scale-150`}></div>
          <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl backdrop-blur-sm border border-white/20 shadow-lg`}>
            {feature.icon}
          </div>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-4 group-hover:text-sky-300 transition-colors duration-300"
        >
          {feature.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
          className="text-gray-300 leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300"
        >
          {feature.description}
        </motion.p>

        {/* Hover effect line */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`}
        />
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-sky-400/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-600/10 to-blue-800/10 rounded-full blur-3xl"
        />
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
              Enterprise-Grade Features
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
            Powerful{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              API Features
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Advanced machine learning technology combined with enterprise-level security 
            and lightning-fast processing for professional cost estimation.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
