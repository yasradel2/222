import { Download, FileText, Eye, ArrowLeft } from 'lucide-react';

const notes = [
  { title: 'مذكرة الرياضيات - الصف الأول الثانوي', subject: 'رياضيات', pages: 48, downloads: 3200, format: 'PDF' },
  { title: 'ملخص قواعد اللغة العربية الشامل', subject: 'عربي', pages: 36, downloads: 5100, format: 'PDF' },
  { title: 'مذكرة الفيزياء - الوحدة الأولى', subject: 'فيزياء', pages: 52, downloads: 2800, format: 'PDF' },
  { title: 'مراجعة نهائية في الكيمياء', subject: 'كيمياء', pages: 40, downloads: 4300, format: 'PDF' },
  { title: 'مذكرة الأحياء - الخلية وتقسيماتها', subject: 'أحياء', pages: 30, downloads: 1900, format: 'PDF' },
  { title: 'ملخص التاريخ والجغرافيا', subject: 'اجتماعيات', pages: 44, downloads: 2600, format: 'PDF' },
];

const subjectColors: Record<string, string> = {
  'رياضيات': 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  'عربي': 'text-green-400 bg-green-400/10 border-green-400/30',
  'فيزياء': 'text-purple-400 bg-purple-400/10 border-purple-400/30',
  'كيمياء': 'text-teal-400 bg-teal-400/10 border-teal-400/30',
  'أحياء': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  'اجتماعيات': 'text-amber-400 bg-amber-400/10 border-amber-400/30',
};

export default function NotesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="relative py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-4">
          <p className="text-gold-500/70 text-sm font-semibold tracking-widest uppercase mb-3">مواد دراسية</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4 gold-text">المذكرات والملفات</h1>
          <div className="section-divider mb-5" />
          <p className="text-white/50 text-base leading-relaxed">
            تحميل المذكرات والملخصات الدراسية الشاملة لجميع المراحل التعليمية
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, i) => (
            <div
              key={i}
              className="card-luxury group cursor-pointer"
              style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both` }}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="icon-circle-gold w-14 h-14 group-hover:scale-110 transition-transform duration-300">
                    <FileText size={24} className="text-gold-500" />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${subjectColors[note.subject] || 'text-gold-400 bg-gold-400/10 border-gold-400/30'}`}>
                    {note.subject}
                  </span>
                </div>

                <h3 className="text-white font-bold text-base mb-3 group-hover:text-gold-400 transition-colors duration-300 leading-snug">
                  {note.title}
                </h3>

                <div className="flex items-center gap-4 text-white/40 text-xs mb-5">
                  <span className="flex items-center gap-1">
                    <Eye size={13} className="text-gold-500/60" />
                    {note.pages} صفحة
                  </span>
                  <span className="flex items-center gap-1">
                    <Download size={13} className="text-gold-500/60" />
                    {note.downloads.toLocaleString('ar')} تحميل
                  </span>
                  <span className="text-gold-500/60 font-semibold">{note.format}</span>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 btn-outline-gold py-2 text-sm rounded-xl flex items-center justify-center gap-2">
                    <Eye size={14} />
                    معاينة
                  </button>
                  <button className="flex-1 btn-gold py-2 text-sm rounded-xl flex items-center justify-center gap-2">
                    <Download size={14} />
                    تحميل
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
