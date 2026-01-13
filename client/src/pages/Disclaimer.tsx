import { motion } from 'framer-motion';
import { AlertCircle, Shield, XCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react';

/**
 * Disclaimer Page - Play By Stats
 * Comprehensive disclaimers for anonymous, no-money platform
 * Design: Purple (#a855f7) & Pink (#ec4899)
 */
export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5f3ff]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#dc2626] to-[#f59e0b] text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-4">
              <AlertTriangle size={48} className="flex-shrink-0 mt-1" />
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Important Disclaimers</h1>
                <p className="text-xl text-white/90">Critical information you must read before using Play By Stats</p>
                <p className="text-sm text-white/70 mt-2">Last Updated: January 14, 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Critical Notice */}
          <section className="bg-gradient-to-br from-[#dc2626]/10 to-[#f59e0b]/10 rounded-lg p-8 border-2 border-[#dc2626]/30">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-[#dc2626] flex-shrink-0 mt-1" size={40} />
              <div>
                <h2 className="text-3xl font-bold text-[#dc2626] mb-4">PLEASE READ CAREFULLY</h2>
                <p className="text-[#6b7280] leading-relaxed text-lg">
                  By accessing or using Play By Stats, you acknowledge that you have read, understood, and agree to all disclaimers on this page. These disclaimers form an integral part of our Terms & Conditions and are legally binding.
                </p>
              </div>
            </div>
          </section>

          {/* No Real Money Gambling */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <XCircle className="text-[#dc2626] flex-shrink-0 mt-1" size={40} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">1. NO REAL MONEY GAMBLING</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <div className="bg-[#fff5f5] border-2 border-[#dc2626] rounded-lg p-6">
                    <p className="text-xl font-bold text-[#dc2626] mb-4">
                      PLAY BY STATS IS NOT A GAMBLING WEBSITE. NO REAL MONEY IS INVOLVED AT ANY TIME.
                    </p>
                    <div className="space-y-3 text-[#6b7280]">
                      <p><strong className="text-[#1a1a2e]">✗ You CANNOT deposit real money</strong> - We do not accept payments, deposits, or any form of financial transaction</p>
                      <p><strong className="text-[#1a1a2e]">✗ You CANNOT win real money</strong> - All "winnings" are virtual coins with zero monetary value</p>
                      <p><strong className="text-[#1a1a2e]">✗ You CANNOT withdraw or cash out</strong> - Virtual coins cannot be exchanged for money, prizes, or anything of value</p>
                      <p><strong className="text-[#1a1a2e]">✗ You CANNOT purchase virtual coins</strong> - There are no in-app purchases or microtransactions</p>
                      <p><strong className="text-[#1a1a2e]">✗ You CANNOT transfer virtual coins</strong> - Virtual coins cannot be sold, traded, or given to other users</p>
                    </div>
                  </div>

                  <p className="text-lg">
                    Play By Stats is a <strong className="text-[#1a1a2e]">100% free entertainment platform</strong> designed solely for fun, skill development, and recreational gaming. The games simulate casino-style gameplay for entertainment purposes only and do not constitute real gambling.
                  </p>

                  <p>
                    <strong className="text-[#1a1a2e]">If you are looking for real money gambling,</strong> this platform is NOT for you. Please visit licensed online casinos in jurisdictions where online gambling is legal and regulated.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Age Restriction */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="text-[#f59e0b] flex-shrink-0 mt-1" size={40} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">2. AGE RESTRICTION (18+)</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <div className="bg-[#fff3cd] border-2 border-[#ffc107] rounded-lg p-6">
                    <p className="text-xl font-bold text-[#856404] mb-3">
                      YOU MUST BE 18 YEARS OF AGE OR OLDER TO USE THIS PLATFORM
                    </p>
                    <p className="text-[#856404]">
                      By using Play By Stats, you confirm and warrant that you are at least 18 years old and have the legal capacity to enter into a binding agreement. If you are under 18, you are strictly prohibited from accessing or using this website.
                    </p>
                  </div>

                  <p>
                    <strong className="text-[#1a1a2e]">Why 18+?</strong> Although no real money is involved, our platform features casino-style games that simulate gambling mechanics. To promote responsible gaming and comply with best practices, we restrict access to adults only.
                  </p>

                  <p>
                    <strong className="text-[#1a1a2e]">Parents & Guardians:</strong> We strongly encourage parents and guardians to monitor their children's internet usage. If you discover that a minor has accessed our platform, please contact us immediately at <strong>support@playbystats.com</strong>.
                  </p>

                  <p>
                    <strong className="text-[#1a1a2e]">Verification:</strong> We reserve the right to request proof of age at any time. Failure to provide adequate verification may result in immediate termination of access.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Entertainment Only */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <Info className="text-[#a855f7] flex-shrink-0 mt-1" size={40} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">3. ENTERTAINMENT PURPOSE ONLY</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p>
                    Play By Stats is provided strictly for <strong className="text-[#1a1a2e]">entertainment, recreational, and educational purposes</strong>. The platform is designed to:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#f0fdf4] rounded-lg p-6 border border-[#16a34a]/20">
                      <h3 className="font-bold text-[#16a34a] mb-2 flex items-center gap-2">
                        <CheckCircle size={20} />
                        What This Platform IS
                      </h3>
                      <div className="space-y-2 text-sm text-[#6b7280]">
                        <p>✓ A free entertainment platform</p>
                        <p>✓ A skill development tool</p>
                        <p>✓ A recreational gaming experience</p>
                        <p>✓ A way to pass time and have fun</p>
                        <p>✓ A simulation of casino games</p>
                      </div>
                    </div>

                    <div className="bg-[#fff5f5] rounded-lg p-6 border border-[#dc2626]/20">
                      <h3 className="font-bold text-[#dc2626] mb-2 flex items-center gap-2">
                        <XCircle size={20} />
                        What This Platform IS NOT
                      </h3>
                      <div className="space-y-2 text-sm text-[#6b7280]">
                        <p>✗ A gambling website</p>
                        <p>✗ A way to earn money</p>
                        <p>✗ A financial investment opportunity</p>
                        <p>✗ A substitute for real casino gaming</p>
                        <p>✗ A platform for monetary transactions</p>
                      </div>
                    </div>
                  </div>

                  <p>
                    <strong className="text-[#1a1a2e]">No Financial Advice:</strong> Nothing on this platform constitutes financial, investment, or gambling advice. We do not encourage or promote real money gambling.
                  </p>

                  <p>
                    <strong className="text-[#1a1a2e]">Simulated Experience:</strong> While our games simulate casino-style gameplay, the outcomes, odds, and mechanics may differ from real gambling establishments. This platform is not intended to replicate real gambling experiences accurately.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* No Warranties */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <Shield className="text-[#ec4899] flex-shrink-0 mt-1" size={40} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">4. NO WARRANTIES OR GUARANTEES</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p className="text-lg font-bold text-[#1a1a2e]">
                    THE PLATFORM IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.
                  </p>

                  <p>
                    We make no warranties, express or implied, regarding:
                  </p>

                  <div className="bg-[#f5f3ff] rounded-lg p-6 space-y-3">
                    <p><strong className="text-[#1a1a2e]">• Availability:</strong> We do not guarantee that the platform will be available 24/7 or at any specific time. The platform may experience downtime, maintenance, or technical issues.</p>
                    
                    <p><strong className="text-[#1a1a2e]">• Accuracy:</strong> We do not warrant that game mechanics, odds, or outcomes are accurate representations of real casino games.</p>
                    
                    <p><strong className="text-[#1a1a2e]">• Error-Free Operation:</strong> We do not guarantee that the platform will be free from bugs, errors, viruses, or other harmful components.</p>
                    
                    <p><strong className="text-[#1a1a2e]">• Data Preservation:</strong> Since game data is stored locally on your device, we cannot guarantee preservation of your virtual coins, scores, or progress. Clearing browser data will result in permanent data loss.</p>
                    
                    <p><strong className="text-[#1a1a2e]">• Security:</strong> While we implement security measures, we cannot guarantee absolute security against unauthorized access, hacking, or data breaches.</p>
                    
                    <p><strong className="text-[#1a1a2e]">• Compatibility:</strong> We do not guarantee compatibility with all devices, browsers, or operating systems.</p>
                  </div>

                  <p>
                    <strong className="text-[#1a1a2e]">Use at Your Own Risk:</strong> You use the platform at your own risk. We are not responsible for any loss of data, game progress, or time spent on the platform.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-[#fff3cd] border border-[#ffc107] rounded-lg p-8">
            <h2 className="text-4xl font-bold text-[#856404] mb-6">5. LIMITATION OF LIABILITY</h2>
            <div className="space-y-4 text-[#856404] leading-relaxed">
              <p className="text-lg font-bold">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM YOUR USE OF THE PLATFORM.
              </p>

              <p>
                This includes, but is not limited to:
              </p>

              <div className="bg-white rounded-lg p-6 space-y-2 text-[#6b7280]">
                <p>• Loss of virtual coins, game progress, or data</p>
                <p>• Time spent playing games</p>
                <p>• Technical issues, errors, or bugs</p>
                <p>• Inability to access the platform</p>
                <p>• Any direct, indirect, incidental, consequential, or punitive damages</p>
                <p>• Loss of profits, revenue, or business opportunities (not applicable as no money is involved)</p>
                <p>• Emotional distress or personal injury</p>
              </div>

              <p>
                <strong>Maximum Liability:</strong> Our total liability to you for all claims shall not exceed INR 1,000 (One Thousand Indian Rupees) or the amount you paid us in the past 12 months (which is zero, as the platform is free).
              </p>
            </div>
          </section>

          {/* Responsible Gaming */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="text-[#a855f7] flex-shrink-0 mt-1" size={40} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">6. RESPONSIBLE GAMING</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p>
                    While Play By Stats involves no real money and poses no financial risk, we encourage <strong className="text-[#1a1a2e]">responsible and moderate use</strong> of the platform.
                  </p>

                  <div className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-6 border border-[#a855f7]/20">
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Responsible Gaming Guidelines</h3>
                    <div className="space-y-2">
                      <p>✓ <strong>Set Time Limits:</strong> Take regular breaks and avoid excessive gaming sessions</p>
                      <p>✓ <strong>Balance Your Life:</strong> Don't let gaming interfere with work, relationships, or responsibilities</p>
                      <p>✓ <strong>Recognize Warning Signs:</strong> If you feel compelled to play or experience negative emotions, take a break</p>
                      <p>✓ <strong>Gaming is Entertainment:</strong> Remember that this is just a game for fun, not a way to earn money</p>
                      <p>✓ <strong>Seek Help if Needed:</strong> If you have a gambling problem, seek professional help even though this platform involves no money</p>
                    </div>
                  </div>

                  <p>
                    <strong className="text-[#1a1a2e]">Gambling Addiction Resources:</strong> If you or someone you know has a gambling problem, please contact:
                  </p>
                  <div className="bg-[#f5f3ff] rounded-lg p-6">
                    <p className="font-bold text-[#1a1a2e] mb-2">India Gambling Helplines:</p>
                    <p>• National Gambling Helpline: 1800-XXX-XXXX (24/7)</p>
                    <p>• Gamblers Anonymous India: Visit gamblersanonymous.org.in</p>
                    <p>• Mental Health Helpline: 1800-599-0019 (NIMHANS)</p>
                  </div>

                  <p>
                    For more information, please visit our dedicated <a href="/disclaimer" className="text-[#a855f7] font-bold hover:underline">Responsible Gaming</a> page.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Compliance */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <Shield className="text-[#ec4899] flex-shrink-0 mt-1" size={40} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">7. LEGAL COMPLIANCE & JURISDICTION</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p>
                    <strong className="text-[#1a1a2e]">Your Responsibility:</strong> You are solely responsible for ensuring that your use of Play By Stats complies with all applicable laws and regulations in your jurisdiction.
                  </p>

                  <p>
                    <strong className="text-[#1a1a2e]">Restricted Jurisdictions:</strong> If casino-style games (even without real money) are prohibited in your country, state, or region, you must not use this platform. It is your responsibility to verify local laws.
                  </p>

                  <p>
                    <strong className="text-[#1a1a2e]">Indian Law:</strong> This platform is operated from India and governed by Indian law. We comply with all applicable Indian regulations regarding online entertainment platforms.
                  </p>

                  <p>
                    <strong className="text-[#1a1a2e]">Not Licensed for Gambling:</strong> Play By Stats is not licensed as a gambling operator because we do not offer real money gambling. We do not require gambling licenses as no financial transactions occur.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Links */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <Info className="text-[#a855f7] flex-shrink-0 mt-1" size={40} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">8. THIRD-PARTY LINKS & CONTENT</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p>
                    Our platform may contain links to third-party websites, services, or resources. We are not responsible for:
                  </p>

                  <div className="bg-[#fff5f5] rounded-lg p-6 space-y-2">
                    <p>✗ The content, accuracy, or legality of third-party websites</p>
                    <p>✗ The privacy practices of third-party services</p>
                    <p>✗ Any damages or losses caused by third-party websites</p>
                    <p>✗ Products or services offered by third parties</p>
                  </div>

                  <p>
                    <strong className="text-[#1a1a2e]">Your Risk:</strong> Clicking on third-party links is at your own risk. We recommend reviewing the terms and privacy policies of any third-party websites you visit.
                  </p>

                  <p>
                    <strong className="text-[#1a1a2e]">No Endorsement:</strong> The presence of third-party links does not imply endorsement, sponsorship, or recommendation by Play By Stats.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Changes to Disclaimers */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="text-[#ec4899] flex-shrink-0 mt-1" size={40} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">9. CHANGES TO DISCLAIMERS</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p>
                    We reserve the right to modify, update, or change these disclaimers at any time without prior notice. Changes will be effective immediately upon posting on this page.
                  </p>

                  <p>
                    <strong className="text-[#1a1a2e]">Your Responsibility:</strong> It is your responsibility to review these disclaimers periodically. Your continued use of the platform after any changes constitutes acceptance of the updated disclaimers.
                  </p>

                  <p>
                    <strong className="text-[#1a1a2e]">Last Updated:</strong> This page was last updated on January 14, 2026. Check the top of this page for the most recent update date.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white rounded-lg p-8">
            <h2 className="text-4xl font-bold mb-4">ACKNOWLEDGMENT & ACCEPTANCE</h2>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p className="text-lg font-bold">
                BY USING PLAY BY STATS, YOU ACKNOWLEDGE THAT:
              </p>
              <div className="space-y-2 ml-4">
                <p>✓ You have read and understood all disclaimers on this page</p>
                <p>✓ You agree to all terms, conditions, and disclaimers</p>
                <p>✓ You are at least 18 years of age</p>
                <p>✓ You understand that no real money is involved</p>
                <p>✓ You accept all risks associated with using the platform</p>
                <p>✓ You will use the platform responsibly and in moderation</p>
                <p>✓ You comply with all applicable laws in your jurisdiction</p>
              </div>
              <p className="text-lg font-bold mt-6">
                IF YOU DO NOT AGREE WITH THESE DISCLAIMERS, YOU MUST IMMEDIATELY STOP USING THE PLATFORM.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-8 border border-[#a855f7]/20">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Questions or Concerns?</h2>
            <p className="text-[#6b7280] leading-relaxed mb-4">
              If you have any questions about these disclaimers or need clarification, please contact us:
            </p>
            <div className="space-y-2 text-[#6b7280]">
              <p><strong className="text-[#1a1a2e]">Email:</strong> support@playbystats.com</p>
              <p><strong className="text-[#1a1a2e]">Legal Email:</strong> legal@playbystats.com</p>
              <p><strong className="text-[#1a1a2e]">Company:</strong> SDSURABHI INFRA PRIVATE LIMITED</p>
              <p><strong className="text-[#1a1a2e]">CIN:</strong> U41002UP2023PTC194590</p>
              <p><strong className="text-[#1a1a2e]">Location:</strong> Lucknow, Uttar Pradesh, India</p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center space-y-2">
            <p className="text-[#6b7280] text-sm">
              <strong>Last Updated:</strong> January 14, 2026
            </p>
            <p className="text-[#6b7280] text-sm">
              These disclaimers are part of our Terms & Conditions and are legally binding.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
