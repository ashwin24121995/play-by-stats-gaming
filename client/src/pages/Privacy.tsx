import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <div className="bg-gradient-to-r from-[#14b8a6]/10 to-[#0d9488]/10 border-b-2 border-[#14b8a6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 items-start"
          >
            <Shield className="text-[#14b8a6] flex-shrink-0 mt-1" size={32} />
            <div>
              <h1
                className="text-4xl font-bold text-white mb-2"
                style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
              >
                Privacy Policy
              </h1>
              <p className="text-[#cbd5e1]">
                How we protect and manage your personal information
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 text-[#cbd5e1]"
        >
          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2 className="text-2xl font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Account information (name, email, username)</li>
              <li>Device information (IP address, browser type)</li>
              <li>Usage data (games played, scores, playtime)</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2 className="text-2xl font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and improve our services</li>
              <li>To personalize your gaming experience</li>
              <li>To communicate with you about updates</li>
              <li>To prevent fraud and ensure security</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2 className="text-2xl font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              3. Data Security
            </h2>
            <p className="mb-4">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure password storage with hashing</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal information</li>
              <li>Compliance with data protection regulations</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2 className="text-2xl font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              4. Cookies and Tracking
            </h2>
            <p className="mb-4">
              We use cookies to enhance your experience:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Session cookies for authentication</li>
              <li>Analytics cookies to understand usage</li>
              <li>Preference cookies to remember settings</li>
              <li>You can disable cookies in your browser settings</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2 className="text-2xl font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              5. Third-Party Services
            </h2>
            <p className="mb-4">
              We may share information with trusted third parties:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Payment processors (for future transactions)</li>
              <li>Analytics providers</li>
              <li>Customer support platforms</li>
              <li>All third parties are bound by confidentiality agreements</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2 className="text-2xl font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              6. Your Rights
            </h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2 className="text-2xl font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              7. Contact Us
            </h2>
            <p>
              For privacy concerns or to exercise your rights, contact us at:<br />
              <a href="mailto:privacy@playbystats.com" className="text-[#14b8a6] hover:underline">privacy@playbystats.com</a>
            </p>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#14b8a6]/20 to-[#0d9488]/20 border-2 border-[#14b8a6] rounded-lg p-8 text-center"
          >
            <p className="text-[#cbd5e1] mb-4">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-[#14b8a6] font-bold">
              We are committed to protecting your privacy
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
