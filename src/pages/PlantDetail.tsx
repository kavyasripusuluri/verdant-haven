import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingBag, Droplets, Sun, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlantCard } from '@/components/PlantCard';
import { Footer } from '@/components/Footer';
import { plants } from '@/data/plants';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

export function PlantDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const plant = plants.find((p) => p.id === id);

  if (!plant) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl font-medium text-foreground mb-4">
            Plant not found
          </h1>
          <Button onClick={() => navigate('/shop')}>
            Back to Shop
          </Button>
        </div>
      </main>
    );
  }

  const relatedPlants = plants
    .filter((p) => p.category === plant.category && p.id !== plant.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(plant, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity}x ${plant.name} added to your cart.`,
    });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container-custom">
          <Button variant="ghost" size="sm" asChild className="-ml-3">
            <Link to="/shop">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shop
            </Link>
          </Button>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-8 md:py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="animate-fade-up">
              <div className="aspect-square rounded-3xl overflow-hidden bg-muted shadow-card">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div>
                <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
                  {plant.category.replace('-', ' ')}
                </p>
                <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
                  {plant.name}
                </h1>
                <p className="text-3xl font-semibold text-primary">
                  ${plant.price}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {plant.description}
              </p>

              {/* Care Info */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-secondary text-center">
                  <Droplets className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs font-medium text-muted-foreground mb-1">Water</p>
                  <p className="text-sm font-medium text-foreground">{plant.careInfo.water}</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary text-center">
                  <Sun className="h-6 w-6 mx-auto mb-2 text-accent" />
                  <p className="text-xs font-medium text-muted-foreground mb-1">Light</p>
                  <p className="text-sm font-medium text-foreground">{plant.careInfo.sunlight}</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary text-center">
                  <Ruler className="h-6 w-6 mx-auto mb-2 text-forest" />
                  <p className="text-xs font-medium text-muted-foreground mb-1">Size</p>
                  <p className="text-sm font-medium text-foreground">{plant.careInfo.size}</p>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium text-lg">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="flex-1 sm:flex-none"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart – ${(plant.price * quantity).toFixed(2)}
                </Button>
              </div>

              {/* Additional Info */}
              <div className="border-t border-border pt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-lg">🚚</span>
                  <span>Free shipping on orders over $75</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-lg">🌱</span>
                  <span>30-day healthy plant guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-lg">📦</span>
                  <span>Arrives in 3-5 business days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Plants */}
      {relatedPlants.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container-custom">
            <h2 className="heading-section text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPlants.map((plant, index) => (
                <PlantCard key={plant.id} plant={plant} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

export default PlantDetail;
