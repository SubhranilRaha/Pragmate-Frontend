import React from 'react'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Partners from './Components/Partners/Partner'
import MobNav from './Components/Nav/bottomobnav'
import TopNav from './Components/Nav/dashtopnav'
import HomeNav from './Components/Nav/homenav'



function App() {
  return (
    <div>
     <HomeNav/>
      {/* <TopNav/> */}
      <Home/>
      <Partners/>
      <Contact/>
      <Footer/>
      {/* <MobNav/> */}
    </div>
  )
}

export default App
