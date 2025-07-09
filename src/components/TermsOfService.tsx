
import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaGavel } from 'react-icons/fa';

interface TermsOfServiceProps {
  onClose: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onClose }) => {
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
        className="bg-slate-800 rounded-2xl border border-purple-500/20 max-w-4xl max-h-[80vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <FaGavel className="text-2xl text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
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
              <h3 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h3>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using PhishNix, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to abide by the above, please do 
                not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">2. Service Description</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                PhishNix is a phishing email detection and analysis service that:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Analyzes email content for potential phishing indicators</li>
                <li>Provides risk assessment scores and detailed analysis</li>
                <li>Offers educational information about email security</li>
                <li>Does not guarantee 100% accuracy in threat detection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">3. Disclaimer of Accuracy</h3>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <p className="text-yellow-300 font-semibold mb-2">⚠️ Important Notice</p>
                <p className="text-gray-300">
                  PhishNix provides analysis based on pattern recognition and heuristics. We do not 
                  guarantee complete accuracy or that all phishing attempts will be detected. Users 
                  should always exercise caution and use additional security measures.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">4. User Responsibilities</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Acceptable Use</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Use the service only for legitimate security analysis</li>
                    <li>Do not submit illegal, harmful, or malicious content</li>
                    <li>Do not attempt to reverse engineer or exploit the service</li>
                    <li>Respect rate limits and fair usage policies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Prohibited Activities</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Using the service to create or improve phishing attacks</li>
                    <li>Automated abuse or excessive usage</li>
                    <li>Attempting to compromise system security</li>
                    <li>Violating any applicable laws or regulations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">5. Intellectual Property</h3>
              <p className="text-gray-300">
                All content, features, and functionality of PhishNix, including but not limited to 
                text, graphics, logos, icons, images, audio clips, and software, are the exclusive 
                property of PhishNix and are protected by copyright, trademark, and other intellectual 
                property laws.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">6. Limitation of Liability</h3>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-red-300 font-semibold mb-2">⚠️ Limitation Notice</p>
                <p className="text-gray-300">
                  PhishNix and its operators shall not be liable for any direct, indirect, incidental, 
                  special, consequential, or punitive damages arising from your use of or inability to 
                  use the service, including but not limited to damages for loss of profits, goodwill, 
                  use, data, or other intangible losses.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">7. Service Availability</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>We strive to maintain high availability but do not guarantee uninterrupted service</li>
                <li>Maintenance windows may temporarily affect service availability</li>
                <li>We reserve the right to modify or discontinue features with notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">8. Termination</h3>
              <p className="text-gray-300">
                We reserve the right to terminate or suspend your access to the service immediately, 
                without prior notice or liability, for any reason whatsoever, including without 
                limitation if you breach the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">9. Changes to Terms</h3>
              <p className="text-gray-300">
                We reserve the right to modify or replace these Terms at any time. If a revision is 
                material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-4">10. Contact Information</h3>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <p className="text-gray-300">
                  If you have any questions about these Terms of Service, please contact us:<br />
                  <strong className="text-white">Email:</strong> lavakumartetali@gmail.com<br />
                  <strong className="text-white">Location:</strong> Hyderabad, India
                </p>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TermsOfService;
