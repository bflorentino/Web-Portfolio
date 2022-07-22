import React from 'react'

const About = () => {
  return (
    <div className='flex w-full items-center justify-center mt-10 bg-primary'>
        <div className='flex flex-col w-[30%]'>
            <p className='font-noto text-xl text-primarytext'>Bienvenido, soy</p> 
            <p className='font-merri text-[35px] text-secondarytext mt-2'>BRYAN FLORENTINO</p>
            <p className='font-noto text-lg text-primarytext'>Desarrollador Web</p>

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
            <div className='flex mt-8'>
              <a href="https://github.com/bflorentino"> 
                  <img src='../../assets/images/github.png' alt='' className='w-8 h-8'></img>
              </a>           
              <a href="www.linkedin.com/in/bryan-florentino">
                  <img src='../../assets/images/linkedin.png' alt='' className='w-8 h-8'></img>
              </a>
              <a href="https://t.me/BFlorentin0">
                  <img src='../../assets/images/telegram.png' alt='' className='w-8 h-8'></img>
              </a>
            </div>
        </div>
    </div>
  )
}

export default About