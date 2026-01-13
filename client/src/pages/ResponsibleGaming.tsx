import { motion } from 'framer-motion';
import { Heart, AlertCircle, Clock, Users, Phone, CheckCircle, XCircle, HelpCircle, Shield } from 'lucide-react';

/**
 * Responsible Gaming Page - Play By Stats
 * Comprehensive guide to healthy gaming habits
 * Design: Purple (#a855f7) & Pink (#ec4899)
 */
export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5f3ff]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#16a34a] to-[#059669] text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-4">
              <Heart size={48} className="flex-shrink-0 mt-1" />
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Responsible Gaming</h1>
                <p className="text-xl text-white/90">Your well-being is our priority - Play responsibly, play safely</p>
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
          {/* Introduction */}
          <section className="bg-gradient-to-br from-[#16a34a]/10 to-[#059669]/10 rounded-lg p-8 border border-[#16a34a]/20">
            <div className="flex items-start gap-4">
              <Heart className="text-[#16a34a] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Our Commitment to Your Well-Being</h2>
                <p className="text-[#6b7280] leading-relaxed mb-4">
                  At Play By Stats, we are committed to providing a safe, enjoyable, and responsible gaming environment. While our platform involves <strong className="text-[#1a1a2e]">no real money and poses no financial risk</strong>, we recognize that any form of gaming should be enjoyed in moderation as part of a balanced lifestyle.
                </p>
                <p className="text-[#6b7280] leading-relaxed">
                  This page provides guidance on healthy gaming habits, warning signs to watch for, and resources to help if you or someone you know may be experiencing gaming-related concerns.
                </p>
              </div>
            </div>
          </section>

          {/* No Financial Risk */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <Shield className="text-[#a855f7] flex-shrink-0 mt-1" size={40} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">1. No Financial Risk - But Responsibility Still Matters</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <div className="bg-[#f0fdf4] border-2 border-[#16a34a] rounded-lg p-6">
                    <p className="text-lg font-bold text-[#16a34a] mb-3">
                      ✓ Play By Stats is 100% FREE with NO REAL MONEY involved
                    </p>
                    <div className="space-y-2 text-[#6b7280]">
                      <p>• You cannot lose money - all coins are virtual and worthless</p>
                      <p>• You cannot win money - there are no cash prizes or payouts</p>
                      <p>• There is zero financial risk to you or your family</p>
                      <p>• No credit cards, bank accounts, or payment methods are ever required</p>
                    </div>
                  </div>

                  <p>
                    <strong className="text-[#1a1a2e]">However,</strong> even without financial risk, it's important to maintain healthy gaming habits. Excessive gaming can affect:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#fff5f5] rounded-lg p-6 border border-[#dc2626]/20">
                      <h3 className="font-bold text-[#dc2626] mb-2">Potential Concerns</h3>
                      <div className="space-y-2 text-sm text-[#6b7280]">
                        <p>• Time management and productivity</p>
                        <p>• Sleep patterns and physical health</p>
                        <p>• Relationships with family and friends</p>
                        <p>• Work or academic performance</p>
                        <p>• Mental and emotional well-being</p>
                      </div>
                    </div>

                    <div className="bg-[#f0fdf4] rounded-lg p-6 border border-[#16a34a]/20">
                      <h3 className="font-bold text-[#16a34a] mb-2">Healthy Balance</h3>
                      <div className="space-y-2 text-sm text-[#6b7280]">
                        <p>• Gaming as one of many hobbies</p>
                        <p>• Regular breaks and time limits</p>
                        <p>• Maintaining social connections</p>
                        <p>• Fulfilling responsibilities first</p>
                        <p>• Physical activity and outdoor time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Guidelines for Healthy Gaming */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <CheckCircle className="text-[#16a34a] flex-shrink-0 mt-1" size={40} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">2. Guidelines for Healthy Gaming</h2>
                <div className="space-y-6 text-[#6b7280] leading-relaxed">
                  <p>
                    Follow these practical guidelines to ensure gaming remains a fun and positive part of your life:
                  </p>

                  <div className="space-y-4">
                    {/* Set Time Limits */}
                    <div className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-6 border border-[#a855f7]/20">
                      <div className="flex items-start gap-3">
                        <Clock className="text-[#a855f7] flex-shrink-0 mt-1" size={24} />
                        <div>
                          <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">Set Time Limits</h3>
                          <p className="text-[#6b7280] mb-3">
                            Decide in advance how long you'll play and stick to it. Use alarms or timers to remind yourself when it's time to stop.
                          </p>
                          <div className="bg-white rounded-lg p-4">
                            <p className="text-sm text-[#6b7280] font-bold mb-2">Recommended Limits:</p>
                            <p className="text-sm text-[#6b7280]">• <strong>Daily:</strong> No more than 1-2 hours per day</p>
                            <p className="text-sm text-[#6b7280]">• <strong>Per Session:</strong> Take a 10-minute break every 30-45 minutes</p>
                            <p className="text-sm text-[#6b7280]">• <strong>Weekly:</strong> Consider taking at least one gaming-free day</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Take Regular Breaks */}
                    <div className="bg-gradient-to-br from-[#16a34a]/10 to-[#059669]/10 rounded-lg p-6 border border-[#16a34a]/20">
                      <div className="flex items-start gap-3">
                        <Heart className="text-[#16a34a] flex-shrink-0 mt-1" size={24} />
                        <div>
                          <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">Take Regular Breaks</h3>
                          <p className="text-[#6b7280] mb-3">
                            Prolonged screen time can cause eye strain, headaches, and fatigue. Regular breaks help maintain physical and mental health.
                          </p>
                          <div className="space-y-2 text-sm text-[#6b7280]">
                            <p>✓ Stand up and stretch every 30 minutes</p>
                            <p>✓ Look away from the screen and focus on distant objects</p>
                            <p>✓ Stay hydrated - drink water regularly</p>
                            <p>✓ Move around and get some physical activity</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Balance Your Life */}
                    <div className="bg-gradient-to-br from-[#f59e0b]/10 to-[#fbbf24]/10 rounded-lg p-6 border border-[#f59e0b]/20">
                      <div className="flex items-start gap-3">
                        <Users className="text-[#f59e0b] flex-shrink-0 mt-1" size={24} />
                        <div>
                          <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">Balance Your Life</h3>
                          <p className="text-[#6b7280] mb-3">
                            Gaming should be one of many activities in your life, not the only one. Maintain a healthy balance between gaming and other important aspects of life.
                          </p>
                          <div className="space-y-2 text-sm text-[#6b7280]">
                            <p>✓ Prioritize work, school, and responsibilities</p>
                            <p>✓ Spend quality time with family and friends</p>
                            <p>✓ Engage in physical exercise and outdoor activities</p>
                            <p>✓ Pursue other hobbies and interests</p>
                            <p>✓ Get adequate sleep (7-9 hours for adults)</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Never Chase Losses */}
                    <div className="bg-gradient-to-br from-[#dc2626]/10 to-[#f59e0b]/10 rounded-lg p-6 border border-[#dc2626]/20">
                      <div className="flex items-start gap-3">
                        <XCircle className="text-[#dc2626] flex-shrink-0 mt-1" size={24} />
                        <div>
                          <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">Don't Chase Virtual Losses</h3>
                          <p className="text-[#6b7280] mb-3">
                            Even though virtual coins have no real value, it's important not to develop unhealthy patterns of trying to "win back" losses.
                          </p>
                          <div className="space-y-2 text-sm text-[#6b7280]">
                            <p>✗ Don't feel compelled to keep playing after losing virtual coins</p>
                            <p>✗ Remember that outcomes are random and past results don't affect future ones</p>
                            <p>✗ If you're feeling frustrated or upset, take a break</p>
                            <p>✓ Treat gaming as entertainment, not as a way to achieve something</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Warning Signs */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="text-[#dc2626] flex-shrink-0 mt-1" size={40} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">3. Warning Signs to Watch For</h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p>
                    While Play By Stats involves no financial risk, it's important to recognize signs that gaming may be becoming problematic. If you notice any of these warning signs in yourself or someone you care about, it may be time to reassess gaming habits:
                  </p>

                  <div className="bg-[#fff3cd] border-2 border-[#ffc107] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#856404] mb-4 flex items-center gap-2">
                      <AlertCircle size={24} />
                      Behavioral Warning Signs
                    </h3>
                    <div className="space-y-3 text-[#856404]">
                      <div>
                        <p className="font-bold mb-1">⚠️ Loss of Control</p>
                        <p className="text-sm">Difficulty limiting gaming time or stopping when you intended to</p>
                      </div>
                      <div>
                        <p className="font-bold mb-1">⚠️ Preoccupation</p>
                        <p className="text-sm">Constantly thinking about gaming even when not playing</p>
                      </div>
                      <div>
                        <p className="font-bold mb-1">⚠️ Neglecting Responsibilities</p>
                        <p className="text-sm">Ignoring work, school, household duties, or personal hygiene</p>
                      </div>
                      <div>
                        <p className="font-bold mb-1">⚠️ Social Withdrawal</p>
                        <p className="text-sm">Avoiding social activities, friends, or family to play games</p>
                      </div>
                      <div>
                        <p className="font-bold mb-1">⚠️ Emotional Dependence</p>
                        <p className="text-sm">Using gaming as the primary way to cope with stress or negative emotions</p>
                      </div>
                      <div>
                        <p className="font-bold mb-1">⚠️ Irritability When Not Playing</p>
                        <p className="text-sm">Feeling restless, irritable, or moody when unable to play</p>
                      </div>
                      <div>
                        <p className="font-bold mb-1">⚠️ Lying About Gaming</p>
                        <p className="text-sm">Hiding or minimizing the amount of time spent gaming</p>
                      </div>
                      <div>
                        <p className="font-bold mb-1">⚠️ Sleep Disruption</p>
                        <p className="text-sm">Staying up late to play, resulting in chronic sleep deprivation</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#fff5f5] border border-[#dc2626]/20 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#dc2626] mb-3">What to Do If You Notice Warning Signs</h3>
                    <div className="space-y-2 text-[#6b7280]">
                      <p>1. <strong className="text-[#1a1a2e]">Acknowledge the Issue:</strong> Recognizing there may be a problem is the first step</p>
                      <p>2. <strong className="text-[#1a1a2e]">Take a Break:</strong> Step away from gaming for a few days or weeks</p>
                      <p>3. <strong className="text-[#1a1a2e]">Talk to Someone:</strong> Share your concerns with a trusted friend, family member, or counselor</p>
                      <p>4. <strong className="text-[#1a1a2e]">Seek Professional Help:</strong> If the problem persists, consult a mental health professional</p>
                      <p>5. <strong className="text-[#1a1a2e]">Find Alternative Activities:</strong> Engage in other hobbies and interests to fill your time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Self-Assessment */}
          <section className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-8 border border-[#a855f7]/20">
            <div className="flex items-start gap-4">
              <HelpCircle className="text-[#a855f7] flex-shrink-0 mt-1" size={36} />
              <div>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">4. Self-Assessment Quiz</h2>
                <p className="text-[#6b7280] leading-relaxed mb-6">
                  Answer these questions honestly to assess your gaming habits. If you answer "Yes" to three or more questions, consider taking steps to moderate your gaming.
                </p>

                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-[#6b7280]">Do you often play longer than you intended?</label>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-[#6b7280]">Have you neglected important responsibilities because of gaming?</label>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-[#6b7280]">Do you feel restless or irritable when you can't play?</label>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-[#6b7280]">Have friends or family expressed concern about your gaming?</label>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-[#6b7280]">Do you use gaming to escape from problems or negative feelings?</label>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-[#6b7280]">Has your sleep or physical health been affected by gaming?</label>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-[#6b7280]">Do you think about gaming constantly, even when not playing?</label>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-[#6b7280]">Have you tried to cut back on gaming but found it difficult?</label>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[#e5e7eb]">
                    <p className="text-sm text-[#6b7280] italic">
                      <strong>Note:</strong> This is not a diagnostic tool. If you're concerned about your gaming habits, please consult a qualified mental health professional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Help & Resources */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <Phone className="text-[#16a34a] flex-shrink-0 mt-1" size={40} />
              <div>
                <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">5. Help & Support Resources</h2>
                <div className="space-y-6 text-[#6b7280] leading-relaxed">
                  <p>
                    If you or someone you know is struggling with gaming-related concerns or gambling addiction (even though our platform involves no money), help is available. These resources provide confidential support:
                  </p>

                  {/* India Resources */}
                  <div className="bg-gradient-to-br from-[#16a34a]/10 to-[#059669]/10 rounded-lg p-6 border border-[#16a34a]/20">
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">🇮🇳 India Resources</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-bold text-[#1a1a2e] mb-1">NIMHANS Mental Health Helpline</p>
                        <p className="text-[#6b7280]"><strong>Phone:</strong> 080-46110007 (10 AM - 8 PM, Monday to Saturday)</p>
                        <p className="text-[#6b7280]"><strong>Website:</strong> <a href="https://nimhans.ac.in" className="text-[#16a34a] hover:underline">nimhans.ac.in</a></p>
                      </div>

                      <div>
                        <p className="font-bold text-[#1a1a2e] mb-1">Vandrevala Foundation Helpline</p>
                        <p className="text-[#6b7280]"><strong>Phone:</strong> 1860-2662-345 or 1800-2333-330 (24/7 Free)</p>
                        <p className="text-[#6b7280]"><strong>Website:</strong> <a href="https://www.vandrevalafoundation.com" className="text-[#16a34a] hover:underline">vandrevalafoundation.com</a></p>
                      </div>

                      <div>
                        <p className="font-bold text-[#1a1a2e] mb-1">iCall Psychosocial Helpline</p>
                        <p className="text-[#6b7280]"><strong>Phone:</strong> 9152987821 (Monday to Saturday, 8 AM - 10 PM)</p>
                        <p className="text-[#6b7280]"><strong>Email:</strong> icall@tiss.edu</p>
                        <p className="text-[#6b7280]"><strong>Website:</strong> <a href="https://icallhelpline.org" className="text-[#16a34a] hover:underline">icallhelpline.org</a></p>
                      </div>

                      <div>
                        <p className="font-bold text-[#1a1a2e] mb-1">Gamblers Anonymous India</p>
                        <p className="text-[#6b7280]"><strong>Website:</strong> <a href="https://www.gamblersanonymous.org.in" className="text-[#16a34a] hover:underline">gamblersanonymous.org.in</a></p>
                        <p className="text-[#6b7280] text-sm mt-1">Support groups for individuals affected by gambling problems</p>
                      </div>
                    </div>
                  </div>

                  {/* International Resources */}
                  <div className="bg-gradient-to-br from-[#3b82f6]/10 to-[#2563eb]/10 rounded-lg p-6 border border-[#3b82f6]/20">
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">🌍 International Resources</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-bold text-[#1a1a2e] mb-1">National Council on Problem Gambling (USA)</p>
                        <p className="text-[#6b7280]"><strong>Phone:</strong> 1-800-522-4700 (24/7 Confidential)</p>
                        <p className="text-[#6b7280]"><strong>Website:</strong> <a href="https://www.ncpgambling.org" className="text-[#3b82f6] hover:underline">ncpgambling.org</a></p>
                      </div>

                      <div>
                        <p className="font-bold text-[#1a1a2e] mb-1">GamCare (UK)</p>
                        <p className="text-[#6b7280]"><strong>Phone:</strong> 0808-8020-133 (24/7 Free Helpline)</p>
                        <p className="text-[#6b7280]"><strong>Website:</strong> <a href="https://www.gamcare.org.uk" className="text-[#3b82f6] hover:underline">gamcare.org.uk</a></p>
                      </div>

                      <div>
                        <p className="font-bold text-[#1a1a2e] mb-1">Gamblers Anonymous International</p>
                        <p className="text-[#6b7280]"><strong>Website:</strong> <a href="https://www.gamblersanonymous.org" className="text-[#3b82f6] hover:underline">gamblersanonymous.org</a></p>
                        <p className="text-[#6b7280] text-sm mt-1">Find meetings worldwide</p>
                      </div>

                      <div>
                        <p className="font-bold text-[#1a1a2e] mb-1">BeGambleAware (International)</p>
                        <p className="text-[#6b7280]"><strong>Website:</strong> <a href="https://www.begambleaware.org" className="text-[#3b82f6] hover:underline">begambleaware.org</a></p>
                        <p className="text-[#6b7280] text-sm mt-1">Information, advice, and support for anyone affected by gambling problems</p>
                      </div>
                    </div>
                  </div>

                  {/* Online Resources */}
                  <div className="bg-[#f5f3ff] rounded-lg p-6 border border-[#a855f7]/20">
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">💻 Online Resources & Tools</h3>
                    <div className="space-y-3">
                      <p><strong className="text-[#1a1a2e]">• Self-Exclusion Tools:</strong> Many jurisdictions offer self-exclusion programs for real gambling sites</p>
                      <p><strong className="text-[#1a1a2e]">• Therapy & Counseling:</strong> Online therapy platforms like BetterHelp, Talkspace, or local services</p>
                      <p><strong className="text-[#1a1a2e]">• Support Forums:</strong> Online communities where people share experiences and support each other</p>
                      <p><strong className="text-[#1a1a2e]">• Educational Materials:</strong> Articles, videos, and guides on responsible gaming and addiction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* For Parents */}
          <section className="bg-[#fff3cd] border border-[#ffc107] rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#856404] mb-6">6. For Parents & Guardians</h2>
            <div className="space-y-4 text-[#856404] leading-relaxed">
              <p>
                While Play By Stats is restricted to users 18+, we recognize that parents and guardians play a crucial role in monitoring and guiding young people's online activities. Here are some tips:
              </p>

              <div className="bg-white rounded-lg p-6 space-y-3">
                <p><strong className="text-[#1a1a2e]">✓ Monitor Internet Usage:</strong> Use parental control software and regularly check browsing history</p>
                <p><strong className="text-[#1a1a2e]">✓ Educate About Online Safety:</strong> Teach children about age restrictions and why they exist</p>
                <p><strong className="text-[#1a1a2e]">✓ Set Clear Rules:</strong> Establish household rules about screen time and gaming</p>
                <p><strong className="text-[#1a1a2e]">✓ Lead by Example:</strong> Model healthy technology use and balanced lifestyles</p>
                <p><strong className="text-[#1a1a2e]">✓ Keep Communication Open:</strong> Talk to children about their online activities without judgment</p>
                <p><strong className="text-[#1a1a2e]">✓ Report Violations:</strong> If you discover a minor using our platform, contact us immediately</p>
              </div>

              <p className="mt-4">
                <strong>Contact Us:</strong> If you have concerns about minors accessing our platform, email us at <strong>support@playbystats.com</strong>
              </p>
            </div>
          </section>

          {/* Our Commitment */}
          <section className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">7. Our Commitment to Responsible Gaming</h2>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                Play By Stats is committed to promoting responsible gaming practices. Here's what we do:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-bold mb-2">✓ Age Verification</p>
                  <p className="text-sm">We enforce 18+ age restrictions and may request proof of age</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-bold mb-2">✓ No Real Money</p>
                  <p className="text-sm">We eliminate financial risk by never accepting payments or offering payouts</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-bold mb-2">✓ Educational Resources</p>
                  <p className="text-sm">We provide comprehensive information about responsible gaming</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-bold mb-2">✓ Support Links</p>
                  <p className="text-sm">We prominently display links to help resources and support services</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-bold mb-2">✓ Transparent Communication</p>
                  <p className="text-sm">We clearly state that this is entertainment only, not gambling</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-bold mb-2">✓ Privacy Protection</p>
                  <p className="text-sm">We respect your privacy with anonymous gameplay and no data tracking</p>
                </div>
              </div>

              <p className="mt-6">
                <strong>Your well-being matters to us.</strong> If you have suggestions for how we can better promote responsible gaming, please contact us at <strong>support@playbystats.com</strong>
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-8 border border-[#a855f7]/20">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Need Help or Have Questions?</h2>
            <p className="text-[#6b7280] leading-relaxed mb-4">
              If you have questions about responsible gaming or need support, please reach out:
            </p>
            <div className="space-y-2 text-[#6b7280]">
              <p><strong className="text-[#1a1a2e]">Email:</strong> support@playbystats.com</p>
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
            <p className="text-[#6b7280] text-sm font-bold">
              REMEMBER: Gaming should be fun, not a source of stress. If it stops being enjoyable, it's time to take a break.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
