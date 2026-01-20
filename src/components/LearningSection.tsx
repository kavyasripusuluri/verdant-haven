import { educationalContent, EducationalContent } from '@/data/parentpal';
import { useApp } from '@/context/AppContext';
import { 
  BookOpen, 
  Calculator, 
  Heart, 
  Lightbulb, 
  Palette,
  Shapes,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface LearningSectionProps {
  searchQuery: string;
}

export const LearningSection = ({ searchQuery }: LearningSectionProps) => {
  const { currentChild } = useApp();

  const filteredContent = educationalContent.filter(content => {
    const ageMatch = currentChild.age >= content.ageRange[0] && currentChild.age <= content.ageRange[1];
    const searchMatch = content.title.toLowerCase().includes(searchQuery.toLowerCase());
    return ageMatch && (searchQuery === '' || searchMatch);
  });

  const categoryIcons: Record<string, React.ReactNode> = {
    alphabet: <BookOpen className="w-6 h-6" />,
    numbers: <Calculator className="w-6 h-6" />,
    colors: <Palette className="w-6 h-6" />,
    shapes: <Shapes className="w-6 h-6" />,
    science: <Lightbulb className="w-6 h-6" />,
    values: <Heart className="w-6 h-6" />,
  };

  const categoryColors: Record<string, string> = {
    alphabet: 'bg-primary/20 text-primary',
    numbers: 'bg-coral/20 text-coral',
    colors: 'bg-sunshine/30 text-foreground',
    shapes: 'bg-mint/30 text-forest',
    science: 'bg-sky/30 text-foreground',
    values: 'bg-peach text-secondary-foreground',
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-display font-bold text-foreground flex items-center justify-center gap-3">
          <Sparkles className="w-8 h-8 text-sunshine" />
          Let's Learn! 📚
        </h1>
        <p className="text-muted-foreground mt-2">
          Fun learning adventures for curious minds!
        </p>
      </div>

      {/* Learning Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {['alphabet', 'numbers', 'colors', 'shapes', 'science', 'values'].map((cat) => (
          <button
            key={cat}
            className={cn(
              "p-4 rounded-2xl flex flex-col items-center gap-2 transition-all hover:scale-105",
              categoryColors[cat]
            )}
          >
            {categoryIcons[cat]}
            <span className="font-medium capitalize">{cat}</span>
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((content) => (
          <LearningCard key={content.id} content={content} />
        ))}
      </div>

      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <Sparkles className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-lg text-muted-foreground">No content found!</p>
        </div>
      )}
    </div>
  );
};

interface LearningCardProps {
  content: EducationalContent;
}

const LearningCard = ({ content }: LearningCardProps) => {
  const categoryEmojis: Record<string, string> = {
    alphabet: '🔤',
    numbers: '🔢',
    colors: '🎨',
    shapes: '⭐',
    science: '🔬',
    values: '💝',
  };

  return (
    <div className="card-playful overflow-hidden cursor-pointer group">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={content.thumbnail}
          alt={content.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 text-3xl">
          {categoryEmojis[content.category]}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-lg text-foreground">
          {content.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {content.description}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground capitalize">
            {content.category}
          </span>
          <span className="text-xs text-muted-foreground">
            Ages {content.ageRange[0]}-{content.ageRange[1]}
          </span>
        </div>
      </div>
    </div>
  );
};