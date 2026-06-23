import { useState } from 'react'
import { Link } from 'react-router-dom'
const DARK_LOGO = 'https://vcrgcnavuzisolnhnrdo.supabase.co/storage/v1/object/public/logoclub/darklogo.png'
const LIGHT_LOGO = 'https://vcrgcnavuzisolnhnrdo.supabase.co/storage/v1/object/public/logoclub/lightlogo.png'
const WEBAPP = 'https://webapp.socialclubmap.de'
const features = [
  { emoji: '🗺️', title: 'Map', desc: 'Find cannabis social clubs on the interactive map.', href: WEBAPP + '/clubs' },
  { emoji: '🌿', title: 'Strains', desc: 'Discover and compare hundreds of cannabis strains.', href: WEBAPP + '/strains' },
  { emoji: '📔', title: 'Journal', desc: 'Keep your personal cannabis diary.', href: WEBAPP + '/journal' },
  { emoji: '📖', title: 'Guide', desc: 'Learn everything about laws, consumption and cannabis.', href: WEBAPP + '/guide' },
  { emoji: '📰', title: 'News', desc: 'Stay informed on laws and club news.', href: WEBAPP + '/news' },
  { emoji: '🎉', title: 'Events', desc: 'Discover local cannabis events in your city.', href: WEBAPP + '/events' },
]
const faqs = [
  { q: 'How do I find cannabis clubs near me?', a: 'Our interactive map shows all registered cannabis clubs in your area. Allow location access or enter your city to discover clubs nearby.' },
  { q: 'What information is available about strains?', a: 'We offer detailed strain information including type, THC/CBD content, effects and user reviews. All data is verified and regularly updated.' },
  { q: 'Is the news region-specific?', a: "Yes, you'll receive local and national updates for your region, including legal changes and club announcements." },
  { q: 'Is there a cost to using the app?', a: 'Core app features are free. Premium features such as detailed analytics and strain tracking are available through our subscription.' },
]
export default function HomeEN() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <div style={{fontFamily:'Inter,sans-serif',color:'#1A3742',background:'#FDF3E3',minHeight:'100vh'}}>
      <header style={{position:'sticky',top:0,zIndex:100,background:'rgba(253,243,227,0.9)',backdropFilter:'blur(8px)',borderBottom:'1px solid rgba(41,158,146,0.12)',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',height:64}}>
        <Link to="/en"><img src={DARK_LOGO} alt="SocialClub Map" style={{height:36}}/></Link>
        <nav style={{display:'flex',alignItems:'center',gap:28}}>
          <a href="#features" style={{color:'#1A3742',textDecoration:'none',fontSize:15,fontWeight:500}}>Features</a>
          <a href="#faq" style={{color:'#1A3742',textDecoration:'none',fontSize:15,fontWeight:500}}>FAQ</a>
          <Link to="/blog" style={{color:'#1A3742',textDecoration:'none',fontSize:15,fontWeight:500}}>Blog</Link>
          <Link to="/" style={{color:'#6b7280',textDecoration:'none',fontSize:13,fontWeight:500,border:'1px solid #d1d5db',borderRadius:20,padding:'3px 10px'}}>DE</Link>
          <a href={WEBAPP} style={{background:'#299E92',color:'white',textDecoration:'none',padding:'9px 22px',borderRadius:24,fontWeight:600,fontSize:15}}>Web App →</a>
        </nav>
      </header>
      <section style={{background:'linear-gradient(to bottom,#faf2e6,#fbf3e6,#f9f2e7)',padding:'80px 32px'}}>
        <div style={{maxWidth:1100,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',gap:60,flexWrap:'wrap'}}>
          <div style={{maxWidth:520,flex:'1 1 320px'}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(41,158,146,0.1)',color:'#299E92',borderRadius:24,padding:'6px 16px',fontSize:14,fontWeight:500,marginBottom:24}}>🌿 The Cannabis Community App</div>
            <h1 style={{fontSize:'clamp(30px,4.5vw,52px)',fontWeight:700,lineHeight:1.15,marginBottom:20,letterSpacing:'-0.5px'}}>Find Cannabis Social Clubs near you</h1>
            <p style={{fontSize:18,color:'#6b7280',lineHeight:1.65,marginBottom:36}}>The interactive map for the German cannabis community. Discover clubs, explore strains and keep your personal journal.</p>
            <div style={{display:'flex',alignItems:'center',gap:16,flexWrap:'wrap'}}>
              <a href={WEBAPP} style={{background:'#299E92',color:'white',textDecoration:'none',padding:'14px 28px',borderRadius:28,fontWeight:600,fontSize:16,boxShadow:'0 4px 20px rgba(41,158,146,0.3)',display:'inline-block'}}>Launch web app →</a>
            </div>
          </div>
          <svg width="260" height="520" viewBox="0 0 260 520" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
            <rect x="8" y="8" width="244" height="504" rx="38" fill="#1A3742"/><rect x="18" y="18" width="224" height="484" rx="30" fill="#0f2830"/><rect x="22" y="22" width="216" height="476" rx="26" fill="#132f3a"/>
            <rect x="85" y="28" width="90" height="14" rx="7" fill="#1A3742"/>
            <text x="130" y="100" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="Inter,sans-serif">Clubs nearby</text>
            <text x="130" y="116" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="10" fontFamily="Inter,sans-serif">Berlin · 12 clubs</text>
            <rect x="22" y="128" width="216" height="256" fill="#1e3d4a"/>
            <circle cx="82" cy="185" r="11" fill="#299E92" opacity="0.9"/><circle cx="166" cy="238" r="11" fill="#299E92" opacity="0.9"/><circle cx="72" cy="295" r="11" fill="#299E92" opacity="0.9"/><circle cx="145" cy="328" r="11" fill="#299E92" opacity="0.9"/><circle cx="192" cy="263" r="11" fill="#299E92" opacity="0.9"/>
            <rect x="28" y="392" width="204" height="80" rx="14" fill="rgba(255,255,255,0.09)"/>
            <circle cx="50" cy="426" r="13" fill="#299E92"/>
            <text x="72" y="420" fill="white" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">Green Berlin Club</text>
            <text x="72" y="436" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="Inter,sans-serif">1.2 km · accepting members</text>
          </svg>
        </div>
      </section>
      <section id="features" style={{background:'white',padding:'80px 32px'}}>
        <div style={{maxWidth:1000,margin:'0 auto',textAlign:'center'}}>
          <h2 style={{fontSize:32,fontWeight:700,marginBottom:12}}>Everything in one app</h2>
          <p style={{fontSize:17,color:'#6b7280',marginBottom:48}}>Six features that bring the cannabis community closer to you.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:20}}>
            {features.map(f => (
              <a key={f.title} href={f.href} style={{textDecoration:'none',display:'block',borderRadius:16,border:'1px solid #e5e7eb',padding:24,textAlign:'left',background:'white'}}>
                <div style={{width:48,height:48,borderRadius:'50%',background:'rgba(41,158,146,0.1)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,marginBottom:14}}>{f.emoji}</div>
                <h3 style={{fontWeight:600,fontSize:17,marginBottom:8,color:'#1A3742'}}>{f.title}</h3>
                <p style={{fontSize:14,color:'#6b7280',marginBottom:14,lineHeight:1.55}}>{f.desc}</p>
                <span style={{color:'#299E92',fontSize:14,fontWeight:500}}>Explore →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="faq" style={{background:'#fdf3e3',padding:'80px 32px'}}>
        <div style={{maxWidth:750,margin:'0 auto'}}>
          <h2 style={{fontSize:32,fontWeight:700,marginBottom:12,textAlign:'center'}}>Frequently asked questions</h2>
          <p style={{fontSize:16,color:'#6b7280',marginBottom:48,textAlign:'center'}}>Everything you need to know about SocialClub Map.</p>
          {faqs.map((faq,i) => (
            <div key={i} style={{borderBottom:'1px solid rgba(26,55,66,0.1)'}}>
              <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 0',background:'none',border:'none',cursor:'pointer',textAlign:'left',fontSize:16,fontWeight:600,color:'#1A3742'}}>
                {faq.q}<span style={{fontSize:18,color:openFaq===i?'#299E92':'#9ca3af',transform:openFaq===i?'rotate(180deg)':'none',transition:'transform 0.2s',flexShrink:0,marginLeft:16}}>▾</span>
              </button>
              {openFaq===i && <p style={{paddingBottom:20,color:'#6b7280',lineHeight:1.65,margin:0}}>{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>
      <footer style={{background:'#1A3742',color:'white',padding:'60px 32px 36px'}}>
        <div style={{maxWidth:1000,margin:'0 auto'}}>
          <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:40,marginBottom:40}}>
            <div><img src={LIGHT_LOGO} alt="SocialClub Map" style={{height:34,marginBottom:14}}/><p style={{fontSize:14,color:'rgba(255,255,255,0.6)',lineHeight:1.6}}>The Cannabis Community App for Germany.</p></div>
            <div style={{display:'flex',flexDirection:'column',gap:14}}>
              {[['Terms','/terms'],['Privacy','/privacy'],['Blog','/blog'],['Contact','/contact']].map(([l,t]) => <Link key={t} to={t} style={{color:'rgba(255,255,255,0.6)',textDecoration:'none',fontSize:14}}>{l}</Link>)}
            </div>
            <div><a href={WEBAPP} style={{display:'inline-block',border:'1px solid rgba(255,255,255,0.25)',color:'white',textDecoration:'none',padding:'10px 24px',borderRadius:24,fontSize:14,fontWeight:500}}>Web App →</a></div>
          </div>
          <div style={{borderTop:'1px solid rgba(255,255,255,0.1)',paddingTop:24,textAlign:'center'}}><p style={{fontSize:12,color:'rgba(255,255,255,0.4)'}}>© Thomas Petit 2026 · SocialClub Map</p></div>
        </div>
      </footer>
    </div>
  )
}