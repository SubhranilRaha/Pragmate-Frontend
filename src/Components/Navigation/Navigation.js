import React, { useState } from 'react'
import Icon from './icon.png'


const Nav = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"About",link:"/"},
      {name:"Partner",link:"/"},
      {name:"Contact",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='fixed top-0 left-0 w-full bg-white'>
      <div className='items-center justify-between py-4 bg-white md:flex md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]  
      text-gray-800'>
        <img src={Icon} className='h-8 mr-2' alt='' />
        <span className='pt-2 mr-1 text-3xl text-orange-600'>
        </span>PRAG<span className='text-orange-600'>MATE</span>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='absolute text-3xl cursor-pointer right-8 top-6 md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='text-xl md:ml-8 md:my-0 my-7'>
              <a href={'#'+link.link} >{link.name}</a>
            </li>
          ))
        }
       <button className="btn2">Log In</button>
       <button className="btn1">Sign In</button>
      </ul>
      </div>
    </div>
  )
}

export default Nav