import React from 'react'

function Home() {
  return (
    <div> 
    <section class="text-gray-600 body-font px-10">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Lorem ipsum dolor sit amet.
      </h1>
      <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dignissimos exercitationem aperiam consequuntur, rerum aliquam amet accusamus itaque ipsam sapiente quas, a alias fugit! Ipsam optio ut voluptates cupiditate dolorum?</p>
      <div class="flex justify-center">
        <button class="btn1">Sign In</button>
        <button class="btn2">Log In</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded hidden" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Home