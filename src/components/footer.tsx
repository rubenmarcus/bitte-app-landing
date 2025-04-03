import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 md:py-0 px-4">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with ❤️ by Bitte AI Team. © {new Date().getFullYear()} Bitte AI. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

