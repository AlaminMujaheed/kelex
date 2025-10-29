"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarTrigger
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Briefcase,
  Users,
  BarChart,
  Settings,
  User,
  LogOut,
  Building2,
  FileText
} from "lucide-react"
import { Logo } from "./logo"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const mockUser = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  role: 'Job Seeker', // Can be 'Job Seeker' or 'Employer'
  avatar: PlaceHolderImages.find(img => img.id === 'user-avatar-1')?.imageUrl,
};

const jobSeekerLinks = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/profile", icon: User, label: "My Profile" },
  { href: "/dashboard/applications", icon: FileText, label: "My Applications" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

const employerLinks = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/jobs", icon: Briefcase, label: "Manage Jobs" },
  { href: "/dashboard/applicants", icon: Users, label: "Applicants" },
  { href: "/dashboard/analytics", icon: BarChart, label: "Analytics" },
  { href: "/dashboard/company-profile", icon: Building2, label: "Company Profile" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];


export function DashboardSidebar() {
  const pathname = usePathname();
  const navLinks = mockUser.role === 'Employer' ? employerLinks : jobSeekerLinks;

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <Logo />
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navLinks.map((link) => (
            <SidebarMenuItem key={link.href}>
              <Link href={link.href} legacyBehavior passHref>
                <SidebarMenuButton
                  isActive={pathname === link.href}
                  icon={<link.icon />}
                  tooltip={{ children: link.label }}
                >
                  {link.label}
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
               <div className="flex items-center gap-2 p-2">
                 <Avatar className="h-8 w-8">
                   <AvatarImage src={mockUser.avatar} data-ai-hint="person portrait"/>
                   <AvatarFallback>JD</AvatarFallback>
                 </Avatar>
                 <div className="flex flex-col text-sm group-data-[collapsible=icon]:hidden">
                    <span className="font-semibold text-foreground">{mockUser.name}</span>
                    <span className="text-muted-foreground">{mockUser.email}</span>
                 </div>
               </div>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton icon={<LogOut/>}>Logout</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}
