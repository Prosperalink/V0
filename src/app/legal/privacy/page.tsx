'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-200">
              Your Privacy Matters to Us
            </h2>
            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are committed to protecting your privacy and ensuring the
              security of your personal information. This policy outlines how we
              collect, use, and safeguard your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
                Information We Collect
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                We collect information you provide directly to us, such as when
                you contact us, subscribe to our newsletter, or request our
                services. This may include your name, email address, phone
                number, and any other information you choose to provide.
              </p>

              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 mt-8">
                How We Use Your Information
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                We use the information we collect to provide, maintain, and
                improve our services, communicate with you, and develop new
                features and services. We may also use your information to send
                you updates, marketing communications, and other information
                that may be of interest to you.
              </p>

              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 mt-8">
                Information Sharing
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy. We may share your information with
                trusted third-party service providers who assist us in operating
                our website and providing our services.
              </p>

              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 mt-8">
                Data Security
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the internet or electronic storage is 100% secure.
              </p>

              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 mt-8">
                Your Rights
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                You have the right to access, update, or delete your personal
                information. You may also opt out of receiving marketing
                communications from us at any time. To exercise these rights,
                please contact us using the information provided below.
              </p>

              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 mt-8">
                Contact Us
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at privacy@orsonvision.com.
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
