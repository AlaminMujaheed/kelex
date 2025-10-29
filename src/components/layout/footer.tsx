import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  const footerLinks = {
    'For Job Seekers': [
      { href: '#', label: 'Browse Jobs' },
      { href: '#', label: 'Profile' },
      { href: '#', label: 'E-Learning' },
    ],
    'For Employers': [
      { href: '#', label: 'Post a Job' },
      { href: '#', label: 'Company Profile' },
      { href: '#', label: 'ATS' },
    ],
    'Company': [
      { href: '#', label: 'About Us' },
      { href: '#', label: 'Contact' },
      { href: '#', label: 'Terms of Service' },
      { href: '#', label: 'Privacy Policy' },
    ],
  };

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="md:col-span-4 lg:col-span-2">
            <Logo />
            <p className="mt-4 text-muted-foreground max-w-sm">
              The future of employment in Nigeria. Connecting talent, powering growth.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} NextGen NELEX. All rights reserved.
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
