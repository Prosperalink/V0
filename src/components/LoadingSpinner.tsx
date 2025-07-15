'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-deep-blue flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-golden-accent border-t-transparent rounded-full mx-auto mb-4"
        />
        <p className="text-text-white text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}
