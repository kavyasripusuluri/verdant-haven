import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Sidebar } from '@/components/Sidebar';
import { TopBar } from '@/components/TopBar';
import { ParentDashboard } from '@/components/ParentDashboard';
import { StoriesSection } from '@/components/StoriesSection';
import { GamesSection } from '@/components/GamesSection';
import { PuzzlesSection } from '@/components/PuzzlesSection';
import { VideosSection } from '@/components/VideosSection';
import { MusicSection } from '@/components/MusicSection';
import { LearningSection } from '@/components/LearningSection';
import { ValuesSection } from '@/components/ValuesSection';
import { ChatSection } from '@/components/ChatSection';
import { cn } from '@/lib/utils';

export const Dashboard = () => {
  const { mode } = useApp();
  const [activeSection, setActiveSection] = useState(mode === 'parent' ? 'dashboard' : 'stories');
  const [searchQuery, setSearchQuery] = useState('');

  // Reset section when mode changes
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    if (mode === 'parent') {
      switch (activeSection) {
        case 'dashboard':
          return <ParentDashboard />;
        case 'activities':
          return <ParentDashboard />;
        case 'insights':
          return <ParentDashboard />;
        default:
          return <ParentDashboard />;
      }
    } else {
      switch (activeSection) {
        case 'stories':
          return <StoriesSection searchQuery={searchQuery} />;
        case 'games':
          return <GamesSection searchQuery={searchQuery} />;
        case 'puzzles':
          return <PuzzlesSection />;
        case 'videos':
          return <VideosSection />;
        case 'music':
          return <MusicSection />;
        case 'learning':
          return <LearningSection searchQuery={searchQuery} />;
        case 'values':
          return <ValuesSection />;
        case 'chat':
          return <ChatSection />;
        default:
          return <StoriesSection searchQuery={searchQuery} />;
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
      <div className="flex-1 flex flex-col">
        <TopBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <main className={cn(
          "flex-1 overflow-auto",
          mode === 'child' ? 'child-mode-bg child-scrollbar' : 'bg-background'
        )}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};