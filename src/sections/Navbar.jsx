import React, { useState } from 'react'
import { navLinks } from '../Constants'

const Navitems = () =>{
  
  return (
    <ul className='nav-ul'>
    {navLinks.map(({id,href,name}) =>{
      return (
        <li key={id} 
        className='nav-li'>
           <a href={href} className='nav-li_a'>
              {name}
            </a>
          </li>
      )
    })}
  </ul>
  )
}

const Navbar = () => {
  const [isOpen, setisOpen] = useState(true)
  return (
   <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className="max-w-7xl mx-auto">
            <div className='flex justify-between items-center py-5 mx-auto c-space'>
            <a href="/" className='text-neutral-400 font-bold text-xl
             hover:text-white transition-colors'>
              Aryan Jaiswal
            </a>
              <button className='cursor-pointer text-neutral-400
               hover:text-white focus:outline-none sm:hidden flex' 
              onClick={() => setisOpen((prev) => !prev )}
              aria-label='toggle-menu'>
                <img src={isOpen ? "/3d_Protfolio/assets/close.svg" : "/3d_Protfolio/assets/menu.svg"} alt="toggle" 
                className='w-6 h-6'/>
              </button>
              <nav className='sm:flex hidden'>
                    <Navitems/>
              </nav>
            </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <nav className="p-5">
            <Navitems />
          </nav>
      </div>
   </header>
  )
}

export default Navbar