'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from '../ui/input';

export const Header = () => {
  const navLinks = [
    { href: '/login', label: 'Find a Job' },
    { href: '#', label: 'Employers' },
    { href: '#', label: 'Agencies' },
    { href: '#', label: 'About Us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo className="mr-8" />
        <div className="ml-auto flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map(link => (
              <Link key={link.label} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-6 pt-8">
                  <Logo />
                  <nav className="flex flex-col gap-4">
                    {navLinks.map(link => (
                      <Link key={link.label} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
