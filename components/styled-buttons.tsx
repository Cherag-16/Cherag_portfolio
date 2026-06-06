"use client"

import { motion } from "framer-motion"
import { Download, Send, Check, Loader } from "lucide-react"
import { useState } from "react"

interface DownloadButtonProps {
  href: string
  fileName?: string
  variant?: "primary" | "secondary"
}

interface SubmitButtonProps {
  isLoading?: boolean
  isSuccess?: boolean
  onClick?: () => void
}

// Styled Download Button with animation
export function StyledDownloadButton({ href, fileName = "resume", variant = "primary" }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)
    setTimeout(() => setIsDownloading(false), 2000)
  }

  return (
    <motion.a
      href={href}
      download={fileName}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)"
      }}
      onClick={handleDownload}
      className={`relative inline-flex items-center justify-center px-8 py-3 font-semibold rounded-lg transition-all duration-300 overflow-hidden group ${
        variant === "primary"
          ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/50"
          : "bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:shadow-lg hover:shadow-accent/50"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
      />

      {/* Content */}
      <span className="relative flex items-center gap-2">
        <motion.div
          animate={isDownloading ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 0.6, repeat: isDownloading ? Infinity : 0 }}
        >
          <Download className="h-5 w-5" />
        </motion.div>
        {isDownloading ? "Downloading..." : "Download Resume"}
      </span>
    </motion.a>
  )
}

// Styled Submit Button with states
export function StyledSubmitButton({ isLoading = false, isSuccess = false, onClick }: SubmitButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={isLoading || isSuccess}
      whileHover={!isLoading && !isSuccess ? { scale: 1.02 } : {}}
      whileTap={!isLoading && !isSuccess ? { scale: 0.98 } : {}}
      className={`relative w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 overflow-hidden group ${
        isSuccess
          ? "bg-green-500/20 text-green-600 dark:text-green-400 border-2 border-green-500"
          : isLoading
            ? "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-2 border-blue-500"
            : "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/50 border-2 border-primary"
      }`}
    >
      {/* Animated background wave */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={isLoading ? { x: ["-100%", "100%"] } : { x: "100%" }}
        transition={{ duration: 2, repeat: isLoading ? Infinity : 0, repeatDelay: 0.5 }}
      />

      {/* Content */}
      <span className="relative flex items-center justify-center gap-2">
        {isSuccess ? (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Check className="h-5 w-5" />
          </motion.div>
        ) : isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader className="h-5 w-5" />
          </motion.div>
        ) : (
          <Send className="h-5 w-5" />
        )}
        {isSuccess ? "Message Sent!" : isLoading ? "Sending..." : "Send Message"}
      </span>
    </motion.button>
  )
}

// Animated text effect button
export function AnimatedTextButton({
  children,
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline"
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-8 py-3 font-semibold rounded-lg overflow-hidden group ${
        variant === "primary"
          ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground"
          : variant === "secondary"
            ? "bg-gradient-to-r from-accent to-accent/80 text-accent-foreground"
            : "border-2 border-primary text-primary hover:bg-primary/10"
      }`}
    >
      <motion.span className="relative block">
        <motion.span
          className="block"
          initial={{ opacity: 1, y: 0 }}
          whileHover={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
      </motion.span>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
      />
    </motion.button>
  )
}
