import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

export function Education() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning journey in computer science and software engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-serif text-xl text-foreground">
                      B.Tech in Computer Engineering (Software Engineering)
                    </CardTitle>
                    <p className="text-primary font-medium">Sage University, Indore</p>
                  </div>
                </div>
                <Badge variant="secondary" className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>2023 - 2027</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="font-medium text-foreground">Academic Performance</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Current CGPA</span>
                      <span className="font-semibold text-primary">8.20</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Class Rank</span>
                      <span className="font-semibold text-accent">Top 10%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">Achievements</span>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-primary border-primary">
                      Best Excellence Award - First Year Academic Honors
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif font-semibold text-foreground">Key Coursework</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Object-Oriented Programming",
                    "Database Management Systems",
                    "Software Engineering",
                    "Web Technologies",
                    "Computer Networks",
                    "Operating Systems",
                    "Machine Learning",
                    "Cloud Computing",
                  ].map((course) => (
                    <Badge key={course} variant="secondary" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
