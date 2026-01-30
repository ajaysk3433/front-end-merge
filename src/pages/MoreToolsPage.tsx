import {
  Mic,
  FileEdit,
  FileText,
  Globe,
  Leaf,
  Languages,
  Calculator,
  BookOpen,
  Brain,
} from "lucide-react";
import { ToolCard } from "@/components/ui/tool-card";

const tools = [
  {
    title: "Spoken English AI",
    description:
      "Improve your English speaking skills with AI-powered conversations, pronunciation feedback, and vocabulary building exercises.",
    icon: Mic,
    href: "/tools/spoken-english",
    iconBg: "bg-amber-100",
  },
  {
    title: "Letter Writing AI",
    description:
      "Generate professional and personal letters effortlessly. Choose from various templates and get help with structure and tone.",
    icon: FileEdit,
    href: "/tools/letter-writing",
    iconBg: "bg-rose-100",
  },
  {
    title: "Notice Writing AI",
    description:
      "Create clear and concise notices for any occasion. Our AI ensures your message is effective and properly formatted.",
    icon: FileText,
    href: "/tools/notice-writing",
    iconBg: "bg-orange-100",
  },
  {
    title: "Atlas AI",
    description:
      "Explore the world with our interactive AI Atlas. Get detailed information on geography, countries, and cultures.",
    icon: Globe,
    href: "/tools/atlas",
    iconBg: "bg-blue-100",
  },
  {
    title: "Nature AI",
    description:
      "Identify plants and animals, learn about ecosystems, and understand the natural world with our comprehensive Nature AI.",
    icon: Leaf,
    href: "/tools/nature",
    iconBg: "bg-emerald-100",
  },
  {
    title: "Translation AI",
    description:
      "Translate text between multiple languages with high accuracy. Perfect for language learning and understanding foreign content.",
    icon: Languages,
    href: "/tools/translation",
    iconBg: "bg-violet-100",
  },
  {
    title: "Math Solver",
    description:
      "Solve complex mathematical problems step by step. From algebra to calculus, get detailed solutions and explanations.",
    icon: Calculator,
    href: "/tools/math-solver",
    iconBg: "bg-cyan-100",
  },
  {
    title: "Essay Writer",
    description:
      "Get help with essay writing, including structure, arguments, and citations. Perfect for academic writing.",
    icon: BookOpen,
    href: "/tools/essay-writer",
    iconBg: "bg-pink-100",
  },
  {
    title: "Memory Games",
    description:
      "Boost your memory and cognitive skills with AI-powered brain training games and exercises.",
    icon: Brain,
    href: "/tools/memory-games",
    iconBg: "bg-purple-100",
  },
];

export default function MoreToolsPage() {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold text-foreground">
            More Tools
          </h1>
          <p className="text-muted-foreground mt-1">
            Explore additional AI-powered learning tools
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.title}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              href={tool.href}
              iconBg={tool.iconBg}
            />
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 edtech-card text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Brain className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            More Tools Coming Soon!
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            We're constantly adding new AI-powered tools to help you learn
            better. Stay tuned for updates!
          </p>
        </div>
      </div>
    </div>
  );
}
