// Enhanced Cinematic Templates for V2 Prototype

export interface ICinematicTemplate {
  id: string;
  title: string;
  style: string;
  cinematicStyle: string;
  shots: string[];
  music: string;
  colorGrading: string;
  duration: string;
  targetEmotion: string;
  visualEffects: string[];
  cameraMovements: string[];
  lightingSetup: string;
  assets: string[];
  copyVariations: string[];
}

export interface IPersonalityProfile {
  id: string;
  name: string;
  traits: string[];
  visualStyle: string;
  colorPalette: string[];
  typography: string;
  animationStyle: string;
  copyTone: string;
}

export interface ISceneProfile {
  id: string;
  name: string;
  description: string;
  cinematicStyle: string;
  targetEmotion: string;
  visualElements: string[];
  audioElements: string[];
  pacing: string;
  transitions: string[];
}

// Sophisticated Cinematic Templates
export const cinematicTemplates: { [key: string]: ICinematicTemplate } = {
  'brand-story': {
    id: 'brand-story',
    title: 'Brand Story Documentary',
    style: 'Documentary-style with emotional storytelling',
    cinematicStyle: 'Documentary-style with emotional storytelling',
    shots: [
      'Close-up interviews with authentic expressions',
      'B-roll montage of brand moments',
      'Behind-the-scenes team interactions',
      'Product/service in real-world context',
      'Emotional customer testimonials',
    ],
    music: 'Inspirational, building tension with emotional peaks',
    colorGrading: 'Warm, cinematic golds with rich contrast',
    duration: '2-3 minutes',
    targetEmotion: 'Trust and connection',
    visualEffects: [
      'Subtle film grain overlay',
      'Warm color temperature',
      'Soft vignette effect',
      'Smooth motion blur',
    ],
    cameraMovements: [
      'Steady tracking shots',
      'Gentle handheld movement',
      'Slow zoom reveals',
      'Emotional close-ups',
    ],
    lightingSetup: 'Natural, warm lighting with soft shadows',
    assets: [
      '/assets/brand-stories/brand-stories_corporate_1.jpg',
      '/assets/brand-stories/brand-stories_team_1.jpg',
      '/assets/brand-stories/brand-stories_business_1.jpg',
      '/assets/testimonials/testimonials_professional_1.jpg',
    ],
    copyVariations: [
      'Weaving together the threads of your brand story',
      'Capturing the essence of your journey',
      'Telling the story that connects with hearts',
      'Documenting the moments that define you',
    ],
  },

  'product-showcase': {
    id: 'product-showcase',
    title: 'High-End Product Commercial',
    style: 'High-end commercial with dynamic angles',
    cinematicStyle: 'High-end commercial with dynamic angles',
    shots: [
      'Product close-ups with dramatic lighting',
      'Lifestyle scenes with target audience',
      'Technical detail shots',
      'Aspirational lifestyle moments',
      'Brand integration scenes',
    ],
    music: 'Upbeat, aspirational with driving rhythm',
    colorGrading: 'Vibrant, saturated with high contrast',
    duration: '1-2 minutes',
    targetEmotion: 'Desire and aspiration',
    visualEffects: [
      'Sharp, crisp focus',
      'Vibrant color saturation',
      'Dynamic lighting effects',
      'Smooth motion graphics',
    ],
    cameraMovements: [
      'Dynamic tracking shots',
      'Smooth crane movements',
      'Quick cuts and transitions',
      'Hero product reveals',
    ],
    lightingSetup: 'Dramatic, high-contrast lighting',
    assets: [
      '/assets/product-showcases/product-showcases_product_1.jpg',
      '/assets/product-showcases/product-showcases_lifestyle_1.jpg',
      '/assets/product-showcases/product-showcases_commercial_1.jpg',
      '/assets/product-showcases/product-showcases_advertising_1.jpg',
    ],
    copyVariations: [
      'Showcasing excellence in every frame',
      'Where innovation meets aspiration',
      'Crafting desire through visual storytelling',
      'Elevating your product to art',
    ],
  },

  'event-coverage': {
    id: 'event-coverage',
    title: 'Cinematic Event Documentary',
    style: 'Cinematic documentary with real-time energy',
    cinematicStyle: 'Cinematic documentary with real-time energy',
    shots: [
      'Wide establishing shots of venue',
      'Crowd reactions and interactions',
      'Speaker presentations with dynamic angles',
      'Behind-the-scenes preparation',
      'Emotional moments and connections',
    ],
    music: 'Energetic, building excitement with emotional peaks',
    colorGrading: 'Dynamic, with warm highlights and cool shadows',
    duration: '3-4 minutes',
    targetEmotion: 'Excitement and engagement',
    visualEffects: [
      'Dynamic color grading',
      'Motion blur for energy',
      'Split-screen moments',
      'Time-lapse sequences',
    ],
    cameraMovements: [
      'Handheld documentary style',
      'Quick pans and tilts',
      'Steadicam smooth movements',
      'Dynamic crowd tracking',
    ],
    lightingSetup: 'Mixed lighting with dramatic contrasts',
    assets: [
      '/assets/event-coverage/event-coverage_event_1.jpg',
      '/assets/event-coverage/event-coverage_conference_1.jpg',
      '/assets/event-coverage/event-coverage_meeting_1.jpg',
      '/assets/event-coverage/event-coverage_presentation_1.jpg',
    ],
    copyVariations: [
      'Capturing the energy of live moments',
      'Where stories come to life',
      'Documenting the magic of connection',
      'Preserving memories in motion',
    ],
  },

  'testimonial-story': {
    id: 'testimonial-story',
    title: 'Intimate Portrait Documentary',
    style: 'Intimate portrait-style with authentic moments',
    cinematicStyle: 'Intimate portrait-style with authentic moments',
    shots: [
      'Close-up interview portraits',
      'Authentic behind-the-scenes moments',
      'Emotional reaction shots',
      'Lifestyle integration scenes',
      'Success story visualizations',
    ],
    music: 'Intimate, acoustic with emotional depth',
    colorGrading: 'Natural, warm with soft contrast',
    duration: '2-3 minutes',
    targetEmotion: 'Trust and authenticity',
    visualEffects: [
      'Soft, natural lighting',
      'Gentle color grading',
      'Shallow depth of field',
      'Smooth, intimate movements',
    ],
    cameraMovements: [
      'Intimate close-ups',
      'Gentle handheld movement',
      'Slow, contemplative pans',
      'Emotional reaction shots',
    ],
    lightingSetup: 'Soft, natural lighting with warm tones',
    assets: [
      '/assets/testimonial-stories/testimonial-stories_interview_1.jpg',
      '/assets/testimonial-stories/testimonial-stories_portrait_1.jpg',
      '/assets/testimonial-stories/testimonial-stories_professional_1.jpg',
      '/assets/testimonial-stories/testimonial-stories_success_1.jpg',
    ],
    copyVariations: [
      'Sharing authentic stories of transformation',
      'Where real people tell real stories',
      'Capturing the human side of success',
      'Building trust through authentic voices',
    ],
  },
};

// Personality Profiles for Dynamic Content
export const personalityProfiles: { [key: string]: IPersonalityProfile } = {
  professional: {
    id: 'professional',
    name: 'Professional & Trustworthy',
    traits: ['Reliable', 'Experienced', 'Trustworthy', 'Established'],
    visualStyle: 'Clean, corporate, sophisticated',
    colorPalette: ['#1e40af', '#f59e0b', '#374151', '#ffffff'],
    typography: 'Clean, professional sans-serif',
    animationStyle: 'Smooth, professional transitions',
    copyTone: 'Confident, authoritative, trustworthy',
  },

  creative: {
    id: 'creative',
    name: 'Creative & Artistic',
    traits: ['Innovative', 'Artistic', 'Visionary', 'Expressive'],
    visualStyle: 'Bold, artistic, experimental',
    colorPalette: ['#8b5cf6', '#ec4899', '#f59e0b', '#000000'],
    typography: 'Creative, expressive fonts',
    animationStyle: 'Dynamic, artistic movements',
    copyTone: 'Inspirational, creative, visionary',
  },

  innovative: {
    id: 'innovative',
    name: 'Innovative & Cutting-Edge',
    traits: ['Modern', 'Tech-savvy', 'Forward-thinking', 'Dynamic'],
    visualStyle: 'Modern, tech-focused, sleek',
    colorPalette: ['#10b981', '#3b82f6', '#6366f1', '#ffffff'],
    typography: 'Modern, tech-inspired fonts',
    animationStyle: 'Sharp, tech-driven animations',
    copyTone: 'Forward-thinking, innovative, dynamic',
  },

  authentic: {
    id: 'authentic',
    name: 'Authentic & Genuine',
    traits: ['Real', 'Honest', 'Relatable', 'Down-to-earth'],
    visualStyle: 'Natural, documentary-style, honest',
    colorPalette: ['#6b7280', '#f59e0b', '#374151', '#ffffff'],
    typography: 'Natural, readable fonts',
    animationStyle: 'Natural, documentary movements',
    copyTone: 'Honest, relatable, genuine',
  },
};

// Scene Profiles for Enhanced Storytelling
export const sceneProfiles: { [key: string]: ISceneProfile } = {
  'brand-story': {
    id: 'brand-story',
    name: 'Brand Story',
    description: "Tell your brand's unique story",
    cinematicStyle: 'Documentary-style with emotional storytelling',
    targetEmotion: 'Trust and connection',
    visualElements: [
      'Authentic interviews',
      'Behind-the-scenes moments',
      'Brand heritage visuals',
      'Team interactions',
      'Customer testimonials',
    ],
    audioElements: [
      'Inspirational background music',
      'Natural interview audio',
      'Ambient sound design',
      'Emotional sound effects',
    ],
    pacing: 'Slow, contemplative, building emotional connection',
    transitions: [
      'Smooth crossfades',
      'Gentle dissolves',
      'Emotional cuts',
      'Story-driven sequences',
    ],
  },

  'product-showcase': {
    id: 'product-showcase',
    name: 'Product Showcase',
    description: 'Highlight your products with cinematic flair',
    cinematicStyle: 'High-end commercial with dynamic angles',
    targetEmotion: 'Desire and aspiration',
    visualElements: [
      'Product hero shots',
      'Lifestyle integration',
      'Technical specifications',
      'Aspirational moments',
      'Brand positioning',
    ],
    audioElements: [
      'Upbeat commercial music',
      'Product sound effects',
      'Dynamic audio transitions',
      'Aspirational sound design',
    ],
    pacing: 'Dynamic, energetic, building desire',
    transitions: [
      'Sharp cuts',
      'Dynamic movements',
      'Product reveals',
      'Aspirational sequences',
    ],
  },

  'event-coverage': {
    id: 'event-coverage',
    name: 'Event Coverage',
    description: 'Capture the energy and emotion of your events',
    cinematicStyle: 'Cinematic documentary with real-time energy',
    targetEmotion: 'Excitement and engagement',
    visualElements: [
      'Event establishing shots',
      'Crowd reactions',
      'Speaker presentations',
      'Behind-the-scenes',
      'Emotional moments',
    ],
    audioElements: [
      'Energetic event music',
      'Crowd ambience',
      'Speaker audio',
      'Dynamic sound design',
    ],
    pacing: 'Energetic, dynamic, capturing live energy',
    transitions: [
      'Quick cuts',
      'Dynamic movements',
      'Energy-driven sequences',
      'Live event flow',
    ],
  },

  'testimonial-story': {
    id: 'testimonial-story',
    name: 'Testimonial Story',
    description: 'Share authentic customer experiences',
    cinematicStyle: 'Intimate portrait-style with authentic moments',
    targetEmotion: 'Trust and authenticity',
    visualElements: [
      'Intimate interviews',
      'Authentic moments',
      'Success stories',
      'Emotional reactions',
      'Real customer experiences',
    ],
    audioElements: [
      'Intimate background music',
      'Natural interview audio',
      'Emotional sound design',
      'Authentic ambience',
    ],
    pacing: 'Intimate, contemplative, building trust',
    transitions: [
      'Gentle dissolves',
      'Intimate movements',
      'Emotional cuts',
      'Authentic sequences',
    ],
  },
};

interface IStoryInputs {
  projectType: string;
  targetAudience: string;
  brandPersonality: string;
  desiredOutcome: string;
}

// Enhanced AI-like Generation Functions
export const generatePersonalizedContent = (
  template: ICinematicTemplate,
  personality: IPersonalityProfile,
  inputs: IStoryInputs
) => {
  const variations = {
    title: [
      `Cinematic ${inputs.projectType} for ${inputs.targetAudience}`,
      `${personality.name} ${template.title}`,
      `A ${template.style.toLowerCase()} experience`,
      `Your ${inputs.projectType} story`,
    ],

    description: [
      `A ${template.style.toLowerCase()} production that captures the essence of your ${inputs.brandPersonality} brand personality while achieving your goal of ${inputs.desiredOutcome}.`,
      `We've crafted a ${template.cinematicStyle.toLowerCase()} experience that speaks directly to your ${inputs.targetAudience} audience.`,
      `This ${template.duration} production reflects your ${inputs.brandPersonality} approach and drives toward ${inputs.desiredOutcome}.`,
      `A ${template.targetEmotion.toLowerCase()} journey that connects your ${inputs.projectType} with your audience.`,
    ],

    keyFeatures: [
      `Tailored for ${inputs.targetAudience}`,
      `${inputs.brandPersonality} brand expression`,
      `${template.cinematicStyle}`,
      `${template.duration} runtime`,
      `${template.targetEmotion} focus`,
      `${personality.visualStyle} visual approach`,
      `${template.music} soundtrack`,
      `${template.colorGrading} color grading`,
    ],
  };

  return {
    title:
      variations.title[Math.floor(Math.random() * variations.title.length)],
    description:
      variations.description[
        Math.floor(Math.random() * variations.description.length)
      ],
    keyFeatures: variations.keyFeatures,
    template,
    personality,
  };
};

export const getTemplateByScene = (sceneId: string) => {
  return cinematicTemplates[sceneId] || cinematicTemplates['brand-story'];
};

export const getPersonalityByInput = (personality: string) => {
  const personalityMap: { [key: string]: string } = {
    professional: 'professional',
    creative: 'creative',
    innovative: 'innovative',
    authentic: 'authentic',
    trustworthy: 'professional',
    artistic: 'creative',
    modern: 'innovative',
    genuine: 'authentic',
  };

  const profileId = personalityMap[personality.toLowerCase()] || 'professional';
  return personalityProfiles[profileId];
};

export const getSceneProfile = (sceneId: string) => {
  return sceneProfiles[sceneId] || sceneProfiles['brand-story'];
};
