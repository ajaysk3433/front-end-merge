import { useState } from "react";
import { User, Mail, Phone, Calendar, School, GraduationCap, ChevronRight, Settings, Shield, FileText, Flame, Target, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
export default function ProfilePage() {
  const [profileCompletion] = useState(40);
  return <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold text-foreground">
            Profile
          </h1>
        </div>

        {/* Profile Completion Banner */}
        <div className="edtech-card mb-6 gradient-hero">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center font-bold text-primary text-lg">
                {profileCompletion}%
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Complete your profile
                </h3>
                <p className="text-sm text-muted-foreground">
              </p>
              </div>
            </div>
            <Progress value={profileCompletion} className="w-32 h-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - User Info */}
          <div className="space-y-6">
            {/* Avatar & Name */}
            <div className="edtech-card text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-3xl font-bold">
                G
              </div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Grv
              </h2>
              <p className="text-sm text-muted-foreground">
                Joined November 2025
              </p>

              <div className="mt-4 p-3 rounded-lg bg-accent/50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Complete your profile
                  </span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
              </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="edtech-card">
              <h3 className="font-semibold text-foreground mb-4">Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <Target className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <p className="text-lg font-bold text-foreground">0%</p>
                  <p className="text-xs text-muted-foreground">Test Overall%</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <Flame className="w-5 h-5 mx-auto mb-1 text-orange-500" />
                  <p className="text-lg font-bold text-foreground">1 Days</p>
                  <p className="text-xs text-muted-foreground">Login Days</p>
                </div>
              </div>
            </div>

            {/* Week's Activity */}
            <div className="edtech-card">
              <h3 className="font-semibold text-foreground mb-4">
                Week's Activity
              </h3>
              <div className="flex justify-center gap-1">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => <div key={i} className={`w-8 h-8 rounded flex items-center justify-center text-xs ${i === 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    {day}
                  </div>)}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3">
                Overall: 1 day active
              </p>
            </div>
          </div>

          {/* Right Column - Account Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="edtech-card">
              <h3 className="font-semibold text-foreground mb-6">
                Account Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Details */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Personal Details
                  </h4>

                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Mobile
                    </label>
                    <Input defaultValue="+91 9762158738" />
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">
                      <User className="w-4 h-4 inline mr-2" />
                      Name
                    </label>
                    <Input defaultValue="Grv" />
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </label>
                    <div className="flex gap-2">
                      <Input placeholder="Add email" className="flex-1" />
                      <Button variant="outline" size="sm">
                        Add now
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Date of Birth
                    </label>
                    <div className="flex gap-2">
                      <Input placeholder="DD/MM/YYYY" className="flex-1" />
                      <Button variant="outline" size="sm">
                        Add now
                      </Button>
                    </div>
                  </div>
                </div>

                {/* School/College Details */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    School/College details
                  </h4>

                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">
                      <School className="w-4 h-4 inline mr-2" />
                      Education Curriculum
                    </label>
                    <Select defaultValue="cbse">
                      <SelectTrigger>
                        <SelectValue placeholder="Select curriculum" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cbse">CBSE</SelectItem>
                        <SelectItem value="icse">ICSE</SelectItem>
                        <SelectItem value="state">State Board</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">
                      <GraduationCap className="w-4 h-4 inline mr-2" />
                      Select your grade
                    </label>
                    <Select defaultValue="10">
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
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
                    <label className="text-sm text-muted-foreground mb-1.5 block">
                      <School className="w-4 h-4 inline mr-2" />
                      School/College Name
                    </label>
                    <div className="flex gap-2">
                      <Input placeholder="Enter school name" className="flex-1" />
                      <Button variant="outline" size="sm">
                        Add now
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">
                      <Languages className="w-4 h-4 inline mr-2" />
                      Preferred Language
                    </label>
                    <Select defaultValue="en">
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="hi">Hindi</SelectItem>
                        <SelectItem value="bn">Bengali</SelectItem>
                        <SelectItem value="ta">Tamil</SelectItem>
                        <SelectItem value="te">Telugu</SelectItem>
                        <SelectItem value="mr">Marathi</SelectItem>
                        <SelectItem value="gu">Gujarati</SelectItem>
                        <SelectItem value="kn">Kannada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              

              <button className="edtech-card flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">Preferences</span>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Footer Links */}
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary flex items-center gap-1">
                <Shield className="w-4 h-4" />
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary flex items-center gap-1">
                <FileText className="w-4 h-4" />
                Terms & Conditions
              </a>
              <span>•</span>
              <span>Version 9.8.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>;
}