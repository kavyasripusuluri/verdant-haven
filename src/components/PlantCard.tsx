import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Plant } from '@/data/plants';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

interface PlantCardProps {
  plant: Plant;
  index?: number;
}

export function PlantCard({ plant, index = 0 }: PlantCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(plant);
    toast({
      title: "Added to cart",
      description: `${plant.name} has been added to your cart.`,
    });
  };

  return (
    <div
      className="group relative bg-card rounded-2xl shadow-soft overflow-hidden hover-lift animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <Link to={`/plant/${plant.id}`} className="block relative aspect-square overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="secondary" size="sm" className="shadow-card">
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link to={`/plant/${plant.id}`}>
            <h3 className="font-serif text-lg font-medium text-foreground hover:text-primary transition-colors line-clamp-1">
              {plant.name}
            </h3>
          </Link>
        </div>
        
        <p className="text-sm text-muted-foreground capitalize mb-3">
          {plant.category.replace('-', ' ')}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-primary">
            ${plant.price}
          </span>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="shadow-soft"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
