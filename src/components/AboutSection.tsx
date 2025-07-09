
import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaEye, FaBrain, FaRocket } from 'react-icons/fa';
import { MdSecurity, MdAnalytics, MdWarning } from 'react-icons/md';

const AboutSection = () => {
  const features = [
    {
      icon: FaBrain,
      title: 'AI-Powered Analysis',
      description: 'Advanced pattern recognition to identify sophisticated phishing attempts'
    },
    {
      icon: MdSecurity,
      title: 'Real-time Detection',
      description: 'Instant analysis of email content for immediate threat assessment'
    },
    {
      icon: FaEye,
      title: 'Comprehensive Scanning',
      description: 'Examines subject lines, body content, URLs, and suspicious patterns'
    },
    {
      icon: MdAnalytics,
      title: 'Risk Scoring',
      description: 'Provides detailed risk scores and explanations for detected threats'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            About PhishNix
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            PhishNix is an advanced phishing email detection system that uses sophisticated pattern recognition 
            and threat analysis to protect you from malicious emails. Our system analyzes multiple aspects of 
            email content to provide comprehensive security assessment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-400/40 transition-all duration-300"
            >
              <feature.icon className="text-4xl text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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
          <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl border border-purple-500/30 p-8">
            <MdWarning className="text-5xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Common Phishing Tactics We Detect</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Urgent Language</h4>
                <p className="text-gray-300 text-sm">"Act now", "Limited time", "Verify immediately"</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Suspicious URLs</h4>
                <p className="text-gray-300 text-sm">IP addresses, URL shorteners, unusual domains</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Information Requests</h4>
                <p className="text-gray-300 text-sm">Password requests, financial information, personal data</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
