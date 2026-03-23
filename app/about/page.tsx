"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function About() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "white" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: "0 48px",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease"
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "2px", textDecoration: "none" }}>
          <span style={{ fontSize: "22px", fontWeight: 900, letterSpacing: "-1px", color: "white" }}>IR</span>
          <span style={{ fontSize: "20px", fontWeight: 900, padding: "2px 8px", background: "#B400FF", color: "#00D4FF", border: "2px solid #00D4FF" }}>L</span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none", fontWeight: 500 }}>Home</Link>
          <Link href="/institutions" style={{ color: "white", fontSize: "14px", textDecoration: "none", fontWeight: 600 }}>Institutions</Link>
          <Link href="/institutions#demo" style={{ padding: "10px 20px", background: "white", color: "#080808", fontSize: "13px", fontWeight: 700, textDecoration: "none", borderRadius: "8px" }}>
            Book a Demo
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 48px 80px",
        maxWidth: "1100px",
        margin: "0 auto"
      }}>
        <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", color: "rgba(255,255,255,0.3)", marginBottom: "32px" }}>
          THE FOUNDER
        </p>
        <h1 style={{
          fontSize: "clamp(48px, 7vw, 88px)",
          fontWeight: 900,
          letterSpacing: "-3px",
          lineHeight: 1.0,
          marginBottom: "40px",
          maxWidth: "800px"
        }}>
          Built by someone<br />
          who lived<br />
          <span style={{ color: "#B400FF" }}>the problem.</span>
        </h1>
        <p style={{
          fontSize: "20px",
          color: "rgba(255,255,255,0.4)",
          maxWidth: "560px",
          lineHeight: 1.7
        }}>
          My name is Alieu. I am 19 years old. I built IRL entirely alone — no team, no funding, no technical background.
        </p>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      {/* STORY */}
      <section style={{ padding: "160px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "120px", alignItems: "start" }}>

          {/* Photo */}
         <div style={{
  aspectRatio: "3/4",
  background: "rgba(180,0,255,0.08)",
  border: "1px solid rgba(180,0,255,0.2)",
  borderRadius: "20px",
  overflow: "hidden",
  position: "sticky",
  top: "100px"
}}>
  <Image
  src="/alieu.jpg"
  alt="Alieu — Founder of IRL"
  width={600}
  height={800}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top"
  }}
/>
</div>

          {/* Story text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px", paddingTop: "8px" }}>
            {[
              {
                label: "The beginning",
                text: "I watched my generation lose their confidence to platforms that rewarded the wrong things. Not what you did. Not how hard you worked. How you looked. How many followers you had. That wasn't fair. And I couldn't stop thinking about it."
              },
              {
                label: "The decision",
                text: "I had no team. No funding. No technical background. I didn't know how to code. But I believed in this too much to wait for someone else to build it. So I taught myself. I failed. A lot. I went to bed some nights not knowing how I was going to get this off the ground."
              },
              {
                label: "The build",
                text: "I built the entire platform alone. Auth system. Database. Admin dashboard. Leaderboard. Rewards. Notifications. The Hub. Everything. From scratch. In my bedroom. At 19. Because I refused to let the idea stay an idea."
              },
              {
                label: "The mission",
                text: "IRL is not just an app. It is a movement. Every student who completes a session, earns LP and climbs the leaderboard is proof that the scoreboard can be redesigned. That effort can be rewarded. That real life can win."
              },
              {
                label: "The vision",
                text: "One day IRL will have physical hubs in every city. Sport pitches. Music studios. Study lounges. All earned through real achievement. This is just the beginning. And we are building it one school, one student and one session at a time."
              },
            ].map((s, i) => (
              <div key={i}>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", letterSpacing: "2px", fontWeight: 600, marginBottom: "16px", textTransform: "uppercase" }}>
                  {s.label}
                </p>
                <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      {/* VALUES */}
      <section style={{ padding: "160px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", color: "rgba(255,255,255,0.3)", marginBottom: "32px" }}>
            WHAT WE BELIEVE
          </p>
          <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "100px", maxWidth: "600px" }}>
            The values that<br />built IRL.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>
            {[
              { title: "Effort over appearance", desc: "What you do defines you. Not how you look. Not how many followers you have. What you actually did today." },
              { title: "Real over virtual", desc: "Screen time is not the enemy. Wasted screen time is. Every moment on IRL should lead to a moment in real life." },
              { title: "Recognition for everyone", desc: "The quiet student. The student who never puts their hand up. They work just as hard. IRL makes sure the world sees it." },
              { title: "Competition drives growth", desc: "Healthy competition makes people better. IRL creates a scoreboard that rewards the right things and makes everyone want to improve." },
              { title: "Community not comparison", desc: "You are not competing against someone's highlight reel. You are competing against yesterday's version of yourself." },
              { title: "Movement not app", desc: "IRL is infrastructure for a generation. The app is the starting point. The physical hubs, the pass, the community — that is the destination." },
            ].map((v, i) => (
              <div key={i} style={{
                padding: "48px 40px",
                background: "rgba(255,255,255,0.02)",
                borderTop: "1px solid rgba(255,255,255,0.06)"
              }}>
                <p style={{ fontSize: "18px", fontWeight: 700, color: "white", marginBottom: "16px", lineHeight: 1.2 }}>{v.title}</p>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "160px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "32px" }}>
            Ready to be part<br />
            of the movement?
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginBottom: "48px" }}>
            Whether you are a student, an institution or an investor — IRL has a place for you.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/institutions#demo" style={{
              padding: "14px 28px",
              background: "white",
              color: "#080808",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              borderRadius: "10px"
            }}>
              Book a Demo
            </Link>
            <Link href="/" style={{
              padding: "14px 28px",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              borderRadius: "10px"
            }}>
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "48px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "2px", textDecoration: "none" }}>
          <span style={{ fontSize: "18px", fontWeight: 900, letterSpacing: "-1px", color: "white" }}>IR</span>
          <span style={{ fontSize: "16px", fontWeight: 900, padding: "2px 6px", background: "#B400FF", color: "#00D4FF", border: "2px solid #00D4FF" }}>L</span>
        </Link>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>© 2025 IRL Connect Ltd</p>
      </footer>

    </div>
  )
}