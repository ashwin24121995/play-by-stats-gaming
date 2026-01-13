import { motion } from 'framer-motion';
import { FileText, AlertCircle, CheckCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5f3ff]">
      <div className="relative bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 items-start"
          >
            <FileText className="text-[#14b8a6] flex-shrink-0 mt-1" size={32} />
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Terms & Conditions</h1>
              <p className="text-xl text-white/90">
                Please read these terms carefully before using our platform
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          <section className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-8 border border-[#a855f7]/20">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#a855f7] flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Acceptance of Terms</h2>
                <p className="text-[#6b7280] leading-relaxed">
                  By accessing and using Play By Stats, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-8 border border-[#a855f7]/20">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Age Requirement (18+)</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Play By Stats is intended for users who are 18 years of age or older. By using this platform, you confirm that you are at least 18 years old. We reserve the right to terminate accounts of users who do not meet this age requirement.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">User Accounts</h2>
            <div className="space-y-4 text-[#6b7280]">
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#a855f7] font-bold">•</span>
                  <span>You are responsible for maintaining the confidentiality of your account</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#a855f7] font-bold">•</span>
                  <span>You agree to accept responsibility for all activities under your account</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#a855f7] font-bold">•</span>
                  <span>You must provide accurate and complete information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#a855f7] font-bold">•</span>
                  <span>You agree not to share your account with others</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#ec4899]/10 to-[#a855f7]/10 rounded-lg p-8 border border-[#ec4899]/20">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-[#ec4899] flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Free-to-Play & No Real Money</h2>
                <div className="space-y-3 text-[#6b7280]">
                  <p><strong>Critical Terms:</strong></p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#ec4899] font-bold">•</span>
                      <span>Play By Stats is 100% free-to-play with no real money transactions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#ec4899] font-bold">•</span>
                      <span>No real currency can be used or won during gameplay</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#ec4899] font-bold">•</span>
                      <span>All achievements and scores are for entertainment purposes only</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#ec4899] font-bold">•</span>
                      <span>No real-world financial activities or gambling occur on this platform</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">Intellectual Property</h2>
            <p className="text-[#6b7280] leading-relaxed">
              All content, features, and functionality on Play By Stats are owned by SDSURABHI INFRA PRIVATE LIMITED, its licensors, or other providers of such material and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-8 border border-[#a855f7]/20">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Limitation of Liability</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Play By Stats is provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, and non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">Indemnification</h2>
            <p className="text-[#6b7280] leading-relaxed">
              You agree to indemnify and hold harmless Play By Stats and its officers, directors, employees, agents, and licensors from and against all losses, expenses, damages and costs, including reasonable attorneys' fees, resulting from any violation of these Terms or any activity related to your account.
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-8 border border-[#a855f7]/20">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Termination</h2>
            <p className="text-[#6b7280] leading-relaxed">
              We reserve the right to terminate or suspend your account and access to the platform immediately, without prior notice or liability, for any reason whatsoever, including if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">Changes to Terms</h2>
            <p className="text-[#6b7280] leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the platform. Your continued use of Play By Stats following the posting of revised Terms means that you accept and agree to the changes.
            </p>
          </section>

          <section className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Questions?</h2>
            <p className="text-white/90">
              If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:support@playbystats.com" className="underline">support@playbystats.com</a>
            </p>
          </section>

          <p className="text-center text-[#6b7280] text-sm">
            Last Updated: January 2024
          </p>
        </motion.div>
      </div>
    </div>
  );
}
