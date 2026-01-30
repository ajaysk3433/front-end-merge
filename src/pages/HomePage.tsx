import { Link } from "react-router-dom";
import { Home as HomeIcon, FileText, GraduationCap, ClipboardList, Sparkles, Upload, Mic, Globe, MonitorSmartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QuickTool } from "@/components/ui/tool-card";
import aiTutorRobot from "@/assets/ai-tutor-robot.png";
import heroBg from "@/assets/hero-bg.jpg";
export default function HomePage() {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 px-6 lg:px-12 overflow-hidden" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in">
            Study Partner{" "}
            <span className="text-gradient">Anytime Anywhere</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            All your study in one place — learn faster, stress less, score
            higher
          </p>

          {/* Quick tools */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <QuickTool title="Doc Summariser" icon={HomeIcon} href="/summarizer" />
            <QuickTool title="AI Notes" icon={FileText} href="/ai-notes" />
            <QuickTool title="AI Tutor" icon={GraduationCap} href="/ai-tutor" />
            <QuickTool title="AI Practice" icon={ClipboardList} href="/ai-practice" />
          </div>

          {/* AI Chat Box */}
          <div className="max-w-3xl mx-auto">
            <div className="edtech-card glass p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Robot mascot */}
                <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 animate-float">
                  <img alt="AI Tutor Robot" className="w-full h-full object-contain" src="/lovable-uploads/628e986e-61cc-490a-9719-6f2250db6f77.png" />
                </div>

                {/* Input area */}
                <div className="flex-1 w-full space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Upload className="w-4 h-4" />
                    <span>
                      Upload{" "}
                      <span className="text-secondary font-medium">Image</span>{" "}
                      or{" "}
                      <span className="text-primary font-medium">PDF</span> to
                      solve questions in it
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
                      <Mic className="w-3.5 h-3.5" />
                      Recording
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
                      <Globe className="w-3.5 h-3.5" />
                      Language
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
                      <MonitorSmartphone className="w-3.5 h-3.5" />
                      Subject
                    </span>
                  </div>

                  {/* Input */}
                  <div className="relative">
                    <Input placeholder="Paste or type your question to get answers" className="h-12 pr-4 text-base bg-background/80 border-border/50" />
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full h-12 gradient-button text-primary-foreground font-medium text-base shadow-edtech hover:shadow-edtech-lg transition-shadow">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get answer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recents Section */}
      <section className="py-10 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl font-semibold text-foreground">
              Recents
            </h2>
            <Link to="/history" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
              Go to Recent History
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Empty state */}
          <div className="edtech-card p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-muted flex items-center justify-center">
              <FileText className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              No recent activity
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Start learning with our AI tools to see your recent activity here
            </p>
            <Button variant="outline">
              <Sparkles className="w-4 h-4 mr-2" />
              Explore AI Tools
            </Button>
          </div>
        </div>
      </section>
    </div>;
}