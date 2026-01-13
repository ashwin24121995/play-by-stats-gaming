import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, Shield, Info, Ban, FileWarning, Mail } from 'lucide-react';

/**
 * Disclaimer Page - Play By Stats
 * Comprehensive disclaimer for anonymous gaming platform
 */
export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f3ff] to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#f59e0b] to-[#ef4444]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AlertTriangle className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-white mb-4">Disclaimer</h1>
            <p className="text-xl text-white/90">
              Important information about our platform and services
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
            {/* General Disclaimer */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <Info className="w-8 h-8 text-[#f59e0b]" />
                General Disclaimer
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                The information contained on Play By Stats (the "Platform") and the services provided by SDSURABHI INFRA PRIVATE LIMITED (the "Company") are for general information and entertainment purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the Platform or the information contained therein.
              </p>
              <p className="text-[#4b5563] leading-relaxed">
                Any reliance you place on such information is strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this Platform.
              </p>
            </div>

            {/* No Real Money Gambling */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-[#ef4444]" />
                No Real Money Gambling
              </h2>
              <div className="bg-[#fee2e2] rounded-lg p-6 border-l-4 border-[#ef4444] mb-4">
                <p className="text-[#7f1d1d] leading-relaxed mb-4 font-bold text-lg">
                  IMPORTANT: Play By Stats is NOT a real money gambling platform.
                </p>
                <div className="space-y-3 text-[#7f1d1d]">
                  <p className="leading-relaxed">
                    <strong>No Real Money Wagering:</strong> All games on this Platform use virtual coins that have absolutely no monetary value. You cannot bet, wager, or gamble with real money on this Platform.
                  </p>
                  <p className="leading-relaxed">
                    <strong>No Cash Prizes:</strong> You cannot win real money, cash prizes, or anything of monetary value through gameplay. All winnings are purely virtual and for entertainment purposes only.
                  </p>
                  <p className="leading-relaxed">
                    <strong>No Purchase or Exchange:</strong> Virtual coins cannot be purchased with real money, nor can they be exchanged, redeemed, or converted into real currency, goods, services, or anything of value.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Entertainment Only:</strong> This Platform is designed solely for entertainment, skill development, and recreational purposes. It does not constitute gambling under any jurisdiction's laws.
                  </p>
                </div>
              </div>
              <p className="text-[#4b5563] leading-relaxed">
                The games on this Platform simulate casino-style games for entertainment purposes only. They are not intended to replicate real gambling experiences, encourage real-money gambling, or serve as training for real gambling activities.
              </p>
            </div>

            {/* Age Restriction */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <Ban className="w-8 h-8 text-[#ef4444]" />
                Age Restriction and Compliance
              </h2>
              <div className="bg-[#fef3c7] rounded-lg p-6 border-l-4 border-[#f59e0b] space-y-4">
                <p className="text-[#78350f] leading-relaxed">
                  <strong>18+ Only:</strong> This Platform is intended for users who are 18 years of age or older. By accessing or using this Platform, you represent and warrant that you are at least 18 years old. We do not knowingly collect information from or direct content to individuals under 18.
                </p>
                <p className="text-[#78350f] leading-relaxed">
                  <strong>Legal Compliance:</strong> It is your responsibility to ensure that your use of this Platform complies with all applicable laws and regulations in your jurisdiction. Some jurisdictions may restrict or prohibit access to gaming content, even when no real money is involved.
                </p>
                <p className="text-[#78350f] leading-relaxed">
                  <strong>Parental Responsibility:</strong> Parents and guardians are responsible for monitoring and controlling their children's internet usage. If you are a parent or guardian and discover that your child under 18 has accessed this Platform, please contact us immediately.
                </p>
              </div>
            </div>

            {/* No Warranties */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">No Warranties or Guarantees</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                The Platform is provided on an "as is" and "as available" basis without any warranties or guarantees of any kind, whether express or implied. To the fullest extent permitted by law, we disclaim all warranties, including but not limited to:
              </p>
              <div className="bg-[#f5f3ff] rounded-lg p-6 space-y-3">
                <p className="text-[#4b5563] leading-relaxed">
                  <strong>Availability:</strong> We do not guarantee that the Platform will be available at all times, operate without interruption, or be free from errors, bugs, or technical issues.
                </p>
                <p className="text-[#4b5563] leading-relaxed">
                  <strong>Accuracy:</strong> We do not warrant the accuracy, completeness, or reliability of any content, information, or materials on the Platform.
                </p>
                <p className="text-[#4b5563] leading-relaxed">
                  <strong>Security:</strong> While we implement security measures, we do not guarantee that the Platform will be secure or free from viruses, malware, or other harmful components.
                </p>
                <p className="text-[#4b5563] leading-relaxed">
                  <strong>Results:</strong> We do not guarantee any specific results, outcomes, or experiences from using the Platform. Your experience may vary.
                </p>
                <p className="text-[#4b5563] leading-relaxed">
                  <strong>Fitness for Purpose:</strong> We do not warrant that the Platform will meet your specific requirements or expectations.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <Shield className="w-8 h-8 text-[#f59e0b]" />
                Limitation of Liability
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                To the maximum extent permitted by applicable law, SDSURABHI INFRA PRIVATE LIMITED, its directors, employees, partners, agents, suppliers, or affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:
              </p>
              <div className="bg-[#eff6ff] rounded-lg p-6 border-l-4 border-[#3b82f6] space-y-2">
                <p className="text-[#1e3a8a] leading-relaxed">• Loss of profits, revenue, or business opportunities</p>
                <p className="text-[#1e3a8a] leading-relaxed">• Loss of data or information</p>
                <p className="text-[#1e3a8a] leading-relaxed">• Loss of use or inability to use the Platform</p>
                <p className="text-[#1e3a8a] leading-relaxed">• Personal injury or property damage</p>
                <p className="text-[#1e3a8a] leading-relaxed">• Costs of procurement of substitute services</p>
                <p className="text-[#1e3a8a] leading-relaxed">• Any other damages arising from your use of or inability to use the Platform</p>
              </div>
              <p className="text-[#4b5563] leading-relaxed mt-4">
                This limitation applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damage. Because some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, our liability in such jurisdictions shall be limited to the maximum extent permitted by law.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">Third-Party Links and Content</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                The Platform may contain links to third-party websites, services, or resources that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              <div className="bg-[#fff5f5] rounded-lg p-6 border-l-4 border-[#ef4444]">
                <p className="text-[#7f1d1d] leading-relaxed mb-3">
                  <strong>No Endorsement:</strong> The inclusion of any link does not imply endorsement, approval, or recommendation by us of the linked site or any association with its operators.
                </p>
                <p className="text-[#7f1d1d] leading-relaxed mb-3">
                  <strong>Your Responsibility:</strong> You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.
                </p>
                <p className="text-[#7f1d1d] leading-relaxed">
                  <strong>Review Policies:</strong> We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
                </p>
              </div>
            </div>

            {/* Responsible Gaming */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">Responsible Gaming Statement</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                While Play By Stats does not involve real money gambling, we recognize that any form of gaming should be enjoyed responsibly and in moderation.
              </p>
              <div className="bg-[#f0fdf4] rounded-lg p-6 border-l-4 border-[#22c55e] space-y-4">
                <p className="text-[#14532d] leading-relaxed">
                  <strong>Play for Fun:</strong> Remember that this Platform is designed for entertainment purposes only. Take regular breaks and maintain a healthy balance with other activities in your life.
                </p>
                <p className="text-[#14532d] leading-relaxed">
                  <strong>No Financial Risk:</strong> Since no real money is involved, there is no financial risk. However, we encourage you to be mindful of the time you spend on the Platform.
                </p>
                <p className="text-[#14532d] leading-relaxed">
                  <strong>Seek Help if Needed:</strong> If you or someone you know has concerns about gaming habits or gambling behavior, please visit our Responsible Gaming page for resources and support information.
                </p>
              </div>
            </div>

            {/* Changes to Disclaimer */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <FileWarning className="w-8 h-8 text-[#f59e0b]" />
                Changes to This Disclaimer
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                We reserve the right to modify, update, or change this Disclaimer at any time without prior notice. Any changes will be effective immediately upon posting on the Platform. The "Last Updated" date at the top of this page indicates when this Disclaimer was last revised.
              </p>
              <p className="text-[#4b5563] leading-relaxed">
                Your continued use of the Platform following the posting of changes constitutes your acceptance of such changes. We encourage you to review this Disclaimer periodically to stay informed about how we are protecting you and clarifying the nature of our services.
              </p>
            </div>

            {/* Acceptance */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">Acceptance of Disclaimer</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                By using the Play By Stats Platform, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer. This Disclaimer should be read in conjunction with our Terms & Conditions and Privacy Policy, which together govern your use of the Platform.
              </p>
              <p className="text-[#4b5563] leading-relaxed">
                If you do not agree with any part of this Disclaimer, you must immediately discontinue use of the Platform.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-[#f59e0b] to-[#ef4444] rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Mail className="w-8 h-8" />
                Contact Us
              </h2>
              <p className="leading-relaxed mb-4">
                If you have any questions or concerns about this Disclaimer, please contact us:
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
