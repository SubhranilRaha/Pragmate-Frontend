import React from 'react'

const Button = (props) => {
  return (
    <button className='text-white bg-orange-600 font-[Poppins] py-1 px-4 rounded md:ml-8 hover:bg-green-400 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button