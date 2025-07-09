
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShieldAlt, FaLinkedin, FaGithub, FaArrowUp, FaBars, FaTimes, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { MdSecurity, MdAnalytics, MdWarning } from 'react-icons/md';
import ParticleBackground from '../components/ParticleBackground';
import NavigationBar from '../components/NavigationBar';
import PhishingDetector from '../components/PhishingDetector';
import AboutSection from '../components/AboutSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import PrivacyPolicy from '../components/PrivacyPolicy';
import TermsOfService from '../components/TermsOfService';
import SecurityInfo from '../components/SecurityInfo';

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-x-hidden">
      <ParticleBackground />
      
      <NavigationBar 
        onNavigate={scrollToSection}
        onModalOpen={setActiveModal}
      />

      {/* Hero Section */}
      <motion.section 
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <FaShieldAlt className="text-6xl text-cyan-400 mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
              PhishNix
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Advanced Phishing Email Detection & Analysis
            </p>
          </motion.div>

          <PhishingDetector />
        </div>
      </motion.section>

      <AboutSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer onModalOpen={setActiveModal} />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 z-50"
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modals */}
      <AnimatePresence>
        {activeModal === 'privacy' && (
          <PrivacyPolicy onClose={() => setActiveModal(null)} />
        )}
        {activeModal === 'terms' && (
          <TermsOfService onClose={() => setActiveModal(null)} />
        )}
        {activeModal === 'security' && (
          <SecurityInfo onClose={() => setActiveModal(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
