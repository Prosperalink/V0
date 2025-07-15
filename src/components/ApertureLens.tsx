'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

interface IApertureLensProps {
  size?: number;
  isActive?: boolean;
  color?: 'gold' | 'blue' | 'purple' | 'neutral';
  className?: string;
  onClick?: () => void;
}

export default function ApertureLens({
  size = 160,
  isActive = false,
  color = 'gold',
  className = '',
  onClick,
}: IApertureLensProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Color configurations
  const colorConfigs = {
    gold: {
      primary: '#F59E0B',
      secondary: '#D97706',
      glow: 'rgba(245, 158, 11, 0.4)',
      gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    },
    blue: {
      primary: '#1E40AF',
      secondary: '#1E3A8A',
      glow: 'rgba(30, 64, 175, 0.4)',
      gradient: 'linear-gradient(135deg, #1E40AF, #1E3A8A)',
    },
    purple: {
      primary: '#7C3AED',
      secondary: '#5B21B6',
      glow: 'rgba(124, 58, 237, 0.4)',
      gradient: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
    },
    neutral: {
      primary: '#6B7280',
      secondary: '#374151',
      glow: 'rgba(107, 114, 128, 0.4)',
      gradient: 'linear-gradient(135deg, #6B7280, #374151)',
    },
  };

  const config = colorConfigs[color];

  // Aperture blade positions (8 blades)
  const bladeCount = 8;
  const bladeAngle = 360 / bladeCount;

  // Add rounding helper
  function round(n: number, d = 3) {
    return Number(n.toFixed(d));
  }

  // Precompute blade paths deterministically
  const bladePaths = useMemo(() => {
    return Array.from({ length: bladeCount }).map((unused, index) => {
      const angle = index * bladeAngle - 90;
      const x1 = round(50 + 35 * Math.cos((angle * Math.PI) / 180));
      const y1 = round(50 + 35 * Math.sin((angle * Math.PI) / 180));
      const x2 = round(50 + 25 * Math.cos(((angle + 15) * Math.PI) / 180));
      const y2 = round(50 + 25 * Math.sin(((angle + 15) * Math.PI) / 180));
      return `M 50 50 L ${x1} ${y1} L ${x2} ${y2} Z`;
    });
  }, [bladeCount, bladeAngle]);

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Animated Lens Container */}
      <motion.div
        className="absolute inset-0 cursor-pointer"
        style={{
          zIndex: 1,
          transformOrigin: 'center',
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Outer Ring with Glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: config.gradient,
          }}
          animate={{}}
          transition={{ duration: 0.3 }}
        />

        {/* Lens Body */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-600">
          {/* Aperture Blades */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            className="absolute inset-0"
          >
            <defs>
              {/* Metallic gradient for blades */}
              <linearGradient
                id={`bladeGradient-${color}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={config.primary} />
                <stop offset="50%" stopColor={config.secondary} />
                <stop offset="100%" stopColor={config.primary} />
              </linearGradient>

              {/* Glass reflection gradient */}
              <radialGradient id="glassReflection" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>

            {/* Aperture Blades */}
            {bladePaths.map((d, index) => (
              <motion.path
                key={index}
                d={d}
                fill={`url(#bladeGradient-${color})`}
                stroke={config.secondary}
                strokeWidth="0.5"
                initial={{ opacity: 0.8 }}
                animate={{
                  opacity: isActive || isHovered ? 1 : 0.8,
                  rotate: isActive || isHovered ? 5 : 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
              />
            ))}

            {/* Center Glass */}
            <circle
              cx="50"
              cy="50"
              r="20"
              fill="url(#glassReflection)"
              stroke={config.primary}
              strokeWidth="0.5"
            />

            {/* Center Highlight */}
            <circle cx="45" cy="45" r="3" fill="rgba(255,255,255,0.6)" />
          </svg>

          {/* Reflection Sweep Animation */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            }}
            animate={{
              x: isHovered ? ['-100%', '100%'] : '-100%',
            }}
            transition={{
              duration: 1.5,
              repeat: isHovered ? Infinity : 0,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Focus Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent"
          style={{
            borderColor: isActive || isHovered ? config.primary : 'transparent',
          }}
          animate={{
            scale: isActive || isHovered ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: isActive || isHovered ? Infinity : 0,
          }}
        />
      </motion.div>
    </div>
  );
}
