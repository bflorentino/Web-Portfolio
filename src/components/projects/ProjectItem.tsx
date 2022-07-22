import React from 'react'
import { projectData } from './Projects'

const ProjectItem = ({name, 
                    technologies, 
                    githubRepository, 
                    linkToDemo,
                    description, 
                    picture }: projectData) => {
  return (
    <div className='w-1/3 ml-8 pb-8 '>
        
        <div className='flex flex-col items-center bg-[#171717] rounded-lg  py-2'>
            <div className='flex w-1/4 justify-evenly pb-4'>
                <span className='rounded-full bg-button w-4 h-4'></span>
                <span  className='rounded-full bg-button w-4 h-4' ></span>
                <span  className='rounded-full bg-button w-4 h-4'></span>
            </div>

            {
                typeof picture !== 'undefined' && <img src={picture} alt="" className='w-72 rounded-lg' />
            } 
            <h1 className='text-white font-bold font-ptsans text-2xl mt-1'>{name}</h1>
            <p className='text-white font-noto text-[16px] py-2 px-4'>{description}</p>

            <div className='text-white w-full px-4'>
                <p className='font-bold'>Tecnologías utilizadas: </p>
                {
                    technologies.map(tec => (
                        <li key={tec}> {tec}</li>
                    ) )
                }
            </div>

            <div className='flex w-full justify-center mt-4'>
                <a href={githubRepository} target='_blanck' className='border-2 border-button rounded-lg font-merri px-2 py-3 hover:bg-button hover: text-white' >Ver en Github 
                </a>
                {
                    typeof picture !== 'undefined' && <a href={linkToDemo} target='_blanck' className='border-2 border-button rounded-lg font-merri px-2 py-3 hover:bg-button hover: text-white ml-8'>Probar</a>
                } 
            </div>
        </div>
    </div>
  )
}

export default ProjectItem