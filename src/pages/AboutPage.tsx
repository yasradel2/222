import { Target, Heart, Lightbulb, Award, Users, BookOpen } from 'lucide-react';

const values = [
  { icon: Target, title: 'رسالتنا', desc: 'نسعى إلى تقديم تعليم عالي الجودة يُمكّن الطلاب من تحقيق أهدافهم وبناء مستقبل مشرق.' },
  { icon: Heart, title: 'قيمنا', desc: 'الإخلاص في العطاء، الجودة في المحتوى، الاهتمام بكل طالب، والسعي المستمر للتميز.' },
  { icon: Lightbulb, title: 'رؤيتنا', desc: 'أن نكون المنصة التعليمية الرائدة التي تُحدث فارقًا حقيقيًا في حياة الطلاب.' },
];

const team = [
  { name: 'أ. ياسر عادل', role: 'المؤسس والمدير التنفيذي', specialty: 'خبير تعليمي متميز' },
  { name: 'د. أحمد محمود', role: 'رئيس القسم الأكاديمي', specialty: 'متخصص في التعليم الإلكتروني' },
  { name: 'أ. سارة عبدالله', role: 'مشرفة المحتوى التعليمي', specialty: 'خبيرة في تصميم المناهج' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <div className="relative py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-4">
          <p className="text-gold-500/70 text-sm font-semibold tracking-widest uppercase mb-3">قصتنا</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4 gold-text">من نحن</h1>
          <div className="section-divider mb-5" />
          <p className="text-white/50 text-base leading-relaxed">
            أكاديميتي للتعليم والتدريب — منصة تعليمية متكاملة تسعى لتغيير مسيرة حياتك نحو الأفضل
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-5">
            <p className="text-gold-500/70 text-sm font-semibold tracking-widest uppercase">المؤسس</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              الأستاذ <span className="gold-text">ياسر عادل</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-gold-500/60 to-transparent" />
            <p className="text-white/60 leading-relaxed text-sm">
              خبير تعليمي متميز يمتلك أكثر من 15 عامًا من الخبرة في مجال التعليم والتدريب. أسس أكاديميتي
              بهدف واحد واضح: تقديم تعليم حقيقي يُحدث أثرًا إيجابيًا في حياة كل طالب.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              "معًا نبني إنسانًا مصون له مستقبلٌ مضمون" — هذه ليست مجرد شعار، بل هي رسالتنا اليومية
              في كل دورة، كل مذكرة، وكل تفاعل مع طلابنا الكرام.
            </p>
            <div className="flex flex-wrap gap-3">
              {['+15 سنة خبرة', '+10,000 طالب', 'معتمد دوليًا'].map((badge) => (
                <span key={badge} className="text-xs font-semibold px-3 py-1.5 rounded-full text-gold-400 bg-gold-400/10 border border-gold-400/30">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-500/20 to-transparent blur-2xl" />
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden border border-gold-500/30"
                style={{ background: 'linear-gradient(135deg, #0d1a38, #020817)' }}>
                <img
                  src="/images/placeholders/teacher.png"
                  alt="الأستاذ ياسر عادل"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 card-luxury p-4 text-center min-w-[100px]">
                <div className="text-2xl font-black gold-text">15+</div>
                <div className="text-white/50 text-xs">سنة خبرة</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-4 gold-text">قيمنا ومبادئنا</h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <div key={i} className="card-luxury p-7 text-center group hover:border-gold-500/50 transition-all duration-300"
                style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both` }}>
                <div className="icon-circle-gold w-16 h-16 mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <val.icon size={28} className="text-gold-500" />
                </div>
                <h3 className="text-gold-400 font-bold text-lg mb-3">{val.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-4 gold-text">فريقنا المتميز</h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div key={i} className="card-luxury p-6 text-center group hover:border-gold-500/50 transition-all duration-300">
                <div className="icon-circle-gold w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users size={32} className="text-gold-500" />
                </div>
                <h3 className="text-white font-bold text-base mb-1 group-hover:text-gold-400 transition-colors">{member.name}</h3>
                <p className="text-gold-500/70 text-xs font-semibold mb-1">{member.role}</p>
                <p className="text-white/40 text-xs">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
