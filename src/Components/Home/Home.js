import React from 'react'
import Hero from './Hero'
import Partner from './Partner'
import Footer from './Footer'
import Homenav from './homenav'

function Home() {
  return (
    <div>
        <Homenav />
        <Hero />
        <Partner />
        <Footer />
    </div>
  )
}

export default Home