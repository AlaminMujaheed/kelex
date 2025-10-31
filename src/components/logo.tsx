import Link from "next/link";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-lg font-bold font-headline text-primary", className)}>
      <svg
        className="h-10 w-10"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50,5 C74.85,5 95,25.15 95,50 C95,74.85 74.85,95 50,95 C25.15,95 5,74.85 5,50 C5,25.15 25.15,5 50,5 Z"
          fill="#006400"
        />
        <path
          d="M50,15 C69.33,15 85,30.67 85,50 C85,69.33 69.33,85 50,85 C30.67,85 15,69.33 15,50 C15,30.67 30.67,15 50,15 Z"
          fill="white"
        />
        <path
          d="M50,20 L50,80 M20,50 L80,50 M30,30 L70,70 M30,70 L70,30"
          stroke="#006400"
          stroke-width="5"
        />
      </svg>
      <span>KELEX</span>
    </Link>
  );
};
