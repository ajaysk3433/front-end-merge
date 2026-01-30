import { useState } from "react";
import {
  FileText,
  Download,
  BookOpen,
  ChevronRight,
  Sparkles,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

const chapters = [
  "1 Real Numbers",
  "2 Polynomials",
  "3 Pair of Linear Equations",
  "4 Quadratic Equations",
  "5 Arithmetic Progressions",
  "6 Triangles",
  "7 Coordinate Geometry",
  "8 Introduction to Trigonometry",
];

export default function AINotesPage() {
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">
              AI Notes
            </h1>
            <p className="text-muted-foreground mt-1">
              Study Guide Generator
            </p>
          </div>
          <Button variant="outline">
            <BookOpen className="w-4 h-4 mr-2" />
            Request Book
          </Button>
        </div>

        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
          <span>Mathematics</span>
          <ChevronRight className="w-4 h-4" />
          <span>Default</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">
            {selectedChapter || "Select Chapter"}
          </span>
        </div>

        {/* Filters */}
        <div className="edtech-card mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Language
              </label>
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
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Class
              </label>
              <Select defaultValue="10">
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9">Class 9</SelectItem>
                  <SelectItem value="10">Class 10</SelectItem>
                  <SelectItem value="11">Class 11</SelectItem>
                  <SelectItem value="12">Class 12</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Subject
              </label>
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
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Chapter
              </label>
              <Select
                value={selectedChapter || ""}
                onValueChange={setSelectedChapter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select chapter" />
                </SelectTrigger>
                <SelectContent>
                  {chapters.map((chapter) => (
                    <SelectItem key={chapter} value={chapter}>
                      {chapter}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chapters list */}
          <div className="edtech-card lg:col-span-1">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-10" />
            </div>
            <ScrollArea className="h-[400px]">
              <div className="space-y-1">
                {chapters.map((chapter) => (
                  <button
                    key={chapter}
                    onClick={() => setSelectedChapter(chapter)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left text-sm transition-colors ${
                      selectedChapter === chapter
                        ? "bg-primary/10 text-primary font-medium"
                        : "hover:bg-muted text-foreground"
                    }`}
                  >
                    <span>{chapter}</span>
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        selectedChapter === chapter
                          ? "border-primary bg-primary"
                          : "border-muted-foreground/30"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Notes content */}
          <div className="lg:col-span-2">
            {showNotes ? (
              <div className="edtech-card">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground">
                      Real Numbers - CBSE Class 10 Maths
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      6 marks info
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      Full Note Preview
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>

                <div className="prose prose-sm max-w-none">
                  <h3>Study Guide: Real Numbers</h3>
                  <p>
                    Real Numbers is a fundamental topic in mathematics that
                    forms the foundation for advanced concepts. This chapter
                    covers rational and irrational numbers, the Fundamental
                    Theorem of Arithmetic, and methods to find HCF and LCM.
                  </p>

                  <h4>Key Concepts:</h4>
                  <ul>
                    <li>
                      <strong>Euclid's Division Lemma:</strong> For positive
                      integers a and b, there exist unique integers q and r
                      such that a = bq + r, where 0 ≤ r &lt; b.
                    </li>
                    <li>
                      <strong>Fundamental Theorem of Arithmetic:</strong> Every
                      composite number can be expressed as a product of primes
                      uniquely.
                    </li>
                    <li>
                      <strong>Irrational Numbers:</strong> Numbers that cannot
                      be expressed as p/q where p and q are integers and q ≠ 0.
                    </li>
                  </ul>

                  <h4>Important Formulas:</h4>
                  <ul>
                    <li>HCF × LCM = Product of two numbers</li>
                    <li>For prime factorization: n = p₁^a × p₂^b × ...</li>
                  </ul>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-accent/50">
                  <h4 className="font-semibold text-foreground mb-2">
                    Quick Navigation
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "1 Numbers",
                      "2 Polynomials",
                      "3 Pair of Linear Equations",
                      "5 Arithmetic Progressions",
                      "6 Triangles",
                      "7 Coordinate Geometry",
                    ].map((item) => (
                      <span
                        key={item}
                        className="text-sm text-primary hover:underline cursor-pointer"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="edtech-card text-center py-16">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-accent flex items-center justify-center">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Generate Study Notes
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Select a chapter and click generate to create comprehensive
                  study notes with key concepts and summaries.
                </p>
                <Button
                  onClick={() => setShowNotes(true)}
                  className="gradient-button"
                  disabled={!selectedChapter}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Notes
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
