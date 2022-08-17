import React from 'react'
import icon from './logo.png'

function Mobnav() {
    const list= document.querySelectorAll('.list');
    function activeLink(){
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item)=>
    item.addEventListener('click',activeLink));


    
  return (  
    <div className='flex flex-col justify-between h-screen '>
        <div id="upnavbar" className="flex flex-row justify-between shadow-sm">
                    <a href="/" className='flex items-center'>
                    <img src={icon} alt="" className='py-2 pl-2 h-14 '/>
                    <div className="">
                    <span className="text-2xl font-popss font-cus text-txt">PRAG</span>
                    <span className="font-[Poppins] text-cus font-extrabold text-first">MATE</span>
                    <span className="font-[Poppins] text-4xl text-txt">.</span>
                    </div>
                    </a>           
            <div className='p-2 text-2xl text-first'>
                <i class="uil uil-moon mr-2 text-3xl"></i>
                <i class="uil uil-user-circle mr-2 text-3xl"></i>    
            </div>
        </div>
        <div id="bottomnavbar" className="navigation">
        <ul className="flex items-center justify-around pt-3 pb-2 bg-white shadow-inner rounded-t-xl h-14 font-pops -z-20">
             
            <li  className="z-10 list active">
                <a href="#" className="navstyle group">
                    <span className="mx-6 ">
                    <i class="uil uil-home icon"></i>
                    </span>
                    <span className="text">HOME
                    </span>
                </a>
            </li>

            <li  className="list">
                <a href="#"  className="navstyle group">
                    <span className="mx-6">
                    <i class="uil uil-diary-alt icon"></i>
                    </span>  
                    <span className="text">PATH
                    </span>
                </a>
            </li>

            <li className="list">
                <a href="#"  className="navstyle group">
                    <span className="mx-6 ">
                    <i class="uil uil-missed-call icon open:bg-black"></i>
                    </span>
                    <span className="text" open>STAFF
                    </span>
                </a>
            </li>

            <li  className="list">
                <a href="#"  className="navstyle group">
                    <span className="mx-6 ">
                    <i class="uil uil-envelope icon"></i>
                    </span>
                    <span className="text">NEWS
                    </span>
                </a>
            </li>

            <li className="list" >
                <a href="#"  className="navstyle group">
                    <span className="mx-6"></span>
                    <i class="uil uil-elipsis-double-v-alt text-2xl icon"></i>
                    <span className="text">MORE
                    </span>
                </a> 
            </li>  
            <li className="hidden"></li>
        </ul>
        </div>
    </div>
  )
}

export default Mobnav