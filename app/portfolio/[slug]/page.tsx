import Link from "next/link"
import { notFound } from "next/navigation"
import projectsData from "@/data/projects.json"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"

type Params = { params: { slug: string } }

export default async function ProjectPage({ params }: Params) {
  const slug = params.slug
  const projects = (projectsData as any) as any[]
  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound()

  return (
    <div className="min-h-screen container mx-auto px-4 py-12">
      <Link href="/portfolio" className="inline-flex items-center mb-6 text-sm text-muted-foreground">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to projects
      </Link>

      {/* Hero */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
        {project.images?.[0] ? (
          <Image src={project.images[0]} alt={project.title} width={1600} height={900} className="w-full h-64 sm:h-96 object-cover" />
        ) : (
          <div className="w-full h-64 sm:h-96 bg-muted" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute left-6 bottom-6 text-white">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold drop-shadow">{project.title}</h1>
          <p className="mt-2 max-w-2xl text-sm sm:text-base drop-shadow">{project.shortDescription}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {(project.techStack || []).slice(0,5).map((t: string) => (
              <Badge key={t} variant="secondary" className="text-xs bg-white/20 backdrop-blur-sm border-white/10">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}3
        <div className="lg:col-span-2 space-y-8">
          <article className="prose prose-neutral max-w-none">
            <h2>Intro</h2>
            <p className="text-muted-foreground">{project.intro || project.shortDescription}</p>

            <h2>Problem</h2>
            <p className="text-muted-foreground">{project.problem}</p>

            <h2>Solution</h2>
            <p className="text-muted-foreground">{project.solution}</p>

            <h2>Technical Highlights</h2>
            <ul className="list-disc list-inside text-muted-foreground">
              {(project.challenges || []).map((c: string, i: number) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </article>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/60 to-white/30 dark:from-card/60 dark:to-card/40 shadow-lg backdrop-blur">
            <div className="text-sm text-muted-foreground">Role</div>
            <div className="font-medium text-foreground mt-1">{project.role}</div>

            <div className="mt-4 text-sm text-muted-foreground">Links</div>
            <div className="mt-3 flex flex-col gap-3">
              {project.repo && (
                <Button asChild variant="ghost">
                  <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> View Repo
                  </Link>
                </Button>
              )}
            </div>

            <div className="mt-4 text-sm text-muted-foreground">Tech Stack</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {(project.techStack || []).map((t: string) => (
                <Badge key={t} variant="secondary" className="text-xs">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-card/50 shadow-lg">
            <div className="text-sm text-muted-foreground">Project Details</div>
            <div className="mt-2 text-sm text-foreground">
              <div><strong>Duration:</strong> {project.duration || "—"}</div>
              <div className="mt-1"><strong>Team:</strong> {project.team || "Solo / —"}</div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}
