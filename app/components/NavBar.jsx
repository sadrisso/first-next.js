import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav>
          <div className="flex gap-4 justify-center m-5">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </div>
        </nav>
    </div>
  )
}

export default NavBar
