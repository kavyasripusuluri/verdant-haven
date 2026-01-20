import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { defaultParent } from '@/data/parentpal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Baby, Heart, Sparkles, Star } from 'lucide-react';

export const LoginPage = () => {
  const { setIsLoggedIn, setParent } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [parentName, setParentName] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp && parentName) {
      setParent({ ...defaultParent, name: parentName, email });
    }
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Star className="w-8 h-8 text-sunshine opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
          <Heart className="w-6 h-6 text-coral opacity-50" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-10 h-10 text-primary opacity-40" />
        </div>
        <div className="absolute bottom-20 right-10 animate-wiggle">
          <Baby className="w-8 h-8 text-mint opacity-50" />
        </div>
      </div>

      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8 animate-fade-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <span className="text-4xl">🦉</span>
          </div>
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            ParentPal
          </h1>
          <p className="text-muted-foreground">
            Your AI companion for child development
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-card rounded-3xl shadow-card p-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-display font-semibold text-center mb-6">
            {isSignUp ? 'Create Account' : 'Welcome Back!'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="parentName">Your Name</Label>
                <Input
                  id="parentName"
                  type="text"
                  placeholder="Enter your name"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="h-12 rounded-xl bg-muted/50"
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="parent@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl bg-muted/50"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl bg-muted/50"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-lg rounded-xl btn-bouncy"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary hover:underline font-medium"
            >
              {isSignUp 
                ? 'Already have an account? Sign in' 
                : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};