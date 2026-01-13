import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';

/**
 * Privacy Policy Page - Play By Stats
 * Design: Purple (#a855f7) & Pink (#ec4899)
 * Key Message: ZERO personal data collection - completely anonymous gaming
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
            <p className="text-xl text-white/90">Your privacy is protected - we collect ZERO personal data</p>
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
          {/* Key Message */}
          <section className="bg-gradient-to-br from-[#a855f7] to-[#ec4899] text-white rounded-lg p-8 border-2 border-white/20">
            <div className="flex items-start gap-4">
              <CheckCircle className="flex-shrink-0 mt-1" size={40} />
              <div>
                <h2 className="text-3xl font-bold mb-4">Complete Privacy Guarantee</h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  Play By Stats collects <strong>ZERO personal information</strong>. You can play completely anonymously without providing any personal data, email, phone number, or account information. Your gaming experience is completely private.
                </p>
              </div>
            </div>
          </section>

          {/* What We Don't Collect */}
          <section className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-8 border border-[#a855f7]/20">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">What We Do NOT Collect</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-[#a855f7] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#1a1a2e] mb-1">No Personal Information</h3>
                  <p className="text-[#6b7280]">We do not collect names, email addresses, phone numbers, or any identifying information.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-[#a855f7] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#1a1a2e] mb-1">No Financial Information</h3>
                  <p className="text-[#6b7280]">We do not collect credit card numbers, bank details, or any payment information. Play By Stats is 100% free with zero transactions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-[#a855f7] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#1a1a2e] mb-1">No Tracking or Profiling</h3>
                  <p className="text-[#6b7280]">We do not track your browsing behavior, create user profiles, or build marketing databases.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-[#a855f7] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#1a1a2e] mb-1">No Third-Party Sharing</h3>
                  <p className="text-[#6b7280]">We do not share, sell, or transfer any user data to third parties because we don't collect any.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-[#a855f7] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#1a1a2e] mb-1">No Cookies or Tracking</h3>
                  <p className="text-[#6b7280]">We do not use cookies, pixels, or tracking technologies to identify or monitor users.</p>
                </div>
              </div>
            </div>
          </section>

          {/* How We Protect You */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <Shield className="text-[#a855f7] flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">How We Protect Your Privacy</h2>
                <div className="space-y-4 text-[#6b7280]">
                  <p>
                    <strong>Anonymous Gaming:</strong> Play completely anonymously without creating an account or providing any information.
                  </p>
                  <p>
                    <strong>No Data Storage:</strong> Since we don't collect data, there's nothing to store, lose, or compromise.
                  </p>
                  <p>
                    <strong>No Advertisements:</strong> We don't use personal data for targeted advertising or marketing.
                  </p>
                  <p>
                    <strong>No Third-Party Integrations:</strong> We don't integrate with analytics platforms, ad networks, or data brokers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Information */}
          <section className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-8 border border-[#a855f7]/20">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Technical Details</h2>
            <p className="text-[#6b7280] leading-relaxed mb-4">
              Your gaming data (scores, achievements) is stored locally on your device only. This data is never transmitted to our servers or any external service. You maintain complete control over your gaming information.
            </p>
            <p className="text-[#6b7280] leading-relaxed">
              <strong>No Cloud Sync:</strong> Your game progress is not synced to the cloud or backed up externally. It remains entirely on your device.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">Your Rights</h2>
            <div className="space-y-4 text-[#6b7280]">
              <p className="flex items-start gap-3">
                <span className="text-[#a855f7] font-bold">✓</span>
                <span><strong>Right to Privacy:</strong> Complete anonymity when using Play By Stats</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#a855f7] font-bold">✓</span>
                <span><strong>No Profiling:</strong> We do not create profiles or dossiers about you</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#a855f7] font-bold">✓</span>
                <span><strong>No Tracking:</strong> Your online activities are not monitored or recorded</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#a855f7] font-bold">✓</span>
                <span><strong>No Marketing:</strong> You will never receive unsolicited emails or marketing communications</span>
              </p>
            </div>
          </section>

          {/* Age & Responsible Gaming */}
          <section className="bg-gradient-to-br from-[#ec4899]/10 to-[#a855f7]/10 rounded-lg p-8 border border-[#ec4899]/20">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Age & Responsible Gaming</h2>
            <p className="text-[#6b7280] leading-relaxed mb-4">
              Play By Stats is intended for users 18 years of age or older. This is a free entertainment platform with no real money involved. All gaming is for fun and entertainment purposes only.
            </p>
            <p className="text-[#6b7280] leading-relaxed">
              For more information about responsible gaming, please visit our <a href="/disclaimer" className="text-[#a855f7] font-bold hover:underline">Responsible Gaming</a> page.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="text-white/90 mb-4">
              Since we don't collect any personal data, your privacy is automatically protected. However, if you have questions about this policy:
            </p>
            <div className="space-y-2 text-white/80">
              <p><strong>Email:</strong> privacy@playbystats.com</p>
              <p><strong>Company:</strong> SDSURABHI INFRA PRIVATE LIMITED</p>
              <p><strong>Location:</strong> Lucknow, Uttar Pradesh, India</p>
            </div>
          </section>

          {/* Last Updated */}
          <p className="text-center text-[#6b7280] text-sm">
            Last Updated: January 2024 | Privacy Policy - Zero Data Collection
          </p>
        </motion.div>
      </div>
    </div>
  );
}
