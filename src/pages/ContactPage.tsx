import { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle } from 'lucide-react';

const contactDetails = [
  { icon: Mail, label: 'البريد الإلكتروني', value: 'info@akadimiyati.com' },
  { icon: Phone, label: 'رقم الهاتف', value: '+20 123 456 7890' },
  { icon: MapPin, label: 'العنوان', value: 'القاهرة - مصر' },
  { icon: Globe, label: 'الموقع الإلكتروني', value: 'www.akadimiyati.com' },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="relative py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-4">
          <p className="text-gold-500/70 text-sm font-semibold tracking-widest uppercase mb-3">نحن هنا لك</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4 gold-text">تواصل معنا</h1>
          <div className="section-divider mb-5" />
          <p className="text-white/50 text-base leading-relaxed">
            يسعدنا التواصل معك والإجابة على جميع استفساراتك
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-xl font-bold text-white mb-6">معلومات التواصل</h2>
            {contactDetails.map((item) => (
              <div key={item.label} className="card-luxury p-5 flex items-center gap-4 group hover:border-gold-500/40 transition-all duration-300">
                <div className="icon-circle-gold w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={20} className="text-gold-500" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">{item.label}</p>
                  <p className="text-white text-sm font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card-luxury p-8">
              <h2 className="text-xl font-bold text-white mb-6">أرسل رسالة</h2>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <div className="icon-circle-gold w-20 h-20 animate-glow-pulse">
                    <CheckCircle size={36} className="text-gold-500" />
                  </div>
                  <p className="text-gold-400 font-bold text-lg">تم إرسال رسالتك بنجاح!</p>
                  <p className="text-white/50 text-sm text-center">سنتواصل معك في أقرب وقت ممكن.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/60 text-sm font-medium mb-2">الاسم الكامل *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="أدخل اسمك الكامل"
                        className="w-full glass-card rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold-500/60 focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm font-medium mb-2">البريد الإلكتروني *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="example@email.com"
                        className="w-full glass-card rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold-500/60 focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300"
                        dir="ltr"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm font-medium mb-2">الموضوع *</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="موضوع رسالتك"
                      className="w-full glass-card rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold-500/60 focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm font-medium mb-2">الرسالة *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full glass-card rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold-500/60 focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300 resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full btn-gold py-3.5 rounded-xl text-base font-bold flex items-center justify-center gap-2">
                    <Send size={18} />
                    إرسال الرسالة
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
