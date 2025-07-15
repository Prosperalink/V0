'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Film, Play, Sparkles, Type, Video } from 'lucide-react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {
  ICinematicTemplate,
  IPersonalityProfile,
  generatePersonalizedContent,
  getPersonalityByInput,
  getSceneProfile,
  getTemplateByScene,
} from '@/lib/cinematic-templates';

interface IScene {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  preview: string;
  cinematicStyle: string;
  targetEmotion: string;
}

interface IStoryInput {
  projectType: string;
  targetAudience: string;
  brandPersonality: string;
  desiredOutcome: string;
}

interface ITrailerData {
  title: string;
  description: string;
  cinematicStyle: string;
  targetEmotion: string;
  keyFeatures: string[];
  estimatedDuration: string;
  productionValue: string;
  visualElements: string[];
  audioElements: string[];
  personalityTraits: string[];
  template: ICinematicTemplate;
  personality: IPersonalityProfile;
}

const scenes: IScene[] = [
  {
    id: 'brand-story',
    title: 'Brand Story',
    description: "Tell your brand's unique story",
    icon: Type,
    preview: 'A compelling narrative that connects with your audience',
    cinematicStyle: 'Documentary-style with emotional storytelling',
    targetEmotion: 'Trust and connection',
  },
  {
    id: 'product-showcase',
    title: 'Product Showcase',
    description: 'Highlight your products with cinematic flair',
    icon: Video,
    preview: 'Stunning visuals that make your products shine',
    cinematicStyle: 'High-end commercial with dynamic angles',
    targetEmotion: 'Desire and aspiration',
  },
  {
    id: 'event-coverage',
    title: 'Event Coverage',
    description: 'Capture the energy and emotion of your events',
    icon: Film,
    preview: 'Immersive coverage that brings events to life',
    cinematicStyle: 'Cinematic documentary with real-time energy',
    targetEmotion: 'Excitement and engagement',
  },
  {
    id: 'testimonial-story',
    title: 'Testimonial Story',
    description: 'Share authentic customer experiences',
    icon: Sparkles,
    preview: 'Real stories that build trust and credibility',
    cinematicStyle: 'Intimate portrait-style with authentic moments',
    targetEmotion: 'Trust and authenticity',
  },
];

export default function DirectorsInterface() {
  const [cameraAngle, setCameraAngle] = useState(0);
  const [ambientLight, setAmbientLight] = useState(50);
  const [spotlightIntensity, setSpotlightIntensity] = useState(75);
  const [activeScene, setActiveScene] = useState<string>('');
  const [storyInputs, setStoryInputs] = useState<IStoryInput>({
    projectType: '',
    targetAudience: '',
    brandPersonality: '',
    desiredOutcome: '',
  });
  const [previewContent, setPreviewContent] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [selectedService, setSelectedService] = useState<string>('');
  const [mounted, setMounted] = useState(false);
  const [floatingParticles, setFloatingParticles] = useState<any[]>([]);

  // Set mounted state on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate particles only on client side
  useEffect(() => {
    if (!mounted) return;

    const particles = [...Array(20)].map((_, i) => ({
      key: `director-particle-${i}-${Math.random()}`,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 3,
    }));
    setFloatingParticles(particles);
  }, [mounted]);

  // Load selected service data on component mount
  useEffect(() => {
    const selectedServiceData = localStorage.getItem('selectedService');
    if (selectedServiceData) {
      try {
        const serviceData = JSON.parse(selectedServiceData);
        setSelectedService(serviceData.id);

        // Auto-populate form with suggested values
        setStoryInputs({
          projectType: serviceData.suggestedProjectType || '',
          targetAudience: serviceData.suggestedAudience || '',
          brandPersonality: serviceData.suggestedPersonality || '',
          desiredOutcome: serviceData.suggestedOutcome || '',
        });

        // Auto-select appropriate scene based on service
        const sceneMapping: { [key: string]: string } = {
          'production-video': 'brand-story',
          'production-cinematographique': 'product-showcase',
          'motion-design': 'product-showcase',
          'audio-podcasts': 'testimonial-story',
          photographie: 'product-showcase',
          'design-graphique': 'brand-story',
          'creation-sites': 'product-showcase',
          'marketing-digital': 'brand-story',
          'services-specialises': 'event-coverage',
        };

        const suggestedScene = sceneMapping[serviceData.id];
        if (suggestedScene) {
          setActiveScene(suggestedScene);
        }
      } catch {
        // Error parsing selected service data - continue without auto-population
      }
    }
  }, []);

  // Performance optimizations
  const handleCameraChange = useCallback((angle: number) => {
    setCameraAngle(angle);
  }, []);

  const handleLightingChange = useCallback(
    (type: 'ambient' | 'spotlight', value: number) => {
      if (type === 'ambient') {
        setAmbientLight(value);
      } else {
        setSpotlightIntensity(value);
      }
    },
    []
  );

  const handleStoryInput = useCallback(
    (field: keyof IStoryInput, value: string) => {
      setStoryInputs(prev => ({
        ...prev,
        [field]: value,
      }));
    },
    []
  );

  const memoizedScenes = useMemo(() => scenes, []);

  // Enhanced AI trailer generation with sophisticated templates
  const generateTrailer = async () => {
    setIsGenerating(true);
    setGenerationProgress(0);

    // Simulate AI generation with progress using requestAnimationFrame
    const progressSteps = [
      'Analyzing your story inputs...',
      'Crafting cinematic narrative...',
      'Optimizing visual elements...',
      'Finalizing your trailer...',
    ];

    for (let i = 0; i < progressSteps.length; i++) {
      await new Promise<void>(resolve => {
        requestAnimationFrame(() => {
          setGenerationProgress((i + 1) * 25);
          resolve();
        });
      });
    }

    // Generate sophisticated trailer content using templates
    const personality = getPersonalityByInput(storyInputs);
    const sceneProfile = getSceneProfile(activeScene);
    const template = getTemplateByScene(activeScene);

    const trailerData: ITrailerData = {
      title: `Your ${sceneProfile.title} Trailer`,
      description: generatePersonalizedContent(storyInputs, personality),
      cinematicStyle: sceneProfile.cinematicStyle,
      targetEmotion: sceneProfile.targetEmotion,
      keyFeatures: template.keyFeatures,
      estimatedDuration: template.estimatedDuration,
      productionValue: template.productionValue,
      visualElements: template.visualElements,
      audioElements: template.audioElements,
      personalityTraits: personality.traits,
      template,
      personality,
    };

    const trailerHTML = generateTrailerHTML(trailerData);
    setPreviewContent(trailerHTML);
    setIsGenerating(false);
    setGenerationProgress(0);
  };

  const getCameraAngleName = (angle: number) => {
    if (angle < 30) return 'Low Angle';
    if (angle < 60) return 'Medium Low';
    if (angle < 90) return 'Eye Level';
    if (angle < 120) return 'Medium High';
    return 'High Angle';
  };

  const generateTrailerHTML = (data: ITrailerData) => {
    return `
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-cinematic-gold-primary">${data.title}</h3>
        <p class="text-gray-300">${data.description}</p>
        <div class="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span class="text-cinematic-gold-primary font-semibold">Style:</span>
            <p class="text-gray-400">${data.cinematicStyle}</p>
          </div>
          <div>
            <span class="text-cinematic-gold-primary font-semibold">Emotion:</span>
            <p class="text-gray-400">${data.targetEmotion}</p>
          </div>
          <div>
            <span class="text-cinematic-gold-primary font-semibold">Duration:</span>
            <p class="text-gray-400">${data.estimatedDuration}</p>
          </div>
          <div>
            <span class="text-cinematic-gold-primary font-semibold">Value:</span>
            <p class="text-gray-400">${data.productionValue}</p>
          </div>
        </div>
      </div>
    `;
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-cinematic-blue-deep via-cinematic-blue-rich to-cinematic-blue-deep overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-spotlight opacity-20" />

      {/* Section Header */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Director's Interface
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Take control of your cinematic experience. Configure camera angles,
            adjust lighting, and craft your story with professional precision.
          </p>
        </motion.div>
      </div>

      {/* Main Interface */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Control Panel */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="director-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Cinematic Controls
              </h3>

              {/* Camera Angle Control */}
              <div className="mb-8">
                <label className="block text-white text-sm font-medium mb-2">
                  Camera Angle: {getCameraAngleName(cameraAngle)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="180"
                  value={cameraAngle}
                  onChange={e => handleCameraChange(Number(e.target.value))}
                  className="w-full slider"
                  aria-label="Camera Angle"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Low</span>
                  <span>Eye Level</span>
                  <span>High</span>
                </div>
              </div>

              {/* Lighting Controls */}
              <div className="mb-8">
                <div className="mb-4">
                  <label className="block text-white text-sm font-medium mb-2">
                    Ambient Light: {ambientLight}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={ambientLight}
                    onChange={e =>
                      handleLightingChange('ambient', Number(e.target.value))
                    }
                    className="w-full slider"
                    aria-label="Ambient Light"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Spotlight Intensity: {spotlightIntensity}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={spotlightIntensity}
                    onChange={e =>
                      handleLightingChange('spotlight', Number(e.target.value))
                    }
                    className="w-full slider"
                    aria-label="Spotlight Intensity"
                  />
                </div>
              </div>

              {/* Scene Selection */}
              <div className="mb-8">
                <label className="block text-white text-sm font-medium mb-4">
                  Choose Your Scene
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {memoizedScenes.map(scene => (
                    <motion.button
                      key={scene.id}
                      onClick={() => setActiveScene(scene.id)}
                      className={`p-3 rounded-lg border transition-all duration-300 ${
                        activeScene === scene.id
                          ? 'border-cinematic-gold-primary bg-cinematic-gold-primary/10'
                          : 'border-white/20 bg-white/5 hover:border-white/40'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-2">
                        <scene.icon className="w-4 h-4 text-cinematic-gold-primary" />
                        <span className="text-white text-sm font-medium">
                          {scene.title}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Story Inputs */}
              <div className="mb-8">
                <h4 className="text-white text-lg font-semibold mb-4">
                  Tell Your Story
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Brand video, Product launch, Event coverage"
                      value={storyInputs.projectType}
                      onChange={e =>
                        handleStoryInput('projectType', e.target.value)
                      }
                      aria-label="Project Type"
                      role="textbox"
                      className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cinematic-gold-primary transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Target Audience
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Young professionals, Small business owners"
                      value={storyInputs.targetAudience}
                      onChange={e =>
                        handleStoryInput('targetAudience', e.target.value)
                      }
                      aria-label="Target Audience"
                      role="textbox"
                      className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cinematic-gold-primary transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Brand Personality
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Professional, Creative, Innovative"
                      value={storyInputs.brandPersonality}
                      onChange={e =>
                        handleStoryInput('brandPersonality', e.target.value)
                      }
                      aria-label="Brand Personality"
                      role="textbox"
                      className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cinematic-gold-primary transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Desired Outcome
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Increase brand awareness, Drive sales"
                      value={storyInputs.desiredOutcome}
                      onChange={e =>
                        handleStoryInput('desiredOutcome', e.target.value)
                      }
                      aria-label="Desired Outcome"
                      role="textbox"
                      className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cinematic-gold-primary transition-all duration-300"
                    />
                  </div>
                </div>

                <motion.button
                  onClick={generateTrailer}
                  disabled={
                    isGenerating ||
                    !storyInputs.projectType ||
                    !storyInputs.targetAudience ||
                    !storyInputs.brandPersonality ||
                    !storyInputs.desiredOutcome
                  }
                  aria-label="Generate Cinematic Trailer"
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-cinematic-gold-primary to-cinematic-gold-bright text-white font-semibold rounded-lg hover:from-cinematic-gold-bright hover:to-cinematic-gold-primary transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isGenerating ? 1 : 1.05 }}
                  whileTap={{ scale: isGenerating ? 1 : 0.95 }}
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Generating... {generationProgress}%</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Generate Your Cinematic Trailer
                    </div>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Preview Screen */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="director-effect rounded-2xl p-8 h-full">
              <div className="text-center h-full flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {previewContent ? (
                    <motion.div
                      key="preview"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6 }}
                      className="space-y-6"
                    >
                      <div
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-white"
                        dangerouslySetInnerHTML={{ __html: previewContent }}
                      />
                      <motion.button
                        className="px-8 py-3 bg-gradient-to-r from-cinematic-blue-vibrant to-cinematic-blue-rich text-white font-semibold rounded-lg hover:from-cinematic-blue-rich hover:to-cinematic-blue-vibrant transform hover:scale-105 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Start Your Project
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                        <Video className="w-12 h-12 text-white/50" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">
                        Preview Screen
                      </h2>
                      <p className="text-gray-300">
                        Your personalized cinematic trailer will appear here
                        once generated
                      </p>
                      <div className="space-y-2 text-sm text-gray-400">
                        <p>• Configure your camera angles</p>
                        <p>• Adjust lighting settings</p>
                        <p>• Choose your scene</p>
                        <p>• Tell your story</p>
                        <p>• Generate your trailer</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted &&
          floatingParticles.map(p => (
            <motion.div
              key={p.key}
              className="absolute w-1 h-1 bg-cinematic-gold-primary rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
              }}
            />
          ))}
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #f59e0b;
          border-radius: 50%;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #f59e0b;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </section>
  );
}
