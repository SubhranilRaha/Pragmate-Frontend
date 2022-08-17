import React from 'react'
import Nav from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Partners from './Components/Partners/Partner'


function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Partners/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
