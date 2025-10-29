import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const postedJobs = [
  { id: 'job-1', title: 'Senior Frontend Developer', status: 'Active', applicants: 42, postedAt: '2024-05-20' },
  { id: 'job-5', title: 'Project Manager (Construction)', status: 'Active', applicants: 18, postedAt: '2024-05-19' },
  { id: 'job-prev', title: 'UX/UI Designer', status: 'Closed', applicants: 89, postedAt: '2024-04-10' },
];

export default function ManageJobsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline">Manage Jobs</h1>
          <p className="text-muted-foreground">Create, update, and monitor your job listings.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Post New Job
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Job Postings</CardTitle>
          <CardDescription>A list of all jobs you have posted on NextGen NELEX.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Applicants</TableHead>
                <TableHead>Date Posted</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {postedJobs.map(job => (
                <TableRow key={job.id}>
                  <TableCell className="font-medium">{job.title}</TableCell>
                  <TableCell>
                    <Badge variant={job.status === 'Active' ? 'default' : 'secondary'} className={job.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' : ''}>
                      {job.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{job.applicants}</TableCell>
                  <TableCell>{job.postedAt}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Applicants</DropdownMenuItem>
                        <DropdownMenuItem>Edit Job</DropdownMenuItem>
                        <DropdownMenuItem>Close Job</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
