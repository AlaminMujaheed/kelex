export type UserRole = 'Job Seeker' | 'Employer' | 'Agency' | 'Admin';

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
};

export type Company = {
  id: string;
  name: string;
  logoUrl: string;
  industry: string;
};

export type Job = {
  id: string;
  title: string;
  company: Company;
  location: string;
  salary: {
    min: number;
    max: number;
  };
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experienceLevel: 'Entry' | 'Mid' | 'Senior' | 'Lead';
  industry: string;
  description: string;
  postedAt: Date;
};

export type ApplicationStatus = 'Applied' | 'Reviewed' | 'Shortlisted' | 'Interviewing' | 'Hired' | 'Rejected';

export type Application = {
  id: string;
  job: Job;
  applicant: User;
  status: ApplicationStatus;
  appliedAt: Date;
};
