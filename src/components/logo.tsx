import Link from "next/link";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-lg font-bold font-headline text-primary", className)}>
      <span>KELEX</span>
    </Link>
  );
};
