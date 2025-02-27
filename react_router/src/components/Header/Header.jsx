import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <header className='shadow sticky top-0 z-50'>
    <nav className='bg-[#2E2E2E] border-gray-600 px-4 lg:px-6 py-2.5'>
    <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
      <Link to='/' className='text-white text-2xl flex items-center font-bold font-sans '>
      PortFolio
      </Link>
      <div className='flex items-center lg:order-2'>
        <Link
         to="#"
         className='text-gray-50 hover:bg-amber-700 focus:ring-4 focus:ring-amber-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
        >
          Log in
        </Link>
        <Link
            to="#"
            className="text-gray-50 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        >
            Get started
        </Link>
      </div>
      <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
        >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <NavLink
                    to="/"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                            ${isActive ? "text-[#e789e2]" : "text-gray-50" } lg:hover:bg-transparent lg:border-0 hover:text-[#AA98A9] lg:p-0`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/about"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                            ${isActive ? "text-[#e789e2]" : "text-gray-50" } lg:hover:bg-transparent lg:border-0 hover:text-[#AA98A9] lg:p-0`
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/projects"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                            ${isActive ? "text-[#e789e2]" : "text-gray-50" } lg:hover:bg-transparent lg:border-0 hover:text-[#AA98A9] lg:p-0`
                        }
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/github"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                            ${isActive ? "text-[#e789e2]" : "text-gray-50" } lg:hover:bg-transparent lg:border-0 hover:text-[#AA98A9] lg:p-0`
                        }
                    >
                        Github
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/user"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                            ${isActive ? "text-[#e789e2]" : "text-gray-50" } lg:hover:bg-transparent lg:border-0 hover:text-[#AA98A9] lg:p-0`
                        }
                    >
                        User
                    </NavLink>
                </li>
                
                
            </ul>
        </div>
    </div>
    </nav>
    </header>
    </>
  )
}

export default Header