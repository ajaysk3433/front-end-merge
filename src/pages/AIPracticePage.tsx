import { useState } from "react";
import {
  ClipboardList,
  Clock,
  FileText,
  ChevronLeft,
  ChevronRight,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

const chapters = [
  "1. Real Numbers",
  "2. Polynomials",
  "3. Pair of Linear Equations in Two Variables",
  "4. Quadratic Equations",
  "5. Arithmetic Progressions",
  "6. Triangles",
  "7. Coordinate Geometry",
  "8. Introduction to Trigonometry",
];

const questionTypes = [
  { id: "mcq", label: "Multiple choice questions [MCQ]" },
  { id: "sa", label: "Short answers [SA]" },
  { id: "la", label: "Long answers [LA]" },
  { id: "pyq", label: "Previous Year Questions [PQ]" },
  { id: "aiq", label: "Predicted This year Questions [AIQ]" },
];

export default function AIPracticePage() {
  const [step, setStep] = useState<"setup" | "exam">("setup");
  const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const toggleChapter = (chapter: string) => {
    setSelectedChapters((prev) =>
      prev.includes(chapter)
        ? prev.filter((c) => c !== chapter)
        : [...prev, chapter]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  if (step === "exam") {
    return (
      <div className="min-h-screen bg-muted/30">
        {/* Exam Header */}
        <div className="bg-card border-b border-border p-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setStep("setup")}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="font-semibold text-foreground">Mathematics</h1>
                <p className="text-sm text-muted-foreground">
                  21 marks • 180 min
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm">
                <Clock className="w-4 h-4" />
                <span>1:12 remaining</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Question{" "}
                <span className="font-semibold text-foreground">
                  {currentQuestion + 1}
                </span>
                /11
              </div>
            </div>
          </div>
        </div>

        {/* Exam Content */}
        <div className="max-w-4xl mx-auto p-6">
          {/* Section info */}
          <div className="edtech-card mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-semibold text-foreground">
                  Section: Long Answer
                </h2>
                <p className="text-sm text-muted-foreground">
                  3 Questions • 48 minutes
                </p>
              </div>
              <Progress value={33} className="w-32 h-2" />
            </div>

            <div className="p-4 rounded-lg bg-accent/30">
              <h3 className="font-medium text-foreground mb-2">
                General Instructions
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Total Time: 3 hours</li>
                <li>• Number of Questions: 11</li>
                <li>
                  • Allowed Resources: Standard exam reference sheet only (no
                  notes or textbooks)
                </li>
                <li>• Scoring: Total marks: 21</li>
              </ul>
            </div>
          </div>

          {/* Question */}
          <div className="edtech-card">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                L{currentQuestion + 1}
              </span>
              <div className="flex-1">
                <p className="text-foreground leading-relaxed">
                  Ramkali saved ₹5 in the first week of a year and then
                  increased her weekly savings by ₹1.75. If in the nth week, her
                  weekly savings become ₹20.75, find n.
                </p>
              </div>
            </div>

            <Textarea
              placeholder="Write your answer here..."
              className="min-h-[200px] resize-none"
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Question pills */}
            <div className="flex gap-2 flex-wrap">
              {["L1", "L2", "L3", "S2", "S4", "S5", "S6", "S3", "M1", "M2", "M3"].map(
                (q, i) => (
                  <button
                    key={q}
                    onClick={() => setCurrentQuestion(i)}
                    className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                      i === currentQuestion
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-accent text-muted-foreground"
                    }`}
                  >
                    {q}
                  </button>
                )
              )}
            </div>

            <div className="flex gap-3">
              <Button variant="outline">Submit</Button>
              <Button
                variant="ghost"
                onClick={() =>
                  setCurrentQuestion((p) => Math.min(p + 1, 10))
                }
              >
                Skip
              </Button>
              <Button
                className="gradient-button"
                onClick={() =>
                  setCurrentQuestion((p) => Math.min(p + 1, 10))
                }
              >
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold text-foreground">
            AI Practice
          </h1>
          <p className="text-muted-foreground mt-1">Create a Mock Exam</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Settings */}
          <div className="space-y-6">
            <div className="edtech-card">
              <h3 className="font-semibold text-foreground mb-4">
                Select Class
              </h3>
              <Select defaultValue="10">
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9">9th Grade</SelectItem>
                  <SelectItem value="10">10th Grade</SelectItem>
                  <SelectItem value="11">11th Grade</SelectItem>
                  <SelectItem value="12">12th Grade</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="edtech-card">
              <h3 className="font-semibold text-foreground mb-4">
                Select Language
              </h3>
              <Select defaultValue="english">
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="edtech-card">
              <h3 className="font-semibold text-foreground mb-4">
                Select Subject
              </h3>
              <Select defaultValue="mathematics">
                <SelectTrigger>
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="edtech-card">
              <h3 className="font-semibold text-foreground mb-4">
                Topics/Chapters
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    checked={selectedChapters.length === chapters.length}
                    onCheckedChange={(checked) =>
                      setSelectedChapters(checked ? chapters : [])
                    }
                  />
                  <span className="ml-2 text-sm font-medium">Select All</span>
                </div>
                {chapters.map((chapter) => (
                  <div key={chapter} className="flex items-center">
                    <Checkbox
                      checked={selectedChapters.includes(chapter)}
                      onCheckedChange={() => toggleChapter(chapter)}
                    />
                    <span className="ml-2 text-sm">{chapter}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Question Types */}
          <div className="edtech-card">
            <h3 className="font-semibold text-foreground mb-4">
              Question Types
            </h3>
            <div className="space-y-3">
              {questionTypes.map((type) => (
                <div key={type.id} className="flex items-center">
                  <Checkbox
                    checked={selectedTypes.includes(type.id)}
                    onCheckedChange={() => toggleType(type.id)}
                  />
                  <span className="ml-2 text-sm">{type.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="edtech-card">
            <h3 className="font-semibold text-foreground mb-4">
              Mock Exam Summary
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Selected options:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTypes.map((type) => (
                    <span
                      key={type}
                      className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs"
                    >
                      {type.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Selected chapters:
                </p>
                <ul className="text-sm space-y-1">
                  {selectedChapters.slice(0, 5).map((chapter) => (
                    <li key={chapter} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-primary" />
                      {chapter}
                    </li>
                  ))}
                  {selectedChapters.length > 5 && (
                    <li className="text-muted-foreground">
                      +{selectedChapters.length - 5} more
                    </li>
                  )}
                </ul>
              </div>

              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Estimated Time:</span>
                  <span className="font-medium">3h</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Estimated Marks:
                  </span>
                  <span className="font-medium">21</span>
                </div>
              </div>

              <Button
                className="w-full gradient-button mt-4"
                onClick={() => setStep("exam")}
                disabled={
                  selectedChapters.length === 0 || selectedTypes.length === 0
                }
              >
                <ClipboardList className="w-4 h-4 mr-2" />
                Generate Mock Exam
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
