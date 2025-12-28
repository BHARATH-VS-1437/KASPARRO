import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/features/home/Hero';
import { WhyAISEO } from '@/components/features/home/WhyAISEO';
import { CoreModules } from '@/components/features/home/CoreModules';
import { AuditPipeline } from '@/components/features/home/AuditPipeline';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyAISEO />
        <CoreModules />
        <AuditPipeline />
      </main>
      <Footer />
    </>
  );
}
