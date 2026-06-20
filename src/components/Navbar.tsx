import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, LogIn, UserPlus } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { label: 'الرئيسية', page: 'home' },
  { label: 'الدورات', page: 'courses' },
  { label: 'المذكرات', page: 'notes' },
  { label: 'الاختبارات', page: 'exams' },
  { label: 'الأخبار', page: 'news' },
  { label: 'من نحن', page: 'about' },
  { label: 'تواصل معنا', page: 'contact' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-black/50 border-b border-gold-500/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <img
              src="/logo.png"
              alt="أكاديميتي"
              className="h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`nav-link ${currentPage === item.page ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="btn-outline-gold flex items-center gap-2 text-sm px-4 py-2">
              <LogIn size={16} />
              تسجيل دخول
            </button>
            <button className="btn-gold flex items-center gap-2 text-sm px-4 py-2">
              <UserPlus size={16} />
              إنشاء حساب
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gold-500 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="القائمة"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 space-y-1 border-t border-gold-500/20">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => { onNavigate(item.page); setMenuOpen(false); }}
                className={`w-full text-right px-4 py-3 rounded-lg transition-colors duration-200 text-sm font-semibold
                  ${currentPage === item.page
                    ? 'text-gold-500 bg-gold-500/10'
                    : 'text-white/80 hover:text-gold-500 hover:bg-gold-500/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-3 pt-4">
              <button className="flex-1 btn-outline-gold flex items-center justify-center gap-2 text-sm py-2">
                <LogIn size={16} />
                تسجيل دخول
              </button>
              <button className="flex-1 btn-gold flex items-center justify-center gap-2 text-sm py-2">
                <UserPlus size={16} />
                إنشاء حساب
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
