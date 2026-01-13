import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, Shield, Users, Ban, Gavel, Mail } from 'lucide-react';

/**
 * Terms & Conditions Page - Play By Stats
 * Comprehensive terms of service for anonymous gaming platform
 */
export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f3ff] to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#ec4899] to-[#a855f7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Scale className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
            <p className="text-xl text-white/90">
              Please read these terms carefully before using our platform.
            </p>
            <p className="text-sm text-white/80 mt-4">
              Last Updated: January 14, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <FileText className="w-8 h-8 text-[#ec4899]" />
                Agreement to Terms
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                These Terms and Conditions constitute a legally binding agreement between you and SDSURABHI INFRA PRIVATE LIMITED governing your access to and use of the Play By Stats website located at playbystats.com.
              </p>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                By accessing, browsing, or using the Platform in any manner, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy and Disclaimer. If you do not agree to all of these Terms, you must immediately cease using the Platform.
              </p>
              <p className="text-[#4b5563] leading-relaxed">
                We reserve the right to modify, amend, or update these Terms at any time without prior notice. Your continued use of the Platform following any changes constitutes your acceptance of the revised Terms. It is your responsibility to review these Terms periodically.
              </p>
            </div>

            {/* Eligibility */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <Users className="w-8 h-8 text-[#ec4899]" />
                Eligibility and User Requirements
              </h2>
              <div className="bg-[#fef3c7] rounded-lg p-6 border-l-4 border-[#f59e0b] space-y-4">
                <p className="text-[#78350f] leading-relaxed">
                  <strong>Age Requirement:</strong> You must be at least 18 years of age to access or use the Platform. By using the Platform, you represent and warrant that you are 18 years of age or older. We do not knowingly permit individuals under 18 to use our services.
                </p>
                <p className="text-[#78350f] leading-relaxed">
                  <strong>Legal Capacity:</strong> You must have the legal capacity to enter into binding contracts. If you are accessing the Platform on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
                </p>
                <p className="text-[#78350f] leading-relaxed">
                  <strong>Compliance with Laws:</strong> You must comply with all applicable local, state, national, and international laws and regulations in your use of the Platform. You are solely responsible for ensuring that your use of the Platform is lawful in your jurisdiction.
                </p>
              </div>
            </div>

            {/* Platform Description */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">Platform Description and Services</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                Play By Stats is a free-to-play social gaming platform that provides entertainment through simulated casino-style games including dice rolling, slot machines, roulette, and blackjack. The Platform operates on the following principles:
              </p>
              <div className="bg-[#f0fdf4] rounded-lg p-6 border-l-4 border-[#22c55e] space-y-4">
                <p className="text-[#14532d] leading-relaxed">
                  <strong>No Real Money Gambling:</strong> The Platform does not involve real money gambling, betting, or wagering of any kind. All games use virtual coins that have no monetary value and cannot be exchanged for real currency, goods, or services.
                </p>
                <p className="text-[#14532d] leading-relaxed">
                  <strong>Entertainment Only:</strong> The Platform is designed solely for entertainment, skill development, and recreational purposes. It is not intended to simulate real gambling experiences or encourage real-money gambling.
                </p>
                <p className="text-[#14532d] leading-relaxed">
                  <strong>No Registration Required:</strong> You are not required to create an account, register, provide personal information, or log in to use the Platform. All gameplay is anonymous and game data is stored locally on your device.
                </p>
                <p className="text-[#14532d] leading-relaxed">
                  <strong>Free Access:</strong> Access to the Platform and all games is provided completely free of charge. There are no subscription fees, in-app purchases, premium features, or hidden costs.
                </p>
              </div>
            </div>

            {/* Acceptable Use */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <Shield className="w-8 h-8 text-[#ec4899]" />
                Acceptable Use Policy
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                You agree to use the Platform only for lawful purposes and in accordance with these Terms. You specifically agree NOT to:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Ban className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-1" />
                  <p className="text-[#4b5563] leading-relaxed">
                    Use the Platform in any way that violates any applicable federal, state, local, or international law or regulation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Ban className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-1" />
                  <p className="text-[#4b5563] leading-relaxed">
                    Attempt to gain unauthorized access to any portion of the Platform, other users' data, or computer systems or networks connected to the Platform.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Ban className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-1" />
                  <p className="text-[#4b5563] leading-relaxed">
                    Use any automated system, including robots, spiders, scrapers, or offline readers, to access the Platform without our prior written permission.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Ban className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-1" />
                  <p className="text-[#4b5563] leading-relaxed">
                    Introduce viruses, malware, trojans, worms, logic bombs, or other malicious or technologically harmful material.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Ban className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-1" />
                  <p className="text-[#4b5563] leading-relaxed">
                    Attempt to interfere with, disrupt, or create an undue burden on the Platform or the networks connected to the Platform.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Ban className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-1" />
                  <p className="text-[#4b5563] leading-relaxed">
                    Use the Platform to transmit, or procure the sending of, any advertising or promotional material without our prior written consent.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Ban className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-1" />
                  <p className="text-[#4b5563] leading-relaxed">
                    Impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Ban className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-1" />
                  <p className="text-[#4b5563] leading-relaxed">
                    Reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code of the Platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">Intellectual Property Rights</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                The Platform and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, audio, design, graphics, logos, and the selection and arrangement thereof) are owned by SDSURABHI INFRA PRIVATE LIMITED, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <div className="bg-[#eff6ff] rounded-lg p-6 border-l-4 border-[#3b82f6] space-y-4">
                <p className="text-[#1e3a8a] leading-relaxed">
                  <strong>Limited License:</strong> Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Platform for your personal, non-commercial entertainment purposes only.
                </p>
                <p className="text-[#1e3a8a] leading-relaxed">
                  <strong>Restrictions:</strong> You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Platform, except as incidentally necessary for normal web browsing.
                </p>
                <p className="text-[#1e3a8a] leading-relaxed">
                  <strong>Trademarks:</strong> The name "Play By Stats," our logo, and all related names, logos, product and service names, designs, and slogans are trademarks of the Company or its affiliates or licensors. You must not use such marks without our prior written permission.
                </p>
              </div>
            </div>

            {/* Disclaimers */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-[#ec4899]" />
                Disclaimers and Warranties
              </h2>
              <div className="bg-[#fee2e2] rounded-lg p-6 border-l-4 border-[#ef4444]">
                <p className="text-[#7f1d1d] leading-relaxed mb-4 font-semibold">
                  THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
                <p className="text-[#7f1d1d] leading-relaxed mb-3">
                  We disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that:
                </p>
                <ul className="space-y-2 text-[#7f1d1d]">
                  <li className="leading-relaxed">• The Platform will function uninterrupted, securely, or be available at any particular time or location</li>
                  <li className="leading-relaxed">• Any errors or defects will be corrected</li>
                  <li className="leading-relaxed">• The Platform is free of viruses or other harmful components</li>
                  <li className="leading-relaxed">• The results of using the Platform will meet your requirements</li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <Gavel className="w-8 h-8 text-[#ec4899]" />
                Limitation of Liability
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                To the fullest extent permitted by applicable law, in no event will SDSURABHI INFRA PRIVATE LIMITED, its affiliates, officers, directors, employees, agents, suppliers, or licensors be liable for:
              </p>
              <div className="bg-[#fef3c7] rounded-lg p-6 border-l-4 border-[#f59e0b] space-y-3">
                <p className="text-[#78350f] leading-relaxed">
                  • Any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses
                </p>
                <p className="text-[#78350f] leading-relaxed">
                  • Any damages resulting from your access to or use of or inability to access or use the Platform
                </p>
                <p className="text-[#78350f] leading-relaxed">
                  • Any conduct or content of any third party on the Platform
                </p>
                <p className="text-[#78350f] leading-relaxed">
                  • Any content obtained from the Platform
                </p>
                <p className="text-[#78350f] leading-relaxed">
                  • Unauthorized access, use, or alteration of your transmissions or content
                </p>
              </div>
              <p className="text-[#4b5563] leading-relaxed mt-4">
                Our total liability to you for all claims arising out of or relating to these Terms or your use of the Platform shall not exceed the amount you paid us to use the Platform (which is zero, as the Platform is free).
              </p>
            </div>

            {/* Indemnification */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">Indemnification</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                You agree to defend, indemnify, and hold harmless SDSURABHI INFRA PRIVATE LIMITED, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
              </p>
              <div className="bg-[#f5f3ff] rounded-lg p-6 space-y-2">
                <p className="text-[#4b5563] leading-relaxed">• Your violation of these Terms</p>
                <p className="text-[#4b5563] leading-relaxed">• Your use or misuse of the Platform</p>
                <p className="text-[#4b5563] leading-relaxed">• Your violation of any third-party rights</p>
                <p className="text-[#4b5563] leading-relaxed">• Your violation of any applicable laws or regulations</p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">Governing Law and Jurisdiction</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                These Terms and your use of the Platform shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms or the Platform shall be instituted exclusively in the courts located in India.
              </p>
              <p className="text-[#4b5563] leading-relaxed">
                You waive any objection to the exercise of jurisdiction over you by such courts and to venue in such courts.
              </p>
            </div>

            {/* Termination */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">Termination</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                We may terminate or suspend your access to the Platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Platform will immediately cease.
              </p>
              <p className="text-[#4b5563] leading-relaxed">
                All provisions of these Terms which by their nature should survive termination shall survive termination, including without limitation ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>

            {/* Severability */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">Severability and Waiver</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                <strong>Severability:</strong> If any provision of these Terms is held to be invalid, illegal, or unenforceable, the validity, legality, and enforceability of the remaining provisions shall not in any way be affected or impaired.
              </p>
              <p className="text-[#4b5563] leading-relaxed">
                <strong>Waiver:</strong> No waiver by the Company of any term or condition set forth in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">Entire Agreement</h2>
              <p className="text-[#4b5563] leading-relaxed">
                These Terms, together with our Privacy Policy and Disclaimer, constitute the entire agreement between you and SDSURABHI INFRA PRIVATE LIMITED regarding your use of the Platform and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Platform.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-[#ec4899] to-[#a855f7] rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Mail className="w-8 h-8" />
                Contact Us
              </h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <p className="mb-2"><strong>Company:</strong> SDSURABHI INFRA PRIVATE LIMITED</p>
                <p className="mb-2"><strong>Email:</strong> <a href="mailto:support@playbystats.com" className="underline hover:text-white/80">support@playbystats.com</a></p>
                <p className="mb-2"><strong>Phone:</strong> +91 (987) 654-3210</p>
                <p><strong>Website:</strong> <a href="https://playbystats.com" className="underline hover:text-white/80">playbystats.com</a></p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
