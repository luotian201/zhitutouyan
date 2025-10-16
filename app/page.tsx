import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Features from '@/components/Features';
import Advantages from '@/components/Advantages';
import Market from '@/components/Market';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Features />
      <Advantages />
      <Market />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
