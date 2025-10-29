"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mockJobs } from '@/lib/data';
import type { Job } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase, Building, Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const JobCard = ({ job }: { job: Job }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <Image
          src={job.company.logoUrl}
          alt={`${job.company.name} logo`}
          width={56}
          height={56}
          className="rounded-lg border"
          data-ai-hint="abstract logo"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-semibold mb-1">
                <Link href={`/jobs/${job.id}`} className="hover:text-primary transition-colors">
                  {job.title}
                </Link>
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground">
                <Building className="h-4 w-4" /> {job.company.name}
              </CardDescription>
            </div>
            <Badge variant="outline" className="capitalize">{job.type}</Badge>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="capitalize">{job.experienceLevel} Level</span>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(job.postedAt, { addSuffix: true })}
            </span>
            <Button asChild size="sm">
              <Link href={`/jobs/${job.id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const JobFilters = ({ filters, setFilters, onReset }: { filters: any, setFilters: any, onReset: () => void }) => {
  const industries = useMemo(() => [...new Set(mockJobs.map(job => job.industry))], []);
  const locations = useMemo(() => [...new Set(mockJobs.map(job => job.location))], []);
  const experienceLevels = useMemo(() => [...new Set(mockJobs.map(job => job.experienceLevel))], []);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5" />
            Filters
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onReset}>Reset</Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Industry</label>
          <Select value={filters.industry} onValueChange={(value) => setFilters({ ...filters, industry: value })}>
            <SelectTrigger><SelectValue placeholder="All Industries" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              {industries.map(ind => <SelectItem key={ind} value={ind}>{ind}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Location</label>
          <Select value={filters.location} onValueChange={(value) => setFilters({ ...filters, location: value })}>
            <SelectTrigger><SelectValue placeholder="All Locations" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {locations.map(loc => <SelectItem key={loc} value={loc}>{loc}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Experience Level</label>
          <Select value={filters.experienceLevel} onValueChange={(value) => setFilters({ ...filters, experienceLevel: value })}>
            <SelectTrigger><SelectValue placeholder="All Levels" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              {experienceLevels.map(exp => <SelectItem key={exp} value={exp}>{exp}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Max Salary (₦{filters.maxSalary.toLocaleString()}/month)</label>
          <Slider
            min={0}
            max={1000000}
            step={50000}
            value={[filters.maxSalary]}
            onValueChange={(value) => setFilters({ ...filters, maxSalary: value[0] })}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export const JobSearch = () => {
  const initialFilters = {
    searchTerm: '',
    industry: 'all',
    location: 'all',
    experienceLevel: 'all',
    maxSalary: 1000000
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleResetFilters = () => setFilters(initialFilters);

  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      return (
        (filters.searchTerm === '' || job.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) || job.company.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
        (filters.industry === 'all' || job.industry === filters.industry) &&
        (filters.location === 'all' || job.location === filters.location) &&
        (filters.experienceLevel === 'all' || job.experienceLevel === filters.experienceLevel) &&
        (job.salary.min <= filters.maxSalary)
      );
    });
  }, [filters]);

  return (
    <section id="job-search" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/3 lg:w-1/4">
            <div className="sticky top-20">
              <JobFilters filters={filters} setFilters={setFilters} onReset={handleResetFilters} />
            </div>
          </aside>
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by title or company..."
                  className="pl-10"
                  value={filters.searchTerm}
                  onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
                />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="bg-accent/20 border-accent text-accent-foreground hover:bg-accent/30">
                    <Sparkles className="mr-2 h-4 w-4" /> Get AI Suggestions
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-headline flex items-center gap-2">
                      <Sparkles className="text-primary"/>
                      AI Job Suggestions
                    </DialogTitle>
                    <DialogDescription>
                      Based on your profile, here are some jobs you might be interested in. This is a mock response.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-2 text-sm">
                    <p><strong>Suggested Jobs:</strong></p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Senior Frontend Developer</li>
                        <li>Lead Backend Engineer</li>
                        <li>Product Manager</li>
                    </ul>
                    <p className="pt-2"><strong>Reasoning:</strong></p>
                    <p className="text-muted-foreground">Your profile shows strong experience in full-stack development and project leadership, making you a great fit for senior technical and management roles.</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <p className="text-muted-foreground mb-6">Showing {filteredJobs.length} of {mockJobs.length} jobs</p>
            <div className="grid grid-cols-1 gap-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => <JobCard key={job.id} job={job} />)
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <h3 className="text-xl font-semibold">No Jobs Found</h3>
                    <p className="text-muted-foreground mt-2">Try adjusting your search filters.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
