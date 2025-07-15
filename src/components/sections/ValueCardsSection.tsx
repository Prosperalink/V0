import { Rocket, Sparkles, Users } from 'lucide-react';

const cards = [
  {
    icon: <Rocket size={24} className="text-blue-400" />,
    title: 'Cinematic Storytelling',
    desc: 'We turn your brand into an emotional, visual journey.',
  },
  {
    icon: <Sparkles size={24} className="text-blue-400" />,
    title: 'Cutting-Edge Design',
    desc: 'Modern, interactive, and beautiful on every device.',
  },
  {
    icon: <Users size={24} className="text-blue-400" />,
    title: 'Human-Centered Approach',
    desc: 'Every experience is crafted for real people, not just users.',
  },
];

export default function ValueCardsSection() {
  return (
    <section className="w-full py-12 flex flex-col items-center bg-transparent">
      <div className="text-xl font-semibold text-white mb-6 text-center">
        Why Orson Vision?
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full max-w-5xl">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center"
            tabIndex={0}
            aria-label={card.title}
          >
            <div className="mb-3">{card.icon}</div>
            <div className="text-base font-semibold text-white mb-2">
              {card.title}
            </div>
            <div className="text-[var(--color-subtext)] text-sm leading-relaxed">
              {card.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
