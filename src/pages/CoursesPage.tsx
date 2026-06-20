import { Play, Clock, Users, Star, ArrowLeft } from 'lucide-react';

const courses = [
  { title: 'أساسيات البرمجة بلغة Python', level: 'مبتدئ', duration: '20 ساعة', students: 1250, rating: 4.9, category: 'برمجة' },
  { title: 'تصميم الجرافيك الاحترافي', level: 'متوسط', duration: '35 ساعة', students: 890, rating: 4.8, category: 'تصميم' },
  { title: 'اللغة الإنجليزية للمحترفين', level: 'متقدم', duration: '48 ساعة', students: 2100, rating: 4.9, category: 'لغات' },
  { title: 'إدارة المشاريع الاحترافية', level: 'متوسط', duration: '28 ساعة', students: 760, rating: 4.7, category: 'إدارة' },
  { title: 'التسويق الرقمي الشامل', level: 'مبتدئ', duration: '32 ساعة', students: 1560, rating: 4.8, category: 'تسويق' },
  { title: 'مهارات القيادة والتأثير', level: 'متقدم', duration: '24 ساعة', students: 650, rating: 4.9, category: 'مهارات' },
];

const levelColors: Record<string, string> = {
  'مبتدئ': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  'متوسط': 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  'متقدم': 'text-rose-400 bg-rose-400/10 border-rose-400/30',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Page Hero */}
      <div className="relative py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-4">
          <p className="text-gold-500/70 text-sm font-semibold tracking-widest uppercase mb-3">تعلم مع الأفضل</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4 gold-text">الدورات التعليمية</h1>
          <div className="section-divider mb-5" />
          <p className="text-white/50 text-base leading-relaxed">
            اكتشف مجموعتنا الشاملة من الدورات التعليمية المصممة لتطوير مهاراتك وتحقيق أهدافك
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="card-luxury group cursor-pointer"
              style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both` }}
            >
              {/* Course thumbnail */}
              <div className="relative h-44 overflow-hidden rounded-t-2xl bg-gradient-to-br from-navy-800 to-navy-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="icon-circle-gold w-16 h-16">
                    <Play size={28} className="text-gold-500 translate-x-0.5" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${levelColors[course.level]}`}>
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400">
                    {course.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-white font-bold text-base mb-3 group-hover:text-gold-400 transition-colors duration-300 leading-snug">
                  {course.title}
                </h3>

                <div className="flex items-center gap-4 text-white/40 text-xs mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={13} className="text-gold-500/60" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={13} className="text-gold-500/60" />
                    {course.students.toLocaleString('ar')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={13} className="text-gold-500 fill-gold-500" />
                    {course.rating}
                  </span>
                </div>

                <button className="w-full btn-gold py-2.5 text-sm rounded-xl flex items-center justify-center gap-2">
                  ابدأ الدورة
                  <ArrowLeft size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
