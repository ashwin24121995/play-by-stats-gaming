import { motion } from 'framer-motion';
import { Shield, Mail, Gamepad2, Lock, Eye, Cookie, Database, Globe, AlertCircle } from 'lucide-react';

/**
 * Privacy Policy Page - Play By Stats
 * Comprehensive privacy policy covering all data practices
 * Design: Purple (#a855f7) & Pink (#ec4899)
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
            <p className="text-xl text-white/90">Comprehensive guide to how we collect, use, protect, and manage your information</p>
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
              <a href="#introduction" className="hover:text-[#a855f7] transition-colors">1. Introduction</a>
              <a href="#information-collection" className="hover:text-[#a855f7] transition-colors">2. Information We Collect</a>
              <a href="#how-we-use" className="hover:text-[#a855f7] transition-colors">3. How We Use Your Information</a>
              <a href="#data-storage" className="hover:text-[#a855f7] transition-colors">4. Data Storage & Retention</a>
              <a href="#cookies" className="hover:text-[#a855f7] transition-colors">5. Cookies & Tracking Technologies</a>
              <a href="#data-security" className="hover:text-[#a855f7] transition-colors">6. Data Security</a>
              <a href="#third-party" className="hover:text-[#a855f7] transition-colors">7. Third-Party Services</a>
              <a href="#your-rights" className="hover:text-[#a855f7] transition-colors">8. Your Privacy Rights</a>
              <a href="#international" className="hover:text-[#a855f7] transition-colors">9. International Data Transfers</a>
              <a href="#children" className="hover:text-[#a855f7] transition-colors">10. Children's Privacy</a>
              <a href="#changes" className="hover:text-[#a855f7] transition-colors">11. Policy Changes</a>
              <a href="#contact" className="hover:text-[#a855f7] transition-colors">12. Contact Us</a>
            </div>
          </section>

          {/* Introduction */}
          <section id="introduction" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="text-[#a855f7] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">1. Introduction</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p>
                    Welcome to Play By Stats, a free-to-play social gaming platform operated by <strong>SDSURABHI INFRA PRIVATE LIMITED</strong> (CIN: U41002UP2023PTC194590), hereinafter referred to as "we," "us," "our," or "the Company." We are committed to protecting your privacy and ensuring transparency in how we handle your personal information.
                  </p>
                  <p>
                    This Privacy Policy explains in detail what information we collect from you when you visit our website at playbystats.com (the "Website"), how we use that information, how we protect it, and what rights you have regarding your personal data. By accessing or using our Website, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
                  </p>
                  <p>
                    Play By Stats is designed as a 100% free entertainment platform with no real money gambling or financial transactions. We collect minimal personal information and prioritize user privacy and data protection in all our operations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Information We Collect */}
          <section id="information-collection" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <Database className="text-[#ec4899] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">2. Information We Collect</h2>
                
                {/* Automatically Collected */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">2.1 Information Automatically Collected</h3>
                  <p className="text-[#6b7280] leading-relaxed mb-4">
                    When you visit our Website, we automatically collect certain technical information through server logs and analytics tools. This information is collected passively and does not personally identify you.
                  </p>
                  <div className="bg-[#f5f3ff] rounded-lg p-6 space-y-3">
                    <p className="text-[#6b7280]"><strong className="text-[#1a1a2e]">• IP Address:</strong> Your device's Internet Protocol address, which may indicate your general geographic location</p>
                    <p className="text-[#6b7280]"><strong className="text-[#1a1a2e]">• Browser Information:</strong> Browser type, version, language preference, and operating system</p>
                    <p className="text-[#6b7280]"><strong className="text-[#1a1a2e]">• Device Information:</strong> Device type (desktop, mobile, tablet), screen resolution, and device identifiers</p>
                    <p className="text-[#6b7280]"><strong className="text-[#1a1a2e]">• Usage Data:</strong> Pages visited, time spent on pages, links clicked, referring website URL, and navigation patterns</p>
                    <p className="text-[#6b7280]"><strong className="text-[#1a1a2e]">• Technical Data:</strong> Connection type, ISP information, timestamps, and error logs</p>
                  </div>
                </div>

                {/* Voluntarily Provided */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">2.2 Information You Provide Voluntarily</h3>
                  <p className="text-[#6b7280] leading-relaxed mb-4">
                    We only collect personal information that you choose to provide to us directly. This occurs in the following situations:
                  </p>
                  <div className="bg-[#fff5f5] rounded-lg p-6 space-y-4">
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] mb-2">Contact Forms</h4>
                      <p className="text-[#6b7280]">When you fill out our contact form, you provide your name, email address, and message content. This information is used solely to respond to your inquiry.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] mb-2">Customer Support</h4>
                      <p className="text-[#6b7280]">When you reach out for support, you may provide additional information such as screenshots, device details, or descriptions of technical issues.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] mb-2">Feedback & Surveys</h4>
                      <p className="text-[#6b7280]">If you participate in optional surveys or provide feedback, you may share opinions, preferences, and suggestions.</p>
                    </div>
                  </div>
                </div>

                {/* Gaming Data */}
                <div>
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">2.3 Gaming Data</h3>
                  <p className="text-[#6b7280] leading-relaxed mb-4">
                    When you play games on our platform, certain gameplay data is generated. <strong className="text-[#1a1a2e]">Important:</strong> All gaming data is stored locally on your device using browser storage (localStorage). We do not transmit, store, or access your game scores, achievements, or gameplay statistics on our servers.
                  </p>
                  <div className="bg-[#f0fdf4] rounded-lg p-6">
                    <p className="text-[#6b7280] mb-2"><strong className="text-[#1a1a2e]">Locally Stored Data Includes:</strong></p>
                    <p className="text-[#6b7280]">• Game scores and results • Virtual coin balances • Win/loss statistics • Game preferences and settings</p>
                    <p className="text-[#6b7280] mt-4 italic">This data remains entirely under your control and can be cleared at any time by clearing your browser data.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section id="how-we-use" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <Eye className="text-[#a855f7] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">3. How We Use Your Information</h2>
                <p className="text-[#6b7280] leading-relaxed mb-6">
                  We use the information we collect for legitimate business purposes and to provide you with the best possible experience on our platform. Below are the specific purposes for which we use your data:
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-[#a855f7] pl-6">
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">3.1 To Provide and Improve Our Services</h3>
                    <p className="text-[#6b7280] leading-relaxed">
                      We use technical data to ensure our Website functions properly, loads quickly, and provides a seamless gaming experience. This includes monitoring performance, identifying bugs, optimizing page load times, and improving user interface design based on usage patterns.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#ec4899] pl-6">
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">3.2 To Communicate With You</h3>
                    <p className="text-[#6b7280] leading-relaxed">
                      When you contact us through our contact form or email, we use your provided information (name and email address) to respond to your inquiries, provide customer support, address technical issues, and answer questions about our services.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#a855f7] pl-6">
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">3.3 To Ensure Security and Prevent Fraud</h3>
                    <p className="text-[#6b7280] leading-relaxed">
                      We analyze technical data and usage patterns to detect suspicious activity, prevent unauthorized access, identify potential security threats, protect against malicious attacks, and ensure the integrity of our platform.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#ec4899] pl-6">
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">3.4 To Comply With Legal Obligations</h3>
                    <p className="text-[#6b7280] leading-relaxed">
                      We may use and disclose your information as required by applicable laws, regulations, legal processes, or governmental requests. This includes responding to court orders, complying with tax regulations, and cooperating with law enforcement investigations when legally required.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#a855f7] pl-6">
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">3.5 To Analyze and Improve User Experience</h3>
                    <p className="text-[#6b7280] leading-relaxed">
                      We use aggregated, anonymized usage data to understand how users interact with our Website, which games are most popular, what features are most used, and where improvements can be made. This helps us make data-driven decisions to enhance our platform.
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-[#fff3cd] border border-[#ffc107] rounded-lg p-6">
                  <p className="text-[#856404] flex items-start gap-3">
                    <AlertCircle className="flex-shrink-0 mt-1" size={20} />
                    <span><strong>Important Note:</strong> We do NOT use your information for targeted advertising, sell your data to third parties, create detailed user profiles for marketing purposes, or track you across other websites.</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Storage & Retention */}
          <section id="data-storage" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <Database className="text-[#ec4899] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">4. Data Storage & Retention</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">4.1 Where We Store Your Data</h3>
                    <p className="text-[#6b7280] leading-relaxed mb-4">
                      Our servers and databases are hosted on secure cloud infrastructure provided by reputable service providers. We ensure that all data centers comply with industry-standard security certifications and data protection regulations. Your gaming data (scores, achievements, virtual coins) is stored locally on your device and never transmitted to our servers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">4.2 How Long We Retain Your Data</h3>
                    <p className="text-[#6b7280] leading-relaxed mb-4">
                      We retain different types of data for varying periods based on legal requirements and business necessity:
                    </p>
                    <div className="bg-[#f5f3ff] rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white">
                          <tr>
                            <th className="px-6 py-3 text-left font-bold">Data Type</th>
                            <th className="px-6 py-3 text-left font-bold">Retention Period</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e5e7eb]">
                          <tr>
                            <td className="px-6 py-4 text-[#6b7280]">Contact form submissions</td>
                            <td className="px-6 py-4 text-[#6b7280]">2 years or until resolved</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-[#6b7280]">Server logs & technical data</td>
                            <td className="px-6 py-4 text-[#6b7280]">90 days</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-[#6b7280]">Analytics data (aggregated)</td>
                            <td className="px-6 py-4 text-[#6b7280]">26 months</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-[#6b7280]">Cookie data</td>
                            <td className="px-6 py-4 text-[#6b7280]">As specified in cookie settings</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-[#6b7280]">Gaming data (local storage)</td>
                            <td className="px-6 py-4 text-[#6b7280]">Until you clear browser data</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[#6b7280] leading-relaxed mt-4">
                      After the retention period expires, we securely delete or anonymize your data. You can request early deletion of your personal information at any time by contacting us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section id="cookies" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <Cookie className="text-[#a855f7] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">5. Cookies & Tracking Technologies</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">5.1 What Are Cookies?</h3>
                    <p className="text-[#6b7280] leading-relaxed">
                      Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, improve functionality, and analyze usage patterns. Cookies do not contain viruses or malware and cannot access other files on your device.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">5.2 Types of Cookies We Use</h3>
                    <div className="space-y-4">
                      <div className="bg-[#f0fdf4] rounded-lg p-6">
                        <h4 className="font-bold text-[#1a1a2e] mb-2">Essential Cookies (Required)</h4>
                        <p className="text-[#6b7280]">
                          These cookies are necessary for the Website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies as the Website would not work without them.
                        </p>
                      </div>

                      <div className="bg-[#eff6ff] rounded-lg p-6">
                        <h4 className="font-bold text-[#1a1a2e] mb-2">Functional Cookies (Optional)</h4>
                        <p className="text-[#6b7280]">
                          These cookies remember your preferences and choices (such as sound settings, game preferences, or language selection) to provide you with a more personalized experience. You can disable these cookies, but some features may not work as intended.
                        </p>
                      </div>

                      <div className="bg-[#fef3c7] rounded-lg p-6">
                        <h4 className="font-bold text-[#1a1a2e] mb-2">Analytics Cookies (Optional)</h4>
                        <p className="text-[#6b7280]">
                          These cookies help us understand how visitors interact with our Website by collecting and reporting information anonymously. We use this data to improve our services. You can opt-out of analytics cookies without affecting your ability to use the Website.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">5.3 Managing Your Cookie Preferences</h3>
                    <p className="text-[#6b7280] leading-relaxed mb-4">
                      You have full control over which cookies you accept. When you first visit our Website, you'll see a cookie consent banner where you can accept all cookies, reject optional cookies, or customize your preferences. You can change your cookie settings at any time through your browser settings or by clicking the cookie preferences link in our footer.
                    </p>
                    <p className="text-[#6b7280] leading-relaxed">
                      Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. However, disabling cookies may prevent you from using certain features of our Website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section id="data-security" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <Lock className="text-[#ec4899] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">6. Data Security</h2>
                <p className="text-[#6b7280] leading-relaxed mb-6">
                  We take the security of your personal information seriously and implement industry-standard technical and organizational measures to protect your data from unauthorized access, disclosure, alteration, or destruction.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">6.1 Security Measures We Implement</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-6 border border-[#a855f7]/20">
                        <h4 className="font-bold text-[#1a1a2e] mb-2">🔐 Encryption</h4>
                        <p className="text-[#6b7280] text-sm">SSL/TLS encryption for all data transmitted between your browser and our servers</p>
                      </div>
                      <div className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-6 border border-[#a855f7]/20">
                        <h4 className="font-bold text-[#1a1a2e] mb-2">🛡️ Secure Servers</h4>
                        <p className="text-[#6b7280] text-sm">Firewalls, intrusion detection systems, and restricted access controls</p>
                      </div>
                      <div className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-6 border border-[#a855f7]/20">
                        <h4 className="font-bold text-[#1a1a2e] mb-2">🔍 Regular Audits</h4>
                        <p className="text-[#6b7280] text-sm">Periodic security assessments and vulnerability testing</p>
                      </div>
                      <div className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-6 border border-[#a855f7]/20">
                        <h4 className="font-bold text-[#1a1a2e] mb-2">👥 Access Controls</h4>
                        <p className="text-[#6b7280] text-sm">Limited employee access to personal data on a need-to-know basis</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#fff3cd] border border-[#ffc107] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#856404] mb-3 flex items-center gap-2">
                      <AlertCircle size={24} />
                      Important Security Note
                    </h3>
                    <p className="text-[#856404] leading-relaxed mb-3">
                      While we implement robust security measures, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data. However, we continuously monitor and update our security practices to protect against emerging threats.
                    </p>
                    <p className="text-[#856404] leading-relaxed">
                      <strong>No Financial Data:</strong> Since Play By Stats is 100% free with no real money transactions, we never collect, store, or process credit card numbers, bank account details, or any financial information. This significantly reduces your risk exposure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section id="third-party" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <Globe className="text-[#a855f7] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">7. Third-Party Services & Links</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">7.1 Third-Party Service Providers</h3>
                    <p className="text-[#6b7280] leading-relaxed mb-4">
                      We may use trusted third-party service providers to help us operate our Website, conduct our business, or provide services to you. These providers have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                    </p>
                    <p className="text-[#6b7280] leading-relaxed mb-4">
                      Examples of third-party services we may use include:
                    </p>
                    <div className="bg-[#f5f3ff] rounded-lg p-6 space-y-2">
                      <p className="text-[#6b7280]">• <strong className="text-[#1a1a2e]">Cloud Hosting Providers:</strong> For server infrastructure and data storage</p>
                      <p className="text-[#6b7280]">• <strong className="text-[#1a1a2e]">Analytics Services:</strong> For website traffic analysis and performance monitoring</p>
                      <p className="text-[#6b7280]">• <strong className="text-[#1a1a2e]">Email Service Providers:</strong> For sending transactional emails and responding to inquiries</p>
                      <p className="text-[#6b7280]">• <strong className="text-[#1a1a2e]">Security Services:</strong> For DDoS protection and threat detection</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">7.2 External Links</h3>
                    <p className="text-[#6b7280] leading-relaxed mb-4">
                      Our Website may contain links to third-party websites, plugins, or applications. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy practices or content.
                    </p>
                    <p className="text-[#6b7280] leading-relaxed">
                      We strongly encourage you to review the privacy policy of every website you visit. This Privacy Policy applies only to information collected by our Website.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">7.3 Data Sharing Policy</h3>
                    <p className="text-[#6b7280] leading-relaxed mb-4">
                      We do NOT sell, trade, or rent your personal information to third parties for marketing purposes. We only share your information in the following limited circumstances:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-[#a855f7] font-bold text-lg mt-1">✓</span>
                        <p className="text-[#6b7280]"><strong className="text-[#1a1a2e]">With Your Consent:</strong> When you explicitly authorize us to share your information</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#a855f7] font-bold text-lg mt-1">✓</span>
                        <p className="text-[#6b7280]"><strong className="text-[#1a1a2e]">For Legal Compliance:</strong> When required by law, court order, or governmental regulation</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#a855f7] font-bold text-lg mt-1">✓</span>
                        <p className="text-[#6b7280]"><strong className="text-[#1a1a2e]">With Service Providers:</strong> With trusted partners who assist in operating our Website (under strict confidentiality agreements)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#a855f7] font-bold text-lg mt-1">✓</span>
                        <p className="text-[#6b7280]"><strong className="text-[#1a1a2e]">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets (with notice to affected users)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section id="your-rights" className="scroll-mt-20 bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-8 border border-[#a855f7]/20">
            <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">8. Your Privacy Rights</h2>
            <p className="text-[#6b7280] leading-relaxed mb-6">
              You have certain rights regarding your personal information under applicable data protection laws. We are committed to honoring these rights and providing you with control over your data.
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2 flex items-center gap-2">
                  <span className="text-[#a855f7]">→</span> Right to Access
                </h3>
                <p className="text-[#6b7280]">
                  You have the right to request a copy of the personal information we hold about you. We will provide this information in a structured, commonly used, and machine-readable format within 30 days of your request.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2 flex items-center gap-2">
                  <span className="text-[#ec4899]">→</span> Right to Rectification
                </h3>
                <p className="text-[#6b7280]">
                  If you believe any information we hold about you is inaccurate or incomplete, you have the right to request correction. We will promptly update or correct your information upon verification.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2 flex items-center gap-2">
                  <span className="text-[#a855f7]">→</span> Right to Erasure (Right to be Forgotten)
                </h3>
                <p className="text-[#6b7280]">
                  You can request deletion of your personal information at any time. We will delete your data unless we have a legal obligation to retain it (e.g., for tax or legal compliance purposes).
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2 flex items-center gap-2">
                  <span className="text-[#ec4899]">→</span> Right to Restriction of Processing
                </h3>
                <p className="text-[#6b7280]">
                  You have the right to request that we limit how we use your personal information in certain circumstances, such as when you contest the accuracy of the data or object to processing.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2 flex items-center gap-2">
                  <span className="text-[#a855f7]">→</span> Right to Data Portability
                </h3>
                <p className="text-[#6b7280]">
                  You can request to receive your personal data in a portable format and have the right to transmit that data to another service provider where technically feasible.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2 flex items-center gap-2">
                  <span className="text-[#ec4899]">→</span> Right to Object
                </h3>
                <p className="text-[#6b7280]">
                  You have the right to object to our processing of your personal information for direct marketing purposes or when processing is based on legitimate interests.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2 flex items-center gap-2">
                  <span className="text-[#a855f7]">→</span> Right to Withdraw Consent
                </h3>
                <p className="text-[#6b7280]">
                  Where we process your data based on your consent, you have the right to withdraw that consent at any time. This will not affect the lawfulness of processing before withdrawal.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2 flex items-center gap-2">
                  <span className="text-[#ec4899]">→</span> Right to Lodge a Complaint
                </h3>
                <p className="text-[#6b7280]">
                  If you believe we have not handled your personal information in accordance with applicable laws, you have the right to lodge a complaint with your local data protection authority.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">How to Exercise Your Rights</h3>
              <p className="text-white/90">
                To exercise any of these rights, please contact us at <strong>privacy@playbystats.com</strong> with your request. We will respond within 30 days and may ask you to verify your identity before processing your request.
              </p>
            </div>
          </section>

          {/* International Transfers */}
          <section id="international" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <Globe className="text-[#ec4899] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">9. International Data Transfers</h2>
                <p className="text-[#6b7280] leading-relaxed mb-4">
                  Our company is based in India, and our servers are located in secure data centers that may be in different countries. If you are accessing our Website from outside India, please be aware that your information may be transferred to, stored, and processed in India or other countries where our service providers operate.
                </p>
                <p className="text-[#6b7280] leading-relaxed mb-4">
                  By using our Website, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection laws than your country. We ensure that all international data transfers comply with applicable data protection regulations and implement appropriate safeguards such as:
                </p>
                <div className="bg-[#f5f3ff] rounded-lg p-6 space-y-2">
                  <p className="text-[#6b7280]">• Standard Contractual Clauses (SCCs) approved by regulatory authorities</p>
                  <p className="text-[#6b7280]">• Adequacy decisions recognizing equivalent data protection standards</p>
                  <p className="text-[#6b7280]">• Binding Corporate Rules for intra-group transfers</p>
                  <p className="text-[#6b7280]">• Encryption and security measures during data transmission</p>
                </div>
              </div>
            </div>
          </section>

          {/* Children's Privacy */}
          <section id="children" className="scroll-mt-20 bg-[#fff3cd] border border-[#ffc107] rounded-lg p-8">
            <h2 className="text-4xl font-bold text-[#856404] mb-6 flex items-center gap-3">
              <AlertCircle size={36} />
              10. Children's Privacy
            </h2>
            <p className="text-[#856404] leading-relaxed mb-4">
              Play By Stats is intended for users who are <strong>18 years of age or older</strong>. We do not knowingly collect personal information from children under 18. If you are under 18, please do not use our Website or provide any information to us.
            </p>
            <p className="text-[#856404] leading-relaxed mb-4">
              If we become aware that we have inadvertently collected personal information from a child under 18, we will take immediate steps to delete that information from our servers. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <strong>privacy@playbystats.com</strong>.
            </p>
            <p className="text-[#856404] leading-relaxed">
              We encourage parents and guardians to monitor their children's Internet usage and to help enforce this Privacy Policy by instructing their children never to provide personal information on our Website without permission.
            </p>
          </section>

          {/* Policy Changes */}
          <section id="changes" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="text-[#a855f7] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">11. Changes to This Privacy Policy</h2>
                <p className="text-[#6b7280] leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will update the "Last Updated" date at the top of this policy.
                </p>
                <p className="text-[#6b7280] leading-relaxed mb-4">
                  <strong className="text-[#1a1a2e]">Material Changes:</strong> If we make material changes that significantly affect your privacy rights, we will provide prominent notice on our Website or send you an email notification (if you have provided your email address) at least 30 days before the changes take effect.
                </p>
                <p className="text-[#6b7280] leading-relaxed mb-4">
                  <strong className="text-[#1a1a2e]">Your Continued Use:</strong> Your continued use of our Website after any changes to this Privacy Policy constitutes your acceptance of the updated policy. If you do not agree with the changes, please discontinue using our Website.
                </p>
                <p className="text-[#6b7280] leading-relaxed">
                  We encourage you to periodically review this Privacy Policy to stay informed about how we are protecting your information.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Us */}
          <section id="contact" className="scroll-mt-20 bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white rounded-lg p-8">
            <h2 className="text-4xl font-bold mb-4">12. Contact Us</h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please don't hesitate to contact us. We are committed to addressing your privacy concerns promptly and transparently.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Contact Information</h3>
                <div className="space-y-2 text-white/80">
                  <p><strong>Email:</strong> privacy@playbystats.com</p>
                  <p><strong>Support Email:</strong> support@playbystats.com</p>
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
                We aim to respond to all privacy-related inquiries within 5 business days. For urgent matters, please mark your email as "Urgent - Privacy Matter."
              </p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center space-y-2">
            <p className="text-[#6b7280] text-sm">
              <strong>Last Updated:</strong> January 14, 2026 | <strong>Effective Date:</strong> January 14, 2026
            </p>
            <p className="text-[#6b7280] text-sm">
              This Privacy Policy is written in English. In case of any discrepancy between the English version and any translated version, the English version shall prevail.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
