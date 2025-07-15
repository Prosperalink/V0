import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions Mariage - Digital Vérité',
  description:
    'Capturez votre jour parfait avec authenticité. Films cinématographiques, photographie, sites web mariage et marketing personnalisé.',
  keywords:
    'mariage, vidéo mariage, photographie mariage, film cinématographique, site web mariage, marketing mariage',
};

export default function WeddingSolutionsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-foreground)] mb-6">
                Capturez Votre Jour Parfait
              </h1>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
                Nous documentons votre histoire d'amour avec authenticité et art
                cinématographique. Chaque moment, chaque émotion, capturé avec
                la précision d'un film.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300">
                  Réserver Consultation
                </button>
                <button className="px-8 py-4 border-2 border-pink-500 text-pink-500 font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-300">
                  Voir Notre Portfolio
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
                Services Complets de Mariage
              </h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                De la photographie à la vidéographie, en passant par le site web
                et le marketing, nous couvrons tous les aspects de votre jour
                spécial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Photography & Videography */}
              <div className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📸</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                    Photographie & Vidéographie
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6">
                    Capture authentique de chaque moment de votre journée
                    spéciale avec une approche cinématographique.
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Couverture complète de la journée
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Approche discrète et naturelle
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Qualité cinématographique
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Livraison dans les 4-6 semaines
                    </span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-pink-600">
                    À partir de 2,500€
                  </span>
                </div>
              </div>

              {/* Cinematic Films */}
              <div className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎬</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                    Films Cinématographiques
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6">
                    Films d'art qui racontent votre histoire d'amour avec
                    émotion et authenticité.
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Film principal de 8-12 minutes
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Teaser de 2-3 minutes
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Narration personnalisée
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Musique originale
                    </span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-red-600">
                    À partir de 4,500€
                  </span>
                </div>
              </div>

              {/* Wedding Websites */}
              <div className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                    Sites Web Mariage
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6">
                    Sites web élégants pour partager votre histoire et organiser
                    votre événement.
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Design personnalisé
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Galerie photos interactive
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      RSVP intégré
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    <span className="text-[var(--color-foreground)]">
                      Optimisé mobile
                    </span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-600">
                    À partir de 1,200€
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
                Histoires de Mariage Réelles
              </h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                Découvrez comment nous avons capturé l'authenticité de ces
                journées spéciales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Story 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                    Sarah & Ahmed - Mariage Traditionnel
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6">
                    "Digital Vérité a su capturer l'essence de notre mariage
                    traditionnel avec une authenticité rare. Le film
                    cinématographique dépasse nos attentes et raconte
                    parfaitement notre histoire."
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <span className="text-2xl font-bold text-pink-500">
                        +150%
                      </span>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Engagement réseaux sociaux
                      </p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-pink-500">
                        4.9/5
                      </span>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Note client
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                    Marie & Thomas - Mariage Moderne
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6">
                    "L'approche vérité numérique de Digital Vérité a permis de
                    capturer des moments authentiques que nous n'aurions jamais
                    pensé possible. Le résultat est émotionnel et vrai."
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <span className="text-2xl font-bold text-pink-500">
                        +200%
                      </span>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Partages vidéo
                      </p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-pink-500">
                        5.0/5
                      </span>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Note client
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
                Pas de surprises, pas de frais cachés. Des prix clairs pour des
                services de qualité.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Package */}
              <div className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-2xl p-8 border-2 border-pink-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                    Package Essentiel
                  </h3>
                  <div className="text-4xl font-bold text-pink-600 mb-4">
                    2,500€
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    Parfait pour les mariages intimes
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-pink-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      8h de couverture
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-pink-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Film de 5-8 minutes
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-pink-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      200 photos éditées
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-pink-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Livraison 4 semaines
                    </span>
                  </li>
                </ul>
                <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-200">
                  Choisir ce Package
                </button>
              </div>

              {/* Premium Package */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-red-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Plus Populaire
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                    Package Premium
                  </h3>
                  <div className="text-4xl font-bold text-red-600 mb-4">
                    4,500€
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    Notre package le plus demandé
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-red-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      12h de couverture
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-red-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Film cinématographique 10-15 min
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-red-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      400 photos éditées
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-red-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Teaser de 2-3 minutes
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-red-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Site web mariage inclus
                    </span>
                  </li>
                </ul>
                <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200">
                  Choisir ce Package
                </button>
              </div>

              {/* Luxury Package */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-purple-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                    Package Luxe
                  </h3>
                  <div className="text-4xl font-bold text-purple-600 mb-4">
                    8,000€
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    L'expérience ultime
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-purple-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Couverture complète 2 jours
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-purple-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Film cinématographique 15-20 min
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-purple-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      600 photos éditées
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-purple-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Album photo premium
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-purple-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-foreground)]">
                      Site web + marketing
                    </span>
                  </li>
                </ul>
                <button className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-200">
                  Choisir ce Package
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-500 to-red-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à Capturer Votre Histoire d'Amour ?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre vision et découvrir comment
              nous pouvons documenter votre jour spécial avec authenticité et
              art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-pink-500 font-semibold rounded-lg hover:bg-pink-50 transition-all duration-300">
                Réserver Consultation Gratuite
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-500 transition-all duration-300">
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
