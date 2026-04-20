"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Institutions() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      icon: "⚡",
      title: "Post sessions directly to your students",
      desc: "Create challenges — sport, community, creative, academic — and they appear instantly in your students' feed. Morning run. Volunteering day. Skill session. Whatever you want them to do, post it."
    },
    {
      icon: "📊",
      title: "See who is engaging and who has gone quiet",
      desc: "Your admin dashboard shows you real time engagement data. Who completed sessions this week. Who hasn't touched the app. Who is leading the leaderboard. Visibility that doesn't stop when the bell rings."
    },
    {
      icon: "✓",
      title: "Review proof and award recognition",
      desc: "Students upload proof of their completed sessions. You review it from your dashboard and accept or decline. Accepted proofs award LP instantly and trigger notifications of achievement."
    },
    {
      icon: "👥",
      title: "Create groups and manage your community",
      desc: "Build groups for your year groups, sports teams or clubs. Send announcements, track group LP, manage membership. A group leaderboard shows which team is putting in the most work."
    },
    {
      icon: "🏆",
      title: "Add real world rewards for your students",
      desc: "Partner with local businesses or create your own rewards. Students spend their LP on real things — discounts, experiences, recognition. You control what's available and what it costs."
    },
    {
      icon: "🌍",
      title: "Your students inspire each other on the Hub",
      desc: "Every session completed and shared goes onto the Hub — a TikTok-style feed of real young people doing real things. Your students see peers from their school doing sessions and press Try IRL. Inspiration spreads through your community automatically."
    },
  ]

  const problems = [
    { stat: "5 / day", label: "Young people lost to suicide in England every single day" },
    { stat: "73%", label: "Cut in youth services across the UK since 2010" },
    { stat: "1.9M", label: "Young people on NHS mental health waiting lists" },
    { stat: "54%", label: "Rise in knife crime over the last decade" },
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
          <Link href="/org" style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none", fontWeight: 500 }}>Youth Orgs</Link>
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
          For Institutions
        </p>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 900, letterSpacing: "-3px", lineHeight: 1.0, marginBottom: "40px", maxWidth: "820px" }}>
          Your students need you<br />even when they are<br /><span style={{ color: "#00D4FF" }}>not with you.</span>
        </h1>
        <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.4)", maxWidth: "580px", lineHeight: 1.7, marginBottom: "56px" }}>
          You do everything you can while your students are with you. The moment they leave, you lose visibility. That is when the damage happens — alone, at night, on a screen. IRL closes that gap.
        </p>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="mailto:alieu@joinirl.co.uk" style={{ padding: "14px 28px", background: "white", color: "#080808", fontSize: "14px", fontWeight: 700, textDecoration: "none", borderRadius: "10px" }}>
            Get in Touch
          </a>
          <a href="https://app.joinirl.co.uk" style={{ padding: "14px 28px", border: "1px solid rgba(255,255,255,0.15)", color: "white", fontSize: "14px", fontWeight: 500, textDecoration: "none", borderRadius: "10px" }}>
            See the App
          </a>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      {/* THE PROBLEM */}
      <section style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", color: "rgba(255,255,255,0.3)", marginBottom: "32px", textTransform: "uppercase" }}>The Context</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "64px", maxWidth: "600px" }}>
            The young people in your care are carrying more than you see.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}>
            {problems.map((p, i) => (
              <div key={i} style={{
                background: "#0d0d12", border: "1px solid rgba(255,255,255,0.06)",
                padding: "40px 28px", position: "relative"
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #B400FF, #00D4FF)" }} />
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "36px", fontWeight: 900, color: "white", lineHeight: 1, marginBottom: "12px" }}>{p.stat}</div>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{p.label}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "48px", background: "#0d0d12", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "40px" }}>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "720px" }}>
              You are doing your best. But social media is working against you. It rewards how young people look, not what they do. It builds comparison and pressure that follows your students home every evening. IRL is what happens when the reward system is redesigned.
            </p>
          </div>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      {/* WHAT YOU GET */}
      <section style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", color: "rgba(255,255,255,0.3)", marginBottom: "32px", textTransform: "uppercase" }}>What You Get</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "80px", maxWidth: "600px" }}>
            Built for your students.<br />Designed for your team.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
            {features.map((f, i) => (
              <div key={i} style={{
                background: "#0d0d12", border: "1px solid rgba(255,255,255,0.06)",
                padding: "48px 40px"
              }}>
                <div style={{ fontSize: "32px", marginBottom: "20px" }}>{f.icon}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "20px", fontWeight: 700, color: "white", marginBottom: "14px", lineHeight: 1.2 }}>{f.title}</div>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: 1.8 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      {/* FREE */}
      <section style={{ padding: "120px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "24px" }}>
            Completely free.<br /><span style={{ color: "#00D4FF" }}>No catch.</span>
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)", lineHeight: 1.8, marginBottom: "48px" }}>
            IRL is free for Till we launch our final App. No trial period. No hidden fees. No contract. We are removing every barrier to getting this in front of young people who need it.
          </p>
          <a href="mailto:alieu@joinirl.co.uk" style={{
            display: "inline-block", padding: "16px 40px",
            background: "white", color: "#080808",
            fontSize: "15px", fontWeight: 700, textDecoration: "none", borderRadius: "12px"
          }}>
            Get in Touch — alieu@joinirl.co.uk
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
