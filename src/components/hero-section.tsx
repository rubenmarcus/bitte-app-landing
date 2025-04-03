import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedBlockchain } from "./animated-blockchain"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <AnimatedBlockchain />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />

      <div className="container relative z-20 mx-auto flex max-w-[58rem] flex-col items-center space-y-10 text-center pt-20">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter animate-fade-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Your AI-Powered Bridge to Blockchain      </span>
        </h1>
        <p className="max-w-[42rem] text-lg leading-normal text-muted-foreground sm:text-xl sm:leading-8 animate-fade-up animate-delay-150">
          The powerful AI assistant for developers. Build, test, and deploy your agents on blockchain with ease.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-up animate-delay-300">
          <Link href="#download">
            <Button size="lg" className="gap-2 text-base px-8 py-6 rounded-full">
              Download Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="#start">
            <Button variant="outline" size="lg" className="text-base px-8 py-6 rounded-full">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

