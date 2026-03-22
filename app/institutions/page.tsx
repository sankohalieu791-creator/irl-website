"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Institutions() {
  const [scrolled, setScrolled] = useState(false)
  const [name, setName] = useState("")
  const [institution, setInstitution] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

 async function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
  if (!name || !institution || !email) return

  try {
    const response = await fetch("https://formspree.io/f/mlgpyewk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        institution,
        role,
        email,
        message: `Demo request from ${name} at ${institution}. Role: ${role}. Email: ${email}`,
      }),
    })

    const data = await response.json()

    if (response.ok) {
      setSubmitted(true)
      setName("")
      setInstitution("")
      setRole("")
      setEmail("")
    } else {
      alert(data?.error || "Something went wrong. Please try again.")
    }
  } catch (error) {
    alert("Network error. Please try again.")
  }
}

  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "white" }}>

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
          <Link href="/about" style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none", fontWeight: 500 }}>About</Link>
          <a href="#demo" style={{ padding: "10px 20px", background: "white", color: "#080808", fontSize: "13px", fontWeight: 700, textDecoration: "none", borderRadius: "8px" }}>
            Book a Demo
          </a>
        </div>
      </nav>

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
          FOR INSTITUTIONS
        </p>
        <h1 style={{
          fontSize: "clamp(48px, 7vw, 88px)",
          fontWeight: 900,
          letterSpacing: "-3px",
          lineHeight: 1.0,
          marginBottom: "40px",
          maxWidth: "800px"
        }}>
          Give your students<br />
          a reason to show up<br />
          <span style={{ color: "#B400FF" }}>every single day.</span>
        </h1>
        <p style={{
          fontSize: "20px",
          color: "rgba(255,255,255,0.4)",
          maxWidth: "560px",
          lineHeight: 1.7,
          marginBottom: "56px"
        }}>
          IRL gives institutions a platform that drives student engagement, builds confidence and directly tackles comparison culture — completely free to pilot.
        </p>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="#demo" style={{
            padding: "14px 28px",
            background: "white",
            color: "#080808",
            fontSize: "14px",
            fontWeight: 700,
            textDecoration: "none",
            borderRadius: "10px"
          }}>
            Book a Free Demo
          </a>
          <Link href="/" style={{
            padding: "14px 28px",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "white",
            fontSize: "14px",
            fontWeight: 500,
            textDecoration: "none",
            borderRadius: "10px"
          }}>
            Learn More
          </Link>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      <section style={{ padding: "160px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", color: "rgba(255,255,255,0.3)", marginBottom: "32px" }}>
            WHAT YOU GAIN
          </p>
          <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "100px", maxWidth: "600px" }}>
            Built for your students.<br />Designed for your team.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}>
            {[
              { title: "Full visibility", desc: "Real time data on every student's sessions completed, LP earned and leaderboard position. No guessing. No assumptions." },
              { title: "You set the challenges", desc: "Design sessions that match your curriculum, your sport programme and your community. IRL adapts to you — not the other way around." },
              { title: "Measurable engagement", desc: "Track participation rates, active students and institutional rankings. Data you can actually use and report on." },
              { title: "Your students feel seen", desc: "Every piece of effort gets recognised. The quiet hardworking student finally has a platform that reflects their real value." },
              { title: "Full admin control", desc: "Create sessions, review proof submissions, manage groups and generate invite codes — all from one dashboard." },
              { title: "Priority partner status", desc: "Founding institutions receive permanent recognition as the schools, colleges and universities that started this movement." },
            ].map((b, i) => (
              <div key={i} style={{
                padding: "56px 48px",
                background: "rgba(255,255,255,0.02)",
                borderTop: "1px solid rgba(255,255,255,0.06)"
              }}>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", letterSpacing: "1px", marginBottom: "20px" }}>0{i + 1}</p>
                <p style={{ fontSize: "20px", fontWeight: 700, color: "white", marginBottom: "16px" }}>{b.title}</p>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)", lineHeight: 1.8 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      <section style={{ padding: "160px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", color: "rgba(255,255,255,0.3)", marginBottom: "32px" }}>
            HOW IT WORKS
          </p>
          <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "100px", maxWidth: "600px" }}>
            Simple for your team.<br />Powerful for your students.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {[
              { num: "01", title: "You create a session", desc: "Your admin posts a real world challenge — a sport activity, study task, creative project or community event. You set the LP value." },
              { num: "02", title: "Students attempt it", desc: "Students complete the challenge in real life and record their proof live through the app. No uploading from camera roll. Every submission is original." },
              { num: "03", title: "You review and approve", desc: "Your admin reviews the submission. Accept it — LP is instantly awarded. Your student climbs the leaderboard." },
              { num: "04", title: "Your institution competes", desc: "Every LP your students earn contributes to your institution's total. Your school vs every other school on the platform." },
            ].map((s, i) => (
              <div key={i} style={{
                display: "flex",
                gap: "80px",
                padding: "56px 0",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                alignItems: "flex-start"
              }}>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.2)", letterSpacing: "1px", minWidth: "32px" }}>{s.num}</p>
                <div>
                  <p style={{ fontSize: "22px", fontWeight: 700, color: "white", marginBottom: "12px" }}>{s.title}</p>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: "600px" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 48px" }} />

      <section style={{ padding: "160px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "120px", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", color: "rgba(255,255,255,0.3)", marginBottom: "32px" }}>
                THE OFFER
              </p>
              <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "40px" }}>
                Free to pilot.<br />No risk.<br />
                <span style={{ color: "#B400FF" }}>No commitment.</span>
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.4)", lineHeight: 1.8, marginBottom: "48px" }}>
                We are currently onboarding founding institutions.one admin from your team and 30 days to show you what IRL can do.
              </p>
            </div>

            <div id="demo" style={{
              padding: "56px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px"
            }}>
              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { placeholder: "Your name", value: name, set: setName, type: "text" },
                    { placeholder: "Institution name", value: institution, set: setInstitution, type: "text" },
                    { placeholder: "Your role", value: role, set: setRole, type: "text" },
                    { placeholder: "Your email", value: email, set: setEmail, type: "email" },
                  ].map((f, i) => (
                    <input
                      key={i}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={f.value}
                      onChange={e => f.set(e.target.value)}
                      style={{
                        padding: "14px 18px",
                        borderRadius: "10px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        background: "rgba(255,255,255,0.05)",
                        color: "white"
                      }}
                    />
                  ))}
                  <button type="submit">Book Free Demo</button>
                </form>
              ) : (
                <p>Thanks {name}</p>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}