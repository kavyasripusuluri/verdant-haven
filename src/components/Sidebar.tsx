import { useApp } from '@/context/AppContext';
import { 
  BookOpen, 
  Gamepad2, 
  GraduationCap, 
  Heart, 
  Home,
  MessageCircle,
  Music,
  Puzzle,
  Sparkles,
  Video
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const parentMenuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'activities', label: 'Activities', icon: Sparkles },
  { id: 'insights', label: 'Insights', icon: GraduationCap },
];

const childMenuItems = [
  { id: 'stories', label: 'Stories', icon: BookOpen },
  { id: 'games', label: 'Games', icon: Gamepad2 },
  { id: 'puzzles', label: 'Puzzles', icon: Puzzle },
  { id: 'videos', label: 'Videos', icon: Video },
  { id: 'music', label: 'Music', icon: Music },
  { id: 'learning', label: 'Learning', icon: GraduationCap },
  { id: 'values', label: 'Values', icon: Heart },
  { id: 'chat', label: 'Chat', icon: MessageCircle },
];

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const { mode, currentChild } = useApp();
  
  const menuItems = mode === 'parent' ? parentMenuItems : childMenuItems;
  const bgClass = mode === 'parent' ? 'bg-card' : 'bg-gradient-child';

  return (
    <aside className={cn(
      "w-64 min-h-screen border-r border-border flex flex-col",
      bgClass
    )}>
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🦉</span>
          <div>
            <h1 className="font-display font-bold text-xl text-foreground">ParentPal</h1>
            <p className="text-xs text-muted-foreground capitalize">{mode} Mode</p>
          </div>
        </div>
      </div>

      {/* Child Mode Greeting */}
      {mode === 'child' && (
        <div className="p-4 mx-4 mt-4 rounded-2xl bg-card/80 backdrop-blur-sm">
          <p className="text-sm text-muted-foreground">Welcome back,</p>
          <p className="font-display font-semibold text-lg text-foreground">{currentChild.name}! 🌟</p>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-playful" 
                      : "hover:bg-muted text-foreground"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom decoration for child mode */}
      {mode === 'child' && (
        <div className="p-4 text-center">
          <div className="flex justify-center gap-2 text-2xl">
            <span className="animate-bounce-gentle">⭐</span>
            <span className="animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>🌈</span>
            <span className="animate-bounce-gentle" style={{ animationDelay: '0.4s' }}>🎈</span>
          </div>
        </div>
      )}
    </aside>
  );
};