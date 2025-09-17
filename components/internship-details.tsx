import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin, Award, Users, Code, Target } from "lucide-react"

const internships = [
  {
    title: "Web Development Internship",
    company: "My Job Grow + Techfest IIT Bombay",
    duration: "OCT - DEC 2024",
    location: "Remote",
    type: "Advanced Full Stack",
    status: "Completed with Excellence",
    description:
      "Advanced full-stack development internship in collaboration with Techfest IIT Bombay. Focused on building complex web applications with modern technologies and achieved exceptional performance recognition.",
    responsibilities: [
      "Developed full-stack web applications using MERN stack",
      "Implemented responsive UI/UX designs with modern frameworks",
      "Collaborated with cross-functional teams on project delivery",
      "Participated in code reviews and technical discussions",
      "Delivered projects with exceptional quality and performance",
    ],
    achievements: [
      "Exceptional Performance Recognition",
      "Successfully completed all assigned projects",
      "Received positive feedback from mentors",
      "Demonstrated strong problem-solving skills",
      "Awarded Microsoft Certified: Azure Fundamentals (Score: 900/1000) listed with internship achievements",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "Git", "Agile"],
    skills: ["Full Stack Development", "Team Collaboration", "Project Management", "Problem Solving"],
  },
  {
    title: "Web Development Internship",
    company: "VGT (under MSME, India)",
    duration: "January - February 2025",
    location: "India",
    type: "Practical Training",
    status: "Successfully Completed",
    description:
      "3-week intensive web development internship under MSME, India. Gained practical exposure to full web stack development with hands-on experience in industry-standard practices and methodologies.",
    responsibilities: [
      "Learned full-stack web development fundamentals",
      "Built responsive web applications from scratch",
      "Implemented database design and management",
      "Practiced version control and deployment processes",
      "Participated in daily standups and project planning",
    ],
    achievements: [
      "Completed 3-week intensive training program",
      "Built multiple web applications",
      "Gained industry-standard development experience",
      "Received mentorship from experienced developers",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Database Management", "Git"],
    skills: ["Web Development", "Database Design", "Version Control", "Professional Communication"],
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    company: "Microsoft (Certiport)",
    duration: "June 2025",
    location: "Online",
    type: "Certification",
    status: "Score: 900/1000",
    description: "Microsoft Azure Fundamentals certification (June 2025). Verification ID: Cx35-Dw8X.",
    responsibilities: ["Cloud fundamentals mastery", "Core Azure services understanding"],
    achievements: ["Score: 900/1000", "Verified Credential: Cx35-Dw8X"],
    technologies: ["Azure"],
    skills: ["Cloud Concepts", "Azure Services"],
  },
]

export function InternshipDetails() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Internship Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detailed overview of my professional internship experiences, showcasing practical skills and industry
            exposure.
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {internships.map((internship, index) => (
            <Card
              key={internship.title}
              className="border-border hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <Building className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="font-serif text-2xl text-foreground">{internship.title}</CardTitle>
                        <p className="text-primary font-semibold">{internship.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{internship.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Badge className="bg-accent text-accent-foreground w-fit">{internship.type}</Badge>
                    <Badge variant="outline" className="text-primary border-primary w-fit">
                      {internship.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8">
                <p className="text-muted-foreground leading-relaxed text-lg">{internship.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-serif font-semibold text-foreground mb-4 flex items-center space-x-2">
                        <Code className="h-5 w-5 text-primary" />
                        <span>Key Responsibilities</span>
                      </h4>
                      <div className="space-y-3">
                        {internship.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif font-semibold text-foreground mb-4 flex items-center space-x-2">
                        <Award className="h-5 w-5 text-accent" />
                        <span>Key Achievements</span>
                      </h4>
                      <div className="space-y-3">
                        {internship.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-serif font-semibold text-foreground mb-4 flex items-center space-x-2">
                        <Target className="h-5 w-5 text-primary" />
                        <span>Technologies Used</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif font-semibold text-foreground mb-4 flex items-center space-x-2">
                        <Users className="h-5 w-5 text-accent" />
                        <span>Skills Developed</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-sm border-accent text-accent">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
