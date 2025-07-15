'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cinematic-blue to-cinematic-gold" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-200">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These terms and conditions govern your use of our website and
              services. By using our services, you agree to these terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[var(--bg-primary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]"
            >
              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6">
                Acceptance of Terms
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement. If you do
                not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 mt-8">
                Use License
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Orson Vision&apos;s
                website for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title.
              </p>

              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 mt-8">
                Disclaimer
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                The materials on Orson Vision&apos;s website are provided on an
                &apos;as is&apos; basis. Orson Vision makes no warranties,
                expressed or implied, and hereby disclaims and negates all other
                warranties including without limitation, implied warranties or
                conditions of merchantability, fitness for a particular purpose,
                or non-infringement of intellectual property or other violation
                of rights.
              </p>

              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 mt-8">
                Limitations
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                In no event shall Orson Vision or its suppliers be liable for
                any damages (including, without limitation, damages for loss of
                data or profit, or due to business interruption) arising out of
                the use or inability to use the materials on Orson Vision&apos;s
                website.
              </p>

              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 mt-8">
                Revisions and Errata
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                The materials appearing on Orson Vision&apos;s website could
                include technical, typographical, or photographic errors. Orson
                Vision does not warrant that any of the materials on its website
                are accurate, complete or current.
              </p>

              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 mt-8">
                Links
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Orson Vision has not reviewed all of the sites linked to its
                website and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply
                endorsement by Orson Vision of the site.
              </p>

              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 mt-8">
                Site Terms of Use Modifications
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Orson Vision may revise these terms of use for its website at
                any time without notice. By using this website you are agreeing
                to be bound by the then current version of these Terms and
                Conditions of Use.
              </p>

              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 mt-8">
                Contact Information
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                If you have any questions about these Terms and Conditions,
                please contact us at legal@orsonvision.com.
              </p>

              <div className="mt-8 p-4 bg-[var(--bg-secondary)] rounded-lg">
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong>Last updated:</strong> December 2024
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
