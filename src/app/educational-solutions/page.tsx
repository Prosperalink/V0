import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions Éducatives - Digital Vérité',
  description:
    'Transformez la présence numérique de votre école. Vidéos marketing, campagnes de recrutement, sites web éducatifs et contenu authentique.',
  keywords:
    'école, marketing scolaire, recrutement étudiants, vidéo éducative, site web école, transformation numérique',
};

export default function EducationalSolutionsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-foreground)] mb-6 golden-text-high-contrast">
                Transformez Votre Présence Numérique
              </h1>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
                Nous aidons les écoles à raconter leur histoire authentique et à
                attirer les bons étudiants avec des solutions numériques qui
                fonctionnent vraiment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  Audit Numérique Gratuit
                </button>
                <button className="px-8 py-4 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
                  Voir Nos Réalisations
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Offerings */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-foreground)] mb-6">
                Solutions Éducatives Complètes
              </h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                De la vidéo marketing au site web, en passant par les campagnes
                de recrutement, nous couvrons tous les aspects de votre
                transformation numérique.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* School Marketing Videos */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎬</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                    Vidéos Marketing Scolaire
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6">
                    Vidéos authentiques qui racontent l'histoire de votre école
                    et attirent les bons étudiants.
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Films institutionnels
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Témoignages étudiants
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Vidéos de campus
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Contenu pour réseaux sociaux
                    </span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-blue-600">
                    À partir de 3,500€
                  </span>
                </div>
              </div>

              {/* Student Recruitment Campaigns */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                    Campagnes de Recrutement
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6">
                    Stratégies digitales ciblées pour attirer et convertir les
                    meilleurs étudiants.
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Stratégie de contenu
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Publicités ciblées
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Suivi des conversions
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Optimisation continue
                    </span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-600">
                    À partir de 2,500€
                  </span>
                </div>
              </div>

              {/* Educational Content Creation */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                    Création de Contenu Éducatif
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6">
                    Contenu authentique qui met en valeur votre pédagogie et vos
                    valeurs.
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Vidéos pédagogiques
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Photographie scolaire
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Contenu pour blog
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Newsletters
                    </span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-green-600">
                    À partir de 1,800€
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-[var(--bg-secondary)]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-foreground)] mb-6">
                Transformations Numériques Réelles
              </h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                Découvrez comment nous avons aidé ces écoles à augmenter leurs
                inscriptions et leur visibilité.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Story 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                    École Internationale de Tunis
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6">
                    "Digital Vérité a transformé notre présence numérique. Notre
                    campagne de recrutement a augmenté les inscriptions de
                    manière significative grâce à des vidéos authentiques."
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <span className="text-2xl font-bold text-blue-500">
                        +40%
                      </span>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Augmentation inscriptions
                      </p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-blue-500">
                        +200%
                      </span>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Trafic site web
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                    Lycée Technique de Sousse
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6">
                    "L'approche vérité numérique de Digital Vérité nous a permis
                    de montrer l'authenticité de notre pédagogie et d'attirer
                    des étudiants de qualité."
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <span className="text-2xl font-bold text-blue-500">
                        +60%
                      </span>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Candidatures qualifiées
                      </p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-blue-500">
                        +150%
                      </span>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Engagement parents
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-foreground)] mb-6">
                Tarifs Transparents
              </h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                Des solutions adaptées à chaque école, avec des prix clairs et
                des résultats mesurables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic School Package */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-blue-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                    Package École de Base
                  </h3>
                  <div className="text-4xl font-bold text-blue-600 mb-4">
                    3,500€
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    Pour les petites écoles
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Film institutionnel 5-8 min
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Photographie scolaire
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Contenu réseaux sociaux
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Livraison 3 semaines
                    </span>
                  </li>
                </ul>
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200">
                  Choisir ce Package
                </button>
              </div>

              {/* Comprehensive School Package */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 border-2 border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Plus Populaire
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                    Package École Complet
                  </h3>
                  <div className="text-4xl font-bold text-purple-600 mb-4">
                    6,500€
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    Notre package le plus demandé
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-purple-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Film institutionnel 10-15 min
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-purple-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Campagne de recrutement
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-purple-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Site web éducatif
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-purple-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Contenu mensuel 3 mois
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-purple-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Suivi analytics
                    </span>
                  </li>
                </ul>
                <button className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-200">
                  Choisir ce Package
                </button>
              </div>

              {/* Digital Transformation Package */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border-2 border-green-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                    Transformation Numérique
                  </h3>
                  <div className="text-4xl font-bold text-green-600 mb-4">
                    12,000€
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    L'expérience complète
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Audit numérique complet
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Stratégie marketing 6 mois
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Site web + CRM
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Formation équipe
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Support 12 mois
                    </span>
                  </li>
                </ul>
                <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200">
                  Choisir ce Package
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à Transformer Votre École ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un audit numérique gratuit et découvrez
              comment nous pouvons aider votre école à attirer les meilleurs
              étudiants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-500 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300">
                Audit Numérique Gratuit
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-500 transition-all duration-300">
                Voir Plus d'Exemples
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
