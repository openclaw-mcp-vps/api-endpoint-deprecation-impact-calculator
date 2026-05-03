import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Deprecation Impact Calculator',
  description: 'Calculate business impact of API deprecations. Analyze usage logs, identify affected customers, and estimate revenue risk before sunsetting endpoints.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="96e330b7-f1a8-4b33-8e2b-bf8bb0ea74fa"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
