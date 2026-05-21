// app/page.tsx — javari-auth · CR AudioViz AI · EIN: 39-3646201 · 2026-05-21
'use client'
export default function AuthPage() {
  return (
    <div style={{ minHeight:'100vh',background:'#080812',color:'#e2e8f0',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'system-ui' }}>
      <div style={{ textAlign:'center',maxWidth:520,padding:'40px 24px' }}>
        <div style={{ fontSize:64,marginBottom:20 }}>🔐</div>
        <h1 style={{ fontSize:32,fontWeight:800,margin:'0 0 16px',color:'#fff' }}>Javari Auth</h1>
        <p style={{ fontSize:16,color:'#9ca3af',lineHeight:1.65,margin:'0 0 32px' }}>
          Authentication and account management for all Javari apps. One account, every tool.
        </p>
        <a href="https://craudiovizai.com/auth/signup"
          style={{ background:'#6366f1',color:'#fff',borderRadius:10,padding:'14px 32px',fontSize:15,fontWeight:700,textDecoration:'none',display:'inline-block',marginBottom:12 }}>
          Create Free Account →
        </a>
        <br />
        <a href="https://craudiovizai.com/auth/signin"
          style={{ color:'#6b7280',fontSize:14,textDecoration:'none' }}>
          Already have an account? Sign in
        </a>
        <p style={{ marginTop:24,fontSize:11,color:'#374151' }}>
          CR AudioViz AI · EIN: 39-3646201 · Fort Myers, Florida · <a href="https://craudiovizai.com" style={{ color:'#6366f1',textDecoration:'none' }}>craudiovizai.com</a>
        </p>
      </div>
    </div>
  )
}
