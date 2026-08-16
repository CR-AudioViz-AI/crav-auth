// app/layout.tsx — javari-auth
// CR AudioViz AI · EIN: 39-3646201 · May 2026
import type { Metadata } from 'next'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  // 2026-08-16: the icons and share card existed in public/ but nothing pointed
  // at them, so every share rendered as a blank grey rectangle and every tab
  // showed a default globe.
  icons: {
    icon: [{ url: '/favicon.png', sizes: '32x32' }, { url: '/icon-512.png', sizes: '512x512' }],
    apple: '/apple-touch-icon.png',
  },
  // 2026-08-16: no metadataBase meant relative og:image paths resolved against
  // the preview hostname, and no canonical meant a trailing slash, a query
  // string and a preview host all competed for the same content.
  metadataBase: new URL('https://auth.craudiovizai.com'),
  alternates: { canonical: '/' },
  title: 'Javari Auth',
  description: 'Authentication and account management for all Javari apps.',
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
  openGraph: { title: 'Javari Auth', description: 'Authentication and account management for all Javari apps.', type: 'website', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ background: 'rgba(0,0,0,0.88)', padding: '6px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 200 }}>
          <a href="https://craudiovizai.com" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#fff', fontSize: 13, fontWeight: 600 }}>
            <span>🔐</span>
            <span style={{ color: '#1E3A5F' }}>Javari Auth</span>
            <span style={{ color: '#374151', fontSize: 11, marginLeft: 4 }}>· CR AudioViz AI · EIN 39-3646201</span>
          </a>
          <a href="https://craudiovizai.com/auth/signup" style={{ background: '#1E3A5F', color: '#000', borderRadius: 6, padding: '4px 14px', fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>Sign Up Free →</a>
        </div>
        {children}
        <footer style={{ background: '#050608', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '16px 24px', textAlign: 'center' }}>
          <p style={{ color: '#1f2937', fontSize: 11, margin: 0 }}>
            © 2026 CR AudioViz AI, LLC — EIN: 39-3646201 · Fort Myers, Florida · <a href="https://craudiovizai.com" style={{ color: '#374151', textDecoration: 'none' }}>craudiovizai.com</a> · <a href="https://craudiovizai.com/auth/signup" style={{ color: '#1E3A5F', textDecoration: 'none', fontWeight: 600 }}>Sign Up Free</a>
          </p>
        </footer>
      </body>
    </html>
  )
}

// build-trigger:1779368326
