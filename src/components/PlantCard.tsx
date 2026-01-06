import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye, ZoomIn, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Plant } from '@/data/plants';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { ImageLightbox } from './ImageLightbox';

interface PlantCardProps {
  plant: Plant;
  index?: number;
}

export function PlantCard({ plant, index = 0 }: PlantCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(plant);
    toast({
      title: "Added to cart",
      description: `${plant.name} has been added to your cart.`,
    });
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLightboxOpen(true);
  };

  return (
    <>
      <div
        className="group relative bg-card rounded-2xl shadow-soft overflow-hidden hover-lift animate-fade-up"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Badges */}
        {plant.isAyurvedic && (
          <div className="absolute top-3 left-3 z-10 px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium flex items-center gap-1">
            <Leaf className="h-3 w-3" />
            Ayurvedic
          </div>
        )}
        {plant.beginnerFriendly && !plant.isAyurvedic && (
          <div className="absolute top-3 left-3 z-10 px-2 py-1 rounded-full bg-sage/90 text-foreground text-xs font-medium">
            🌱 Beginner Friendly
          </div>
        )}

        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
            onClick={handleImageClick}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          {/* Action Buttons on Hover */}
          <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              variant="secondary" 
              size="sm" 
              className="shadow-card"
              onClick={handleImageClick}
            >
              <ZoomIn className="h-4 w-4 mr-2" />
              Zoom
            </Button>
            <Button variant="secondary" size="sm" className="shadow-card" asChild>
              <Link to={`/plant/${plant.id}`}>
                <Eye className="h-4 w-4 mr-2" />
                Details
              </Link>
            </Button>
          </div>
        </div>

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

    <ImageLightbox
      isOpen={isLightboxOpen}
      onClose={() => setIsLightboxOpen(false)}
      imageSrc={plant.image}
      imageAlt={plant.name}
    />
    </>
  );
}
