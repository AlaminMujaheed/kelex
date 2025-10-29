import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Briefcase, FileText, UserCheck } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    const stats = [
        { title: "Jobs Applied", value: "12", icon: Briefcase, change: "+2", changeType: "increase" },
        { title: "Active Applications", value: "5", icon: FileText, change: "-1", changeType: "decrease" },
        { title: "Interviews Scheduled", value: "2", icon: UserCheck, change: "+1", changeType: "increase" }
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline">Welcome back, Jane!</h1>
                <p className="text-muted-foreground">Here&apos;s a summary of your job search activity.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">
                                {stat.change} from last month
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Applications</CardTitle>
                        <CardDescription>Track the status of your recent applications.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            <li className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold">Senior Frontend Developer</p>
                                    <p className="text-sm text-muted-foreground">Innovate Solutions</p>
                                </div>
                                <span className="text-sm font-medium text-primary">Reviewed</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold">Project Manager</p>
                                    <p className="text-sm text-muted-foreground">Constructo Corp</p>
                                </div>
                                <span className="text-sm text-muted-foreground">Applied</span>
                            </li>
                        </ul>
                        <Button variant="outline" className="w-full mt-6">View All Applications</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recommended For You</CardTitle>
                        <CardDescription>Jobs matching your profile and skills.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <ul className="space-y-4">
                            <li className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold">Lead Backend Engineer</p>
                                    <p className="text-sm text-muted-foreground">Innovate Solutions</p>
                                </div>
                                <Button size="sm" asChild>
                                    <Link href="/jobs/job-6">View Job <ArrowUpRight className="ml-1 h-4 w-4"/></Link>
                                </Button>
                            </li>
                            <li className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold">Curriculum Developer</p>
                                    <p className="text-sm text-muted-foreground">EduVerse</p>
                                </div>
                                 <Button size="sm" asChild>
                                    <Link href="/jobs/job-7">View Job <ArrowUpRight className="ml-1 h-4 w-4"/></Link>
                                </Button>
                            </li>
                        </ul>
                        <Button variant="outline" className="w-full mt-6">Browse More Jobs</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
