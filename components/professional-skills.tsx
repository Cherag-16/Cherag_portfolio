import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Users, MessageSquare, Target, Clock, Lightbulb, Zap } from "lucide-react"

const professionalSkills = [
  {
    category: "Communication",
    icon: MessageSquare,
    skills: [
      { name: "Technical Communication", level: 85 },
      { name: "Team Collaboration", level: 95 },
      { name: "Client Interaction", level: 80 },
      { name: "Presentation Skills", level: 90 },
    ],
  },
  {
    category: "Leadership",
    icon: Users,
    skills: [
      { name: "Project Management", level: 85 },
      { name: "Team Coordination", level: 85 },
      { name: "Mentoring", level: 90 },
      { name: "Decision Making", level: 80 },
    ],
  },
  {
    category: "Problem Solving",
    icon: Lightbulb,
    skills: [
      { name: "Analytical Thinking", level: 90 },
      { name: "Creative Solutions", level: 85 },
      { name: "Debugging", level: 88 },
      { name: "System Design", level: 75 },
    ],
  },
  {
    category: "Productivity",
    icon: Zap,
    skills: [
      { name: "Time Management", level: 85 },
      { name: "Agile Methodology", level: 80 },
      { name: "Task Prioritization", level: 88 },
      { name: "Continuous Learning", level: 95 },
    ],
  },
]

const workValues = [
  {
    title: "Continuous Learning",
    description: "Always eager to learn new technologies and improve existing skills",
    icon: Target,
  },
  {
    title: "Quality Focus",
    description: "Committed to delivering high-quality code and exceptional user experiences",
    icon: Zap,
  },
  {
    title: "Team Player",
    description: "Collaborative approach to problem-solving and knowledge sharing",
    icon: Users,
  },
  {
    title: "Time Management",
    description: "Efficient project delivery while maintaining code quality and standards",
    icon: Clock,
  },
]

export function ProfessionalSkills() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Professional Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soft skills and professional competencies developed through internships, projects, and continuous learning.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalSkills.map((category) => {
              const Icon = category.icon
              return (
                <Card
                  key={category.category}
                  className="border-border hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm"
                >
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-foreground flex items-center space-x-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span>{category.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Work Values */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-8">Work Values & Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workValues.map((value) => {
                const Icon = value.icon
                return (
                  <Card
                    key={value.title}
                    className="text-center border-border hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm group hover:scale-105 transition-transform duration-300"
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-serif font-semibold text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Career Goals */}
          <Card className="border-border bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm">
            <CardContent className="p-8 text-center space-y-6">
              <h3 className="text-2xl font-serif font-bold text-foreground">Career Goals & Aspirations</h3>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm actively seeking <span className="font-semibold text-primary">internship opportunities</span> and{" "}
                  <span className="font-semibold text-accent">freelancing projects</span> where I can contribute to
                  innovative solutions while continuing to grow as a full-stack developer.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge className="bg-primary text-primary-foreground">Full Stack Development</Badge>
                  <Badge className="bg-accent text-accent-foreground">MERN Stack</Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    Cloud Technologies
                  </Badge>
                  <Badge variant="outline" className="border-accent text-accent">
                    AI/ML Integration
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
