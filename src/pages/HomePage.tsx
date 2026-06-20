import Hero from '../components/Hero';
import Services from '../components/Services';
import Statistics from '../components/Statistics';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <Services onNavigate={onNavigate} />
      <Statistics />
    </main>
  );
}
