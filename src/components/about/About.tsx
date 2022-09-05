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
    <div className='minilaptop:flex w-full items-center justify-center pt-12 minitablet:pt-32 pb-8 bg-primary' id='idAbout' data-aos="zoom-in-down">
        <div className='flex flex-col px-12 minilaptop:w-[30%] minilaptop:px-1 text-justify'>
            <p className='font-noto text-xl text-button font-bold '> <Text tid='aboutWelcome' /> </p> 
            <p className='font-merri text-[22px] minitablet:text-[35px] minilaptop:text-[25px] laptop:text-[29px] desktop:text-[35px] text-secondarytext mt-2 '>
              <span className='border-b-8 border-button'>
                BRYAN
              </span>
            <span className='text-button border-b-8 border-white'> FLORENTINO</span>
            </p>
            <p className='font-noto text-lg text-primarytext mt-2'><Text tid='aboutOc' /></p>

            <p className='font-ptsans text-[14px] text-primarytext mt-2'><Text tid='aboutInfo' /></p> 

            <div className='flex mt-6'>
                <a 
                  href="../../assets/docs/CV Español Bryan Xavier Florentino Montero.pdf"
                  target='_blanck'
                  className='bg-button text-white py-2 px-4 rounded-2xl text-[10px] normalphone:text-[13px]
                  laptop:text-[14px] font-bold hover:bg-white hover:text-button'>
                    <Text tid='aboutSpanishCV' />
                </a>
                <a
                  href="../../assets/docs/CV English Bryan Xavier Florentino Montero.pdf"
                  target='_blanck'
                  className='bg-button text-white pt-2 px-6 rounded-2xl text-[10px] normalphone:text-[13px]
                  laptop:text-[14px] py-2 ml-4 font-bold  hover:bg-white hover:text-button'>
                   <Text tid='aboutEnglishCV' />
                </a>
            </div> 

        </div>
        <div className='flex flex-col justify-center items-center h-[400px] rounded-t-full minilaptop:ml-8 w-full  minilaptop:w-[320px]'>
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