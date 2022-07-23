import React from 'react'
import Social from './Social'

const About = () => {
  return (
    <div className='flex w-full items-center justify-center pt-32 pb-8 bg-primary' id='idAbout'>
        <div className='flex flex-col w-[30%]'>
            <p className='font-noto text-xl text-button font-bold '>Bienvenido, soy</p> 
            <p className='font-merri text-[35px] text-secondarytext mt-2 '>
              <span className='border-b-8 border-button'>
                BRYAN
              </span>
            <span className='text-button border-b-8 border-white'> FLORENTINO</span>
            </p>
            <p className='font-noto text-lg text-primarytext mt-2'>Desarrollador Web</p>

            <p className='font-ptsans text-[14px] text-primarytext mt-2'>Mi nombre es Bryan Xavier Florentino Montero y soy de la República Dominicana. Soy un joven entusiasta de la programación con gran pasión por esta área y me dedico al desarrollo web. Siempre dispuesto a aprender nuevas cosas, amante de la tecnología y de todo lo que conlleva el desarrollo web. Este es mi portafolio personal en el cual podrás ver información sobre las tecnologías que manejo, proyectos que he realizado y métodos para contactarme. También te dejo mi CV tanto en español como en inglés, por si tienes interés en verlos. ¡Espero que disfrutes viendo mis proyectos!</p> 

            <div className='mt-6'>
                <a 
                  href="../../assets/docs/Curriculum vitae  español.pdf"
                  target='_blanck'
                  className='bg-button text-white py-2 px-4 rounded-2xl text-[14px] font-bold hover:bg-white hover:text-button'>
                    CV ESPAÑOL
                </a>
                <a
                  href="../../assets/docs/Curriculum vitae  ingles.pdf"
                  target='_blanck'
                  className='bg-button text-white pt-2 px-6 rounded-2xl text-[14px] py-2 ml-4 font-bold  hover:bg-white hover:text-button'>
                    CV INGLÉS
                </a>
            </div> 

        </div>
        <div className='flex flex-col justify-center items-center h-[400px] rounded-t-full ml-8 w-[250px]'>
            <img 
               src="../../assets/images/me2.png" 
               alt=""
               className='w-56 h-56 rounded-full shadow-2xl bg-primary mt-8' 
            />
           <Social />
        </div>
    </div>
  )
}

export default About