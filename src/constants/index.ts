export const SITE_CONFIG = {
  name: 'Orson Vision',
  tagline: 'Cinematic Solutions',
  description:
    'Crafting digital experiences with cinematic precision and sophisticated design.',
  url: 'https://orsonvision.com',
  email: 'contact@orsonvision.com',
  phone: '+216 XX XXX XXX',
  address: 'Tunis, Tunisia',
  social: {
    facebook: 'https://facebook.com/orsonvision',
    instagram: 'https://instagram.com/orsonvision',
    linkedin: 'https://linkedin.com/company/orsonvision',
    twitter: 'https://twitter.com/orsonvision',
  },
};

export const JOURNEY_PATHS = [
  {
    id: 'wedding-events',
    title: 'Wedding & Events',
    subtitle: 'Capture Your Perfect Moments',
    description:
      'Transform your special day into a cinematic masterpiece with our documentary-style storytelling and Hollywood-level production values.',
    icon: '💒',
    color: 'from-pink-600 to-rose-500',
    bgColor: 'bg-gradient-to-br from-pink-900/20 to-rose-800/20',
    features: [
      'Cinematic Wedding Films',
      'Event Coverage',
      'Documentary Style',
      'Emotional Storytelling',
    ],
    nextStep: 'wedding-journey',
  },
  {
    id: 'education',
    title: 'Education',
    subtitle: 'Inspire Through Visual Learning',
    description:
      'Create compelling educational content that engages students and elevates institutional branding with sophisticated visual storytelling.',
    icon: '🎓',
    color: 'from-blue-600 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-blue-900/20 to-cyan-800/20',
    features: [
      'Educational Videos',
      'Institutional Branding',
      'Student Engagement',
      'Academic Storytelling',
    ],
    nextStep: 'education-journey',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    subtitle: 'Showcase Your Culinary Art',
    description:
      'Elevate your restaurant or hotel brand with cinematic content that captures the essence of your hospitality experience.',
    icon: '🍽️',
    color: 'from-orange-600 to-amber-500',
    bgColor: 'bg-gradient-to-br from-orange-900/20 to-amber-800/20',
    features: [
      'Restaurant Branding',
      'Culinary Photography',
      'Hotel Marketing',
      'Experience Videos',
    ],
    nextStep: 'hospitality-journey',
  },
  {
    id: 'business-growth',
    title: 'Business Growth',
    subtitle: 'Scale Your Digital Presence',
    description:
      'Transform your business with strategic digital solutions that combine cinematic storytelling with powerful business outcomes.',
    icon: '🚀',
    color: 'from-green-600 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-green-900/20 to-emerald-800/20',
    features: [
      'Digital Transformation',
      'Brand Elevation',
      'Marketing Strategy',
      'Growth Solutions',
    ],
    nextStep: 'business-journey',
  },
  {
    id: 'creative-industries',
    title: 'Creative Industries',
    subtitle: 'Amplify Your Artistic Vision',
    description:
      'Partner with fellow creatives to bring your artistic vision to life through sophisticated visual storytelling and brand development.',
    icon: '🎨',
    color: 'from-purple-600 to-indigo-500',
    bgColor: 'bg-gradient-to-br from-purple-900/20 to-indigo-800/20',
    features: [
      'Artist Branding',
      'Portfolio Development',
      'Creative Marketing',
      'Visual Storytelling',
    ],
    nextStep: 'creative-journey',
  },
  {
    id: 'technology',
    title: 'Technology',
    subtitle: 'Innovate Your Digital Future',
    description:
      'Help tech companies and startups create compelling digital experiences that showcase innovation and drive user engagement.',
    icon: '⚡',
    color: 'from-yellow-600 to-orange-500',
    bgColor: 'bg-gradient-to-br from-yellow-900/20 to-orange-800/20',
    features: [
      'Startup Branding',
      'Product Showcases',
      'Tech Marketing',
      'Digital Innovation',
    ],
    nextStep: 'technology-journey',
  },
];

export const SERVICES = [
  {
    id: 'video-production',
    title: 'Production Vidéo',
    description: 'Documentary-style storytelling with cinematic quality',
    icon: '🎬',
    category: 'video',
  },
  {
    id: 'cinematic-production',
    title: 'Production Cinématographique',
    description: 'Hollywood-level productions with dramatic lighting',
    icon: '🎭',
    category: 'video',
  },
  {
    id: 'motion-design',
    title: 'Motion Design & Animation',
    description: 'Dynamic visual storytelling through sophisticated animation',
    icon: '🎨',
    category: 'creative',
  },
  {
    id: 'audio-production',
    title: 'Production Audio & Podcasts',
    description:
      'Professional audio content with sophisticated production values',
    icon: '🎵',
    category: 'audio',
  },
  {
    id: 'photography',
    title: 'Photographie & Contenu',
    description: 'Cinematic photography with artistic vision',
    icon: '📸',
    category: 'creative',
  },
  {
    id: 'graphic-design',
    title: 'Design Graphique & Identité',
    description: 'Sophisticated design that elevates brand identity',
    icon: '🎨',
    category: 'creative',
  },
  {
    id: 'web-creation',
    title: 'Création de Sites Web',
    description: 'High-performance websites with cinematic aesthetics',
    icon: '💻',
    category: 'digital',
  },
  {
    id: 'digital-marketing',
    title: 'Marketing Digital',
    description: 'Strategic digital marketing with sophisticated execution',
    icon: '📈',
    category: 'digital',
  },
  {
    id: 'specialized-services',
    title: 'Services Spécialisés',
    description: 'Tailored solutions for specific industries and occasions',
    icon: '⚡',
    category: 'specialized',
  },
];

export const NAVIGATION = [
  { name: 'Accueil', href: '/' },
  { name: 'À Propos', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  services: [
    { name: 'Production Vidéo', href: '/services#video-production' },
    {
      name: 'Production Cinématographique',
      href: '/services#cinematic-production',
    },
    { name: 'Motion Design', href: '/services#motion-design' },
    { name: 'Photographie', href: '/services#photography' },
    { name: 'Design Graphique', href: '/services#graphic-design' },
    { name: 'Création de Sites Web', href: '/services#web-creation' },
  ],
  company: [
    { name: 'À Propos', href: '/about' },
    { name: 'Équipe', href: '/about#team' },
    { name: 'Carrières', href: '/careers' },
    { name: 'Blog', href: '/blog' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/support' },
    { name: 'Mentions Légales', href: '/legal' },
  ],
};

export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/orsonvision',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/orsonvision',
    icon: 'instagram',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/orsonvision',
    icon: 'linkedin',
  },
  { name: 'Twitter', href: 'https://twitter.com/orsonvision', icon: 'twitter' },
];

export const META_TAGS = {
  title: 'Orson Vision - Cinematic Solutions | Digital Agency Tunisia',
  description:
    'Crafting digital experiences with cinematic precision and sophisticated design. Professional video production, web design, and digital solutions in Tunisia.',
  keywords:
    'digital agency, video production, web design, Tunisia, cinematic solutions, digital marketing',
  author: 'Orson Vision',
  ogImage: '/og-image.jpg',
  twitterImage: '/twitter-image.jpg',
};

export const CONTACT_INFO = {
  email: 'contact@orsonvision.com',
  phone: '+216 XX XXX XXX',
  address: 'Tunis, Tunisia',
  hours: 'Lun-Ven: 9h-18h',
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah & Ahmed',
    role: 'Mariage',
    content:
      'Orson Vision captured our wedding day with such cinematic beauty. The sophisticated film they created exceeded our expectations and perfectly captured our story.',
    image: '/testimonials/sarah-ahmed.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Institut Français',
    role: 'Éducation',
    content:
      "Our student recruitment campaign with Orson Vision resulted in a 40% increase in inquiries and significantly improved our school's online presence.",
    image: '/testimonials/institut-francais.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Restaurant Le Gourmet',
    role: 'Hospitalité',
    content:
      'Their cinematic approach is exactly what we needed. No hidden costs, no surprises, just sophisticated work that gets results.',
    image: '/testimonials/le-gourmet.jpg',
    rating: 5,
  },
];

export const BLOG_CATEGORIES = [
  { name: 'Production Vidéo', slug: 'video-production' },
  { name: 'Design Graphique', slug: 'graphic-design' },
  { name: 'Marketing Digital', slug: 'digital-marketing' },
  { name: 'Création de Sites Web', slug: 'web-creation' },
  { name: 'Photographie', slug: 'photography' },
  { name: 'Motion Design', slug: 'motion-design' },
];

export const PERFORMANCE_TARGETS = {
  lcp: 2500, // Largest Contentful Paint (ms)
  fid: 100, // First Input Delay (ms)
  cls: 0.1, // Cumulative Layout Shift
  ttfb: 800, // Time to First Byte (ms)
};

export const SEO_CONFIG = {
  titleTemplate: '%s | Orson Vision',
  defaultTitle: 'Orson Vision - Cinematic Solutions',
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#0a0f1a',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
};
