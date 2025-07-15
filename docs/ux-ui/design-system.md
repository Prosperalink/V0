# Orson Vision - Design System

## Cinematic Design System Implementation

_Last Updated: December 2024_
_Version: 5.0 - Current Implementation_

## 🎨 Design Philosophy

### Cinematic Approach

Orson Vision's design system is built around cinematic principles, emphasizing dramatic visuals, sophisticated typography, and premium user experiences. The system combines dark, dramatic backgrounds with golden accents to create a Hollywood-level aesthetic.

### Core Principles

- **Visual Storytelling**: Every element tells part of the brand story
- **Emotional Impact**: Design choices evoke specific emotions
- **Premium Quality**: High-end, sophisticated aesthetics
- **Performance First**: Beautiful design that doesn't compromise speed
- **Accessibility**: Inclusive design for all users

---

## 🎨 Color System

### Primary Colors

#### Deep Blue (#0a0a0f)

- **Usage**: Primary backgrounds, main text, dramatic elements
- **CSS Variable**: `--deep-blue`
- **Purpose**: Creates the cinematic, dramatic atmosphere
- **Accessibility**: Meets WCAG AA standards for contrast

#### Dark Tone (#1a1a2e)

- **Usage**: Secondary backgrounds, cards, sections
- **CSS Variable**: `--dark-tone`
- **Purpose**: Creates depth and layering
- **Accessibility**: Good contrast for content areas

#### Mid Tone (#16213e)

- **Usage**: Card backgrounds, content sections
- **CSS Variable**: `--mid-tone`
- **Purpose**: Provides subtle contrast and depth
- **Accessibility**: Good contrast for text overlay

#### Light Tone (#0f3460)

- **Usage**: Accent backgrounds, highlights
- **CSS Variable**: `--light-tone`
- **Purpose**: Creates visual hierarchy
- **Accessibility**: Good contrast for content

### Golden Accent Colors

#### Golden Accent (#ffd700)

- **Usage**: Primary accent, CTAs, highlights, important elements
- **CSS Variable**: `--golden-accent`
- **Purpose**: Represents the golden hour lighting in cinema
- **Accessibility**: High contrast against dark backgrounds

#### Golden Subtle (#ffed4e)

- **Usage**: Hover states, secondary accents
- **CSS Variable**: `--golden-subtle`
- **Purpose**: Provides interactive feedback
- **Accessibility**: High contrast for interactive elements

#### Golden Dark (#b8860b)

- **Usage**: Active states, pressed buttons
- **CSS Variable**: `--golden-dark`
- **Purpose**: Provides visual feedback for interactions
- **Accessibility**: Good contrast for active states

#### Golden Glow (rgba(255, 215, 0, 0.1))

- **Usage**: Background effects, subtle highlights
- **CSS Variable**: `--golden-glow`
- **Purpose**: Creates cinematic atmosphere
- **Accessibility**: Subtle effect that doesn't interfere with readability

### Text Colors

#### Text Primary (#ffffff)

- **Usage**: Primary text on dark backgrounds
- **CSS Variable**: `--text-primary`
- **Purpose**: Provides clean contrast and readability
- **Accessibility**: Excellent contrast against dark backgrounds

#### Text Secondary (#e0e0e0)

- **Usage**: Secondary text, descriptions
- **CSS Variable**: `--text-secondary`
- **Purpose**: Creates visual hierarchy
- **Accessibility**: Good readability on dark backgrounds

#### Text Subtle (#b0b0b0)

- **Usage**: Muted text, secondary information
- **CSS Variable**: `--text-subtle`
- **Purpose**: Creates visual hierarchy without being harsh
- **Accessibility**: Adequate contrast for secondary content

#### Text Muted (#808080)

- **Usage**: Disabled text, very secondary information
- **CSS Variable**: `--text-muted`
- **Purpose**: Indicates inactive or less important content
- **Accessibility**: Minimum contrast for tertiary content

### Interactive Colors

#### Hover Golden (#ffed4e)

- **Usage**: Button hover states, interactive elements
- **CSS Variable**: `--hover-golden`
- **Purpose**: Provides clear hover feedback
- **Accessibility**: High contrast for interactive feedback

#### Active Golden (#b8860b)

- **Usage**: Button active states, pressed elements
- **CSS Variable**: `--active-golden`
- **Purpose**: Provides clear active state feedback
- **Accessibility**: Good contrast for active states

#### Focus Ring (rgba(255, 215, 0, 0.3))

- **Usage**: Focus indicators for accessibility
- **CSS Variable**: `--focus-ring`
- **Purpose**: Provides clear focus indication
- **Accessibility**: Meets WCAG focus indicator requirements

### Background Gradients

#### Gradient Dark (linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%))

- **Usage**: Main background, hero sections
- **CSS Variable**: `--gradient-dark`
- **Purpose**: Creates cinematic depth and atmosphere
- **Accessibility**: High contrast for content overlay

#### Gradient Card (linear-gradient(145deg, #1a1a2e 0%, #16213e 100%))

- **Usage**: Card backgrounds, content sections
- **CSS Variable**: `--gradient-card`
- **Purpose**: Creates elegant card styling
- **Accessibility**: Good contrast for card content

#### Gradient Golden (linear-gradient(135deg, #ffd700 0%, #ffed4e 100%))

- **Usage**: Button backgrounds, accent elements
- **CSS Variable**: `--gradient-golden`
- **Purpose**: Creates premium button styling
- **Accessibility**: High contrast for important elements

### Shadows and Effects

#### Shadow Card (0 8px 32px rgba(0, 0, 0, 0.3))

- **Usage**: Card shadows, depth effects
- **CSS Variable**: `--shadow-card`
- **Purpose**: Creates depth and separation
- **Accessibility**: Subtle effect that doesn't interfere with content

#### Shadow Golden (0 4px 20px rgba(255, 215, 0, 0.2))

- **Usage**: Golden element shadows
- **CSS Variable**: `--shadow-golden`
- **Purpose**: Creates premium glow effects
- **Accessibility**: Subtle effect for visual enhancement

#### Shadow Hover (0 12px 40px rgba(0, 0, 0, 0.4))

- **Usage**: Hover state shadows
- **CSS Variable**: `--shadow-hover`
- **Purpose**: Provides enhanced hover feedback
- **Accessibility**: Clear visual feedback for interactions

### Border Colors

#### Border Subtle (rgba(255, 255, 255, 0.1))

- **Usage**: Subtle borders, separators
- **CSS Variable**: `--border-subtle`
- **Purpose**: Creates gentle separation
- **Accessibility**: Subtle effect that doesn't interfere with content

#### Border Golden (rgba(255, 215, 0, 0.3))

- **Usage**: Golden borders, accent elements
- **CSS Variable**: `--border-golden`
- **Purpose**: Creates premium border styling
- **Accessibility**: Good contrast for accent borders

#### Border Card (rgba(255, 255, 255, 0.05))

- **Usage**: Card borders, content boundaries
- **CSS Variable**: `--border-card`
- **Purpose**: Creates subtle card boundaries
- **Accessibility**: Very subtle effect for visual separation

---

## 📝 Typography System

### Primary Fonts

#### Cinzel Font

- **Usage**: Headings, dramatic elements, cinematic titles
- **Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **CSS Variable**: `--font-cinematic`
- **Purpose**: Adds cinematic grandeur and sophistication
- **Fallback**: serif

#### Montserrat Font

- **Usage**: Body text, UI elements, general content
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **CSS Variable**: `--font-body`
- **Purpose**: Provides clean, modern readability
- **Fallback**: sans-serif

#### Playfair Display Font

- **Usage**: Display text, elegant headings, premium content
- **Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **CSS Variable**: `--font-display`
- **Purpose**: Adds sophistication and elegance
- **Fallback**: serif

### Typography Classes

#### Cinematic Heading

```css
.cinematic-heading {
  font-family: var(--font-cinematic);
  font-weight: 600;
  letter-spacing: 0.05em;
}
```

#### Premium Text

```css
.premium-text {
  font-family: var(--font-display);
  font-weight: 400;
  line-height: 1.6;
}
```

#### Golden Text

```css
.golden-text {
  background: var(--gradient-golden);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Typographic Scale

#### Headings

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-cinematic);
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 1.2;
}
```

#### Body Text

```css
body {
  font-family: var(--font-body);
  line-height: 1.6;
}
```

### Line Heights

- **Headings**: 1.2
- **Body Text**: 1.6
- **UI Elements**: 1.4

---

## 🧩 Component Library

### Premium Card Styles

```css
.premium-card {
  background: var(--gradient-card);
  border: 1px solid var(--border-card);
  box-shadow: var(--shadow-card);
  transition: var(--transition-smooth);
}

.premium-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
  border-color: var(--border-golden);
}
```

### Cinematic Button Styles

```css
.cinematic-button {
  background: var(--gradient-golden);
  color: var(--deep-blue);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: var(--transition-smooth);
  box-shadow: var(--shadow-golden);
  font-family: var(--font-body);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.cinematic-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 215, 0, 0.3);
}

.cinematic-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--focus-ring);
}
```

### Cinematic Effects

```css
.cinematic-glow {
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
}

.cinematic-border {
  border: 1px solid var(--border-golden);
  background: linear-gradient(
    145deg,
    rgba(255, 215, 0, 0.05) 0%,
    transparent 100%
  );
}
```

### Hero Backgrounds

```css
.hero-bg {
  background-image: linear-gradient(
    to top,
    var(--deep-blue) 0%,
    rgba(10, 10, 15, 0.5) 50%,
    transparent 100%
  );
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(10, 10, 15, 0.7);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}
```

---

## 📐 Layout System

### Spacing Scale

```css
/* Spacing Variables */
--spacing-xs: 0.5rem; /* 8px */
--spacing-sm: 1rem; /* 16px */
--spacing-md: 1.5rem; /* 24px */
--spacing-lg: 2rem; /* 32px */
--spacing-xl: 3rem; /* 48px */
--spacing-2xl: 4rem; /* 64px */
```

### Border Radius

```css
/* Border Radius Variables */
--radius-sm: 0.375rem; /* 6px */
--radius-md: 0.5rem; /* 8px */
--radius-lg: 0.75rem; /* 12px */
--radius-xl: 1rem; /* 16px */
--radius-2xl: 1.5rem; /* 24px */
```

### Transitions

```css
/* Transition Variables */
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-fast: all 0.15s ease-in-out;
--transition-slow: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
```

### Z-Index Scale

```css
/* Z-Index Variables */
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-popover: 1060;
--z-tooltip: 1070;
```

---

## 🎭 Animation System

### Framer Motion Integration

#### Basic Animation

```typescript
import { motion } from 'framer-motion';

const AnimatedComponent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Content
  </motion.div>
);
```

#### Hover Animations

```typescript
const HoverComponent = () => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    Interactive Content
  </motion.div>
);
```

#### Page Transitions

```typescript
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);
```

### Animation Guidelines

#### Performance

- **GPU Acceleration**: Use transform and opacity for smooth animations
- **Duration**: 0.2-0.5s for micro-interactions, 0.5-1s for page transitions
- **Easing**: Use cubic-bezier for natural motion
- **Reduced Motion**: Respect user preferences for reduced motion

#### Accessibility

- **Screen Readers**: Ensure animations don't interfere with screen readers
- **Focus Management**: Maintain focus during animations
- **Motion Preferences**: Respect `prefers-reduced-motion`

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
/* Base styles for mobile */
.element {
  padding: var(--spacing-sm);
  font-size: 1rem;
}

/* Tablet (768px and up) */
@media (min-width: 768px) {
  .element {
    padding: var(--spacing-md);
    font-size: 1.125rem;
  }
}

/* Desktop (1024px and up) */
@media (min-width: 1024px) {
  .element {
    padding: var(--spacing-lg);
    font-size: 1.25rem;
  }
}

/* Large Desktop (1280px and up) */
@media (min-width: 1280px) {
  .element {
    padding: var(--spacing-xl);
    font-size: 1.5rem;
  }
}
```

### Grid System

#### Flexbox Layout

```css
.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    gap: var(--spacing-lg);
  }
}
```

#### CSS Grid Layout

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## ♿ Accessibility Standards

### Color Contrast

- **Primary Text**: 4.5:1 minimum contrast ratio
- **Secondary Text**: 3:1 minimum contrast ratio
- **Interactive Elements**: 4.5:1 minimum contrast ratio
- **Focus Indicators**: Clear, visible focus rings

### Typography

- **Minimum Font Size**: 16px for body text
- **Line Height**: 1.6 for body text, 1.2 for headings
- **Letter Spacing**: 0.05em for headings
- **Font Weight**: 400 for body, 600+ for headings

### Interactive Elements

- **Button Size**: Minimum 44px touch target
- **Focus States**: Clear focus indicators
- **Hover States**: Visible hover feedback
- **Active States**: Clear active state indication

### Semantic HTML

```html
<!-- Proper heading hierarchy -->
<h1>Main Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>

<!-- Proper button semantics -->
<button type="button" aria-label="Submit form">Submit</button>

<!-- Proper form labels -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required />
```

---

## 🎯 Implementation Guidelines

### CSS Variables Usage

Always use CSS variables for colors, spacing, and typography:

```css
/* ✅ Correct */
.element {
  color: var(--text-primary);
  background: var(--gradient-card);
  padding: var(--spacing-md);
  font-family: var(--font-body);
}

/* ❌ Incorrect */
.element {
  color: #ffffff;
  background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
  padding: 1.5rem;
  font-family: 'Montserrat', sans-serif;
}
```

### Component Structure

Follow the established component patterns:

```css
/* Card Component */
.premium-card {
  background: var(--gradient-card);
  border: 1px solid var(--border-card);
  box-shadow: var(--shadow-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: var(--transition-smooth);
}

/* Button Component */
.cinematic-button {
  background: var(--gradient-golden);
  color: var(--deep-blue);
  border: none;
  border-radius: var(--radius-md);
  padding: var(--spacing-sm) var(--spacing-md);
  font-weight: 600;
  transition: var(--transition-smooth);
  box-shadow: var(--shadow-golden);
}
```

### Responsive Design

Use mobile-first approach with Tailwind CSS:

```css
/* Mobile First */
.element {
  padding: var(--spacing-sm);
  font-size: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .element {
    padding: var(--spacing-md);
    font-size: 1.125rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    padding: var(--spacing-lg);
    font-size: 1.25rem;
  }
}
```

---

## 🔧 Development Tools

### Design Tokens

- **CSS Variables**: Centralized design tokens
- **TypeScript**: Type-safe design system
- **Tailwind Config**: Extended with custom design system
- **Storybook**: Component documentation and testing

### Quality Assurance

- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **TypeScript**: Type safety
- **Testing**: Component testing with Jest and RTL

---

_Last Updated: December 2024_
_Version: 5.0 - Current Implementation_
_Status: Production Ready_
