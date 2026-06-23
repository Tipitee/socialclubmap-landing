import { useState } from 'react'
import { Link } from 'react-router-dom'

const DARK_LOGO = 'https://vcrgcnavuzisolnhnrdo.supabase.co/storage/v1/object/public/logoclub/darklogo.png'
const LIGHT_LOGO = 'https://vcrgcnavuzisolnhnrdo.supabase.co/storage/v1/object/public/logoclub/lightlogo.png'
const WEBAPP = 'https://webapp.socialclubmap.de'

const features = [
  { emoji: '🗺️', title: 'Karte', desc: 'Finde Cannabis Social Clubs auf der interaktiven Karte.', href: WEBAPP + '/clubs' },
  { emoji: '🌿', title: 'Sorten', desc: 'Entdecke und vergleiche hunderte Cannabis-Sorten.', href: WEBAPP + '/strains' },
  { emoji: '📔', title: 'Journal', desc: 'Führe dein persönliches Cannabis-Tagebuch.', href: WEBAPP + '/journal' },
  { emoji: '📖', title: 'Guide', desc: 'Lerne alles über Gesetze, Konsum und Cannabis.', href: WEBAPP + '/guide' },
  { emoji: '📰', title: 'News', desc: 'Bleib über Gesetze und Club-News informiert.', href: WEBAPP + '/news' },
  { emoji: '🎉', title: 'Events', desc: 'Entdecke lokale Cannabis-Events in deiner Stadt.', href: WEBAPP + '/events' },
]

const faqs = [
  { q: 'Wie finde ich Cannabis-Clubs in meiner Nähe?', a: 'Unsere interaktive Karte zeigt alle registrierten Cannabis-Clubs in deiner Umgebung. Erlaube einfach den Standortzugriff oder gib deine Stadt ein, um Clubs in der Nähe zu entdecken.' },
  { q: 'Welche Informationen sind über Sorten verfügbar?', a: 'Wir bieten detaillierte Sorteninformationen einschließlich Typ, THC/CBD-Gehalt, Wirkungen und Nutzerbewertungen. Alle Daten werden verifiziert und regelmäßig aktualisiert.' },
  { q: 'Sind die Nachrichten regionsspezifisch?', a: 'Ja, du erhältst lokale und nationale Updates für deine Region, einschließlich rechtlicher Änderungen und Club-Ankündigungen.' },
  { q: 'Gibt es Kosten für die Nutzung der App?', a: 'Die grundlegenden App-Funktionen sind kostenlos. Premium-Funktionen wie detaillierte Analysen und Sortenverfolgung sind über unser Abonnement verfügbar.' },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#1A3742', background: '#FDF3E3', minHeight: '100vh' }}>

      {/* Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(253,243,227,0.9)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(41,158,146,0.12)', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <Link to="/"><img src={DARK_LOGO} alt="SocialClub Map" style={{ height: 36, width: 'auto' }} /></Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <a href="#funktionen" style={{ color: '#1A3742', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>Funktionen</a>
          <a href="#faq" style={{ color: '#1A3742', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>FAQ</a>
          <Link to="/blog" style={{ color: '#1A3742', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>Blog</Link>
          <Link to="/en" style={{ color: '#6b7280', textDecoration: 'none', fontSize: 13, fontWeight: 500, border: '1px solid #d1d5db', borderRadius: 20, padding: '3px 10px' }}>EN</Link>
          <a href={WEBAPP} style={{ background: '#299E92', color: 'white', textDecoration: 'none', padding: '9px 22px', borderRadius: 24, fontWeight: 600, fontSize: 15 }}>Web Version →</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(to bottom, #faf2e6, #fbf3e6, #f9f2e7)', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 60, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 520, flex: '1 1 320px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(41,158,146,0.1)', color: '#299E92', borderRadius: 24, padding: '6px 16px', fontSize: 14, fontWeight: 500, marginBottom: 24 }}>🌿 Die Cannabis Community App</div>
            <h1 style={{ fontSize: 'clamp(30px,4.5vw,52px)', fontWeight: 700, lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.5px' }}>Finde Cannabis Social Clubs in deiner Nähe</h1>
            <p style={{ fontSize: 18, color: '#6b7280', lineHeight: 1.65, marginBottom: 36 }}>Die interaktive Karte für die deutsche Cannabis Community. Entdecke Clubs, erforsche Sorten und führe dein persönliches Journal.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a href={WEBAPP} style={{ background: '#299E92', color: 'white', textDecoration: 'none', padding: '14px 28px', borderRadius: 28, fontWeight: 600, fontSize: 16, boxShadow: '0 4px 20px rgba(41,158,146,0.3)', display: 'inline-block' }}>Web Version starten →</a>
              <div>
                <div style={{ display: 'flex', gap: 10, marginBottom: 4 }}>
                  <StoreBadge label="App Store" sub="Bald im" icon="🍎" />
                  <StoreBadge label="Google Play" sub="Bald auf" icon="▶" />
                </div>
                <span style={{ fontSize: 11, color: '#9ca3af' }}>Bald verfügbar</span>
              </div>
            </div>
          </div>
          <PhoneMockup />
        </div>
      </section>

      {/* Features */}
      <section id="funktionen" style={{ background: 'white', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 12 }}>Alles in einer App</h2>
          <p style={{ fontSize: 17, color: '#6b7280', marginBottom: 48 }}>Sechs Features, die dir die Cannabis Community näherbringen.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {features.map(f => (
              <a key={f.title} href={f.href} style={{ textDecoration: 'none', display: 'block', borderRadius: 16, border: '1px solid #e5e7eb', padding: 24, textAlign: 'left', background: 'white', transition: 'box-shadow 0.2s' }}
                onMouseOver={e => (e.currentTarget.style.boxShadow='0 8px 30px rgba(0,0,0,0.08)')}
                onMouseOut={e => (e.currentTarget.style.boxShadow='none')}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(41,158,146,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 14 }}>{f.emoji}</div>
                <h3 style={{ fontWeight: 600, fontSize: 17, marginBottom: 8, color: '#1A3742' }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 14, lineHeight: 1.55 }}>{f.desc}</p>
                <span style={{ color: '#299E92', fontSize: 14, fontWeight: 500 }}>Entdecken →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#fdf3e3', padding: '80px 32px' }}>
        <div style={{ maxWidth: 750, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 12, textAlign: 'center' }}>Häufige Fragen</h2>
          <p style={{ fontSize: 16, color: '#6b7280', marginBottom: 48, textAlign: 'center' }}>Alles, was du über SocialClub Map wissen musst.</p>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(26,55,66,0.1)' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: 16, fontWeight: 600, color: '#1A3742' }}>
                {faq.q}
                <span style={{ fontSize: 18, color: openFaq === i ? '#299E92' : '#9ca3af', transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0, marginLeft: 16 }}>▾</span>
              </button>
              {openFaq === i && <p style={{ paddingBottom: 20, color: '#6b7280', lineHeight: 1.65, margin: 0 }}>{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1A3742', color: 'white', padding: '60px 32px 36px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40, marginBottom: 40 }}>
            <div>
              <img src={LIGHT_LOGO} alt="SocialClub Map" style={{ height: 34, marginBottom: 14 }} />
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Die Cannabis Community App für Deutschland.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[['AGB','/terms'],['Datenschutz','/privacy'],['Blog','/blog'],['Kontakt','/contact']].map(([label, to]) => (
                <Link key={to} to={to} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14 }}>{label}</Link>
              ))}
            </div>
            <div>
              <a href={WEBAPP} style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.25)', color: 'white', textDecoration: 'none', padding: '10px 24px', borderRadius: 24, fontSize: 14, fontWeight: 500 }}>Web Version →</a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, textAlign: 'center' }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>© Thomas Petit 2026 · SocialClub Map</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function StoreBadge({ label, sub, icon }: { label: string; sub: string; icon: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#1A3742', color: 'white', borderRadius: 10, padding: '8px 14px', opacity: 0.5, cursor: 'not-allowed', userSelect: 'none' }}>
      <span style={{ fontSize: 18 }}>{icon}</span>
      <div><div style={{ fontSize: 9, opacity: 0.8 }}>{sub}</div><div style={{ fontSize: 13, fontWeight: 600 }}>{label}</div></div>
    </div>
  )
}

function PhoneMockup() {
  return (
    <svg width="260" height="520" viewBox="0 0 260 520" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <rect x="8" y="8" width="244" height="504" rx="38" fill="#1A3742" />
      <rect x="18" y="18" width="224" height="484" rx="30" fill="#0f2830" />
      <rect x="22" y="22" width="216" height="476" rx="26" fill="#132f3a" />
      <rect x="85" y="28" width="90" height="14" rx="7" fill="#1A3742" />
      <text x="130" y="76" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="Inter,sans-serif">9:41</text>
      <text x="130" y="100" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="Inter,sans-serif">Clubs in der Nähe</text>
      <text x="130" y="116" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="10" fontFamily="Inter,sans-serif">Berlin · 12 Clubs</text>
      <rect x="22" y="128" width="216" height="256" fill="#1e3d4a" />
      <line x1="55" y1="128" x2="70" y2="384" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <line x1="110" y1="128" x2="95" y2="384" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <line x1="165" y1="128" x2="180" y2="384" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <line x1="22" y1="200" x2="238" y2="210" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      <line x1="22" y1="270" x2="238" y2="262" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      <line x1="22" y1="340" x2="238" y2="332" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      <circle cx="82" cy="185" r="11" fill="#299E92" opacity="0.9"/>
      <text x="82" y="189" textAnchor="middle" fill="white" fontSize="10">●</text>
      <circle cx="166" cy="238" r="11" fill="#299E92" opacity="0.9"/>
      <text x="166" y="242" textAnchor="middle" fill="white" fontSize="10">●</text>
      <circle cx="72" cy="295" r="11" fill="#299E92" opacity="0.9"/>
      <text x="72" y="299" textAnchor="middle" fill="white" fontSize="10">●</text>
      <circle cx="145" cy="328" r="11" fill="#299E92" opacity="0.9"/>
      <text x="145" y="332" textAnchor="middle" fill="white" fontSize="10">●</text>
      <circle cx="192" cy="263" r="11" fill="#299E92" opacity="0.9"/>
      <text x="192" y="267" textAnchor="middle" fill="white" fontSize="10">●</text>
      <rect x="28" y="392" width="204" height="80" rx="14" fill="rgba(255,255,255,0.09)" />
      <circle cx="50" cy="426" r="13" fill="#299E92"/>
      <text x="50" y="431" textAnchor="middle" fill="white" fontSize="11">🌿</text>
      <text x="72" y="420" fill="white" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">Green Berlin Club</text>
      <text x="72" y="436" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="Inter,sans-serif">1.2 km · Mitglieder offen</text>
    </svg>
  )
}