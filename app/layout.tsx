import './globals.css'
export const metadata = { title: 'SiteForge | Premium Web Agency', description: 'Impactful web design' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  )
}

