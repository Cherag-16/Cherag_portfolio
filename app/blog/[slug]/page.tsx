import blogs from "@/data/blogs.json"
import Image from "next/image"
import CopyButton from "@/components/copy-button"
import { notFound } from "next/navigation"
import { Share2, Twitter, Linkedin, Phone } from "lucide-react"
import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypePrism from 'rehype-prism-plus'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
  
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params
  // First try JSON-based posts
  const jsonPost = (blogs as any[]).find((p) => p.slug === slug)
  if (jsonPost) {
    const post = jsonPost
    return (
      <div className="min-h-screen container mx-auto px-4 py-12">
        <div className="flex items-start justify-between mb-6">
          <div>
            <Link href="/blog" className="text-sm text-muted-foreground">← Back to posts</Link>
            <h1 className="text-3xl font-serif font-bold mt-2">{post.title}</h1>
            <div className="text-sm text-muted-foreground mt-2">{new Date(post.date).toLocaleDateString()} • {post.readTime}</div>
          </div>
          <div className="ml-4">
            <CopyButton text={(post as any).content || post.excerpt} />
          </div>
        </div>
        {post.image && (
          <div className="w-full rounded overflow-hidden mb-6">
            <Image src={post.image} alt={post.title} width={1600} height={900} className="w-full h-72 object-cover rounded" />
          </div>
        )}
        <article className="prose max-w-none">
          <div className="whitespace-pre-wrap">{(post as any).content || post.excerpt}</div>
        </article>
        <div className="mt-8">
          <div className="text-sm text-muted-foreground mb-2">Share</div>
          <div className="flex gap-2">
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(process.env.NEXT_PUBLIC_SITE_URL || "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 border rounded"> <Twitter className="h-4 w-4" /> Twitter</a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(process.env.NEXT_PUBLIC_SITE_URL || "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 border rounded"> <Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + (process.env.NEXT_PUBLIC_SITE_URL || ""))}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 border rounded"> <Phone className="h-4 w-4" /> WhatsApp</a>
            <a href={`https://www.instagram.com/`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 border rounded"> <Share2 className="h-4 w-4" /> Instagram</a>
          </div>
        </div>
      </div>
    )
  }

  // Fallback: markdown files under data/blog/*.md
  const blogDir = path.join(process.cwd(), "data", "blog")
  if (!fs.existsSync(blogDir)) return notFound()
  const candidates = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"))
  const match = candidates.find((f) => f.includes(slug))
  if (!match) return notFound()
  const raw = fs.readFileSync(path.join(blogDir, match), "utf-8")
  const { data, content } = matter(raw)
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeStringify)
    .process(content)

  const html = String(file)

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-12">aQ\
        <article>
          <h1 className="text-3xl font-serif font-bold mb-2">{data.title}</h1>
          <div className="text-sm text-muted-foreground mb-6">{data.date} • {data.tags?.join(", ")}</div>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
      <Footer />
    </div>
  )
}
