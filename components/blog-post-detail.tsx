"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, User, Clock, ArrowRight, Tag } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BlogShareButton } from "@/components/blog-share-button"

interface BlogPostDetailProps {
  post: {
    title: string
    slug: string
    author: string
    date: string
    readTime: string
    image: string
    excerpt: string
    content: string
    category: string
    tags?: string[]
  }
  relatedPosts?: Array<{
    title: string
    slug: string
    image: string
    excerpt: string
    date: string
    readTime: string
  }>
}

export function BlogPostDetail({ post, relatedPosts = [] }: BlogPostDetailProps) {
  return (
    <>
      {/* Blog Header */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Hero Image */}
        <div className="relative w-full h-80 sm:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-8 border border-border">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 90vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Post Meta */}
        <div className="flex flex-col gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            <Badge className="bg-primary/20 text-primary border-primary/30">
              <Tag className="h-3 w-3 mr-1" />
              {post.category}
            </Badge>
            {post.tags?.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground"
          >
            {post.excerpt}
          </motion.p>

          {/* Post Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6 items-center text-sm text-muted-foreground pt-4 border-t border-border"
          >
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>{post.readTime}</span>
            </div>
            <div className="ml-auto">
              <BlogShareButton title={post.title} slug={post.slug} url="" />
            </div>
          </motion.div>
        </div>

        {/* Post Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none mb-12 text-foreground"
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </motion.div>

        {/* Author Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <Card className="p-6 border-border bg-card/50 backdrop-blur-sm">
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">About the Author</h3>
            <p className="text-muted-foreground mb-4">
              Cherag Saxena is a full-stack developer passionate about building innovative web solutions with modern technologies.
            </p>
            <div className="flex gap-4">
              <Button asChild variant="outline">
                <Link href="/about">Learn More</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/contact" className="gap-2">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </motion.article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto mt-16 pt-12 border-t border-border"
        >
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group border-border bg-card/50 backdrop-blur-sm">
                  <div className="relative w-full h-40 overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between h-48">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    </div>
                    <div className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                      {new Date(post.date).toLocaleDateString()} • {post.readTime}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </motion.section>
      )}
    </>
  )
}
