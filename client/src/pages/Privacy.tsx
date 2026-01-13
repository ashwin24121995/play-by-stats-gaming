import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

/**
 * Privacy Policy Page - Play By Stats
 * Design: Purple (#a855f7) & Pink (#ec4899)
 * Features: Comprehensive privacy information and data protection details
 */
export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5f3ff]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-white/90">Your data protection and privacy is our priority</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Introduction */}
          <section className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-8 border border-[#a855f7]/20">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Introduction</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Play By Stats ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our gaming platform. Please read this privacy policy carefully. If you do not agree with our policies and practices, please do not use our Services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <Eye className="text-[#a855f7] flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Information We Collect</h2>
                <div className="space-y-4 text-[#6b7280]">
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-2">Personal Information</h3>
                    <p>We may collect personal information such as your name, email address, and age when you create an account or contact us. This information is collected only when voluntarily provided by you.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-2">Usage Information</h3>
                    <p>We automatically collect certain information about your device and how you interact with our platform, including IP address, browser type, operating system, pages visited, and time spent on our site.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-2">Cookies and Tracking Technologies</h3>
                    <p>We use cookies and similar tracking technologies to enhance your experience, remember your preferences, and understand how you use our platform. You can control cookie settings through your browser.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <Lock className="text-[#ec4899] flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">How We Use Your Information</h2>
                <ul className="space-y-3 text-[#6b7280]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#a855f7] font-bold">•</span>
                    <span>To provide, maintain, and improve our gaming services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a855f7] font-bold">•</span>
                    <span>To process your requests and respond to your inquiries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a855f7] font-bold">•</span>
                    <span>To send you promotional materials and updates (with your consent)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a855f7] font-bold">•</span>
                    <span>To comply with legal obligations and prevent fraud</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a855f7] font-bold">•</span>
                    <span>To analyze usage patterns and improve user experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <Shield className="text-[#a855f7] flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Data Security</h2>
                <p className="text-[#6b7280] leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                </p>
                <p className="text-[#6b7280] leading-relaxed">
                  <strong>Important Note:</strong> Since Play By Stats does not handle real money transactions, your financial information is never stored or processed on our platform. This significantly reduces security risks associated with financial data.
                </p>
              </div>
            </div>
          </section>

          {/* User Rights */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <UserCheck className="text-[#ec4899] flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Your Rights</h2>
                <p className="text-[#6b7280] leading-relaxed mb-4">You have the right to:</p>
                <ul className="space-y-3 text-[#6b7280]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#a855f7] font-bold">•</span>
                    <span>Access your personal information and request a copy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a855f7] font-bold">•</span>
                    <span>Correct inaccurate or incomplete information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a855f7] font-bold">•</span>
                    <span>Request deletion of your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a855f7] font-bold">•</span>
                    <span>Opt-out of marketing communications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a855f7] font-bold">•</span>
                    <span>Request a copy of your data in a portable format</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Third-Party Links */}
          <section className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-8 border border-[#a855f7]/20">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Third-Party Links</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-white/90 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="space-y-2 text-white/80">
              <p><strong>Email:</strong> privacy@playbystats.com</p>
              <p><strong>Address:</strong> Lucknow, Uttar Pradesh, India</p>
              <p><strong>Company:</strong> SDSURABHI INFRA PRIVATE LIMITED</p>
            </div>
          </section>

          {/* Last Updated */}
          <p className="text-center text-[#6b7280] text-sm">
            Last Updated: January 2024 | This policy is effective immediately
          </p>
        </motion.div>
      </div>
    </div>
  );
}
