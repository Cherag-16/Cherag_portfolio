import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Clock, MessageSquare } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "cheragsaxena16@gmail.com",
    description: "Best way to reach me",
    action: "mailto:cheragsaxena16@gmail.com",
    color: "text-primary",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91-8871582449",
    description: "Available during business hours",
    action: "tel:+918871582449",
    color: "text-accent",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Indore, India",
    description: "Open to remote work",
    action: null,
    color: "text-primary",
  },
]

const socialLinks = [
  {
    icon: Github,
    title: "GitHub",
    username: "@cherag-16",
    url: "https://github.com/cherag-16",
    color: "hover:text-gray-800 dark:hover:text-gray-200",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    username: "Cherag Saxena",
    url: "https://www.linkedin.com/in/cherag-saxena-36415a2b8/",
    color: "hover:text-blue-600",
  },
]

const availability = [
  {
    icon: Clock,
    title: "Response Time",
    description: "Usually within 24 hours",
  },
  {
    icon: MessageSquare,
    title: "Availability",
    description: "Open for freelance & internships",
  },
]

export function ContactInfo() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 max-w-2xl mx-auto lg:mx-0">
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply connect
              with fellow developers. Here are the best ways to reach me.
            </p>
          </div>

          {/* Combined Contact Card */}
          <Card className="border-border hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-semibold text-foreground">Contact</h3>
                  <p className="text-muted-foreground mb-4">The best ways to reach me are listed below.</p>

                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-foreground font-medium">cheragsaxena16@gmail.com</p>
                        <p className="text-sm text-muted-foreground">Best way to reach me</p>
                      </div>
                      <div className="flex items-center">
                        <Button variant="outline" size="sm" asChild>
                          <a href="mailto:cheragsaxena16@gmail.com" target="_blank" rel="noopener noreferrer">
                            Email
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="text-foreground font-medium">+91-8871582449</p>
                        <p className="text-sm text-muted-foreground">Available during business hours</p>
                      </div>
                      <div className="flex items-center">
                        <Button variant="outline" size="sm" asChild>
                          <a href="tel:+918871582449">Call</a>
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="text-foreground font-medium">Indore, India</p>
                        <p className="text-sm text-muted-foreground">Open to remote work</p>
                      </div>
                      <div className="flex items-center">
                        <Button variant="outline" size="sm" asChild>
                          <a href="https://www.google.com/maps/search/Indore,+India" target="_blank" rel="noopener noreferrer">
                            Location
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="font-serif font-semibold text-foreground mb-4">Connect on Social Media</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <div key={social.title} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon className={`h-5 w-5 text-muted-foreground ${social.color} transition-colors`} />
                        <div>
                          <p className="font-medium text-foreground">{social.title}</p>
                          <p className="text-sm text-muted-foreground">{social.username}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          Follow
                        </a>
                      </Button>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Availability */}
          <Card className="border-border bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="font-serif font-semibold text-foreground mb-4">Availability & Response</h3>
              <div className="space-y-3">
                {availability.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-center space-x-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
