import React from 'react'

const Nav = () => {
  return (
        <nav className='w-full flex justify-between bg-primary fixed z-10'>
            <div className='bg-button ml-16 p-2 h-[70px] rounded-b-full'>
                <p className='text-white text-2xl font-bold'>Bryan</p>
            </div>
            <ul className='flex mt-4'>
                <li className='mr-8 '>
                    <a href="#idAbout" className='font-merri text-primarytext hover:border-b-4 hover:border-button py-1'>Sobre Mi</a>
                </li>
                <li className='mr-8'>
                    <a 
                      href="#idSkills" 
                      className='font-merri text-primarytext hover:border-b-4 hover:border-button py-1'>
                        Conocimientos
                    </a>
                </li>
                <li className='mr-8'>
                    <a href="#idProjects" className='font-merri text-primarytext hover:border-b-4 hover:border-button py-1'>Proyectos</a>
                </li>
                <li className='mr-8'>
                    <a href="#idContact" className='font-merri text-primarytext hover:border-b-4 hover:border-button py-1'>Contacto</a>
                </li>
            </ul>
        </nav>
  )
}

export default Nav