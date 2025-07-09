
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaUpload, FaSearch, FaChartLine, FaCheckCircle } from 'react-icons/fa';

const HowItWorksSection = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    {
      icon: FaUpload,
      title: 'Input Email Content',
      description: 'Paste your email subject and body content into our secure analyzer',
      details: [
        'Copy and paste email subject line',
        'Add the complete email body content',
        'All data is processed locally and not stored',
        'Supports plain text and HTML content'
      ]
    },
    {
      icon: FaSearch,
      title: 'Pattern Analysis',
      description: 'Our system scans for known phishing patterns and suspicious elements',
      details: [
        'Keyword pattern matching for urgent language',
        'URL analysis for suspicious domains',
        'Financial keyword detection',
        'Social engineering indicator identification'
      ]
    },
    {
      icon: FaChartLine,
      title: 'Risk Assessment',
      description: 'Generate a comprehensive risk score based on detected threats',
      details: [
        'Weighted scoring system for different threat types',
        'Real-time risk calculation',
        'Detailed breakdown of detected issues',
        'Color-coded risk levels for quick understanding'
      ]
    },
    {
      icon: FaCheckCircle,
      title: 'Results & Recommendations',
      description: 'Receive detailed analysis results with actionable recommendations',
      details: [
        'Clear verdict: Safe, Suspicious, or Phishing',
        'Detailed list of detected threats',
        'Risk score with visual indicators',
        'Recommendations for next steps'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our advanced detection system follows a comprehensive 4-step process to analyze and assess email threats
          </p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-md rounded-xl border border-cyan-500/20 overflow-hidden">
                <motion.button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-300"
                  onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <step.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Step {index + 1}: {step.title}
                      </h3>
                      <p className="text-gray-300 mt-1">{step.description}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedStep === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-cyan-400 text-xl" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {expandedStep === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-600/50"
                    >
                      <div className="p-6 pt-4">
                        <ul className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <motion.li
                              key={detailIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: detailIndex * 0.1 }}
                              className="flex items-center space-x-3 text-gray-300"
                            >
                              <span className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-full w-0.5 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 transform translate-x-5" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Detection Accuracy</h3>
            <p className="text-gray-300 mb-6">
              Our system combines multiple detection methods to provide comprehensive email security analysis
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Threat Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">&lt;2s</div>
                <div className="text-gray-300">Average Analysis Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-gray-300">Detection Patterns</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
