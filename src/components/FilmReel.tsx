import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';

interface IFilmReelProps {
  size?: number;
  open?: boolean;
  vintageColor?: string;
  lightBeamColor?: string;
  filmReference?: string;
  technique?: string;
  onClick?: () => void;
  className?: string;
}

const FilmReel: React.FC<IFilmReelProps> = ({
  size = 180,
  open = false,
  vintageColor = '#CD7F32',
  lightBeamColor = '#FFD700',
  filmReference = 'Classic',
  technique = 'Cinematic',
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

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
      aria-label="Vintage Film Reel"
    >
      {/* Definitions */}
      <defs>
        {/* Vintage brass gradient */}
        <radialGradient id="brass-gradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={vintageColor} stopOpacity="0.9" />
          <stop offset="40%" stopColor={vintageColor} stopOpacity="0.7" />
          <stop offset="70%" stopColor="#8B4513" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#654321" stopOpacity="0.9" />
        </radialGradient>

        {/* Light beam gradient */}
        <radialGradient id="light-beam-gradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={lightBeamColor} stopOpacity="0.8" />
          <stop offset="50%" stopColor={lightBeamColor} stopOpacity="0.4" />
          <stop offset="100%" stopColor={lightBeamColor} stopOpacity="0" />
        </radialGradient>

        {/* Film perforation pattern */}
        <pattern
          id="film-perforations"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="20" height="20" fill="none" />
          <circle cx="10" cy="5" r="1" fill="#333" />
          <circle cx="10" cy="15" r="1" fill="#333" />
        </pattern>
      </defs>

      {/* Main film reel body - vintage brass */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 4}
        fill="url(#brass-gradient)"
        stroke="#8B4513"
        strokeWidth="2"
        animate={{
          scale: isHovered || open ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Inner reel hub */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={size / 4}
        fill="#654321"
        stroke="#8B4513"
        strokeWidth="1"
      />

      {/* Reel spokes - 8 spokes for classic film reel */}
      {Array.from({ length: 8 }).map((unused, i) => {
        const angle = i * 45 * (Math.PI / 180);
        const x1 = size / 2 + Math.cos(angle) * (size / 4);
        const y1 = size / 2 + Math.sin(angle) * (size / 4);
        const x2 = size / 2 + Math.cos(angle) * (size / 2 - 8);
        const y2 = size / 2 + Math.sin(angle) * (size / 2 - 8);

        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#8B4513"
            strokeWidth="3"
            animate={{
              opacity: isHovered || open ? 0.8 : 0.6,
            }}
            transition={{ duration: 0.3 }}
          />
        );
      })}

      {/* Film perforations around the edge */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 2}
        fill="none"
        stroke="#333"
        strokeWidth="1"
        strokeDasharray="2,2"
        opacity={0.4}
      />

      {/* Vintage markings and text */}
      <motion.text
        x={size / 2}
        y={size / 2 + 15}
        textAnchor="middle"
        fill="#8B4513"
        fontSize="8"
        fontFamily="serif"
        fontWeight="bold"
        opacity={isHovered || open ? 0.8 : 0.4}
        animate={{
          opacity: isHovered || open ? 0.8 : 0.4,
        }}
        transition={{ duration: 0.3 }}
      >
        {filmReference}
      </motion.text>

      <motion.text
        x={size / 2}
        y={size / 2 - 15}
        textAnchor="middle"
        fill="#8B4513"
        fontSize="6"
        fontFamily="serif"
        opacity={isHovered || open ? 0.6 : 0.3}
        animate={{
          opacity: isHovered || open ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.3 }}
      >
        {technique}
      </motion.text>

      {/* Light beam effect on hover */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2}
        fill="url(#light-beam-gradient)"
        opacity={0}
        animate={{
          opacity: isHovered || open ? 0.3 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Rotating animation for the reel */}
      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ transformOrigin: `${size / 2}px ${size / 2}px` }}
      >
        {/* Film strip effect */}
        <motion.rect
          x={size / 2 - 15}
          y={size / 2 - 2}
          width="30"
          height="4"
          fill="#000"
          opacity={0.6}
          animate={{
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.g>

      {/* Breathing glow effect */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2}
        fill="none"
        stroke={lightBeamColor}
        strokeWidth="1"
        opacity={0}
        animate={{
          opacity: [0, 0.2, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
  );
};

export default FilmReel;
