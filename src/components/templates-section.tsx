import { ArrowRight, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function TemplatesSection() {
  return (
    <section id="templates" className=" py-16 md:py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl animate-fade-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
            Starter Templates
          </span>
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 animate-fade-up animate-delay-150">
          Get started quickly with our pre-built templates for popular frameworks.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] lg:gap-12 mt-12">
        <Card className="overflow-hidden border rounded-xl bg-background/50 backdrop-blur-sm transition-all hover:shadow-md hover:bg-background/70 animate-fade-right">
          <CardHeader className="pb-0">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-black p-2 rounded-md">
                <svg height="20" width="20" viewBox=".5 -.2 1023 1024.1" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"
                    fill="#fff"
                  />
                  <path
                    d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <CardTitle className="text-xl">Next.js Template</CardTitle>
            </div>
            <CardDescription>Start building with Next.js, React, and Bitte AI integration</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="rounded-md bg-black/20 p-4">
              <code className="text-xs text-white">
                <pre>
                  {`# Clone the repository
git clone https://github.com/bitte-ai/nextjs-starter
cd nextjs-starter

# Install dependencies
npm install

# Start development server
npm run dev`}
                </pre>
              </code>
            </div>
            <div className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>App Router support</li>
                <li>Server Components</li>
                <li>API Routes</li>
                <li>Bitte AI SDK integration</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full rounded-full">
              <Code className="mr-2 h-4 w-4" />
              Use Next.js Template
            </Button>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden border rounded-xl bg-background/50 backdrop-blur-sm transition-all hover:shadow-md hover:bg-background/70 animate-fade-left">
          <CardHeader className="pb-0">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-black p-2 rounded-md">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M29.8836 6.146L16.7418 29.6457C16.3704 30.2341 15.6296 30.2341 15.2582 29.6457L2.11638 6.14601C1.73028 5.53345 2.16762 4.73852 2.85821 4.73852H29.1418C29.8324 4.73852 30.2697 5.53345 29.8836 6.146Z"
                    fill="#41D1FF"
                  />
                  <path
                    d="M24.6582 2.02695L16.9082 3.86314C16.6522 3.92677 16.4616 4.14933 16.4269 4.41332L14.8711 17.0413C14.8255 17.3857 15.0862 17.6927 15.4259 17.6927H17.9148C18.2772 17.6927 18.5457 17.3427 18.4644 16.9895L17.3562 10.8227C17.2803 10.4945 17.5409 10.1867 17.8729 10.1867H20.1245C20.4628 10.1867 20.7267 10.5032 20.6427 10.8343L18.8975 19.1971C18.8115 19.5371 19.0833 19.8618 19.4295 19.8618H21.9306C22.2707 19.8618 22.5407 19.5471 22.4628 19.2133L20.9538 9.19989C20.8803 8.88223 21.1363 8.58931 21.4604 8.58931H23.9345C24.2688 8.58931 24.5291 8.89465 24.4449 9.21877L22.5076 20.4208C22.4215 20.7513 22.6889 21.0682 23.0289 21.0682H25.5134C25.8464 21.0682 26.1113 20.7694 26.0439 20.4433L24.9135 2.65943C24.8461 2.33343 24.9209 2.02695 24.6582 2.02695Z"
                    fill="white"
                  />
                </svg>
              </div>
              <CardTitle className="text-xl">Vite Template</CardTitle>
            </div>
            <CardDescription>Lightning-fast development with Vite and Bitte AI</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="rounded-md bg-black/20 p-4">
              <code className="text-xs text-white">
                <pre>
                  {`# Clone the repository
git clone https://github.com/bitte-ai/vite-starter
cd vite-starter

# Install dependencies
npm install

# Start development server
npm run dev`}
                </pre>
              </code>
            </div>
            <div className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Lightning-fast HMR</li>
                <li>TypeScript support</li>
                <li>React 18</li>
                <li>Bitte AI SDK integration</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full rounded-full">
              <Code className="mr-2 h-4 w-4" />
              Use Vite Template
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center mt-12">
        <Link href="#">
          <Button variant="outline" size="lg" className="gap-2 rounded-full">
            Browse All Templates
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}

