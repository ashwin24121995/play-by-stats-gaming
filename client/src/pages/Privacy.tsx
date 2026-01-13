import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, Globe, FileText, Mail } from 'lucide-react';

/**
 * Privacy Policy Page - Play By Stats
 * Comprehensive privacy policy for anonymous gaming platform
 */
export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f3ff] to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#a855f7] to-[#ec4899]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-white/90">
              Your privacy matters. Learn how we protect your information.
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
                <Eye className="w-8 h-8 text-[#a855f7]" />
                Introduction
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                Welcome to Play By Stats, operated by SDSURABHI INFRA PRIVATE LIMITED. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our platform at playbystats.com and use our free-to-play casino gaming services.
              </p>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                Play By Stats is designed as a completely anonymous entertainment platform. We do not require registration, account creation, or login credentials. Our commitment to privacy means we collect minimal personal information and prioritize your anonymity throughout your gaming experience.
              </p>
              <p className="text-[#4b5563] leading-relaxed">
                By accessing or using Play By Stats, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please discontinue use of our platform immediately.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <Database className="w-8 h-8 text-[#a855f7]" />
                Information We Collect
              </h2>
              
              <h3 className="text-2xl font-semibold text-[#1f1f2e] mt-6 mb-3">Information You Provide Voluntarily</h3>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                Contact Form Data: When you choose to contact us through our contact form, we collect your name, email address, and message content. This information is used solely to respond to your inquiry and is not shared with third parties or used for marketing purposes.
              </p>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                Feedback and Support: If you provide feedback, report issues, or request support, we may collect the information you voluntarily submit, including descriptions of problems, suggestions, and any attachments you provide.
              </p>

              <h3 className="text-2xl font-semibold text-[#1f1f2e] mt-6 mb-3">Information Collected Automatically</h3>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                Device and Browser Information: We automatically collect technical information about your device and browser, including IP address, browser type and version, operating system, device type, screen resolution, and language preferences. This data helps us optimize platform performance and ensure compatibility across devices.
              </p>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                Usage Analytics: We collect anonymous usage data through analytics tools to understand how visitors interact with our platform. This includes pages visited, time spent on pages, navigation paths, referral sources, and general geographic location (country/region level only). We use this information to improve user experience and platform functionality.
              </p>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                Cookies and Similar Technologies: We use cookies, web beacons, and similar tracking technologies to enhance your experience. Cookies are small text files stored on your device that help us remember your preferences (such as sound settings) and analyze platform usage. You can control cookie preferences through your browser settings.
              </p>

              <h3 className="text-2xl font-semibold text-[#1f1f2e] mt-6 mb-3">Local Storage Data</h3>
              <p className="text-[#4b5563] leading-relaxed">
                Game Progress and Preferences: Your game statistics, virtual coin balance, sound preferences, and gameplay history are stored locally in your browser's local storage. This data never leaves your device and is not transmitted to our servers. You maintain full control and can clear this data at any time through your browser settings.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <FileText className="w-8 h-8 text-[#a855f7]" />
                How We Use Your Information
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                We use the collected information for the following legitimate purposes:
              </p>
              <div className="bg-[#f5f3ff] rounded-lg p-6 space-y-4">
                <p className="text-[#4b5563] leading-relaxed">
                  <strong>Platform Operation and Improvement:</strong> We analyze usage patterns to identify technical issues, optimize performance, improve game mechanics, and enhance overall user experience. This helps us understand which features are most popular and where improvements are needed.
                </p>
                <p className="text-[#4b5563] leading-relaxed">
                  <strong>Communication and Support:</strong> We use contact information you provide to respond to inquiries, provide customer support, send important platform updates, and address technical issues or concerns you report.
                </p>
                <p className="text-[#4b5563] leading-relaxed">
                  <strong>Security and Fraud Prevention:</strong> We monitor platform usage to detect and prevent fraudulent activity, abuse, security threats, and violations of our Terms & Conditions. This protects both our platform integrity and the experience of legitimate users.
                </p>
                <p className="text-[#4b5563] leading-relaxed">
                  <strong>Legal Compliance:</strong> We may use and disclose information as necessary to comply with applicable laws, regulations, legal processes, or governmental requests, and to enforce our policies and protect our rights and the rights of others.
                </p>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <Globe className="w-8 h-8 text-[#a855f7]" />
                Information Sharing and Disclosure
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                Play By Stats does not sell, rent, or trade your personal information to third parties for marketing purposes. We may share information only in the following limited circumstances:
              </p>
              <div className="bg-[#fef3c7] rounded-lg p-6 border-l-4 border-[#f59e0b] space-y-4">
                <p className="text-[#78350f] leading-relaxed">
                  <strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our platform, conducting analytics, providing hosting services, or performing other business functions. These providers are contractually obligated to use your information only for the purposes we specify and to maintain confidentiality.
                </p>
                <p className="text-[#78350f] leading-relaxed">
                  <strong>Legal Requirements:</strong> We may disclose information if required by law, court order, subpoena, or other legal process, or when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others, investigate fraud, or respond to government requests.
                </p>
                <p className="text-[#78350f] leading-relaxed">
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, reorganization, bankruptcy, or sale of assets, your information may be transferred to the successor entity. We will notify you of any such change and provide options regarding your information.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <Lock className="w-8 h-8 text-[#a855f7]" />
                Data Security
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. Our security practices include:
              </p>
              <div className="bg-[#f0fdf4] rounded-lg p-6 border-l-4 border-[#22c55e] space-y-4">
                <p className="text-[#14532d] leading-relaxed">
                  <strong>Encryption:</strong> We use SSL/TLS encryption to protect data transmitted between your browser and our servers. All communications are encrypted using modern cryptographic protocols.
                </p>
                <p className="text-[#14532d] leading-relaxed">
                  <strong>Access Controls:</strong> We restrict access to personal information to authorized personnel only, who are bound by confidentiality obligations. Access is granted on a need-to-know basis.
                </p>
                <p className="text-[#14532d] leading-relaxed">
                  <strong>Regular Security Audits:</strong> We conduct regular security assessments and vulnerability testing to identify and address potential security risks.
                </p>
                <p className="text-[#14532d] leading-relaxed">
                  <strong>Data Minimization:</strong> We collect only the minimum information necessary to provide our services, reducing the risk associated with data storage.
                </p>
              </div>
              <p className="text-[#4b5563] leading-relaxed mt-4">
                While we strive to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security, and you use our platform at your own risk.
              </p>
            </div>

            {/* Your Privacy Rights */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <UserCheck className="w-8 h-8 text-[#a855f7]" />
                Your Privacy Rights
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <div className="bg-[#eff6ff] rounded-lg p-6 border-l-4 border-[#3b82f6] space-y-4">
                <p className="text-[#1e3a8a] leading-relaxed">
                  <strong>Right to Access:</strong> You have the right to request access to the personal information we hold about you and receive a copy of that information.
                </p>
                <p className="text-[#1e3a8a] leading-relaxed">
                  <strong>Right to Correction:</strong> You have the right to request correction of inaccurate or incomplete personal information.
                </p>
                <p className="text-[#1e3a8a] leading-relaxed">
                  <strong>Right to Deletion:</strong> You have the right to request deletion of your personal information, subject to certain legal exceptions.
                </p>
                <p className="text-[#1e3a8a] leading-relaxed">
                  <strong>Right to Object:</strong> You have the right to object to certain processing of your personal information, including processing for direct marketing purposes.
                </p>
                <p className="text-[#1e3a8a] leading-relaxed">
                  <strong>Right to Data Portability:</strong> You have the right to receive your personal information in a structured, commonly used, and machine-readable format and transmit it to another controller.
                </p>
              </div>
              <p className="text-[#4b5563] leading-relaxed mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:support@playbystats.com" className="text-[#a855f7] hover:underline font-semibold">support@playbystats.com</a>. We will respond to your request within 30 days.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">Children's Privacy</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                Play By Stats is intended for users aged 18 years and older. We do not knowingly collect personal information from individuals under 18. If we become aware that we have collected personal information from a person under 18, we will take steps to delete that information promptly.
              </p>
              <p className="text-[#4b5563] leading-relaxed">
                If you are a parent or guardian and believe your child under 18 has provided us with personal information, please contact us immediately at <a href="mailto:support@playbystats.com" className="text-[#a855f7] hover:underline font-semibold">support@playbystats.com</a>.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">International Data Transfers</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                Play By Stats is operated from India. If you access our platform from outside India, please be aware that your information may be transferred to, stored, and processed in India or other countries where our service providers operate.
              </p>
              <p className="text-[#4b5563] leading-relaxed">
                By using our platform, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection laws. We take appropriate measures to ensure your information receives adequate protection in accordance with this Privacy Policy.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">Third-Party Links and Services</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                Our platform may contain links to third-party websites, services, or resources that are not owned or controlled by Play By Stats. We are not responsible for the privacy practices or content of these third-party sites.
              </p>
              <p className="text-[#4b5563] leading-relaxed">
                We encourage you to review the privacy policies of any third-party sites you visit. This Privacy Policy applies only to information collected by Play By Stats.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">Changes to This Privacy Policy</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will update the "Last Updated" date at the top of this policy.
              </p>
              <p className="text-[#4b5563] leading-relaxed">
                We encourage you to review this Privacy Policy periodically. Your continued use of Play By Stats after any changes indicates your acceptance of the updated Privacy Policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Mail className="w-8 h-8" />
                Contact Us
              </h2>
              <p className="leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
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
