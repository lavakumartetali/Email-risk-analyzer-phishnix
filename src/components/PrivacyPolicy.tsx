
import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaShieldAlt } from 'react-icons/fa';

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
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
        className="bg-slate-800 rounded-2xl border border-cyan-500/20 max-w-4xl max-h-[80vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <FaShieldAlt className="text-2xl text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
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
            <p className="text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">1. Introduction</h3>
              <p className="text-gray-300 leading-relaxed">
                PhishNix is committed to protecting your privacy and ensuring the security of your data. 
                This Privacy Policy explains how we collect, use, and protect information when you use our 
                phishing email detection service.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Email Content (Temporary)</h4>
                  <p className="text-gray-300">
                    When you use our analyzer, we temporarily process the email subject and body content 
                    you provide. This data is processed in-memory and is not stored on our servers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Usage Analytics</h4>
                  <p className="text-gray-300">
                    We may collect anonymous usage statistics to improve our service, including analysis 
                    frequency and general threat detection metrics.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>To analyze email content for phishing indicators</li>
                <li>To provide you with security assessment results</li>
                <li>To improve our detection algorithms</li>
                <li>To maintain and improve our service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">4. Data Storage & Retention</h3>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <p className="text-green-300 font-semibold mb-2">✅ We Do Not Store Email Content</p>
                <p className="text-gray-300">
                  All email content you submit for analysis is processed in real-time and immediately 
                  discarded. We do not store, log, or retain any of your email content on our servers.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">5. Third-Party Services</h3>
              <p className="text-gray-300 mb-4">
                Our service may use the following third-party services:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Google Fonts for typography</li>
                <li>Analytics services for usage statistics (anonymized)</li>
                <li>Content Delivery Networks for performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">6. Security Measures</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>All communications are encrypted using HTTPS</li>
                <li>No persistent storage of sensitive data</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to system components</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">7. Your Rights</h3>
              <p className="text-gray-300">
                Since we do not store your email content, there is no personal data to access, modify, 
                or delete. If you have concerns about our privacy practices, please contact us at 
                lavakumartetali@gmail.com.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">8. Contact Information</h3>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong className="text-white">Email:</strong> lavakumartetali@gmail.com<br />
                  <strong className="text-white">Location:</strong> Hyderabad, India
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-4">9. Changes to This Policy</h3>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. Any changes will be posted on this 
                page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrivacyPolicy;
