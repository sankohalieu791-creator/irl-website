"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <main style={{ background: "#050508", minHeight: "100vh", color: "white", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>

      {/* GOOGLE FONTS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .syne { font-family: 'Syne', sans-serif; }
        .gradient-text {
          background: linear-gradient(135deg, #00D4FF, #B400FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .btn-primary {
          background: linear-gradient(135deg, #B400FF, #00D4FF);
          color: white;
          padding: 16px 36px;
          border-radius: 100px;
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 8px 40px rgba(180,0,255,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
          border: none;
          cursor: pointer;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 50px rgba(180,0,255,0.5); }
        .btn-secondary {
          background: rgba(255,255,255,0.05);
          color: white;
          border: 1px solid rgba(255,255,255,0.07);
          padding: 16px 36px;
          border-radius: 100px;
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s;
          cursor: pointer;
        }
        .btn-secondary:hover { background: rgba(255,255,255,0.08); }
        .feature-card {
          background: #0d0d12;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 36px 32px;
          transition: border-color 0.3s, transform 0.3s;
        }
        .feature-card:hover { border-color: rgba(0,212,255,0.3); transform: translateY(-4px); }
        .step { display: flex; gap: 28px; align-items: flex-start; padding: 28px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .step:last-child { border-bottom: none; }
        .step-num {
          width: 52px; height: 52px; border-radius: 50%;
          background: linear-gradient(135deg, #B400FF, #00D4FF);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif; font-size: 17px; font-weight: 800; color: white;
          flex-shrink: 0;
        }
        .who-card {
          background: #0d0d12;
          border-radius: 24px;
          padding: 40px 36px;
        }
        .check-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .check-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.5; }
        .check-list li::before { content: '✓'; font-weight: 700; flex-shrink: 0; margin-top: 1px; }
        nav a { color: rgba(255,255,255,0.5); text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
        nav a:hover { color: white; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hero-h1 { font-size: 52px !important; }
          .two-col { grid-template-columns: 1fr !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .stats-row { flex-wrap: wrap !important; }
          .stat-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07) !important; }
          .cta-banner { padding: 48px 28px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "20px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(5,5,8,0.9)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)"
      }}>
        <a href="/" style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, textDecoration: "none", display: "flex", alignItems: "center", gap: 2 }}>
          <span style={{ color: "white" }}>IR</span>
          <span style={{ background: "#B400FF", color: "#00D4FF", padding: "2px 8px", border: "2px solid #00D4FF", fontSize: 18, fontWeight: 800, fontFamily: "'Syne',sans-serif" }}>L</span>
        </a>
       <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
  <nav style={{ display: "flex", gap: "32px", alignItems: "center", background: "none", border: "none", padding: 0 }}>
    <a href="/about" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>About</a>
    <a href="/institutions" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Institutions</a>
    <a href="/org" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Youth Orgs</a>
  </nav>
  <a href="https://app.joinirl.co.uk" className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>
    Launch App ⚡
  </a>
</div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "120px 24px 80px", position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(180,0,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0,212,255,0.08) 0%, transparent 50%)"
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 860 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)",
            borderRadius: 100, padding: "6px 16px", fontSize: 12, fontWeight: 600,
            color: "#00D4FF", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 32
          }}>
            ⚡ The world's first real life achievement platform
          </div>
          <h1 className="syne hero-h1" style={{ fontSize: 88, fontWeight: 800, color: "white", letterSpacing: -2, marginBottom: 8, lineHeight: 1.05 }}>
            Real Life.<br /><span className="gradient-text">Real Rewards.</span>
          </h1>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.45)", maxWidth: 580, margin: "0 auto 48px", fontWeight: 300, lineHeight: 1.65 }}>
            IRL rewards young people for doing real things in the real world — not for how they look online. Built for a generation that deserves better than a like button.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.joinirl.co.uk" className="btn-primary">⚡ Try the App Free</a>
            <a href="mailto:alieu@joinirl.co.uk" className="btn-secondary">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-row" style={{
        padding: "48px 24px", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)",
        display: "flex", justifyContent: "center"
      }}>
        {[
          { num: "5", color: "#00D4FF", label: "Young lives lost to suicide every day in the UK" },
          { num: "73%", color: "white", label: "Cut in UK youth services since 2010" },
          { num: "54%", color: "#B400FF", label: "Rise in knife crime over the last decade" },
          { num: "1.9M", color: "#00D4FF", label: "Young people on NHS mental health waiting lists" },
        ].map((s, i) => (
          <div key={i} className="stat-item" style={{
            flex: 1, minWidth: 160, maxWidth: 220, textAlign: "center", padding: "0 32px",
            borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none"
          }}>
            <div className="syne" style={{ fontSize: 38, fontWeight: 800, color: s.color, lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* THE PROBLEM */}
      <section id="problem" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#00D4FF", marginBottom: 16 }}>The Problem</p>
          <h2 className="syne" style={{ fontSize: 48, fontWeight: 800, color: "white", letterSpacing: -1, marginBottom: 20, lineHeight: 1.1 }}>
            This is happening everywhere.<br />Right now.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.4)", maxWidth: 640, lineHeight: 1.8, marginBottom: 60 }}>
            Since 2012 — the year smartphones became the default for teenagers — every mental health metric for young people has moved in the wrong direction. The problem is not the phone. It is what the phone rewards.
          </p>

          <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
            {[
              { flag: "🇬🇧", country: "United Kingdom", stat: "5 / day", desc: "Suicide is the leading cause of death for people aged 5 to 35. 1.9 million young people on NHS mental health waiting lists. Youth services cut by 73%." },
              { flag: "🇺🇸", country: "United States", stat: "National Crisis", desc: "The US Surgeon General declared youth mental health a national emergency. Teen depression has tripled since 2007. Suicide is the second leading cause of death for ages 10 to 34." },
              { flag: "🇦🇺", country: "Australia", stat: "75%", desc: "75% of mental health conditions emerge before age 25. Suicide is the leading cause of death for 15 to 44 year olds. Australia banned social media for under 16s in 2024." },
              { flag: "🌍", country: "Global", stat: "Every 40s", desc: "One person dies by suicide every 40 seconds worldwide. Young people are the fastest growing demographic. Governments everywhere are out of ideas." },
            ].map((c, i) => (
              <div key={i} style={{ background: "#0d0d12", border: "1px solid rgba(255,255,255,0.07)", padding: "40px 28px", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #B400FF, #00D4FF)" }} />
                <div style={{ fontSize: 30, marginBottom: 14 }}>{c.flag}</div>
                <div className="syne" style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#00D4FF", marginBottom: 10 }}>{c.country}</div>
                <div className="syne" style={{ fontSize: 30, fontWeight: 800, color: "white", lineHeight: 1, marginBottom: 10 }}>{c.stat}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, background: "#0d0d12", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "40px 36px" }}>
            <h3 className="syne" style={{ fontSize: 22, fontWeight: 800, color: "white", marginBottom: 14 }}>Social media is not the problem. What it rewards is.</h3>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, maxWidth: 700 }}>
              Platforms built an economy of comparison — where a young person's worth is measured by likes, followers and how they look against everyone else's highlight reel. They gave young people a currency they can never win with. And they took away the one thing that actually builds identity, resilience and belonging. Real life.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}