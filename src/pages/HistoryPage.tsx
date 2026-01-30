import {
  Clock,
  MessageCircle,
  FileText,
  GraduationCap,
  ClipboardList,
  FileSearch,
  Grid3X3,
  Calendar,
  Award,
  LogIn,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const recentQueries = [
  {
    query: "Explain Newton's laws of motion",
    tool: "AI Gini",
    icon: MessageCircle,
    time: "2 hours ago",
  },
  {
    query: "Generate notes on Photosynthesis",
    tool: "AI Notes",
    icon: FileText,
    time: "5 hours ago",
  },
  {
    query: "Help me solve quadratic equations",
    tool: "AI Tutor",
    icon: GraduationCap,
    time: "Yesterday",
  },
  {
    query: "Practice MCQs on Indian History",
    tool: "AI Practice",
    icon: ClipboardList,
    time: "Yesterday",
  },
  {
    query: "Summarize Chapter 5 - Chemistry",
    tool: "Doc Summariser",
    icon: FileSearch,
    time: "2 days ago",
  },
];

const featuresExplored = [
  { name: "AI Gini", icon: MessageCircle, usageCount: 45, lastUsed: "Today" },
  { name: "AI Notes", icon: FileText, usageCount: 32, lastUsed: "Today" },
  { name: "AI Tutor", icon: GraduationCap, usageCount: 28, lastUsed: "Yesterday" },
  { name: "AI Practice", icon: ClipboardList, usageCount: 56, lastUsed: "Yesterday" },
  { name: "Doc Summariser", icon: FileSearch, usageCount: 12, lastUsed: "3 days ago" },
  { name: "More Tools", icon: Grid3X3, usageCount: 8, lastUsed: "1 week ago" },
];

const examHistory = [
  { subject: "Mathematics", marks: 85, total: 100, date: "Jan 15, 2026", grade: "A" },
  { subject: "Science", marks: 78, total: 100, date: "Jan 12, 2026", grade: "B+" },
  { subject: "English", marks: 92, total: 100, date: "Jan 10, 2026", grade: "A+" },
  { subject: "Social Studies", marks: 70, total: 100, date: "Jan 8, 2026", grade: "B" },
];

const loginHistory = [
  { date: "Jan 27, 2026", time: "10:30 AM", device: "Desktop", location: "Mumbai, India" },
  { date: "Jan 26, 2026", time: "3:45 PM", device: "Mobile", location: "Mumbai, India" },
  { date: "Jan 25, 2026", time: "9:15 AM", device: "Desktop", location: "Mumbai, India" },
  { date: "Jan 24, 2026", time: "7:00 PM", device: "Tablet", location: "Pune, India" },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
            <Clock className="w-6 h-6 text-primary" />
            History
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your learning journey and activity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Queries */}
          <div className="edtech-card">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              Recent Queries
            </h3>
            <div className="space-y-3">
              {recentQueries.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {item.query}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {item.tool}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Explored */}
          <div className="edtech-card">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Grid3X3 className="w-5 h-5 text-secondary" />
              Features Explored
            </h3>
            <div className="space-y-3">
              {featuresExplored.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <feature.icon className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {feature.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Last used: {feature.lastUsed}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-foreground">
                      {feature.usageCount}
                    </p>
                    <p className="text-xs text-muted-foreground">uses</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Last Exam Marks */}
          <div className="edtech-card">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-chart-4" />
              Last Exam Marks
            </h3>
            <div className="space-y-3">
              {examHistory.map((exam, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-foreground">
                        {exam.subject}
                      </p>
                      <Badge
                        variant={
                          exam.grade.startsWith("A")
                            ? "default"
                            : exam.grade.startsWith("B")
                            ? "secondary"
                            : "outline"
                        }
                        className="text-xs"
                      >
                        {exam.grade}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-3 h-3 text-chart-4" />
                        <span className="text-sm font-bold text-chart-4">
                          {exam.marks}/{exam.total}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exam.date}
                      </span>
                    </div>
                    <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-chart-4 transition-all"
                        style={{ width: `${(exam.marks / exam.total) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Login History */}
          <div className="edtech-card">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <LogIn className="w-5 h-5 text-chart-3" />
              Login History
            </h3>
            <div className="space-y-3">
              {loginHistory.map((login, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                >
                  <div className="p-2 rounded-lg bg-chart-3/10">
                    <CheckCircle className="w-4 h-4 text-chart-3" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-foreground">
                        {login.date}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {login.device}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-muted-foreground">
                        {login.time}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        📍 {login.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
