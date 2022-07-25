import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import Text from '../../language/Text';


const Contact = () => {

  useEffect(()=> {
    AOS.init()
    AOS.refresh()
})
  return (
    <>
    <div 
      className='flex flex-col items-center w-full pt-16' 
      id='idContact'
      data-aos="fade-up"
      data-aos-duration="3000"
     >
      <h1 className='text-button text-4xl font-ptsans'><Text tid='contactTitle' /></h1>
      <p className='text-white pb-4'>Email: bryanmontero81@gmail.com</p>
      <h1 className='bg-primary text-white font-ptsans text-lg w-2/5'>
      <Text tid='contactMessage' />
      </h1>
      <form action="" className='flex flex-col items-center bg-primary py-4 text-white w-2/5'>
        <input 
            type="text" 
            name='name' 
            placeholder='Your Name' 
            className='border-2 border-button outline-none bg-none bg-primary w-full py-4 px-2 rounded-lg'  
          />
        <input 
          type="text" 
          name='email' 
          placeholder='Your email'
          className='border-2 border-button outline-none bg-transparent bg-primary w-full mt-5 py-4 px-2 rounded-lg' 
        />
        <textarea 
          placeholder='Type Your Message'
          className='border-2 border-button outline-none bg-none bg-primary w-full mt-5 py-4 px-2 rounded-lg resize-none'
          rows={5} 
        />
          <button className='bg-button text-[#000] text-lg font-ptsans px-6 py-2 rounded-lg mt-4'>
          <Text tid='contactButton' />
          </button>
      </form>
    </div>
    </>
  )
}

export default Contact