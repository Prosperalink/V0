// Orson Vision Logo Proportion Calculator
// Based on original logo: 600x200px

const ORIGINAL_LOGO = {
  width: 600,
  height: 200,
  // Left bracket positioning
  leftBracket: {
    vertical: { x: 120, y: 60, width: 10, height: 100 },
    topHorizontal: { x: 120, y: 60, width: 50, height: 10 },
    bottomHorizontal: { x: 120, y: 150, width: 50, height: 10 },
  },
  // Right bracket positioning
  rightBracket: {
    vertical: { x: 470, y: 60, width: 10, height: 100 },
    topHorizontal: { x: 430, y: 60, width: 50, height: 10 },
    bottomHorizontal: { x: 430, y: 150, width: 50, height: 10 },
  },
  // Text positioning
  text: {
    orson: { x: 300, y: 120, fontSize: 32, fontWeight: 600 },
    vision: { x: 300, y: 150, fontSize: 24, fontWeight: 400 },
    tagline: { x: 300, y: 180, fontSize: 14, fontWeight: 300 },
  },
};

function calculateProportions(targetWidth, targetHeight) {
  const scaleX = targetWidth / ORIGINAL_LOGO.width;
  const scaleY = targetHeight / ORIGINAL_LOGO.height;

  // Use the smaller scale to maintain aspect ratio
  const scale = Math.min(scaleX, scaleY);

  console.log(`\n=== Logo Proportion Calculator ===`);
  console.log(
    `Original logo: ${ORIGINAL_LOGO.width}x${ORIGINAL_LOGO.height}px`
  );
  console.log(`Target size: ${targetWidth}x${targetHeight}px`);
  console.log(`Scale factor: ${scale.toFixed(3)}`);

  const scaled = {
    width: targetWidth,
    height: targetHeight,
    scale: scale,
    leftBracket: {
      vertical: {
        x: Math.round(ORIGINAL_LOGO.leftBracket.vertical.x * scale),
        y: Math.round(ORIGINAL_LOGO.leftBracket.vertical.y * scale),
        width: Math.round(ORIGINAL_LOGO.leftBracket.vertical.width * scale),
        height: Math.round(ORIGINAL_LOGO.leftBracket.vertical.height * scale),
      },
      topHorizontal: {
        x: Math.round(ORIGINAL_LOGO.leftBracket.topHorizontal.x * scale),
        y: Math.round(ORIGINAL_LOGO.leftBracket.topHorizontal.y * scale),
        width: Math.round(
          ORIGINAL_LOGO.leftBracket.topHorizontal.width * scale
        ),
        height: Math.round(
          ORIGINAL_LOGO.leftBracket.topHorizontal.height * scale
        ),
      },
      bottomHorizontal: {
        x: Math.round(ORIGINAL_LOGO.leftBracket.bottomHorizontal.x * scale),
        y: Math.round(ORIGINAL_LOGO.leftBracket.bottomHorizontal.y * scale),
        width: Math.round(
          ORIGINAL_LOGO.leftBracket.bottomHorizontal.width * scale
        ),
        height: Math.round(
          ORIGINAL_LOGO.leftBracket.bottomHorizontal.height * scale
        ),
      },
    },
    rightBracket: {
      vertical: {
        x: Math.round(ORIGINAL_LOGO.rightBracket.vertical.x * scale),
        y: Math.round(ORIGINAL_LOGO.rightBracket.vertical.y * scale),
        width: Math.round(ORIGINAL_LOGO.rightBracket.vertical.width * scale),
        height: Math.round(ORIGINAL_LOGO.rightBracket.vertical.height * scale),
      },
      topHorizontal: {
        x: Math.round(ORIGINAL_LOGO.rightBracket.topHorizontal.x * scale),
        y: Math.round(ORIGINAL_LOGO.rightBracket.topHorizontal.y * scale),
        width: Math.round(
          ORIGINAL_LOGO.rightBracket.topHorizontal.width * scale
        ),
        height: Math.round(
          ORIGINAL_LOGO.rightBracket.topHorizontal.height * scale
        ),
      },
      bottomHorizontal: {
        x: Math.round(ORIGINAL_LOGO.rightBracket.bottomHorizontal.x * scale),
        y: Math.round(ORIGINAL_LOGO.rightBracket.bottomHorizontal.y * scale),
        width: Math.round(
          ORIGINAL_LOGO.rightBracket.bottomHorizontal.width * scale
        ),
        height: Math.round(
          ORIGINAL_LOGO.rightBracket.bottomHorizontal.height * scale
        ),
      },
    },
    text: {
      orson: {
        x: Math.round(ORIGINAL_LOGO.text.orson.x * scale),
        y: Math.round(ORIGINAL_LOGO.text.orson.y * scale),
        fontSize: Math.round(ORIGINAL_LOGO.text.orson.fontSize * scale),
        fontWeight: ORIGINAL_LOGO.text.orson.fontWeight,
      },
      vision: {
        x: Math.round(ORIGINAL_LOGO.text.vision.x * scale),
        y: Math.round(ORIGINAL_LOGO.text.vision.y * scale),
        fontSize: Math.round(ORIGINAL_LOGO.text.vision.fontSize * scale),
        fontWeight: ORIGINAL_LOGO.text.vision.fontWeight,
      },
      tagline: {
        x: Math.round(ORIGINAL_LOGO.text.tagline.x * scale),
        y: Math.round(ORIGINAL_LOGO.text.tagline.y * scale),
        fontSize: Math.round(ORIGINAL_LOGO.text.tagline.fontSize * scale),
        fontWeight: ORIGINAL_LOGO.text.tagline.fontWeight,
      },
    },
  };

  console.log(`\n=== Scaled Proportions ===`);
  console.log(`Left Bracket:`);
  console.log(
    `  Vertical: x=${scaled.leftBracket.vertical.x}, y=${scaled.leftBracket.vertical.y}, width=${scaled.leftBracket.vertical.width}, height=${scaled.leftBracket.vertical.height}`
  );
  console.log(
    `  Top Horizontal: x=${scaled.leftBracket.topHorizontal.x}, y=${scaled.leftBracket.topHorizontal.y}, width=${scaled.leftBracket.topHorizontal.width}, height=${scaled.leftBracket.topHorizontal.height}`
  );
  console.log(
    `  Bottom Horizontal: x=${scaled.leftBracket.bottomHorizontal.x}, y=${scaled.leftBracket.bottomHorizontal.y}, width=${scaled.leftBracket.bottomHorizontal.width}, height=${scaled.leftBracket.bottomHorizontal.height}`
  );

  console.log(`\nRight Bracket:`);
  console.log(
    `  Vertical: x=${scaled.rightBracket.vertical.x}, y=${scaled.rightBracket.vertical.y}, width=${scaled.rightBracket.vertical.width}, height=${scaled.rightBracket.vertical.height}`
  );
  console.log(
    `  Top Horizontal: x=${scaled.rightBracket.topHorizontal.x}, y=${scaled.rightBracket.topHorizontal.y}, width=${scaled.rightBracket.topHorizontal.width}, height=${scaled.rightBracket.topHorizontal.height}`
  );
  console.log(
    `  Bottom Horizontal: x=${scaled.rightBracket.bottomHorizontal.x}, y=${scaled.rightBracket.bottomHorizontal.y}, width=${scaled.rightBracket.bottomHorizontal.width}, height=${scaled.rightBracket.bottomHorizontal.height}`
  );

  console.log(`\nText:`);
  console.log(
    `  ORSON: x=${scaled.text.orson.x}, y=${scaled.text.orson.y}, fontSize=${scaled.text.orson.fontSize}`
  );
  console.log(
    `  VISION: x=${scaled.text.vision.x}, y=${scaled.text.vision.y}, fontSize=${scaled.text.vision.fontSize}`
  );
  console.log(
    `  Tagline: x=${scaled.text.tagline.x}, y=${scaled.text.tagline.y}, fontSize=${scaled.text.tagline.fontSize}`
  );

  return scaled;
}

function generateCSSCode(proportions) {
  const css = `
/* Logo Section */
.logo-section {
  position: absolute;
  top: 100px;
  left: 100px;
  width: ${proportions.width}px;
  height: ${proportions.height}px;
}

.bracket {
  position: absolute;
  background: linear-gradient(135deg, #1A1A1A 0%, #374151 100%);
  border-radius: 2px;
}

/* Left Bracket */
.left-bracket-vertical {
  left: ${proportions.leftBracket.vertical.x}px;
  top: ${proportions.leftBracket.vertical.y}px;
  width: ${proportions.leftBracket.vertical.width}px;
  height: ${proportions.leftBracket.vertical.height}px;
}

.left-bracket-top {
  left: ${proportions.leftBracket.topHorizontal.x}px;
  top: ${proportions.leftBracket.topHorizontal.y}px;
  width: ${proportions.leftBracket.topHorizontal.width}px;
  height: ${proportions.leftBracket.topHorizontal.height}px;
}

.left-bracket-bottom {
  left: ${proportions.leftBracket.bottomHorizontal.x}px;
  top: ${proportions.leftBracket.bottomHorizontal.y}px;
  width: ${proportions.leftBracket.bottomHorizontal.width}px;
  height: ${proportions.leftBracket.bottomHorizontal.height}px;
}

/* Right Bracket */
.right-bracket-vertical {
  left: ${proportions.rightBracket.vertical.x}px;
  top: ${proportions.rightBracket.vertical.y}px;
  width: ${proportions.rightBracket.vertical.width}px;
  height: ${proportions.rightBracket.vertical.height}px;
}

.right-bracket-top {
  left: ${proportions.rightBracket.topHorizontal.x}px;
  top: ${proportions.rightBracket.topHorizontal.y}px;
  width: ${proportions.rightBracket.topHorizontal.width}px;
  height: ${proportions.rightBracket.topHorizontal.height}px;
}

.right-bracket-bottom {
  left: ${proportions.rightBracket.bottomHorizontal.x}px;
  top: ${proportions.rightBracket.bottomHorizontal.y}px;
  width: ${proportions.rightBracket.bottomHorizontal.width}px;
  height: ${proportions.rightBracket.bottomHorizontal.height}px;
}

.company-name {
  position: absolute;
  left: ${proportions.text.orson.x}px;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
}

.company-name .orson {
  font-size: ${proportions.text.orson.fontSize}px;
  font-weight: ${proportions.text.orson.fontWeight};
  color: #1A1A1A;
  margin: 0;
}

.company-name .vision {
  font-size: ${proportions.text.vision.fontSize}px;
  font-weight: ${proportions.text.vision.fontWeight};
  color: #78716C;
  margin: 0;
}

.tagline {
  position: absolute;
  left: ${proportions.text.tagline.x}px;
  top: ${proportions.text.tagline.y}px;
  transform: translateX(-50%);
  font-size: ${proportions.text.tagline.fontSize}px;
  font-weight: ${proportions.text.tagline.fontWeight};
  color: #78716C;
}
`;

  console.log(`\n=== Generated CSS ===`);
  console.log(css);

  return css;
}

// Example usage
console.log('Orson Vision Logo Proportion Calculator');
console.log('======================================');

// Test with different sizes
const sizes = [
  { width: 1200, height: 628, name: 'Google Ads' },
  { width: 1200, height: 628, name: 'Facebook Feed' },
  { width: 1200, height: 627, name: 'LinkedIn Sponsored' },
  { width: 350, height: 200, name: 'Business Card' },
  { width: 400, height: 400, name: 'LinkedIn Profile' },
];

sizes.forEach(size => {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`${size.name}: ${size.width}x${size.height}px`);
  console.log(`${'='.repeat(50)}`);

  const proportions = calculateProportions(size.width, size.height);
  generateCSSCode(proportions);
});

module.exports = { calculateProportions, generateCSSCode };
