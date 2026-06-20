import { useEffect, useRef, useState } from 'react';
import { Users, BookMarked, Award, Headphones, Shield } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '+10,000',
    label: 'طالب وطالبة',
  },
  {
    icon: BookMarked,
    number: '+150',
    label: 'دورة تدريبية',
  },
  {
    icon: Award,
    number: '+50',
    label: 'مدرب معتمد',
  },
  {
    icon: Headphones,
    number: 'دعم فني',
    label: 'على مدار الساعة',
  },
  {
    icon: Shield,
    number: 'بيئة آمنة',
    label: 'للتعلم والتدريب',
  },
];

export default function Statistics() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #020817 0%, #0d1a38 50%, #020817 100%)',
      }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-gold-500/70 text-sm font-semibold tracking-widest uppercase mb-3">أرقامنا تتحدث</p>
          <h2 className="section-title gold-text">إنجازاتنا بالأرقام</h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center group transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="card-luxury p-6 hover:border-gold-500/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                {/* Icon */}
                <div className="icon-circle-gold w-14 h-14 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-glow-pulse">
                  <stat.icon size={24} className="text-gold-500" />
                </div>

                {/* Number */}
                <div className="stats-number mb-1">{stat.number}</div>

                {/* Label */}
                <p className="text-white/60 text-sm font-medium leading-tight">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
