import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { mockApplications } from "@/lib/data";
import { format } from "date-fns";
import type { ApplicationStatus } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

const statusColors: Record<ApplicationStatus, string> = {
  Applied: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
  Reviewed: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300",
  Interviewing: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300",
  Shortlisted: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300",
  Hired: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
  Rejected: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300",
};


export default function MyApplicationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">My Applications</h1>
        <p className="text-muted-foreground">Track the status of your job applications.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Application History</CardTitle>
          <CardDescription>A list of all jobs you have applied for on NextGen NELEX.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Applied</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockApplications.map(app => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">
                     <Link href={`/jobs/${app.job.id}`} className="hover:text-primary transition-colors">
                        {app.job.title}
                     </Link>
                  </TableCell>
                  <TableCell>{app.job.company.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={cn("border-transparent", statusColors[app.status])}>
                      {app.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{format(app.appliedAt, 'PPP')}</TableCell>
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
                        <DropdownMenuItem>View Job Details</DropdownMenuItem>
                        <DropdownMenuItem>Withdraw Application</DropdownMenuItem>
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