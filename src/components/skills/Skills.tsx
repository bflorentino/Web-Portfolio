import React from 'react'
import Icon from './Icon'

interface IconData {
    iconPath: string,
    iconName: string,
    color: string 
}

const pathsFrontend:IconData[] = [
    {
        iconPath: '../../assets/images/HTML.png',
        iconName: 'HTML',
        color:'bg-[#E34F26]'
    },
    {
        iconPath: '../../assets/images/CSS.png',
        iconName: 'CSS',
        color:'bg-[#0277BD]'
    },
    {
        iconPath: '../../assets/images/javascript.png',
        iconName: 'JavaScript',
        color:'bg-[#FFD600]'
    },
    {
        iconPath: '../../assets/images/react.png',
        iconName: 'React JS',
        color:'bg-[#39C1D7]'
    },
    {
        iconPath: '../../assets/images/tailwind.png',
        iconName: 'Tailwind CSS',
        color:'bg-[#01B7D6]'
    },
]

const pathsBackend:IconData[] = [
    {
        iconPath: '../../assets/images/c-sharp.png',
        iconName: 'C#',
        color:'bg-[#B14796]'
    },
    {
        iconPath: '../../assets/images/net.svg',
        iconName: '.Net',
        color:'bg-[#672A7A]'
    },
    {
        iconPath: '../../assets/images/mongodb.png',
        iconName: 'MongoDb',
        color:'bg-[#4CAF50]'
    },
    {
        iconPath: '../../assets/images/mysql.png',
        iconName: 'MySQL',
        color:'bg-[#F09109]'
    },
]

const pathsOthers:IconData[] = [
        
    {
        iconPath: '../../assets/images/git.png',
        iconName: 'Git',
        color:'bg-[#F4511E]'
    },
    {
        iconPath: '../../assets/images/vs code.png',
        iconName: 'Vs Code',
        color:'bg-[#29B6F6]'
    },

]

const pathsLearning:IconData[] = [
        
    {
        iconPath: '../../assets/images/nodejs.png',
        iconName: 'Node Js',
        color:'bg-[#37474F]'
    },
    {
        iconPath: '../../assets/images/typescript.png',
        iconName: 'Typescript',
        color:'bg-[#1976D2]'
    },
]

const Skills = () => {
  return (
    <>
        <div className='flex w-full bg-secondary mt-4 py-4 justify-center flex-wrap'>
        <h1 className='font-baloo text-4xl font-bold text-primarytext w-full ml-12 pb-8'>Mis herramientas</h1>
 
        <div className='flex flex-col w-1/5 '>
            <h1 className='text-white font-noto font-bold text-xl text-center'>Desarrollo frontend</h1>
            <div className='flex flex-col w-full '>
                {
                    pathsFrontend.map(icon => (
                        <Icon key={icon.iconName} iconPath={icon.iconPath} iconName={icon.iconName} color={icon.color}  />
                        ))
                    }
            </div>
        </div>

        <div className='w-1/5 ml-8'>
            <h1 className='text-white font-noto font-bold text-xl text-center'>Desarrollo backend</h1>
            <div className='flex flex-col w-full'>
                {
                    pathsBackend.map(icon => (
                        <Icon key={icon.iconName} iconPath={icon.iconPath} iconName={icon.iconName} color={icon.color} />
                        ))
                }
            </div>
        </div>
        <div className='w-1/5 ml-8'>
            <h1 className='text-white font-noto font-bold text-xl text-center'>Otras herramientas</h1>
            <div className='flex flex-col w-full'>
                {
                    pathsOthers.map(icon => (
                        <Icon key={icon.iconName} iconPath={icon.iconPath} iconName={icon.iconName} color={icon.color} />
                        ))
                }
            </div>
        </div>
        <div className='w-1/5 ml-8'>
            <h1 className='text-white font-noto font-bold text-xl text-center'>Aprendiendo actualmente</h1>
            <div className='flex flex-col w-full'>
                {
                    pathsLearning.map(icon => (
                        <Icon key={icon.iconName} iconPath={icon.iconPath} iconName={icon.iconName} color={icon.color} />
                        ))
                }
            </div>
        </div>
    </div>
  </>
  )
}

export default Skills