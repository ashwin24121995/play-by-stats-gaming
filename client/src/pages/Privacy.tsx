import { motion } from 'framer-motion';
import { Shield, Mail, Gamepad2, Lock, Eye } from 'lucide-react';

/**
 * Privacy Policy Page - Play By Stats
 * Design: Purple (#a855f7) & Pink (#ec4899)
 * Professional user-focused privacy policy
 */
export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5f3ff]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-white/90">How we collect, use, and protect your information</p>
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
              Play By Stats ("we," "us," or "Company") respects your privacy. This Privacy Policy explains what information we collect from you, how we use it, and how we protect it. We are committed to being transparent about our data practices.
            </p>
          </section>

          {/* When You Browse */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <Eye className="text-[#a855f7] flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">When You Browse Our Website</h2>
                <div className="space-y-4 text-[#6b7280]">
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-2">Information We Collect</h3>
                    <p>When you visit playbystats.com, we may automatically collect limited technical information:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                      <li>Your IP address</li>
                      <li>Browser type and version</li>
                      <li>Pages you visit and time spent</li>
                      <li>Referring website</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-2">How We Use This Information</h3>
                    <p>We use this technical data to:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                      <li>Improve website performance and user experience</li>
                      <li>Detect and prevent technical issues</li>
                      <li>Understand general usage patterns</li>
                      <li>Ensure website security</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* When You Contact Us */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <Mail className="text-[#ec4899] flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">When You Contact Us</h2>
                <div className="space-y-4 text-[#6b7280]">
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-2">Information You Provide</h3>
                    <p>When you fill out our contact form, you voluntarily provide:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                      <li>Your name</li>
                      <li>Your email address</li>
                      <li>Your message or inquiry</li>
                      <li>Any other information you choose to share</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-2">How We Use This Information</h3>
                    <p>We use your contact information to:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                      <li>Respond to your inquiry or question</li>
                      <li>Provide customer support</li>
                      <li>Address your concerns or feedback</li>
                      <li>Improve our services based on your input</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-2">Data Retention</h3>
                    <p>We retain your contact information only as long as necessary to respond to your inquiry. After resolution, we may keep your information for record-keeping purposes, but you can request deletion at any time.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* When You Play Games */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <Gamepad2 className="text-[#a855f7] flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">When You Play Our Games</h2>
                <div className="space-y-4 text-[#6b7280]">
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-2">No Account Required</h3>
                    <p>You can play all games completely anonymously without creating an account or providing any personal information.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-2">Game Data Storage</h3>
                    <p>Your game scores and achievements are stored locally on your device only. This data is never transmitted to our servers or any external service. You have complete control over your gaming data.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-2">No Tracking</h3>
                    <p>We do not track your gaming behavior, create player profiles, or monitor your gameplay patterns for marketing purposes.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <Lock className="text-[#ec4899] flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Data Security & Protection</h2>
                <div className="space-y-4 text-[#6b7280]">
                  <p>
                    We implement industry-standard security measures to protect any information you provide:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>SSL/TLS encryption for all data transmission</li>
                    <li>Secure servers with restricted access</li>
                    <li>Regular security audits and updates</li>
                    <li>Compliance with data protection regulations</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Important:</strong> Since Play By Stats is 100% free with no real money transactions, we never collect or store financial information like credit card numbers or bank details.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-8 border border-[#a855f7]/20">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">Your Rights</h2>
            <div className="space-y-3 text-[#6b7280]">
              <p className="flex items-start gap-3">
                <span className="text-[#a855f7] font-bold text-lg">✓</span>
                <span><strong>Access:</strong> You can request to see what information we have about you</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#a855f7] font-bold text-lg">✓</span>
                <span><strong>Correction:</strong> You can request to correct any inaccurate information</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#a855f7] font-bold text-lg">✓</span>
                <span><strong>Deletion:</strong> You can request deletion of your personal information at any time</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#a855f7] font-bold text-lg">✓</span>
                <span><strong>Opt-Out:</strong> You can opt-out of marketing communications</span>
              </p>
            </div>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">Third-Party Services</h2>
            <p className="text-[#6b7280] leading-relaxed mb-4">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any information.
            </p>
            <p className="text-[#6b7280] leading-relaxed">
              We do not share your personal information with third parties except as required by law or with your explicit consent.
            </p>
          </section>

          {/* Age Requirement */}
          <section className="bg-gradient-to-br from-[#ec4899]/10 to-[#a855f7]/10 rounded-lg p-8 border border-[#ec4899]/20">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Age & Responsible Gaming</h2>
            <p className="text-[#6b7280] leading-relaxed mb-4">
              Play By Stats is intended for users 18 years of age or older. By using our platform, you confirm you are at least 18 years old.
            </p>
            <p className="text-[#6b7280] leading-relaxed">
              This is a free entertainment platform with no real money involved. All gaming is for fun and entertainment purposes only. For more information, please visit our <a href="/disclaimer" className="text-[#a855f7] font-bold hover:underline">Responsible Gaming</a> page.
            </p>
          </section>

          {/* Policy Changes */}
          <section>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Changes to This Policy</h2>
            <p className="text-[#6b7280] leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of the website constitutes your acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
            <p className="text-white/90 mb-4">
              If you have questions about this Privacy Policy or how we handle your information, please contact us:
            </p>
            <div className="space-y-2 text-white/80">
              <p><strong>Email:</strong> privacy@playbystats.com</p>
              <p><strong>Company:</strong> SDSURABHI INFRA PRIVATE LIMITED</p>
              <p><strong>CIN:</strong> U41002UP2023PTC194590</p>
              <p><strong>Location:</strong> Lucknow, Uttar Pradesh, India</p>
            </div>
          </section>

          {/* Last Updated */}
          <p className="text-center text-[#6b7280] text-sm">
            Last Updated: January 2024 | Effective Date: January 1, 2024
          </p>
        </motion.div>
      </div>
    </div>
  );
}
