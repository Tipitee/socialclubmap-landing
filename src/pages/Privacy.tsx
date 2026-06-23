import { Link } from 'react-router-dom'
const DARK_LOGO = 'https://vcrgcnavuzisolnhnrdo.supabase.co/storage/v1/object/public/logoclub/darklogo.png'
const LIGHT_LOGO = 'https://vcrgcnavuzisolnhnrdo.supabase.co/storage/v1/object/public/logoclub/lightlogo.png'
const s = { h1:{fontSize:32,fontWeight:700,marginBottom:8}, h2:{fontSize:18,fontWeight:600,marginTop:36,marginBottom:10}, p:{fontSize:15,lineHeight:1.7,color:'#374151',marginBottom:12}, muted:{fontSize:13,color:'#9ca3af',marginBottom:40} }
export default function Privacy() {
  return (
    <div style={{fontFamily:'Inter,sans-serif',color:'#1A3742',minHeight:'100vh',display:'flex',flexDirection:'column'}}>
      <header style={{position:'sticky',top:0,zIndex:100,background:'rgba(253,243,227,0.9)',backdropFilter:'blur(8px)',borderBottom:'1px solid rgba(41,158,146,0.12)',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',height:64}}>
        <Link to="/"><img src={DARK_LOGO} alt="SocialClub Map" style={{height:34}}/></Link>
        <Link to="/" style={{color:'#299E92',textDecoration:'none',fontSize:14,fontWeight:500}}>← Zurück</Link>
      </header>
      <main style={{flex:1,maxWidth:800,margin:'0 auto',padding:'60px 32px',width:'100%'}}>
        <h1 style={s.h1}>Datenschutzerklärung</h1>
        <p style={s.muted}>Stand: Juni 2026</p>
        <h2 style={s.h2}>1. Verantwortlicher</h2>
        <p style={s.p}>Thomas Petit · SocialClub Map · contact@socialclubmap.de · Düsseldorf, Deutschland</p>
        <h2 style={s.h2}>2. Erhobene Daten</h2>
        <p style={s.p}>Beim Besuch unserer Website werden technisch notwendige Daten erhoben: IP-Adresse (anonymisiert), Browsertyp, Betriebssystem, Referrer-URL und Zugriffszeit. Diese Daten werden ausschließlich zur Sicherstellung des technischen Betriebs verarbeitet.</p>
        <p style={s.p}>Bei der Registrierung für die Web-App erheben wir E-Mail-Adresse und Passwort (verschlüsselt). Diese Daten werden in Supabase (EU-Server) gespeichert und nicht an Dritte weitergegeben.</p>
        <h2 style={s.h2}>3. Rechtsgrundlage</h2>
        <p style={s.p}>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Plattform).</p>
        <h2 style={s.h2}>4. Cookies</h2>
        <p style={s.p}>Wir verwenden ausschließlich technisch notwendige Cookies (Session-Token für eingeloggte Nutzer). Es werden keine Tracking- oder Marketing-Cookies eingesetzt.</p>
        <h2 style={s.h2}>5. Drittanbieter</h2>
        <p style={s.p}><strong>Supabase:</strong> Datenbankdienst (Server in der EU). Datenschutzerklärung: supabase.com/privacy<br/><strong>Cloudflare:</strong> CDN & DNS (EU-Serverstandorte). Datenschutzerklärung: cloudflare.com/privacypolicy</p>
        <h2 style={s.h2}>6. Deine Rechte (DSGVO Art. 15-22)</h2>
        <p style={s.p}>Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Zur Ausübung dieser Rechte wende dich an: <a href="mailto:contact@socialclubmap.de" style={{color:'#299E92'}}>contact@socialclubmap.de</a></p>
        <p style={s.p}>Du hast zudem das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen: Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.</p>
        <h2 style={s.h2}>7. Datenlöschung</h2>
        <p style={s.p}>Personenbezogene Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt. Account-Daten werden auf Anfrage innerhalb von 30 Tagen gelöscht.</p>
      </main>
      <footer style={{background:'#1A3742',color:'white',padding:'32px',textAlign:'center'}}>
        <img src={LIGHT_LOGO} alt="SocialClub Map" style={{height:28,marginBottom:12,display:'block',margin:'0 auto 12px'}}/>
        <p style={{fontSize:12,color:'rgba(255,255,255,0.4)'}}>© Thomas Petit 2026 · SocialClub Map</p>
      </footer>
    </div>
  )
}