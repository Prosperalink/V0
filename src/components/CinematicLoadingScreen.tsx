'use client';

import { motion } from 'framer-motion';
import {
  Camera,
  Film,
  Pause,
  Play,
  Video,
  Volume2,
  VolumeX,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface LoadingStep {
  id: string;
  title: string;
  description: string;
  duration: number;
  icon: React.ReactNode;
}

interface CinematicLoadingScreenProps {
  onComplete?: () => void;
  steps?: LoadingStep[];
  showProgress?: boolean;
  autoPlay?: boolean;
}

export default function CinematicLoadingScreen({
  onComplete,
  steps = defaultSteps,
  showProgress = true,
  autoPlay = true,
}: CinematicLoadingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const currentLoadingStep = steps[currentStep];

  useEffect(() => {
    if (!isPlaying || !currentLoadingStep) return;

    const stepDuration = currentLoadingStep.duration;
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 100 / (stepDuration / 100);
        if (newProgress >= 100) {
          if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
            return 0;
          } else {
            setIsComplete(true);
            if (onComplete) {
              setTimeout(onComplete, 1000);
            }
            return 100;
          }
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [
    currentStep,
    isPlaying,
    currentLoadingStep?.duration,
    steps.length,
    onComplete,
  ]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleSkip = () => {
    setIsComplete(true);
    if (onComplete) {
      onComplete();
    }
  };

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-deep-blue z-50 flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
          className="text-center"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="w-24 h-24 bg-golden-accent rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Zap className="text-deep-blue" size={48} />
          </motion.div>
          <h2 className="text-3xl font-playfair font-bold text-golden-accent mb-4">
            Ready to Begin
          </h2>
          <p className="text-text-white text-lg">
            Your cinematic experience is about to start
          </p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-deep-blue z-50 overflow-hidden"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 20%, rgba(212,175,55,0.1), transparent 50%)',
                'radial-gradient(circle at 80% 80%, rgba(212,175,55,0.1), transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.1), transparent 50%)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full"
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-20 text-golden-accent/20"
        >
          <Film size={32} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-40 right-20 text-golden-accent/20"
        >
          <Camera size={32} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-40 left-1/4 text-golden-accent/20"
        >
          <Video size={32} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-golden-accent mb-4"
            animate={{
              textShadow: [
                '0 0 20px rgba(212,175,55,0.3)',
                '0 0 40px rgba(212,175,55,0.5)',
                '0 0 20px rgba(212,175,55,0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Orson Vision
          </motion.h1>
          <p className="text-xl text-text-white opacity-80">
            Cinematic Digital Solutions
          </p>
        </motion.div>

        {/* Current Step */}
        {currentLoadingStep && (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-8"
          >
            <motion.div
              className="text-golden-accent mb-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              {currentLoadingStep.icon}
            </motion.div>
            <h2 className="text-2xl font-playfair font-bold text-golden-accent mb-2">
              {currentLoadingStep.title}
            </h2>
            <p className="text-text-white max-w-md mx-auto">
              {currentLoadingStep.description}
            </p>
          </motion.div>
        )}

        {/* Progress Bar */}
        {showProgress && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-md mb-8"
          >
            <div className="flex justify-between text-sm text-text-subtle mb-2">
              <span>Loading...</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-2 bg-text-subtle/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-golden-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>
          </motion.div>
        )}

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePlayPause}
            className="p-3 bg-golden-accent/20 rounded-full text-golden-accent hover:bg-golden-accent/30 transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleMuteToggle}
            className="p-3 bg-golden-accent/20 rounded-full text-golden-accent hover:bg-golden-accent/30 transition-colors"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSkip}
            className="px-4 py-2 bg-golden-accent/20 text-golden-accent rounded-lg hover:bg-golden-accent/30 transition-colors"
          >
            Skip Intro
          </motion.button>
        </motion.div>

        {/* Step Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-8"
        >
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? 'bg-golden-accent scale-125'
                    : index < currentStep
                      ? 'bg-golden-accent/50'
                      : 'bg-text-subtle/30'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Loading Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="text-text-subtle text-sm">
            Crafting your cinematic experience with Hollywood-level precision
          </p>
        </motion.div>
      </div>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-blue/20 to-deep-blue/40 pointer-events-none" />
    </motion.div>
  );
}

// Default loading steps
const defaultSteps: LoadingStep[] = [
  {
    id: 'init',
    title: 'Initializing Cinematic Engine',
    description: 'Preparing the digital stage for your experience',
    duration: 2000,
    icon: <Zap size={32} />,
  },
  {
    id: 'assets',
    title: 'Loading Cinematic Assets',
    description: 'Gathering high-quality visual and interactive elements',
    duration: 2500,
    icon: <Film size={32} />,
  },
  {
    id: 'animations',
    title: 'Configuring Animations',
    description: 'Setting up smooth, cinematic transitions and effects',
    duration: 1800,
    icon: <Video size={32} />,
  },
  {
    id: 'optimization',
    title: 'Optimizing Performance',
    description: 'Ensuring lightning-fast loading and smooth interactions',
    duration: 1500,
    icon: <Camera size={32} />,
  },
  {
    id: 'ready',
    title: 'Ready for Action',
    description: 'Your cinematic experience is about to begin',
    duration: 1000,
    icon: <Zap size={32} />,
  },
];
