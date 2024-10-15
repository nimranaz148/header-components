import React from 'react'
import cssStyle from "./header.module.css"
import Link from 'next/link'



const header = () => {
  return (
    <header className={cssStyle.header}>

    <nav className={cssStyle.nav}>

      
      
      <ul className={cssStyle.navlinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
  )
}

export default header
