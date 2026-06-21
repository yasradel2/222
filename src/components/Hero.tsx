import { BookOpen, GraduationCap, Trophy, Globe, ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const features = [
  { icon: BookOpen, title: 'تعلم', desc: 'تقدم لك محتوى تعليمي متميز وشامل' },
  { icon: GraduationCap, title: 'تدريب', desc: 'برامج تدريبية احترافية لتطوير مهاراتك' },
  { icon: Trophy, title: 'تميز', desc: 'نسعى للتميز في جودة المحتوى والخدمة' },
  { icon: Globe, title: 'مستقبل', desc: 'نؤهلك لمستقبل أفضل ورؤية أوسع' },
];

export default function HeroSection({ onNavigate }: HeroProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* الخلفية Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-gold-500/10 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-center">
          
          {/* صورة المدرس شمال */}
          <div className={`flex justify-start transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <img 
              src="/images/placeholders/teacher.png" 
              alt="الأستاذ ياسر عادل" 
              className="h-[650px] object-contain drop-shadow-[0_0_60px_rgba(212,175,55,0.25)]"
              loading="eager"
            />
          </div>

          {/* المحتوى في النص */}
          <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* اللوجو */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-500/30 blur-3xl rounded-full" />
                <img 
                  src="/logo.png" 
                  alt="أكاديميتي" 
                  className="relative w-48 h-48 object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.6)]" 
                />
              </div>
            </div>

            {/* العنوان */}
            <h1 className="text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-b from-gold-300 to-gold-600 bg-clip-text text-transparent">
              أكاديميتي
            </h1>
            <p className="text-gold-400 text-lg font-semibold mb-4">للتعليم والتدريب</p>

            {/* الخط والنجمة */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500" />
              <span className="text-gold-400 text-sm">◆</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500" />
            </div>

            {/* الوصف */}
            <p className="text-white/80 text-base mb-8 px-4">
              معاً نبني إنساناً مصوناً... ليبني مستقبلاً مضموناً.
            </p>

            {/* الأزرار */}
            <div className="flex flex-row-reverse gap-4 justify-center">
              <button
                onClick={() => onNavigate('courses')}
                className="flex flex-row-reverse items-center gap-2 px-7 py-3 rounded-lg bg-gradient-to-b from-gold-400 to-gold-600 text-black font-bold text-sm shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all"
              >
                <ArrowLeft size={16} />
                ابدأ التعلم
              </button>
              <button
                onClick={() => onNavigate('courses')}
                className="flex flex-row-reverse items-center gap-2 px-7 py-3 rounded-lg border-gold-500/50 text-gold-400 font-semibold text-sm hover:bg-gold-500/10 transition-all"
              >
                <ArrowLeft size={16} />
                تصفح الدورات
              </button>
            </div>
          </div>

          {/* المميزات يمين مع الخط العمودي */}
          <div className={`flex justify-end transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ transitionDelay: '0.3s' }}>
            <div className="relative pr-12">
              {/* الخط العمودي الذهبي */}
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/60 to-transparent" />
              
              <div className="space-y-10">
                {features.map((feat, i) => (
                  <div 
                    key={feat.title} 
                    className="relative flex items-center gap-4 group"
                    style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
                  >
                    {/* الخط الأفقي الموصل */}
                    <div className="absolute -right-4 w-6 h-px bg-gold-500/50" />
                    
                    {/* النص يمين */}
                    <div className="text-right flex-1">
                      <h3 className="text-gold-400 font-bold text-xl mb-1">{feat.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{feat.desc}</p>
                    </div>

                    {/* الدايرة والأيقونة */}
                    <div className="w-14 h-14 rounded-full border-2 border-gold-500/60 flex items-center justify-center bg-black/50 backdrop-blur-sm group-hover:border-gold-400 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all flex-shrink-0">
                      <feat.icon size={24} className="text-gold-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
