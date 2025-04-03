"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, TerminalIcon } from "lucide-react"
import Link from "next/link"

export function CodeExamples() {
  return (
    <section id="start" className=" py-16 md:py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl animate-fade-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
            Let&apos;s Start Building
          </span>
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 animate-fade-up animate-delay-150">
          Explore examples and get started with Bitte AI.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-[58rem] animate-fade-up animate-delay-300">
        <Tabs defaultValue="terminal" className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-full">
            <TabsTrigger value="terminal" className="rounded-full flex items-center gap-2">
              <TerminalIcon className="h-4 w-4" />
              Terminal
            </TabsTrigger>
            <TabsTrigger value="nextjs" className="rounded-full flex items-center gap-2">
              <Code className="h-4 w-4" />
              Next.js
            </TabsTrigger>
          </TabsList>
          <TabsContent value="terminal" className="mt-4 rounded-xl border bg-black p-4 overflow-hidden">
            <Terminal />
          </TabsContent>
          <TabsContent value="nextjs" className="mt-4 rounded-xl border bg-black p-4 overflow-hidden">
            <NextJsExample />
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-center">
          <Link href="#">
            <Button size="lg" className="gap-2 rounded-full">
              Read Documentation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const lines = [
    "$ npm install bitte-ai",
    "Installing packages...",
    "✓ Packages installed successfully",
    "$ npx bitte-ai init",
    "Creating new Bitte AI project...",
    "✓ Project initialized successfully",
    "$ npx bitte-ai start",
    "Starting Bitte AI...",
    "✓ Bitte AI is running on http://localhost:3000",
  ]

  // Simulate typing effect
  useState(() => {
    if (currentLine < lines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1)
      }, 800)
      return () => clearTimeout(timer)
    }
  })

  return (
    <div className="font-mono text-sm text-green-400 animate-pulse-slow">
      {lines.slice(0, currentLine + 1).map((line, i) => (
        <div key={i} className={`py-1 ${i === currentLine ? "border-r-2 border-green-400" : ""}`}>
          {line}
        </div>
      ))}
    </div>
  )
}

function NextJsExample() {
  return (
    <pre className="font-mono text-sm text-green-400 overflow-x-auto">
      <code>{`// pages/api/bitte-ai.ts
import { BitteAI } from 'bitte-ai';

const bitteAI = new BitteAI({
  apiKey: process.env.BITTE_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;

    const response = await bitteAI.generate({
      prompt,
      maxTokens: 1000,
      temperature: 0.7,
    });

    return res.status(200).json({ result: response.text });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}`}</code>
    </pre>
  )
}

