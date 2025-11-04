import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const Logo = ({ className }: { className?: string }) => {
  const logoImage = PlaceHolderImages.find(img => img.id === 'logo-1');
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-lg font-bold font-headline text-primary", className)}>
      {logoImage && (
        <Image 
          src={logoImage.imageUrl}
          alt="KELEX logo"
          width={28}
          height={28}
          data-ai-hint={logoImage.imageHint}
        />
      )}
      <span>KELEX</span>
    </Link>
  );
};
