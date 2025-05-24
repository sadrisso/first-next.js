import React from 'react'

const ServiceDetailsPage = ({params}) => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      {`Service details ${params?.id}`}
    </div>
  )
}
 
export default ServiceDetailsPage
