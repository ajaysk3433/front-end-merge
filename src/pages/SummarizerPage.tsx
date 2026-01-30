import { useState } from "react";
import { Upload, FileText, File, X, Sparkles, Download, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SummarizerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [showSummary, setShowSummary] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">
            AI PDF Summarizer
          </h1>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Upload any PDF or image and in &lt;30 seconds, get full, easy-to-read
            notes that actually help you understand faster and study smarter.
          </p>
        </div>

        {/* Upload Area */}
        {!showSummary ? (
          <div className="edtech-card">
            <div className="flex items-center justify-between mb-6">
              <Button variant="default" className="gradient-button">
                <Upload className="w-4 h-4 mr-2" />
                Upload
              </Button>
              <Select defaultValue="english">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Drop zone */}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-2xl p-12 text-center transition-colors ${
                file
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {file ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <File className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setFile(null)}
                    >
                      <X className="w-4 h-4 mr-1" />
                      Remove
                    </Button>
                    <Button
                      className="gradient-button"
                      onClick={() => setShowSummary(true)}
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Summarize
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-edtech-pink via-edtech-lavender to-edtech-cyan flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-6 h-6 rounded bg-green-400" />
                      <div className="w-6 h-6 rounded bg-blue-400" />
                      <div className="w-6 h-6 rounded bg-red-400" />
                      <div className="w-6 h-6 rounded bg-yellow-400" />
                    </div>
                  </div>
                  <p className="text-foreground font-medium mb-2">
                    Drag and drop your file here to get instant study notes.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Supported Formats: Images, PDF, Doc, Docs, PPT, PPTX; Max
                    size: 20MB.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Or, upload from Google Drive
                  </p>
                  <label>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                    <Button asChild className="gradient-button cursor-pointer">
                      <span>
                        <FileText className="w-4 h-4 mr-2" />
                        Select file
                      </span>
                    </Button>
                  </label>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="edtech-card animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Document Summary
                </h2>
                <p className="text-sm text-muted-foreground">
                  Generated in 12 seconds
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>

            <div className="prose prose-sm max-w-none">
              <h3>Key Points Summary</h3>
              <ul>
                <li>
                  <strong>Main Topic:</strong> Introduction to Number Systems
                  and their properties
                </li>
                <li>
                  <strong>Key Concepts:</strong> Real numbers, rational numbers,
                  irrational numbers, and their representations
                </li>
                <li>
                  <strong>Important Theorems:</strong> Euclid's Division Lemma,
                  Fundamental Theorem of Arithmetic
                </li>
              </ul>

              <h3>Detailed Summary</h3>
              <p>
                This document covers the foundational concepts of number systems
                in mathematics. It begins with an exploration of natural numbers
                and extends to the complete set of real numbers.
              </p>

              <h4>Section 1: Number Classification</h4>
              <p>
                Numbers are classified into various categories including natural
                numbers, whole numbers, integers, rational numbers, and
                irrational numbers. Each category has specific properties and
                applications.
              </p>

              <h4>Section 2: Properties of Real Numbers</h4>
              <p>
                Real numbers follow commutative, associative, and distributive
                properties. These properties are essential for algebraic
                manipulations and problem-solving.
              </p>

              <h4>Study Tips</h4>
              <ul>
                <li>Practice identifying number types from examples</li>
                <li>Memorize key theorems and their applications</li>
                <li>Solve previous year questions for better understanding</li>
              </ul>
            </div>

            <div className="mt-6 flex gap-3">
              <Button variant="outline" onClick={() => setShowSummary(false)}>
                Summarize Another
              </Button>
              <Button className="gradient-button">
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Notes
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
