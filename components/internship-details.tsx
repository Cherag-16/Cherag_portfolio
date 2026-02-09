import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin, Award, Users, Code, Target } from "lucide-react"
import { id } from "date-fns/locale"

const internships = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    company: "Microsoft",
    duration: "June 2025",
    location: "Online",
    type: "Internship / Training Experience",
    status: "Score: 900/1000",
    description: "Completed Microsoft’s Azure Fundamentals (AZ-900) training and certification program focused on cloud computing concepts, Azure architecture, and cloud governance. Combined theoretical learning with hands-on practical exercises in the Azure cloud environment.",
    responsibilities: [
      "Gained practical understanding of cloud models, Azure services, and deployment models.",
      "Worked through hands-on Azure labs to configure virtual machines, storage, and identity management.",
      "Studied and implemented key principles of cloud security, governance, and cost management.",
      "Passed the official Microsoft certification exam with a score of 900 / 1000."
    ],
    achievements: [
      "Earned Microsoft Certified: Azure Fundamentals (AZ-900) credential",
      "Score: 900/1000, Verified Credential: Cx35-Dw8X",
    ],
    technologies: [
      "Microsoft Azure Portal",
      "Azure Resource Manager (ARM)",
      "Azure Virtual Machines (VMs)",
      "Azure Storage (Blob, Table, File, Queue)",
      "Azure Networking (VNet, NSG, Load Balancer)",
      "Azure Active Directory (AAD)",
      "Azure Cost Management & Governance Tools",
    ],
    skills: [
      "Cloud Computing Fundamentals",
      "Azure Service Management",
      "Virtualization & Resource Deployment",
      "Identity & Access Management",
      "Cloud Security & Governance",
      "Cost Optimization",
      "Cloud Architecture Design Principles",
      "Problem Solving & Technical Analysis",
    ],
  },
  {
    title: "Website Designing and Website Development Internship",
    company: "Vishal Global Tech",
    duration: "January - February 2025",
    location: "Greater Noida, India",
    type: "Internship",
    status: "Successfully Completed",
    description:
      "Completed a 3-week internship focused on full-stack web development, contributing to the design, development, and deployment of a live web application. Gained hands-on experience in real-world development environments and applied best practices of the Software Development Life Cycle (SDLC).",
    responsibilities: [
      "Designed and developed responsive web pages using HTML5, CSS3, and JavaScript.",
      "Integrated dynamic content and server communication using Web APIs.",
      "Managed and queried databases using SQL Server.",
      "Followed all phases of the SDLC — including planning, requirement analysis, design, coding, testing, deployment, and maintenance.",
      "Collaborated with the technical team to enhance website functionality and optimize user experience.",],
    achievements: [
      "Successfully contributed to the live project indelhincr.com",
      "Improved website responsiveness and performance by implementing optimized CSS and JavaScript techniques.",
      "Gained practical exposure to real-time project workflows and deployment processes.",
      "Gained industry-standard development experience",
      "Received mentorship from experienced developers",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Web APIs", "SQL Server", "Git"],
    skills: ["Web Development", "UI/UX Design", "Database Management", "SDLC", "Problem Solving", "Code Optimization", "Team Collaboration"],
    projects: [
      {
        id: 1,
        name: "indelhincr",
        description:
          "Contributed to the live website indelhincr.com by implementing responsive layouts, optimizing asset delivery, and improving cross-browser compatibility. Worked on frontend enhancements and collaborated on deployment configurations.",
        link: "https://www.indelhincr.com/",
      },
    ],
  },
  {
    title: "Web Development Internship",
    company: "My Job Grow (in collaboration with IIT Bombay)",
    duration: "OCT - DEC 2024",
    location: "Hybrid (Online + Live Projects)",
    type: " MERN Full Stack",
    status: "Completed with Excellence",
    description:
      "Advanced full-stack development internship in collaboration with Techfest IIT Bombay. Focused on building complex web applications with modern technologies and achieved exceptional performance recognition.",
    responsibilities: [
      "Developed and maintained responsive, user-friendly web applications using MERN stack",
      "Implemented responsive UI/UX designs with modern frameworks",
      "Collaborated with cross-functional teams on project delivery",
      "Participated in code reviews and technical discussions",
      "Delivered projects with exceptional quality and performance",
      "Deployed web applications on Netlify and Render, managing environment configurations and version control via GitHub.",
    ],
    achievements: [
      "Earned “Outstanding Achievement” recognition for exceptional project performance and dedication.",
      "Successfully completed all assigned projects with positive feedback from mentors",
      "Built and deployed two production-ready web projects:",
      "Demonstrated strong problem-solving skills",
      "Received official Course & Internship Completion Certificates from My Job Grow",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "Tailwind CSS", "Git", "Agile", "HTML5", "CSS3"],
    skills: ["MERN Full Stack Development", "Analytical Thinking & Problem Solving", "Project Management", "Responsive UI Design", "Debugging and Continuous Learning Mindset"],
    projects: [
      {
        id: 1,
        name: "trackmyexpensess",
        description:
          "A comprehensive expense tracking web application with user authentication, real-time data visualization, and budget management features. ",
        link: "https://trackmyexpensess.netlify.app/",
      },
      {
        id: 2,
        name: "chatbox-frontend",
        description:
          "A chat application with user authentication, real-time messaging, and group chat features.",
        link: "https://chatbox-frontend.netlify.app/",
      },]
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
                      {/* Projects (if any) */}
                      {internship.projects && internship.projects.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-serif font-semibold text-foreground mb-3">Projects :</h4>
                          <div className="space-y-3">
                            {internship.projects.map((proj, pidx) => (
                              <div key={pidx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <div>
                                  <div className="font-medium text-foreground">
                                    {proj.link ? (
                                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                                        {proj.name}
                                      </a>
                                    ) : (
                                      proj.name
                                    )}
                                  </div>
                                  <div className="text-sm text-muted-foreground">{proj.description}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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
