import { Calendar, Eye, Tag, ArrowLeft } from 'lucide-react';

const news = [
  {
    title: 'انطلاق الفصل الدراسي الجديد بدورات متميزة',
    excerpt: 'يسعدنا الإعلان عن انطلاق الفصل الدراسي الجديد بمجموعة من الدورات المتميزة التي تلبي احتياجات الطلاب في مختلف المراحل.',
    date: '15 يناير 2025',
    views: 1240,
    category: 'إعلانات',
  },
  {
    title: 'إضافة 20 دورة جديدة في مجال التكنولوجيا',
    excerpt: 'تفخر أكاديميتي بإضافة 20 دورة جديدة في مجالات الذكاء الاصطناعي وتطوير التطبيقات وأمن المعلومات.',
    date: '10 يناير 2025',
    views: 890,
    category: 'دورات',
  },
  {
    title: 'حفل تكريم المتفوقين لعام 2024',
    excerpt: 'أقامت الأكاديمية حفل تكريم للطلاب المتفوقين الذين أتموا دوراتهم بتميز خلال عام 2024.',
    date: '5 يناير 2025',
    views: 2100,
    category: 'فعاليات',
  },
  {
    title: 'شراكة جديدة مع كبرى الشركات التقنية',
    excerpt: 'وقّعت أكاديميتي اتفاقية شراكة مع عدد من كبرى الشركات التقنية لتوفير فرص التدريب العملي للخريجين.',
    date: '1 يناير 2025',
    views: 3400,
    category: 'أخبار',
  },
  {
    title: 'إطلاق منصة الاختبارات التفاعلية الجديدة',
    excerpt: 'أعلنت الأكاديمية عن إطلاق منصة اختبارات تفاعلية محدثة تتيح للطلاب قياس مستواهم بشكل فوري.',
    date: '28 ديسمبر 2024',
    views: 760,
    category: 'تقنية',
  },
  {
    title: 'برنامج المنح الدراسية للطلاب المتميزين',
    excerpt: 'أطلقت أكاديميتي برنامج منح دراسية يتيح للطلاب المتميزين الالتحاق بالدورات مجانًا.',
    date: '20 ديسمبر 2024',
    views: 4200,
    category: 'إعلانات',
  },
];

const categoryColors: Record<string, string> = {
  'إعلانات': 'text-gold-400 bg-gold-400/10 border-gold-400/30',
  'دورات': 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  'فعاليات': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  'أخبار': 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  'تقنية': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
};

export default function NewsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="relative py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-4">
          <p className="text-gold-500/70 text-sm font-semibold tracking-widest uppercase mb-3">ابقَ على اطلاع</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4 gold-text">الأخبار والإعلانات</h1>
          <div className="section-divider mb-5" />
          <p className="text-white/50 text-base leading-relaxed">
            تابع آخر أخبار وإعلانات وتحديثات أكاديميتي للتعليم والتدريب
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <div
              key={i}
              className="card-luxury group cursor-pointer"
              style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both` }}
            >
              {/* Thumbnail placeholder */}
              <div className="relative h-40 bg-gradient-to-br from-navy-700 to-navy-900 rounded-t-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="icon-circle-gold w-14 h-14 opacity-60">
                    <Tag size={22} className="text-gold-500" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[item.category] || 'text-gold-400 bg-gold-400/10 border-gold-400/30'}`}>
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-gold-400 transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between text-white/30 text-xs mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-gold-500/50" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye size={12} className="text-gold-500/50" />
                    {item.views.toLocaleString('ar')}
                  </span>
                </div>

                <button className="flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-400 transition-colors duration-200 group/btn">
                  اقرأ المزيد
                  <ArrowLeft size={15} className="transition-transform duration-200 group-hover/btn:-translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
