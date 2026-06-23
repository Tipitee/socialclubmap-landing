import { useState } from 'react'
import { Link } from 'react-router-dom'
const DARK_LOGO = 'https://vcrgcnavuzisolnhnrdo.supabase.co/storage/v1/object/public/logoclub/darklogo.png'
const LIGHT_LOGO = 'https://vcrgcnavuzisolnhnrdo.supabase.co/storage/v1/object/public/logoclub/lightlogo.png'
// TODO: Replace with your Formspree form ID — sign up at formspree.io
const FORMSPREE = 'https://formspree.io/f/xpwzknpj'
export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    const resp = await fetch(FORMSPREE, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
    setLoading(false)
    if (resp.ok) { setSent(true); form.reset() }
  }
  const inp = { width:'100%', padding:'12px 16px', border:'1px solid #d1d5db', borderRadius:10, fontSize:15, fontFamily:'Inter,sans-serif', color:'#1A3742', background:'white', outline:'none', boxSizing:'border-box' as const }
  return (
    <div style={{fontFamily:'Inter,sans-serif',color:'#1A3742',minHeight:'100vh',display:'flex',flexDirection:'column'}}>
      <header style={{position:'sticky',top:0,zIndex:100,background:'rgba(253,243,227,0.9)',backdropFilter:'blur(8px)',borderBottom:'1px solid rgba(41,158,146,0.12)',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',height:64}}>
        <Link to="/"><img src={DARK_LOGO} alt="SocialClub Map" style={{height:34}}/></Link>
        <Link to="/" style={{color:'#299E92',textDecoration:'none',fontSize:14,fontWeight:500}}>← Zurück</Link>
      </header>
      <main style={{flex:1,maxWidth:640,margin:'0 auto',padding:'60px 32px',width:'100%'}}>
        <h1 style={{fontSize:32,fontWeight:700,marginBottom:8}}>Kontakt</h1>
        <p style={{fontSize:15,color:'#6b7280',marginBottom:40}}>Fragen, Feedback oder Kooperationsanfragen? Schreib uns.</p>
        <div style={{display:'flex',alignItems:'center',gap:10,background:'rgba(41,158,146,0.08)',border:'1px solid rgba(41,158,146,0.2)',borderRadius:12,padding:'14px 18px',marginBottom:36}}>
          <span style={{fontSize:18}}>✉️</span>
          <a href="mailto:contact@socialclubmap.de" style={{color:'#299E92',textDecoration:'none',fontWeight:500,fontSize:15}}>contact@socialclubmap.de</a>
        </div>
        {sent ? (
          <div style={{textAlign:'center',padding:'48px 0'}}>
            <div style={{fontSize:48,marginBottom:16}}>✅</div>
            <h2 style={{fontSize:22,fontWeight:600,marginBottom:8}}>Nachricht gesendet!</h2>
            <p style={{color:'#6b7280'}}>Wir melden uns innerhalb von 48 Stunden.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:16}}>
            <div>
              <label style={{display:'block',fontSize:14,fontWeight:500,marginBottom:6}}>Name</label>
              <input name="name" type="text" required placeholder="Dein Name" style={inp} />
            </div>
            <div>
              <label style={{display:'block',fontSize:14,fontWeight:500,marginBottom:6}}>E-Mail</label>
              <input name="email" type="email" required placeholder="deine@email.de" style={inp} />
            </div>
            <div>
              <label style={{display:'block',fontSize:14,fontWeight:500,marginBottom:6}}>Nachricht</label>
              <textarea name="message" required placeholder="Wie können wir helfen?" rows={5} style={{...inp,resize:'vertical'}} />
            </div>
            <button type="submit" disabled={loading} style={{background:'#299E92',color:'white',border:'none',padding:'14px 28px',borderRadius:24,fontWeight:600,fontSize:16,cursor:loading?'wait':'pointer',opacity:loading?0.7:1,alignSelf:'flex-start'}}>
              {loading ? 'Wird gesendet…' : 'Nachricht senden →'}
            </button>
          </form>
        )}
      </main>
      <footer style={{background:'#1A3742',color:'white',padding:'32px',textAlign:'center'}}>
        <img src={LIGHT_LOGO} alt="SocialClub Map" style={{height:28,marginBottom:12,display:'block',margin:'0 auto 12px'}}/>
        <p style={{fontSize:12,color:'rgba(255,255,255,0.4)'}}>© Thomas Petit 2026 · SocialClub Map</p>
      </footer>
    </div>
  )
}