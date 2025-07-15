/**
 * Common TypeScript interfaces for Orson Vision
 * Provides type safety and consistency across the application
 */

// Navigation and Layout Types
export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
  children?: NavigationItem[];
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'video' | 'creative' | 'digital' | 'audio' | 'specialized';
  features?: string[];
  process?: string[];
  deliverables?: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
}

// Content Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
  tags: string[];
  category: string;
  featured?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
  company?: string;
  project?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  services: string[];
  results: string[];
  images: string[];
  publishedAt: string;
}

// Contact and Form Types
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  hours: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

// Team Types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  expertise: string[];
}

// Portfolio Types
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  client: string;
  services: string[];
  images: string[];
  video?: string;
  publishedAt: string;
  featured?: boolean;
}

// SEO and Meta Types
export interface MetaTags {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  twitterImage?: string;
  canonical?: string;
}

export interface SEOConfig {
  titleTemplate: string;
  defaultTitle: string;
  additionalMetaTags?: Array<{
    name: string;
    content: string;
  }>;
  additionalLinkTags?: Array<{
    rel: string;
    href: string;
    sizes?: string;
  }>;
}

// Animation and UI Types
export interface AnimationProps {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
  children: React.ReactNode;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface CardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  variant?: 'service' | 'testimonial' | 'blog' | 'portfolio';
  className?: string;
}

// Configuration Types
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  address: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface PerformanceTargets {
  lcp: number; // Largest Contentful Paint (ms)
  fid: number; // First Input Delay (ms)
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte (ms)
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Utility Types
export type Status = 'idle' | 'loading' | 'success' | 'error';

export interface LoadingState {
  status: Status;
  error?: string;
}

export type Locale = 'fr' | 'en' | 'ar';

export interface LocalizedContent {
  fr: string;
  en: string;
  ar?: string;
}

// Form Validation Types
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormState {
  isValid: boolean;
  errors: ValidationError[];
  touched: Record<string, boolean>;
}

// Analytics Types
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

export interface PageView {
  path: string;
  title: string;
  timestamp: number;
  referrer?: string;
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: number;
}

// Theme Types
export interface Theme {
  mode: 'light' | 'dark';
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

// Notification Types
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}
