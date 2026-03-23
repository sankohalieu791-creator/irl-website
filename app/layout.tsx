import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "IRL — In Real Life",
  description: "Rewiring the reward system of a generation.",
  icons: {
    icon: "/irl-icon.png",
    shortcut: "/irl-icon.png",
    apple: "/irl-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/irl-icon.png",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/irl-icon.png" type="image/png"/>
        <link rel="shortcut icon" href="/irl-icon.png" type="image/png"/>
      </head>
      <body style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}