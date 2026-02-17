import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Users, Zap } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Best Excellence Award",
    description: "First Year Academic Honors at Sage University",
    year: "2024",
    category: "Academic",
  },
  {
    icon: Star,
    title: "33+ Technical Certifications",
    description: "Across Full Stack Development, Cloud Computing, AI/ML, and Cybersecurity",
    year: "2024-2025",
    category: "Professional",
  },
  {
    icon: Users,
    title: "Community Contributions",
    description: "3 Appreciation Awards from DevTown for community support and contributions",
    year: "2024",
    category: "Community",
  },
  {
    icon: Zap,
    title: "Hackathon Participation",
    description: "Active participant in various tech competitions and coding challenges",
    year: "2024-2025",
    category: "Competition",
  },
]

export function Achievements() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-serif font-bold text-foreground mb-4">Achievements & Recognition</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognition that reflect my commitment to excellence and continuous growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card
                key={achievement.title}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="font-serif text-lg text-foreground">{achievement.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {achievement.category}
                        </Badge>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{achievement.year}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
