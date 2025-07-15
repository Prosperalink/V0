import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';

interface IAnimatedLensProps {
  size?: number;
  blades?: number;
  open?: boolean;
  color?: string;
  onClick?: () => void;
  className?: string;
}

const AnimatedLens: React.FC<IAnimatedLensProps> = ({
  size = 160,
  open = false,
  color = 'url(#lens-gradient)',
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  // Parse color prop to create dynamic gradient
  const getGradientId = () => {
    if (color.startsWith('url(')) return color;

    // Extract colors from Tailwind gradient format
    const colorMatch = color.match(/from-(\w+)-(\d+)\s+to-(\w+)-(\d+)/);
    if (colorMatch) {
      const [, fromColor, fromShade, toColor, toShade] = colorMatch;
      return `url(#dynamic-gradient-${fromColor}-${fromShade}-${toColor}-${toShade})`;
    }

    return 'url(#lens-gradient)';
  };

  // Generate color values for dynamic gradients
  const getColorValues = (colorName: string, shade: string): string => {
    const colorMap: { [key: string]: { [key: string]: string } } = {
      amber: {
        '500': '#f59e0b',
        '600': '#d97706',
      },
      blue: {
        '500': '#3b82f6',
        '600': '#2563eb',
      },
      purple: {
        '500': '#8b5cf6',
        '600': '#7c3aed',
      },
      emerald: {
        '500': '#10b981',
        '600': '#059669',
      },
      red: {
        '500': '#ef4444',
        '600': '#dc2626',
      },
      orange: {
        '500': '#f97316',
        '600': '#ea580c',
      },
      teal: {
        '500': '#14b8a6',
        '600': '#0d9488',
      },
      yellow: {
        '500': '#eab308',
        '600': '#ca8a04',
      },
      gray: {
        '300': '#d1d5db',
        '400': '#9ca3af',
        '500': '#6b7280',
        '600': '#4b5563',
        '700': '#374151',
        '800': '#1f2937',
        '900': '#111827',
      },
      black: {
        default: '#000000',
      },
      white: {
        default: '#ffffff',
      },
      cyan: {
        '600': '#0891b2',
        '800': '#155e75',
      },
      indigo: {
        '600': '#4f46e5',
        '800': '#3730a3',
      },
      pink: {
        '600': '#db2777',
        '800': '#9d174d',
      },
    };
    return (
      colorMap[colorName]?.[shade] ||
      colorMap[colorName]?.['default'] ||
      '#3b82f6'
    );
  };

  // Create dynamic gradient definition
  const createDynamicGradient = () => {
    const colorMatch = color.match(/from-(\w+)-(\d+)\s+to-(\w+)-(\d+)/);
    if (!colorMatch) return null;

    const [, fromColor, fromShade, toColor, toShade] = colorMatch;
    const fromValue = getColorValues(fromColor, fromShade);
    const toValue = getColorValues(toColor, toShade);
    const gradientId = getGradientId().replace('url(#', '').replace(')', '');

    return (
      <radialGradient id={gradientId} cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor={fromValue} stopOpacity="0.8" />
        <stop offset="40%" stopColor={fromValue} stopOpacity="0.4" />
        <stop offset="70%" stopColor={toValue} stopOpacity="0.6" />
        <stop offset="100%" stopColor={toValue} stopOpacity="0.9" />
      </radialGradient>
    );
  };

  return (
    <motion.svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      style={{ cursor: onClick ? 'pointer' : 'default', display: 'block' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={onClick}
      tabIndex={0}
      aria-label="Cinematic Lens"
    >
      {/* Definitions */}
      <defs>
        {/* Dynamic gradient based on color prop */}
        {createDynamicGradient()}

        {/* Simple transparent gradient */}
        <radialGradient id="lens-gradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="transparent" stopOpacity="0" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Main lens ring - simple, elegant */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 2}
        fill="transparent"
        stroke="#ffffff"
        strokeWidth="1"
        opacity={0.3}
        animate={{
          opacity: isHovered || open ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Inner ring */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 8}
        fill="transparent"
        stroke="#ffffff"
        strokeWidth="0.5"
        opacity={0.2}
        animate={{
          opacity: isHovered || open ? 0.4 : 0.2,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Simple center dot */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={2}
        fill="#ffffff"
        opacity={0.5}
        animate={{
          opacity: isHovered || open ? 0.8 : 0.5,
          scale: isHovered || open ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Subtle breathing animation */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 12}
        fill="transparent"
        stroke="#ffffff"
        strokeWidth="0.5"
        opacity={0.1}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
  );
};

export default AnimatedLens;
