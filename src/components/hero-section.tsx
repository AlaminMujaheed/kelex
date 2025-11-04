'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const HeroSection = () => {
  const scrollToJobs = () => {
    const jobSection = document.getElementById('job-search');
    if (jobSection) {
      jobSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative py-20 md:py-32">
      {heroImage && (
         <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 text-center relative">
        <h1 className="text-4xl md:text-6xl font-bold font-headline text-white">
          Find Your Next Opportunity
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-slate-200">
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
