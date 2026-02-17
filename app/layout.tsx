import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Cherag Saxena - Full Stack Developer | React, Node.js, MERN Stack",
  description:
    "Cherag Saxena is a passionate Full Stack Developer with 30+ certifications, expert in React, Node.js, MERN stack. Building innovative web solutions and amazing digital experiences.",
  keywords: "Full Stack Developer, React Developer, Node.js Developer, MERN Stack, Web Development, JavaScript, TypeScript, MongoDB, Express, Freelancer, Web Developer Portfolio, Frontend Developer, Backend Developer, Full Stack Development, Web Applications, Next.js, Tailwind CSS, API Development",
  authors: [{ name: "Cherag Saxena", url: "https://cheragsaxena.com" }],
  creator: "Cherag Saxena",
  generator: 'v0.app',
  metadataBase: new URL('https://cheragsaxena.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cheragsaxena.com',
    title: 'Cherag Saxena - Full Stack Developer | MERN Stack Expert',
    description: 'Professional portfolio of Cherag Saxena - Full Stack Developer with 30+ technical certifications. Expert in React, Node.js, MongoDB, and modern web technologies.',
    siteName: 'Cherag Saxena Portfolio',
    images: [
      {
        url: 'https://cheragsaxena.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cherag Saxena - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cherag Saxena - Full Stack Developer | MERN Stack',
    description: 'Professional portfolio of Cherag Saxena. Expert Full Stack Developer with 30+ certifications in React, Node.js, and modern web development.',
    creator: '@cheragsaxena',
    site: '@cheragsaxena',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="canonical" href="https://cheragsaxena.com" />
        <style>{`
html {
  font-family: ${openSans.style.fontFamily};
  --font-sans: ${openSans.variable};
  --font-serif: ${montserrat.variable};
  color-scheme: dark light;
}
        `}</style>
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} antialiased dark bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
