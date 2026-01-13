import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0a2e] to-[#2d1b4e] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-9xl mb-8"
        >
          🎮
        </motion.div>

        <h1
          className="text-6xl font-bold text-white mb-4"
          style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
        >
          404
        </h1>

        <h2
          className="text-3xl font-bold text-[#f7a600] mb-4"
          style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
        >
          Page Not Found
        </h2>

        <p className="text-[#a0aec0] text-lg mb-8">
          Oops! It looks like you've wandered into uncharted territory. The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f7a600] to-[#d4860f] text-[#1a0a2e] font-bold rounded-lg hover:shadow-lg hover:shadow-[#f7a600]/50 transition-all duration-300 transform hover:scale-105">
              Back to Home
              <ArrowRight size={20} />
            </a>
          </Link>
          <Link href="/games">
            <a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#f7a600] text-[#f7a600] font-bold rounded-lg hover:bg-[#f7a600]/10 transition-all duration-300">
              Play Games
              <ArrowRight size={20} />
            </a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
