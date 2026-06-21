import { BookOpen, GraduationCap, Trophy, Globe, ArrowLeft, FileText, ClipboardList, Book, Monitor, Users, Award, Medal, Clock, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const features = [
  { icon: BookOpen, title: 'تعلم', desc: 'تقدم لك محتوى تعليمي\nمتميز وشامل' },
  { icon: GraduationCap, title: 'تدريب', desc: 'برامج تدريبية احترافية\nلتطوير مهاراتك' },
  { icon: Trophy, title: 'تميز', desc: 'نسعى للتميز في جودة\nالمحتوى والخدمة' },
  { icon: Globe, title: 'مستقبل', desc: 'نؤهلك لمستقبل أفضل\nورؤية أوسع' },
];

const bottomCards = [
  { icon: Monitor, title: 'الدورات التعليمية', desc: 'تصفح دوراتنا التعليمية\nالمتنوعة والشاملة', btn: 'عرض الدورات', color: 'gold' },
  { icon: Book, title: 'المذكرات والملفات', desc: 'تحميل المذكرات والملفات\nالدراسية بسهولة', btn: 'تصفح المذكرات', color: 'blue' },
  { icon: ClipboardList, title: 'الاختبارات الإلكترونية', desc: 'اختبارات تفاعلية لقياس\nمستوى فهمك', btn: 'ابدأ الاختبار', color: 'teal' },
  { icon: FileText, title: 'الأخبار والإعلانات', desc: 'تابع آخر الأخبار والإعلانات\nوالتحديثات المهمة', btn: 'عرض المزيد', color: 'purple' },
];

const stats = [
  { icon: Users, num: '+10,000', label: 'طالب و طالبة' },
  { icon: Award, num: '+150', label: 'دورة تدريبية' },
  { icon: Medal, num: '+50', label: 'مدرب معتمد' },
  { icon: Clock, num: 'دعم فني', label: 'على مدار الساعة' },
  { icon: Shield, num: 'بيئة آمنة', label: 'للتعلم والتدريب' },
];

export default function Hero({ onNavigate }: HeroProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex-col justify-between overflow-hidden" style={{ background: '#020817' }}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/placeholders/library-bg.jpg)' }} />
      <div className="absolute inset-0 bg-black/70" />

      {/* المحتوى الرئيسي بدون القبعة العائمة */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* الأيقونات شمال */}
            <div className={`space-y-8 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative pr-8">
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/40 via-gold-500/80 to-gold-500/40" />
                {features.map((feat, i) => (
                  <div key={feat.title} className="relative flex items-center gap-4 mb-8 group">
                    <div className="absolute -right-4 w-8 h-px bg-gold-500/60" />
                    <div className="w-16 h-16 rounded-full border-2 border-gold-500/50 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:border-gold-400 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all">
                      <feat.icon size={28} className="text-gold-400" />
                    </div>
                    <div className="text-right">
                      <h3 className="text-gold-400 font-bold text-xl mb-1">{feat.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* النص في النص - شلت الطاقية العائمة من هنا */}
            <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex justify-center mb-6">
                <img src="/logo.png" alt="أكاديميتي" className="w-48 h-48 object-contain" style={{ filter: 'drop-shadow(0 0 40px rgba(212,175,55,0.6))' }} />
              </div>
              <h1 className="text-5xl lg:text-6xl font-black mb-2 gold-shimmer-text">أكاديميتي</h1>
              <p className="text-gold-400 text-xl font-semibold mb-4">للتعليم والتدريب</p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-20 bg-gold-500" />
                <div className="text-gold-400 text-xs">✦</div>
                <div className="h-px w-20 bg-gold-500" />
              </div>
              <p className="text-white/80 text-lg mb-8">معاً نبني إنساناً مصوناً... ليبني مستقبلًا مضمونًا.</p>
              <div className="flex flex-row-reverse gap-4 justify-center">
                <button onClick={() => onNavigate('courses')} className="btn-gold flex items-center gap-2 px-8 py-3 rounded-lg font-semibold">
                  <ArrowLeft size={18} /> ابدأ التعلم
                </button>
                <button onClick={() => onNavigate('courses')} className="btn-outline-gold flex items-center gap-2 px-8 py-3 rounded-lg font-semibold border-gold-500/50 text-gold-400 hover:bg-gold-500/10">
                  <ArrowLeft size={18} /> تصفح الدورات
                </button>
              </div>
            </div>

            {/* صورة المدرس يمين بدون الدايرة الصفراء */}
            <div className={`flex justify-end transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ transitionDelay: '0.3s' }}>
              <img src="/images/placeholders/teacher.png" alt="الأستاذ ياسر عادل" className="h-[600px] object-contain drop-shadow-[0_0_50px_rgba(212,175,55,0.3)]" loading="eager" />
            </div>
          </div>

          {/* شلت الكتاب المضيء والطاقية اللي كانت فوقه */}
        </div>
      </div>

      {/* الكروت الأربعة مرة واحدة بس - شلت التكرار */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bottomCards.map((card) => (
            <div key={card.title} className={`bg-black/40 backdrop-blur-md border-${card.color}-500/30 rounded-xl p-5 hover:border-${card.color}-400/60 transition-all`}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-${card.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                  <card.icon size={24} className={`text-${card.color}-400`} />
                </div>
                <div className="text-right flex-1">
                  <h4 className={`text-${card.color}-400 font-bold mb-1`}>{card.title}</h4>
                  <p className="text-white/60 text-xs leading-relaxed whitespace-pre-line">{card.desc}</p>
                </div>
              </div>
              <button onClick={() => onNavigate('courses')} className={`w-full py-2 rounded-lg border-${card.color}-500/40 text-${card.color}-400 text-sm hover:bg-${card.color}-500/10 flex items-center justify-center gap-2`}>
                <ArrowLeft size={14} /> {card.btn}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* الإحصائيات مرة واحدة بس تحت */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 text-right">
                <stat.icon size={32} className="text-gold-400 flex-shrink-0" />
                <div>
                  <div className="text-gold-400 font-bold text-lg">{stat.num}</div>
                  <div className="text-white/60 text-xs">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
