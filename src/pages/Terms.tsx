import { Link } from 'react-router-dom'
const DARK_LOGO = 'https://vcrgcnavuzisolnhnrdo.supabase.co/storage/v1/object/public/logoclub/darklogo.png'
const LIGHT_LOGO = 'https://vcrgcnavuzisolnhnrdo.supabase.co/storage/v1/object/public/logoclub/lightlogo.png'
const s = { h1:{fontSize:32,fontWeight:700,marginBottom:8}, h2:{fontSize:18,fontWeight:600,marginTop:36,marginBottom:10}, p:{fontSize:15,lineHeight:1.7,color:'#374151',marginBottom:12}, muted:{fontSize:13,color:'#9ca3af',marginBottom:40} }
export default function Terms() {
  return (
    <div style={{fontFamily:'Inter,sans-serif',color:'#1A3742',minHeight:'100vh',display:'flex',flexDirection:'column'}}>
      <header style={{position:'sticky',top:0,zIndex:100,background:'rgba(253,243,227,0.9)',backdropFilter:'blur(8px)',borderBottom:'1px solid rgba(41,158,146,0.12)',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',height:64}}>
        <Link to="/"><img src={DARK_LOGO} alt="SocialClub Map" style={{height:34}}/></Link>
        <Link to="/" style={{color:'#299E92',textDecoration:'none',fontSize:14,fontWeight:500}}>← Zurück</Link>
      </header>
      <main style={{flex:1,maxWidth:800,margin:'0 auto',padding:'60px 32px',width:'100%'}}>
        <h1 style={s.h1}>AGB — Allgemeine Geschäftsbedingungen</h1>
        <p style={s.muted}>Stand: Juni 2026</p>
        <h2 style={s.h2}>§1 Geltungsbereich</h2>
        <p style={s.p}>Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der Plattform SocialClub Map (socialclubmap.de sowie webapp.socialclubmap.de), betrieben von Thomas Petit, Düsseldorf, Deutschland. Mit der Nutzung der Plattform erkennst du diese AGB an.</p>
        <h2 style={s.h2}>§2 Leistungsbeschreibung</h2>
        <p style={s.p}>SocialClub Map stellt eine Informationsplattform bereit, die Nutzern ermöglicht, Cannabis Social Clubs in Deutschland zu finden, Sortendaten einzusehen und ein persönliches Journal zu führen. Die Nutzung der Basisversion ist kostenlos.</p>
        <h2 style={s.h2}>§3 Nutzungsvoraussetzungen</h2>
        <p style={s.p}>Die Plattform darf nur von volljährigen Personen (ab 18 Jahren) genutzt werden. Die Nutzung muss im Einklang mit dem geltenden deutschen Recht erfolgen, insbesondere dem Konsumcannabisgesetz (KCanG).</p>
        <h2 style={s.h2}>§4 Haftungsbeschränkung</h2>
        <p style={s.p}>SocialClub Map übernimmt keine Gewähr für die Vollständigkeit, Richtigkeit oder Aktualität der bereitgestellten Informationen. Eine Haftung für mittelbare Schäden, entgangenen Gewinn oder Datenverlust ist ausgeschlossen, soweit gesetzlich zulässig.</p>
        <h2 style={s.h2}>§5 Geistiges Eigentum</h2>
        <p style={s.p}>Alle Inhalte der Plattform (Texte, Grafiken, Logos, Code) sind urheberrechtlich geschützt. Eine Vervielfältigung oder Weiterverwendung ohne ausdrückliche schriftliche Genehmigung ist untersagt.</p>
        <h2 style={s.h2}>§6 Änderungen</h2>
        <p style={s.p}>Wir behalten uns das Recht vor, diese AGB jederzeit zu ändern. Änderungen werden auf der Plattform veröffentlicht. Die fortgesetzte Nutzung nach Veröffentlichung gilt als Zustimmung.</p>
        <h2 style={s.h2}>§7 Anwendbares Recht</h2>
        <p style={s.p}>Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Düsseldorf.</p>
        <h2 style={s.h2}>§8 Kontakt</h2>
        <p style={s.p}>Bei Fragen zu diesen AGB: <a href="mailto:contact@socialclubmap.de" style={{color:'#299E92'}}>contact@socialclubmap.de</a></p>
      </main>
      <footer style={{background:'#1A3742',color:'white',padding:'32px',textAlign:'center'}}>
        <img src={LIGHT_LOGO} alt="SocialClub Map" style={{height:28,marginBottom:12,display:'block',margin:'0 auto 12px'}}/>
        <p style={{fontSize:12,color:'rgba(255,255,255,0.4)'}}>© Thomas Petit 2026 · SocialClub Map</p>
      </footer>
    </div>
  )
}