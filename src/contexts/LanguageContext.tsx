'use client';

import React, { ReactNode, createContext, useContext, useState } from 'react';

export type Language = 'en' | 'fr' | 'ar';

interface ILanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<ILanguageContextType | undefined>(
  undefined
);

// Translation data based on MULTILINGUAL_COPY_IMPLEMENTATION.md
const translations = {
  en: {
    // Hero Section
    'hero.title': 'Orson Vision',
    'hero.subtitle': 'Cinematic Humanism in Digital Innovation',
    'hero.description':
      'We unearth and amplify your unique story through cinematic digital experiences that resonate deeply, transform perceptions, and inspire meaningful action. Every interaction is crafted like a film scene—with precision, artistry, and emotional depth.',
    'hero.primaryCta': 'Begin Your Cinematic Journey',
    'hero.secondaryCta': 'Watch Our Story',
    'hero.socialProof': '4.9/5 from 200+ clients',
    'hero.trustedBy': 'Trusted by 500+ businesses',

    // Solutions Matrix
    'solutions.digitalInnovation.title': 'Digital Innovation',
    'solutions.digitalInnovation.subtitle':
      'Transforming visions into compelling digital narratives that captivate audiences and amplify impact',
    'solutions.digitalInnovation.description':
      'We transform your vision into compelling digital narratives that captivate audiences and amplify your impact. Every solution is crafted with cinematic precision, unearthing the human story behind your technology and creating experiences that resonate long after the first interaction.',

    'solutions.creativeDesign.title': 'Creative Design',
    'solutions.creativeDesign.subtitle':
      "Crafting compelling visual narratives that unearth your brand's unique story and amplify it through cinematic design experiences",
    'solutions.creativeDesign.description':
      "We craft compelling visual narratives that unearth your brand's unique story and amplify it through cinematic design experiences. Every visual element is crafted with precision and artistry, creating emotional connections that transform how audiences perceive and engage with your brand.",

    'solutions.contentCreation.title': 'Content Creation',
    'solutions.contentCreation.subtitle':
      'Amplifying your voice through cinematic storytelling that resonates deeply and inspires meaningful action',
    'solutions.contentCreation.description':
      'We amplify your voice through cinematic storytelling that resonates deeply with audiences and inspires meaningful action. From visual narratives to compelling copy, we craft content that unearths the human element in every story and transforms how your message connects with the world.',

    'solutions.technologySolutions.title': 'Technology Solutions',
    'solutions.technologySolutions.subtitle':
      'Crafting seamless technology experiences that amplify human potential and transform digital interactions',
    'solutions.technologySolutions.description':
      'We craft seamless technology experiences that amplify human potential and transform how people interact with your digital presence. Every solution is built with cinematic precision, ensuring reliability and performance while creating moments that resonate and inspire.',

    'solutions.strategicConsulting.title': 'Strategic Consulting',
    'solutions.strategicConsulting.subtitle':
      'Unearthing your unique potential and crafting strategic narratives that transform your market presence',
    'solutions.strategicConsulting.description':
      'We unearth your unique potential and craft strategic narratives that transform your market presence. Through cinematic humanism, we help you navigate the digital landscape with clarity, purpose, and the confidence to amplify your impact in meaningful ways.',

    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.solutions': 'Services',
    'nav.cinematicUniverses': 'Cinematic Universes',
    'nav.clientJourney': 'Client Journey',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',

    // Services Structure
    'services.hero.title': 'Technical Expertise, Artistic Vision',
    'services.hero.subtitle':
      'Where cinematic precision meets creative innovation',
    'services.hero.description':
      'Discover our comprehensive range of services, each crafted with cinematic humanism to transform your vision into compelling digital experiences.',

    'services.productionVideo.title': 'Video Production',
    'services.productionVideo.description':
      'Professional video content that captures your story with cinematic quality',

    'services.cinematography.title': 'Cinematographic Production',
    'services.cinematography.description':
      'High-end cinematic productions for premium brands and artistic projects',

    'services.motionDesign.title': 'Motion Design & Animation',
    'services.motionDesign.description':
      'Dynamic visual storytelling through animation and motion graphics',

    'services.audioPodcasts.title': 'Audio Production & Podcasts',
    'services.audioPodcasts.description':
      'Professional audio content creation and podcast production',

    'services.photography.title': 'Photography & Content',
    'services.photography.description':
      'Capturing moments with emotional depth and artistic vision',

    'services.design.title': 'Graphic Design & Identity',
    'services.design.description':
      'Creating compelling visual identities and brand experiences',

    'services.web.title': 'Web Development',
    'services.web.description':
      'Building digital experiences that connect and convert',

    'services.marketing.title': 'Digital Marketing',
    'services.marketing.description':
      'Strategic digital campaigns that drive growth and engagement',

    'services.specialized.title': 'Specialized Services',
    'services.specialized.description':
      'Tailored solutions for specific industries and occasions',

    'services.collaboration.title': 'Inter-Métier Collaboration',
    'services.collaboration.description':
      'Our expertise areas work together to create comprehensive solutions that tell your story with cinematic precision.',

    'services.cta': 'Request a Quote',

    // About Page
    'about.story.title': 'Our Story',
    'about.story.content':
      "Founded in 2020, Orson Vision emerged from a simple yet powerful belief: that technology should serve humanity, not replace it. Our name 'Orson' pays homage to Orson Welles, the master storyteller who revolutionized cinema, while 'Vision' represents our forward-thinking approach to digital innovation.",

    'about.mission.title': 'Our Mission',
    'about.mission.content':
      "We believe in 'Cinematic Humanism' - the art of crafting digital experiences that feel as compelling and emotionally resonant as the greatest films. Every project we undertake is approached with the same attention to detail, narrative structure, and emotional impact that goes into creating a cinematic masterpiece.",

    // Contact Page
    'contact.hero.title': "Let's Create Together",
    'contact.hero.subtitle': 'Ready to start your project?',
    'contact.hero.description':
      'Get in touch with us to discuss your vision and discover how we can help bring your story to life through cinematic digital experiences.',

    'contact.form.title': 'Start Your Project',
    'contact.form.subtitle':
      "Tell us about your vision and we'll craft a digital experience that brings your story to life.",
    'contact.form.fullName': 'Full Name *',
    'contact.form.email': 'Email Address *',
    'contact.form.company': 'Company',
    'contact.form.serviceInterest': 'Service Interest *',
    'contact.form.budgetRange': 'Budget Range',
    'contact.form.timeline': 'Timeline',
    'contact.form.projectDetails': 'Project Details *',
    'contact.form.submit': 'Send Message',
    'contact.form.successMessage':
      'Thank you! Your message has been received. Our team will get back to you within 24 hours.',

    'contact.info.title': 'Get In Touch',
    'contact.info.subtitle': "We're here to help",
    'contact.info.description':
      "Choose the method that works best for you. We're available to discuss your project and answer any questions you may have.",

    'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq.subtitle': 'Common questions about working with us',
    'contact.faq.description':
      'Find answers to the most common questions about our process, timeline, and services.',

    // Client Journey
    'clientJourney.title': 'Your Journey With Us',
    'clientJourney.subtitle':
      'A collaborative process designed to transform your vision into digital reality, with transparency and excellence at every step.',

    // Client Journey Page
    'clientJourney.hero.title': 'Your Journey With Us',
    'clientJourney.hero.subtitle':
      'A collaborative process designed for success',
    'clientJourney.hero.description':
      'Discover our proven process that transforms your vision into digital reality, with transparency and excellence at every step.',

    'clientJourney.process.title': 'Our Process',
    'clientJourney.process.subtitle': 'How we work together',
    'clientJourney.process.description':
      'Our collaborative approach ensures your vision becomes reality through a structured, transparent process.',

    'clientJourney.stories.title': 'Success Stories',
    'clientJourney.stories.subtitle': 'Real results from real partnerships',
    'clientJourney.stories.description':
      'See how our process has helped clients achieve remarkable results across various industries.',

    'clientJourney.benefits.title': 'Why Choose Our Process',
    'clientJourney.benefits.subtitle': 'The advantages of working with us',
    'clientJourney.benefits.description':
      'Our process is designed to maximize success while minimizing stress and uncertainty.',

    // Testimonials
    'testimonials.title': 'Client Success Stories',
    'testimonials.subtitle':
      "Discover how we've helped businesses transform their digital presence and achieve remarkable results.",

    // Careers Page
    'careers.hero.title': 'Join Our Team',
    'careers.hero.subtitle': 'Be part of something extraordinary',
    'careers.hero.description':
      'Join a team that believes in the power of cinematic humanism to transform digital experiences and create meaningful impact.',

    'careers.culture.title': 'Our Culture',
    'careers.culture.subtitle': 'Where creativity meets purpose',
    'careers.culture.description':
      'We foster an environment where innovation thrives, collaboration flourishes, and every team member can grow and contribute to our shared success.',

    'careers.opportunities.title': 'Open Positions',
    'careers.opportunities.subtitle': 'Find your perfect role',
    'careers.opportunities.description':
      'Explore opportunities to join our team and help us create extraordinary digital experiences.',

    'careers.benefits.title': 'Benefits & Perks',
    'careers.benefits.subtitle': 'We take care of our team',
    'careers.benefits.description':
      'We believe in supporting our team members with comprehensive benefits and a work environment that promotes growth and well-being.',

    'careers.testimonials.title': 'Team Stories',
    'careers.testimonials.subtitle': 'Hear from our team members',
    'careers.testimonials.description':
      'Discover what makes working at Orson Vision special through the stories of our team members.',

    // About Page Additional
    'about.hero.title': 'About Orson Vision',
    'about.hero.subtitle': 'Cinematic Humanism in Action',
    'about.hero.description':
      'Discover the story behind our mission to transform digital experiences through cinematic humanism and human-centered design.',

    'about.values.title': 'Our Values',
    'about.values.subtitle': 'What we stand for',
    'about.values.description':
      'Our core values guide everything we do, from the way we approach projects to how we build relationships with our clients.',

    'about.team.title': 'Our Team',
    'about.team.subtitle': 'Meet the people behind the magic',
    'about.team.description':
      'Our diverse team brings together expertise in technology, design, and storytelling to create extraordinary digital experiences.',

    'about.story.subtitle': 'How it all began',
    'about.story.description':
      'Founded in 2020, Orson Vision emerged from a simple yet powerful belief: that technology should serve humanity, not replace it.',

    // Services Page Additional
    'services.expertise.title': 'Our Expertise',
    'services.expertise.subtitle': 'Comprehensive digital solutions',
    'services.expertise.description':
      'Each service is crafted with cinematic precision to create experiences that resonate deeply and drive meaningful results.',

    'services.cta.title': 'Ready to Get Started?',
    'services.cta.subtitle': "Let's discuss your project",
    'services.cta.description':
      'Contact us to learn more about our services and how we can help bring your vision to life.',

    // Footer
    'footer.description':
      'We craft digital experiences that blend artistic excellence with technical precision, creating moments that inspire, connect, and transform.',
    'footer.address': '123 Innovation Drive, Tech City, TC 12345',
    'footer.phone': '+1 (555) 123-4567',
    'footer.email': 'hello@orsonvision.com',
  },

  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.solutions': 'Nos Services',
    'nav.cinematicUniverses': 'Nos Univers Cinématiques',
    'nav.clientJourney': 'Votre Parcours',
    'nav.testimonials': 'Témoignages',
    'nav.contact': 'Contactez-nous',

    // Header
    'hero.title': 'Orson Vision',
    'hero.subtitle':
      "L'Humanisme Cinématographique au Cœur de l'Innovation Digitale",
    'hero.description':
      "Nous révélons et sublimons votre histoire unique à travers des expériences digitales cinématographiques qui touchent l'âme, transforment les perceptions et inspirent des actions concrètes. Chaque interaction est conçue avec la précision et l'art d'une scène de film, imprégnée d'une profonde humanité.",
    'hero.primaryCta': 'Débutez Votre Aventure Cinématographique',
    'hero.secondaryCta': 'Découvrez Notre Histoire',
    'hero.trustedBy': 'Plus de 500 entreprises nous font confiance',

    // Why Orson Vision
    'why.title': 'Pourquoi Choisir Orson Vision ?',
    'why.cinematicStorytelling.title': 'Narration Cinématographique',
    'why.cinematicStorytelling.description':
      'Nous transformons votre marque en une odyssée émotionnelle et visuelle.',
    'why.cuttingEdgeDesign.title': 'Design Avant-Gardiste',
    'why.cuttingEdgeDesign.description':
      'Moderne, interactif et impeccable sur tous les écrans.',
    'why.humanCentered.title': 'Approche Humaine',
    'why.humanCentered.description':
      'Chaque expérience est pensée pour de vraies personnes, pas de simples utilisateurs.',

    // Services
    'services.title': 'Notre Expertise',
    'services.contentCreation.title': '🎬Création de Contenu',
    'services.creativeDesign.title': '🎨Design Créatif',
    'services.digitalInnovation.title': '🚀Innovation Digitale',
    'services.strategicConsulting.title': '📊Conseil Stratégique',
    'services.technologySolutions.title': '⚙️Solutions Technologiques',
    'services.strategicConsulting.description':
      'Des stratégies éclairées par les données pour transformer votre entreprise',
    'services.strategicConsulting.analysis': 'Analyse de Marché',
    'services.strategicConsulting.strategy': "Stratégie d'Affaires",
    'services.strategicConsulting.optimization': 'Optimisation des Processus',
    'services.strategicConsulting.planning': 'Planification de Croissance',

    // Cinematic Universes
    'cinematicUniverses.title': 'Nos Univers Cinématiques',
    'cinematicUniverses.subtitle':
      "Chaque secteur possède sa propre histoire, ses défis et ses opportunités. Nous adaptons notre approche d'humanisme cinématographique pour créer des expériences qui résonnent profondément au sein de votre univers spécifique.",

    'universes.weddings.title': 'Mariages & Événements',
    'universes.weddings.description':
      "Des récits d'amour cinématographiques qui capturent l'authenticité des émotions et l'intemporalité des moments.",
    'universes.education.title': 'Éducation & Écoles',
    'universes.education.description':
      'Des histoires captivantes qui inspirent élèves, parents et communautés.',
    'universes.smallBusiness.title': 'Petites Entreprises & PME',
    'universes.smallBusiness.description':
      'Un storytelling de marque authentique qui bâtit la confiance et propulse la croissance.',
    'universes.corporate.title': 'Entreprises & Grands Comptes',
    'universes.corporate.description':
      'Humaniser les marques corporate à travers des narrations visuelles percutantes.',
    'universes.artisan.title': 'Artisanat & Création',
    'universes.artisan.description':
      "Donner vie à l'âme de l'artisanat dans le monde digital.",
    'universes.tourism.title': 'Tourisme & Hôtellerie',
    'universes.tourism.description':
      'Des expériences digitales immersives qui mettent en valeur des destinations du monde entier.',

    exploreUniverse: "Découvrir l'Univers",
    exploreAllUniverses: 'Explorer Tous Nos Univers',

    // Client Success Stories
    'testimonials.title': 'Nos Success Stories',
    'testimonials.subtitle':
      'Découvrez comment nous avons aidé des entreprises à transformer leur présence digitale et à atteindre des résultats remarquables.',

    'caseStudy.digitalTransformation.title': 'Marque & Design',
    'caseStudy.digitalTransformation.subtitle': 'Transformation Digitale',
    'caseStudy.digitalTransformation.client': 'TechCorp Inc.',
    'caseStudy.digitalTransformation.description':
      'Refonte complète de la marque et de la plateforme digitale qui a révolutionné leur présence en ligne.',
    'caseStudy.digitalTransformation.result':
      "Augmentation de 300% de l'engagement utilisateur",

    'caseStudy.ecommerce.title': 'Technologie',
    'caseStudy.ecommerce.subtitle': 'Plateforme E-commerce',
    'caseStudy.ecommerce.client': 'RetailFlow',
    'caseStudy.ecommerce.description':
      'Une solution e-commerce moderne offrant une expérience utilisateur fluide et des fonctionnalités avancées.',
    'caseStudy.ecommerce.result': 'Augmentation de 150% des taux de conversion',

    'caseStudy.contentStrategy.title': 'Contenu',
    'caseStudy.contentStrategy.subtitle': 'Stratégie de Contenu',
    'caseStudy.contentStrategy.client': 'MediaHub',
    'caseStudy.contentStrategy.description':
      'Une stratégie complète de création et de distribution de contenu qui a considérablement amplifié leur portée.',
    'caseStudy.contentStrategy.result': "Croissance de 200% de l'audience",

    'caseStudy.mobileApp.title': 'Développement',
    'caseStudy.mobileApp.subtitle': "Développement d'Applications Mobiles",
    'caseStudy.mobileApp.client': 'StartupXYZ',
    'caseStudy.mobileApp.description':
      "Une application mobile native dotée de fonctionnalités avancées et d'une interface utilisateur intuitive.",
    'caseStudy.mobileApp.result':
      'Plus de 500 000 téléchargements le premier mois',

    'caseStudy.strategicConsulting.title': 'Stratégie',
    'caseStudy.strategicConsulting.subtitle': 'Conseil Stratégique',
    'caseStudy.strategicConsulting.client': 'GrowthCo',
    'caseStudy.strategicConsulting.description':
      'Une stratégie de croissance axée sur les données et une expansion de marché qui ont transformé leur modèle économique.',
    'caseStudy.strategicConsulting.result': 'Augmentation de 400% des revenus',

    viewAllCaseStudies: 'Voir Toutes Nos Études de Cas',

    'services.productionVideo.title': 'Production vidéo',
    'services.productionVideo.description':
      'Des vidéos professionnelles qui racontent votre histoire avec une qualité cinématographique.',

    'services.cinematography.title': 'Production cinématographique',
    'services.cinematography.description':
      "Des réalisations haut de gamme pour les marques et projets d'exception.",

    'services.motionDesign.title': 'Motion design & animation',
    'services.motionDesign.description':
      "Des histoires dynamiques portées par l'animation et le graphisme en mouvement.",

    'services.audioPodcasts.title': 'Production audio & podcasts',
    'services.audioPodcasts.description':
      'Création de contenus audio et podcasts professionnels.',

    'services.photography.title': 'Photographie & contenus',
    'services.photography.description':
      'Des instants capturés avec émotion et regard artistique.',

    'services.design.title': 'Design graphique & identité',
    'services.design.description':
      "Création d'identités visuelles fortes et d'expériences de marque immersives.",

    'services.web.title': 'Développement web',
    'services.web.description':
      'Des expériences digitales qui engagent et convertissent.',

    'services.marketing.title': 'Marketing digital',
    'services.marketing.description':
      'Des campagnes stratégiques pour booster votre croissance et votre engagement.',

    'services.specialized.title': 'Services spécialisés',
    'services.specialized.description':
      'Des solutions sur-mesure pour chaque secteur et chaque besoin.',

    'services.collaboration.title': 'Collaboration interdisciplinaire',
    'services.collaboration.description':
      "Nos expertises s'unissent pour créer des solutions globales et raconter votre histoire avec la précision du cinéma.",

    'services.cta': 'Demander un devis',

    // Footer
    'footer.title': 'Orson Vision',
    'footer.description':
      "Nous concevons des expériences digitales qui fusionnent l'excellence artistique et la précision technique, créant des moments qui inspirent, connectent et transforment.",
    'footer.address': '123 Innovation Drive, Tech City, TC 12345',
    'footer.phone': '+1 (555) 123-4567',
    'footer.email': 'hello@orsonvision.com',

    'footer.company': 'Entreprise',
    'footer.aboutUs': 'À Propos de Nous',
    'footer.ourTeam': 'Notre Équipe',
    'footer.careers': 'Carrières',
    'footer.contact': 'Contact',
    'footer.services': 'Services',
    'footer.contentCreation': 'Création de Contenu',
    'footer.creativeDesign': 'Design Créatif',
    'footer.digitalInnovation': 'Innovation Digitale',
    'footer.strategicConsulting': 'Conseil Stratégique',
    'footer.technologySolutions': 'Solutions Technologiques',
    'footer.resources': 'Ressources',
    'footer.blog': 'Blog',
    'footer.caseStudies': 'Études de Cas',
    'footer.whitepapers': 'Livres Blancs',
    'footer.newsletter': 'Newsletter',
    'footer.stayUpdated': 'Restez Informé',
    'footer.newsletterDescription':
      "Recevez les dernières analyses sur l'humanisme cinématographique et l'innovation digitale.",
    'footer.subscribe': "S'abonner",
    'footer.copyright': '© 2025 Orson Vision. Tous droits réservés.',

    // About Page
    'about.story.title': 'Notre histoire',
    'about.story.content':
      "Orson Vision est née en 2020 d'une conviction forte : la technologie doit servir l'humain, pas le remplacer. 'Orson' rend hommage à Orson Welles, maître du récit cinématographique, et 'Vision' incarne notre regard tourné vers l'innovation digitale.",

    'about.mission.title': 'Notre mission',
    'about.mission.content':
      "Nous croyons en l'humanisme cinématographique : l'art de créer des expériences digitales aussi puissantes et émouvantes que les plus grands films. Chaque projet est mené avec la même exigence narrative et émotionnelle qu'une œuvre cinématographique.",

    // Contact Page
    'contact.hero.title': 'Créons Ensemble',
    'contact.hero.subtitle':
      'Contactez-nous pour discuter de votre vision et découvrir comment nous pouvons donner vie à votre histoire à travers des expériences digitales cinématographiques.',
    'contact.form.title': 'Envoyer un Message',
    'contact.form.subtitle': 'Contactez-nous',
    'contact.form.fullName': 'Nom complet *',
    'contact.form.email': 'Adresse e-mail *',
    'contact.form.company': 'Entreprise',
    'contact.form.serviceInterest': 'Service souhaité *',
    'contact.form.budgetRange': 'Budget',
    'contact.form.timeline': 'Délais',
    'contact.form.projectDetails': 'Détails du projet *',
    'contact.form.submit': 'Envoyer un Message',
    'contact.form.successMessage':
      'Merci ! Votre message a bien été reçu. Notre équipe vous contactera sous 24h pour échanger sur votre projet et vous accompagner dans sa réalisation.',

    'contact.info.title': 'Contactez-nous',
    'contact.info.subtitle': 'Nous sommes là pour vous aider',
    'contact.info.description':
      'Choisissez la méthode qui vous convient le mieux. Nous sommes disponibles pour discuter de votre projet et répondre à toutes vos questions.',
    'contact.info.email': 'hello@orson.vision',
    'contact.info.phone': '+1 234 567 8900',
    'contact.info.followUs': 'Suivez-nous',

    // Client Journey
    'clientJourney.title': 'Votre Parcours avec Nous',
    'clientJourney.subtitle':
      'Un processus collaboratif conçu pour transformer votre vision en réalité digitale, avec transparence et excellence à chaque étape.',

    'clientJourney.step1.title': '01Découverte & Stratégie',
    'clientJourney.step1.description':
      'Nous plongeons au cœur de votre activité pour élaborer une stratégie digitale sur mesure.',
    'clientJourney.step2.title': '02Conception & Prototypage',
    'clientJourney.step2.description':
      'Notre équipe créative transforme votre vision en concepts visuels époustouflants.',
    'clientJourney.step3.title': '03Développement & Intégration',
    'clientJourney.step3.description':
      'Nous bâtissons des solutions robustes et évolutives en utilisant les technologies les plus avancées.',
    'clientJourney.step4.title': '04Lancement & Optimisation',
    'clientJourney.step4.description':
      'Nous assurons un déploiement fluide et optimisons continuellement pour un impact maximal.',

    // Careers Page
    'careers.hero.title': 'Rejoignez Notre Équipe',
    'careers.hero.subtitle': "Faites partie de quelque chose d'extraordinaire",
    'careers.hero.description':
      "Rejoignez une équipe qui croit au pouvoir de l'humanisme cinématographique pour transformer les expériences numériques et créer un impact significatif.",

    'careers.culture.title': 'Notre Culture',
    'careers.culture.subtitle': 'Où la créativité rencontre le sens',
    'careers.culture.description':
      "Nous favorisons un environnement où l'innovation prospère, la collaboration s'épanouit, et chaque membre de l'équipe peut grandir et contribuer à notre succès partagé.",

    'careers.opportunities.title': 'Postes Ouverts',
    'careers.opportunities.subtitle': 'Trouvez votre rôle parfait',
    'careers.opportunities.description':
      'Explorez les opportunités de rejoindre notre équipe et nous aider à créer des expériences numériques extraordinaires.',

    'careers.benefits.title': 'Avantages & Privilèges',
    'careers.benefits.subtitle': 'Nous prenons soin de notre équipe',
    'careers.benefits.description':
      "Nous croyons en soutenir nos membres d'équipe avec des avantages complets et un environnement de travail qui favorise la croissance et le bien-être.",

    'careers.testimonials.title': "Histoires d'Équipe",
    'careers.testimonials.subtitle': "Écoutez nos membres d'équipe",
    'careers.testimonials.description':
      "Découvrez ce qui rend le travail chez Orson Vision spécial à travers les histoires de nos membres d'équipe.",

    // About Page Additional
    'about.hero.title': "À Propos d'Orson Vision",
    'about.hero.subtitle': "L'Humanisme Cinématographique en Action",
    'about.hero.description':
      "Découvrez l'histoire derrière notre mission de transformer les expériences numériques grâce à l'humanisme cinématographique et au design centré sur l'humain.",

    'about.values.title': 'Nos Valeurs',
    'about.values.subtitle': 'Ce que nous défendons',
    'about.values.description':
      'Nos valeurs fondamentales guident tout ce que nous faisons, de la façon dont nous abordons les projets à la façon dont nous construisons des relations avec nos clients.',

    'about.team.title': 'Notre Équipe',
    'about.team.subtitle':
      'Rencontrez les esprits créatifs derrière notre approche',
    'about.team.description':
      'Notre équipe diverse réunit expertise en technologie, design et storytelling pour créer des expériences numériques extraordinaires.',

    'about.story.subtitle': 'Comment tout a commencé',
    'about.story.description':
      "Fondée en 2020, Orson Vision est née d'une conviction simple mais puissante : la technologie doit servir l'humanité, pas la remplacer.",

    // Services Page Additional
    'services.expertise.title': 'Notre Expertise',
    'services.expertise.subtitle': 'Solutions digitales complètes',
    'services.expertise.description':
      'Chaque service est conçu avec une précision cinématographique pour créer des expériences qui résonnent profondément et génèrent des résultats significatifs.',

    'services.cta.title': 'Prêt à Commencer ?',
    'services.cta.subtitle': 'Discutons de votre projet',
    'services.cta.description':
      'Contactez-nous pour en savoir plus sur nos services et comment nous pouvons vous aider à donner vie à votre vision.',

    // Client Journey Page Additional
    'clientJourney.hero.title': 'Votre Parcours Avec Nous',
    'clientJourney.hero.subtitle':
      'Un processus collaboratif conçu pour le succès',
    'clientJourney.hero.description':
      'Découvrez notre processus éprouvé qui transforme votre vision en réalité digitale, avec transparence et excellence à chaque étape.',

    'clientJourney.process.title': 'Notre Processus',
    'clientJourney.process.subtitle': 'Comment nous travaillons ensemble',
    'clientJourney.process.description':
      'Notre approche collaborative garantit que votre vision devient réalité à travers un processus structuré et transparent.',

    'clientJourney.stories.title': 'Histoires de Succès',
    'clientJourney.stories.subtitle': 'Vrais résultats de vrais partenariats',
    'clientJourney.stories.description':
      'Découvrez comment notre processus a aidé les clients à obtenir des résultats remarquables dans divers secteurs.',

    'clientJourney.benefits.title': 'Pourquoi Choisir Notre Processus',
    'clientJourney.benefits.subtitle': 'Les avantages de travailler avec nous',
    'clientJourney.benefits.description':
      "Notre processus est conçu pour maximiser le succès tout en minimisant le stress et l'incertitude.",

    // Contact Page Additional
    'contact.faq.title': 'Questions Fréquemment Posées',
    'contact.faq.subtitle': 'Questions communes sur le travail avec nous',
    'contact.faq.description':
      'Trouvez des réponses aux questions les plus courantes sur notre processus, notre calendrier et nos services.',

    // Additional missing translations
    'services.hero.title': 'Expertise Technique, Vision Artistique',
    'services.hero.subtitle':
      "Où la précision cinématographique rencontre l'innovation créative",
    'services.hero.description':
      "Découvrez notre gamme complète de services, chacun conçu avec l'humanisme cinématographique pour transformer votre vision en expériences digitales captivantes.",

    'about.stats.projects': 'Projets Réalisés',
    'about.stats.clients': 'Clients Satisfaits',
    'about.stats.experience': "Années d'Expérience",
    'about.stats.support': 'Support Disponible',

    'team.creativeDirector.title': 'Directeur Créatif',
    'team.creativeDirector.role': 'Vision & Stratégie',
    'team.leadDesigner.title': 'Designer Principal',
    'team.leadDesigner.role': 'Excellence Visuelle',
    'team.techLead.title': 'Responsable Technique',
    'team.techLead.role': 'Innovation & Développement',
    'team.strategyDirector.title': 'Directeur Stratégique',
    'team.strategyDirector.role': 'Croissance & Conseil',

    'about.gallery.title':
      "Dans les coulisses : L'humanisme cinématographique en action",
    'about.gallery.subtitle': 'La narration créative à son meilleur',
  },

  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.solutions': 'خدماتنا',
    'nav.cinematicUniverses': 'عوالمنا السينمائية',
    'nav.clientJourney': 'رحلة العميل',
    'nav.testimonials': 'شهادات العملاء',
    'nav.contact': 'تواصل معنا',

    // Header
    'hero.title': 'أورسون فيجن',
    'hero.subtitle': 'الإنسانية السينمائية في صميم الابتكار الرقمي',
    'hero.description':
      'نحن نكتشف ونعزز قصتك الفريدة من خلال تجارب رقمية سينمائية تلامس العمق، تحوّل التصورات، وتلهم العمل الهادف. كل تفاعل نصنعه بدقة فنية وعمق عاطفي، وكأنه مشهد سينمائي.',
    'hero.primaryCta': 'ابدأ رحلتك السينمائية',
    'hero.secondaryCta': 'شاهد قصتنا',
    'hero.trustedBy': 'أكثر من ٥٠٠ شركة تثق بنا',

    // Why Orson Vision
    'why.title': 'لماذا أورسون فيجن؟',
    'why.cinematicStorytelling.title': 'السرد السينمائي',
    'why.cinematicStorytelling.description':
      'نحوّل علامتك التجارية إلى رحلة عاطفية وبصرية.',
    'why.cuttingEdgeDesign.title': 'تصميم متطور',
    'why.cuttingEdgeDesign.description': 'حديث، تفاعلي، وجميل على كل جهاز.',
    'why.humanCentered.title': 'نهج يركز على الإنسان',
    'why.humanCentered.description':
      'كل تجربة مصممة لأشخاص حقيقيين، وليس فقط للمستخدمين.',

    // Services
    'services.title': 'خبراتنا',
    'services.contentCreation.title': '🎬إنشاء المحتوى',
    'services.creativeDesign.title': '🎨التصميم الإبداعي',
    'services.digitalInnovation.title': '🚀الابتكار الرقمي',
    'services.strategicConsulting.title': '📊الاستشارات الاستراتيجية',
    'services.technologySolutions.title': '⚙️الحلول التقنية',
    'services.strategicConsulting.description':
      'رؤى قائمة على البيانات لتحويل الأعمال',
    'services.strategicConsulting.analysis': 'تحليل السوق',
    'services.strategicConsulting.strategy': 'استراتيجية الأعمال',
    'services.strategicConsulting.optimization': 'تحسين العمليات',
    'services.strategicConsulting.planning': 'تخطيط النمو',

    // Cinematic Universes
    'cinematicUniverses.title': 'عوالمنا السينمائية',
    'cinematicUniverses.subtitle':
      'لكل قطاع قصته الفريدة، تحدياته، وفرصه. نكيّف نهجنا الإنساني السينمائي لخلق تجارب تتردد أصداؤها بعمق داخل عالمك الخاص.',

    'universes.weddings.title': 'الأعراس والفعاليات',
    'universes.weddings.description':
      'قصص حب سينمائية تلتقط المشاعر الأصيلة واللحظات الخالدة.',
    'universes.education.title': 'التعليم والمدارس',
    'universes.education.description':
      'روايات آسرة تلهم الطلاب، أولياء الأمور، والمجتمعات.',
    'universes.smallBusiness.title':
      'الأعمال الصغيرة والشركات الصغيرة والمتوسطة',
    'universes.smallBusiness.description':
      'سرد قصصي أصيل للعلامة التجارية يبني الثقة ويدفع النمو.',
    'universes.corporate.title': 'الشركات والمؤسسات الكبرى',
    'universes.corporate.description':
      'إضفاء الطابع الإنساني على العلامات التجارية للشركات من خلال روايات بصرية آسرة.',
    'universes.artisan.title': 'الحرفيون والحرف اليدوية',
    'universes.artisan.description': 'إحضار روح الحرفية إلى العالم الرقمي.',
    'universes.tourism.title': 'السياحة والضيافة',
    'universes.tourism.description':
      'تجارب رقمية غامرة تعرض الوجهات في جميع أنحاء العالم.',

    exploreUniverse: 'اكتشف العالم',
    exploreAllUniverses: 'اكتشف جميع عوالمنا',

    // Client Success Stories
    'testimonials.title': 'قصص نجاح عملائنا',
    'testimonials.subtitle':
      'اكتشف كيف ساعدنا الشركات على تحويل حضورها الرقمي وتحقيق نتائج استثنائية.',

    'caseStudy.digitalTransformation.title': 'العلامة التجارية والتصميم',
    'caseStudy.digitalTransformation.subtitle': 'التحول الرقمي',
    'caseStudy.digitalTransformation.client': 'TechCorp Inc.',
    'caseStudy.digitalTransformation.description':
      'تجديد كامل للعلامة التجارية وإعادة تصميم المنصة الرقمية التي أحدثت ثورة في حضورهم على الإنترنت.',
    'caseStudy.digitalTransformation.result': 'زيادة 300% في تفاعل المستخدمين',

    'caseStudy.ecommerce.title': 'التقنية',
    'caseStudy.ecommerce.subtitle': 'منصة التجارة الإلكترونية',
    'caseStudy.ecommerce.client': 'RetailFlow',
    'caseStudy.ecommerce.description':
      'حل تجارة إلكترونية حديث مع تجربة مستخدم سلسة وميزات متقدمة.',
    'caseStudy.ecommerce.result': 'زيادة 150% في معدلات التحويل',

    'caseStudy.contentStrategy.title': 'المحتوى',
    'caseStudy.contentStrategy.subtitle': 'استراتيجية المحتوى',
    'caseStudy.contentStrategy.client': 'MediaHub',
    'caseStudy.contentStrategy.description':
      'استراتيجية شاملة لإنشاء وتوزيع المحتوى أدت إلى توسيع نطاق وصولهم.',
    'caseStudy.contentStrategy.result': 'نمو 200% في وصول الجمهور',

    'caseStudy.mobileApp.title': 'التطوير',
    'caseStudy.mobileApp.subtitle': 'تطوير تطبيقات الجوال',
    'caseStudy.mobileApp.client': 'StartupXYZ',
    'caseStudy.mobileApp.description':
      'تطبيق جوال أصلي بميزات متقدمة وواجهة مستخدم بديهية.',
    'caseStudy.mobileApp.result': 'أكثر من 500 ألف تنزيل في الشهر الأول',

    'caseStudy.strategicConsulting.title': 'الاستراتيجية',
    'caseStudy.strategicConsulting.subtitle': 'الاستشارات الاستراتيجية',
    'caseStudy.strategicConsulting.client': 'GrowthCo',
    'caseStudy.strategicConsulting.description':
      'استراتيجية نمو تعتمد على البيانات وتوسع السوق التي غيرت نموذج أعمالهم.',
    'caseStudy.strategicConsulting.result': 'زيادة 400% في الإيرادات',

    viewAllCaseStudies: 'عرض جميع دراسات الحالة',

    // About Orson Vision
    'about.hero.title': 'عن أورسون فيجن',
    'about.hero.subtitle':
      'حيث يلتقي الإبداع السينمائي بالتكنولوجيا المتطورة لتحويل حضورك الرقمي.',
    'about.hero.description': 'الإنسانية السينمائية في العمل',
    'about.hero.content':
      'اكتشف القصة وراء مهمتنا لتحويل التجارب الرقمية من خلال الإنسانية السينمائية والتصميم المتمحور حول الإنسان.',

    'about.stats.projects': 'أكثر من 150',
    'about.stats.projects.label': 'مشروع مكتمل',
    'about.stats.clients': 'أكثر من 50',
    'about.stats.clients.label': 'عميل سعيد',
    'about.stats.experience': 'أكثر من 5',
    'about.stats.experience.label': 'سنوات خبرة',
    'about.stats.support': '24/7',
    'about.stats.support.label': 'دعم متاح',

    'about.team.title': 'فريقنا',
    'about.team.subtitle':
      'تعرف على العقول المبدعة وراء نهجنا الإنساني السينمائي.',

    'team.creativeDirector.title': 'المدير الإبداعي',
    'team.creativeDirector.role': 'الرؤية والاستراتيجية',
    'team.leadDesigner.title': 'كبير المصممين',
    'team.leadDesigner.role': 'التميز البصري',
    'team.techLead.title': 'قائد التقنية',
    'team.techLead.role': 'الابتكار والتطوير',
    'team.strategyDirector.title': 'مدير الاستراتيجية',
    'team.strategyDirector.role': 'النمو والاستشارات',

    'about.gallery.title': 'معرض الوسائط',
    'about.gallery.subtitle': 'خلف الكواليس: الإنسانية السينمائية في العمل',

    // Client Journey
    'clientJourney.title': 'رحلتك معنا',
    'clientJourney.subtitle':
      'عملية تعاونية مصممة لتحويل رؤيتك إلى واقع رقمي، بشفافية وتميز في كل خطوة.',

    'clientJourney.step1.title': '01الاكتشاف والاستراتيجية',
    'clientJourney.step1.description':
      'نتعمق في عملك لصياغة استراتيجية رقمية مخصصة.',
    'clientJourney.step2.title': '02التصميم والنماذج الأولية',
    'clientJourney.step2.description':
      'يحول فريقنا الإبداعي رؤيتك إلى مفاهيم بصرية مذهلة.',
    'clientJourney.step3.title': '03التطوير والتكامل',
    'clientJourney.step3.description':
      'نبني حلولاً قوية وقابلة للتطوير باستخدام أحدث التقنيات.',
    'clientJourney.step4.title': '04الإطلاق والتحسين',
    'clientJourney.step4.description':
      'نضمن إطلاقًا سلسًا ونحسن باستمرار لتحقيق أقصى تأثير.',

    // Contact
    'contact.hero.title': 'دعنا نصنع معاً',
    'contact.hero.subtitle':
      'تواصل معنا لمناقشة رؤيتك واكتشاف كيف يمكننا المساعدة في إحياء قصتك من خلال تجارب رقمية سينمائية.',
    'contact.form.title': 'إرسال رسالة',
    'contact.form.subtitle': 'تواصل معنا',
    'contact.form.fullName': 'الاسم الكامل *',
    'contact.form.email': 'البريد الإلكتروني *',
    'contact.form.company': 'الشركة',
    'contact.form.serviceInterest': 'الخدمة المطلوبة *',
    'contact.form.budgetRange': 'الميزانية',
    'contact.form.timeline': 'المدة الزمنية',
    'contact.form.projectDetails': 'تفاصيل المشروع *',
    'contact.form.submit': 'إرسال رسالة',
    'contact.form.successMessage':
      'شكراً لك! تم استلام رسالتك. سنتواصل معك خلال ٢٤ ساعة لمناقشة مشروعك ومساعدتك في تحقيق رؤيتك.',

    'contact.info.title': 'تواصل معنا',
    'contact.info.subtitle': 'نحن هنا لمساعدتك',
    'contact.info.description':
      'اختر الطريقة التي تناسبك. نحن متاحون لمناقشة مشروعك والإجابة على جميع أسئلتك.',
    'contact.info.email': 'hello@orson.vision',
    'contact.info.phone': '+1 234 567 8900',
    'contact.info.followUs': 'تابعنا',

    // Footer
    'footer.title': 'أورسون فيجن',
    'footer.description':
      'نصمم تجارب رقمية تمزج بين التميز الفني والدقة التقنية، لخلق لحظات تلهم، تربط، وتحوّل.',
    'footer.address': '123 شارع الابتكار، مدينة التقنية، TC 12345',
    'footer.phone': '+1 (555) 123-4567',
    'footer.email': 'hello@orsonvision.com',

    'footer.company': 'الشركة',
    'footer.aboutUs': 'من نحن',
    'footer.ourTeam': 'فريقنا',
    'footer.careers': 'الوظائف',
    'footer.contact': 'تواصل معنا',
    'footer.services': 'الخدمات',
    'footer.resources': 'الموارد',
    'footer.blog': 'المدونة',
    'footer.caseStudies': 'دراسات الحالة',
    'footer.whitepapers': 'الوثائق البيضاء',
    'footer.newsletter': 'الرسالة الإخبارية',
    'footer.stayUpdated': 'ابق على اطلاع',
    'footer.newsletterDescription':
      'احصل على أحدث الرؤى حول الإنسانية السينمائية والابتكار الرقمي.',
    'footer.enterEmail': 'أدخل بريدك الإلكتروني',
    'footer.subscribe': 'اشترك',
    'footer.copyright': '© ٢٠٢٥ أورسون فيجن. جميع الحقوق محفوظة.',
    'footer.followUs': 'تابعنا',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): ILanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
