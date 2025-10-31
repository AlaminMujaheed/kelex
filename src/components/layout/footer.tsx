import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Github, Twitter, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Footer = () => {
  const footerLinks = [
    { href: '#', label: 'About Us' },
    { href: '/login', label: 'Jobs' },
    { href: '#', label: 'Employers' },
    { href: '#', label: 'Contact' },
    { href: '#', label: 'Privacy Policy' },
  ];

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-4 text-muted-foreground max-w-sm">
              The future of employment in Nigeria. Connecting talent, powering growth.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6">
            <h3 className="font-semibold text-foreground">Subscribe to our Newsletter</h3>
            <p className="mt-2 text-muted-foreground">Get the latest job alerts and news from NextGen NELEX directly in your inbox.</p>
            <div className="mt-4 flex w-full max-w-md items-center space-x-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} KELEX. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary"><Github className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
