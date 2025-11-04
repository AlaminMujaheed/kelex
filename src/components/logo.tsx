import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const Logo = ({ className }: { className?: string }) => {
  const logoImage = PlaceHolderImages.find(img => img.id === "logo-1");
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-lg font-bold font-headline text-primary", className)}>
      {logoImage && (
        <Image
          src={logoImage.imageUrl}
          alt={logoImage.description || "Logo"}
          width={36}
          height={36}
          data-ai-hint={logoImage.imageHint}
          priority
        />
      )}
      <span>KELEX</span>
    </div>
  );
};
