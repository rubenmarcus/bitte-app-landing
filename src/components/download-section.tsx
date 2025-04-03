import { Apple, Download, LaptopIcon as Linux, ComputerIcon as Windows } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadSection() {
  return (
    <section id="download" className=" py-16 md:py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl animate-fade-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
            Download for Your Platform
          </span>
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 animate-fade-up animate-delay-150">
          Bitte AI Desktop is available for all major operating systems. Choose your platform below.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-10 mt-12 animate-fade-up animate-delay-300">
        <div className="relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-8 shadow-sm transition-all hover:shadow-md hover:bg-background/70">
          <div className="flex h-full flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Apple className="h-8 w-8" />
                <h3 className="font-bold text-xl">macOS</h3>
              </div>
              <p className="text-sm text-muted-foreground">For macOS 11.0 or higher (Intel & Apple Silicon)</p>
            </div>
            <div className="space-y-3">
              <Button className="w-full py-6 text-base rounded-full" asChild>
                <a href="/download/dmg/Bitte Desktop_0.0.1_aarch64.dmg">
                  <Download className="mr-2 h-5 w-5" />
                  Download for Mac
                </a>
              </Button>
              <p className="text-xs text-muted-foreground">Version 1.0.0</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-8 shadow-sm transition-all hover:shadow-md hover:bg-background/70">
          <div className="flex h-full flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Windows className="h-8 w-8" />
                <h3 className="font-bold text-xl">Windows</h3>
              </div>
              <p className="text-sm text-muted-foreground">For Windows 10 or higher (64-bit)</p>
            </div>
            <div className="space-y-3">
              <Button className="w-full py-6 text-base rounded-full" asChild>
                <a href="/download/windows/Bitte Desktop_0.1.0_x64_en-US.msi">
                  <Download className="mr-2 h-5 w-5" />
                  Download for Windows
                </a>
              </Button>
              <p className="text-xs text-muted-foreground">Version 1.0.0</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-8 shadow-sm transition-all hover:shadow-md hover:bg-background/70">
          <div className="flex h-full flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Linux className="h-8 w-8" />
                <h3 className="font-bold text-xl">Linux</h3>
              </div>
              <p className="text-sm text-muted-foreground">For Ubuntu, Debian and other distributions</p>
            </div>
            <div className="space-y-3">
              <Button className="w-full py-6 text-base rounded-full" asChild>
                <a href="/download/dmg/Bitte Desktop_0.0.1_aarch64.dmg">
                  <Download className="mr-2 h-5 w-5" />
                  Download for Linux
                </a>
              </Button>
              <p className="text-xs text-muted-foreground">Version 1.0.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

