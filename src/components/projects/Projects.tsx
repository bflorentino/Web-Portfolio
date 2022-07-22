import React from 'react'
import ProjectItem from './ProjectItem'

export interface projectData {
  name: string,
  description: string,
  picture: string | undefined,
  githubRepository: string,
  linkToDemo: string | undefined,
  technologies : string[]
}

const projects : projectData[] = [
  {
    name: 'BxType App',
    description: "Un test de mecanografía. Prueba tu velocidad y precisión al usar el teclado, con tests de 1, 2 o 3 minutos en ingles y español",
    picture: '../../assets/images/bxtype-white.png',
    githubRepository: 'https://github.com/bflorentino/BxType-App.git',
    linkToDemo: 'https://bxtype.netlify.app/',
    technologies: ["React js", "Tailwind"]
  },
  {
    name: 'Contact Book',
    description: "Una agenda de contactos. Puedes guardar información de tus contactos y editarlos con un diseño muy adaptado a dispositivos móviles.",
    picture: '../../assets/images/contat-book.png',
    githubRepository: 'https://github.com/bflorentino/React-Contact-Book.git',
    linkToDemo: 'https://brncontacts.netlify.app/',
    technologies: ["React js", "Tailwind"]
  }
]

const Projects = () => {
  return (
    <div  className='flex flex-col items-center w-full bg-primary py-4  flex-wrap'>
      <h1 className='font-ptsans text-5xl font-bold t w-full text-center pb-8'> 
      <span className='text-primarytext border-b-4 border-button'> 💻 Mis </span>
      <span className='text-button border-b-4 border-white'> Proyectos</span>
    </h1>

    <p className='border-l-2 border-button px-4 py-12 text-white'>
      Esta es una colección de algunos proyectos que he trabajado recientemente.
    </p>
    <div className='flex  justify-center mt-8 flex-wrap w-3/4'>
    {
      projects.map(project => (
        <ProjectItem key={project.name} 
            name={project.name} 
            githubRepository={project.githubRepository}
            linkToDemo={project.linkToDemo}
            description={project.description}
            technologies={project.technologies}
            picture={project.picture} 
            />
            ))
          }
    </div>
    
    </div>
  )
}

export default Projects