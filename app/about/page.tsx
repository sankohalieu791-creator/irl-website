"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function About() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "white", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');`}</style>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 48px", height: "72px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease"
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "2px", textDecoration: "none" }}>
          <span style={{ fontSize: "22px", fontWeight: 900, letterSpacing: "-1px", color: "white", fontFamily: "'Syne', sans-serif" }}>IR</span>
          <span style={{ fontSize: "20px", fontWeight: 900, padding: "2px 8px", background: "#B400FF", color: "#00D4FF", border: "2px solid #00D4FF", fontFamily: "'Syne', sans-serif" }}>L</span>
        </Link>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", textDecoration: "none", fontWeight: 600 }}>Home</Link>
          <Link href="/institutions" style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", textDecoration: "none", fontWeight: 600 }}>Institutions</Link>
          <Link href="/org" style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", textDecoration: "none", fontWeight: 600 }}>Youth Orgs</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "120px 48px 80px", maxWidth: "1100px", margin: "0 auto"
      }}>
        <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", color: "rgba(255,255,255,0.3)", marginBottom: "32px", textTransform: "uppercase" }}>
          The Founder
        </p>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 900, letterSpacing: "-3px", lineHeight: 1.0, marginBottom: "40px", maxWidth: "800px" }}>
          Built by someone<br />who lived<br /><span style={{ color: "#B400FF" }}>the problem.</span>
        </h1>
        <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.4)", maxWidth: "560px", lineHeight: 1.7 }}>
          My name is Alieu. I am 19 years old. I built IRL entirely alone — no team, no funding, no technical background when I started.
        </p>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      {/* STORY */}
      <section style={{ padding: "160px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "120px", alignItems: "start" }}>
          <div style={{
            aspectRatio: "3/4", background: "rgba(180,0,255,0.08)",
            border: "1px solid rgba(180,0,255,0.2)", borderRadius: "20px",
            overflow: "hidden", position: "sticky", top: "100px"
          }}>
            <Image src="/alieu.jpg" alt="Alieu — Founder of IRL" width={600} height={800}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "56px", paddingTop: "8px" }}>
            {[
              { label: "The beginning", text: "I watched my generation lose their confidence to platforms that rewarded the wrong things. Not what you did. Not how hard you worked. How you looked. How many followers you had. That wasn't fair. And I couldn't stop thinking about it." },
              { label: "The decision", text: "I had no team. No funding. No technical background. I didn't know how to code. But I believed in this too much to wait for someone else to build it. So I taught myself. I failed. A lot. I went to bed some nights not knowing how I was going to get this off the ground." },
              { label: "The build", text: "I built the entire platform alone. Auth system. Database. Admin dashboard. Leaderboard. Rewards. Notifications. The Hub. Everything. From scratch. In my bedroom. At 19. Because I refused to let the idea stay an idea." },
              { label: "The mission", text: "IRL is not just an app. It is a movement. Every student who completes a session, earns LP and climbs the leaderboard is proof that the scoreboard can be redesigned. That effort can be rewarded. That real life can win." },
              { label: "The vision", text: "One day IRL will have physical hubs in every city. Spaces where young people come to do real sessions, connect and build their verified profile in person. This is just the beginning. And we are building it one school, one student and one session at a time." }
            ].map((s, i) => (
              <div key={i}>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", letterSpacing: "2px", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase" }}>{s.label}</p>
                <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: "48px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "2px", textDecoration: "none" }}>
          <span style={{ fontSize: "18px", fontWeight: 900, color: "white", fontFamily: "'Syne', sans-serif" }}>IR</span>
          <span style={{ fontSize: "16px", fontWeight: 900, padding: "2px 6px", background: "#B400FF", color: "#00D4FF", border: "2px solid #00D4FF" }}>L</span>
        </Link>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>© 2026 IRL Connect Ltd</p>
      </footer>
    </div>
  )
}
