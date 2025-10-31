import { mockJobs } from '@/lib/data';
import type { Job } from '@/lib/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, Building, Clock, DollarSign, MapPin, Newspaper } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = mockJobs.find(j => j.id === params.id);

  if (!job) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Image
                      src={job.company.logoUrl}
                      alt={`${job.company.name} logo`}
                      width={64}
                      height={64}
                      className="rounded-lg border"
                      data-ai-hint="abstract logo"
                    />
                    <div>
                      <CardTitle className="text-3xl font-headline">{job.title}</CardTitle>
                      <CardDescription className="text-base text-muted-foreground mt-1">
                        at <span className="text-primary font-semibold">{job.company.name}</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-x-6 gap-y-3 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {job.location}</div>
                    <div className="flex items-center gap-2"><DollarSign className="h-4 w-4" /> ₦{job.salary.min.toLocaleString()} - ₦{job.salary.max.toLocaleString()}</div>
                    <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> {job.type}</div>
                    <div className="flex items-center gap-2"><Briefcase className="h-4 w-4" /> {job.experienceLevel} Level</div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-4 text-foreground font-headline">Job Description</h3>
                  <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
                    <p>{job.description}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl eu nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl eu nisl.</p>
                    <h4>Responsibilities</h4>
                    <ul>
                      <li>Develop and maintain web applications.</li>
                      <li>Collaborate with cross-functional teams.</li>
                      <li>Write clean, maintainable, and efficient code.</li>
                      <li>Participate in code reviews.</li>
                    </ul>
                    <h4>Qualifications</h4>
                    <ul>
                      <li>Bachelor's degree in Computer Science or related field.</li>
                      <li>5+ years of experience in frontend development.</li>
                      <li>Proficiency in React, Next.js, and TypeScript.</li>
                      <li>Strong problem-solving skills.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-headline flex items-center gap-2"><Building className="h-5 w-5" /> About {job.company.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {job.company.name} is a leading company in the {job.company.industry} sector, committed to innovation and excellence.
                  </p>
                  <Button variant="secondary" className="w-full mt-4" asChild>
                    <Link href="/login">View Company Profile</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Button className="w-full text-lg" size="lg" asChild>
                    <Link href="/login">Apply Now <Newspaper className="ml-2 h-5 w-5" /></Link>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3 text-center">Posted {formatDistanceToNow(job.postedAt, { addSuffix: true })}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
