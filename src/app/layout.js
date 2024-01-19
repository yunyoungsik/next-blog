import '../assets/sass/style.scss'

import Header from '../components/layout/Header.js'
import Footer from '../components/layout/Footer.js'
import ColorMode from '@/components/layout/ColorMode'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <ColorMode />
        <Footer />
      </body>
    </html>
  )
}
