import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle } from 'lucide-react';

/**
 * Disclaimer Page
 * Age restriction and responsible gaming disclaimer
 * Design: Deep purple background with golden accents, prominent warnings
 */
export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#14b8a6]/10 to-[#0d9488]/10 border-b-2 border-[#14b8a6] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 items-start"
          >
            <AlertCircle className="text-[#14b8a6] flex-shrink-0 mt-1" size={32} />
            <div>
              <h1
                className="text-5xl font-bold text-white mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
              >
                Play By Stats - Age & Responsible Gaming Disclaimer
              </h1>
              <p className="text-[#cbd5e1]">
                Important legal information about our platform and responsible gaming practices
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Age Restriction */}
          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <div className="flex gap-3 items-start mb-4">
              <AlertCircle className="text-[#14b8a6] flex-shrink-0 mt-1" size={24} />
              <h2
                className="text-2xl font-bold text-[#14b8a6]"
                style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
              >
                Age Restriction: 18+ Only
              </h2>
            </div>
            <div className="text-[#cbd5e1] space-y-4 ml-9">
              <p>
                <strong>This platform is intended exclusively for users who are 18 years of age or older.</strong> By accessing and using PlayHub, you confirm that you meet this age requirement.
              </p>
              <p>
                We take age verification seriously. Users who are under 18 are strictly prohibited from accessing any features, games, or services on this platform. Parents and guardians are encouraged to monitor their children's internet usage and ensure compliance with these restrictions.
              </p>
              <p>
                Violation of age restrictions may result in immediate account termination and legal action where applicable.
              </p>
            </div>
          </section>

          {/* No Real Money */}
          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <div className="flex gap-3 items-start mb-4">
              <CheckCircle className="text-[#14b8a6] flex-shrink-0 mt-1" size={24} />
              <h2
                className="text-2xl font-bold text-[#14b8a6]"
                style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
              >
                No Real Money Involved
              </h2>
            </div>
            <div className="text-[#cbd5e1] space-y-4 ml-9">
              <p>
                <strong>PlayHub is a free-to-play entertainment platform with absolutely no real money transactions.</strong>
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>No real currency can be used to play any games</li>
                <li>No real currency can be earned or won from gameplay</li>
                <li>All in-game rewards are for entertainment purposes only</li>
                <li>No cash-out, withdrawal, or conversion to real money is possible</li>
                <li>No gambling or financial risk is involved</li>
              </ul>
              <p>
                All gameplay is purely for entertainment and fun. Any winnings or achievements are virtual and have no real-world monetary value.
              </p>
            </div>
          </section>

          {/* Responsible Gaming */}
          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <div className="flex gap-3 items-start mb-4">
              <CheckCircle className="text-[#14b8a6] flex-shrink-0 mt-1" size={24} />
              <h2
                className="text-2xl font-bold text-[#14b8a6]"
                style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
              >
                Responsible Gaming Commitment
              </h2>
            </div>
            <div className="text-[#cbd5e1] space-y-4 ml-9">
              <p>
                <strong>We are committed to promoting responsible gaming practices.</strong>
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Play for entertainment, not as a source of income</li>
                <li>Set time limits and take regular breaks</li>
                <li>Never play while under the influence of alcohol or drugs</li>
                <li>Do not chase losses or bet more than you can afford to lose</li>
                <li>Maintain a healthy balance between gaming and other activities</li>
              </ul>
              <p>
                If you feel that your gaming habits are becoming problematic, please seek help from a mental health professional or contact a gambling addiction support service.
              </p>
            </div>
          </section>

          {/* Entertainment Only */}
          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <div className="flex gap-3 items-start mb-4">
              <CheckCircle className="text-[#14b8a6] flex-shrink-0 mt-1" size={24} />
              <h2
                className="text-2xl font-bold text-[#14b8a6]"
                style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
              >
                Entertainment Only
              </h2>
            </div>
            <div className="text-[#cbd5e1] space-y-4 ml-9">
              <p>
                <strong>All games and features on PlayHub are designed for entertainment purposes only.</strong>
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Games do not offer real money prizes or rewards</li>
                <li>Achievements and scores are for personal satisfaction only</li>
                <li>No financial transactions are involved in any game</li>
                <li>All outcomes are based on game mechanics and algorithms</li>
                <li>No guarantee of winning or financial gain exists</li>
              </ul>
              <p>
                By using our platform, you acknowledge that you understand and accept these terms.
              </p>
            </div>
          </section>

          {/* Fair Play */}
          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <div className="flex gap-3 items-start mb-4">
              <CheckCircle className="text-[#14b8a6] flex-shrink-0 mt-1" size={24} />
              <h2
                className="text-2xl font-bold text-[#14b8a6]"
                style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
              >
                Fair Play & Transparency
              </h2>
            </div>
            <div className="text-[#cbd5e1] space-y-4 ml-9">
              <p>
                <strong>We are committed to fair play and transparent game mechanics.</strong>
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>All games use certified random number generators</li>
                <li>Game odds and mechanics are transparent</li>
                <li>No manipulation or cheating is tolerated</li>
                <li>All players have equal chances of winning</li>
                <li>Regular audits ensure fairness and integrity</li>
              </ul>
              <p>
                We maintain the highest standards of integrity and fairness in all our games.
              </p>
            </div>
          </section>

          {/* Support Resources */}
          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2
              className="text-2xl font-bold text-[#14b8a6] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
            >
              Support & Resources
            </h2>
            <div className="text-[#cbd5e1] space-y-4">
              <p>
                If you need help or have concerns about gaming habits, please contact:
              </p>
              <div className="bg-[#0f172a]/50 rounded p-4 space-y-2">
                <p><strong>PlayHub Support:</strong> support@playhub.com</p>
                <p><strong>National Problem Gambling Helpline:</strong> 1-800-GAMBLER (1-800-426-2537)</p>
                <p><strong>Gamblers Anonymous:</strong> www.gamblersanonymous.org</p>
              </div>
            </div>
          </section>

             {/* Acknowledgment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#14b8a6]/20 to-[#0d9488]/20 border-2 border-[#14b8a6] rounded-lg p-8 text-center"
          >
            <p className="text-[#cbd5e1] mb-4">
              By using Play By Stats, you acknowledge that you have read, understood, and agree to this disclaimer.
            </p>
            <p className="text-[#14b8a6] font-bold">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

