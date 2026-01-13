import { motion } from 'framer-motion';
import { FileText, AlertCircle, CheckCircle, Scale, Shield, XCircle, Users, Globe } from 'lucide-react';

/**
 * Terms & Conditions Page - Play By Stats
 * Comprehensive terms for anonymous, no-registration platform
 * Design: Purple (#a855f7) & Pink (#ec4899)
 */
export default function Terms() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl text-white/90">Legal agreement governing your use of Play By Stats platform</p>
            <p className="text-sm text-white/70 mt-2">Last Updated: January 14, 2026 | Effective Date: January 14, 2026</p>
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
          {/* Table of Contents */}
          <section className="bg-gradient-to-br from-[#a855f7]/5 to-[#ec4899]/5 rounded-lg p-8 border border-[#a855f7]/20">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-3 text-[#6b7280]">
              <a href="#acceptance" className="hover:text-[#a855f7] transition-colors">1. Acceptance of Terms</a>
              <a href="#description" className="hover:text-[#a855f7] transition-colors">2. Description of Service</a>
              <a href="#eligibility" className="hover:text-[#a855f7] transition-colors">3. Eligibility & Age Requirement</a>
              <a href="#anonymous" className="hover:text-[#a855f7] transition-colors">4. Anonymous Usage</a>
              <a href="#acceptable-use" className="hover:text-[#a855f7] transition-colors">5. Acceptable Use Policy</a>
              <a href="#intellectual-property" className="hover:text-[#a855f7] transition-colors">6. Intellectual Property Rights</a>
              <a href="#no-real-money" className="hover:text-[#a855f7] transition-colors">7. No Real Money Gambling</a>
              <a href="#disclaimers" className="hover:text-[#a855f7] transition-colors">8. Disclaimers & Warranties</a>
              <a href="#limitation" className="hover:text-[#a855f7] transition-colors">9. Limitation of Liability</a>
              <a href="#indemnification" className="hover:text-[#a855f7] transition-colors">10. Indemnification</a>
              <a href="#termination" className="hover:text-[#a855f7] transition-colors">11. Termination & Access</a>
              <a href="#governing-law" className="hover:text-[#a855f7] transition-colors">12. Governing Law</a>
              <a href="#changes" className="hover:text-[#a855f7] transition-colors">13. Changes to Terms</a>
              <a href="#contact" className="hover:text-[#a855f7] transition-colors">14. Contact Information</a>
            </div>
          </section>

          {/* Acceptance of Terms */}
          <section id="acceptance" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <CheckCircle className="text-[#a855f7] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">1. Acceptance of Terms</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p>
                    Welcome to Play By Stats. These Terms and Conditions ("Terms," "Agreement") constitute a legally binding agreement between you ("User," "you," or "your") and <strong>SDSURABHI INFRA PRIVATE LIMITED</strong> (CIN: U41002UP2023PTC194590) ("Company," "we," "us," or "our") governing your access to and use of the Play By Stats website located at playbystats.com (the "Website" or "Platform").
                  </p>
                  <p>
                    By accessing, browsing, or using our Website in any manner, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy and any other policies referenced herein. If you do not agree with any part of these Terms, you must immediately discontinue use of the Website.
                  </p>
                  <p>
                    These Terms apply to all visitors, users, and others who access or use the service, regardless of whether you play games or simply browse the Website.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Description of Service */}
          <section id="description" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="text-[#ec4899] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">2. Description of Service</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p>
                    Play By Stats is a <strong>free-to-play social gaming platform</strong> that provides browser-based casino-style games for entertainment purposes only. Our service includes, but is not limited to:
                  </p>
                  <div className="bg-[#f5f3ff] rounded-lg p-6 space-y-3">
                    <p><strong className="text-[#1a1a2e]">• Dice Roller:</strong> A dice-based game with virtual coin betting</p>
                    <p><strong className="text-[#1a1a2e]">• Slots Master:</strong> A slot machine simulation with spinning reels</p>
                    <p><strong className="text-[#1a1a2e]">• Roulette Rush:</strong> A roulette wheel game with number betting</p>
                    <p><strong className="text-[#1a1a2e]">• Blackjack Pro:</strong> A card game based on traditional blackjack rules</p>
                  </div>
                  <p>
                    All games use <strong>virtual coins</strong> that have no monetary value and cannot be exchanged for real money, prizes, or any items of value. The Platform is provided solely for entertainment, skill development, and recreational purposes.
                  </p>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any aspect of the service at any time without prior notice or liability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Eligibility */}
          <section id="eligibility" className="scroll-mt-20 bg-[#fff3cd] border border-[#ffc107] rounded-lg p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-[#856404] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#856404] mb-4">3. Eligibility & Age Requirement</h2>
                <div className="space-y-4 text-[#856404] leading-relaxed">
                  <p>
                    <strong>You must be at least 18 years of age to use this Platform.</strong> By using Play By Stats, you represent and warrant that:
                  </p>
                  <div className="space-y-2 ml-4">
                    <p>✓ You are 18 years of age or older</p>
                    <p>✓ You have the legal capacity to enter into this binding agreement</p>
                    <p>✓ You are not prohibited by law from accessing gaming content in your jurisdiction</p>
                    <p>✓ You will comply with all applicable local, state, national, and international laws</p>
                  </div>
                  <p>
                    If you are under 18 years of age, you are strictly prohibited from using this Website. We do not knowingly collect information from or direct any of our content specifically to children under 18.
                  </p>
                  <p>
                    We reserve the right to request proof of age at any time. Failure to provide adequate proof may result in immediate termination of access to the Platform.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Anonymous Usage */}
          <section id="anonymous" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <Users className="text-[#a855f7] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">4. Anonymous Usage - No Registration Required</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p>
                    Play By Stats operates as a <strong>completely anonymous platform</strong>. You are not required to create an account, register, provide personal information, or log in to access and play our games.
                  </p>
                  
                  <div className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-6 border border-[#a855f7]/20">
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">What This Means for You:</h3>
                    <div className="space-y-2">
                      <p className="text-[#6b7280]">✓ <strong>No Personal Data Required:</strong> You can play all games without providing your name, email, or any identifying information</p>
                      <p className="text-[#6b7280]">✓ <strong>Local Data Storage:</strong> Your game scores, virtual coins, and preferences are stored locally on your device only</p>
                      <p className="text-[#6b7280]">✓ <strong>No User Profiles:</strong> We do not create user profiles, track individual gameplay across sessions, or maintain user databases</p>
                      <p className="text-[#6b7280]">✓ <strong>Complete Privacy:</strong> Your gaming activity remains private and is not shared with third parties</p>
                    </div>
                  </div>

                  <p>
                    Since all game data is stored locally on your device, clearing your browser data will reset your game progress, virtual coin balance, and preferences. We cannot recover this data as it is never transmitted to our servers.
                  </p>
                  
                  <p>
                    <strong>Optional Contact:</strong> The only instance where you may voluntarily provide personal information is when you use our contact form to reach out for support or inquiries. This is entirely optional and not required to use the Platform.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Acceptable Use Policy */}
          <section id="acceptable-use" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="text-[#ec4899] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">5. Acceptable Use Policy</h2>
                <div className="space-y-6 text-[#6b7280] leading-relaxed">
                  <p>
                    You agree to use the Platform only for lawful purposes and in accordance with these Terms. You agree NOT to:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-[#fff5f5] rounded-lg p-6 border border-[#dc2626]/20">
                      <h3 className="text-lg font-bold text-[#dc2626] mb-2 flex items-center gap-2">
                        <XCircle size={20} />
                        Prohibited Activities
                      </h3>
                      <div className="space-y-2 text-[#6b7280]">
                        <p>✗ Use the Platform in any way that violates applicable local, state, national, or international law</p>
                        <p>✗ Attempt to gain unauthorized access to the Platform, servers, or databases</p>
                        <p>✗ Use automated scripts, bots, or tools to access or interact with the Platform</p>
                        <p>✗ Interfere with or disrupt the Platform's functionality or servers</p>
                        <p>✗ Attempt to reverse engineer, decompile, or extract source code from the Platform</p>
                        <p>✗ Use the Platform to transmit viruses, malware, or any malicious code</p>
                        <p>✗ Engage in any activity that could damage, disable, or impair the Platform</p>
                        <p>✗ Attempt to manipulate game outcomes through hacking or exploits</p>
                        <p>✗ Use the Platform for any commercial purpose without our express written consent</p>
                        <p>✗ Misrepresent your age or eligibility to use the Platform</p>
                      </div>
                    </div>

                    <div className="bg-[#f0fdf4] rounded-lg p-6 border border-[#16a34a]/20">
                      <h3 className="text-lg font-bold text-[#16a34a] mb-2 flex items-center gap-2">
                        <CheckCircle size={20} />
                        Encouraged Behavior
                      </h3>
                      <div className="space-y-2 text-[#6b7280]">
                        <p>✓ Use the Platform for personal entertainment and skill development</p>
                        <p>✓ Respect the integrity of the games and play fairly</p>
                        <p>✓ Report any technical issues or bugs you encounter</p>
                        <p>✓ Provide constructive feedback to help us improve</p>
                        <p>✓ Use the Platform responsibly and in moderation</p>
                      </div>
                    </div>
                  </div>

                  <p>
                    We reserve the right to investigate violations of these Terms and take appropriate legal action, including but not limited to terminating your access to the Platform and reporting violations to law enforcement authorities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section id="intellectual-property" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <Scale className="text-[#a855f7] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">6. Intellectual Property Rights</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p>
                    The Platform and all of its content, features, and functionality (including but not limited to all information, software, code, text, displays, graphics, photographs, video, audio, design, presentation, selection, and arrangement) are owned by the Company, its licensors, or other providers of such material and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                  </p>

                  <div className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-6 border border-[#a855f7]/20">
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Your Limited License</h3>
                    <p className="text-[#6b7280] mb-3">
                      Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to:
                    </p>
                    <div className="space-y-2">
                      <p className="text-[#6b7280]">• Access and use the Platform for personal, non-commercial entertainment purposes</p>
                      <p className="text-[#6b7280]">• Play the games available on the Platform</p>
                      <p className="text-[#6b7280]">• View and interact with content provided on the Platform</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <h3 className="text-xl font-bold text-[#1a1a2e]">Restrictions</h3>
                    <p>You may NOT:</p>
                    <div className="bg-[#fff5f5] rounded-lg p-6 space-y-2">
                      <p>✗ Reproduce, distribute, modify, create derivative works of, publicly display, or publicly perform any content from the Platform</p>
                      <p>✗ Use any content from the Platform for commercial purposes</p>
                      <p>✗ Remove or alter any copyright, trademark, or other proprietary notices</p>
                      <p>✗ Access or use the Platform in any manner that could damage, disable, overburden, or impair it</p>
                      <p>✗ Use any robot, spider, or other automatic device to access the Platform</p>
                    </div>
                  </div>

                  <p className="mt-4">
                    <strong>Trademarks:</strong> "Play By Stats" and all related logos, product and service names, designs, and slogans are trademarks of the Company or its affiliates. You must not use such marks without our prior written permission.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* No Real Money */}
          <section id="no-real-money" className="scroll-mt-20 bg-gradient-to-br from-[#dc2626]/10 to-[#f59e0b]/10 rounded-lg p-8 border-2 border-[#dc2626]/30">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-[#dc2626] flex-shrink-0 mt-1" size={40} />
              <div>
                <h2 className="text-4xl font-bold text-[#dc2626] mb-4">7. No Real Money Gambling - Entertainment Only</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p className="text-lg font-bold text-[#1a1a2e]">
                    PLAY BY STATS IS NOT A GAMBLING PLATFORM. NO REAL MONEY IS INVOLVED.
                  </p>
                  
                  <p>
                    You acknowledge and agree that:
                  </p>

                  <div className="bg-white rounded-lg p-6 space-y-3">
                    <p><strong className="text-[#1a1a2e]">1. Virtual Currency Only:</strong> All coins, points, or credits used in games are virtual and have absolutely no monetary value. They cannot be exchanged, sold, or redeemed for real money, goods, services, or anything of value.</p>
                    
                    <p><strong className="text-[#1a1a2e]">2. No Financial Transactions:</strong> The Platform does not accept deposits, process payments, or facilitate any financial transactions. You cannot purchase virtual coins or any in-game items with real money.</p>
                    
                    <p><strong className="text-[#1a1a2e]">3. No Winnings or Prizes:</strong> You cannot win real money, prizes, or anything of value by playing games on the Platform. All "winnings" are purely virtual and for entertainment purposes only.</p>
                    
                    <p><strong className="text-[#1a1a2e]">4. Entertainment Purpose:</strong> The Platform is designed solely for entertainment, skill development, and recreational gaming. It is not intended to simulate real gambling or encourage gambling behavior.</p>
                    
                    <p><strong className="text-[#1a1a2e]">5. No Gambling Addiction Risk:</strong> Since no real money is involved, there is no financial risk. However, we encourage responsible gaming and taking breaks if you feel you are spending excessive time on the Platform.</p>
                  </div>

                  <p className="text-lg font-bold text-[#dc2626] mt-6">
                    If you are seeking real money gambling, this Platform is NOT for you. Please visit licensed gambling websites in jurisdictions where online gambling is legal.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimers */}
          <section id="disclaimers" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="text-[#ec4899] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">8. Disclaimers & Warranties</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p className="text-lg font-bold text-[#1a1a2e]">
                    THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND.
                  </p>

                  <p>
                    To the fullest extent permitted by applicable law, the Company disclaims all warranties, express or implied, including but not limited to:
                  </p>

                  <div className="bg-[#f5f3ff] rounded-lg p-6 space-y-2">
                    <p>• Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</p>
                    <p>• Warranties that the Platform will be uninterrupted, secure, or error-free</p>
                    <p>• Warranties regarding the accuracy, reliability, or completeness of content</p>
                    <p>• Warranties that defects will be corrected</p>
                    <p>• Warranties regarding the results obtained from using the Platform</p>
                  </div>

                  <p>
                    We do not warrant that:
                  </p>
                  <div className="space-y-2 ml-4">
                    <p>✗ The Platform will meet your requirements or expectations</p>
                    <p>✗ The Platform will be available at all times or at any specific time</p>
                    <p>✗ Any errors or bugs will be corrected</p>
                    <p>✗ The Platform is free of viruses or other harmful components</p>
                    <p>✗ Your use of the Platform will be secure or that your data will not be lost</p>
                  </div>

                  <p className="mt-4">
                    <strong>Technical Issues:</strong> The Platform may experience downtime, technical glitches, or interruptions due to maintenance, updates, server issues, or factors beyond our control. We are not liable for any loss of game progress, virtual coins, or data resulting from such issues.
                  </p>

                  <p>
                    <strong>Third-Party Links:</strong> The Platform may contain links to third-party websites or services. We are not responsible for the content, accuracy, or practices of any third-party sites. Your use of third-party websites is at your own risk.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section id="limitation" className="scroll-mt-20 bg-[#fff3cd] border border-[#ffc107] rounded-lg p-8">
            <h2 className="text-4xl font-bold text-[#856404] mb-4">9. Limitation of Liability</h2>
            <div className="space-y-4 text-[#856404] leading-relaxed">
              <p className="text-lg font-bold">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM.
              </p>

              <p>
                This includes, but is not limited to, damages for:
              </p>
              <div className="bg-white rounded-lg p-6 space-y-2">
                <p>• Loss of profits, revenue, or business opportunities</p>
                <p>• Loss of data or game progress</p>
                <p>• Loss of goodwill or reputation</p>
                <p>• Cost of substitute services</p>
                <p>• Personal injury or emotional distress</p>
                <p>• Any other intangible losses</p>
              </div>

              <p>
                The Company's total liability to you for all claims arising out of or related to these Terms or your use of the Platform shall not exceed <strong>INR 1,000 (One Thousand Indian Rupees)</strong> or the amount you paid to us in the past 12 months (which is zero, as the Platform is free).
              </p>

              <p>
                Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, our liability will be limited to the greatest extent permitted by law.
              </p>
            </div>
          </section>

          {/* Indemnification */}
          <section id="indemnification" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="text-[#a855f7] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">10. Indemnification</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p>
                    You agree to defend, indemnify, and hold harmless the Company, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
                  </p>

                  <div className="bg-[#f5f3ff] rounded-lg p-6 space-y-2">
                    <p>• Your violation of these Terms</p>
                    <p>• Your use or misuse of the Platform</p>
                    <p>• Your violation of any law or the rights of a third party</p>
                    <p>• Any content you submit or transmit through the Platform</p>
                    <p>• Your breach of any representation or warranty made herein</p>
                    <p>• Any claim that your use of the Platform caused damage to a third party</p>
                  </div>

                  <p>
                    This indemnification obligation will survive the termination of these Terms and your use of the Platform.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section id="termination" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <XCircle className="text-[#ec4899] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">11. Termination & Access Restrictions</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p>
                    We reserve the right to terminate or restrict your access to the Platform at any time, without prior notice or liability, for any reason, including but not limited to:
                  </p>

                  <div className="bg-[#fff5f5] rounded-lg p-6 space-y-2">
                    <p>• Violation of these Terms</p>
                    <p>• Engaging in prohibited activities</p>
                    <p>• Attempting to hack, exploit, or manipulate the Platform</p>
                    <p>• Misrepresenting your age or eligibility</p>
                    <p>• Any conduct that we deem harmful to the Platform or other users</p>
                    <p>• Legal or regulatory requirements</p>
                  </div>

                  <p>
                    <strong>Effect of Termination:</strong> Upon termination, your right to use the Platform will immediately cease. Since the Platform does not require accounts, termination may involve blocking your IP address or implementing other technical measures to prevent access.
                  </p>

                  <p>
                    <strong>Data Loss:</strong> Because all game data is stored locally on your device, we cannot recover or restore your virtual coins, game progress, or preferences after termination or if you clear your browser data.
                  </p>

                  <p>
                    <strong>Survival:</strong> Sections of these Terms that by their nature should survive termination (including disclaimers, limitations of liability, indemnification, and governing law) will continue to apply after termination.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section id="governing-law" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <Globe className="text-[#a855f7] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">12. Governing Law & Dispute Resolution</h2>
                <div className="space-y-6 text-[#6b7280] leading-relaxed">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3">12.1 Governing Law</h3>
                    <p>
                      These Terms and your use of the Platform shall be governed by and construed in accordance with the laws of <strong>India</strong>, without regard to its conflict of law provisions. The United Nations Convention on Contracts for the International Sale of Goods does not apply to these Terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3">12.2 Jurisdiction</h3>
                    <p>
                      Any legal action or proceeding arising out of or related to these Terms or the Platform shall be instituted exclusively in the courts located in <strong>Lucknow, Uttar Pradesh, India</strong>. You consent to the personal jurisdiction of such courts and waive any objection to venue in such courts.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3">12.3 Dispute Resolution</h3>
                    <p>
                      Before filing any legal action, you agree to first contact us at <strong>legal@playbystats.com</strong> to attempt to resolve the dispute informally. We will make good faith efforts to resolve disputes amicably within 30 days.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-6 border border-[#a855f7]/20">
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Arbitration (Optional)</h3>
                    <p className="text-[#6b7280]">
                      If informal resolution fails, either party may elect to resolve disputes through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996 of India. The arbitration shall be conducted in Lucknow, Uttar Pradesh, India, in the English language.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section id="changes" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="text-[#ec4899] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">13. Changes to These Terms</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p>
                    We reserve the right to modify, amend, or update these Terms at any time at our sole discretion. When we make changes, we will update the "Last Updated" date at the top of this page.
                  </p>

                  <div className="bg-[#f5f3ff] rounded-lg p-6">
                    <h3 className="text-lg font-bold text-[#1a1a2e] mb-3">Notification of Material Changes</h3>
                    <p className="text-[#6b7280] mb-3">
                      For material changes that significantly affect your rights or obligations, we will provide prominent notice on the Platform at least <strong>30 days before the changes take effect</strong>. Material changes may include:
                    </p>
                    <div className="space-y-2">
                      <p>• Changes to eligibility requirements</p>
                      <p>• Modifications to intellectual property rights</p>
                      <p>• Significant changes to disclaimers or limitations of liability</p>
                      <p>• Changes to governing law or dispute resolution procedures</p>
                    </div>
                  </div>

                  <p>
                    <strong>Your Continued Use:</strong> Your continued use of the Platform after any changes to these Terms constitutes your acceptance of the modified Terms. If you do not agree with the changes, you must stop using the Platform immediately.
                  </p>

                  <p>
                    We encourage you to review these Terms periodically to stay informed of any updates.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Miscellaneous */}
          <section className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-8 border border-[#a855f7]/20">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">Additional Provisions</h2>
            <div className="space-y-4 text-[#6b7280] leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">Entire Agreement</h3>
                <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and the Company regarding your use of the Platform.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">Severability</h3>
                <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">Waiver</h3>
                <p>No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">Assignment</h3>
                <p>You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">Force Majeure</h3>
                <p>We shall not be liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, network infrastructure failures, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-20 bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white rounded-lg p-8">
            <h2 className="text-4xl font-bold mb-4">14. Contact Information</h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              If you have any questions, concerns, or comments about these Terms & Conditions, please contact us:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">General Inquiries</h3>
                <div className="space-y-2 text-white/80">
                  <p><strong>Email:</strong> support@playbystats.com</p>
                  <p><strong>Legal Email:</strong> legal@playbystats.com</p>
                  <p><strong>Phone:</strong> +91 (987) 654-3210</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Company Details</h3>
                <div className="space-y-2 text-white/80">
                  <p><strong>Company Name:</strong> SDSURABHI INFRA PRIVATE LIMITED</p>
                  <p><strong>CIN:</strong> U41002UP2023PTC194590</p>
                  <p><strong>Location:</strong> Lucknow, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white/70 text-sm">
                We aim to respond to all inquiries within 5 business days. For urgent legal matters, please mark your email as "Urgent - Legal Matter."
              </p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center space-y-2">
            <p className="text-[#6b7280] text-sm">
              <strong>Last Updated:</strong> January 14, 2026 | <strong>Effective Date:</strong> January 14, 2026
            </p>
            <p className="text-[#6b7280] text-sm">
              These Terms & Conditions are written in English. In case of any discrepancy between the English version and any translated version, the English version shall prevail.
            </p>
            <p className="text-[#6b7280] text-sm font-bold mt-4">
              BY USING PLAY BY STATS, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS & CONDITIONS.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
