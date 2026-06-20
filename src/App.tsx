import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import NotesPage from './pages/NotesPage';
import ExamsPage from './pages/ExamsPage';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

type Page = 'home' | 'courses' | 'notes' | 'exams' | 'news' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const pageTitles: Record<Page, string> = {
      home: 'أكاديميتي للتعليم والتدريب',
      courses: 'الدورات التعليمية | أكاديميتي',
      notes: 'المذكرات والملفات | أكاديميتي',
      exams: 'الاختبارات الإلكترونية | أكاديميتي',
      news: 'الأخبار والإعلانات | أكاديميتي',
      about: 'من نحن | أكاديميتي',
      contact: 'تواصل معنا | أكاديميتي',
    };
    document.title = pageTitles[currentPage];
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={navigate} />;
      case 'courses': return <CoursesPage />;
      case 'notes': return <NotesPage />;
      case 'exams': return <ExamsPage />;
      case 'news': return <NewsPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 font-cairo" dir="rtl">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <div key={currentPage} style={{ animation: 'fadeIn 0.4s ease-out' }}>
        {renderPage()}
      </div>
      <Footer onNavigate={navigate} />
    </div>
  );
}
