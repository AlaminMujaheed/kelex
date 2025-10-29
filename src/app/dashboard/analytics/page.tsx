"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, Eye, UserCheck } from "lucide-react"

const chartData = [
  { month: "Jan", total: Math.floor(Math.random() * 50) + 10 },
  { month: "Feb", total: Math.floor(Math.random() * 50) + 10 },
  { month: "Mar", total: Math.floor(Math.random() * 50) + 10 },
  { month: "Apr", total: Math.floor(Math.random() * 50) + 10 },
  { month: "May", total: Math.floor(Math.random() * 50) + 10 },
  { month: "Jun", total: Math.floor(Math.random() * 50) + 10 },
]

export default function AnalyticsPage() {
  const kpis = [
    { title: "Total Applicants", value: "1,254", icon: Users, change: "+15.2% from last month" },
    { title: "Active Jobs", value: "4", icon: Briefcase, change: "+2 since last week" },
    { title: "Total Job Views", value: "25,890", icon: Eye, change: "+8.1% from last month" },
    { title: "Hired", value: "6", icon: UserCheck, change: "+1 this month" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Recruitment Analytics</h1>
        <p className="text-muted-foreground">Insights into your job postings and applicant engagement.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className="text-xs text-muted-foreground">{kpi.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Application Trends</CardTitle>
          <CardDescription>Total applications received per month for the last 6 months.</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <XAxis
                dataKey="month"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
