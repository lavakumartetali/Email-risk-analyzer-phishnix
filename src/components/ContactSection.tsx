
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about PhishNix or need support? We're here to help protect you from email threats.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-md rounded-xl border border-cyan-500/20 p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-300">lavakumartetali@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-300">Hyderabad, India</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <FaPaperPlane className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Response Time</h4>
                    <p className="text-gray-300">Within 24 hours</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Support Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-md rounded-xl border border-cyan-500/20 p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Support & Security</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <h4 className="text-cyan-400 font-semibold mb-2">Security Reports</h4>
                  <p className="text-gray-300 text-sm">
                    Found a security vulnerability? Please report it responsibly to our security team.
                  </p>
                </div>

                <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <h4 className="text-purple-400 font-semibold mb-2">Feature Requests</h4>
                  <p className="text-gray-300 text-sm">
                    Have ideas for improving PhishNix? We'd love to hear your suggestions.
                  </p>
                </div>

                <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                  <h4 className="text-yellow-400 font-semibold mb-2">Technical Support</h4>
                  <p className="text-gray-300 text-sm">
                    Experiencing issues? Our technical support team is here to help.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/30 p-6">
              <h4 className="text-white font-semibold mb-3">Quick Tips</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span>Always verify sender email addresses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span>Never click suspicious links</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <span>Use PhishNix for email verification</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
