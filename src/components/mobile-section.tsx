import { Apple, Download, ExternalLink, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function MobileSection() {
  return (
    <section id="mobile" className=" py-16 md:py-24 lg:py-32 scroll-mt-20 overflow-hidden">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl animate-fade-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
            Bitte AI on Mobile
          </span>
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 animate-fade-up animate-delay-150">
          Take the power of Bitte AI with you on the go.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-10 sm:grid-cols-2 md:max-w-[64rem] lg:gap-16 mt-16">
        <div className="relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-8 shadow-sm transition-all hover:shadow-md hover:bg-background/70 animate-fade-right">
          <div className="flex h-full flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Smartphone className="h-8 w-8" />
                <h3 className="font-bold text-xl">Android</h3>
              </div>
              <p className="text-sm text-muted-foreground">For Android 9.0 or higher</p>
            </div>
            <div className="space-y-3">
              <Button className="w-full py-6 text-base rounded-full">
                <Download className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
              <p className="text-xs text-muted-foreground">Version 1.0.0</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-8 shadow-sm transition-all hover:shadow-md hover:bg-background/70 animate-fade-left">
          <div className="flex h-full flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Apple className="h-8 w-8" />
                <h3 className="font-bold text-xl">iOS</h3>
                <Badge variant="outline" className="ml-2 rounded-full">
                  Coming Soon
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">For iOS 14.0 or higher</p>
            </div>
            <div className="space-y-3">
              <Button className="w-full py-6 text-base rounded-full" disabled>
                <ExternalLink className="mr-2 h-5 w-5" />
                App Store
              </Button>
              <p className="text-xs text-muted-foreground">Coming Q3 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

