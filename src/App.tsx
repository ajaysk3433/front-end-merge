import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import AIGiniPage from "./pages/AIGiniPage";
import AINotesPage from "./pages/AINotesPage";
import AIPracticePage from "./pages/AIPracticePage";
import AITutorPage from "./pages/AITutorPage";
import SummarizerPage from "./pages/SummarizerPage";
import PerformancePage from "./pages/PerformancePage";
import HistoryPage from "./pages/HistoryPage";
import MoreToolsPage from "./pages/MoreToolsPage";
import ProfilePage from "./pages/ProfilePage";
import SupportPage from "./pages/SupportPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Support page has its own layout */}
          <Route path="/support" element={<SupportPage />} />
          <Route path="/feedback" element={<SupportPage />} />
          
          {/* Main app routes with sidebar */}
          <Route path="/*" element={
            <MainLayout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ai-gini" element={<AIGiniPage />} />
                <Route path="/ai-notes" element={<AINotesPage />} />
                <Route path="/ai-practice" element={<AIPracticePage />} />
                <Route path="/ai-tutor" element={<AITutorPage />} />
                <Route path="/ai-flashcards" element={<AINotesPage />} />
                <Route path="/summarizer" element={<SummarizerPage />} />
                <Route path="/performance" element={<PerformancePage />} />
                <Route path="/more-tools" element={<MoreToolsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/new-course" element={<HomePage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/tools/*" element={<MoreToolsPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MainLayout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
