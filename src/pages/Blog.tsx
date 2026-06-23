import { Link } from 'react-router-dom'
const DARK_LOGO = 'https://vcrgcnavuzisolnhnrdo.supabase.co/storage/v1/object/public/logoclub/darklogo.png'
const LIGHT_LOGO = 'https://vcrgcnavuzisolnhnrdo.supabase.co/storage/v1/object/public/logoclub/lightlogo.png'
export default function Blog() {
  return (
    <div style={{fontFamily:'Inter,sans-serif',color:'#1A3742',minHeight:'100vh',display:'flex',flexDirection:'column'}}>
      <header style={{position:'sticky',top:0,zIndex:100,background:'rgba(253,243,227,0.9)',backdropFilter:'blur(8px)',borderBottom:'1px solid rgba(41,158,146,0.12)',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',height:64}}>
        <Link to="/"><img src={DARK_LOGO} alt="SocialClub Map" style={{height:34}}/></Link>
        <Link to="/" style={{color:'#299E92',textDecoration:'none',fontSize:14,fontWeight:500}}>← Zurück</Link>
      </header>
      <main style={{flex:1,maxWidth:860,margin:'0 auto',padding:'60px 32px',width:'100%'}}>
        <h1 style={{fontSize:32,fontWeight:700,marginBottom:8}}>Blog</h1>
        <p style={{fontSize:15,color:'#6b7280',marginBottom:48}}>Neuigkeiten rund um Cannabis Social Clubs, Gesetze und die Community.</p>
        <article style={{border:'1px solid #e5e7eb',borderRadius:16,padding:32,marginBottom:24,background:'white'}}>
          <div style={{display:'inline-block',background:'rgba(41,158,146,0.1)',color:'#299E92',borderRadius:20,padding:'4px 12px',fontSize:12,fontWeight:500,marginBottom:16}}>Neuigkeiten</div>
          <h2 style={{fontSize:22,fontWeight:700,marginBottom:12}}>SocialClub Map ist live — die Cannabis Community App für Deutschland</h2>
          <p style={{fontSize:13,color:'#9ca3af',marginBottom:16}}>23. Juni 2026 · Thomas Petit</p>
          <p style={{fontSize:15,lineHeight:1.7,color:'#374151',marginBottom:16}}>Wir freuen uns, den offiziellen Launch von SocialClub Map bekannt zu geben. Die Plattform hilft Cannabis-Konsumenten in Deutschland, registrierte Cannabis Social Clubs in ihrer Nähe zu finden, Sorten zu entdecken und ein persönliches Journal zu führen.</p>
          <p style={{fontSize:15,lineHeight:1.7,color:'#374151',marginBottom:16}}>Seit dem Inkrafttreten des Konsumcannabisgesetzes (KCanG) im April 2024 sind Cannabis Social Clubs in Deutschland legal. SocialClub Map macht es einfach, diese Clubs zu finden und mit der Community in Kontakt zu treten.</p>
          <p style={{fontSize:15,lineHeight:1.7,color:'#374151'}}>Die Web-App ist ab sofort unter <a href="https://webapp.socialclubmap.de" style={{color:'#299E92'}}>webapp.socialclubmap.de</a> erreichbar. Mobile Apps für iOS und Android sind in Entwicklung.</p>
        </article>
        <div style={{textAlign:'center',padding:'40px 0',color:'#9ca3af'}}>
          <p style={{fontSize:14}}>Weitere Artikel folgen in Kürze. 🌿</p>
        </div>
      </main>
      <footer style={{background:'#1A3742',color:'white',padding:'32px',textAlign:'center'}}>
        <img src={LIGHT_LOGO} alt="SocialClub Map" style={{height:28,marginBottom:12,display:'block',margin:'0 auto 12px'}}/>
        <p style={{fontSize:12,color:'rgba(255,255,255,0.4)'}}>© Thomas Petit 2026 · SocialClub Map</p>
      </footer>
    </div>
  )
}