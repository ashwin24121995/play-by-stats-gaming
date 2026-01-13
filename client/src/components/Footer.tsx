import { Link } from 'wouter';
import { AlertCircle } from 'lucide-react';

/**
 * Footer Component
 * Premium gaming platform footer with legal pages and age disclaimer
 * Design: Deep purple background with golden accents, prominent disclaimer
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] border-t-2 border-[#14b8a6] text-white mt-20">
      {/* Disclaimer Section */}
      <div className="bg-[#1e293b]/80 border-b border-[#14b8a6]/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 items-start">
            <AlertCircle className="text-[#14b8a6] flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-[#14b8a6] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
                ⚠️ Age & Responsible Gaming Disclaimer
              </h3>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">
                This platform is intended for users 18 years of age or older. We provide free-to-play entertainment experiences with <strong>no real money involved</strong>. No real currency can be used or gained during gameplay. All achievements are for entertainment purposes only and do not translate into real-world financial activities. We promote responsible gaming and fair play in a safe, risk-free environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/playbystats-logo.webp"
                alt="Play By Stats"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-[#cbd5e1] text-sm">
              Premium social gaming platform for entertainment and fun.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-[#cbd5e1] hover:text-[#14b8a6] transition-colors text-sm">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/games">
                  <a className="text-[#cbd5e1] hover:text-[#14b8a6] transition-colors text-sm">Games</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-[#cbd5e1] hover:text-[#14b8a6] transition-colors text-sm">About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-[#cbd5e1] hover:text-[#14b8a6] transition-colors text-sm">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy">
                  <a className="text-[#cbd5e1] hover:text-[#14b8a6] transition-colors text-sm">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-[#cbd5e1] hover:text-[#14b8a6] transition-colors text-sm">Terms & Conditions</a>
                </Link>
              </li>
              <li>
                <Link href="/disclaimer">
                  <a className="text-[#cbd5e1] hover:text-[#14b8a6] transition-colors text-sm">Disclaimer</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#14b8a6] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-[#cbd5e1]">
              <li>Email: <a href="mailto:support@playbystats.com" className="text-[#14b8a6] hover:underline">support@playbystats.com</a></li>
              <li>Phone: <a href="tel:+919876543210" className="text-[#14b8a6] hover:underline">+91 (987) 654-3210</a></li>
              <li>Hours: 24/7 Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#14b8a6]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#cbd5e1] text-sm">
              © {currentYear} Play By Stats. All rights reserved. Entertainment only. No real money involved.
            </p>
            <div className="flex gap-4 text-xs text-[#cbd5e1]">
              <span>CIN: U41002UP2023PTC194590</span>
              <span>•</span>
              <span>PAN: ABMCS3759A</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
