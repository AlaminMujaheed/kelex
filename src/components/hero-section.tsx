'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = () => {
  const scrollToJobs = () => {
    const jobSection = document.getElementById('job-search');
    if (jobSection) {
      jobSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4 text-center relative">
        <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary-foreground">
          Find Your Next Opportunity
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
          Building Careers, Creating Futures — The Kano State Government’s Public–Private Employment Drive
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/login">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={scrollToJobs}>Browse Jobs</Button>
        </div>
      </div>
    </section>
  );
};
