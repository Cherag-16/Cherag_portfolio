"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const skillCategories = {
  frontend: {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 90, experience: "2+ years" },
      { name: "JavaScript/TypeScript", level: 85, experience: "2+ years" },
      { name: "HTML5/CSS3", level: 95, experience: "3+ years" },
      { name: "Tailwind CSS", level: 88, experience: "1+ year" },
      { name: "Next.js", level: 80, experience: "1+ year" },
      { name: "Redux", level: 75, experience: "1+ year" },
    ],
  },
  backend: {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85, experience: "1+ years" },
      { name: "Express.js", level: 80, experience: "1+ years" },
      { name: "MongoDB", level: 75, experience: "1+ year" },
      { name: "RESTful APIs", level: 85, experience: "2+ years" },
      { name: "Authentication", level: 80, experience: "1+ year" },
      { name: "Database Design", level: 70, experience: "1+ year" },
    ],
  },
  tools: {
    title: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 90, experience: "2+ years" },
      { name: "VS Code", level: 95, experience: "3+ years" },
     // { name: "Postman", level: 85, experience: "1+ year" },
      { name: "Figma", level: 70, experience: "1+ year" },
     // { name: "Docker", level: 60, experience: "6+ months" },
      { name: "AWS", level: 65, experience: "6+ months" },
    ],
  },
  cloud: {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS Services", level: 70, experience: "1+ year" },
      { name: "Microsoft Azure", level: 75, experience: "1+ year" },
      { name: "Netlify", level: 85, experience: "1+ year" },
      { name: "Vercel", level: 80, experience: "1+ year" },
      { name: "CI/CD", level: 60, experience: "6+ months" },
     // { name: "Linux", level: 65, experience: "1+ year" },
    ],
  },
}

export function TechnicalSkills() {
  const [activeTab, setActiveTab] = useState("frontend")

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficiency levels and experience across different technology stacks and development tools.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
            </TabsList>

            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <Card className="border-border bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl text-foreground">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <div className="flex items-center space-x-2">
                              <Badge variant="secondary" className="text-xs">
                                {skill.experience}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
