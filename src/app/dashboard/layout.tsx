import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { Header } from "@/components/layout/header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background min-h-screen">
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset>
          <div className="p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
