import { useApp } from '@/context/AppContext';
import { 
  Heart, 
  Users, 
  Globe, 
  Leaf,
  HandHeart,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const ValuesSection = () => {
  const { currentChild } = useApp();

  const values = [
    {
      id: '1',
      title: 'Kindness',
      emoji: '💝',
      description: 'Being nice to everyone and helping others feel happy.',
      examples: ['Sharing your toys', 'Saying nice things', 'Helping a friend'],
      color: 'bg-coral/20 border-coral/30',
      icon: Heart,
    },
    {
      id: '2',
      title: 'Honesty',
      emoji: '⭐',
      description: 'Always telling the truth, even when it\'s hard.',
      examples: ['Admitting mistakes', 'Being truthful', 'Keeping promises'],
      color: 'bg-sunshine/30 border-sunshine/50',
      icon: Sparkles,
    },
    {
      id: '3',
      title: 'Respect',
      emoji: '🤝',
      description: 'Treating everyone the way you want to be treated.',
      examples: ['Listening when others talk', 'Using kind words', 'Being patient'],
      color: 'bg-primary/20 border-primary/30',
      icon: Users,
    },
    {
      id: '4',
      title: 'Caring for Nature',
      emoji: '🌍',
      description: 'Taking care of our beautiful planet and all its creatures.',
      examples: ['Not littering', 'Being gentle with animals', 'Saving water'],
      color: 'bg-mint/30 border-mint/50',
      icon: Leaf,
    },
    {
      id: '5',
      title: 'Helping Others',
      emoji: '🤗',
      description: 'Lending a hand when someone needs help.',
      examples: ['Helping with chores', 'Comforting a sad friend', 'Sharing food'],
      color: 'bg-peach border-peach',
      icon: HandHeart,
    },
    {
      id: '6',
      title: 'Being Brave',
      emoji: '🦁',
      description: 'Facing your fears and trying new things.',
      examples: ['Trying new foods', 'Making new friends', 'Speaking up'],
      color: 'bg-sky/30 border-sky/50',
      icon: Globe,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-display font-bold text-foreground flex items-center justify-center gap-3">
          <Heart className="w-8 h-8 text-coral" />
          Good Values 💫
        </h1>
        <p className="text-muted-foreground mt-2">
          Learn how to be a wonderful person, {currentChild.name}!
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <div
              key={value.id}
              className={cn(
                "card-playful p-6 border-2",
                value.color
              )}
            >
              <div className="text-center mb-4">
                <span className="text-5xl">{value.emoji}</span>
              </div>
              <h3 className="font-display font-bold text-xl text-center mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-center text-sm mb-4">
                {value.description}
              </p>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Examples:
                </p>
                <ul className="space-y-1">
                  {value.examples.map((example, i) => (
                    <li 
                      key={i}
                      className="text-sm text-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quote */}
      <div className="bg-gradient-child rounded-3xl p-8 text-center">
        <blockquote className="text-2xl font-display font-semibold text-foreground">
          "Be the reason someone smiles today!"
        </blockquote>
        <p className="text-muted-foreground mt-4">
          Remember, {currentChild.name}, small acts of kindness make the world a better place! 🌈
        </p>
      </div>
    </div>
  );
};