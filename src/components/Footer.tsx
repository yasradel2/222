import { Facebook, Twitter, Youtube, Instagram, ArrowLeft, MapPin, Phone, Mail, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const quickLinks = [
  { label: 'الدورات', page: 'courses' },
  { label: 'المذكرات', page: 'notes' },
  { label: 'الاختبارات', page: 'exams' },
  { label: 'الأخبار', page: 'news' },
  { label: 'من نحن', page: 'about' },
  { label: 'تواصل معنا', page: 'contact' },
];

const sitePages = [
  { label: 'الرئيسية', page: 'home' },
  { label: 'الدورات التعليمية', page: 'courses' },
  { label: 'المذكرات والملفات', page: 'notes' },
  { label: 'الاختبارات الإلكترونية', page: 'exams' },
  { label: 'الأخبار والإعلانات', page: 'news' },
];

const contactInfo = [
  { icon: Mail, text: 'info@akadimiyati.com' },
  { icon: Phone, text: '+20 123 456 7890' },
  { icon: MapPin, text: 'القاهرة - مصر' },
  { icon: Globe, text: 'www.akadimiyati.com' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'فيسبوك' },
  { icon: Twitter, href: '#', label: 'تويتر' },
  { icon: Youtube, href: '#', label: 'يوتيوب' },
  { icon: Instagram, href: '#', label: 'إنستغرام' },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div
        className="relative pt-16 pb-8"
        style={{ background: 'linear-gradient(180deg, #0a1628 0%, #020817 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <button onClick={() => onNavigate('home')} className="block mb-5">
                <img src="/logo.png" alt="أكاديميتي" className="w-28 h-auto" loading="lazy" />
              </button>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                أكاديميتي للتعليم والتدريب — معًا نبني إنسانًا مصون له مستقبلٌ مضمون.
              </p>
              {/* Social */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="icon-circle-gold w-9 h-9 text-gold-500 hover:bg-gold-500/20 hover:border-gold-500/60 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-gold-400 font-bold text-base mb-5 gold-line-decoration">تواصل معنا</h4>
              <ul className="space-y-3">
                {contactInfo.map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-white/50 text-sm hover:text-white/70 transition-colors duration-200">
                    <item.icon size={15} className="text-gold-500/70 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Site Pages */}
            <div>
              <h4 className="text-gold-400 font-bold text-base mb-5 gold-line-decoration">أقسام الموقع</h4>
              <ul className="space-y-2">
                {sitePages.map((item) => (
                  <li key={item.page}>
                    <button
                      onClick={() => onNavigate(item.page)}
                      className="flex items-center gap-2 text-white/50 text-sm hover:text-gold-400 transition-all duration-200 group"
                    >
                      <ArrowLeft size={13} className="text-gold-500/50 group-hover:text-gold-400 transition-colors" />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-gold-400 font-bold text-base mb-5 gold-line-decoration">روابط سريعة</h4>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.page}>
                    <button
                      onClick={() => onNavigate(item.page)}
                      className="flex items-center gap-2 text-white/50 text-sm hover:text-gold-400 transition-all duration-200 group"
                    >
                      <ArrowLeft size={13} className="text-gold-500/50 group-hover:text-gold-400 transition-colors" />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gold-500/10 text-center">
            <p className="text-white/30 text-sm">
              جميع الحقوق محفوظة &copy; 2025 أكاديميتي للتعليم والتدريب
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
