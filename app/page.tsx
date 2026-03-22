"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Home() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function handleWaitlist(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "white" }}>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
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
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          <span style={{ fontSize: "22px", fontWeight: 900, letterSpacing: "-1px", color: "white" }}>IR</span>
          <span style={{
            fontSize: "20px",
            fontWeight: 900,
            padding: "2px 8px",
            background: "#B400FF",
            color: "#00D4FF",
            border: "2px solid #00D4FF",
            letterSpacing: "-1px"
          }}>L</span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <Link href="/institutions" style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "white")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            For Institutions
          </Link>
          <Link href="/about" style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none", fontWeight: 500 }}
            onMouseEnter={e => (e.currentTarget.style.color = "white")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            About
          </Link>
          <Link href="/institutions#demo" style={{
            padding: "10px 20px",
            background: "white",
            color: "#080808",
            fontSize: "13px",
            fontWeight: 700,
            textDecoration: "none",
            borderRadius: "8px",
            transition: "opacity 0.2s"
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Book a Demo
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 48px 80px",
        position: "relative",
        overflow: "hidden"
      }}>

        {/* Subtle glow */}
        <div style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(180,0,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />

        {/* Tag */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 16px",
          borderRadius: "100px",
          border: "1px solid rgba(255,255,255,0.12)",
          marginBottom: "48px",
          fontSize: "12px",
          fontWeight: 600,
          color: "rgba(255,255,255,0.5)",
          letterSpacing: "0.5px"
        }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#B400FF", display: "inline-block" }} />
          NOW ONBOARDING FOUNDING INSTITUTIONS
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: "clamp(52px, 8vw, 100px)",
          fontWeight: 900,
          lineHeight: 1.0,
          letterSpacing: "-3px",
          marginBottom: "32px",
          maxWidth: "900px"
        }}>
          Your Effort<br />
          Finally Means<br />
          <span style={{ color: "#B400FF" }}>Something.</span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: "18px",
          color: "rgba(255,255,255,0.45)",
          maxWidth: "520px",
          lineHeight: 1.7,
          fontWeight: 400,
          marginBottom: "56px"
        }}>
          IRL rewards young people for real world achievement.
          Not likes. Not followers. Not appearance.
          What you actually do.
        </p>

        {/* CTA */}
        <form onSubmit={handleWaitlist} style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
          {!submitted ? (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  padding: "14px 20px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.06)",
                  color: "white",
                  fontSize: "14px",
                  outline: "none",
                  width: "280px"
                }}
              />
              <button type="submit" style={{
                padding: "14px 24px",
                borderRadius: "10px",
                background: "white",
                color: "#080808",
                fontSize: "14px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer"
              }}>
                Join Waitlist
              </button>
            </>
          ) : (
            <div style={{
              padding: "14px 24px",
              borderRadius: "10px",
              border: "1px solid rgba(0,212,255,0.4)",
              color: "#00D4FF",
              fontSize: "14px",
              fontWeight: 600
            }}>
              ✓ You are on the list
            </div>
          )}
        </form>

        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
          Free forever for founding members. No credit card required.
        </p>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      {/* STATS */}
      <section style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", color: "rgba(255,255,255,0.3)", marginBottom: "80px", textAlign: "center" }}>
            THE EVIDENCE
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "64px", textAlign: "center" }}>
            {[
              { val: "1 in 6", label: "young people have a diagnosable mental health condition", src: "NHS, 2023" },
              { val: "52%", label: "of teenagers feel inadequate from social media", src: "APA, 2023" },
              { val: "40%", label: "decline in youth physical activity over a decade", src: "WHO" },
              { val: "72%", label: "of parents say social media harms their child", src: "Ofcom, 2024" },
            ].map((s, i) => (
              <div key={i}>
                <p style={{
                  fontSize: "52px",
                  fontWeight: 900,
                  letterSpacing: "-2px",
                  color: i === 0 || i === 2 ? "#B400FF" : "#00D4FF",
                  marginBottom: "12px",
                  lineHeight: 1
                }}>
                  {s.val}
                </p>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginBottom: "8px" }}>
                  {s.label}
                </p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)" }}>{s.src}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      {/* PROBLEM */}
      <section style={{ padding: "160px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ maxWidth: "640px", marginBottom: "100px" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", color: "rgba(255,255,255,0.3)", marginBottom: "32px" }}>
              THE PROBLEM
            </p>
            <h2 style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "32px" }}>
              The problem isn't<br />the phone.
            </h2>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)", lineHeight: 1.8 }}>
              It's what the phone rewards. Social media was built to reward appearance, popularity and vanity. Not effort. Not achievement. Not real contribution.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}>
            {[
              { label: "Appearance over effort" },
              { label: "Popularity over achievement" },
              { label: "Vanity over contribution" },
              { label: "Comparison over progress" },
            ].map((p, i) => (
              <div key={i} style={{
                padding: "48px",
                background: "rgba(255,255,255,0.02)",
                borderTop: "1px solid rgba(255,255,255,0.06)"
              }}>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", marginBottom: "12px", letterSpacing: "1px" }}>
                  0{i + 1}
                </p>
                <p style={{ fontSize: "20px", fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>
                  {p.label}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: "2px",
            padding: "48px",
            background: "rgba(180,0,255,0.06)",
            borderTop: "1px solid rgba(180,0,255,0.2)"
          }}>
            <p style={{ fontSize: "20px", fontWeight: 600, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: "700px" }}>
              Banning phones doesn't fix this. Awareness campaigns don't fix this. The only thing that fixes this is{" "}
              <span style={{ color: "white", fontWeight: 700 }}>redesigning what gets rewarded.</span>
            </p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      {/* SOLUTION */}
      <section style={{ padding: "160px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ maxWidth: "640px", marginBottom: "100px" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", color: "rgba(255,255,255,0.3)", marginBottom: "32px" }}>
              THE SOLUTION
            </p>
            <h2 style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "32px" }}>
              We rewired<br />the reward system.
            </h2>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)", lineHeight: 1.8 }}>
              IRL — In Real Life — rewards young people for what they actually do. Complete real world challenges. Earn LinkPoints. Climb the leaderboard. Unlock real rewards.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}>
            {[
              { icon: "⚡", name: "Sessions", desc: "Complete real world challenges set by your institution. Sport. Study. Creative. Community." },
              { icon: "🏆", name: "Leaderboard", desc: "Rank against your school and every institution on the platform. Based on effort only." },
              { icon: "💎", name: "Rewards", desc: "Earn LP and unlock achievements. From First Step all the way to IRL Immortal." },
              { icon: "👥", name: "Groups", desc: "Represent your institution as a team. Compete against every other school on the platform." },
            ].map((f, i) => (
              <div key={i} style={{
                padding: "48px 32px",
                background: "rgba(255,255,255,0.02)",
                borderTop: "1px solid rgba(255,255,255,0.06)"
              }}>
                <p style={{ fontSize: "28px", marginBottom: "20px" }}>{f.icon}</p>
                <p style={{ fontSize: "16px", fontWeight: 700, color: "white", marginBottom: "12px" }}>{f.name}</p>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      {/* VISION */}
      <section style={{ padding: "160px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ maxWidth: "640px", marginBottom: "100px" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", color: "rgba(255,255,255,0.3)", marginBottom: "32px" }}>
              THE VISION
            </p>
            <h2 style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "32px" }}>
              This is just<br />the beginning.
            </h2>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)", lineHeight: 1.8 }}>
              The platform is Phase 1. What comes next will change the relationship between young people and the world around them.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>
            {[
              {
                phase: "Phase 1",
                name: "IRL Platform",
                status: "Live Now",
                desc: "Sessions, leaderboards, rewards and groups. Your students can start earning LP and competing today.",
                active: true
              },
              {
                phase: "Phase 2",
                name: "IRL Pass",
                status: "Coming Soon",
                desc: "Your effort becomes currency. Open IRL, check your LP and walk into a partner store — and pay with your LinkPoints.",
                active: false
              },
              {
                phase: "Phase 3",
                name: "IRL Hub",
                status: "The Future",
                desc: "Physical spaces. Sport pitches. Study lounges. Music studios. Designed to replace screen time with real experience.",
                active: false
              },
            ].map((v, i) => (
              <div key={i} style={{
                padding: "56px 40px",
                background: v.active ? "rgba(180,0,255,0.06)" : "rgba(255,255,255,0.02)",
                borderTop: `1px solid ${v.active ? "rgba(180,0,255,0.3)" : "rgba(255,255,255,0.06)"}`,
                position: "relative"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px" }}>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", letterSpacing: "1px" }}>{v.phase}</p>
                  <p style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "100px",
                    background: v.active ? "rgba(180,0,255,0.2)" : "rgba(255,255,255,0.06)",
                    color: v.active ? "#B400FF" : "rgba(255,255,255,0.3)",
                    letterSpacing: "0.5px"
                  }}>
                    {v.status}
                  </p>
                </div>
                <p style={{ fontSize: "24px", fontWeight: 800, color: "white", marginBottom: "16px", letterSpacing: "-0.5px" }}>
                  {v.name}
                </p>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: "160px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontSize: "clamp(48px, 7vw, 88px)",
            fontWeight: 900,
            letterSpacing: "-3px",
            lineHeight: 1.0,
            marginBottom: "32px"
          }}>
            Be part of this<br />
            <span style={{ color: "#B400FF" }}>from day one.</span>
          </h2>
          <p style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.4)",
            maxWidth: "480px",
            margin: "0 auto 56px",
            lineHeight: 1.7
          }}>
            Every LP earned now carries forward forever. Join the waitlist before everyone else arrives.
          </p>
          <form onSubmit={handleWaitlist} style={{ display: "flex", gap: "12px", justifyContent: "center", marginBottom: "16px" }}>
            {!submitted ? (
              <>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    padding: "14px 20px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.06)",
                    color: "white",
                    fontSize: "14px",
                    outline: "none",
                    width: "280px"
                  }}
                />
                <button type="submit" style={{
                  padding: "14px 24px",
                  borderRadius: "10px",
                  background: "white",
                  color: "#080808",
                  fontSize: "14px",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer"
                }}>
                  Join Waitlist — Free
                </button>
              </>
            ) : (
              <div style={{
                padding: "14px 24px",
                borderRadius: "10px",
                border: "1px solid rgba(0,212,255,0.4)",
                color: "#00D4FF",
                fontSize: "14px",
                fontWeight: 600
              }}>
                ✓ You are on the list
              </div>
            )}
          </form>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>No spam. Ever. Just your invite when we launch.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "48px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          <span style={{ fontSize: "18px", fontWeight: 900, letterSpacing: "-1px", color: "white" }}>IR</span>
          <span style={{
            fontSize: "16px",
            fontWeight: 900,
            padding: "2px 6px",
            background: "#B400FF",
            color: "#00D4FF",
            border: "2px solid #00D4FF"
          }}>L</span>
        </div>
        <div style={{ display: "flex", gap: "32px" }}>
          <Link href="/institutions" style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px", textDecoration: "none" }}>Institutions</Link>
          <Link href="/about" style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px", textDecoration: "none" }}>About</Link>
        </div>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>© 2025 IRL Connect Ltd</p>
      </footer>

    </div>
  )
}