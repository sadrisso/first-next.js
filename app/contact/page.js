import React from 'react'

export const metadata = {
  title: "Contact",
  description: "You can reach me via email or phone number"
}
const ContactPage = () => {
  // throw new Error("There was a huge error..!")
  
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <h2>This is contact page</h2>
    </div>
  )
}

export default ContactPage
