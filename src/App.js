import React from 'react'
import Header from './page/header.js'
import Footer from './page/footer.js'
import MenuUtama from './page/MenuUtama'
import TentangKami from './page/MenuTentangKami'
import Kontak from './page/MenuKontak'
import MenuMakanan from './page/MenuMakanan'

export default function App() {
  return (
    <div>
      <Header />
      <MenuUtama />
      <MenuMakanan />
      <TentangKami />
      <Kontak />
      <Footer />
    </div>
  )
}
