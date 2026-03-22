import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "IRL — In Real Life",
  description: "Rewiring the reward system of a generation.",
  metadataBase: new URL("https://irl-app.vercel.app"),
  openGraph: {
    title: "IRL — In Real Life",
    description: "Rewiring the reward system of a generation.",
    url: "https://irl-app.vercel.app",
    siteName: "IRL",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "IRL — In Real Life",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IRL — In Real Life",
    description: "Rewiring the reward system of a generation.",
    images: ["/og.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          margin: 0,
          background: "#080808",
          color: "white",
        }}
      >
        {children}
      </body>
    </html>
  )
}