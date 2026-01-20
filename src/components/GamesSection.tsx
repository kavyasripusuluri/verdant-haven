import { useState } from 'react';
import { games, Game } from '@/data/parentpal';
import { useApp } from '@/context/AppContext';
import { 
  Gamepad2, 
  Star, 
  Play,
  Trophy,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GamesSectionProps {
  searchQuery: string;
}

export const GamesSection = ({ searchQuery }: GamesSectionProps) => {
  const { currentChild } = useApp();
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const filteredGames = games.filter(game => {
    const ageMatch = currentChild.age >= game.ageRange[0] && currentChild.age <= game.ageRange[1];
    const searchMatch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    return ageMatch && (searchQuery === '' || searchMatch);
  });

  const difficultyColors: Record<string, string> = {
    easy: 'bg-mint/30 text-forest',
    medium: 'bg-sunshine/30 text-foreground',
    hard: 'bg-coral/20 text-coral',
  };

  const categoryEmojis: Record<string, string> = {
    puzzle: '🧩',
    memory: '🧠',
    counting: '🔢',
    matching: '🎯',
    creative: '🎨',
  };

  if (selectedGame) {
    return (
      <GamePlayer 
        game={selectedGame} 
        onBack={() => setSelectedGame(null)} 
      />
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-display font-bold text-foreground flex items-center justify-center gap-3">
          <Gamepad2 className="w-8 h-8 text-coral" />
          Let's Play! 🎮
        </h1>
        <p className="text-muted-foreground mt-2">
          Choose a fun game, {currentChild.name}!
        </p>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
          <div
            key={game.id}
            onClick={() => setSelectedGame(game)}
            className="group cursor-pointer"
          >
            <div className="card-playful overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-3xl">{categoryEmojis[game.category]}</span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium capitalize",
                    difficultyColors[game.difficulty]
                  )}>
                    {game.difficulty}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {game.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {game.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-12">
          <Sparkles className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-lg text-muted-foreground">No games found!</p>
        </div>
      )}
    </div>
  );
};

// Simple Memory Game Player
interface GamePlayerProps {
  game: Game;
  onBack: () => void;
}

const GamePlayer = ({ game, onBack }: GamePlayerProps) => {
  const [cards, setCards] = useState<{ id: number; emoji: string; isFlipped: boolean; isMatched: boolean }[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);

  // Initialize memory game
  useState(() => {
    const emojis = ['🐶', '🐱', '🐰', '🦊', '🐻', '🐼'];
    const gameCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(gameCards);
  });

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2) return;
    if (cards[id].isMatched || cards[id].isFlipped) return;

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [first, second] = newFlipped;
      if (cards[first].emoji === cards[second].emoji) {
        // Match found
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[first].isMatched = true;
          matchedCards[second].isMatched = true;
          setCards(matchedCards);
          setFlippedCards([]);
          
          // Check win
          if (matchedCards.every(c => c.isMatched)) {
            setIsWon(true);
          }
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[first].isFlipped = false;
          resetCards[second].isFlipped = false;
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    const emojis = ['🐶', '🐱', '🐰', '🦊', '🐻', '🐼'];
    const gameCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(gameCards);
    setFlippedCards([]);
    setMoves(0);
    setIsWon(false);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <div className="flex items-center gap-4">
          <span className="text-lg font-medium">Moves: {moves}</span>
          <Button onClick={resetGame} variant="outline" className="gap-2">
            <Sparkles className="w-4 h-4" />
            New Game
          </Button>
        </div>
      </div>

      {/* Game Title */}
      <div className="text-center">
        <h1 className="text-2xl font-display font-bold">{game.title}</h1>
        <p className="text-muted-foreground">Find all the matching pairs!</p>
      </div>

      {/* Win Screen */}
      {isWon && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-3xl p-8 text-center animate-scale-in max-w-sm mx-4">
            <Trophy className="w-16 h-16 mx-auto text-sunshine mb-4" />
            <h2 className="text-3xl font-display font-bold mb-2">You Won! 🎉</h2>
            <p className="text-muted-foreground mb-6">
              Amazing job! You found all pairs in {moves} moves!
            </p>
            <div className="flex gap-3 justify-center">
              <Button onClick={resetGame} className="btn-bouncy">
                Play Again
              </Button>
              <Button variant="outline" onClick={onBack}>
                More Games
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Memory Game Grid */}
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-4 gap-3">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={cn(
                "aspect-square rounded-xl text-4xl flex items-center justify-center transition-all duration-300 transform",
                card.isFlipped || card.isMatched
                  ? "bg-primary/20 rotate-0"
                  : "bg-primary hover:scale-105 rotate-180"
              )}
              disabled={card.isMatched}
            >
              {(card.isFlipped || card.isMatched) ? card.emoji : '?'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};