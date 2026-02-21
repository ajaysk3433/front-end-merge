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
  // -----------------------------
  // STATE (NO UI CHANGE)
  // -----------------------------
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<string>(""); // backend summary
  const [loading, setLoading] = useState(false);      // API loading
  const [error, setError] = useState<string>("");     // backend error
  const [showSummary, setShowSummary] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null); // AI session

  // -----------------------------
  // DRAG & DROP (UNCHANGED)
  // -----------------------------
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  // -----------------------------
  // 🔥 BACKEND INTEGRATION
  // -----------------------------
  const handleSummarize = async () => {
    if (!file) return;

    setLoading(true);
    setError("");

    try {
      // FormData is REQUIRED for file upload
      const formData = new FormData();
      formData.append("file", file); // multer expects "file"
      formData.append("ai_feature", "AI_SUMMARIZER");

      // continue same AI session if exists
      if (conversationId) {
        formData.append("conversation_id", conversationId);
      }

      // backend API call
      const res = await fetch("http://localhost:5000/api/summarize", {
        method: "POST",
        body: formData,
      });


      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Summarization failed");
      }

      // save backend response
      setSummary(data.summary);
      setConversationId(data.conversation_id);

      // switch UI to summary view
      setShowSummary(true);
    } catch (err: Error | unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
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
                      onClick={handleSummarize}   // 🔥 backend call
                      disabled={loading}
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      {loading ? "Summarizing..." : "Summarize"}
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

            {/* backend error */}
            {error && (
              <p className="text-red-500 text-sm mt-4 text-center">
                {error}
              </p>
            )}
          </div>
        ) : (
          <div className="edtech-card animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Document Summary
                </h2>
                <p className="text-sm text-muted-foreground">
                  Generated just now
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

            {/* 🔥 REAL AI SUMMARY */}
            <div className="prose prose-sm max-w-none whitespace-pre-wrap">
              {summary}
            </div>

            <div className="mt-6 flex gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setShowSummary(false);
                  setFile(null);
                  setSummary("");
                  setConversationId(null); // new session
                }}
              >
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
