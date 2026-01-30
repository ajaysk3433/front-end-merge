import { useState } from "react";
import { GraduationCap, Mic, Globe, Sparkles, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import aiTutorRobot from "@/assets/ai-tutor-robot.png";
export default function AITutorPage() {
  const [question, setQuestion] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  return <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-display text-2xl font-bold text-foreground">
            AI Tutor
          </h1>
          <p className="text-muted-foreground mt-1">
            Your personal one-on-one virtual tutor
          </p>
        </div>

        {/* Tutor Interface */}
        <div className="edtech-card overflow-hidden">
          {/* Visual area */}
          <div className="relative h-64 md:h-80 gradient-hero flex items-center justify-center">
            <div className="animate-float">
              <img alt="AI Tutor" className="w-48 h-48 md:w-64 md:h-64 object-contain" src="/lovable-uploads/1fbf5827-3da3-4ba7-86f8-3aec96f1ca47.png" />
            </div>

            {/* Mic button */}
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-card shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
              <Mic className="w-6 h-6 text-primary" />
            </button>
            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-sm text-muted-foreground pt-2">
              Tap to speak
            </p>
          </div>

          {/* Q&A Area */}
          <div className="p-6 space-y-4">
            {/* Language selector */}
            <div className="flex justify-end">
              <Select defaultValue="en-us">
                <SelectTrigger className="w-auto">
                  <Globe className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en-us">English (US)</SelectItem>
                  <SelectItem value="en-uk">English (UK)</SelectItem>
                  <SelectItem value="hi">Hindi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Question input */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Student:
              </label>
              <div className="flex gap-3">
                <Input value={question} onChange={e => setQuestion(e.target.value)} placeholder="What is Euclid's Division Lemma?" className="flex-1" />
                <Button onClick={() => setShowAnswer(true)} className="gradient-button" disabled={!question.trim()}>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Ask
                </Button>
              </div>
            </div>

            {/* Answer */}
            {showAnswer && <div className="p-4 rounded-xl bg-accent/50 animate-fade-in">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Bot:
                </label>
                <p className="text-foreground leading-relaxed">
                  Euclid's Division Lemma is a fundamental theorem in number
                  theory that states: For any two positive integers a and b,
                  there exist unique integers q (quotient) and r (remainder)
                  such that:
                </p>
                <div className="my-3 p-3 bg-card rounded-lg text-center font-mono text-lg">
                  a = bq + r, where 0 ≤ r &lt; b
                </div>
                <p className="text-foreground leading-relaxed">
                  This lemma is the basis for the Euclidean Algorithm used to
                  find the HCF (Highest Common Factor) of two numbers. It
                  essentially tells us that any integer can be expressed as a
                  multiple of another integer plus a remainder.
                </p>

                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <Button variant="ghost" size="sm">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Ask Another Question
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4" />
                    Step-by-step explanation
                  </div>
                </div>
              </div>}
          </div>
        </div>

        {/* Quick questions */}
        <div className="mt-8">
          <h3 className="font-semibold text-foreground mb-4">
            Popular Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {["What is the Fundamental Theorem of Arithmetic?", "Explain the concept of irrational numbers", "How to find HCF using Euclid's algorithm?", "What are rational numbers?"].map(q => <button key={q} onClick={() => {
            setQuestion(q);
            setShowAnswer(true);
          }} className="text-left p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-sm transition-all text-sm">
                {q}
              </button>)}
          </div>
        </div>
      </div>
    </div>;
}