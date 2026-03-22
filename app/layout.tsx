import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "IRL — In Real Life",
  description: "Rewiring the reward system of a generation.",
  icons: {
    icon: [
      { url: "/IRL_Brand_Image.png", sizes: "32x32", type: "image/png" },
      { url: "/IRL_Brand_Image.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [
      { url: "/IRL_Brand_Image.png", sizes: "180x180", type: "image/png" }
    ]
  }
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