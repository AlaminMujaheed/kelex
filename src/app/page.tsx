import { JobSearch } from "@/components/job-search";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
              Find Your Next Opportunity
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              Building Careers, Creating Futures — The Kano State Government’s Public–Private Employment Drive
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="secondary">Browse Jobs</Button>
            </div>
          </div>
        </section>
        
        <JobSearch />
      </main>
      <Footer />
    </div>
  );
}
