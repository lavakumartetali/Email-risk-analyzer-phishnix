
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';

interface AnalysisResult {
  verdict: 'safe' | 'suspicious' | 'phishing';
  score: number;
  detectedThreats: string[];
  suspiciousElements: string[];
}

const PhishingDetector = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const phishingPatterns = {
    urgent: [
      'act now', 'urgent', 'immediate', 'expire', 'limited time', 'hurry',
      'click here', 'verify now', 'update immediately', 'suspend', 'frozen'
    ],
    financial: [
      'bank account', 'credit card', 'social security', 'tax refund',
      'lottery', 'inheritance', 'wire transfer', 'bitcoin', 'paypal'
    ],
    suspicious: [
      'congratulations', 'winner', 'selected', 'claim', 'reward',
      'free money', 'no questions asked', 'confidential'
    ],
    urls: [
      /\d+\.\d+\.\d+\.\d+/, // IP addresses
      /bit\.ly|tinyurl|t\.co/, // URL shorteners
      /[a-z0-9-]+\.tk|\.ml|\.ga|\.cf/ // Suspicious TLDs
    ]
  };

  const analyzeContent = (text: string) => {
    const threats: string[] = [];
    const suspicious: string[] = [];
    let score = 0;

    const lowerText = text.toLowerCase();

    // Check for urgent language
    phishingPatterns.urgent.forEach(pattern => {
      if (lowerText.includes(pattern)) {
        threats.push(`Urgent language detected: "${pattern}"`);
        score += 15;
      }
    });

    // Check for financial keywords
    phishingPatterns.financial.forEach(pattern => {
      if (lowerText.includes(pattern)) {
        threats.push(`Financial keyword detected: "${pattern}"`);
        score += 20;
      }
    });

    // Check for suspicious keywords
    phishingPatterns.suspicious.forEach(pattern => {
      if (lowerText.includes(pattern)) {
        suspicious.push(`Suspicious keyword: "${pattern}"`);
        score += 10;
      }
    });

    // Check for suspicious URLs
    phishingPatterns.urls.forEach(pattern => {
      const matches = text.match(pattern);
      if (matches) {
        threats.push(`Suspicious URL pattern detected`);
        score += 25;
      }
    });

    // Check for password/login requests
    if (lowerText.includes('password') || lowerText.includes('login')) {
      threats.push('Password/login information requested');
      score += 20;
    }

    return { threats, suspicious, score };
  };

  const handleAnalyze = async () => {
    if (!subject.trim() && !body.trim()) return;

    setIsAnalyzing(true);
    setResult(null);

    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    const combinedText = `${subject} ${body}`;
    const analysis = analyzeContent(combinedText);
    
    let verdict: 'safe' | 'suspicious' | 'phishing' = 'safe';
    if (analysis.score >= 40) {
      verdict = 'phishing';
    } else if (analysis.score >= 20) {
      verdict = 'suspicious';
    }

    setResult({
      verdict,
      score: Math.min(analysis.score, 100),
      detectedThreats: analysis.threats,
      suspiciousElements: analysis.suspicious
    });

    setIsAnalyzing(false);
  };

  const getVerdictConfig = (verdict: string) => {
    switch (verdict) {
      case 'safe':
        return {
          icon: FaCheckCircle,
          color: 'text-green-400',
          bgColor: 'bg-green-500/20',
          borderColor: 'border-green-500/30',
          title: '✅ Likely Safe',
          description: 'No significant phishing indicators detected.'
        };
      case 'suspicious':
        return {
          icon: FaExclamationTriangle,
          color: 'text-yellow-400',
          bgColor: 'bg-yellow-500/20',
          borderColor: 'border-yellow-500/30',
          title: '⚠️ Suspicious',
          description: 'Some concerning elements detected. Exercise caution.'
        };
      case 'phishing':
        return {
          icon: FaTimesCircle,
          color: 'text-red-400',
          bgColor: 'bg-red-500/20',
          borderColor: 'border-red-500/30',
          title: '❌ Likely Phishing',
          description: 'High risk of phishing. Do not interact with this email.'
        };
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="w-full max-w-7xl mx-auto"
    >
      <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-8 shadow-2xl">
        <div className="space-y-6">
          {/* Subject Input */}
          <div className="relative">
            <motion.input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              placeholder="Email Subject"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.div
              className="absolute inset-0 rounded-lg border-2 border-cyan-400/0 pointer-events-none"
              animate={{
                borderColor: subject ? 'rgba(34, 197, 194, 0.3)' : 'rgba(34, 197, 194, 0)'
              }}
            />
          </div>

          {/* Body Textarea */}
          <div className="relative">
            <motion.textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={6}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
              placeholder="Email Body Content"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.div
              className="absolute inset-0 rounded-lg border-2 border-cyan-400/0 pointer-events-none"
              animate={{
                borderColor: body ? 'rgba(34, 197, 194, 0.3)' : 'rgba(34, 197, 194, 0)'
              }}
            />
          </div>

          {/* Analyze Button */}
          <motion.button
            onClick={handleAnalyze}
            disabled={isAnalyzing || (!subject.trim() && !body.trim())}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-center space-x-3">
              {isAnalyzing ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <FaSearch />
                  <span>Analyze Email</span>
                </>
              )}
            </div>
          </motion.button>
        </div>
      </div>

      {/* Results */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            {(() => {
              const config = getVerdictConfig(result.verdict);
              if (!config) return null;

              const { icon: Icon, color, bgColor, borderColor, title, description } = config;

              return (
                <div className={`${bgColor} ${borderColor} border rounded-2xl p-6`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon className={`text-2xl ${color}`} />
                    <div>
                      <h3 className="text-xl font-bold text-white">{title}</h3>
                      <p className="text-gray-300">{description}</p>
                    </div>
                  </div>

                  {/* Risk Score */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Risk Score</span>
                      <span className={`font-bold ${color}`}>{result.score}/100</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${
                          result.verdict === 'safe' ? 'bg-green-400' :
                          result.verdict === 'suspicious' ? 'bg-yellow-400' : 'bg-red-400'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${result.score}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Detected Threats */}
                  {result.detectedThreats.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Detected Threats:</h4>
                      <ul className="space-y-1">
                        {result.detectedThreats.map((threat, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="text-red-300 flex items-center space-x-2"
                          >
                            <span className="w-2 h-2 bg-red-400 rounded-full" />
                            <span>{threat}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Suspicious Elements */}
                  {result.suspiciousElements.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Suspicious Elements:</h4>
                      <ul className="space-y-1">
                        {result.suspiciousElements.map((element, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="text-yellow-300 flex items-center space-x-2"
                          >
                            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                            <span>{element}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PhishingDetector;
