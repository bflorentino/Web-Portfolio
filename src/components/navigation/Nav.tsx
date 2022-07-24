import React, { useContext } from 'react'
import { langContext } from '../../context/langsContext'
import Text from '../../language/Text'

const Nav = () => {

    const { handleLanguage, language } = useContext(langContext)

    return (
        <nav className='w-full flex justify-between bg-primary fixed z-10'>
            <div className='bg-button ml-16 p-2 h-[70px] rounded-b-full'>
                <p className='text-white text-2xl font-bold'>Bryan</p>
            </div>
            <ul className='flex mt-4'>
                <li className='mr-8 '>
                    <a href="#idAbout" className='font-merri text-primarytext hover:border-b-4 hover:border-button py-1'><Text tid='navAbout' /></a>
                </li>
                <li className='mr-8'>
                    <a 
                      href="#idSkills" 
                      className='font-merri text-primarytext hover:border-b-4 hover:border-button py-1'>
                        <Text tid='navSkills' />
                    </a>
                </li>
                <li className='mr-8'>
                    <a href="#idProjects" className='font-merri text-primarytext hover:border-b-4 hover:border-button py-1'><Text tid='navProjects' /></a>
                </li>
                <li className='mr-8'>
                    <a href="#idContact" className='font-merri text-primarytext hover:border-b-4 hover:border-button py-1'><Text tid='navContact' /></a>
                </li>
                <li className='mr-8'>
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
        </nav>
  )
}

export default Nav