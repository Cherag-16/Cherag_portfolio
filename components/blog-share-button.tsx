"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Share2, Facebook, Twitter, Linkedin, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogShareButtonProps {
  title: string
  url: string
  slug: string
}

export function BlogShareButton({ title, url, slug }: BlogShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/blog/${slug}` : url

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "hover:text-blue-600",
      onClick: () => {
        const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        window.open(fbUrl, "_blank", "width=600,height=400")
      },
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "hover:text-blue-400",
      onClick: () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`
        window.open(twitterUrl, "_blank", "width=600,height=400")
      },
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "hover:text-blue-700",
      onClick: () => {
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        window.open(linkedInUrl, "_blank", "width=600,height=400")
      },
    },
    {
      name: "Copy Link",
      icon: Copy,
      color: "hover:text-primary",
      onClick: () => {
        navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      },
    },
  ]

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
        title="Share this article"
      >
        <Share2 className="h-5 w-5 text-primary" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />

            {/* Share menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="absolute right-0 top-12 z-50 bg-card border border-border rounded-lg shadow-lg p-3 space-y-2 min-w-[160px]"
            >
              {shareLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.button
                    key={link.name}
                    onClick={() => {
                      link.onClick()
                      setIsOpen(false)
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm font-medium text-foreground ${link.color}`}
                  >
                    <Icon className="h-4 w-4" />
                    {copied && link.name === "Copy Link" ? (
                      <>
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      link.name
                    )}
                  </motion.button>
                )
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
