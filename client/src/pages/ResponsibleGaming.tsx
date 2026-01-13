import { motion } from 'framer-motion';
import { Heart, Clock, AlertCircle, Phone, Shield, CheckCircle, Mail } from 'lucide-react';

/**
 * Responsible Gaming Page - Play By Stats
 * Comprehensive responsible gaming guidelines and resources
 */
export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f3ff] to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#22c55e] to-[#10b981]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-white mb-4">Responsible Gaming</h1>
            <p className="text-xl text-white/90">
              Play smart, play safe, play for fun
            </p>
            <p className="text-sm text-white/80 mt-4">
              Your well-being is our priority
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
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">Our Commitment to Responsible Gaming</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                At Play By Stats, we are committed to providing a safe, enjoyable, and responsible gaming environment. While our platform does not involve real money gambling and poses no financial risk, we recognize that any form of gaming should be enjoyed in moderation as part of a balanced lifestyle.
              </p>
              <p className="text-[#4b5563] leading-relaxed">
                This page provides guidelines, resources, and support information to help you maintain healthy gaming habits and recognize when gaming may be becoming problematic.
              </p>
            </div>

            {/* No Real Money */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <Shield className="w-8 h-8 text-[#22c55e]" />
                Zero Financial Risk
              </h2>
              <div className="bg-[#f0fdf4] rounded-lg p-6 border-l-4 border-[#22c55e] space-y-4">
                <p className="text-[#14532d] leading-relaxed">
                  <strong>Important Reminder:</strong> Play By Stats is a 100% free entertainment platform. All games use virtual coins that have no monetary value and cannot be exchanged for real money, prizes, or anything of value.
                </p>
                <p className="text-[#14532d] leading-relaxed">
                  <strong>No Financial Risk:</strong> You cannot lose money on this platform because no real money is involved at any point. There are no deposits, purchases, withdrawals, or financial transactions of any kind.
                </p>
                <p className="text-[#14532d] leading-relaxed">
                  <strong>Entertainment Only:</strong> This platform is designed solely for fun, skill development, and recreational purposes. It is not gambling and does not replicate real gambling experiences.
                </p>
              </div>
            </div>

            {/* Healthy Gaming Guidelines */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-[#22c55e]" />
                Healthy Gaming Guidelines
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                Follow these guidelines to ensure your gaming remains fun, balanced, and healthy:
              </p>
              <div className="space-y-4">
                <div className="bg-[#f5f3ff] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1f1f2e] mb-2 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-[#a855f7]" />
                    Set Time Limits
                  </h3>
                  <p className="text-[#4b5563] leading-relaxed mb-3">
                    Decide in advance how much time you want to spend gaming and stick to it. Take regular breaks every 30-60 minutes to rest your eyes, stretch, and refocus.
                  </p>
                  <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                    <p className="text-[#4b5563]">✓ Set a timer before you start playing</p>
                    <p className="text-[#4b5563]">✓ Take a 10-minute break every hour</p>
                    <p className="text-[#4b5563]">✓ Avoid gaming for extended periods (2+ hours continuously)</p>
                    <p className="text-[#4b5563]">✓ Stop playing if you feel tired, frustrated, or stressed</p>
                  </div>
                </div>

                <div className="bg-[#f5f3ff] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1f1f2e] mb-2">Balance Your Life</h3>
                  <p className="text-[#4b5563] leading-relaxed mb-3">
                    Gaming should be one of many activities in your life, not the primary focus. Maintain a healthy balance with work, relationships, physical activity, and other hobbies.
                  </p>
                  <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                    <p className="text-[#4b5563]">✓ Don't let gaming interfere with work, school, or responsibilities</p>
                    <p className="text-[#4b5563]">✓ Spend quality time with family and friends</p>
                    <p className="text-[#4b5563]">✓ Engage in physical exercise regularly</p>
                    <p className="text-[#4b5563]">✓ Pursue other hobbies and interests</p>
                    <p className="text-[#4b5563]">✓ Get adequate sleep (7-9 hours per night)</p>
                  </div>
                </div>

                <div className="bg-[#f5f3ff] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1f1f2e] mb-2">Play for the Right Reasons</h3>
                  <p className="text-[#4b5563] leading-relaxed mb-3">
                    Gaming should be a fun, enjoyable activity that enhances your life. If you're playing to escape problems, relieve stress, or cope with negative emotions, it may be time to reassess.
                  </p>
                  <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                    <p className="text-[#4b5563]">✓ Play for entertainment and enjoyment</p>
                    <p className="text-[#4b5563]">✓ Play to challenge yourself and develop skills</p>
                    <p className="text-[#4b5563]">✓ Play to relax and unwind (in moderation)</p>
                    <p className="text-[#ef4444]">✗ Don't play to escape problems or negative feelings</p>
                    <p className="text-[#ef4444]">✗ Don't play when you're feeling depressed or anxious</p>
                  </div>
                </div>

                <div className="bg-[#f5f3ff] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1f1f2e] mb-2">Stay in Control</h3>
                  <p className="text-[#4b5563] leading-relaxed mb-3">
                    You should always feel in control of your gaming. If you feel compelled to play, have difficulty stopping, or experience negative emotions when you can't play, these may be warning signs.
                  </p>
                  <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                    <p className="text-[#4b5563]">✓ You can easily stop playing when you want to</p>
                    <p className="text-[#4b5563]">✓ You can go days without playing without feeling anxious</p>
                    <p className="text-[#4b5563]">✓ You don't think about gaming constantly</p>
                    <p className="text-[#4b5563]">✓ You don't hide your gaming from others</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning Signs */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-[#f59e0b]" />
                Recognizing Warning Signs
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                While Play By Stats involves no real money, excessive gaming can still have negative impacts on your life. Be aware of these warning signs that may indicate problematic gaming behavior:
              </p>
              <div className="bg-[#fef3c7] rounded-lg p-6 border-l-4 border-[#f59e0b]">
                <h3 className="text-xl font-bold text-[#78350f] mb-3">Behavioral Warning Signs:</h3>
                <div className="space-y-2 text-[#78350f]">
                  <p className="leading-relaxed">• Spending increasing amounts of time gaming</p>
                  <p className="leading-relaxed">• Feeling restless, irritable, or anxious when not gaming</p>
                  <p className="leading-relaxed">• Lying to others about how much time you spend gaming</p>
                  <p className="leading-relaxed">• Neglecting work, school, or personal responsibilities</p>
                  <p className="leading-relaxed">• Gaming to escape problems or negative feelings</p>
                  <p className="leading-relaxed">• Losing interest in other activities you used to enjoy</p>
                  <p className="leading-relaxed">• Continuing to game despite negative consequences</p>
                  <p className="leading-relaxed">• Feeling unable to cut down or stop gaming</p>
                </div>
              </div>
              <div className="bg-[#fee2e2] rounded-lg p-6 border-l-4 border-[#ef4444] mt-4">
                <h3 className="text-xl font-bold text-[#7f1d1d] mb-3">Impact on Life:</h3>
                <div className="space-y-2 text-[#7f1d1d]">
                  <p className="leading-relaxed">• Relationships with family or friends are suffering</p>
                  <p className="leading-relaxed">• Work or academic performance is declining</p>
                  <p className="leading-relaxed">• Physical health is being neglected (sleep, exercise, nutrition)</p>
                  <p className="leading-relaxed">• Mental health is deteriorating (increased anxiety, depression)</p>
                  <p className="leading-relaxed">• Financial problems (even though this platform is free, time spent gaming may impact income)</p>
                </div>
              </div>
              <p className="text-[#4b5563] leading-relaxed mt-4">
                If you recognize several of these warning signs in yourself or someone you know, it may be time to seek help or make changes to your gaming habits.
              </p>
            </div>

            {/* Taking Action */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">Taking Action: Steps to Healthier Gaming</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                If you're concerned about your gaming habits, here are practical steps you can take:
              </p>
              <div className="space-y-4">
                <div className="bg-[#eff6ff] rounded-lg p-6 border-l-4 border-[#3b82f6]">
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">1. Acknowledge the Problem</h3>
                  <p className="text-[#4b5563] leading-relaxed">
                    The first step is recognizing that your gaming may be problematic. Be honest with yourself about how gaming is affecting your life.
                  </p>
                </div>

                <div className="bg-[#eff6ff] rounded-lg p-6 border-l-4 border-[#3b82f6]">
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">2. Set Clear Limits</h3>
                  <p className="text-[#4b5563] leading-relaxed">
                    Establish specific, measurable limits for your gaming time. For example: "I will play for no more than 1 hour per day" or "I will not play on weekdays."
                  </p>
                </div>

                <div className="bg-[#eff6ff] rounded-lg p-6 border-l-4 border-[#3b82f6]">
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">3. Find Alternative Activities</h3>
                  <p className="text-[#4b5563] leading-relaxed">
                    Identify other activities that bring you joy and fulfillment. Exercise, reading, socializing, creative hobbies, or learning new skills can all be rewarding alternatives.
                  </p>
                </div>

                <div className="bg-[#eff6ff] rounded-lg p-6 border-l-4 border-[#3b82f6]">
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">4. Talk to Someone</h3>
                  <p className="text-[#4b5563] leading-relaxed">
                    Share your concerns with a trusted friend, family member, or mental health professional. Sometimes an outside perspective can be invaluable.
                  </p>
                </div>

                <div className="bg-[#eff6ff] rounded-lg p-6 border-l-4 border-[#3b82f6]">
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">5. Take a Break</h3>
                  <p className="text-[#4b5563] leading-relaxed">
                    Consider taking a complete break from gaming for a set period (e.g., one week, one month). This can help you reset your relationship with gaming and gain perspective.
                  </p>
                </div>

                <div className="bg-[#eff6ff] rounded-lg p-6 border-l-4 border-[#3b82f6]">
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">6. Seek Professional Help</h3>
                  <p className="text-[#4b5563] leading-relaxed">
                    If you're unable to control your gaming on your own, consider seeking help from a mental health professional who specializes in behavioral addictions or gaming disorders.
                  </p>
                </div>
              </div>
            </div>

            {/* Help and Resources */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4 flex items-center gap-3">
                <Phone className="w-8 h-8 text-[#22c55e]" />
                Help and Support Resources
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-6">
                If you or someone you know is struggling with gaming habits or gambling problems, help is available. These organizations provide free, confidential support:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#22c55e]/10 to-[#10b981]/10 rounded-lg p-6 border border-[#22c55e]/20">
                  <h3 className="text-xl font-bold text-[#1f1f2e] mb-4">India Mental Health & Gambling Support</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-bold text-[#1f1f2e] mb-1">NIMHANS Mental Health Helpline</p>
                      <p className="text-[#4b5563]">Phone: <a href="tel:08046110007" className="text-[#22c55e] font-semibold hover:underline">080-4611-0007</a></p>
                      <p className="text-[#4b5563] text-sm">Available: Monday to Saturday, 8 AM - 8 PM</p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <p className="font-bold text-[#1f1f2e] mb-1">Vandrevala Foundation Helpline</p>
                      <p className="text-[#4b5563]">Phone: <a href="tel:18602662345" className="text-[#22c55e] font-semibold hover:underline">1860-2662-345</a> or <a href="tel:18602662346" className="text-[#22c55e] font-semibold hover:underline">1860-2662-346</a></p>
                      <p className="text-[#4b5563] text-sm">Available: 24/7, Free and confidential</p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <p className="font-bold text-[#1f1f2e] mb-1">iCall Psychosocial Helpline</p>
                      <p className="text-[#4b5563]">Phone: <a href="tel:9152987821" className="text-[#22c55e] font-semibold hover:underline">9152987821</a></p>
                      <p className="text-[#4b5563]">Email: <a href="mailto:icall@tiss.edu" className="text-[#22c55e] hover:underline">icall@tiss.edu</a></p>
                      <p className="text-[#4b5563] text-sm">Available: Monday to Saturday, 8 AM - 10 PM</p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <p className="font-bold text-[#1f1f2e] mb-1">Gamblers Anonymous India</p>
                      <p className="text-[#4b5563]">Website: <a href="https://www.gamblersanonymous.org.in" target="_blank" rel="noopener noreferrer" className="text-[#22c55e] hover:underline">gamblersanonymous.org.in</a></p>
                      <p className="text-[#4b5563] text-sm">Support groups for individuals affected by gambling problems</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#3b82f6]/10 to-[#2563eb]/10 rounded-lg p-6 border border-[#3b82f6]/20">
                  <h3 className="text-xl font-bold text-[#1f1f2e] mb-4">International Resources</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-bold text-[#1f1f2e] mb-1">National Council on Problem Gambling (USA)</p>
                      <p className="text-[#4b5563]">Phone: <a href="tel:18005224700" className="text-[#3b82f6] font-semibold hover:underline">1-800-522-4700</a></p>
                      <p className="text-[#4b5563]">Website: <a href="https://www.ncpgambling.org" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">ncpgambling.org</a></p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <p className="font-bold text-[#1f1f2e] mb-1">GamCare (UK)</p>
                      <p className="text-[#4b5563]">Phone: <a href="tel:08088020133" className="text-[#3b82f6] font-semibold hover:underline">0808-8020-133</a></p>
                      <p className="text-[#4b5563]">Website: <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">gamcare.org.uk</a></p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <p className="font-bold text-[#1f1f2e] mb-1">Gambling Therapy (International)</p>
                      <p className="text-[#4b5563]">Website: <a href="https://www.gamblingtherapy.org" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">gamblingtherapy.org</a></p>
                      <p className="text-[#4b5563] text-sm">Free online support in multiple languages</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#fef3c7] rounded-lg p-6 border-l-4 border-[#f59e0b] mt-6">
                <p className="text-[#78350f] leading-relaxed">
                  <strong>Remember:</strong> Seeking help is a sign of strength, not weakness. These resources are free, confidential, and staffed by professionals who understand gaming and gambling issues. Don't hesitate to reach out if you need support.
                </p>
              </div>
            </div>

            {/* For Parents */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#1f1f2e] mb-4">For Parents and Guardians</h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                While Play By Stats is restricted to users 18 and older, we recognize that parents and guardians play a crucial role in monitoring their children's internet usage and gaming habits.
              </p>
              <div className="bg-[#f5f3ff] rounded-lg p-6 space-y-4">
                <p className="text-[#4b5563] leading-relaxed">
                  <strong className="text-[#1f1f2e]">Monitor Internet Usage:</strong> Use parental control software and regularly check your child's browsing history to ensure they are not accessing age-inappropriate content.
                </p>
                <p className="text-[#4b5563] leading-relaxed">
                  <strong className="text-[#1f1f2e]">Set Clear Rules:</strong> Establish clear rules about screen time, gaming limits, and appropriate online behavior.
                </p>
                <p className="text-[#4b5563] leading-relaxed">
                  <strong className="text-[#1f1f2e]">Educate About Risks:</strong> Talk to your children about the risks of excessive gaming and the importance of balance in life.
                </p>
                <p className="text-[#4b5563] leading-relaxed">
                  <strong className="text-[#1f1f2e]">Report Underage Access:</strong> If you discover that your child under 18 has accessed Play By Stats, please contact us immediately at <a href="mailto:support@playbystats.com" className="text-[#a855f7] hover:underline">support@playbystats.com</a>.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-[#22c55e] to-[#10b981] rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Mail className="w-8 h-8" />
                Contact Us
              </h2>
              <p className="leading-relaxed mb-4">
                If you have questions about responsible gaming or need assistance, please contact us:
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
