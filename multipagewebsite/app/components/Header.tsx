import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
    <header className="w-full block sm:flex items-center
    justify-around bg-black text-xl text-center sm:text-white py-3 " >
      <h2 className='text-2xl font-bold my-auto '>Welcome to My Multi-Page Website</h2>
      <nav> 
        <ul className='flex gap-3 justify-center items-center'>
          <li className='hover:text-green-500 hover:border-b-orange-500 hover:border-b-2 '><Link href="/about">About</Link></li>
          <li className='hover:text-green-500 hover:border-b-orange-500 hover:border-b-2'><Link href="/our-services">Services</Link></li>
          <li className='hover:text-green-500 hover:border-b-orange-500 hover:border-b-2'><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header