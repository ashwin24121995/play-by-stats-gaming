import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function Terms() {
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
            <FileText className="text-[#14b8a6] flex-shrink-0 mt-1" size={32} />
            <div>
              <h1
                className="text-4xl font-bold text-white mb-2"
                style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
              >
                Terms & Conditions
              </h1>
              <p className="text-[#cbd5e1]">
                Please read these terms carefully before using our platform
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
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using PlayHub, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2 className="text-2xl font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              2. Age Requirement
            </h2>
            <p>
              You must be at least 18 years of age to use this platform. By using PlayHub, you represent and warrant that you are at least 18 years old.
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2 className="text-2xl font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              3. User Accounts
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree to accept responsibility for all activities under your account</li>
              <li>You must provide accurate and complete information</li>
              <li>You agree not to share your account with others</li>
              <li>We reserve the right to terminate accounts that violate these terms</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2 className="text-2xl font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              4. Prohibited Conduct
            </h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Use the platform for any illegal purpose</li>
              <li>Harass, abuse, or threaten other users</li>
              <li>Attempt to gain unauthorized access</li>
              <li>Use bots, scripts, or automated tools</li>
              <li>Engage in cheating or exploiting game mechanics</li>
              <li>Share offensive or inappropriate content</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2 className="text-2xl font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              5. Intellectual Property
            </h2>
            <p>
              All content, features, and functionality on PlayHub are owned by PlayHub Gaming Private Limited, its licensors, or other providers of such material and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2 className="text-2xl font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              6. Limitation of Liability
            </h2>
            <p>
              PlayHub is provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, and non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2 className="text-2xl font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              7. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless PlayHub Gaming Private Limited and its officers, directors, employees, agents, and licensors from and against all losses, expenses, damages and costs, including reasonable attorneys' fees, resulting from any violation of these Terms or any activity related to your account.
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2 className="text-2xl font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              8. Termination
            </h2>
            <p>
              We reserve the right to terminate or suspend your account and access to the platform immediately, without prior notice or liability, for any reason whatsoever, including if you breach the Terms.
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2 className="text-2xl font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              9. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the platform. Your continued use of PlayHub following the posting of revised Terms means that you accept and agree to the changes.
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2 className="text-2xl font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              10. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:<br />
              <a href="mailto:legal@playbystats.com" className="text-[#14b8a6] hover:underline">legal@playbystats.com</a>
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
              By using Play By Stats, you agree to these terms and conditions
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
