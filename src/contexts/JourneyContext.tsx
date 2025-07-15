'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface IJourneyContext {
  selectedPath: string | null;
  setSelectedPath: (path: string | null) => void;
  isJourneyStarted: boolean;
  setIsJourneyStarted: (started: boolean) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  resetJourney: () => void;
}

const JourneyContext = createContext<IJourneyContext | undefined>(undefined);

export function JourneyProvider({ children }: { children: React.ReactNode }) {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [isJourneyStarted, setIsJourneyStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // Load journey state from localStorage on mount
  useEffect(() => {
    const savedPath = localStorage.getItem('selectedJourneyPath');
    const savedJourneyStarted = localStorage.getItem('journeyStarted');

    if (savedPath) {
      setSelectedPath(savedPath);
    }

    if (savedJourneyStarted === 'true') {
      setIsJourneyStarted(true);
    }
  }, []);

  // Save journey state to localStorage when it changes
  useEffect(() => {
    if (selectedPath) {
      localStorage.setItem('selectedJourneyPath', selectedPath);
    } else {
      localStorage.removeItem('selectedJourneyPath');
    }
  }, [selectedPath]);

  useEffect(() => {
    localStorage.setItem('journeyStarted', isJourneyStarted.toString());
  }, [isJourneyStarted]);

  const resetJourney = () => {
    setSelectedPath(null);
    setIsJourneyStarted(false);
    setCurrentStep(0);
    localStorage.removeItem('selectedJourneyPath');
    localStorage.removeItem('journeyStarted');
  };

  const value: IJourneyContext = {
    selectedPath,
    setSelectedPath,
    isJourneyStarted,
    setIsJourneyStarted,
    currentStep,
    setCurrentStep,
    resetJourney,
  };

  return (
    <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>
  );
}

export function useJourney() {
  const context = useContext(JourneyContext);
  if (context === undefined) {
    throw new Error('useJourney must be used within a JourneyProvider');
  }
  return context;
}
