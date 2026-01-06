import { HeroSection } from '@/components/HeroSection';
import { CategorySection } from '@/components/CategorySection';
import { FeaturedPlants } from '@/components/FeaturedPlants';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <FeaturedPlants />
      
      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-card shadow-soft animate-fade-up">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                Healthy Plants Guaranteed
              </h3>
              <p className="text-muted-foreground">
                Every plant is carefully inspected and arrives in perfect condition.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-card shadow-soft animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                Free Express Shipping
              </h3>
              <p className="text-muted-foreground">
                Free shipping on all orders over $75, delivered within 3-5 days.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-card shadow-soft animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                Expert Plant Support
              </h3>
              <p className="text-muted-foreground">
                Our plant experts are here to help you keep your plants thriving.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
