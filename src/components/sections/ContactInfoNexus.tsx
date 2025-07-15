'use client';

import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@orsonvision.com',
    link: 'mailto:hello@orsonvision.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+216 XX XXX XXX',
    link: 'tel:+216XXXXXXXX',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: 'Den Den, Manubah Governorate, Tunisia',
    link: 'https://maps.google.com/?q=Den+Den+Tunisia',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/orsonvision',
    color: 'hover:text-blue-400',
  },
  {
    icon: Twitter,
    name: 'Twitter',
    url: 'https://twitter.com/orsonvision',
    color: 'hover:text-blue-400',
  },
  {
    icon: Instagram,
    name: 'Instagram',
    url: 'https://instagram.com/orsonvision',
    color: 'hover:text-pink-400',
  },
  {
    icon: Facebook,
    name: 'Facebook',
    url: 'https://facebook.com/orsonvision',
    color: 'hover:text-blue-600',
  },
];

export default function ContactInfoNexus() {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-tone via-deep-blue to-dark-tone">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-cinematic font-bold mb-6 text-golden-accent"
          >
            The Nexus Information Hub
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-text-white max-w-3xl mx-auto"
          >
            Connect with us through multiple channels and discover our cosmic
            headquarters.
          </motion.p>

          {/* Golden Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            viewport={{ once: true }}
            className="w-32 h-1 bg-gradient-to-r from-golden-accent to-yellow-400 mx-auto mt-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-golden-accent/20 rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-golden-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-golden-accent mb-1">
                      {info.title}
                    </h3>
                    <a
                      href={info.link}
                      className="text-text-white hover:text-golden-accent transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-cinematic font-bold text-golden-accent mb-6">
                Follow Our Cosmic Journey
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-golden-accent/20 rounded-full flex items-center justify-center text-golden-accent transition-all duration-300 hover:bg-golden-accent/30 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-dark-tone/50 to-mid-tone/50 p-6 rounded-2xl border border-golden-accent/20">
              <h3 className="text-xl font-cinematic font-bold text-golden-accent mb-4">
                Cosmic Business Hours
              </h3>
              <div className="space-y-2 text-text-white">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/contact/map/tunisia-nexus.jpg"
                alt="Tunisia Nexus Location"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              {/* Overlay with cinematic glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/20 via-transparent to-transparent" />

              {/* Location marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-8 h-8 bg-golden-accent rounded-full flex items-center justify-center shadow-lg"
                >
                  <MapPin className="w-5 h-5 text-deep-blue" />
                </motion.div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-golden-accent/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-golden-accent/5 rounded-full blur-xl" />
          </motion.div>
        </div>

        {/* Additional cosmic elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-20 left-10 w-2 h-2 bg-golden-accent rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute top-40 right-20 w-1 h-1 bg-golden-accent rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
