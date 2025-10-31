import { JobSearch } from "@/components/job-search";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/hero-section";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        
        <JobSearch />
      </main>
      <Footer />
    </div>
  );
}
