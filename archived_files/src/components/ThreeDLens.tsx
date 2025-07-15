import React from 'react';

interface IThreeDLensProps {
  size?: number;
  className?: string;
  rotation?: number;
}

const bladeCount = 8;
const toFixed = (n: number) => Number(n.toFixed(3));

const OUTER_TEXT_TOP = 'Angénieux Paris 18.5mm Type R2';
const OUTER_TEXT_BOTTOM = 'f/2.2';

const ThreeDLens: React.FC<IThreeDLensProps> = ({
  size = 120,
  className = '',
  rotation = 0,
}) => {
  const center = size / 2;
  const outerRadius = size * 0.48;
  const ringWidth = size * 0.11;
  const glassRadius = size * 0.33;
  const bladeRadius = size * 0.28;
  const bladeWidth = size * 0.09;
  const innerRadius = size * 0.13;

  // Calculate rounded aperture blades
  const blades = Array.from({ length: bladeCount }).map((unused, i) => {
    const angle = (i / bladeCount) * 2 * Math.PI;
    const nextAngle = ((i + 1) / bladeCount) * 2 * Math.PI;
    // Rounded blades: use arcs for a more circular look
    const p1 = [
      toFixed(center + Math.cos(angle) * (bladeRadius - bladeWidth)),
      toFixed(center + Math.sin(angle) * (bladeRadius - bladeWidth)),
    ];
    const p2 = [
      toFixed(center + Math.cos(angle) * bladeRadius),
      toFixed(center + Math.sin(angle) * bladeRadius),
    ];
    const p3 = [
      toFixed(center + Math.cos(nextAngle) * bladeRadius),
      toFixed(center + Math.sin(nextAngle) * bladeRadius),
    ];
    const p4 = [
      toFixed(center + Math.cos(nextAngle) * (bladeRadius - bladeWidth)),
      toFixed(center + Math.sin(nextAngle) * (bladeRadius - bladeWidth)),
    ];
    // Use a path for rounded ends
    return (
      <path
        key={i}
        d={`M ${p1[0]},${p1[1]}
           L ${p2[0]},${p2[1]}
           A ${bladeRadius},${bladeRadius} 0 0,1 ${p3[0]},${p3[1]}
           L ${p4[0]},${p4[1]}
           A ${bladeRadius - bladeWidth},${bladeRadius - bladeWidth} 0 0,0 ${p1[0]},${p1[1]}`}
        fill="#222"
        opacity={0.7}
      />
    );
  });

  // Fine concentric rings
  const concentricRings = [1, 0.85, 0.7, 0.55].map((r, i) => (
    <circle
      key={i}
      cx={center}
      cy={center}
      r={glassRadius * r}
      fill="none"
      stroke="#b3baff"
      strokeWidth={size * 0.008}
      opacity={0.13}
    />
  ));

  // Counter-rotation transform for text
  const textTransform = `rotate(${-rotation} ${center} ${center})`;

  return (
    <div
      style={{ position: 'relative', width: size, height: size }}
      className={className}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))',
          display: 'block',
        }}
        aria-label="Angénieux 18.5mm Type R2 Lens"
      >
        <defs>
          {/* Metallic ring gradient */}
          <radialGradient id="metal" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#e5c97b" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#bfa76a" stopOpacity="0.9" />
            <stop offset="90%" stopColor="#888" stopOpacity="1" />
            <stop offset="100%" stopColor="#222" stopOpacity="1" />
          </radialGradient>
          {/* Glass gradient */}
          <radialGradient id="glass" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#b3baff" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#60a5fa" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="80%" stopColor="#18182a" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#000" stopOpacity="1" />
          </radialGradient>
          {/* Highlight */}
          <radialGradient id="highlight" cx="60%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Outer metallic ring */}
        <circle
          cx={center}
          cy={center}
          r={outerRadius}
          fill="url(#metal)"
          stroke="#222"
          strokeWidth={size * 0.012}
        />
        {/* Glass inner area */}
        <circle cx={center} cy={center} r={glassRadius} fill="url(#glass)" />
        {/* Fine concentric rings */}
        {concentricRings}
        {/* Aperture blades */}
        {blades}
        {/* Central circle */}
        <circle
          cx={center}
          cy={center}
          r={innerRadius}
          fill="#18182a"
          opacity={0.85}
        />
        {/* Highlight */}
        <ellipse
          cx={toFixed(center + size * 0.08)}
          cy={toFixed(center - size * 0.13)}
          rx={toFixed(size * 0.22)}
          ry={toFixed(size * 0.09)}
          fill="url(#highlight)"
        />
        {/* Engraved text (top) */}
        <text
          x={center}
          y={center - outerRadius + ringWidth * 0.7}
          textAnchor="middle"
          fontSize={size * 0.09}
          fill="#fff"
          opacity={0.85}
          fontFamily="serif"
          letterSpacing={1.5}
          style={{ textShadow: '0 1px 2px #000' }}
          transform={textTransform}
        >
          {OUTER_TEXT_TOP}
        </text>
        {/* Engraved text (bottom) */}
        <text
          x={center}
          y={center + outerRadius - ringWidth * 0.3}
          textAnchor="middle"
          fontSize={size * 0.09}
          fill="#fff"
          opacity={0.85}
          fontFamily="serif"
          letterSpacing={2}
          style={{ textShadow: '0 1px 2px #000' }}
          transform={textTransform}
        >
          {OUTER_TEXT_BOTTOM}
        </text>
      </svg>
      {/* The title and its wrapper div are removed as per the new_code */}
    </div>
  );
};

export default ThreeDLens;
