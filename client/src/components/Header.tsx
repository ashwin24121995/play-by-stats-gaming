import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

/**
 * Header Component
 * Premium gaming platform navigation with sticky positioning
 * Design: Deep purple background with golden accents, italic Poppins headings
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Games', href: '/games' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const legalItems = [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#1a0a2e] to-[#2d1b4e] border-b-2 border-[#f7a600] shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-[#f7a600] to-[#d4860f] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-[#1a0a2e] font-bold text-lg">🎮</span>
              </div>
              <span className="text-2xl font-bold text-white hidden sm:inline" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
                PlayHub
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="text-white hover:text-[#f7a600] transition-colors duration-300 font-medium relative group">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f7a600] group-hover:w-full transition-all duration-300"></span>
                </a>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link href="/games">
            <a className="hidden sm:inline-block px-6 py-2 bg-gradient-to-r from-[#f7a600] to-[#d4860f] text-[#1a0a2e] font-bold rounded-lg hover:shadow-lg hover:shadow-[#f7a600]/50 transition-all duration-300 transform hover:scale-105">
              Play Now
            </a>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#f7a600] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-[#f7a600]/30">
            <nav className="flex flex-col gap-3 mt-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className="text-white hover:text-[#f7a600] transition-colors py-2 px-4 rounded hover:bg-[#2d1b4e]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <div className="border-t border-[#f7a600]/30 pt-3 mt-3">
                {legalItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a
                      className="text-[#a0aec0] hover:text-[#f7a600] text-sm transition-colors py-1 px-4 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
