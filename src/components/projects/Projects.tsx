import React, { useContext } from 'react'
import { langContext } from '../../context/langsContext'
import Text from '../../language/Text'
import ProjectItem from './ProjectItem'

export interface projectData {
  name: string,
  picture: string | undefined,
  description: string
  githubRepository: string,
  linkToDemo: string | undefined,
  technologies : string[]
}

const projects : projectData[] = [
  {
    name: 'BxType App',
    description : " ",
    picture: '../../assets/images/bxtype-white.png',
    githubRepository: 'https://github.com/bflorentino/BxType-App.git',
    linkToDemo: 'https://bxtype.netlify.app/',
    technologies: ["React Js", "Tailwind"]
  },
  {
    name: 'Contact Book',
    description : " ",
    picture: '../../assets/images/contat-book.png',
    githubRepository: 'https://github.com/bflorentino/React-Contact-Book.git',
    linkToDemo: 'https://brncontacts.netlify.app/',
    technologies: ["React Js", "Tailwind"]
  },
  {
    name: 'NetBanking Web App',
    description : " ",
    picture: '../../assets/images/netbanking.png',
    githubRepository: 'https://github.com/bflorentino/Netbanking-System-WebAPP.git',
    linkToDemo: undefined,
    technologies: ["C#", "ASP.NET", "MVC", "Razor", "Entity Framework", "SQL Server"]
  },
  {
    name: 'My Portfolio',
    description: "Mi portafolio Web",
    picture: '../../assets/images/portfolio.png',
    githubRepository: 'https://github.com/bflorentino/Web-Portfolio.git',
    linkToDemo: undefined,
    technologies: ["React Js", "Tailwind", "TypeScript" ]
  }
]

const Projects = () => {
  
  const {dictionary} = useContext(langContext);

  return (
    <div  className='flex flex-col items-center w-full bg-primary pt-16  flex-wrap' id='idProjects'>
      <h1 className='font-ptsans text-5xl font-bold t w-full text-center pb-8'> 
      <span className='text-primarytext border-b-4 border-button'> 💻 <Text tid='me' /> </span>
      <span className='text-button border-b-4 border-white'> <Text tid='projectsTitle' /></span>
    </h1>

    <p className='border-l-2 border-button px-4 py-12 text-white'>
      <Text tid='projectsMessage' />
    </p>
    <div className='flex justify-center mt-8 flex-wrap w-full'>
    {
  
      projects.map((project, i) => (
        <ProjectItem key={project.name} 
            name={project.name} 
            githubRepository={project.githubRepository}
            linkToDemo={project.linkToDemo}
            description={dictionary.projectsInfo[i]}
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