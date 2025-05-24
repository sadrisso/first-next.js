import Link from 'next/link'
import React from 'react'

const layout = ({children}) => {

  return (
    <div>
      <nav>
        <ul className='flex justify-center items-center gap-3'>
            <Link href="/contact/me">Me</Link>
            <Link href="/contact/phone">Phone</Link>
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default layout
