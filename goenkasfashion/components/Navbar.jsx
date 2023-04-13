import Link from 'next/link'
import React from 'react'

function Navbar() {
  const burgerClickEvent = () => {
    const icon = document.getElementById("menuicon")
    const menuitemsdiv = document.getElementById("menuitemsdiv")
    icon.name === "Menu"
      ?
      (icon.name = "close",
        menuitemsdiv.classList.remove('hidden'))
      :
      (icon.name = "Menu",
        menuitemsdiv.classList.add('hidden'))
  }
  const burgerMenuClose = () => {
    const icon = document.getElementById("menuicon")
    const menuitemsdiv = document.getElementById("menuitemsdiv")
    icon.name === "Menu"
      ?
      ""
      :
      (icon.name = "Menu",
        menuitemsdiv.classList.add('hidden'))
  }
  return (
      <nav className=''>
        <div className=''>
          {/* nav header */}
        </div>
        <div className='flex p-4 justify-between items-center lg:justify-evenly bg-[url(https://i.pinimg.com/originals/f2/04/0e/f2040e0d96f811e2b2b1c17893c68d85.jpg)]'>
          {/* nav bottom */}
          <div className='' >
            <img className='w-32 sm:w-40 md:w-48' src="http://goenkasfashion.com/wp-content/uploads/2022/12/cropped-goenkasfnl2-1024x376.png" />
          </div>
          <div id='menuitemsdiv' className='hidden lg:block bg-white lg:bg-transparent w-full absolute lg:static sm:top-20 top-[70px] md:top-24 left-0 z-50'>
            {/* nav items */}
            <ul className='lg:flex  h-full justify-center p-5 text-2xl lg:text-xl  items-center text-gray-700 font-semibold'>
              <li className="lg:mx-3 w-full lg:w-auto my-3 border-b-2 lg:border-none "><Link href={"/"} onClick={burgerMenuClose} >Home</Link></li>
              <li className="lg:mx-3 w-full lg:w-auto my-3 border-b-2 lg:border-none "><Link href={"/"} onClick={burgerMenuClose} >About</Link></li>
              <li className="lg:mx-3 w-full lg:w-auto my-3 border-b-2 lg:border-none "><Link href={"/"} onClick={burgerMenuClose} >Branches</Link></li>
              <li className="lg:mx-3 w-full lg:w-auto my-3 border-b-2 lg:border-none "><Link href={"/"} onClick={burgerMenuClose} >Women's Clothing</Link></li>
              <li className="lg:mx-3 w-full lg:w-auto my-3 border-b-2 lg:border-none "><Link href={"/"} onClick={burgerMenuClose} >Girls</Link></li>
              <li className="lg:mx-3 w-full lg:w-auto my-3 border-b-2 lg:border-none "><Link href={"/"} onClick={burgerMenuClose} >Mens</Link></li>
              <li className="lg:mx-3 w-full lg:w-auto my-3 border-b-2 lg:border-none "><Link href={"/"} onClick={burgerMenuClose} >Boys</Link></li>
              <li className="lg:mx-3 w-full lg:w-auto my-3 border-b-2 lg:border-none "><Link href={"/"} onClick={burgerMenuClose} >New Born</Link></li>
              <li className="lg:mx-3 w-full lg:w-auto my-3 border-b-2 lg:border-none "><Link href={"/"} onClick={burgerMenuClose} >Contact Us</Link></li>
            </ul>
          </div>
          <div className='flex justify-evenly '>
            {/* hamburger */}
            <div className='grid mr-2 justify-center items-center text-gray-700 font-semibold text-4xl cursor-pointer lg:hidden' onClick={burgerClickEvent}>
              <ion-icon id="menuicon" name="menu"></ion-icon>
            </div>
            <div className='grid justify-center items-center text-gray-700 font-semibold text-4xl lg:text-5xl cursor-pointer' >
              {/* icon search */}
              <ion-icon className="" name="search-circle-outline"></ion-icon>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar