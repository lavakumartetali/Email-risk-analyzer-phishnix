
import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaLock, FaShieldAlt, FaServer, FaBug } from 'react-icons/fa';
import { MdSecurity, MdHttps, MdBugReport } from 'react-icons/md';

interface SecurityInfoProps {
  onClose: () => void;
}

const SecurityInfo: React.FC<SecurityInfoProps> = ({ onClose }) => {
  const securityFeatures = [
    {
      icon: MdHttps,
      title: 'HTTPS Encryption',
      description: 'All communications between your browser and our servers are encrypted using industry-standard HTTPS/TLS protocols.'
    },
    {
      icon: FaServer,
      title: 'No Data Storage',
      description: 'Email content is processed in-memory only and immediately discarded. We never store your sensitive email data.'
    },
    {
      icon: MdSecurity,
      title: 'Rate Limiting',
      description: 'Advanced rate limiting and abuse protection prevent malicious usage while ensuring service availability.'
    },
    {
      icon: FaShieldAlt,
      title: 'Security Monitoring',
      description: 'Continuous monitoring for suspicious activities and automated threat detection systems.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-800 rounded-2xl border border-green-500/20 max-w-4xl max-h-[80vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <FaLock className="text-2xl text-green-400" />
            <h2 className="text-2xl font-bold text-white">Security Information</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-100px)]">
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Our Security Commitment</h3>
              <p className="text-gray-300 leading-relaxed">
                At PhishNix, security is not just a feature—it's our foundation. We implement multiple 
                layers of security to ensure your data remains protected while using our phishing detection service.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Security Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-700/30 rounded-lg p-4 border border-green-500/20"
                  >
                    <div className="flex items-start space-x-3">
                      <feature.icon className="text-2xl text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Data Handling</h3>
              <div className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-2">✅ What We Do</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>Process email content in real-time for analysis</li>
                    <li>Use secure, encrypted connections for all communications</li>
                    <li>Implement strict access controls and monitoring</li>
                    <li>Regular security audits and vulnerability assessments</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-red-400 mb-2">❌ What We Don't Do</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>Store or log your email content</li>
                    <li>Share your data with third parties</li>
                    <li>Track or profile individual users</li>
                    <li>Retain sensitive information after analysis</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Protection Against Abuse</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-cyan-400 rounded-full"></span>
                  <span className="text-gray-300">Rate limiting to prevent service abuse</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                  <span className="text-gray-300">IP monitoring and suspicious activity detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span className="text-gray-300">Automated blocking of malicious requests</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  <span className="text-gray-300">Content filtering to prevent harmful submissions</span>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Reporting Security Issues</h3>
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <MdBugReport className="text-2xl text-orange-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-2">Responsible Disclosure</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      If you discover a security vulnerability in PhishNix, we appreciate your help in 
                      disclosing it to us responsibly.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-300">
                        <strong className="text-white">Security Contact:</strong> lavakumartetali@gmail.com
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Response Time:</strong> Within 24-48 hours
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Subject Line:</strong> [SECURITY] Vulnerability Report
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Security Best Practices</h3>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-blue-400 mb-3">Tips for Safe Email Analysis</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                  <li>Always verify suspicious emails through multiple sources</li>
                  <li>Never click links or download attachments from suspicious emails</li>
                  <li>Use PhishNix as one tool in your security toolkit, not the only one</li>
                  <li>Keep your browser and security software up to date</li>
                  <li>When in doubt, contact the supposed sender through a verified channel</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-4">Security Updates</h3>
              <p className="text-gray-300">
                We continuously monitor for security threats and update our systems accordingly. 
                Major security updates will be communicated through our website and official channels. 
                We recommend checking our security page periodically for the latest information.
              </p>
            </section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SecurityInfo;
