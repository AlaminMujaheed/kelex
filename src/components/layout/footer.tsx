import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Github, Twitter, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  const navLinks = {
    'Explore': [
      { href: '#', label: 'About Us' },
      { href: '/login', label: 'Find a Job' },
      { href: '#', label: 'Employers' },
      { href: '#', label: 'Agencies' },
    ],
  }

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex flex-col">
            <Logo />
            <p className="mt-4 text-muted-foreground text-sm max-w-sm">
              The future of employment in Nigeria. Connecting talent, powering growth.
            </p>
          </div>
          
          {Object.entries(navLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-foreground tracking-wider">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-foreground tracking-wider">Stay Updated</h3>
            <p className="mt-4 text-muted-foreground text-sm">Subscribe to our newsletter for the latest job alerts and news.</p>
            <div className="mt-4 flex w-full items-center space-x-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex justify-center items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} KELEX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
