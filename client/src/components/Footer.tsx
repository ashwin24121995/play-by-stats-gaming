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
    <footer className="bg-gradient-to-r from-[#1a0a2e] to-[#2d1b4e] border-t-2 border-[#f7a600] text-white mt-20">
      {/* Disclaimer Section */}
      <div className="bg-[#2d1b4e]/80 border-b border-[#f7a600]/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 items-start">
            <AlertCircle className="text-[#f7a600] flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-[#f7a600] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
                ⚠️ Age & Responsible Gaming Disclaimer
              </h3>
              <p className="text-sm text-[#a0aec0] leading-relaxed">
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
              <div className="w-10 h-10 bg-gradient-to-br from-[#f7a600] to-[#d4860f] rounded-lg flex items-center justify-center">
                <span className="text-[#1a0a2e] font-bold">🎮</span>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
                PlayHub
              </span>
            </div>
            <p className="text-[#a0aec0] text-sm">
              Premium social gaming platform for entertainment and fun.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#f7a600] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-[#a0aec0] hover:text-[#f7a600] transition-colors text-sm">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/games">
                  <a className="text-[#a0aec0] hover:text-[#f7a600] transition-colors text-sm">Games</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-[#a0aec0] hover:text-[#f7a600] transition-colors text-sm">About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-[#a0aec0] hover:text-[#f7a600] transition-colors text-sm">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-[#f7a600] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy">
                  <a className="text-[#a0aec0] hover:text-[#f7a600] transition-colors text-sm">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-[#a0aec0] hover:text-[#f7a600] transition-colors text-sm">Terms & Conditions</a>
                </Link>
              </li>
              <li>
                <Link href="/disclaimer">
                  <a className="text-[#a0aec0] hover:text-[#f7a600] transition-colors text-sm">Disclaimer</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#f7a600] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-[#a0aec0]">
              <li>Email: <a href="mailto:support@playhub.com" className="text-[#f7a600] hover:underline">support@playhub.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="text-[#f7a600] hover:underline">+1 (234) 567-890</a></li>
              <li>Hours: 24/7 Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#f7a600]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#a0aec0] text-sm">
              © {currentYear} PlayHub. All rights reserved. Entertainment only. No real money involved.
            </p>
            <div className="flex gap-4 text-xs text-[#a0aec0]">
              <span>CIN: 18AABCT1234A1Z5</span>
              <span>•</span>
              <span>GST: 18AABCT1234A1Z5</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
