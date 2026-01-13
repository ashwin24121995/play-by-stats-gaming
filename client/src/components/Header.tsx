import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SoundToggle from './SoundToggle';

/**
 * Header Component - Play By Stats
 * Design: Purple (#a855f7) & Pink (#ec4899) with bright green accents
 * Features: Logo, navigation menu, mobile hamburger, CTA button
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Games', href: '/games' },
    { label: 'Leaderboard', href: '/leaderboard' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-[#e5e7eb] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300">
                <img
                  src="/images/logo-playbystats.webp"
                  alt="Play By Stats Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
                  Play By Stats
                </h1>
                <p className="text-xs text-[#6b7280] font-semibold">Free Gaming Platform</p>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="text-[#1f1f2e] font-semibold hover:text-[#a855f7] transition-colors duration-300 relative group">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#a855f7] to-[#ec4899] group-hover:w-full transition-all duration-300"></span>
                </a>
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Sound Toggle */}
            <SoundToggle />
            
            <Link href="/games">
              <a className="hidden sm:inline-flex px-6 py-2 bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-[#a855f7]/40 transition-all duration-300 transform hover:scale-105">
                Play Games
              </a>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#a855f7] hover:bg-[#f5f3ff] rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t-2 border-[#e5e7eb] bg-gradient-to-b from-white to-[#f5f3ff]"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-[#1f1f2e] font-semibold hover:bg-[#a855f7]/10 hover:text-[#a855f7] rounded-lg transition-colors"
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
                <Link href="/games">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white font-bold rounded-lg text-center hover:shadow-lg transition-all"
                  >
                    Play Games
                  </a>
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
