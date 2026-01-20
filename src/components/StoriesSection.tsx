import { useState, useEffect, useRef } from 'react';
import { stories, Story } from '@/data/parentpal';
import { useApp } from '@/context/AppContext';
import { 
  BookOpen, 
  Clock, 
  Moon, 
  Pause, 
  Play, 
  Sparkles, 
  Star,
  Volume2,
  VolumeX,
  ArrowLeft,
  Compass,
  Heart,
  Trees
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface StoriesSectionProps {
  searchQuery: string;
}

export const StoriesSection = ({ searchQuery }: StoriesSectionProps) => {
  const { currentChild } = useApp();
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Filter stories by age and search
  const filteredStories = stories.filter(story => {
    const ageMatch = currentChild.age >= story.ageRange[0] && currentChild.age <= story.ageRange[1];
    const searchMatch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       story.description.toLowerCase().includes(searchQuery.toLowerCase());
    return ageMatch && (searchQuery === '' || searchMatch);
  });

  const categoryIcons: Record<string, React.ReactNode> = {
    bedtime: <Moon className="w-4 h-4" />,
    adventure: <Compass className="w-4 h-4" />,
    learning: <Star className="w-4 h-4" />,
    values: <Heart className="w-4 h-4" />,
    nature: <Trees className="w-4 h-4" />,
  };

  const categoryColors: Record<string, string> = {
    bedtime: 'bg-lavender text-primary',
    adventure: 'bg-coral/20 text-coral',
    learning: 'bg-sunshine/30 text-foreground',
    values: 'bg-peach text-secondary-foreground',
    nature: 'bg-mint/30 text-forest',
  };

  // Text-to-speech functionality
  const speakStory = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85; // Slower for children
      utterance.pitch = 1.1; // Slightly higher pitch
      utterance.volume = isMuted ? 0 : 1;
      
      // Try to get a friendly voice
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(v => 
        v.name.includes('Female') || v.name.includes('Samantha') || v.name.includes('Karen')
      );
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onend = () => setIsPlaying(false);
      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    } else if (speechRef.current) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
    } else if (selectedStory?.content) {
      speakStory(selectedStory.content);
    }
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  if (selectedStory) {
    return (
      <StoryReader 
        story={selectedStory} 
        onBack={() => {
          stopSpeaking();
          setSelectedStory(null);
        }}
        isPlaying={isPlaying}
        isMuted={isMuted}
        onTogglePlay={togglePlayPause}
        onToggleMute={() => setIsMuted(!isMuted)}
        onStartReading={() => selectedStory.content && speakStory(selectedStory.content)}
      />
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-display font-bold text-foreground flex items-center justify-center gap-3">
          <BookOpen className="w-8 h-8 text-primary" />
          Story Time! 📚
        </h1>
        <p className="text-muted-foreground mt-2">
          Pick a story and let's read together, {currentChild.name}!
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {['all', 'bedtime', 'adventure', 'learning', 'values', 'nature'].map((cat) => (
          <button
            key={cat}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              "bg-muted hover:bg-muted/80 text-foreground capitalize"
            )}
          >
            {cat === 'all' ? '✨ All Stories' : cat}
          </button>
        ))}
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStories.map((story) => (
          <div
            key={story.id}
            onClick={() => setSelectedStory(story)}
            className="group cursor-pointer"
          >
            <div className="card-playful overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={story.thumbnail}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className={cn(
                    "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
                    categoryColors[story.category]
                  )}>
                    {categoryIcons[story.category]}
                    {story.category}
                  </span>
                </div>
                {story.hasAudio && (
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-white/90">
                    <Volume2 className="w-4 h-4 text-primary" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-lg text-foreground line-clamp-1">
                  {story.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {story.description}
                </p>
                <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{story.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredStories.length === 0 && (
        <div className="text-center py-12">
          <Sparkles className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-lg text-muted-foreground">No stories found!</p>
          <p className="text-sm text-muted-foreground">Try a different search.</p>
        </div>
      )}
    </div>
  );
};

// Story Reader Component
interface StoryReaderProps {
  story: Story;
  onBack: () => void;
  isPlaying: boolean;
  isMuted: boolean;
  onTogglePlay: () => void;
  onToggleMute: () => void;
  onStartReading: () => void;
}

const StoryReader = ({ 
  story, 
  onBack, 
  isPlaying, 
  isMuted, 
  onTogglePlay, 
  onToggleMute,
  onStartReading 
}: StoryReaderProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-card/90 backdrop-blur-sm border-b border-border p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Stories
          </Button>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={onToggleMute}
              className="rounded-full"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
            <Button
              onClick={onTogglePlay}
              className="gap-2 btn-bouncy"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Read to Me
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-4xl mx-auto p-6">
        {/* Cover Image */}
        <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 shadow-card">
          <img
            src={story.thumbnail}
            alt={story.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white">
              {story.title}
            </h1>
            <p className="text-white/80 mt-2">{story.description}</p>
          </div>
        </div>

        {/* Story Text */}
        <div className="bg-card rounded-3xl p-8 shadow-card">
          <div className="prose prose-lg max-w-none">
            {story.content?.split('\n\n').map((paragraph, index) => (
              <p 
                key={index} 
                className="text-foreground text-lg leading-relaxed mb-6 font-medium"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  lineHeight: '2'
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Read Again Button */}
        <div className="text-center mt-8">
          <Button
            onClick={onStartReading}
            size="lg"
            className="btn-bouncy gap-2 text-lg px-8"
          >
            <Sparkles className="w-5 h-5" />
            Read Again
          </Button>
        </div>
      </div>
    </div>
  );
};