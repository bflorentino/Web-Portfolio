import React, { useEffect } from 'react'
import Icon from './Icon'
import AOS from 'aos'
import "aos/dist/aos.css";
import Text from '../../language/Text';

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

    useEffect(()=> {
        AOS.init()
        AOS.refresh()
    })

  return (
    <>
        <div className='flex w-full bg-primary py-20 justify-center flex-wrap' id='idSkills' >
        <div className='w-full text-center pb-8 mt-12'>
            <h1 className='font-ptsans text-5xl font-bold text-center '>
                <span className='text-primarytext border-b-4 border-button'>⚙ <Text tid='me' /> </span>
                <span className='text-button border-b-4 border-white'><Text tid='skillsTitle' /></span>
            </h1>
            <p className='text-white text-sm mt-4'><Text tid='skillsMessage' /></p>
        </div>
 
        <div className=' w-1/5 p-1 rounded-xl hover:border-4 hover:border-white hover:border-l-button hover:border-t-button' data-aos="zoom-in">
            <h1 className='text-white font-noto font-bold text-lg text-center'><Text tid='skillsFrontend'/></h1>
            <div className='flex flex-col w-full '>
                {
                    pathsFrontend.map(icon => (
                        <Icon key={icon.iconName} iconPath={icon.iconPath} iconName={icon.iconName} color={icon.color}  />
                        ))
                    }
            </div>
        </div>

        <div className='w-1/5 ml-8 p-1 rounded-xl hover:border-4 hover:border-button hover:border-l-white hover:border-t-white' data-aos="zoom-in">
            <h1 className='text-white font-noto font-bold text-lg text-center'><Text tid='skillsBackend' /></h1>
            <div className='flex flex-col w-full'>
                {
                    pathsBackend.map(icon => (
                        <Icon key={icon.iconName} iconPath={icon.iconPath} iconName={icon.iconName} color={icon.color} />
                        ))
                }
            </div>
        </div>
        <div className='w-1/5 ml-8 p-1 rounded-xl hover:border-4 hover:border-white hover:border-l-button hover:border-t-button' data-aos="zoom-in">
            <h1 className='text-white font-noto font-bold text-lg text-center'><Text tid='skillsOthers' /></h1>
            <div className='flex flex-col w-full'>
                {
                    pathsOthers.map(icon => (
                        <Icon key={icon.iconName} iconPath={icon.iconPath} iconName={icon.iconName} color={icon.color} />
                        ))
                }
            </div>
        </div>
        <div className='w-1/5 ml-8 p-1 rounded-xl hover:border-4 hover:border-button hover:border-l-white hover:border-t-white' data-aos="zoom-in">
            <h1 className='text-white font-noto font-bold text-lg text-center'><Text tid='skillsCurrent' /></h1>
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