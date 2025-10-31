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
    <section className="bg-card py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
          Find Your Next Opportunity
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          Building Careers, Creating Futures — The Kano State Government’s Public–Private Employment Drive
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/login">Get Started</Link>
          </Button>
          <Button size="lg" variant="secondary" onClick={scrollToJobs}>Browse Jobs</Button>
        </div>
      </div>
    </section>
  );
};
