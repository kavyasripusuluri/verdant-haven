import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlantCard } from '@/components/PlantCard';
import { Footer } from '@/components/Footer';
import { plants, categories } from '@/data/plants';
import { cn } from '@/lib/utils';

interface ShopProps {
  searchQuery: string;
}

export function Shop({ searchQuery }: ShopProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'all';
  const specialFilter = searchParams.get('filter') || '';
  const [showFilters, setShowFilters] = useState(false);

  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plant.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || plant.category === categoryFilter;
      const matchesSpecialFilter = !specialFilter || 
        (specialFilter === 'beginner' && plant.beginnerFriendly) ||
        (specialFilter === 'ayurvedic' && plant.isAyurvedic);
      return matchesSearch && matchesCategory && matchesSpecialFilter;
    });
  }, [searchQuery, categoryFilter, specialFilter]);

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    searchParams.delete('filter'); // Clear special filter when changing category
    setSearchParams(searchParams);
  };

  const clearSpecialFilter = () => {
    searchParams.delete('filter');
    setSearchParams(searchParams);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-hero">
        <div className="container-custom text-center">
          <h1 className="heading-display text-foreground mb-4 animate-fade-up">
            Our Plants
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Explore our collection of beautiful, healthy plants for every space and skill level
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-custom">
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="md:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <p className="text-muted-foreground text-sm">
                {filteredPlants.length} {filteredPlants.length === 1 ? 'plant' : 'plants'} found
              </p>
            </div>

            {/* Desktop Category Filters */}
            <div className="hidden md:flex items-center gap-2 flex-wrap">
              <Button
                variant={categoryFilter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryChange('all')}
              >
                All Plants
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={categoryFilter === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.icon} {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Filters */}
          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300 mb-6",
              showFilters ? "max-h-96" : "max-h-0"
            )}
          >
            <div className="flex flex-wrap gap-2 p-4 bg-card rounded-xl">
              <Button
                variant={categoryFilter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryChange('all')}
              >
                All Plants
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={categoryFilter === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.icon} {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Active Filter Badges */}
          {(categoryFilter !== 'all' || specialFilter) && (
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {categoryFilter !== 'all' && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleCategoryChange('all')}
                  className="gap-1"
                >
                  {categories.find(c => c.id === categoryFilter)?.name}
                  <X className="h-3 w-3" />
                </Button>
              )}
              {specialFilter === 'beginner' && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={clearSpecialFilter}
                  className="gap-1"
                >
                  🌱 Beginner Friendly
                  <X className="h-3 w-3" />
                </Button>
              )}
              {specialFilter === 'ayurvedic' && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={clearSpecialFilter}
                  className="gap-1"
                >
                  🌿 Ayurvedic Plants
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
          )}

          {/* Plants Grid */}
          {filteredPlants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPlants.map((plant, index) => (
                <PlantCard key={plant.id} plant={plant} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-5xl">🌿</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                No plants found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button onClick={() => { handleCategoryChange('all'); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Shop;
