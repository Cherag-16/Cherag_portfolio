"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import blogs from "@/data/blogs.json"
import { Card, CardContent } from "@/components/ui/card"

export function BlogGrid() {
  const [posts, setPosts] = useState<typeof blogs>([])

  useEffect(() => {
    setPosts(blogs as any)
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-12">Latest Articles</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer border-border bg-card/50 backdrop-blur-sm">
                <div className="w-full h-40 overflow-hidden bg-muted">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 flex flex-col justify-between h-48">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  </div>
                  <div className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                    {new Date(post.date).toLocaleDateString()} • {post.readTime}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
