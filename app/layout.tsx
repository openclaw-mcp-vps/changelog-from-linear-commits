import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ChangelogAI — Auto-generate changelogs from Linear & GitHub",
  description: "Connect Linear and GitHub to automatically create customer-facing changelogs from ticket data and commits. Built for B2B SaaS product teams."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cd8b8538-5e76-48bb-a6d0-df9cbe007bfc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
