
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaShieldAlt, FaHeart } from 'react-icons/fa';

interface FooterProps {
  onModalOpen: (modal: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onModalOpen }) => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/lava-kumar-reddy-tetali-30829b1a1/',
      color: 'hover:text-blue-500',
      label: 'LinkedIn'
    },
    {
      icon: FaGithub,
      url: 'https://github.com/lavakumartetali',
      color: 'hover:text-gray-400',
      label: 'GitHub'
    }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', action: () => onModalOpen('privacy') },
    { label: 'Terms of Use', action: () => onModalOpen('terms') },
    { label: 'Security', action: () => onModalOpen('security') }
  ];

  return (
    <footer className="relative z-10 border-t border-slate-800 bg-slate-900/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <FaShieldAlt className="text-2xl text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                PhishNix
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Advanced phishing email detection and analysis system. Protecting users from email threats 
              with sophisticated pattern recognition and real-time security assessment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${link.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <link.icon className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'How it Works', 'Contact'].map((item, index) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase().replace(' ', '-'));
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <motion.li key={link.label} whileHover={{ x: 5 }}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 PhishNix. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-400" />
            </motion.div>
            <span>for security</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
