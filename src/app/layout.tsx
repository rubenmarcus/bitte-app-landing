import "@/app/globals.css"
import { Mona_Sans as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Bitte AI Desktop",
  description: "The powerful AI assistant for developers. Build, test, and deploy your applications with ease.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head />
      <body className={cn("min-h-screen bg-black font-sans antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  )
}

