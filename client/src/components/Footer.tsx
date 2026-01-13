import { Link } from 'wouter';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

/**
 * Footer Component - Play By Stats
 * Design: Purple (#a855f7) & Pink (#ec4899) with professional layout
 * Features: Company info, links, legal, contact, social media
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo-playbystats.webp"
                alt="Play By Stats"
                className="h-10 w-10 rounded-full"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
                Play By Stats
              </h3>
            </div>
            <p className="text-[#a0a0b0] mb-4 leading-relaxed">
              Your ultimate free-to-play gaming platform. Enjoy exciting casino games with zero financial risk and pure entertainment.
            </p>
            <p className="text-xs text-[#6b7280]">
              © {currentYear} SDSURABHI INFRA PRIVATE LIMITED. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Games', href: '/games' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-[#a0a0b0] hover:text-[#a855f7] transition-colors duration-300 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#a855f7] rounded-full"></span>
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms & Conditions', href: '/terms' },
                { label: 'Disclaimer', href: '/disclaimer' },
                { label: 'Responsible Gaming', href: '/disclaimer' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-[#a0a0b0] hover:text-[#ec4899] transition-colors duration-300 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#ec4899] rounded-full"></span>
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-[#a855f7] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-[#6b7280]">Email</p>
                  <a href="mailto:support@playbystats.com" className="text-[#a0a0b0] hover:text-[#a855f7] transition-colors">
                    support@playbystats.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-[#ec4899] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-[#6b7280]">Phone</p>
                  <a href="tel:+919876543210" className="text-[#a0a0b0] hover:text-[#ec4899] transition-colors">
                    +91 (987) 654-3210
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#22c55e] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-[#6b7280]">Location</p>
                  <p className="text-[#a0a0b0] text-sm leading-relaxed">
                    Ram Acchayyar 48/2, Ayodhya Puri 2 Bijnour<br />
                    Sarojini Nagar, Lucknow - 226008<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#2d2d44]"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Company Details */}
          <div className="text-center md:text-left text-sm text-[#a0a0b0]">
            <p className="mb-2">
              <strong>Company:</strong> SDSURABHI INFRA PRIVATE LIMITED
            </p>
            <p className="mb-2">
              <strong>CIN:</strong> U41002UP2023PTC194590 | <strong>PAN:</strong> ABMCS3759A
            </p>
            <p>
              <strong>TAN:</strong> LKNS26029D | <strong>Domain:</strong> playbystats.com
            </p>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#a0a0b0] hover:text-[#a855f7] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-[#a0a0b0] hover:text-[#ec4899] transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-[#a0a0b0] hover:text-[#22c55e] transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mt-8 pt-8 border-t border-[#2d2d44] text-center text-xs text-[#6b7280]">
          <p className="mb-2">
            ⚠️ <strong>Responsible Gaming & Compliance Notice:</strong>
          </p>
          <p>
            Play By Stats is a free-to-play social gaming platform for entertainment purposes only. No real money is involved. Players must be 18+ years old. This platform complies with all responsible gaming standards. Play responsibly and have fun!
          </p>
        </div>
      </div>
    </footer>
  );
}
