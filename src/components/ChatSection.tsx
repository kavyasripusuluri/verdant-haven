import { useState, useRef, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { professorOwlPersonality } from '@/data/parentpal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Volume2, Sparkles, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'owl';
  timestamp: Date;
}

export const ChatSection = () => {
  const { currentChild } = useApp();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial greeting
  useEffect(() => {
    const greeting = professorOwlPersonality.greetings[
      Math.floor(Math.random() * professorOwlPersonality.greetings.length)
    ].replace('[Name]', currentChild.name);

    setMessages([{
      id: '1',
      text: greeting,
      sender: 'owl',
      timestamp: new Date()
    }]);
  }, [currentChild.name]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simple response generator (mock AI)
  const generateResponse = (userMessage: string): string => {
    const lowerMsg = userMessage.toLowerCase();

    // Fun, educational responses
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
      return `Hello there, ${currentChild.name}! 🦉 It's so wonderful to chat with you! What would you like to learn about today?`;
    }
    if (lowerMsg.includes('sky') && lowerMsg.includes('blue')) {
      return `Great question! ☁️ The sky looks blue because sunlight bounces off tiny bits in the air, and blue light bounces the most! It's like the sky is playing with light rays. Isn't that cool?`;
    }
    if (lowerMsg.includes('rainbow')) {
      return `🌈 Rainbows are magical! When sunlight goes through raindrops, it splits into all the beautiful colors - red, orange, yellow, green, blue, and purple! Have you ever tried to find the end of a rainbow?`;
    }
    if (lowerMsg.includes('animal') || lowerMsg.includes('animals')) {
      return `I love animals too! 🐾 Did you know that elephants can hear sounds from very far away with their big ears? And dolphins are so smart they can recognize themselves in mirrors! What's your favorite animal?`;
    }
    if (lowerMsg.includes('space') || lowerMsg.includes('star') || lowerMsg.includes('moon')) {
      return `Space is amazing! 🚀 Did you know the moon doesn't have its own light? It shines because the sun's light bounces off it, just like a giant mirror in the sky! Would you like to be an astronaut someday?`;
    }
    if (lowerMsg.includes('dinosaur')) {
      return `🦕 Dinosaurs lived millions of years ago! The T-Rex was as tall as a two-story house, but some dinosaurs were tiny like chickens. Scientists find dinosaur bones and learn all about them. Isn't that exciting?`;
    }
    if (lowerMsg.includes('friend') || lowerMsg.includes('friends')) {
      return `Friends make life so much better! 💫 Good friends are kind, share their toys, and make us smile. The best way to have a good friend is to BE a good friend! Who's your best friend?`;
    }
    if (lowerMsg.includes('sad') || lowerMsg.includes('scared') || lowerMsg.includes('angry')) {
      return `It's okay to feel that way, ${currentChild.name}. 💜 Everyone has big feelings sometimes. When I feel that way, I take deep breaths - in through my nose, out through my mouth. Want to try it together? You're doing great!`;
    }
    if (lowerMsg.includes('thank')) {
      return `You're very welcome, little friend! 🌟 I love chatting with you. Keep being curious and asking questions - that's how we learn wonderful things!`;
    }
    if (lowerMsg.includes('joke') || lowerMsg.includes('funny')) {
      return `Here's a funny one for you! 😄 Why did the teddy bear say no to dessert? Because she was already stuffed! Hee hee! Do you know any jokes?`;
    }
    if (lowerMsg.includes('color')) {
      return `Colors are everywhere! 🎨 Red like apples, blue like the sky, yellow like sunshine, green like grass! What's your favorite color? I think purple is pretty nice - it's the color of my favorite berries!`;
    }
    if (lowerMsg.includes('sleep') || lowerMsg.includes('tired') || lowerMsg.includes('bed')) {
      return `Sleep is very important! 😴 When you sleep, your body grows bigger and your brain remembers all the fun things you learned. Sweet dreams help you feel happy and strong!`;
    }

    // Default curious response
    const defaultResponses = [
      `That's a great thought, ${currentChild.name}! 🌟 Tell me more about it - I love learning new things from you!`,
      `Hoo hoo! How interesting! 🦉 I think you're very smart for wondering about that. What else are you curious about?`,
      `What a wonderful thing to think about! 💫 Keep asking questions, ${currentChild.name} - curious minds are the best minds!`,
      `I love chatting with you! 🌈 You always have such interesting things to share. What's your favorite thing you learned today?`
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate thinking time
    setTimeout(() => {
      const response = generateResponse(inputValue);
      const owlMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'owl',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, owlMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      {/* Header */}
      <div className="p-6 border-b border-border bg-gradient-child">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-4xl animate-bounce-gentle">
            🦉
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">
              {professorOwlPersonality.name}
            </h1>
            <p className="text-muted-foreground">
              Your wise and friendly learning buddy!
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 child-scrollbar">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex items-end gap-3 animate-fade-up",
              message.sender === 'user' ? 'flex-row-reverse' : ''
            )}
          >
            {message.sender === 'owl' && (
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl flex-shrink-0">
                🦉
              </div>
            )}
            <div
              className={cn(
                "max-w-[70%] rounded-2xl px-4 py-3",
                message.sender === 'user'
                  ? "bg-primary text-primary-foreground rounded-br-none"
                  : "bg-card shadow-card rounded-bl-none"
              )}
            >
              <p className="text-base leading-relaxed">{message.text}</p>
              {message.sender === 'owl' && (
                <button
                  onClick={() => speakMessage(message.text)}
                  className="mt-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-end gap-3 animate-fade-up">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">
              🦉
            </div>
            <div className="bg-card shadow-card rounded-2xl rounded-bl-none px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      <div className="px-6 py-3 border-t border-border bg-muted/30">
        <div className="flex flex-wrap gap-2">
          {['Why is the sky blue?', 'Tell me a joke!', 'Tell me about animals'].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => {
                setInputValue(suggestion);
              }}
              className="px-3 py-1.5 rounded-full bg-card text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border bg-card">
        <div className="flex items-center gap-3">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 h-12 rounded-full text-base bg-muted/50"
          />
          <Button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            size="icon"
            className="h-12 w-12 rounded-full btn-bouncy"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};