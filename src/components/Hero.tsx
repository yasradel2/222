import { BookOpen, GraduationCap, Trophy, Globe, ArrowLeft } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const features = [
  { icon: BookOpen, title: 'تعلم', desc: 'نقدم لك محتوى تعليمي مميز وشامل' },
  { icon: GraduationCap, title: 'تدريب', desc: 'برامج تدريبية احترافية لتطوير مهاراتك' },
  { icon: Trophy, title: 'تميز', desc: 'نسعى للتميز في جودة المحتوى والخدمة' },
  { icon: Globe, title: 'مستقبل', desc: 'نؤهلك لمستقبل أفضل ورؤية أوسع' },
];

export default function Hero({ onNavigate }: HeroProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#020817' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/placeholders/stats-bg.png)' }}
      />
      <div className="absolute inset-0 hero-bg-overlay" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div
        className={`absolute bottom-0 right-0 lg:right-8 xl:right-16 h-full flex items-end transition-all duration-1000 ${
          visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}
        style={{ transitionDelay: '0.3s', zIndex: 3 }}
      >
        <img
          src="/images/placeholders/teacher.png"
          alt="الأستاذ ياسر عادل"
          className="h-[85%] max-h-[700px] object-contain object-bottom select-none"
          style={{ filter: 'drop-shadow(-20px 0 40px rgba(212,175,55,0.25))' }}
          loading="eager"
        />
      </div>

      <div
        className="absolute bottom-0 left-8 xl:left-16 hidden lg:block pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <img
          src="/images/placeholders/book.png"
          alt=""
          className="w-64 xl:w-80 object-contain animate-float"
          style={{ filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.4))', opacity: 0.85 }}
          loading="lazy"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-screen py-20">
          
          <div
            className={`order-2 lg:order-1 space-y-6 transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className="flex flex-row-reverse items-start gap-4 group text-right"
                style={{
                  transitionDelay: `${0.6 + i * 0.1}s`,
                  animation: visible ? `fadeInUp 0.6s ease-out ${0.6 + i * 0.15}s both` : 'none',
                }}
              >
                <div className="icon-circle-gold w-14 h-14 flex-shrink-0 transition-all duration-300 group-hover:border-gold-500/70 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  <feat.icon size={24} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="text-gold-400 font-bold text-lg leading-tight">{feat.title}</h3>
                  <p className="text-white/60 text-sm mt-0.5 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`order-1 lg:order-2 text-center transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="flex justify-center mb-6">
              <img
                src="/logo.png"
                alt="أكاديميتي"
                className="w-40 h-40 lg:w-52 lg:h-52 object-contain animate-float"
                style={{ filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.5))' }}
                loading="eager"
              />
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-3 leading-tight">
              <span className="gold-shimmer-text">أكاديميتي</span>
            </h1>
            <p className="text-white/80 text-lg lg:text-xl font-semibold mb-4 tracking-wide">
              للتعليم والتدريب
            </p>

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500" />
              <div className="w-2 h-2 rounded-full bg-gold-500" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500" />
            </div>

            <p className="text-white/70 text-base lg:text-lg font-medium mb-8 leading-relaxed px-4">
              معًا نبني إنسانًا مصون
              <span className="text-gold-400 mx-1">...</span>
              له مستقبلٌ مضمون
            </p>

            <div className="flex flex-row-reverse gap-4 justify-center">
              <button
                onClick={() => onNavigate('courses')}
                className="btn-gold flex items-center justify-center gap-2 text-base px-8 py-3.5 rounded-xl"
              >
                <ArrowLeft size={18} />
                ابدأ التعلم
              </button>
              <button
                onClick={() => onNavigate('courses')}
                className="btn-outline-gold flex items-center justify-center gap-2 text-base px-8 py-3.5 rounded-xl"
              >
                <ArrowLeft size={18} />
                تصفح الدورات
              </button>
            </div>
          </div>

          <div className="hidden lg:block order-3" />
        </div>
      </div>
    </section>
  );
}