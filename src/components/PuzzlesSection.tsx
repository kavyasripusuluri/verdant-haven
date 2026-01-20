import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Puzzle, Star, ArrowLeft, Sparkles, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const PuzzlesSection = () => {
  const { currentChild } = useApp();
  const [selectedPuzzle, setSelectedPuzzle] = useState<string | null>(null);

  const puzzles = [
    {
      id: 'shapes',
      title: 'Shape Match',
      emoji: '⭐',
      description: 'Match the shapes to their shadows!',
      difficulty: 'easy',
      thumbnail: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=300&fit=crop',
    },
    {
      id: 'colors',
      title: 'Color Sort',
      emoji: '🎨',
      description: 'Sort the objects by their colors!',
      difficulty: 'easy',
      thumbnail: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=300&fit=crop',
    },
    {
      id: 'animals',
      title: 'Animal Puzzle',
      emoji: '🦁',
      description: 'Put together the animal pictures!',
      difficulty: 'medium',
      thumbnail: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=400&h=300&fit=crop',
    },
    {
      id: 'numbers',
      title: 'Number Order',
      emoji: '🔢',
      description: 'Put the numbers in the right order!',
      difficulty: 'easy',
      thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop',
    },
  ];

  const difficultyColors: Record<string, string> = {
    easy: 'bg-mint/30 text-forest',
    medium: 'bg-sunshine/30 text-foreground',
    hard: 'bg-coral/20 text-coral',
  };

  if (selectedPuzzle) {
    return <ShapePuzzleGame onBack={() => setSelectedPuzzle(null)} />;
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-display font-bold text-foreground flex items-center justify-center gap-3">
          <Puzzle className="w-8 h-8 text-mint" />
          Puzzle Time! 🧩
        </h1>
        <p className="text-muted-foreground mt-2">
          Solve fun puzzles, {currentChild.name}!
        </p>
      </div>

      {/* Puzzles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {puzzles.map((puzzle) => (
          <div
            key={puzzle.id}
            onClick={() => setSelectedPuzzle(puzzle.id)}
            className="card-playful overflow-hidden cursor-pointer group"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={puzzle.thumbnail}
                alt={puzzle.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3 text-4xl">
                {puzzle.emoji}
              </div>
              <div className="absolute bottom-3 left-3">
                <span className={cn(
                  "px-2 py-1 rounded-full text-xs font-medium capitalize",
                  difficultyColors[puzzle.difficulty]
                )}>
                  {puzzle.difficulty}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-display font-semibold text-xl text-foreground">
                {puzzle.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {puzzle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Simple Shape Puzzle Game
interface ShapePuzzleGameProps {
  onBack: () => void;
}

const ShapePuzzleGame = ({ onBack }: ShapePuzzleGameProps) => {
  const shapes = [
    { id: 1, shape: 'circle', color: 'bg-coral' },
    { id: 2, shape: 'square', color: 'bg-primary' },
    { id: 3, shape: 'triangle', color: 'bg-sunshine' },
    { id: 4, shape: 'star', color: 'bg-mint' },
  ];

  const [matched, setMatched] = useState<number[]>([]);
  const [draggedId, setDraggedId] = useState<number | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const handleDrop = (targetId: number) => {
    if (draggedId === targetId && !matched.includes(targetId)) {
      const newMatched = [...matched, targetId];
      setMatched(newMatched);
      if (newMatched.length === shapes.length) {
        setIsComplete(true);
      }
    }
    setDraggedId(null);
  };

  const resetGame = () => {
    setMatched([]);
    setIsComplete(false);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button onClick={resetGame} variant="outline" className="gap-2">
          <Sparkles className="w-4 h-4" />
          Reset
        </Button>
      </div>

      {/* Title */}
      <div className="text-center">
        <h2 className="text-2xl font-display font-bold">Match the Shapes!</h2>
        <p className="text-muted-foreground">Drag each shape to its matching shadow</p>
      </div>

      {/* Win Screen */}
      {isComplete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-3xl p-8 text-center animate-scale-in max-w-sm mx-4">
            <Trophy className="w-16 h-16 mx-auto text-sunshine mb-4" />
            <h2 className="text-3xl font-display font-bold mb-2">Amazing! 🎉</h2>
            <p className="text-muted-foreground mb-6">
              You matched all the shapes!
            </p>
            <div className="flex gap-3 justify-center">
              <Button onClick={resetGame} className="btn-bouncy">
                Play Again
              </Button>
              <Button variant="outline" onClick={onBack}>
                More Puzzles
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Game Area */}
      <div className="max-w-2xl mx-auto">
        {/* Draggable Shapes */}
        <div className="flex justify-center gap-6 mb-12">
          {shapes.filter(s => !matched.includes(s.id)).map((shape) => (
            <div
              key={shape.id}
              draggable
              onDragStart={() => setDraggedId(shape.id)}
              className={cn(
                "w-16 h-16 cursor-grab active:cursor-grabbing transition-transform hover:scale-110",
                shape.color
              )}
              style={{
                borderRadius: shape.shape === 'circle' ? '50%' : 
                             shape.shape === 'square' ? '8px' :
                             shape.shape === 'triangle' ? '0' : '0',
                clipPath: shape.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' :
                         shape.shape === 'star' ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 'none'
              }}
            />
          ))}
        </div>

        {/* Drop Zones */}
        <div className="flex justify-center gap-6">
          {shapes.map((shape) => (
            <div
              key={shape.id}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(shape.id)}
              className={cn(
                "w-20 h-20 border-4 border-dashed border-muted-foreground/30 flex items-center justify-center transition-all",
                matched.includes(shape.id) && "border-primary bg-primary/10"
              )}
              style={{
                borderRadius: shape.shape === 'circle' ? '50%' : 
                             shape.shape === 'square' ? '8px' : '0',
                clipPath: shape.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' :
                         shape.shape === 'star' ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 'none'
              }}
            >
              {matched.includes(shape.id) && (
                <Star className="w-6 h-6 text-primary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};