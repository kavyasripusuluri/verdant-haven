import { useApp } from '@/context/AppContext';
import { Child } from '@/data/parentpal';
import { 
  Activity, 
  BookOpen, 
  Calendar, 
  Gamepad2, 
  Heart, 
  Plus,
  Sparkles,
  Star,
  TrendingUp,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const ParentDashboard = () => {
  const { parent, currentChild, setCurrentChild, setMode } = useApp();

  const quickStats = [
    { label: 'Stories Read', value: '12', icon: BookOpen, color: 'text-primary' },
    { label: 'Games Played', value: '8', icon: Gamepad2, color: 'text-coral' },
    { label: 'Learning Time', value: '2h', icon: TrendingUp, color: 'text-mint' },
    { label: 'Activities Done', value: '5', icon: Activity, color: 'text-sunshine' },
  ];

  const recentActivities = [
    { title: 'Completed Memory Match', time: 'Today, 3:00 PM', type: 'game' },
    { title: 'Listened to Bedtime Story', time: 'Yesterday, 8:00 PM', type: 'story' },
    { title: 'Learned about Colors', time: 'Yesterday, 4:00 PM', type: 'learning' },
    { title: 'Chatted with Professor Owl', time: '2 days ago', type: 'chat' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Welcome back, {parent.name}! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's what {currentChild.name} has been up to lately.
          </p>
        </div>
        <Button className="btn-bouncy gap-2">
          <Plus className="w-4 h-4" />
          Add Child
        </Button>
      </div>

      {/* Children Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {parent.children.map((child) => (
          <ChildProfileCard
            key={child.id}
            child={child}
            isActive={currentChild.id === child.id}
            onSelect={() => setCurrentChild(child)}
            onStartChildMode={() => {
              setCurrentChild(child);
              setMode('child');
            }}
          />
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="card-playful">
              <CardContent className="p-4 flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-muted ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card className="card-playful">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  {activity.type === 'game' && <Gamepad2 className="w-5 h-5 text-primary" />}
                  {activity.type === 'story' && <BookOpen className="w-5 h-5 text-coral" />}
                  {activity.type === 'learning' && <Star className="w-5 h-5 text-sunshine" />}
                  {activity.type === 'chat' && <Sparkles className="w-5 h-5 text-mint" />}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Developmental Insights */}
        <Card className="card-playful">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-mint" />
              Developmental Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-xl bg-mint/20 border border-mint/30">
              <h4 className="font-semibold text-foreground mb-1">🌟 Great Progress!</h4>
              <p className="text-sm text-muted-foreground">
                {currentChild.name} is showing excellent cognitive development. 
                Memory games are being completed faster than average!
              </p>
            </div>
            <div className="p-4 rounded-xl bg-sunshine/20 border border-sunshine/30">
              <h4 className="font-semibold text-foreground mb-1">💡 Suggestion</h4>
              <p className="text-sm text-muted-foreground">
                Try some fine motor activities like drawing or cutting. 
                This will complement the cognitive skills being developed.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-lavender/50 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-1">📚 Recommended Activity</h4>
              <p className="text-sm text-muted-foreground">
                "Constellation Punch Cards" - Great for fine motor skills 
                and matches {currentChild.name}'s interest in space!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Child Profile Card Component
interface ChildProfileCardProps {
  child: Child;
  isActive: boolean;
  onSelect: () => void;
  onStartChildMode: () => void;
}

const ChildProfileCard = ({ child, isActive, onSelect, onStartChildMode }: ChildProfileCardProps) => {
  return (
    <Card 
      className={`card-playful cursor-pointer ${isActive ? 'ring-2 ring-primary' : ''}`}
      onClick={onSelect}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <img
            src={child.photo}
            alt={child.name}
            className="w-16 h-16 rounded-full object-cover border-3 border-primary/20"
          />
          <div className="flex-1">
            <h3 className="font-display font-semibold text-lg">{child.name}</h3>
            <p className="text-sm text-muted-foreground">{child.age} years old</p>
            <div className="flex gap-1 mt-1">
              {child.interests.slice(0, 3).map((interest, i) => (
                <span 
                  key={i}
                  className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <User className="w-4 h-4 mr-1" />
            Edit
          </Button>
          <Button 
            size="sm" 
            className="flex-1 btn-bouncy"
            onClick={(e) => {
              e.stopPropagation();
              onStartChildMode();
            }}
          >
            <Heart className="w-4 h-4 mr-1" />
            Play
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};