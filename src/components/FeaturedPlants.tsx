import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlantCard } from '@/components/PlantCard';
import { plants } from '@/data/plants';

export function FeaturedPlants() {
  const featuredPlants = plants.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="heading-section text-foreground mb-4">
              Featured Plants
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Handpicked favorites that bring life and color to any space
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/shop">
              View All Plants
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlants.map((plant, index) => (
            <PlantCard key={plant.id} plant={plant} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
