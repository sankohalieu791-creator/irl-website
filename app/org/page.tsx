"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Org() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      icon: "🌍",
      title: "Your own community on the platform",
      desc: "Create your community page on IRL. Your name, your sessions, your leaderboard. Young people press Link to join instantly — no approval process, no friction. Your community grows every time someone new discovers you through the Hub."
    },
    {
      icon: "⚡",
      title: "Post sessions that appear on the Hub",
      desc: "You post a boxing session. A volunteering challenge. A community clean-up. It goes live on the Hub feed — the same TikTok-style feed seen by every IRL user. Your sessions get visibility far beyond your existing members."
    },
    {
      icon: "📈",
      title: "Track your community's total impact",
      desc: "Your community dashboard shows total members, total sessions completed, total LP earned and how many people have pressed Link on your community. Real data on your real world impact."
    },
    {
      icon: "🏆",
      title: "Give your young people real recognition",
      desc: "Every session completed earns LP. LP unlocks real rewards. But more importantly — it builds a profile. A young person who has done 50 sessions has something to show. Something that means more than a follower count."
    },
    {
      icon: "📣",
      title: "Reach young people between sessions",
      desc: "Your admin dashboard lets you post sessions for any day of the week — evenings, weekends, holidays. You stay connected with your young people even when they are not physically with you."
    },
    {
      icon: "💜",
      title: "The young people who need this most",
      desc: "The ones who show up every week, train hard, give back to their community — and get nothing publicly for it. IRL gives them the recognition they deserve. A profile built on what they have actually done. Not on how many people follow them."
    },
  ]

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
          <span style={{ fontSize: "20px", fontWeight: 900, padding: "2px 8px", background: "#B400FF", color: "#00D4FF", border: "2px solid #00D4FF" }}>L</span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none", fontWeight: 500 }}>Home</Link>
          <Link href="/about" style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none", fontWeight: 500 }}>About</Link>
          <Link href="/institutions" style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none", fontWeight: 500 }}>Institutions</Link>
          <a href="https://app.joinirl.co.uk" style={{ padding: "10px 20px", background: "linear-gradient(135deg, #B400FF, #00D4FF)", color: "white", fontSize: "13px", fontWeight: 700, textDecoration: "none", borderRadius: "8px" }}>
            Launch App ⚡
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "120px 48px 80px", maxWidth: "1100px", margin: "0 auto"
      }}>
        <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", color: "rgba(255,255,255,0.3)", marginBottom: "32px", textTransform: "uppercase" }}>
          For Youth Orgs & Communities
        </p>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 900, letterSpacing: "-3px", lineHeight: 1.0, marginBottom: "40px", maxWidth: "820px" }}>
          Your young people<br />do real things.<br /><span style={{ color: "#B400FF" }}>Now the world sees it.</span>
        </h1>
        <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.4)", maxWidth: "580px", lineHeight: 1.7, marginBottom: "56px" }}>
          The young people who train with you, volunteer with you and give back through you deserve recognition. IRL gives it to them — and gives your organisation the visibility and tools to grow.
        </p>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="mailto:alieu@joinirl.co.uk" style={{ padding: "14px 28px", background: "linear-gradient(135deg, #B400FF, #00D4FF)", color: "white", fontSize: "14px", fontWeight: 700, textDecoration: "none", borderRadius: "10px" }}>
            Get in Touch
          </a>
          <a href="https://app.joinirl.co.uk" style={{ padding: "14px 28px", border: "1px solid rgba(255,255,255,0.15)", color: "white", fontSize: "14px", fontWeight: 500, textDecoration: "none", borderRadius: "10px" }}>
            Try the App Free
          </a>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      {/* WHO THIS IS FOR */}
      <section style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", color: "rgba(255,255,255,0.3)", marginBottom: "32px", textTransform: "uppercase" }}>Who This Is For</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "48px", maxWidth: "600px" }}>
            If you work with young people in the real world, this is for you.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {[
              "Boxing gyms and martial arts clubs",
              "Grassroots football and sports clubs",
              "Youth clubs and community centres",
              "Mentoring and after-school programmes",
              "Community volunteer organisations",
              "Faith-based youth groups",
              "Alternative provision and PRUs",
              "Gang exit and diversion programmes",
              "Any org that believes in real life"
            ].map((item, i) => (
              <div key={i} style={{
                background: "#0d0d12", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "14px", padding: "20px 24px",
                display: "flex", alignItems: "center", gap: "12px"
              }}>
                <span style={{ color: "#B400FF", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      {/* WHAT YOU GET */}
      <section style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", color: "rgba(255,255,255,0.3)", marginBottom: "32px", textTransform: "uppercase" }}>What You Get</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "80px", maxWidth: "600px" }}>
            Tools to grow your community<br />and prove your impact.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
            {features.map((f, i) => (
              <div key={i} style={{ background: "#0d0d12", border: "1px solid rgba(255,255,255,0.06)", padding: "48px 40px" }}>
                <div style={{ fontSize: "32px", marginBottom: "20px" }}>{f.icon}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "20px", fontWeight: 700, color: "white", marginBottom: "14px", lineHeight: 1.2 }}>{f.title}</div>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: 1.8 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      {/* QUOTE */}
      <section style={{ padding: "120px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 700, color: "white", lineHeight: 1.35, marginBottom: "24px", letterSpacing: "-0.5px" }}>
            "The young people who need IRL most are already in your building. They just need somewhere that recognises what they do."
          </p>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>Alieu Sankoh, Founder — IRL Connect</p>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      {/* FREE */}
      <section style={{ padding: "120px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "24px" }}>
            Free for every<br /><span style={{ color: "#B400FF" }}>youth organisation.</span>
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)", lineHeight: 1.8, marginBottom: "48px" }}>
            No subscription. No contracts. No cost. We are here for the mission, not the money. Get your organisation on IRL today and give your young people the recognition they deserve.
          </p>
          <a href="mailto:alieu@joinirl.co.uk" style={{
            display: "inline-block", padding: "16px 40px",
            background: "linear-gradient(135deg, #B400FF, #00D4FF)",
            color: "white", fontSize: "15px", fontWeight: 700,
            textDecoration: "none", borderRadius: "12px"
          }}>
            Get Started — alieu@joinirl.co.uk
          </a>
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
