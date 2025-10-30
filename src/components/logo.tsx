import Link from "next/link";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-lg font-bold font-headline text-primary", className)}>
      <Briefcase className="h-6 w-6 text-accent" />
      <span>KELEX</span>
    </Link>
  );
};
