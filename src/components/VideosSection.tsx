import { useApp } from '@/context/AppContext';
import { Video, Play, Clock, Sparkles } from 'lucide-react';

export const VideosSection = () => {
  const { currentChild } = useApp();

  const videos = [
    {
      id: '1',
      title: 'Learn Your ABCs',
      thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
      duration: '3:45',
      category: 'Alphabet',
    },
    {
      id: '2',
      title: 'Counting 1-20',
      thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop',
      duration: '4:20',
      category: 'Numbers',
    },
    {
      id: '3',
      title: 'Animals on the Farm',
      thumbnail: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop',
      duration: '5:15',
      category: 'Animals',
    },
    {
      id: '4',
      title: 'Colors of the Rainbow',
      thumbnail: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=300&fit=crop',
      duration: '3:30',
      category: 'Colors',
    },
    {
      id: '5',
      title: 'Shapes Song',
      thumbnail: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&h=300&fit=crop',
      duration: '4:00',
      category: 'Shapes',
    },
    {
      id: '6',
      title: 'Bedtime Lullaby',
      thumbnail: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&h=300&fit=crop',
      duration: '6:00',
      category: 'Music',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-display font-bold text-foreground flex items-center justify-center gap-3">
          <Video className="w-8 h-8 text-primary" />
          Watch & Learn! 📺
        </h1>
        <p className="text-muted-foreground mt-2">
          Fun videos just for you, {currentChild.name}!
        </p>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="card-playful overflow-hidden cursor-pointer group"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-white text-xs flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {video.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-display font-semibold text-lg text-foreground">
                {video.title}
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground mt-2 inline-block">
                {video.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon */}
      <div className="text-center py-8 bg-muted/30 rounded-3xl">
        <Sparkles className="w-12 h-12 mx-auto text-primary mb-4" />
        <h3 className="font-display font-semibold text-lg mb-2">More Videos Coming Soon!</h3>
        <p className="text-muted-foreground">
          We're adding new fun videos every week!
        </p>
      </div>
    </div>
  );
};