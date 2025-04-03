import Link from "next/link"
import Image from "next/image"
import { Github, Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { DownloadSection } from "@/components/download-section"
import { MobileSection } from "@/components/mobile-section"
import { CodeExamples } from "@/components/code-examples"
import { TemplatesSection } from "@/components/templates-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky px-10 top-0 z-40 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Bitte AI" width={100} height={100} />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#download" className="transition-colors hover:text-white/80">
              Download
            </Link>
            <Link href="#mobile" className="transition-colors hover:text-white/80">
              Mobile
            </Link>
            <Link href="#templates" className="transition-colors hover:text-white/80">
              Templates
            </Link>
            <Link href="#start" className="transition-colors hover:text-white/80">
              Get Started
            </Link>
          </nav>
          <div className="flex items-center">
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <div className="w-9 px-0">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Button variant="outline" size="sm" className="ml-4 rounded-full">
              Sign In
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto max-w-screen-2xl px-4">
          <HeroSection />
          <DownloadSection />
          <MobileSection />
          <TemplatesSection />
          <CodeExamples />
        </div>
      </main>
      <Footer />
    </div>
  )
}

