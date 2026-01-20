import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider, useApp } from "@/context/AppContext";
import { LoginPage } from "@/components/LoginPage";
import { Dashboard } from "@/pages/Dashboard";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isLoggedIn } = useApp();
  
  return isLoggedIn ? <Dashboard /> : <LoginPage />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppProvider>
          <Toaster />
          <Sonner />
          <AppContent />
        </AppProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;