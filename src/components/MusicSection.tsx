import { useApp } from '@/context/AppContext';
import { Music, Play, Pause, Heart, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export const MusicSection = () => {
  const { currentChild } = useApp();
  const [playingId, setPlayingId] = useState<string | null>(null);

  const songs = [
    {
      id: '1',
      title: 'Twinkle Twinkle Little Star',
      emoji: '⭐',
      duration: '2:30',
      color: 'bg-sunshine/30',
    },
    {
      id: '2',
      title: 'The ABC Song',
      emoji: '🔤',
      duration: '2:15',
      color: 'bg-primary/20',
    },
    {
      id: '3',
      title: 'Row Row Row Your Boat',
      emoji: '⛵',
      duration: '1:45',
      color: 'bg-sky/30',
    },
    {
      id: '4',
      title: 'Old MacDonald',
      emoji: '🐮',
      duration: '3:00',
      color: 'bg-mint/30',
    },
    {
      id: '5',
      title: 'If You\'re Happy and You Know It',
      emoji: '😊',
      duration: '2:45',
      color: 'bg-peach',
    },
    {
      id: '6',
      title: 'Itsy Bitsy Spider',
      emoji: '🕷️',
      duration: '2:00',
      color: 'bg-lavender',
    },
    {
      id: '7',
      title: 'Head, Shoulders, Knees & Toes',
      emoji: '🙆',
      duration: '2:20',
      color: 'bg-coral/20',
    },
    {
      id: '8',
      title: 'Lullaby for Sweet Dreams',
      emoji: '🌙',
      duration: '4:00',
      color: 'bg-lavender-light',
    },
  ];

  const togglePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-display font-bold text-foreground flex items-center justify-center gap-3">
          <Music className="w-8 h-8 text-coral" />
          Sing Along! 🎵
        </h1>
        <p className="text-muted-foreground mt-2">
          Fun songs to sing and dance to, {currentChild.name}!
        </p>
      </div>

      {/* Songs List */}
      <div className="max-w-2xl mx-auto space-y-3">
        {songs.map((song) => (
          <div
            key={song.id}
            className={cn(
              "flex items-center gap-4 p-4 rounded-2xl transition-all cursor-pointer hover:shadow-card",
              song.color,
              playingId === song.id && "ring-2 ring-primary"
            )}
            onClick={() => togglePlay(song.id)}
          >
            <div className="text-3xl">{song.emoji}</div>
            <div className="flex-1">
              <h3 className="font-display font-semibold text-foreground">
                {song.title}
              </h3>
              <p className="text-sm text-muted-foreground">{song.duration}</p>
            </div>
            <button
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                playingId === song.id 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-card shadow-sm"
              )}
            >
              {playingId === song.id ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Now Playing */}
      {playingId && (
        <div className="fixed bottom-0 left-64 right-0 bg-card border-t border-border p-4 animate-slide-up">
          <div className="max-w-2xl mx-auto flex items-center gap-4">
            <div className="text-3xl animate-bounce-gentle">
              {songs.find(s => s.id === playingId)?.emoji}
            </div>
            <div className="flex-1">
              <p className="font-semibold">Now Playing</p>
              <p className="text-sm text-muted-foreground">
                {songs.find(s => s.id === playingId)?.title}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-1 bg-primary rounded-full animate-pulse"
                    style={{
                      height: `${10 + Math.random() * 20}px`,
                      animationDelay: `${i * 100}ms`
                    }}
                  />
                ))}
              </div>
              <button 
                onClick={() => setPlayingId(null)}
                className="p-2 hover:bg-muted rounded-full"
              >
                <Pause className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Favorite Songs */}
      <div className="text-center py-8 bg-gradient-child rounded-3xl">
        <Heart className="w-12 h-12 mx-auto text-coral mb-4" />
        <h3 className="font-display font-semibold text-lg mb-2">Your Favorite Songs</h3>
        <p className="text-muted-foreground">
          Tap the heart on any song to save it here!
        </p>
      </div>
    </div>
  );
};