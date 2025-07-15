'use client';

import { getAssetUrl } from '@/utils/asset-fallbacks';
import { motion } from 'framer-motion';
import { Play, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  cinematicRole: string;
  bio: string;
  videoUrl: string;
  image: string;
}

export default function TeamShowcase() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  // Final copy for 'Meet the Crew' - The Creative Team
  const teamData = [
    {
      id: 1,
      name: 'Alex Chen',
      role: 'Creative Director',
      cinematicRole: 'Director of Photography',
      bio: 'Crafts visual narratives with cinematic precision, ensuring every project tells a compelling story through sophisticated design and strategic thinking. Leads our creative vision with 12+ years of experience in digital storytelling.',
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      role: 'UX Strategist',
      cinematicRole: 'Screenwriter',
      bio: 'Develops user journeys that feel like cinematic experiences, blending psychology with design to create memorable digital interactions. Specializes in emotional design and user behavior analysis.',
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      role: 'Technical Lead',
      cinematicRole: 'Production Designer',
      bio: 'Builds the technical foundation that brings cinematic visions to life, ensuring performance and scalability meet Hollywood standards. Expert in modern web technologies and optimization.',
    },
    {
      id: 4,
      name: 'Elena Rodriguez',
      role: 'Content Strategist',
      cinematicRole: 'Story Editor',
      bio: 'Shapes brand narratives with the precision of a film editor, crafting content that resonates and converts through strategic storytelling. Creates compelling brand voices and content strategies.',
    },
  ];

  useEffect(() => {
    const loadTeamAssets = () => {
      const assets = teamData.map((member, index) => {
        // Use asset fallback system for team members
        const memberNumber = (index % 3) + 1; // Cycle through 3 team members
        return {
          ...member,
          image: getAssetUrl(`team-member-${memberNumber}-image`, 'image'),
          videoUrl: getAssetUrl(`team-member-${memberNumber}`, 'video'),
        };
      });
      setTeamMembers(assets);
      setLoading(false);
    };

    loadTeamAssets();
  }, []);

  return (
    <section className="relative py-24 bg-dark-tone overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-tone via-deep-blue to-dark-tone" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(212,175,55,0.03),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 right-1/6 w-1 h-1 bg-golden-accent rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute bottom-1/3 left-1/5 w-0.5 h-0.5 bg-golden-accent rounded-full"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-golden-accent mb-6">
            Meet the Crew
          </h2>
          <p className="text-xl text-text-subtle max-w-3xl mx-auto">
            A film is only as good as its crew. Our team is a collective of
            dedicated artisans, each a master of their respective craft.
          </p>
        </motion.div>

        {/* Team Grid */}
        {!loading && teamMembers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative bg-deep-blue/50 backdrop-blur-sm rounded-lg overflow-hidden border border-golden-accent/20 hover:border-golden-accent/40 transition-all duration-300"
              >
                {/* Video Background */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    poster={member.image}
                    onError={e => {
                      e.currentTarget.poster = '/assets/images/placeholder.jpg';
                    }}
                  >
                    <source src={member.videoUrl} type="video/mp4" />
                  </video>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/90 via-deep-blue/50 to-transparent" />

                  {/* Play Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-golden-accent/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-deep-blue" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-playfair font-bold text-golden-accent mb-1">
                      {member.name}
                    </h3>
                    <p className="text-text-white font-medium mb-1">
                      {member.role}
                    </p>
                    <p className="text-sm text-golden-accent font-medium">
                      {member.cinematicRole}
                    </p>
                  </div>

                  <p className="text-text-subtle text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-golden-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="text-golden-accent">
              <Users className="w-8 h-8 animate-pulse" />
            </div>
          </div>
        )}

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-golden-accent mb-2">
                15+
              </div>
              <div className="text-text-subtle">
                Combined Years of Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden-accent mb-2">
                200+
              </div>
              <div className="text-text-subtle">
                Cinematic Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden-accent mb-2">
                100%
              </div>
              <div className="text-text-subtle">Team Collaboration Success</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
