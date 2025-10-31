import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-lg font-bold font-headline text-primary", className)}>
      <Image
        src="https://firebasestudio.app/assets/project-images/432bd31d-b30c-4330-9a4f-f064f2038b36.png"
        alt="Kano State Government Logo"
        width={40}
        height={40}
      />
      <span>KELEX</span>
    </Link>
  );
};
