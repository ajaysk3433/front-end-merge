import {
  BarChart3,
  Clock,
  HelpCircle,
  ClipboardList,
  TrendingUp,
} from "lucide-react";
import { StatsCard } from "@/components/ui/stats-card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const progressData = [
  { month: "January", math: 65, science: 45, english: 55 },
  { month: "February", math: 72, science: 58, english: 62 },
  { month: "March", math: 80, science: 65, english: 70 },
  { month: "April", math: 85, science: 75, english: 78 },
];

const subjectMastery = [
  { name: "Math", value: 18, color: "hsl(262, 83%, 58%)" },
  { name: "Science", value: 30, color: "hsl(187, 96%, 42%)" },
  { name: "English", value: 20, color: "hsl(330, 80%, 65%)" },
  { name: "Other", value: 32, color: "hsl(160, 60%, 50%)" },
];

const latestTests = [
  { subject: "Math", score: 85, color: "bg-primary" },
  { subject: "Science", score: 32, color: "bg-secondary" },
  { subject: "English", score: 20, color: "bg-chart-3" },
];

export default function PerformancePage() {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">
              Student Performance
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome, Student Name • Date: January 18, 2026
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="Overall Score"
            value="85%"
            icon={BarChart3}
            iconBg="bg-primary/10"
            iconColor="text-primary"
          />
          <StatsCard
            title="Time Spent"
            value="120h 30m"
            icon={Clock}
            iconBg="bg-secondary/10"
            iconColor="text-secondary"
          />
          <StatsCard
            title="Questions"
            value="450"
            icon={HelpCircle}
            iconBg="bg-chart-3/10"
            iconColor="text-chart-3"
          />
          <StatsCard
            title="Tests"
            value="25"
            icon={ClipboardList}
            iconBg="bg-chart-4/10"
            iconColor="text-chart-4"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Progress Chart */}
          <div className="edtech-card">
            <h3 className="font-semibold text-foreground mb-4">My Progress</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  />
                  <YAxis
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="math" fill="hsl(187, 96%, 42%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="science" fill="hsl(160, 60%, 50%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="english" fill="hsl(262, 83%, 58%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Subject Mastery Pie */}
          <div className="edtech-card">
            <h3 className="font-semibold text-foreground mb-4">
              Subject-wise Mastery
            </h3>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={subjectMastery}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={3}
                    dataKey="value"
                    label={({ name, value }) => `${value}%`}
                  >
                    {subjectMastery.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-2">
              {subjectMastery.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Latest Tests */}
          <div className="edtech-card">
            <h3 className="font-semibold text-foreground mb-4">Latest Tests</h3>
            <div className="space-y-4">
              {latestTests.map((test) => (
                <div key={test.subject} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">
                        {test.subject}
                      </span>
                      <span
                        className={`text-sm font-bold ${
                          test.score >= 70
                            ? "text-chart-4"
                            : test.score >= 40
                            ? "text-chart-5"
                            : "text-destructive"
                        }`}
                      >
                        {test.score}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${test.color} transition-all`}
                        style={{ width: `${test.score}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time Spent */}
          <div className="edtech-card">
            <h3 className="font-semibold text-foreground mb-4">
              Time Spent per Week
            </h3>
            <div className="flex items-center justify-center h-40">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary flex items-center justify-center mb-3">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">12 hours</p>
                <p className="text-sm text-muted-foreground">This Week</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-chart-4">
              <TrendingUp className="w-4 h-4" />
              <span>+15% from last week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
