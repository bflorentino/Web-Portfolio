import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import Text from '../../language/Text'
import Social from './Social'

const About = () => {
  
  useEffect(()=> {
    AOS.init()
    AOS.refresh()
})

  return (
    <div className='flex w-full items-center justify-center pt-32 pb-8 bg-primary' id='idAbout' data-aos="zoom-in-down">
        <div className='flex flex-col w-[30%]'>
            <p className='font-noto text-xl text-button font-bold '> <Text tid='aboutWelcome' /> </p> 
            <p className='font-merri text-[35px] text-secondarytext mt-2 '>
              <span className='border-b-8 border-button'>
                BRYAN
              </span>
            <span className='text-button border-b-8 border-white'> FLORENTINO</span>
            </p>
            <p className='font-noto text-lg text-primarytext mt-2'><Text tid='aboutOc' /></p>

            <p className='font-ptsans text-[14px] text-primarytext mt-2'><Text tid='aboutInfo' /></p> 

            <div className='mt-6'>
                <a 
                  href="../../assets/docs/Curriculum vitae  español.pdf"
                  target='_blanck'
                  className='bg-button text-white py-2 px-4 rounded-2xl text-[14px] font-bold hover:bg-white hover:text-button'>
                    <Text tid='aboutSpanishCV' />
                </a>
                <a
                  href="../../assets/docs/Curriculum vitae  ingles.pdf"
                  target='_blanck'
                  className='bg-button text-white pt-2 px-6 rounded-2xl text-[14px] py-2 ml-4 font-bold  hover:bg-white hover:text-button'>
                   <Text tid='aboutEnglishCV' />
                </a>
            </div> 

        </div>
        <div className='flex flex-col justify-center items-center h-[400px] rounded-t-full ml-8 w-[320px]'>
            <img 
               src="../../assets/images/me-to-pt.png" 
               alt=""
               className='w-[310px] h-[310px] rounded-full  bg-primary mt-8' 
            />
           <Social />
        </div>
    </div>
  )
}

export default About