import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const techStacks = [
  {
    category: "Frontend",
    description: "Modern UI/UX development with responsive design",
    technologies: [
      { name: "React.js", level: "Advanced", color: "bg-blue-500" },
      { name: "JavaScript/TypeScript", level: "Advanced", color: "bg-yellow-500" },
      { name: "HTML5/CSS3", level: "Expert", color: "bg-orange-500" },
      { name: "Tailwind CSS", level: "Advanced", color: "bg-cyan-500" },
      { name: "Next.js", level: "Intermediate", color: "bg-gray-800" },
      { name: "Redux", level: "Intermediate", color: "bg-purple-500" },
    ],
  },
  {
    category: "Backend",
    description: "Server-side development and API design",
    technologies: [
      { name: "Node.js", level: "Advanced", color: "bg-green-500" },
      { name: "Express.js", level: "Advanced", color: "bg-gray-600" },
      { name: "MongoDB", level: "Intermediate", color: "bg-green-600" },
      { name: "RESTful APIs", level: "Advanced", color: "bg-blue-600" },
      { name: "JWT Authentication", level: "Intermediate", color: "bg-red-500" },
      { name: "Database Design", level: "Intermediate", color: "bg-indigo-500" },
    ],
  },
  {
    category: "Tools & DevOps",
    description: "Development tools and deployment platforms",
    technologies: [
      { name: "Git/GitHub", level: "Advanced", color: "bg-gray-800" },
      { name: "VS Code", level: "Expert", color: "bg-blue-600" },
      { name: "Netlify", level: "Advanced", color: "bg-teal-500" },
      { name: "Vercel", level: "Advanced", color: "bg-black" },
      // { name: "Postman", level: "Intermediate", color: "bg-orange-600" },
      // { name: "Docker", level: "Beginner", color: "bg-blue-400" },
    ],
  },
  {
    category: "Cloud & Services",
    description: "Cloud platforms and third-party integrations",
    technologies: [
      { name: "AWS", level: "Intermediate", color: "bg-yellow-600" },
      { name: "Microsoft Azure", level: "Intermediate", color: "bg-blue-700" },
      { name: "Firebase", level: "Beginner", color: "bg-yellow-500" },
      { name: "API Integration", level: "Advanced", color: "bg-green-500" },
      { name: "Third-party Services", level: "Intermediate", color: "bg-purple-600" },
    ],
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-green-500 text-white"
    case "Advanced":
      return "bg-blue-500 text-white"
    case "Intermediate":
      return "bg-yellow-500 text-black"
    case "Beginner":
      return "bg-gray-500 text-white"
    default:
      return "bg-gray-400 text-white"
  }
}

export function TechStack() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Technology Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life, from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {techStacks.map((stack, index) => (
            <Card
              key={stack.category}
              className="border-border hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="font-serif text-xl text-foreground">{stack.category}</CardTitle>
                <p className="text-sm text-muted-foreground">{stack.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {stack.technologies.map((tech) => (
                    <div key={tech.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${tech.color}`} />
                        <span className="font-medium text-foreground">{tech.name}</span>
                      </div>
                      <Badge className={getLevelColor(tech.level)} variant="secondary">
                        {tech.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-6 rounded-lg bg-card border border-border">
            <div className="text-center">
              <div className="text-2xl font-serif font-bold text-primary">MERN</div>
              <div className="text-sm text-muted-foreground">Primary Stack</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-serif font-bold text-accent">Full Stack</div>
              <div className="text-sm text-muted-foreground">Development</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-serif font-bold text-primary">Cloud Ready</div>
              <div className="text-sm text-muted-foreground">Deployment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
