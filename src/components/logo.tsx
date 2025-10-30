import Link from "next/link";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-lg font-bold font-headline text-primary", className)}>
      <svg
        className="h-8 w-8 text-accent"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100"
        height="100"
      >
        <path
          d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          fill="hsl(var(--background))"
        />
        <path
          d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="hsl(var(--card))"
        />
        <text
          x="50"
          y="58"
          fontFamily="serif"
          fontSize="24"
          fill="hsl(var(--primary))"
          textAnchor="middle"
        >
          K
        </text>
      </svg>
      <span>KELEX</span>
    </Link>
  );
};
