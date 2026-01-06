import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[85vh] flex items-center">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-float" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium animate-fade-up">
              <Leaf className="h-4 w-4" />
              <span>Free shipping on orders over $75</span>
            </div>
            
            <h1 className="heading-display text-foreground animate-fade-up" style={{ animationDelay: '100ms' }}>
              Bring Nature{' '}
              <span className="text-primary">Home</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
              Discover our curated collection of stunning houseplants that transform 
              any space into a lush, living sanctuary.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Button asChild variant="hero">
                <Link to="/shop">
                  Shop Now
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline">
                <Link to="/shop?category=indoor">
                  Browse Indoor
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-serif font-semibold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Plant Varieties</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center lg:text-left">
                <p className="text-3xl font-serif font-semibold text-foreground">15k+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center lg:text-left">
                <p className="text-3xl font-serif font-semibold text-foreground">4.9</p>
                <p className="text-sm text-muted-foreground">Star Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-sage/30 rounded-full blur-3xl transform scale-90" />
              <img
                src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&h=800&fit=crop"
                alt="Beautiful indoor plant"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-hover"
              />
              
              {/* Floating Badge - Best Seller */}
              <Link 
                to="/plant/1" 
                className="absolute -right-4 top-1/4 bg-card p-4 rounded-xl shadow-card animate-float z-20 hover:shadow-hover transition-shadow duration-300 cursor-pointer group"
              >
                <p className="text-sm font-medium text-muted-foreground">Best Seller</p>
                <p className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors">Monstera</p>
                <p className="text-xs text-primary mt-1">Click to view →</p>
              </Link>
              
              {/* Floating Badge - Beginner Friendly */}
              <Link 
                to="/shop?filter=beginner" 
                className="absolute -left-4 bottom-1/4 bg-card p-4 rounded-xl shadow-card animate-float z-20 hover:shadow-hover transition-shadow duration-300 cursor-pointer group" 
                style={{ animationDelay: '1s' }}
              >
                <p className="text-sm font-medium text-muted-foreground">Easy Care</p>
                <p className="font-serif font-semibold text-primary">🌿 Beginner Friendly</p>
                <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors mt-1">View all →</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
