import { Link } from 'react-router-dom';
import { Leaf, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-7 w-7" />
              <span className="font-serif text-2xl font-medium">Plantopia</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Bringing nature's beauty into your home, one plant at a time.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/shop?category=indoor" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Indoor Plants
                </Link>
              </li>
              <li>
                <Link to="/shop?category=outdoor" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Outdoor Plants
                </Link>
              </li>
              <li>
                <Link to="/shop?category=succulents" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Succulents
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Plant Care Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Stay Connected</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Get plant care tips and exclusive offers in your inbox.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40"
              />
              <Button variant="secondary" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2026 Plantopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
