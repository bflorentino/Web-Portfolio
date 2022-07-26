import React, { useEffect } from 'react'
import Icon from './Icon'
import AOS from 'aos'
import "aos/dist/aos.css";
import Text from '../../language/Text';

interface IconData {
    iconPath: string,
    iconName: string,
    styles: string
}

const pathsFrontend:IconData[] = [
    {
        iconPath: '../../assets/images/HTML.png',
        iconName: 'HTML',
        styles: "bg-[#20232A] hover:bg-[#E34F26] w-3/4 h-8 flex items-center justify-center"
    },
    {
        iconPath: '../../assets/images/CSS.png',
        iconName: 'CSS',
        styles: "bg-[#20232A] hover:bg-[#0277BD] w-3/4 h-8 flex items-center justify-center"
    },
    {
        iconPath: '../../assets/images/javascript.png',
        iconName: 'JavaScript',
        styles: 'bg-[#20232A] hover:bg-[#CCC720] w-3/4 h-8 flex items-center justify-center'
    },
    {
        iconPath: '../../assets/images/react.png',
        iconName: 'React JS',
        styles: 'bg-[#20232A] hover:bg-[#39C1D7] w-3/4 h-8 flex items-center justify-center'
    },
    {
        iconPath: '../../assets/images/tailwind.png',
        iconName: 'Tailwind CSS',
        styles: 'bg-[#20232A] hover:bg-[#01B7D6] w-3/4 h-8 flex items-center justify-center'
        
    },
]

const pathsBackend:IconData[] = [
    {
        iconPath: '../../assets/images/c-sharp.png',
        iconName: 'C#',
        styles: 'bg-[#20232A] hover:bg-[#B14796] w-3/4 h-8 flex items-center justify-center'
    },
    {
        iconPath: '../../assets/images/net.svg',
        iconName: '.Net',
        styles: 'bg-[#20232A] hover:bg-[#672A7A] w-3/4 h-8 flex items-center justify-center'
    },
    {
        iconPath: '../../assets/images/mongodb.png',
        iconName: 'MongoDb',
        styles: 'bg-[#20232A] hover:bg-[#4CAF50] w-3/4 h-8 flex items-center justify-center'
    },
    {
        iconPath: '../../assets/images/mysql.png',
        iconName: 'MySQL',
        styles: 'bg-[#20232A] hover:bg-[#F09109] w-3/4 h-8 flex items-center justify-center'
    },
]

const pathsOthers:IconData[] = [
        
    {
        iconPath: '../../assets/images/git.png',
        iconName: 'Git',
        styles: 'bg-[#20232A] hover:bg-[#F4511E] w-3/4 h-8 flex items-center justify-center'
    },
    {
        iconPath: '../../assets/images/vs code.png',
        iconName: 'Vs Code',
        styles: 'bg-[#20232A] hover:bg-[#29B6F6] w-3/4 h-8 flex items-center justify-center'
    },

]

const pathsLearning:IconData[] = [
        
    {
        iconPath: '../../assets/images/nodejs.png',
        iconName: 'Node Js',
        styles: 'bg-[#20232A] hover:bg-[#37474F] w-3/4 h-8 flex items-center justify-center'
    },
    {
        iconPath: '../../assets/images/typescript.png',
        iconName: 'Typescript',
        styles: 'bg-[#20232A] hover:bg-[#1976D2] w-3/4 h-8 flex items-center justify-center'
    },
]

const Skills = () => {

    useEffect(()=> {
        AOS.init()
        AOS.refresh()
    })

  return (
    <>
        <div className='flex flex-col items-center minilaptop:items-start minilaptop:flex-row w-full bg-primary py-20 justify-center minilaptop:flex-wrap' id='idSkills' >
            <div className='w-full text-center pb-8 mt-12'>
                <h1 className='font-ptsans text-3xl minitablet:text-5xl font-bold text-center '>
                    <span className='text-primarytext border-b-4 border-button'>⚙ <Text tid='me' /> </span>
                    <span className='text-button border-b-4 border-white'> <Text tid='skillsTitle' /></span>
                </h1>
                <p className='text-white text-sm mt-4'><Text tid='skillsMessage' /></p>
            </div>
    
            <div className='flex flex-col items-center w-[90%] minilaptop:w-1/3 laptop:w-1/5 p-1 rounded-xl hover:border-4 hover:border-white hover:border-l-button hover:border-t-button' data-aos="zoom-in">
                <h1 className='text-white font-noto font-bold text-lg text-center'><Text tid='skillsFrontend'/></h1>
                <div className='flex flex-col w-full '>
                    {
                        pathsFrontend.map(icon => (
                            <Icon key={icon.iconName} iconPath={icon.iconPath} iconName={icon.iconName} styles={icon.styles}  />
                            ))
                        }
                </div>
            </div>

            <div className='flex flex-col items-center w-[90%] minilaptop:w-1/3 laptop:w-1/5 mt-6 minilaptop:mt-0  minilaptop:ml-8 p-1 rounded-xl hover:border-4 hover:border-button hover:border-l-white hover:border-t-white' data-aos="zoom-in">
                <h1 className='text-white font-noto font-bold text-lg text-center'><Text tid='skillsBackend' /></h1>
                <div className='flex flex-col w-full'>
                    {
                        pathsBackend.map(icon => (
                            <Icon key={icon.iconName} iconPath={icon.iconPath} iconName={icon.iconName} styles={icon.styles} />
                            ))
                    }
                </div>
            </div>
            <div className='flex flex-col items-center w-[90%] minilaptop:w-1/3 laptop:w-1/5  mt-6 laptop:mt-0  minilaptop:ml-8 p-1 rounded-xl hover:border-4 hover:border-white hover:border-l-button hover:border-t-button' data-aos="zoom-in">
                <h1 className='text-white font-noto font-bold text-lg text-center'><Text tid='skillsOthers' /></h1>
                <div className='flex flex-col w-full'>
                    {
                        pathsOthers.map(icon => (
                            <Icon key={icon.iconName} iconPath={icon.iconPath} iconName={icon.iconName} styles={icon.styles} />
                            ))
                    }
                </div>
            </div>
            <div className='flex flex-col items-center w-[90%] minilaptop:w-1/3 laptop:w-1/5 mt-6 laptop:mt-0 minilaptop:ml-8 p-1 rounded-xl hover:border-4 hover:border-button hover:border-l-white hover:border-t-white' data-aos="zoom-in">
                <h1 className='text-white font-noto font-bold text-lg text-center'><Text tid='skillsCurrent' /></h1>
                <div className='flex flex-col w-full'>
                    {
                        pathsLearning.map(icon => (
                            <Icon key={icon.iconName} iconPath={icon.iconPath} iconName={icon.iconName} styles={icon.styles} />
                            ))
                    }
                </div>
            </div>
    </div>
  </>
  )
}

export default Skills