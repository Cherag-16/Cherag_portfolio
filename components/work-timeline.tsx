import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Award } from "lucide-react"

const timelineEvents = [
  {
    year: "2024",
    title: "Web Development Internship",
    company: "My Job Grow + Techfest IIT Bombay",
    location: "Remote",
    duration: "OCT - DEC 2024",
    type: "Internship",
    description:
      "Advanced full-stack development internship with exceptional performance recognition. Worked on complex web applications using modern technologies and best practices.",
    achievements: [
      "Exceptional Performance Recognition",
      "Advanced Project Development",
      "Modern Web Technologies",
      "Team Collaboration",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
  },
  {
    year: "2025",
    title: "Web Development Internship",
    company: "VGT (under MSME, India)",
    location: "India",
    duration: "January - February 2025",
    type: "Internship",
    description:
      "3-week intensive web development internship providing practical exposure to full web stack development. Gained hands-on experience with industry-standard practices and methodologies.",
    achievements: [
      "Full Stack Development Exposure",
      "Industry Standard Practices",
      "Practical Project Experience",
      "Professional Mentorship",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Database Management"],
  },
  {
    year: "2024",
    title: "Web Development Course",
    company: "My Job Grow",
    location: "Online",
    duration: "December 2024",
    type: "Training",
    description:
      "Comprehensive 15-hour hands-on web development course covering modern development practices, frameworks, and deployment strategies.",
    achievements: [
      "15-Hour Intensive Training",
      "Hands-on Project Development",
      "Modern Development Practices",
      "Deployment Strategies",
    ],
    technologies: ["React", "JavaScript", "CSS3", "Git", "Deployment"],
  },
  {
    year: "2024",
    title: "Multiple Certification Programs",
    company: "Various Organizations",
    location: "Online/Hybrid",
    duration: "Throughout 2024",
    type: "Certification",
    description:
      "Completed multiple certification programs across Full Stack Development, Cloud Computing, AI/ML, and Cybersecurity domains.",
    achievements: [
      "28+ Technical Certifications",
      "Multi-domain Expertise",
      "Continuous Learning",
      "Industry Recognition",
    ],
    technologies: ["AWS", "Azure", "React", "Node.js", "AI/ML", "Cybersecurity"],
  },
]

export function WorkTimeline() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Professional Timeline</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A chronological overview of my professional development, internships, and continuous learning journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={`${event.year}-${event.title}`} className="relative flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-serif font-bold text-sm">
                    {event.year}
                  </div>

                  {/* Content */}
                  <Card className="flex-1 border-border hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="font-serif text-xl text-foreground">{event.title}</CardTitle>
                          <div className="flex items-center space-x-2 mt-2">
                            <Building className="h-4 w-4 text-primary" />
                            <span className="text-primary font-medium">{event.company}</span>
                          </div>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{event.duration}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-primary border-primary">
                          {event.type}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-foreground mb-2 flex items-center space-x-2">
                            <Award className="h-4 w-4 text-accent" />
                            <span>Key Achievements</span>
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {event.achievements.map((achievement) => (
                              <div key={achievement} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span className="text-sm text-muted-foreground">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-foreground mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
