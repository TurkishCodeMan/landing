'use client';

import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

const steps: Step[] = [
  {
    title: "Upload File",
    description: "Upload your DWG, PNG, or DXF technical drawings to our secure API endpoint for processing.",
    icon: "📁",
    gradient: "from-sky-400 to-blue-500"
  },
  {
    title: "AI Analysis",
    description: "Our advanced machine learning models extract features and analyze your technical drawings.",
    icon: "🤖",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Get Results",
    description: "Receive detailed cost estimations and comprehensive analysis reports instantly via API.",
    icon: "📊",
    gradient: "from-indigo-600 to-blue-800"
  }
];

function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Background glow effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}
        whileHover={{ scale: 1.1 }}
      />
      
      {/* Main card */}
      <motion.div
        whileHover={{ 
          scale: 1.05, 
          y: -10,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 text-center"
      >
        {/* Step number with gradient background */}
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 }
          }}
          className={`bg-gradient-to-br ${step.gradient} text-white w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl relative overflow-hidden group-hover:shadow-2xl transition-shadow duration-300`}
        >
          <span className="relative z-10">{index + 1}</span>
          <motion.div
            className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.2 }}
          />
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.2,
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.5 }
          }}
          className="text-5xl mb-4"
        >
          {step.icon}
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-4 group-hover:text-sky-200 transition-colors duration-300"
        >
          {step.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
          viewport={{ once: true }}
          className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300"
        >
          {step.description}
        </motion.p>

        {/* Bottom gradient line */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.gradient} w-0 group-hover:w-full rounded-full transition-all duration-500 ease-out`}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background geometric shapes */}
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
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-600/10 to-blue-800/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 30, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-3xl rotate-45"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
            <span className="text-white/80 text-sm font-medium tracking-wide">
              Simple 3-Step Process
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            How It{" "}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                Works
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 to-blue-600/20 rounded-lg blur-xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your technical drawings into precise cost estimates in just three simple steps. 
            Experience the power of AI-driven analysis and automation.
          </motion.p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* Process flow arrows for desktop */}
        <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2">
          {/* Arrow 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/4 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-4xl text-sky-400"
            >
              →
            </motion.div>
          </motion.div>

          {/* Arrow 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
            className="absolute right-1/4 transform translate-x-1/2"
          >
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="text-4xl text-blue-500"
            >
              →
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
