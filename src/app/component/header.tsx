import Link from 'next/link'
import React from 'react'

function Header() {
  return (
  <div className='nav-bar'>
      <div className='white-space'>
      <img src='/LogoIcon.png'></img>
      <p>white space</p>
      </div>
      
      <div className='header-list'>
      <ul>
        <li className='link'><Link href="">Products</Link></li>
        <li className='link'><Link href="">Solution</Link></li>
        <li className='link'><Link href="">Reseouces</Link></li>
        <li className='link'><Link href="">Pricing</Link></li>
      </ul>
      </div>
      
      <div className='button-login'>
        <button>Login</button>
      </div>
  </div>
  )
}                     

export default Header