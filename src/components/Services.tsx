import { Play, BookOpen, ClipboardList, Newspaper, ArrowLeft } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const services = [
  {
    icon: Play,
    title: 'الدورات التعليمية',
    desc: 'تصفح دوراتنا التعليمية المتنوعة والشاملة',
    action: 'عرض الدورات',
    page: 'courses',
    color: 'from-amber-500/20 to-amber-900/10',
    iconColor: 'text-amber-400',
    borderColor: 'hover:border-amber-500/50',
    glowColor: 'hover:shadow-amber-500/20',
  },
  {
    icon: BookOpen,
    title: 'المذكرات والملفات',
    desc: 'تحميل المذكرات والملفات الدراسية بسهولة',
    action: 'تصفح المذكرات',
    page: 'notes',
    color: 'from-teal-500/20 to-teal-900/10',
    iconColor: 'text-teal-400',
    borderColor: 'hover:border-teal-500/50',
    glowColor: 'hover:shadow-teal-500/20',
  },
  {
    icon: ClipboardList,
    title: 'الاختبارات الإلكترونية',
    desc: 'اختبارات تفاعلية لقياس مستوى فهمك',
    action: 'ابدأ الاختبار',
    page: 'exams',
    color: 'from-cyan-500/20 to-cyan-900/10',
    iconColor: 'text-cyan-400',
    borderColor: 'hover:border-cyan-500/50',
    glowColor: 'hover:shadow-cyan-500/20',
  },
  {
    icon: Newspaper,
    title: 'الأخبار والإعلانات',
    desc: 'تابع آخر الأخبار والإعلانات والتحديثات المهمة',
    action: 'عرض المزيد',
    page: 'news',
    color: 'from-violet-500/20 to-violet-900/10',
    iconColor: 'text-violet-400',
    borderColor: 'hover:border-violet-500/50',
    glowColor: 'hover:shadow-violet-500/20',
  },
];

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <section className="page-section relative">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-gold-500/70 text-sm font-semibold tracking-widest uppercase mb-3">خدماتنا</p>
          <h2 className="section-title gold-text">ماذا نقدم لك؟</h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.page}
              className={`card-luxury group cursor-pointer ${service.borderColor} ${service.glowColor}`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`,
              }}
              onClick={() => onNavigate(service.page)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-6 flex flex-col h-full">
                {/* Icon */}
                <div className={`icon-circle-gold w-16 h-16 mb-5 group-hover:scale-110 transition-transform duration-300 ${service.iconColor}`}>
                  <service.icon size={28} />
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gold-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5">
                  {service.desc}
                </p>

                {/* Action */}
                <button
                  className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${service.iconColor} group-hover:gap-3`}
                  onClick={(e) => { e.stopPropagation(); onNavigate(service.page); }}
                >
                  {service.action}
                  <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
