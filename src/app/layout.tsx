import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'

import './global.css'
import { Layout } from '@/components/Layout'

const roboto = Roboto({
  weight: ['300', '500', '700', '900'],
  subsets: ['latin', 'latin-ext'],
})

export const metadata = {
  title: 'CEFER',
  description: 'CEFER - Centro Educação Física Esporte e Recreação',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
