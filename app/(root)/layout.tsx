import Topbar from '@/components/shared/Topbar'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Bottombar from '@/components/shared/Bottombar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VassalloCon',
  description: 'The Best Carpenter in the GTA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Topbar />
        <main className="bg-">
          <section>
            <div className="w-full">{children}</div>
          </section>
        </main>
        <Bottombar />
      </body>
    </html>
  );
}
