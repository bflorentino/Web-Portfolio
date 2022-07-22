import React from 'react'
import Social from '../about/Social'

const Footer = () => {
  return (
    <div className='bg-[#171717] flex flex-col justify-center items-center py-16 '>
      <p className='text-button text-3xl  font-merri'>BRYAN's Portfolio </p>  
      <p className='text-white font-noto text-xl'> 2022</p>
      <Social />
    </div>
  )
}

export default Footer