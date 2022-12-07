import React, { useContext } from 'react'
import { langContext } from '../../context/langsContext'
import Text from '../../language/Text'

const Nav = () => {

    const { handleLanguage, language } = useContext(langContext)

    const handleOpenNav = () => {
        document.getElementById("navlinks")?.classList.toggle("hidden")
        document.getElementById("navlinks")?.classList.toggle('flex')
        document.getElementById("btn-menu")?.classList.toggle("close")
    }

    return (
        <>
            <nav className='bg-primary flex flex-row w-full justify-between minitablet:bg-primary fixed z-10' id='navbar'>
                <div className='bg-button ml-2 minilaptop:ml-16 p-1 h-[50px] minilaptop:p-2 minitablet:h-[70px] rounded-b-full'>
                    <p className='text-white minilaptop:text-2xl font-bold'>Bryan</p>
                </div>

                <ul className='hidden minitablet:flex flex-col minitablet:flex-row ml-4 minitablet:ml-0 minitablet:mt-4 text-[12px] minilaptop:text-[16px]' id='navlinks'>
                    <li className='mr-3 minilaptop:mr-8 mt-2 minitablet:mt-0'>
                        <a href="#idAbout" className='font-merri text-primarytext hover:border-b-4 hover:border-button py-1'>
                            <Text tid='navAbout' />
                        </a>
                    </li>
                    <li className='mr-3 minilaptop:mr-8 mt-2 minitablet:mt-0'>
                        <a 
                        href="#idSkills" 
                        className='font-merri text-primarytext hover:border-b-4 hover:border-button py-1'>
                            <Text tid='navSkills' />
                        </a>
                    </li>
                    <li className='mr-3 minilaptop:mr-8 mt-2 minitablet:mt-0'>
                        <a href="#idProjects" className='font-merri text-primarytext hover:border-b-4 hover:border-button py-1'>
                            <Text tid='navProjects' />
                        </a>
                    </li>
                    <li className='mr-3 minilaptop:mr-8 mt-2 minitablet:mt-0'>
                        <a href="#idContact" className='font-merri text-primarytext hover:border-b-4 hover:border-button py-1'>
                            <Text tid='navContact' />
                        </a>
                    </li>
                    <li className='mr-3 minilaptop:mr-8 mt-2 minitablet:mt-0'>
                        <button 
                            className='flex items-center font-merri text-primarytext hover:border-b-4 hover:border-button'
                            onClick={language === 'es' ? () => handleLanguage('en') : () => handleLanguage('es')}>
                            {
                                language === 'es' 
                                    ? <> <img src="../../assets/images/us.png" alt="" className='w-6 mr-2' /> <Text tid='navEn' /> </>
                                    : <> <img src="../../assets/images/do.png" className='w-6 mr-2' alt="" /> <Text tid='navEs' /> </>
                            }
                        </button>
                    </li>
                </ul>
                
                <div 
                    className='flex flex-col h-[40px] items-end mr-1 minitablet:hidden text-white mt-2 z-20' 
                    id='btn-menu' 
                    onClick={handleOpenNav}
                >
                    <span className='w-[37px] h-[4px] mb-[5px] relative bg-button rounded' ></span>
                    <span className='w-[37px] h-[4px] mb-[5px] relative bg-button rounded'></span>
                    <span className='w-[37px] h-[4px] mb-[5px] relative bg-button rounded'> </span>
                </div>
            </nav>
        </>
  )
}

export default Nav