import { ClipboardList, Timer, HelpCircle, ArrowLeft, CheckCircle } from 'lucide-react';

const exams = [
  { title: 'اختبار الرياضيات - الجبر والهندسة', subject: 'رياضيات', questions: 30, duration: '45 دقيقة', level: 'متوسط', attempts: 1820 },
  { title: 'اختبار اللغة الإنجليزية الشامل', subject: 'إنجليزي', questions: 40, duration: '60 دقيقة', level: 'متقدم', attempts: 3400 },
  { title: 'اختبار الفيزياء - الميكانيكا', subject: 'فيزياء', questions: 25, duration: '35 دقيقة', level: 'متوسط', attempts: 1290 },
  { title: 'اختبار الكيمياء العضوية', subject: 'كيمياء', questions: 20, duration: '30 دقيقة', level: 'مبتدئ', attempts: 980 },
  { title: 'اختبار الأحياء - التنفس الخلوي', subject: 'أحياء', questions: 35, duration: '50 دقيقة', level: 'متوسط', attempts: 760 },
  { title: 'اختبار التاريخ - العصر الحديث', subject: 'تاريخ', questions: 28, duration: '40 دقيقة', level: 'مبتدئ', attempts: 1150 },
];

const levelColors: Record<string, string> = {
  'مبتدئ': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  'متوسط': 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  'متقدم': 'text-rose-400 bg-rose-400/10 border-rose-400/30',
};

export default function ExamsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="relative py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-4">
          <p className="text-gold-500/70 text-sm font-semibold tracking-widest uppercase mb-3">قياس مستواك</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4 gold-text">الاختبارات الإلكترونية</h1>
          <div className="section-divider mb-5" />
          <p className="text-white/50 text-base leading-relaxed">
            اختبارات تفاعلية متنوعة لقياس مستوى فهمك وتتبع تقدمك في التعلم
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam, i) => (
            <div
              key={i}
              className="card-luxury group cursor-pointer"
              style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both` }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="icon-circle-gold w-14 h-14 group-hover:scale-110 transition-transform duration-300">
                    <ClipboardList size={24} className="text-gold-500" />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${levelColors[exam.level]}`}>
                    {exam.level}
                  </span>
                </div>

                <h3 className="text-white font-bold text-base mb-4 group-hover:text-gold-400 transition-colors duration-300 leading-snug">
                  {exam.title}
                </h3>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="glass-card rounded-xl p-3 text-center">
                    <HelpCircle size={16} className="text-gold-500/70 mx-auto mb-1" />
                    <div className="text-white font-bold text-sm">{exam.questions}</div>
                    <div className="text-white/40 text-xs">سؤال</div>
                  </div>
                  <div className="glass-card rounded-xl p-3 text-center">
                    <Timer size={16} className="text-gold-500/70 mx-auto mb-1" />
                    <div className="text-white font-bold text-xs leading-tight">{exam.duration}</div>
                    <div className="text-white/40 text-xs">المدة</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white/30 text-xs mb-4">
                  <CheckCircle size={13} className="text-gold-500/50" />
                  {exam.attempts.toLocaleString('ar')} محاولة
                </div>

                <button className="w-full btn-gold py-2.5 text-sm rounded-xl flex items-center justify-center gap-2">
                  ابدأ الاختبار
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
