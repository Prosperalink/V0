'use client';

import { motion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const validateField = (
    name: keyof FormData,
    value: string
  ): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Le nom est requis';
        if (value.trim().length < 2)
          return 'Le nom doit contenir au moins 2 caractères';
        return undefined;

      case 'email':
        if (!value.trim()) return "L'email est requis";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return 'Veuillez entrer une adresse email valide';
        return undefined;

      case 'phone':
        if (
          value.trim() &&
          !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/\s/g, ''))
        ) {
          return 'Veuillez entrer un numéro de téléphone valide';
        }
        return undefined;

      case 'message':
        if (!value.trim()) return 'Le message est requis';
        if (value.trim().length < 10)
          return 'Le message doit contenir au moins 10 caractères';
        return undefined;

      default:
        return undefined;
    }
  };

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      const fieldName = key as keyof FormData;
      const error = validateField(fieldName, formData[fieldName]);
      if (error) newErrors[fieldName] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Production Vidéo',
    'Production Cinématographique',
    'Motion Design & Animation',
    'Production Audio & Podcasts',
    'Photographie & Contenu',
    'Design Graphique & Identité',
    'Création de Sites Web',
    'Marketing Digital',
    'Services Spécialisés',
  ];

  return (
    <section id="contact" className="py-20 bg-deep-charcoal text-cream-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-fluid-4xl font-bold mb-6">
            Créons Quelque Chose
            <span className="text-true-blue"> d'Authentique</span>
          </h2>
          <p className="text-fluid-lg text-warm-gray max-w-3xl mx-auto">
            Prêt à démarrer votre projet ? Nous sommes là pour vous aider à
            obtenir de vrais résultats avec des solutions numériques
            transparentes et authentiques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-fluid-2xl font-semibold mb-6">
                Contactez-Nous
              </h3>
              <p className="text-warm-gray mb-8">
                Nous croyons en la communication transparente et aux vraies
                relations. Discutons de la façon dont nous pouvons aider votre
                entreprise à grandir.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-true-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-true-blue" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-warm-gray">contact@orsonvision.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-true-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-true-blue" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Téléphone</h4>
                  <p className="text-warm-gray">+216 XX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-true-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-true-blue" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Localisation</h4>
                  <p className="text-warm-gray">
                    Orson Vision - Digital Vérité
                    <br />
                    Tunis, Tunisie
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-cream-white/5 backdrop-blur-sm rounded-xl p-8 border border-cream-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="form-label text-cream-white">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={e => handleInputChange('name', e.target.value)}
                    className={`form-input ${errors.name ? 'border-error bg-error/5' : ''}`}
                    placeholder="Votre nom complet"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <div
                      id="name-error"
                      className="form-error flex items-center gap-2"
                    >
                      <AlertCircle size={16} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="form-label text-cream-white"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={e => handleInputChange('email', e.target.value)}
                    className={`form-input ${errors.email ? 'border-error bg-error/5' : ''}`}
                    placeholder="votre@email.com"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <div
                      id="email-error"
                      className="form-error flex items-center gap-2"
                    >
                      <AlertCircle size={16} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="form-label text-cream-white"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={e => handleInputChange('phone', e.target.value)}
                    className={`form-input ${errors.phone ? 'border-error bg-error/5' : ''}`}
                    placeholder="+216 XX XXX XXX"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <div
                      id="phone-error"
                      className="form-error flex items-center gap-2"
                    >
                      <AlertCircle size={16} />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="form-label text-cream-white"
                  >
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={e => handleInputChange('company', e.target.value)}
                    className="form-input"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="form-label text-cream-white"
                >
                  Service Intéressé
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={e => handleInputChange('service', e.target.value)}
                  className="form-input"
                >
                  <option value="">Sélectionnez un service</option>
                  {services.map(service => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="form-label text-cream-white"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={e => handleInputChange('message', e.target.value)}
                  className={`form-textarea ${errors.message ? 'border-error bg-error/5' : ''}`}
                  placeholder="Décrivez votre projet et vos objectifs..."
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                />
                {errors.message && (
                  <div
                    id="message-error"
                    className="form-error flex items-center gap-2"
                  >
                    <AlertCircle size={16} />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full py-4 text-lg font-semibold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner w-5 h-5" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer le Message
                  </>
                )}
              </motion.button>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="form-success flex items-center gap-3"
                >
                  <CheckCircle size={20} />
                  <span>
                    Message envoyé avec succès ! Nous vous répondrons dans les
                    24h.
                  </span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="form-error flex items-center gap-3"
                >
                  <AlertCircle size={20} />
                  <span>Erreur lors de l'envoi. Veuillez réessayer.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
