import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] flex items-center justify-center px-4">
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
          className="text-3xl font-bold text-[#14b8a6] mb-4"
          style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
        >
          Page Not Found
        </h2>

        <p className="text-[#cbd5e1] text-lg mb-8">
          Oops! It looks like you've wandered into uncharted territory. The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] text-[#0f172a] font-bold rounded-lg hover:shadow-lg hover:shadow-[#14b8a6]/50 transition-all duration-300 transform hover:scale-105">
              Back to Home
              <ArrowRight size={20} />
            </a>
          </Link>
          <Link href="/games">
            <a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#14b8a6] text-[#14b8a6] font-bold rounded-lg hover:bg-[#14b8a6]/10 transition-all duration-300">
              Play Games
              <ArrowRight size={20} />
            </a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
